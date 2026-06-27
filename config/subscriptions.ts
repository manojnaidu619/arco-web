import { isDevelopment } from "@/lib/env";
import { SubscriptionPlan } from "types";

export const CREEM_UNLIMITED_CHECKOUT_URL =
  isDevelopment ? "https://www.creem.io/test/payment/prod_6FOGXk6mKLjdVuAdBDnKrA" : "https://www.creem.io/payment/prod_3CinqIf7UiBviTQwDuol9P";

export const pricingData: SubscriptionPlan[] = [
  {
    title: "Free",
    description: "Get started with Arco",
    benefits: [
      "Compare from 400+ AI models",
      "Up to 3 saved conversations",
      "Your data stays on your device",
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
    isAnnual: false,
  },
  {
    title: "Pro",
    description: "Full access to Arco",
    benefits: [
      "Compare from 400+ AI models",
      "Unlimited saved conversations",
      "Your data stays on your device",
      "One payment, no recurring charges",
      "Free updates included",
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
    isAnnual: true,
    annualPrice: 39,
    checkoutUrl: CREEM_UNLIMITED_CHECKOUT_URL,
  },
];
