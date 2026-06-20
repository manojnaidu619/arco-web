/**
 * License Activation Handler
 * Route: POST /api/licenses/activate
 *
 * Desktop clients (Mac app, etc.) call this endpoint after purchase to activate
 * a license key. No web session is required — the key and device identifier
 * are the credentials.
 *
 * Request body:
 *   { "key": "ARCO-XXXX-XXXX-XXXX-XXXX", "deviceId": "<stable-device-id>" }
 *
 * Response (always 200, same shape for success and failure):
 *   { "isActivated": true,  "expiresAt": "2026-01-01T00:00:00.000Z" | null, "message": null }
 *   { "isActivated": false, "expiresAt": null, "message": "<user-facing message>" }
 *
 * SECURITY: Client responses are intentionally generic so callers cannot infer
 * whether a key exists, is already used, disabled, or expired. Detailed failure
 * reasons are logged server-side only via console.error below.
 *
 * Policy: one activation per key. Re-activation attempts are rejected. A separate
 * validate endpoint will be needed later for reinstall flows.
 */

import { siteConfig } from "@/config/site";
import { prisma } from "@/lib/db";
import { LicenseStatus } from "@prisma/client";

// Matches keys generated in lib/creem.ts — same charset, no ambiguous chars (0, O, I, 1).
const LICENSE_KEY_REGEX =
  /^ARCO-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}$/;

const ERROR_INVALID_INPUT =
  "Unable to activate license. Please check your details and try again.";
const ERROR_ACTIVATION_FAILED = `Unable to activate license. If you need help, please contact support at ${siteConfig.mailSupport}.`;
const ERROR_SERVER = `Something went wrong. Please try again later or contact support at ${siteConfig.mailSupport}.`;

/** Builds the unified activation response consumed by desktop clients. */
function activationResponse(
  isActivated: boolean,
  expiresAt: Date | null,
  message: string | null,
) {
  return Response.json({
    isActivated,
    expiresAt: expiresAt?.toISOString() ?? null,
    message,
  });
}

/** Last two key segments for logs — enough to correlate without exposing the full secret. */
function getKeySuffix(key: string): string {
  const segments = key.split("-");
  return segments.length >= 2
    ? `${segments[segments.length - 2]}-${segments[segments.length - 1]}`
    : key.slice(-9);
}

export async function POST(req: Request) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    console.error("[License] Activation failed", {
      reason: "VALIDATION_ERROR",
      detail: "Request body is not valid JSON",
    });
    return activationResponse(false, null, ERROR_INVALID_INPUT);
  }

  // --- Validate and normalize input ---

  const rawKey =
    body && typeof body === "object" && body !== null && "key" in body
      ? (body as { key: unknown }).key
      : undefined;
  const rawDeviceId =
    body && typeof body === "object" && body !== null && "deviceId" in body
      ? (body as { deviceId: unknown }).deviceId
      : undefined;

  // Uppercase and strip spaces so lookup matches how keys are stored in the DB.
  const normalizedKey =
    typeof rawKey === "string"
      ? rawKey.trim().toUpperCase().replace(/\s+/g, "")
      : "";
  const deviceId =
    typeof rawDeviceId === "string" ? rawDeviceId.trim() : "";

  const keyValid = LICENSE_KEY_REGEX.test(normalizedKey);
  const deviceIdValid = deviceId.length > 0 && deviceId.length <= 256;

  if (!keyValid || !deviceIdValid) {
    console.error("[License] Activation failed", {
      reason: "VALIDATION_ERROR",
      keySuffix: keyValid ? getKeySuffix(normalizedKey) : null,
      deviceId: deviceId || null,
      keyValid,
      deviceIdValid,
    });
    return activationResponse(false, null, ERROR_INVALID_INPUT);
  }

  // --- Activate license inside a transaction ---
  //
  // Prisma opens a transaction, runs the callback, then always closes it:
  //   - callback returns normally → COMMIT, connection returned to the pool
  //   - callback throws          → ROLLBACK, connection returned to the pool
  // No manual cleanup is required; the tx client only lives for this callback.

  try {
    const license = await prisma.$transaction(async (tx) => {
      const existing = await tx.license.findUnique({
        where: { key: normalizedKey },
      });

      if (!existing) {
        console.error("[License] Activation failed", {
          reason: "NOT_FOUND",
          keySuffix: getKeySuffix(normalizedKey),
          deviceId,
        });
        return null;
      }

      // Only INACTIVE licenses can be activated. ACTIVE / DISABLED / EXPIRED all fail.
      if (existing.status !== LicenseStatus.INACTIVE) {
        console.error("[License] Activation failed", {
          reason: "NOT_INACTIVE",
          keySuffix: getKeySuffix(normalizedKey),
          deviceId,
          licenseId: existing.id,
          status: existing.status,
          activatedAt: existing.activatedAt,
          existingDeviceId: existing.deviceIdentifier,
        });
        return null;
      }

      // Check if the license has expired
      if (existing.expiresAt && existing.expiresAt < new Date()) {
        console.error("[License] Activation failed", {
          reason: "EXPIRED",
          keySuffix: getKeySuffix(normalizedKey),
          deviceId,
          licenseId: existing.id,
          expiresAt: existing.expiresAt,
        });
        return null;
      }

      // Conditional update: only succeeds if still INACTIVE at write time.
      // Prevents double-activation when two devices race on the same key.
      const { count } = await tx.license.updateMany({
        where: { id: existing.id, status: LicenseStatus.INACTIVE },
        data: {
          status: LicenseStatus.ACTIVE,
          activatedAt: new Date(),
          deviceIdentifier: deviceId,
        },
      });

      if (count === 0) {
        console.error("[License] Activation failed", {
          reason: "CONCURRENT_ACTIVATION",
          keySuffix: getKeySuffix(normalizedKey),
          deviceId,
          licenseId: existing.id,
        });
        return null;
      }

      // Return the updated license
      return tx.license.findUniqueOrThrow({ where: { id: existing.id } });
    });

    if (!license) {
      return activationResponse(false, null, ERROR_ACTIVATION_FAILED);
    }

    console.log("[License] Activation succeeded", {
      licenseId: license.id,
      keySuffix: getKeySuffix(normalizedKey),
      deviceId,
    });

    return activationResponse(true, license.expiresAt, null);
  } catch (error) {
    console.error("[License] Activation failed", {
      reason: "UNEXPECTED_ERROR",
      keySuffix: getKeySuffix(normalizedKey),
      deviceId,
      error:
        error instanceof Error
          ? { message: error.message, stack: error.stack }
          : error,
    });
    return activationResponse(false, null, ERROR_SERVER);
  }
}
