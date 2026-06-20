import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t", className)}>
      <MaxWidthWrapper className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <Icons.logo className="size-5" />
          <span className="font-urban text-sm font-semibold">
            {siteConfig.name}
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Arco. Built for Mac.
        </p>

        <div className="flex items-center gap-4">
          <Link
            href={siteConfig.links.email}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            hello@arco.chat
          </Link>
          <ModeToggle />
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
