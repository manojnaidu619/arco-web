import { ArrowRight, Check, Coins, Shield, Target, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { DownloadButton } from "@/components/shared/download-button";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UNLIMITED_CURRENT_BATCH_PRICE } from "@/config/subscriptions";
import { cn, constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "AI Fiesta Alternative That Doesn't Drain Credits | Arco",
  description:
    "Looking for an AI Fiesta alternative? Compare 400+ AI models with your own OpenRouter key. No credit pool, no monthly bill, every chat stays on your Mac.",
});

type Cell = "yes" | "no" | string;

function ValueCell({ value }: { value: Cell }) {
  if (value === "yes") return <Check className="mx-auto size-5 text-green-500" />;
  if (value === "no") return <X className="mx-auto size-5 text-red-400" />;
  return <span className="text-sm font-medium text-amber-500">{value}</span>;
}

const featureRows: Array<{ feature: string; arco: Cell; aifiesta: Cell }> = [
  { feature: "Ask one question, every selected model answers", arco: "yes", aifiesta: "yes" },
  { feature: "Purpose-built for multi-model comparison", arco: "yes", aifiesta: "yes" },
  { feature: "400+ models via your own API key (BYOK)", arco: "yes", aifiesta: "no" },
  { feature: "No monthly subscription", arco: "yes", aifiesta: "no" },
  { feature: "No credit pool that runs out mid-month", arco: "yes", aifiesta: "no" },
  { feature: "Multi-model queries don't cost 4x credits", arco: "yes", aifiesta: "no" },
  { feature: "Chats stored locally on your device", arco: "yes", aifiesta: "no" },
  { feature: "Structured AI summary of all replies", arco: "yes", aifiesta: "no" },
  { feature: "Native macOS app (Apple Silicon)", arco: "yes", aifiesta: "no" },
  { feature: "Works on web / iOS / Android", arco: "no", aifiesta: "yes" },
  { feature: "Audio transcription", arco: "no", aifiesta: "yes" },
];

const differentiators = [
  {
    icon: Coins,
    title: "No credit pool. No 4x premium penalty.",
    body: "AI Fiesta's whole pitch is side-by-side comparison, but every model call burns from the same 3 million token monthly pool. Premium models like Claude and Grok count at 4x. Ask four or five models at once and you can burn through a week's allowance in a single session. Arco has no pool. You pay OpenRouter directly for the tokens you actually use.",
  },
  {
    icon: Target,
    title: "400+ models, not a curated catalog.",
    body: "AI Fiesta picks which models you get and when they upgrade them. You wait for their roadmap. Arco routes through OpenRouter's full catalog. When a new model drops, paste its ID and start using it the same day.",
  },
  {
    icon: Shield,
    title: "Chats stay on your Mac. Not on their servers.",
    body: "AI Fiesta is a cloud service. Every conversation lives on their infrastructure under their policies. Arco stores everything locally. Nothing gets uploaded, because there is no server to upload to.",
  },
];

const steps = [
  {
    n: "1",
    title: "Download Arco",
    body: "Free forever tier, no card, no email required. macOS 13 or later, Apple Silicon.",
  },
  {
    n: "2",
    title: "Add your OpenRouter key",
    body: "Sign up at openrouter.ai (free account) and paste your key into Arco. That's it. One key, 400+ models.",
  },
  {
    n: "3",
    title: "Ask every model at once",
    body: "Type your question once. Every selected model answers in parallel. Compare, summarize, copy.",
  },
];

const faqs = [
  {
    q: "Is my data safe?",
    a: "Yes. Every Arco conversation stays on your Mac. Nothing gets uploaded, nothing lives on our servers, because we do not run any. Your OpenRouter key is stored locally too.",
  },
  {
    q: "What if I'm on Windows, iOS, or Android?",
    a: "AI Fiesta is the better pick here. It runs in the browser and has dedicated Android and iOS apps. Arco is macOS 13+ on Apple Silicon only. If you need to compare models on a phone or on Windows, AI Fiesta covers more platforms. That is a real gap on our side.",
  },
  {
    q: "What does AI Fiesta do better than Arco?",
    a: "Two things, honestly. Platforms: web, iOS, and Android, so you are not tied to a Mac. Turnkey setup: subscribe and start chatting, no OpenRouter account or API key to set up. If either of those matters more than avoiding credit limits, local storage, or BYOK model access, AI Fiesta is a fair choice.",
  },
  {
    q: "Do I need an OpenRouter account?",
    a: "Yes. Sign up at openrouter.ai (free to create). You add credit and pay providers directly for the tokens you use. Arco doesn't touch the billing or take a cut.",
  },
  {
    q: "Can I switch back?",
    a: "Yes, and you can run both at once. Try Arco for a couple of weeks while your AI Fiesta subscription is still active. If it doesn't fit your workflow, keep using AI Fiesta. There is nothing to cancel on Arco's side because there is no subscription.",
  },
];

const aifiestaMonthlyYear = 144;
const aifiestaYearlyYear = 120;

