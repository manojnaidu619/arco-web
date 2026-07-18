/**
 * License key generation for Creem purchases.
 *
 * When a checkout.completed webhook confirms payment, we generate a unique
 * license key and store it in our database. Creem handles payments only —
 * license storage and management live entirely in our system.
 */

import { prisma } from "@/lib/db";
import * as crypto from "crypto";
import { isDevelopment } from "./env";

const CREEM_BASE_URL =
  isDevelopment
    ? "https://test-api.creem.io"
    : "https://api.creem.io";

/**
 * Characters used when generating a license key segment.
 * Ambiguous characters (0, O, I, 1, l) are intentionally excluded so the key
 * is easy to read and type without misreading a letter as a digit.
 */
const LICENSE_KEY_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

/**
 * Generates a single segment of `length` random characters from LICENSE_KEY_CHARS.
 * Uses crypto.randomBytes for cryptographically secure randomness — Math.random()
 * is not suitable here because license keys must be unpredictable.
 */
function generateSegment(length: number): string {
  return Array.from(crypto.randomBytes(length))
    .map((byte) => LICENSE_KEY_CHARS[byte % LICENSE_KEY_CHARS.length])
    .join("");
}

/**
 * Generates a new license key in the format: XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
 *
 * Five segments of 5 characters each drawn from a 32-character alphabet
 * (uppercase letters + digits, excluding ambiguous characters).
 *
 * Example output: 69UZQ-8J85F-28SXB-MCUS3-ZGA5Q
 */
export function generateLicenseKey(): string {
  return [
    generateSegment(5),
    generateSegment(5),
    generateSegment(5),
    generateSegment(5),
    generateSegment(5),
  ].join("-");
}

/**
 * Generates a license key guaranteed to be unique in our database.
 *
 * Calls generateLicenseKey() in a loop, checking the License table after
 * each attempt. In practice a collision is astronomically unlikely (32-char
 * alphabet across 16 positions = 32^16 ≈ 1.2 × 10^24 possible keys), but we
 * verify anyway so there's no theoretical risk of issuing a duplicate key to
 * two different customers.
 *
 * The loop is capped at 10 attempts. If all 10 collide something is deeply
 * wrong with the random source, and we throw rather than loop indefinitely.
 */
export async function generateUniqueLicenseKey(): Promise<string> {
  const MAX_ATTEMPTS = 10;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const key = generateLicenseKey();

    // Check whether this key already exists in the License table.
    const existing = await prisma.license.findUnique({ where: { key } });

    if (!existing) {
      return key; // Key is unique — safe to use.
    }

    console.warn(
      `License key collision on attempt ${attempt}/${MAX_ATTEMPTS}, regenerating...`,
    );
  }

  throw new Error(
    `Failed to generate a unique license key after ${MAX_ATTEMPTS} attempts.`,
  );
}
