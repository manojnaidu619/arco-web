import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function PreviewLanding() {
  return (
    <div className="pb-12 md:pb-20">
      <MaxWidthWrapper>
        <div className="rounded-xl md:bg-muted/30 md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
          <div style={{ position: "relative", paddingBottom: "56.2500%", height: 0 }} className="overflow-hidden rounded-xl border md:rounded-lg">
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              src="https://www.tella.tv/video/vid_cmqp4uixf00q604icfwcyf8ee/embed?b=0&title=0&a=1&loop=1&t=0&muted=0&wt=0&o=1"
              allow="autoplay; fullscreen"
              title="Arco Preview Video"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
