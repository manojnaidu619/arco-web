import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Arco",
  description:
    "Compare AI models side by side in one window. Bring your own OpenRouter key and your data never leaves your device.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    email: "mailto:hello@arco.chat",
  },
  mailSupport: "hello@arco.chat",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Product",
    items: [
      { title: "FAQ", href: "/#faq" },
      { title: "Pricing", href: "/#pricing" },
      { title: "About", href: "/about" },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Privacy", href: "/privacy" },
      { title: "Terms", href: "/terms" },
    ],
  },
  {
    title: "Contact",
    items: [
      { title: "hello@arco.chat", href: "mailto:hello@arco.chat" },
    ],
  },
];
