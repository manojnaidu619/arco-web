import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function PreviewLanding() {
  return (
    <div className="pb-12 md:pb-20">
      <MaxWidthWrapper>
        <div className="rounded-xl md:bg-muted/30 md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
          <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted/20 md:rounded-lg">
            <div className="flex size-full flex-col items-center justify-center gap-3 text-muted-foreground">
              <div className="flex gap-2">
                <span className="size-3 rounded-full bg-red-500/80" />
                <span className="size-3 rounded-full bg-yellow-500/80" />
                <span className="size-3 rounded-full bg-green-500/80" />
              </div>
              <p className="text-sm font-medium">App screenshot coming soon</p>
              <p className="max-w-sm px-6 text-center text-xs text-muted-foreground/80">
                Replace this placeholder with your Arco app screenshot or demo
                video.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
