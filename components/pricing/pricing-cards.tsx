"use client";

import { useEffect, useState } from "react";
import { UserSubscriptionPlan } from "@/types";
import Link from "next/link";

import { getUnlimitedSoldCount } from "@/actions/get-unlimited-sold-count";
import { DownloadButton } from "@/components/shared/download-button";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import {
  pricingData,
  UNLIMITED_BATCH_LIMIT,
  UNLIMITED_NEXT_BATCH_PRICE,
} from "@/config/subscriptions";
import { cn } from "@/lib/utils";
import { SubscriptionPlan } from "@/types/index";

interface PricingCardsProps {
  userId?: string;
  subscriptionPlan?: UserSubscriptionPlan;
}

export function PricingCards({ userId, subscriptionPlan }: PricingCardsProps) {
  const PricingCard = ({ offer }: { offer: SubscriptionPlan }) => {
    const isLifetime = offer.licenseTerm === "lifetime";
    const [sold, setSold] = useState<number | null>(null);

    useEffect(() => {
      if (!isLifetime) return;
      getUnlimitedSoldCount().then(setSold);
    }, [isLifetime]);

    return (
      <div
        className={cn(
          "relative flex flex-col overflow-hidden rounded-3xl border shadow-sm",
          isLifetime ? "-m-0.5 border-2 border-purple-400" : "",
        )}
        key={offer.title}
      >
        <div className="min-h-[220px] items-start space-y-4 bg-muted/50 p-6">
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
                  <div>{isLifetime ? "Lifetime license" : "One year license"}</div>
                </div>
              ) : null}
            </div>
          </div>
          {offer.isAnnual ? (
            <div className="text-left text-sm text-muted-foreground">
              {isLifetime
                ? "One-time payment - yours forever"
                : "Annual license - no subscription"}
            </div>
          ) : null}

          {isLifetime ? (
            <div className="space-y-1.5 pb-2 pt-2">
              {sold === null ? (
                <Skeleton className="h-2 w-full rounded-full" />
              ) : (
                <Progress
                  value={Math.min((sold / UNLIMITED_BATCH_LIMIT) * 100, 100)}
                  className="h-2"
                />
              )}
              <div className="flex items-center justify-between text-left text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  {sold === null
                    ? "Loading"
                    : `${sold} of ${UNLIMITED_BATCH_LIMIT} claimed`}
                </span>
                <span>Then ${UNLIMITED_NEXT_BATCH_PRICE}</span>
              </div>
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
            <DownloadButton
              className={cn(
                buttonVariants({
                  variant: "outline",
                  rounded: "lg",
                }),
                "inline-flex w-full items-center justify-center gap-2",
              )}
            >
              Get Started for Free
            </DownloadButton>
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
                  variant: isLifetime ? "default" : "secondary",
                  rounded: "lg",
                }),
                "inline-flex w-full items-center justify-center gap-2",
                !isLifetime && "border border-input",
              )}
            >
              <Icons.unlock className="size-4" />
              {isLifetime
                ? `Get lifetime access for $${offer.annualPrice}`
                : `Purchase 1-year license for $${offer.annualPrice}`}
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
        <HeaderSection label="Pricing" title="Full power. Pick your price." />

        <div className="mx-auto grid w-full max-w-5xl gap-5 bg-inherit py-10 lg:grid-cols-3">
          {pricingData.map((offer) => (
            <PricingCard offer={offer} key={offer.title} />
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
