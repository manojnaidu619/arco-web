import { ArrowRight, Check, Cpu, EyeOff, Shield, X } from "lucide-react";
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

const banner = "/_static/competitors/arco-vs-chatcomparison.webp";

export const metadata = constructMetadata({
  title: "ChatComparison.ai Alternative with 400+ Models on Your Key | Arco",
  description:
    "Looking for a ChatComparison.ai alternative? Arco lets you compare 400+ AI models with your own OpenRouter key, no monthly subscription, and every chat stays on your Mac. Built to help you decide, not just compare.",
  image: banner,
});

type Cell = "yes" | "no" | string;

function ValueCell({ value }: { value: Cell }) {
  if (value === "yes") return <Check className="mx-auto size-5 text-green-500" />;
  if (value === "no") return <X className="mx-auto size-5 text-red-400" />;
  return <span className="text-sm font-medium text-amber-500">{value}</span>;
}

const featureRows: Array<{ feature: string; arco: Cell; cc: Cell }> = [
  { feature: "Send one prompt to every selected model", arco: "yes", cc: "yes" },
  { feature: "400+ models available", arco: "yes", cc: "~40 curated" },
  { feature: "Bring your own model key", arco: "yes", cc: "no" },
  { feature: "Add any new model the day it drops", arco: "yes", cc: "no" },
  { feature: "Chats stored locally on your device", arco: "yes", cc: "no" },
  { feature: "No monthly subscription", arco: "yes", cc: "no" },
  { feature: "Pricing shown before signup", arco: "yes", cc: "no" },
  { feature: "Structured AI summary of replies", arco: "yes", cc: "yes" },
  { feature: "Native macOS app (Apple Silicon)", arco: "yes", cc: "no" },
  { feature: "Works in the browser (any OS)", arco: "no", cc: "yes" },
];

const differentiators = [
  {
    icon: Cpu,
    title: "400+ models on your key, not 40 they picked for you.",
    body: "ChatComparison.ai gives you around 40 models in a curated catalog. Whatever they integrated is what you get, and when a new frontier model ships you wait for them to add it. Arco connects to OpenRouter, so you can pick from 400+ models today and add whatever ships tomorrow by pasting a model ID.",
  },
  {
    icon: Shield,
    title: "Your chats stay on your Mac. Not in a browser tab that talks to their servers.",
    body: "ChatComparison.ai runs in the browser and every prompt transits their infrastructure. Their privacy posture isn't published on the landing page. Arco stores everything locally on your Mac. There is no Arco server your prompt has to pass through, because we don't run one.",
  },
  {
    icon: EyeOff,
    title: "Pricing you can see before you hand over an email.",
    body: "ChatComparison.ai doesn't publish pricing on its landing page. You have to create an account and dig into the dashboard to find out what a plan costs. Arco's pricing is on the homepage, one click away. What you see is what you pay: one time.",
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
    a: "Yes. Every Arco conversation stays on your Mac. Nothing gets uploaded, nothing lives on our servers, because we do not run any. Your OpenRouter key is stored locally too. ChatComparison.ai runs in the browser and routes every prompt through their infrastructure. Their public site doesn't publish a data-retention policy, so you're trusting whatever their internal defaults are.",
  },
  {
    q: "What if I'm on Windows or mobile?",
    a: "ChatComparison.ai is the better pick here. Arco is macOS 13+ on Apple Silicon only. ChatComparison.ai runs in the browser, which means you can use it from Windows, Linux, or a phone. If cross-platform matters more than local storage or model breadth, ChatComparison.ai is a fair choice.",
  },
  {
    q: "What does ChatComparison.ai do better than Arco?",
    a: "Two things. It runs in a browser, so it works on any OS (Arco is Mac only). And its models are included in the subscription, so you don't set up OpenRouter first (Arco takes about 3 minutes to set up, but it is an extra step). If either of those matters more than pricing transparency, privacy, or model breadth, ChatComparison.ai is a fair choice.",
  },
  {
    q: "Do I need an OpenRouter account?",
    a: "Yes. Sign up at openrouter.ai (free to create). You add credit and pay providers directly for the tokens you use. Arco does not touch the billing or take a cut. This is the trade you make for 400+ models, BYOK, and no subscription.",
  },
  {
    q: "Why isn't ChatComparison.ai's pricing on their landing page?",
    a: "We don't know. We could only find the current numbers by creating an account and opening the dashboard, where the plan selector is shown. The pricing on this page reflects what we saw there: $20 a month, $15 a month on the annual plan ($180 a year), or a $575 lifetime deal marked down from $875. Third-party listings show older numbers, so those may not be current.",
  },
  {
    q: "Can I switch back?",
    a: "Yes, and you can run both at once. Try Arco for a couple of weeks while your ChatComparison.ai subscription is still active. If Arco does not fit your workflow, keep using ChatComparison.ai. There is nothing to cancel on Arco's side because there is no subscription.",
  },
];

