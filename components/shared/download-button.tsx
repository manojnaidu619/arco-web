"use client";

import { useState } from "react";

import { downloadApp } from "@/actions/download";
import { Icons } from "@/components/shared/icons";

interface DownloadButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function DownloadButton({ className, children }: DownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);

    try {
      const url = await downloadApp();
      const link = document.createElement("a");
      link.href = url;
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch {
      // Error message is surfaced by getLatestMacDmgUrl; reset button either way.
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button
      type="button"
      className={className}
      disabled={isLoading}
      aria-busy={isLoading}
      onClick={handleClick}
    >
      {isLoading ? (
        <Icons.spinner className="size-4 shrink-0 animate-spin" />
      ) : (
        <Icons.apple className="size-4 shrink-0" />
      )}
      {children}
    </button>
  );
}
