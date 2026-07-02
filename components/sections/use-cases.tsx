import { useCases } from "@/config/landing";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function UseCases() {
  return (
    <section className="py-20 md:py-24">
      <MaxWidthWrapper>
        <HeaderSection
          label="Use Cases"
          title="Who makes better decisions with Arco"
          subtitle="Anyone who needs to know which answer to act on, not just which model to ask."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="flex h-full flex-col rounded-2xl border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-3 flex h-9 items-center text-3xl leading-none">
                {useCase.emoji}
              </div>
              <h3 className="text-base font-semibold">{useCase.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {useCase.description}
              </p>
              <div className="mt-4 min-h-[7.5rem] space-y-2.5 rounded-xl border bg-background p-4">
                <div className="ml-auto w-fit max-w-[85%] animate-slide-down-fade rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-xs leading-relaxed text-primary-foreground">
                  {useCase.example.user}
                </div>
                <div className="w-fit max-w-[85%] animate-slide-up-fade rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-xs leading-relaxed text-foreground [animation-delay:0.6s]">
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