const ccMonthlyYear = 240;
const ccYearlyYear = 180;

export default function ArcoVsChatComparisonPage() {
  const arcoPrice = UNLIMITED_CURRENT_BATCH_PRICE;
  const pricingRows = [
    { label: "Year 1", arco: `$${arcoPrice} one-time`, m: `$${ccMonthlyYear}`, y: `$${ccYearlyYear}` },
    { label: "Year 2", arco: "$0", m: `$${ccMonthlyYear}`, y: `$${ccYearlyYear}` },
    { label: "Year 3", arco: "$0", m: `$${ccMonthlyYear}`, y: `$${ccYearlyYear}` },
  ];

  return (
    <>
      {/* Hero */}
      <section className="space-y-6 py-12 sm:py-16 lg:py-20">
        <MaxWidthWrapper className="flex max-w-4xl flex-col items-center gap-6 text-center">
          <Badge variant="outline" className="px-3 py-1">
            ChatComparison.ai alternative
          </Badge>

          <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[56px]">
            Arco: the ChatComparison.ai alternative{" "}
            <span className="text-primary">
              with 400+ models on your own key, not 40 on theirs.
            </span>
          </h1>

          <p className="max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            ChatComparison.ai bundles around 40 models into a browser tab and
            charges $180 a year for it. Arco lets you pick from 400+ models on
            your own OpenRouter key, pay only for the tokens you actually use,
            and keeps every chat on your Mac.
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
              src={banner}
              alt="Arco vs ChatComparison.ai"
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
                    400+ models via your own OpenRouter key
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-green-500" />
                    Chats stay on your Mac, never uploaded
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-green-500" />
                    Pay only when you use it. No monthly bill
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-green-500" />
                    Pricing on the homepage, not behind signup
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Where ChatComparison.ai falls short</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    Only ~40 curated models, no BYOK
                  </li>
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    Runs in a browser tab, prompts hit their servers
                  </li>
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    $180 a year even when you barely use it
                  </li>
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    Pricing hidden behind account signup
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
                  Pick ChatComparison.ai if you&apos;re on Windows or Linux, or if
                  you want a browser tab you never have to configure. Pick Arco
                  if you&apos;re on a Mac, want access to every model on
                  OpenRouter, care where your chats live, and want to know what
                  something costs before you sign up.
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
            title="Arco vs ChatComparison.ai, feature by feature"
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
                  ChatComparison.ai
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
                    <ValueCell value={row.cc} />
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
            subtitle="The specific things ChatComparison.ai can't match."
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
            subtitle="ChatComparison.ai bundles its subscription with API access. Arco separates them. You buy the app once and pay OpenRouter directly for the tokens you actually use. Here is the breakdown."
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
                  ChatComparison.ai
                  <br />
                  <span className="text-xs font-normal">(monthly)</span>
                </div>
                <div className="border-l p-4 text-center text-sm font-semibold text-muted-foreground">
                  ChatComparison.ai
                  <br />
                  <span className="text-xs font-normal">(yearly)</span>
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
                    {row.m}
                  </div>
                  <div className="border-l p-4 text-center text-sm">
                    {row.y}
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-4 border-b font-semibold">
                <div className="p-4 text-sm">3-year total</div>
                <div className="border-l bg-primary/5 p-4 text-center text-primary">
                  ${arcoPrice}
                </div>
                <div className="border-l p-4 text-center">
                  ${ccMonthlyYear * 3}
                </div>
                <div className="border-l p-4 text-center">
                  ${ccYearlyYear * 3}
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
                  Included, ~40 models
                </div>
                <div className="border-l p-4 text-center text-sm">
                  Included, ~40 models
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
                    ChatComparison.ai does not publish pricing on their landing page.
                  </strong>{" "}
                  We could only find the current numbers by creating an account
                  and opening the dashboard. The prices above are what we saw
                  there.
                </li>
                <li>
                  <strong className="text-foreground">
                    A $575 lifetime deal is also on offer.
                  </strong>{" "}
                  Marked down from $875. That is a one-time payment, but you are
                  still locked into the ~40 curated models they maintain.
                </li>
                <li>
                  <strong className="text-foreground">
                    Arco&apos;s ongoing cost is your OpenRouter usage.
                  </strong>{" "}
                  It can be $0 in a light month. ChatComparison.ai bills the flat
                  rate whether you used it or not.
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
            title="Switching from ChatComparison.ai? Here's how you start."
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
            <AlertTitle>What about my ChatComparison.ai history?</AlertTitle>
            <AlertDescription>
              Chat history isn&apos;t portable between the two apps. Most people
              keep their ChatComparison.ai subscription running for a week or two
              while they move over, then cancel once they&apos;re comfortable.
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
            subtitle="Straight answers, including where ChatComparison.ai still wins."
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
                Better decisions need better coverage. 400+ models on your key.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Bring your own OpenRouter key and pick from every model on the
                market. New model drops? Add it yourself in seconds.{" "}So you can stop guessing and start deciding.
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
