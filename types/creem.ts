/**
 * Creem Payment Provider — TypeScript Type Definitions
 *
 * Creem is our payment provider for one-time lifetime license purchases.
 * These types cover two distinct areas:
 *
 * 1. WEBHOOK PAYLOADS — the shape of events Creem sends to our webhook endpoint
 *    (POST /api/webhooks/creem). Each event has a top-level `eventType` and an
 *    `object` field whose structure depends on that event type.
 *
 * 2. LICENSE API RESPONSE — the shape returned by Creem's license activation
 *    endpoint (POST /v1/licenses/activate), which we call after a successful
 *    purchase to register the license against the customer.
 *
 * Creem reuses the same Stripe-style naming convention (customer, order, product)
 * but is a separate provider. The API key and webhook secret live in the
 * STRIPE_API_KEY and STRIPE_WEBHOOK_SECRET env vars for compatibility with the
 * existing n8n-chat-ui project this was ported from.
 */

// ---------------------------------------------------------------------------
// Webhook payload types
// These interfaces describe the nested objects that Creem sends inside webhook
// event payloads. The top-level shape is always CreemWebhookEvent.
// ---------------------------------------------------------------------------

/** Represents a completed purchase order from Creem. */
export interface CreemWebhookOrder {
  id: string;
  customer: string; // Creem customer ID
  product: string; // Creem product ID
  amount: number; // Amount charged, in smallest currency unit (e.g. cents)
  currency: string;
  status: "paid" | string;
  type: "onetime" | "recurring";
  created_at: string;
  updated_at: string;
  mode: string; // "test" | "prod" | "sandbox"
  discount: string; // Creem coupon ID applied to this order, if any
}

/** The customer who made the purchase. Used to look up our User by email. */
export interface CreemWebhookCustomer {
  id: string; // Creem customer ID — stored as stripeCustomerId on User
  object: "customer";
  email: string;
  name: string;
  country: string;
  created_at: string;
  updated_at: string;
  mode: string;
}

/** The product that was purchased. */
export interface CreemWebhookProduct {
  id: string;
  name: string;
  description: string;
  image_url: string | null;
  price: number;
  currency: string;
  billing_type: "onetime" | "recurring";
  billing_period: string;
  status: string;
  tax_mode: string;
  tax_category: string;
  default_success_url: string;
  created_at: string;
  updated_at: string;
  mode: string;
}

/**
 * The checkout session object, sent as `event.object` for checkout.completed.
 * Contains the order, product, and customer details we need to identify the
 * purchase and look up the user in our database.
 *
 * Note: Creem does NOT include a license key in this payload. We generate
 * our own license key on receipt of this event and send it to Creem's
 * activate endpoint — see generateLicenseKey() in lib/creem.ts.
 */
export interface CreemWebhookCheckout {
  id: string;
  object: "checkout";
  request_id: string;
  order: CreemWebhookOrder;
  product: CreemWebhookProduct;
  customer: CreemWebhookCustomer;
  custom_fields: unknown[];
  status: "completed" | string;
  mode: string;
}

/** A financial transaction record, nested inside dispute events. */
export interface CreemWebhookTransaction {
  id: string;
  object: "transaction";
  amount: number;
  amount_paid: number;
  currency: string;
  type: string;
  tax_country: string;
  tax_amount: number;
  status: string;
  refunded_amount: number;
  order: string;
  subscription: string;
  customer: string;
  description: string;
  period_start: number;
  period_end: number;
  created_at: number;
  mode: string;
}

/** Subscription details, included in dispute events for recurring products. */
export interface CreemWebhookSubscription {
  id: string;
  object: "subscription";
  product: string;
  customer: string;
  collection_method: string;
  status: string;
  current_period_start_date: string;
  current_period_end_date: string;
  canceled_at: string | null;
  created_at: string;
  updated_at: string;
  mode: string;
}

/**
 * Dispute event object, sent as `event.object` for dispute.created.
 * A dispute means the customer filed a chargeback with their bank.
 * We respond by disabling their licenses.
 */
export interface CreemWebhookDispute {
  id: string;
  object: "dispute";
  amount: number;
  currency: string;
  transaction: CreemWebhookTransaction;
  subscription: CreemWebhookSubscription;
  checkout: CreemWebhookCheckout;
  order: CreemWebhookOrder;
  customer: CreemWebhookCustomer;
  created_at: number;
  mode: string;
}

/** Union of all possible event object shapes. */
export type CreemWebhookEventObject = CreemWebhookCheckout | CreemWebhookDispute;

/**
 * Top-level structure of every webhook event Creem sends.
 * The `eventType` field determines how to interpret `object`.
 *
 * Handled event types:
 *   - "checkout.completed" → object is CreemWebhookCheckout
 *   - "dispute.created"    → object is CreemWebhookDispute
 */
export interface CreemWebhookEvent {
  id: string;
  eventType: string;
  created_at: number;
  object: CreemWebhookEventObject;
}

// ---------------------------------------------------------------------------
// License API response types
// Returned by POST /v1/licenses/activate after a successful purchase.
// We use these fields to populate the License table in our database.
// ---------------------------------------------------------------------------

/**
 * Represents an individual activation instance of a license.
 * Each call to /activate creates one instance tied to a named context
 * (e.g. the customer's email address).
 */
export interface CreemLicenseInstance {
  id: string; // Instance ID — needed if we ever call /validate or /deactivate
  name: string; // The instance_name we passed when activating
}

/**
 * The license entity returned by POST /v1/licenses/activate.
 * Field mapping to our License DB model:
 *   id               → License.licenseId
 *   key              → License.key
 *   product_id       → License.productId
 *   activation       → License.activationCount
 *   activation_limit → License.activationLimit
 *   expires_at       → License.expiresAt
 *   mode             → License.mode (mapped via mapMode())
 */
export interface CreemLicenseEntity {
  id: string; // Creem's unique license ID
  key: string; // The actual license code shown to the customer
  mode: string; // "test" | "prod" | "sandbox"
  object: string;
  product_id: string;
  status: string; // "active" | "inactive" | "expired" | "disabled"
  activation: number; // How many times this license has been activated so far
  activation_limit: number | null; // Max allowed activations; null means unlimited
  expires_at: string | null; // ISO date string, or null if the license never expires
  created_at: string;
  instance: CreemLicenseInstance | null; // The instance created by this activation call
}
