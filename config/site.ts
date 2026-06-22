import { env } from "@/env.mjs";
import { SidebarNavItem, SiteConfig } from "types";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Arco",
  description:
    "Choose from 400+ AI models and compare them side by side in one window with your own OpenRouter API key, while keeping all data on your device.",
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
