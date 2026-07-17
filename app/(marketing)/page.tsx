import { PricingCards } from "@/components/pricing/pricing-cards";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import ComparisonTable from "@/components/sections/comparison-table";
import DownloadCTA from "@/components/sections/download-cta";
import Features from "@/components/sections/features";
import HeroLanding from "@/components/sections/hero-landing";
import HowItWorks from "@/components/sections/how-it-works";
import InfoLanding from "@/components/sections/info-landing";
import PreviewLanding from "@/components/sections/preview-landing";
import ProblemAgitation from "@/components/sections/problem-agitation";
import UseCases from "@/components/sections/use-cases";
import { infos } from "@/config/landing";
import { siteConfig } from "@/config/site";
import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: siteConfig.seoTitle,
  description: siteConfig.seoDescription,
});

export default async function IndexPage() {
  const user = await getCurrentUser();

  let subscriptionPlan;
  if (user?.id) {
    subscriptionPlan = await getUserSubscriptionPlan(user.id);
  }

  return (
    <>
      <HeroLanding />
      <PreviewLanding />
      <ProblemAgitation />
      <Features />
      <HowItWorks />
      <InfoLanding data={infos[0]} />
      <UseCases />
      <ComparisonTable />
      <PricingCards userId={user?.id} subscriptionPlan={subscriptionPlan} />
      <PricingFaq />
      <DownloadCTA />
    </>
  );
}
