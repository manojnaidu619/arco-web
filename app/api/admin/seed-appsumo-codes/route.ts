/**
 * DISABLED — seeds 1500 pre-generated AppSumo license codes into the licenses table.
 *
 * The handler below is commented out so this file doesn't register a route
 * (Next.js only picks up HTTP methods that are actually exported). To re-enable
 * for the next batch: uncomment the POST export, redeploy, hit it once, then
 * comment it out again.
 *
 * Rows created are INACTIVE with userId/productId=NULL and source=APPSUMO.
 * Intentionally unauthenticated — only enable it for a single manual run.
 */

import { prisma } from "@/lib/db";
import { generateUniqueLicenseKey } from "@/lib/creem";
import { LicenseSource, LicenseStatus } from "@prisma/client";

const CODE_COUNT = 1500;

// To re-enable, uncomment the entire block below.
/*
export async function POST() {
  try {
    const keys: string[] = [];
    for (let i = 0; i < CODE_COUNT; i++) {
      keys.push(await generateUniqueLicenseKey());
    }

    await prisma.license.createMany({
      data: keys.map((key) => ({
        key,
        userId: null,
        productId: null,
        status: LicenseStatus.INACTIVE,
        source: LicenseSource.APPSUMO,
        expiresAt: null,
      })),
    });

    return Response.json({ ok: true, count: CODE_COUNT });
  } catch (error) {
    console.error("[SeedAppSumo] Failed", error);
    return Response.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "unknown",
      },
      { status: 500 },
    );
  }
}
*/
