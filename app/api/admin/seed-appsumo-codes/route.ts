/**
 * TEMPORARY — Seeds 1500 pre-generated AppSumo license codes into the licenses
 * table. Rows are INACTIVE with userId/productId=NULL and source=APPSUMO; buyers
 * activate them from the desktop app.
 *
 * Hit once, copy the 1500 keys out of the DB into a CSV for AppSumo, then
 * DELETE this file. It is intentionally unauthenticated for a single manual run.
 */

import { prisma } from "@/lib/db";
import { generateUniqueLicenseKey } from "@/lib/creem";
import { LicenseSource, LicenseStatus } from "@prisma/client";

const CODE_COUNT = 1500;

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
