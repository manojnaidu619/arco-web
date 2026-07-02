import Link from "next/link";
import * as React from "react";

import { ModeToggle } from "@/components/layout/mode-toggle";
import { Icons } from "@/components/shared/icons";
import { footerLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t", className)}>
      <div className="container grid max-w-6xl grid-cols-2 gap-6 py-14 md:grid-cols-5">
        {footerLinks.map((section) => (
          <div key={section.title}>
            {section.title === "Alternatives" ? (
              <Link
                href="/alternatives"
                className="text-sm font-medium text-foreground hover:text-primary"
              >
                {section.title}
              </Link>
            ) : (
              <span className="text-sm font-medium text-foreground">
                {section.title}
              </span>
            )}
            <ul className="mt-4 list-inside space-y-3">
              {section.items?.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-full flex items-center justify-between md:col-span-1 md:flex-col md:items-end md:justify-start md:gap-4 md:pt-1">
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <Icons.logo className="size-8 text-foreground" />
            <span className="text-lg font-semibold">{siteConfig.name}</span>
          </Link>
          <ModeToggle />
        </div>
      </div>

      <div className="border-t py-4">
        <div className="container flex max-w-6xl items-center justify-center">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arco. Built for Mac.
          </p>
        </div>
      </div>
    </footer>
  );
}
