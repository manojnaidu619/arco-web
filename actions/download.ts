"use server";

import { getLatestMacDmgUrl } from "@/lib/get-latest-mac-dmg-url";

export async function downloadApp(): Promise<string> {
  return getLatestMacDmgUrl();
}
