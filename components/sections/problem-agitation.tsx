import Image from "next/image";

import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

const scenarios = [
  {
    label: "One model, one answer",
    body: "You asked one AI a question that actually matters. It gave you an answer. You have no idea if a different model would have said something smarter, or caught what this one missed.",
    image: "/_static/illustrations/problem-one-answer.png",
  },
  {
    label: "Tab juggling",
    body: "ChatGPT in one tab. Claude in another. Gemini in a third. You paste the same prompt into all three, wait, then try to remember which one said what. Do it again next time.",
    image: "/_static/illustrations/problem-tab-juggling.png",
  },
  {
    label: "Paying for a tool you barely use",
    body: "You signed up for a monthly plan on some multi-model tool. You used it twice this month. You still paid the full price. And you'll pay it again next month too.",
    image: "/_static/illustrations/problem-subscription-fatigue.png",
  },
];

export default function ProblemAgitation() {
  return (
    <section className="py-20 md:py-24">
      <MaxWidthWrapper>
        <HeaderSection
          label="The current state"
          title="Sound familiar?"
          subtitle="If this is how you use AI today, you already know something's off."
        />

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-4">
          {scenarios.map((scenario) => (
            <div
              key={scenario.label}
              className="relative overflow-hidden rounded-2xl border bg-background p-5 sm:p-6"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
                <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden sm:aspect-square sm:w-40 md:w-48">
                  <Image
                    src={scenario.image}
                    alt={scenario.label}
                    fill
                    sizes="(min-width: 768px) 192px, (min-width: 640px) 160px, 100vw"
                    className="scale-150 object-contain dark:invert dark:hue-rotate-180"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-primary">
                    {scenario.label}
                  </div>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {scenario.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-lg text-muted-foreground">
          There's a simpler way.
        </p>
      </MaxWidthWrapper>
    </section>
  );
}
