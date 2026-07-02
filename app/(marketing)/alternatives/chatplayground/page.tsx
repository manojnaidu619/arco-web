import { ArrowRight, Ban, Check, Cpu, Shield, X } from "lucide-react";
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
  title: "ChatPlayground Alternative for Mac with 400+ Models | Arco",
  description:
    "Looking for a chatplayground.ai alternative? Arco lets you compare 400+ AI models with your own OpenRouter key, no monthly subscription, and every chat stays on your Mac. Built to help you decide, not just compare.",
});

type Cell = "yes" | "no" | string;

function ValueCell({ value }: { value: Cell }) {
  if (value === "yes") return <Check className="mx-auto size-5 text-green-500" />;
  if (value === "no") return <X className="mx-auto size-5 text-red-400" />;
  return <span className="text-sm font-medium text-amber-500">{value}</span>;
}

const featureRows: Array<{ feature: string; arco: Cell; cp: Cell }> = [
  { feature: "Send one prompt to every selected model", arco: "yes", cp: "yes" },
  { feature: "400+ models available", arco: "yes", cp: "~30 curated" },
  { feature: "Bring your own model key", arco: "yes", cp: "no" },
  { feature: "Add any new model the day it drops", arco: "yes", cp: "no" },
  { feature: "Chats stored locally on your device", arco: "yes", cp: "no" },
  { feature: "No monthly subscription", arco: "yes", cp: "no" },
  { feature: "Structured AI summary of replies", arco: "yes", cp: "partial" },
  { feature: "Native macOS app (Apple Silicon)", arco: "yes", cp: "no" },
  { feature: "Works in the browser (any OS)", arco: "no", cp: "yes" },
  { feature: "Prompt template library built in", arco: "no", cp: "yes" },
];

const differentiators = [
  {
    icon: Cpu,
    title: "400+ models on your key, not 30 they picked for you.",
    body: "ChatPlayground gives you a curated shortlist of around 30 models. Whatever they integrated is what you get. Arco connects to OpenRouter, so you can pick from 400+ models today and add whatever ships tomorrow by pasting a model ID. No waiting for their roadmap.",
  },
  {
    icon: Shield,
    title: "Your chats stay on your Mac. Not in a browser tab that talks to their servers.",
    body: "ChatPlayground says they don't store your conversations, but every prompt still transits their infrastructure. You are trusting their claim. Arco stores everything locally. There is no Arco server your prompt has to pass through, because we don't run one.",
  },
  {
    icon: Ban,
    title: "One payment, then it's yours. No renewal notices.",
    body: "ChatPlayground charges $20 a month, or $180 a year on the annual plan. Skip a month and you still pay for that month. Arco is a one-time thing. Buy it once, keep it. Your only ongoing cost is the OpenRouter tokens you actually use.",
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
    a: "Yes. Every Arco conversation stays on your Mac. Nothing gets uploaded, nothing lives on our servers, because we do not run any. Your OpenRouter key is stored locally too. ChatPlayground says they don't store conversations either, but your prompts still travel through their servers. That is a different privacy posture than Arco's local-first model.",
  },
  {
    q: "What if I'm on Windows or mobile?",
    a: "ChatPlayground is the better pick here. Arco is macOS 13+ on Apple Silicon only. ChatPlayground runs in the browser (Chrome is required, with their extension), which means you can use it from Windows, Linux, or a phone. If cross-platform matters more than local storage or model breadth, ChatPlayground is a fair choice.",
  },
  {
    q: "What does ChatPlayground do better than Arco?",
    a: "Three things. It runs in a browser, so it works on any OS (Arco is Mac only). It's turnkey. The models are included in the subscription, so you don't set up OpenRouter first (Arco takes about 3 minutes to set up, but it is an extra step). And it ships with a prompt template library built in (Arco doesn't have one yet). If any of those matter more than pricing, privacy, or model breadth, ChatPlayground is a fair choice.",
  },
  {
    q: "Do I need an OpenRouter account?",
    a: "Yes. Sign up at openrouter.ai (free to create). You add credit and pay providers directly for the tokens you use. Arco does not touch the billing or take a cut. This is the trade you make for 400+ models, BYOK, and no subscription.",
  },
  {
    q: "How many models can I compare at once?",
    a: "Enough to cover the workflow. ChatPlayground lets you compare up to 4 models side by side. Arco handles the same use case comfortably, and you're picking from 400+ options instead of 30.",
  },
  {
    q: "Can I switch back?",
    a: "Yes, and you can run both at once. Try Arco for a couple of weeks while your ChatPlayground subscription is still active. If Arco does not fit your workflow, keep using ChatPlayground. There is nothing to cancel on Arco's side because there is no subscription.",
  },
];

