import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

interface AlternativesLayoutProps {
  children: React.ReactNode;
}

export default function AlternativesLayout({
  children,
}: AlternativesLayoutProps) {
  return (
    <>
      <MaxWidthWrapper className="pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to Arco
        </Link>
      </MaxWidthWrapper>
      {children}
    </>
  );
}
