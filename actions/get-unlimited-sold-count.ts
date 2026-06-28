"use server";

import { UNLIMITED_BATCH_START_DATE } from "@/config/subscriptions";
import { prisma } from "@/lib/db";

export async function getUnlimitedSoldCount(): Promise<number> {
  return prisma.license.count({
    where: {
      expiresAt: null,
      createdAt: { gte: UNLIMITED_BATCH_START_DATE },
    },
  });
}