const cpMonthlyYear = 240;
const cpYearlyYear = 180;

export default function ArcoVsChatPlaygroundPage() {
  const arcoPrice = UNLIMITED_CURRENT_BATCH_PRICE;
  const pricingRows = [
    { label: "Year 1", arco: `$${arcoPrice} one-time`, m: `$${cpMonthlyYear}`, y: `$${cpYearlyYear}` },
    { label: "Year 2", arco: "$0", m: `$${cpMonthlyYear}`, y: `$${cpYearlyYear}` },
    { label: "Year 3", arco: "$0", m: `$${cpMonthlyYear}`, y: `$${cpYearlyYear}` },
  ];

  return (
    <>
      {/* Hero */}
      <section className="space-y-6 py-12 sm:py-16 lg:py-20">
        <MaxWidthWrapper className="flex max-w-4xl flex-col items-center gap-6 text-center">
          <Badge variant="outline" className="px-3 py-1">
            ChatPlayground alternative
          </Badge>

          <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[56px]">
            Arco: the ChatPlayground alternative{" "}
            <span className="text-primary">
              with 400+ models on your own key, on your Mac.
            </span>
          </h1>

          <p className="max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            ChatPlayground gives you around 30 models they picked, in a browser
            tab, for $180 a year. Arco lets you pick from 400+ models on your
            own OpenRouter key, pay only for the tokens you actually use, and
            keeps every chat on your Mac.
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
              src="/_static/competitors/arco-vs-chatplayground.webp"
              alt="Arco vs ChatPlayground"
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
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Where ChatPlayground falls short</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    Only ~30 curated models, no BYOK
                  </li>
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    Runs in a browser tab, prompts hit their servers
                  </li>
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    $20 a month even when you barely use it
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
                  Pick ChatPlayground if you&apos;re on Windows or Linux, or if
                  you want a browser tab you never have to configure. Pick Arco
                  if you&apos;re on a Mac, want access to every model on
                  OpenRouter, care where your chats live, and don&apos;t want
                  another monthly subscription.
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
            title="Arco vs ChatPlayground, feature by feature"
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
                  ChatPlayground
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
                    <ValueCell value={row.cp} />
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
            subtitle="The specific things ChatPlayground can't match."
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
            subtitle="ChatPlayground bundles its subscription with API access. Arco separates them. You buy the app once and pay OpenRouter directly for the tokens you actually use. Here is the breakdown."
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
                  ChatPlayground
                  <br />
                  <span className="text-xs font-normal">(monthly)</span>
                </div>
                <div className="border-l p-4 text-center text-sm font-semibold text-muted-foreground">
                  ChatPlayground
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
                  ${cpMonthlyYear * 3}
                </div>
                <div className="border-l p-4 text-center">
                  ${cpYearlyYear * 3}
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
                  Included, ~30 models
                </div>
                <div className="border-l p-4 text-center text-sm">
                  Included, ~30 models
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
                    The Lifetime Deal isn&apos;t shown on their homepage.
                  </strong>{" "}
                  ChatPlayground offers a $575 lifetime tier (marked down from
                  $875), but you only see it after creating an account and
                  digging into the billing page. The public landing page shows
                  the $20/month and $15/month options only. Arco&apos;s pricing
                  is on the homepage.
                </li>
                <li>
                  <strong className="text-foreground">
                    Every ChatPlayground user needs their own subscription.
                  </strong>{" "}
                  No team-seat discount surfaced on their public pricing.
                </li>
                <li>
                  <strong className="text-foreground">
                    ChatPlayground requires Chrome and their browser extension.
                  </strong>{" "}
                  Firefox and Safari users can&apos;t use it as their default
                  browser.
                </li>
                <li>
                  <strong className="text-foreground">
                    Arco&apos;s ongoing cost is your OpenRouter usage.
                  </strong>{" "}
                  It can be $0 in a light month. ChatPlayground bills the flat
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
            title="Switching from ChatPlayground? Here's how you start."
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
            <AlertTitle>What about my ChatPlayground history?</AlertTitle>
            <AlertDescription>
              Chat history isn&apos;t portable between the two apps. Most people
              keep their ChatPlayground subscription running for a week or two
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
            subtitle="Straight answers, including where ChatPlayground still wins."
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
                A native Mac app built to help you decide, not just compare.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                No browser tab, no curated shortlist. A native Mac app with
                every model on OpenRouter, and every chat stored locally.{" "}So you can stop guessing and start deciding.
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
