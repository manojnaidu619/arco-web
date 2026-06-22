"use server";

import { redirect } from "next/navigation";

const DMG_URL =
  "https://pub-b3f6a32fb25f4bf99769c7201c7f7a03.r2.dev/Arco-0.1.0-arm64.dmg";

export async function downloadApp() {
  redirect(DMG_URL);
}
