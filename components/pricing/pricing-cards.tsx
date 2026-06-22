"use client";

import { UserSubscriptionPlan } from "@/types";
import Link from "next/link";

import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { FREE_DOWNLOAD_URL, pricingData } from "@/config/subscriptions";
import { cn } from "@/lib/utils";
import { SubscriptionPlan } from "@/types/index";

interface PricingCardsProps {
  userId?: string;
  subscriptionPlan?: UserSubscriptionPlan;
}

export function PricingCards({ userId, subscriptionPlan }: PricingCardsProps) {
  const PricingCard = ({ offer }: { offer: SubscriptionPlan }) => {
    return (
      <div
        className={cn(
          "relative flex flex-col overflow-hidden rounded-3xl border shadow-sm",
          offer.isAnnual ? "-m-0.5 border-2 border-purple-400" : "",
        )}
        key={offer.title}
      >
        <div className="min-h-[150px] items-start space-y-4 bg-muted/50 p-6">
          <p className="flex font-urban text-sm font-bold uppercase tracking-wider text-muted-foreground">
            {offer.title}
          </p>

          <div className="flex flex-row">
            <div className="flex items-end">
              <div className="flex text-left text-3xl font-semibold leading-6">
                {offer.isAnnual ? (
                  `$${offer.annualPrice}`
                ) : (
                  "Free"
                )}
              </div>
              {offer.isAnnual ? (
                <div className="-mb-1 ml-2 text-left text-sm font-medium text-muted-foreground">
                  <div>One year license</div>
                </div>
              ) : null}
            </div>
          </div>
          {offer.isAnnual ? (
            <div className="text-left text-sm text-muted-foreground">
              Annual license - no subscription
            </div>
          ) : null}
        </div>

        <div className="flex h-full flex-col justify-between gap-16 p-6">
          <ul className="space-y-2 text-left text-sm font-medium leading-normal">
            {offer.benefits.map((feature) => (
              <li className="flex items-start gap-x-3" key={feature}>
                <Icons.check className="size-5 shrink-0 text-purple-500" />
                <p>{feature}</p>
              </li>
            ))}

            {offer.limitations.length > 0 &&
              offer.limitations.map((feature) => (
                <li
                  className="flex items-start text-muted-foreground"
                  key={feature}
                >
                  <Icons.close className="mr-3 size-5 shrink-0" />
                  <p>{feature}</p>
                </li>
              ))}
          </ul>

          {!offer.isAnnual ? (
            <Link
              href={FREE_DOWNLOAD_URL}
              className={cn(
                buttonVariants({
                  variant: "outline",
                  rounded: "lg",
                }),
                "w-full",
              )}
            >
              Download
            </Link>
          ) : userId && subscriptionPlan?.isPaid ? (
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({
                  variant: "default",
                  rounded: "lg",
                }),
                "w-full",
              )}
            >
              Go to dashboard
            </Link>
          ) : (
            <a
              href={offer.checkoutUrl}
              className={cn(
                buttonVariants({
                  variant: "default",
                  rounded: "lg",
                }),
                "inline-flex w-full items-center justify-center gap-2",
              )}
            >
              <Icons.unlock className="size-4" />
              Unlock full access
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <MaxWidthWrapper>
      <section
        id="pricing"
        className="flex scroll-mt-20 flex-col items-center py-20 text-center md:py-24"
      >
        <HeaderSection label="Pricing" title="Start at full speed !" />

        <div className="mx-auto grid w-full max-w-4xl gap-5 bg-inherit py-10 lg:grid-cols-2">
          {pricingData.map((offer) => (
            <PricingCard offer={offer} key={offer.title} />
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
