import { isDevelopment } from "@/lib/env";
import { SubscriptionPlan } from "types";

export const CREEM_PRO_CHECKOUT_URL = isDevelopment
  ? `https://www.creem.io/test/payment/${process.env.NEXT_PUBLIC_STRIPE_PRO_PLAN_ID}`
  : `https://www.creem.io/payment/${process.env.NEXT_PUBLIC_STRIPE_PRO_PLAN_ID}`;

export const CREEM_LIFETIME_CHECKOUT_URL = isDevelopment
  ? `https://www.creem.io/test/payment/${process.env.NEXT_PUBLIC_STRIPE_LIFETIME_PLAN_ID}`
  : `https://www.creem.io/payment/${process.env.NEXT_PUBLIC_STRIPE_LIFETIME_PLAN_ID}`;

// "Unlimited" lifetime tier - sold in batches at increasing prices.
// When the current batch sells out, update these three by hand (and raise
// the price on the Creem product itself) to start the next batch.
export const UNLIMITED_BATCH_LIMIT = 49;
export const UNLIMITED_CURRENT_BATCH_PRICE = 49;
export const UNLIMITED_NEXT_BATCH_PRICE = 89;
// Licenses are only counted toward the current batch from this date forward.
export const UNLIMITED_BATCH_START_DATE = new Date("2026-06-25T00:00:00Z");

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
    annualPrice: 29,
    checkoutUrl: CREEM_PRO_CHECKOUT_URL,
  },
  {
    title: "Unlimited",
    description: "Lifetime access to Arco",
    benefits: [
      "Compare from 400+ AI models",
      "Unlimited saved conversations",
      "Your data stays on your device",
      "One payment, lifetime access",
      "Free updates, forever",
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
    licenseTerm: "lifetime",
    annualPrice: UNLIMITED_CURRENT_BATCH_PRICE,
    checkoutUrl: CREEM_LIFETIME_CHECKOUT_URL,
  },
];
