"use client";

import { downloadApp } from "@/actions/download";

interface DownloadButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function DownloadButton({ className, children }: DownloadButtonProps) {
  return (
    <form action={downloadApp} className="contents">
      <button type="submit" className={className}>
        {children}
      </button>
    </form>
  );
}
