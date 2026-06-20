import { SubscriptionPlan } from "types";

export const CREEM_UNLIMITED_CHECKOUT_URL =
  "https://www.creem.io/test/payment/prod_6FOGXk6mKLjdVuAdBDnKrA";

export const FREE_DOWNLOAD_URL = "#download";

export const pricingData: SubscriptionPlan[] = [
  {
    title: "Free",
    description: "Get started with Arco",
    benefits: [
      "Compare from 400+ AI models",
      "Up to 2 saved conversations",
      "Your data stays on your device (BYOK)",
    ],
    limitations: [],
    prices: {
      monthly: 0,
      yearly: 0,
    },
    stripeIds: {
      monthly: null,
      yearly: null,
    },
    isLifetime: false,
  },
  {
    title: "Unlimited",
    description: "Lifetime access to Arco",
    benefits: [
      "Compare from 400+ AI models",
      "Unlimited saved conversations",
      "Your data stays on your device (BYOK)",
      "Lifetime license - one payment, no subscription",
      "Free updates",
      "Works on 1 Device",
    ],
    limitations: [],
    prices: {
      monthly: 0,
      yearly: 0,
    },
    stripeIds: {
      monthly: null,
      yearly: null,
    },
    isLifetime: true,
    lifetimePrice: 39,
    checkoutUrl: CREEM_UNLIMITED_CHECKOUT_URL,
  },
];
