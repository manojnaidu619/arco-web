import Link from "next/link";

import { howItWorksSteps } from "@/config/landing";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-24">
      <MaxWidthWrapper>
        <HeaderSection
          label="How it works"
          title="Up and running in minutes"
          subtitle="Three steps and you're comparing answers from the world's best models."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {howItWorksSteps.map((step) => (
            <div key={step.num} className="relative">
              <div className="mb-4 flex size-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-sm font-bold text-primary">
                {step.num}
              </div>
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-start gap-4 rounded-xl border bg-card p-5 md:p-6">
          <span className="text-2xl">🔗</span>
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Powered by OpenRouter</strong>
            , a unified API for 400+ AI models. One key, transparent
            pay-per-token pricing, no subscriptions.{" "}
            <Link
              href="https://openrouter.ai"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Learn more at openrouter.ai
            </Link>
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
