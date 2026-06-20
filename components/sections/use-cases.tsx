import { useCases } from "@/config/landing";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function UseCases() {
  return (
    <section className="py-20 md:py-24">
      <MaxWidthWrapper>
        <HeaderSection
          label="Use Cases"
          title="Who uses Arco"
          subtitle="Anyone who wants better answers faster, without the tab chaos."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="rounded-2xl border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-3 text-3xl">{useCase.emoji}</div>
              <h3 className="text-base font-semibold">{useCase.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {useCase.description}
              </p>
              <div className="mt-4 space-y-1.5 rounded-lg border bg-background p-3">
                <div className="ml-auto max-w-[85%] rounded-md bg-primary px-2.5 py-1.5 text-[11px] leading-snug text-primary-foreground">
                  {useCase.example.user}
                </div>
                <div className="rounded-md bg-muted px-2.5 py-1.5 text-[11px] leading-snug text-foreground">
                  {useCase.example.ai}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
