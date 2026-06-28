/**
 * Creem Webhook Handler
 * Route: POST /api/webhooks/creem
 *
 * This endpoint receives real-time payment event notifications from Creem,
 * our payment provider for one-time license purchases (both the 1-year Pro
 * license and the lifetime Unlimited license).
 *
 * SECURITY: Every incoming request is verified using HMAC-SHA256 before any
 * processing happens. Creem signs the raw request body with our webhook secret
 * and sends the hex digest in the `creem-signature` header. We recompute the
 * signature on our side and reject anything that doesn't match. This prevents
 * unauthorized parties from triggering license creation or revocation.
 *
 * IMPORTANT: We must read the body as raw text (req.text()) before parsing it
 * as JSON. The HMAC is computed over the exact bytes Creem sent — parsing and
 * re-serializing would change whitespace and break the signature comparison.
 *
 * Handled events:
 *
 *   checkout.completed
 *     Fired when a customer successfully pays. We:
 *       1. Verify the order status is "paid"
 *       2. Create or update the User from Creem's customer details
 *       3. Generate a unique license key and create a License record in our DB
 *
 *   dispute.created
 *     Fired when a customer files a chargeback with their bank. We disable all
 *     of that customer's licenses so they can no longer use the product while
 *     the dispute is open.
 */

import * as crypto from "crypto";
import { headers } from "next/headers";
import moment from "moment";

// import { generateUniqueLicenseKey } from "@/lib/creem";
import { prisma } from "@/lib/db";
import type {
  CreemWebhookCheckout,
  CreemWebhookDispute,
  CreemWebhookEvent,
} from "@/types/creem";
import { LicenseStatus } from "@prisma/client";

/**
 * Verifies the webhook request is genuinely from Creem.
 *
 * Creem computes HMAC-SHA256 over the raw request body using our webhook
 * secret, then hex-encodes the digest and sends it in the `creem-signature`
 * header. We do the same computation and compare the two strings.
 *
 * @param payload   - Raw request body string (must not be parsed/modified)
 * @param signature - Value from the `creem-signature` header
 * @param secret    - Our webhook secret (STRIPE_WEBHOOK_SECRET env var)
 */
function verifyCreemSignature(
  payload: string,
  signature: string,
  secret: string,
): boolean {
  const computedSignature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");
  return computedSignature === signature;
}

export async function POST(req: Request) {
  // Read raw body text — required for signature verification.
  // Do NOT call req.json() here; that would prevent us from reading the body again.
  const body = await req.text();
  const headersList = headers();
  const signature = headersList.get("creem-signature");

  // Reject the request immediately if the signature is missing or invalid.
  // This is the first line of defense against spoofed webhook calls.
  if (
    !signature ||
    !verifyCreemSignature(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    )
  ) {
    return new Response("Invalid signature", { status: 401 });
  }

  // Safe to parse now that authenticity is confirmed.
  const event = JSON.parse(body) as CreemWebhookEvent;

  try {
    // -----------------------------------------------------------------------
    // checkout.completed
    // A customer has successfully paid for a product. Generate a license key
    // and record it in the database.
    // -----------------------------------------------------------------------
    if (event.eventType === "checkout.completed") {
      const checkout = event.object as CreemWebhookCheckout;
      const { order, customer, product } = checkout;

      // Guard: only proceed if payment was actually collected.
      if (order.status === "paid") {
        const existingUser = await prisma.user.findUnique({
          where: { email: customer.email },
          select: { id: true },
        });

        // Ensure a User record exists before we attach a license. Many customers
        // complete checkout before signing in, so we create the account here
        // from Creem's customer details (email, name, customer ID).
        const user = await prisma.user.upsert({
          where: { email: customer.email },
          create: {
            email: customer.email,
            name: customer?.name ?? null,
            stripeCustomerId: customer.id,
          },
          update: {
            stripeCustomerId: customer.id,
          },
        });

        if (existingUser) {
          console.log(
            `[Creem] checkout.completed: updated user ${user.id} (${customer.email})`,
          );
        } else {
          console.log(
            `[Creem] checkout.completed: created user ${user.id} (${customer.email})`,
          );
        }

        // Generate a license key in the format ARCO-XXXX-XXXX-XXXX-XXXX,
        // verified to not already exist in our License table before use.
        // Creem does not provide a key in the checkout payload — we create
        // one ourselves and store it in our database.
        // const licenseKey = await generateUniqueLicenseKey();

        const licenseKey = checkout.license_keys?.[0]?.key;
        if (!licenseKey) {
          throw new Error(
            `[Creem] checkout.completed: missing license key for order ${order.id}`,
          );
        }

        // Create the License record in our database. productId comes from
        // the checkout payload; activationLimit uses schema default (1).
        // The lifetime (Unlimited) product never expires; every other
        // product gets the standard 1-year (Pro) expiry.
        await prisma.license.create({
          data: {
            userId: user.id,
            productId: product.id,
            key: licenseKey,
            status: LicenseStatus.INACTIVE, // Activated when first used in the app
            expiresAt:
              product.id === process.env.NEXT_PUBLIC_STRIPE_LIFETIME_PLAN_ID
                ? null
                : moment().add(365, "days").endOf("day").toDate(),
          },
        });

        console.log(
          `[Creem] checkout.completed: created license for user ${user.id}, product ${product.id}, order ${order.id}, key ${licenseKey}`,
        );
      }
    }

    // -----------------------------------------------------------------------
    // dispute.created
    // A customer has filed a chargeback with their bank. Disable all of their
    // licenses to prevent continued use of the product while the dispute is open.
    // If the dispute is resolved in the customer's favour we would need to
    // manually re-enable their licenses via the admin panel.
    // -----------------------------------------------------------------------
    if (event.eventType === "dispute.created") {
      const dispute = event.object as CreemWebhookDispute;
      const { customer } = dispute;

      const user = await prisma.user.findUnique({
        where: { email: customer.email },
      });

      if (user) {
        // Disable every license belonging to this user in a single query.
        const { count } = await prisma.license.updateMany({
          where: { userId: user.id },
          data: { status: LicenseStatus.DISABLED },
        });

        console.log(
          `[Creem] dispute.created: disabled ${count} license(s) for user ${user.id} (${customer.email})`,
        );
      }
    }

    console.log(`[Creem] Webhook processed: ${event.eventType} (${event.id})`);
  } catch (error) {
    console.error("[Creem] Webhook processing error:", error);
    // Return 500 so Creem knows to retry the event delivery.
    return new Response("Webhook processing failed", { status: 500 });
  }

  return new Response("Webhook processed", { status: 200 });
}
