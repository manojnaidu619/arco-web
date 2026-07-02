import { features } from "@/config/landing";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function Features() {
  return (
    <section className="py-20 md:py-24">
      <MaxWidthWrapper>
          <HeaderSection
            label="Why Arco"
            title="Everything you need to decide"
            subtitle="One prompt. Every answer. A clear picture of which model to trust."
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                className="group relative overflow-hidden rounded-2xl border bg-background p-5 md:p-8"
                key={feature.title}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b from-purple-500/80 to-white opacity-25 blur-2xl duration-300 group-hover:-translate-y-1/4 dark:from-white dark:to-white dark:opacity-5 dark:group-hover:opacity-10"
                />
                <div className="relative">
                  <div className="relative flex size-12 items-center justify-center rounded-2xl border border-border bg-primary/10 text-2xl shadow-sm">
                    {feature.icon}
                  </div>

                  <h3 className="mt-6 text-base font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 pb-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
    </section>
  );
}
