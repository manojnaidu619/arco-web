import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { DownloadButton } from "@/components/shared/download-button";
import { cn } from "@/lib/utils";

export default function DownloadCTA() {
  return (
    <section id="download" className="scroll-mt-20 py-20 md:py-24">
      <MaxWidthWrapper>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-[42px]">
            Start comparing models today
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Download Arco free. Bring your own OpenRouter key and you&apos;re
            ready in under two minutes.
          </p>
          <DownloadButton
            className={cn(
              buttonVariants({ size: "lg", rounded: "lg" }),
              "mt-9 inline-flex gap-2 px-8 text-base",
            )}
          >
            Download free for Mac
          </DownloadButton>
          <p className="mt-4 text-sm text-muted-foreground">
            Free to start · macOS 13+ · Apple Silicon
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
