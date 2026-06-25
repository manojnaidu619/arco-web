import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DownloadButton } from "@/components/shared/download-button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export default function HeroLanding() {
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-24">
      <div className="container flex max-w-3xl flex-col items-center gap-6 text-center">
        <Badge
          variant="outline"
          className="border-primary/30 bg-primary/10 px-3 py-1 text-primary"
        >
          ✦ Native macOS app
        </Badge>

        <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[60px]">
          Ask once, reach every model,{" "}
          <span className="text-primary">all staying private.</span>
        </h1>

        <p className="mt-2 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {siteConfig.description}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-3 md:gap-4">
          <DownloadButton
            className={cn(
              buttonVariants({ size: "lg", rounded: "lg" }),
              "gap-2 px-7",
            )}
          >
            <span>Download free for Mac</span>
          </DownloadButton>
          <Link
            href="#how-it-works"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                rounded: "lg",
              }),
              "px-6",
            )}
          >
            See how it works →
          </Link>
        </div>

        <p className="mt-2 text-sm text-muted-foreground">
          macOS 13 Ventura or later · Apple Silicon · Free to start
        </p>
      </div>
    </section>
  );
}
