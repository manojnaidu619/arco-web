"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GoogleAnalytics = () => {
  const isProduction = process.env.NODE_ENV === "production";
  const gaId = "G-PFRNNGRPWY";
  const [isDashboard, setIsDashboard] = useState(true);

  useEffect(() => {
    // Check if on dashboard path only after component mounts (client-side)
    if (window && !window.location.pathname.startsWith("/dashboard")) {
      setIsDashboard(false);
    }
  }, []);

  if (!isProduction || !gaId || isDashboard) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
