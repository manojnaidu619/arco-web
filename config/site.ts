import { env } from "@/env.mjs";
import { SidebarNavItem, SiteConfig } from "types";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Arco",
  description:
    "Choose from 400+ AI models and compare them side by side to know which answer to trust. Use your own OpenRouter API key. All data stays on your device.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  seoTitle: "Arco - Compare AI Models Side by Side on Your Mac | Find the Best Answer",
  seoDescription:
    "Choose from 400+ AI models and compare them side by side on your Mac to pick the best answer for any task. Bring your own OpenRouter key. Every conversation stays private on your device.",
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
      { title: "Are you an AI? LLM.txt", href: "/llms.txt" },
    ],
  },
  {
    title: "Alternatives",
    items: [
      { title: "vs AI Fiesta", href: "/alternatives/aifiesta" },
      { title: "vs ChatComparison.ai", href: "/alternatives/chatcomparison" },
      { title: "vs ChatHub", href: "/alternatives/chathub" },
      { title: "vs ChatPlayground.ai", href: "/alternatives/chatplayground" },
      { title: "vs MultiLLM", href: "/alternatives/multillm" },
      { title: "vs Poe", href: "/alternatives/poe" },
      { title: "vs TypingMind", href: "/alternatives/typingmind" },
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