export default function ArcoVsAiFiestaPage() {
  const arcoPrice = UNLIMITED_CURRENT_BATCH_PRICE;
  const pricingRows = [
    {
      label: "Year 1",
      arco: `$${arcoPrice} one-time`,
      monthly: `~$${aifiestaMonthlyYear}`,
      yearly: `~$${aifiestaYearlyYear}`,
    },
    {
      label: "Year 2",
      arco: "$0",
      monthly: `~$${aifiestaMonthlyYear}`,
      yearly: `~$${aifiestaYearlyYear}`,
    },
    {
      label: "Year 3",
      arco: "$0",
      monthly: `~$${aifiestaMonthlyYear}`,
      yearly: `~$${aifiestaYearlyYear}`,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="space-y-6 py-12 sm:py-16 lg:py-20">
        <MaxWidthWrapper className="flex max-w-4xl flex-col items-center gap-6 text-center">
          <Badge variant="outline" className="px-3 py-1">
            AI Fiesta alternative
          </Badge>

          <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[56px]">
            Arco: the AI Fiesta alternative{" "}
            <span className="text-primary">
              without a credit pool that burns out mid-month.
            </span>
          </h1>

          <p className="max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            AI Fiesta bundles access to multiple AI models on a credit-metered
            subscription. Side-by-side comparison is the whole point, but every
            model call burns from the same pool. Premium models count at 4x.
            Arco has no credits. You pay OpenRouter directly for the tokens you
            actually use.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3 md:gap-4">
            <DownloadButton
              className={cn(
                buttonVariants({ size: "lg", rounded: "lg" }),
                "gap-2 px-7",
              )}
            >
              <span>Download Arco free</span>
            </DownloadButton>
            <Link
              href="#comparison"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg", rounded: "lg" }),
                "px-6",
              )}
            >
              See how they compare →
            </Link>
          </div>

          <Card className="mt-6 w-full">
            <Image
              src="/_static/competitors/arco-vs-aifiesta.webp"
              alt="Arco vs AI Fiesta"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </Card>
        </MaxWidthWrapper>
      </section>

      {/* TL;DR */}
      <section className="py-16 md:py-20">
        <MaxWidthWrapper>
          <HeaderSection
            label="TL;DR"
            title="The short version"
            subtitle="Skip the scroll and get the verdict."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Where Arco wins</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-green-500" />
                    No credit pool. Multi-model queries don&apos;t drain a
                    monthly allowance at 4x rates
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-green-500" />
                    400+ models via BYOK. Add any OpenRouter model instantly
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-green-500" />
                    Chats stored locally on your Mac. Not on AI Fiesta&apos;s
                    servers
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Where AI Fiesta falls short</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    3 million tokens/month, but premium models burn 4x faster
                    and multi-model queries consume in parallel
                  </li>
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    Locked into their curated model list. No BYOK, no adding
                    models on your own
                  </li>
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    Every conversation lives on their cloud infrastructure
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>The verdict</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Pick AI Fiesta if you want turnkey access on web and mobile,
                  no API key to set up, and you&apos;re fine with a monthly
                  credit budget. Pick Arco if side-by-side comparison is your
                  daily workflow, you&apos;re on a Mac, and you&apos;d rather
                  pay only for the tokens you use without hitting a pool ceiling.
                </p>
              </CardContent>
            </Card>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Feature comparison */}
      <section id="comparison" className="py-16 md:py-20">
        <MaxWidthWrapper>
          <HeaderSection
            label="Side by side"
            title="Arco vs AI Fiesta, feature by feature"
            subtitle="Where each tool wins and where it falls short."
          />
          <Card className="mt-10 overflow-x-auto">
            <div className="min-w-[560px]">
              <div className="grid grid-cols-3 border-b bg-muted/40">
                <div className="p-4" />
                <div className="border-l p-4 text-center text-sm font-bold text-primary">
                  Arco
                </div>
                <div className="border-l p-4 text-center text-sm font-semibold text-muted-foreground">
                  AI Fiesta
                </div>
              </div>
              {featureRows.map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-3 border-b last:border-b-0"
                >
                  <div className="p-4 text-sm text-muted-foreground">
                    {row.feature}
                  </div>
                  <div className="flex items-center justify-center border-l bg-primary/5 p-4">
                    <ValueCell value={row.arco} />
                  </div>
                  <div className="flex items-center justify-center border-l p-4">
                    <ValueCell value={row.aifiesta} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </MaxWidthWrapper>
      </section>

      {/* Three key differentiators */}
      <section className="py-16 md:py-20">
        <MaxWidthWrapper>
          <HeaderSection
            label="Why Arco"
            title="Three reasons people switch"
            subtitle="The specific things AI Fiesta can't match."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {differentiators.map(({ icon: Icon, title, body }) => (
              <Card key={title}>
                <CardHeader>
                  <Icon className="size-6 text-primary" />
                  <CardTitle className="pt-3 text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Transparent pricing */}
      <section className="py-16 md:py-20">
        <MaxWidthWrapper>
          <HeaderSection
            label="Pricing math"
            title="What you actually pay over 3 years"
            subtitle="AI Fiesta bundles model access into a monthly subscription with a token allowance. Premium models count at 4x. Arco separates app cost from usage. You buy the app once and pay OpenRouter directly for the tokens you actually use."
          />
          <Card className="mt-10 overflow-x-auto">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-4 border-b bg-muted/40">
                <div className="p-4 text-sm font-medium text-muted-foreground">
                  Cost, 1 user
                </div>
                <div className="border-l p-4 text-center text-sm font-bold text-primary">
                  Arco Unlimited
                </div>
                <div className="border-l p-4 text-center text-sm font-semibold text-muted-foreground">
                  AI Fiesta
                  <br />
                  <span className="text-xs font-normal">($12/mo billed monthly)</span>
                </div>
                <div className="border-l p-4 text-center text-sm font-semibold text-muted-foreground">
                  AI Fiesta
                  <br />
                  <span className="text-xs font-normal">(yearly plan)</span>
                </div>
              </div>
              {pricingRows.map((row) => (
                <div key={row.label} className="grid grid-cols-4 border-b">
                  <div className="p-4 text-sm text-muted-foreground">
                    {row.label}
                  </div>
                  <div className="border-l bg-primary/5 p-4 text-center text-sm">
                    {row.arco}
                  </div>
                  <div className="border-l p-4 text-center text-sm">
                    {row.monthly}
                  </div>
                  <div className="border-l p-4 text-center text-sm">
                    {row.yearly}
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-4 border-b font-semibold">
                <div className="p-4 text-sm">3-year total</div>
                <div className="border-l bg-primary/5 p-4 text-center text-primary">
                  ${arcoPrice}
                </div>
                <div className="border-l p-4 text-center">
                  ~${aifiestaMonthlyYear * 3}
                </div>
                <div className="border-l p-4 text-center">
                  ~${aifiestaYearlyYear * 3}
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="p-4 text-sm text-muted-foreground">
                  Ongoing token cost
                </div>
                <div className="border-l bg-primary/5 p-4 text-center text-sm">
                  Pay OpenRouter directly, no markup
                </div>
                <div className="border-l p-4 text-center text-sm">
                  Included, capped by monthly token pool
                </div>
                <div className="border-l p-4 text-center text-sm">
                  Included, capped by monthly token pool
                </div>
              </div>
            </div>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-base">
                The fine print worth knowing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">
                    Premium models count at 4x.
                  </strong>{" "}
                  Claude, Grok, and other premium models in AI Fiesta consume
                  tokens four times faster than standard models. Multi-model
                  comparison makes that add up quickly.
                </li>
                <li>
                  <strong className="text-foreground">
                    Running out means contacting support.
                  </strong>{" "}
                  AI Fiesta says 99% of users never hit the 3M token limit, but
                  if you do, you need to reach out for a paid top-up. No
                  self-serve overage billing.
                </li>
                <li>
                  <strong className="text-foreground">
                    Arco&apos;s ongoing cost is your OpenRouter usage.
                  </strong>{" "}
                  It can be $0 in a quiet month. AI Fiesta bills the flat rate
                  whether you used it or not.
                </li>
              </ul>
            </CardContent>
          </Card>
        </MaxWidthWrapper>
      </section>

      {/* Getting started */}
      <section className="py-16 md:py-20">
        <MaxWidthWrapper>
          <HeaderSection
            label="Switching"
            title="Switching from AI Fiesta? Here's how you start."
            subtitle="Three steps, about five minutes total."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <Card key={step.n}>
                <CardHeader>
                  <Badge variant="outline" className="w-fit">
                    Step {step.n}
                  </Badge>
                  <CardTitle className="pt-3 text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Alert className="mt-8">
            <AlertTitle>What about my AI Fiesta history?</AlertTitle>
            <AlertDescription>
              Chat history isn&apos;t portable between the two apps. Most people
              keep their AI Fiesta subscription running for a week or two while
              they move over, then cancel once they&apos;re comfortable. AI
              Fiesta chats stay on their servers either way.
            </AlertDescription>
          </Alert>
        </MaxWidthWrapper>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <MaxWidthWrapper className="max-w-3xl">
          <HeaderSection
            label="FAQ"
            title="Questions people ask before switching"
            subtitle="Straight answers, including where AI Fiesta still wins."
          />
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MaxWidthWrapper>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <MaxWidthWrapper className="max-w-3xl">
          <Card>
            <CardContent className="p-10 text-center">
              <h2 className="font-heading text-3xl md:text-4xl">
                Try Arco. Free forever tier. No card required.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Compare 400+ models with your own OpenRouter key. Chats stay on
                your Mac.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
                <DownloadButton
                  className={cn(
                    buttonVariants({ size: "lg", rounded: "lg" }),
                    "gap-2 px-7",
                  )}
                >
                  <span>Download Arco free</span>
                </DownloadButton>
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "lg",
                      rounded: "lg",
                    }),
                    "gap-1 px-6",
                  )}
                >
                  See the full feature list
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
