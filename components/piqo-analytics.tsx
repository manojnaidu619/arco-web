"use client";

import Script from "next/script";

const PiqoAnalytics = () => {
  const isProduction = process.env.NODE_ENV === "production";
  const piqoSiteId = "n2iwmkmu";

  if (!isProduction || !piqoSiteId) {
    return null;
  }

  return (
    <Script defer data-site={piqoSiteId} src="https://piqo.app/piqo.js" />
  );
};

export default PiqoAnalytics;
