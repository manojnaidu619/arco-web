const MANIFEST_URL = "https://updates.arco.chat/latest-mac.yml";
const VERSION_RE = /^version:\s*(.+)$/m;

const ERROR_MESSAGE = "Download temporarily unavailable. Please try again.";

export async function getLatestMacDmgUrl(): Promise<string> {
  let res: Response;

  try {
    res = await fetch(MANIFEST_URL, { cache: "no-store" });
  } catch {
    throw new Error(ERROR_MESSAGE);
  }

  if (!res.ok) {
    throw new Error(ERROR_MESSAGE);
  }

  const match = VERSION_RE.exec(await res.text());
  const version = match?.[1]?.trim();

  if (!version) {
    throw new Error(ERROR_MESSAGE);
  }

  return `https://updates.arco.chat/Arco-${version}-arm64.dmg`;
}
