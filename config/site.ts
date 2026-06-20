import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Arco",
  description:
    "Compare every AI model side by side. Send one prompt to multiple models at once and see how GPT-4o, Claude, Gemini, and dozens more respond in one window.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    email: "mailto:hello@arco.chat",
  },
  mailSupport: "hello@arco.chat",
};

export const footerLinks: SidebarNavItem[] = [];
