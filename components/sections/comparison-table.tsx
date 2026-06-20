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
  column: "tabSwitching" | "webInterfaces",
): string {
  if (feature.includes("Privacy") && column === "tabSwitching") {
    return "Varies";
  }

  if (feature.includes("one API key") && column === "webInterfaces") {
    return "Per-service";
  }

  return "Partial";
}

export default function ComparisonTable() {
  return (
    <section className="py-20 md:py-24">
      <MaxWidthWrapper>
        <HeaderSection
          label="Why Arco"
          title="vs switching tabs manually"
          subtitle="The old way wastes your time. Arco was built to replace it."
        />

        <div className="mt-10 overflow-hidden rounded-2xl border">
          <div className="hidden md:block">
            <div className="grid grid-cols-4 border-b bg-muted/40">
              <div className="p-4" />
              <div className="border-l p-4 text-center text-sm font-bold text-primary">
                Arco
              </div>
              <div className="border-l p-4 text-center text-sm font-semibold text-muted-foreground">
                Tab switching
              </div>
              <div className="border-l p-4 text-center text-sm font-semibold text-muted-foreground">
                Web interfaces
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
                  {row.tabSwitching === "partial" ? (
                    <span className="text-sm font-medium text-amber-500">
                      {getPartialLabel(row.feature, "tabSwitching")}
                    </span>
                  ) : (
                    <ComparisonCell value={row.tabSwitching} />
                  )}
                </div>
                <div className="flex items-center justify-center border-l p-4">
                  {row.webInterfaces === "partial" ? (
                    <span className="text-sm font-medium text-amber-500">
                      {getPartialLabel(row.feature, "webInterfaces")}
                    </span>
                  ) : (
                    <ComparisonCell value={row.webInterfaces} />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="divide-y md:hidden">
            {comparisonRows.map((row) => (
              <div key={row.feature} className="p-4">
                <p className="mb-3 text-sm font-medium">{row.feature}</p>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-lg bg-primary/5 p-2">
                    <p className="mb-1 font-semibold text-primary">Arco</p>
                    <ComparisonCell value={row.arco} />
                  </div>
                  <div className="rounded-lg bg-muted/40 p-2">
                    <p className="mb-1 font-medium text-muted-foreground">
                      Tabs
                    </p>
                    {row.tabSwitching === "partial" ? (
                      <span className="text-amber-500">
                        {getPartialLabel(row.feature, "tabSwitching")}
                      </span>
                    ) : (
                      <ComparisonCell value={row.tabSwitching} />
                    )}
                  </div>
                  <div className="rounded-lg bg-muted/40 p-2">
                    <p className="mb-1 font-medium text-muted-foreground">
                      Web
                    </p>
                    {row.webInterfaces === "partial" ? (
                      <span className="text-amber-500">
                        {getPartialLabel(row.feature, "webInterfaces")}
                      </span>
                    ) : (
                      <ComparisonCell value={row.webInterfaces} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
