import { InfoLdg } from "@/types";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

interface InfoLandingProps {
  data: InfoLdg;
  reverse?: boolean;
}

export default function InfoLanding({
  data,
  reverse = false,
}: InfoLandingProps) {
  return (
    <section className="py-20 md:py-24">
      <MaxWidthWrapper>
        <div className="rounded-2xl border bg-card p-6 md:p-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className={cn(reverse ? "lg:order-2" : "lg:order-1")}>
            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Summarize Feature
            </div>
            <h2 className="font-heading text-2xl text-foreground md:text-4xl lg:text-[36px]">
              One click to the{" "}
              <span className="text-primary">best answer</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {data.description}
            </p>
            <ul className="mt-6 space-y-3">
              {data.list.map((item, index) => {
                const Icon = Icons[item.icon || "check"];
                return (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <Icon className="mt-0.5 size-4 shrink-0 text-green-500" />
                    <span>{item.title}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className={cn(
              "mt-8 overflow-hidden rounded-xl border bg-background lg:mt-0",
              reverse ? "order-1" : "order-2",
            )}
          >
            <div className="border-b p-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="animate-pulse text-amber-500">✦</span>
                Summarize latest responses
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs text-muted-foreground">Comparing</span>
                {["GPT-4o", "Claude", "Gemini"].map((model, idx) => (
                  <span
                    key={model}
                    className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                    {model}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <div className="flex flex-1 items-center gap-2 rounded-lg border px-3 py-2 text-xs text-muted-foreground">
                  <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                  GPT-4o mini
                </div>
                <div className="group rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-all hover:scale-105">
                  <span className="inline-flex items-center gap-1">
                    <span className="animate-pulse">✦</span>
                    Regenerate
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-4 p-4">
              {["Key Differences", "Best Answer", "Recommendation"].map(
                (heading, idx) => (
                  <div 
                    key={heading}
                    className="animate-fade-in"
                    style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                  >
                    <p className="mb-2 text-xs font-semibold">## {heading}</p>
                    <div className="space-y-2">
                      <div className="relative h-2 overflow-hidden rounded bg-muted">
                        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent" />
                      </div>
                      <div className="relative h-2 w-[85%] overflow-hidden rounded bg-muted">
                        <div 
                          className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent"
                          style={{ animationDelay: '0.3s' }}
                        />
                      </div>
                      <div className="relative h-2 w-[70%] overflow-hidden rounded bg-muted">
                        <div 
                          className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent"
                          style={{ animationDelay: '0.6s' }}
                        />
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
