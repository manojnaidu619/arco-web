import Link from "next/link";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

export default function HeroLanding() {
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-24">
      <div className="container flex max-w-3xl flex-col items-center gap-5 text-center">
        <Badge
          variant="outline"
          className="border-primary/30 bg-primary/10 px-3 py-1 text-primary"
        >
          ✦ macOS app, free to start
        </Badge>

        <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[60px]">
          Compare every AI model{" "}
          <span className="text-primary">side by side</span>
        </h1>

        <p className="max-w-xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Send one prompt to multiple models at once and instantly see how
          GPT-4o, Claude, Gemini, and dozens more respond in one window.
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          <Link
            href="#download"
            className={cn(
              buttonVariants({ size: "lg", rounded: "lg" }),
              "gap-2 px-7",
            )}
          >
            <Icons.apple className="size-4" />
            <span>Download free for Mac</span>
          </Link>
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

        <p className="text-sm text-muted-foreground">
          macOS 13 Ventura or later · Apple Silicon · Free forever
        </p>
      </div>
    </section>
  );
}
