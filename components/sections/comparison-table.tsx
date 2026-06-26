import { ComparisonValue } from "@/types";
import { Check, X } from "lucide-react";

import { comparisonRows } from "@/config/landing";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

function ComparisonCell({ value }: { value: ComparisonValue }) {
  if (value === "yes") {
    return <Check className="mx-auto size-5 text-green-500" />;
  }

  if (value === "no") {
    return <X className="mx-auto size-5 text-red-400" />;
  }

  return (
    <span className="text-sm font-medium text-amber-500">
      {value === "partial" ? "Varies" : "Partial"}
    </span>
  );
}

function getPartialLabel(
  feature: string,
  column: "comparisonApps" | "individualServices",
): string {
  if (feature.includes("summary") && column === "comparisonApps") {
    return "Some apps";
  }

  if (feature.includes("400+") && column === "comparisonApps") {
    return "Fewer models";
  }

  return "Partial";
}

export default function ComparisonTable() {
  return (
    <section className="py-20 md:py-24">
      <MaxWidthWrapper>
        <HeaderSection
          label="Why Arco"
          title="How Arco compares"
          subtitle="See how Arco stacks up against other multi-model apps and against using ChatGPT or Claude on their own."
        />

        <div className="mt-10 overflow-x-auto rounded-2xl border">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-4 border-b bg-muted/40">
              <div className="p-4" />
              <div className="border-l p-4 text-center text-sm font-bold text-primary">
                Arco
              </div>
              <div className="border-l p-4 text-center text-sm font-semibold text-muted-foreground">
                Other comparison apps
              </div>
              <div className="border-l p-4 text-center text-sm font-semibold text-muted-foreground">
                Individual chat services
              </div>
            </div>

            {comparisonRows.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-4 border-b last:border-b-0"
              >
                <div className="p-4 text-sm text-muted-foreground">
                  {row.feature}
                </div>
                <div className="flex items-center justify-center border-l bg-primary/5 p-4">
                  <ComparisonCell value={row.arco} />
                </div>
                <div className="flex items-center justify-center border-l p-4">
                  {row.comparisonApps === "partial" ? (
                    <span className="text-sm font-medium text-amber-500">
                      {getPartialLabel(row.feature, "comparisonApps")}
                    </span>
                  ) : (
                    <ComparisonCell value={row.comparisonApps} />
                  )}
                </div>
                <div className="flex items-center justify-center border-l p-4">
                  {row.individualServices === "partial" ? (
                    <span className="text-sm font-medium text-amber-500">
                      {getPartialLabel(row.feature, "individualServices")}
                    </span>
                  ) : (
                    <ComparisonCell value={row.individualServices} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
