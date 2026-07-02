import { ArrowRight, Check, Layers, Shield, Wallet, X } from "lucide-react";
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
  title: "MultiLLM Alternative with 400+ Models, Not Just Three | Arco",
  description:
    "Looking for a MultiLLM alternative? Arco lets you compare 400+ AI models on your own OpenRouter key, with no monthly subscription and every chat kept on your Mac.",
});

type Cell = "yes" | "no" | string;

function ValueCell({ value }: { value: Cell }) {
  if (value === "yes") return <Check className="mx-auto size-5 text-green-500" />;
  if (value === "no") return <X className="mx-auto size-5 text-red-400" />;
  return <span className="text-sm font-medium text-amber-500">{value}</span>;
}

const featureRows: Array<{ feature: string; arco: Cell; multillm: Cell }> = [
  { feature: "Send one prompt to every selected model", arco: "yes", multillm: "yes" },
  { feature: "Models available", arco: "400+", multillm: "3 providers" },
  { feature: "Add any new model instantly", arco: "yes", multillm: "no" },
  { feature: "Chats stored locally on your device", arco: "yes", multillm: "no" },
  { feature: "Bring your own model key", arco: "yes", multillm: "no" },
  { feature: "No monthly subscription", arco: "yes", multillm: "no" },
  { feature: "No query caps on paid tier", arco: "yes", multillm: "no" },
  { feature: "Structured AI summary of replies", arco: "yes", multillm: "no" },
  { feature: "Full-featured free tier", arco: "yes", multillm: "5 queries" },
  { feature: "Native macOS app (Apple Silicon)", arco: "yes", multillm: "no" },
  { feature: "Works on Windows / iOS / Android", arco: "no", multillm: "yes" },
  { feature: "Shareable conversation links", arco: "no", multillm: "yes" },
];

const differentiators = [
  {
    icon: Layers,
    title: "400+ models on tap, not just three.",
    body: "MultiLLM gives you ChatGPT, Claude, and Gemini. That's it. Every other model on the market, Mistral, Llama, DeepSeek, Qwen, Grok, open-source fine-tunes, is off the table. Arco runs on OpenRouter, so anything OpenRouter supports is one click away. When a new model drops, you add its ID and use it that day.",
  },
  {
    icon: Shield,
    title: "Your chats stay on your Mac. Not on their servers.",
    body: "Every MultiLLM conversation lives on their infrastructure so they can power history, search, pin, and share. That's their retention policy, their access controls, and their breach risk holding your prompts. Arco stores every chat locally. There is no server sitting between you and the model.",
  },
  {
    icon: Wallet,
    title: "Your cost tracks your usage.",
    body: "Skip a month with MultiLLM and they still charge you $190 or $390 a year. Skip a month with Arco and your token bill is $0. You bought the app once, you already own it. Pay OpenRouter for the days you actually asked something, not for the days you didn't.",
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
    body: "Sign up at openrouter.ai (free account) and paste your key into Arco. One key unlocks 400+ models.",
  },
  {
    n: "3",
    title: "Ask every model at once",
    body: "Type once. Every model you picked answers in parallel. Compare, summarize, copy.",
  },
];

const faqs = [
  {
    q: "Is my data safe?",
    a: "Yes. Every Arco conversation stays on your Mac. Nothing gets uploaded and nothing lives on our servers, because we don't run any. Your OpenRouter key is stored locally too.",
  },
  {
    q: "What if I'm on Windows, Linux, or mobile?",
    a: "MultiLLM is the better pick here. Arco is macOS 13+ on Apple Silicon only. MultiLLM is a web app, so it works on any browser (Windows, Linux, iOS, Android). If you split time between machines or want a phone-friendly version, that's a real gap on our side.",
  },
  {
    q: "What does MultiLLM do better than Arco?",
    a: "Three things. Platform coverage: it runs in any browser, Arco is Mac only. Zero setup: MultiLLM handles the API for you, Arco makes you create an OpenRouter account first (about 3 minutes, but it's an extra step). Shareable conversations: MultiLLM gives you a link to send a chat to a teammate, Arco doesn't. If any of those matter more than model breadth, privacy, or pricing, MultiLLM is a fair choice.",
  },
  {
    q: "Do I need an OpenRouter account?",
    a: "Yes. Sign up at openrouter.ai (free to create). You add credit and pay providers directly for the tokens you use. Arco doesn't touch the billing or take a cut.",
  },
  {
    q: "Can I use models beyond ChatGPT, Claude, and Gemini?",
    a: "Yes, that's the point. OpenRouter carries 400+ models including Mistral, Llama, DeepSeek, Qwen, Grok, and dozens of open-source and fine-tuned models. Pick any of them in Arco. MultiLLM is locked to three provider families.",
  },
  {
    q: "Can I switch back?",
    a: "Yes, and you can run both at once. Try Arco while your MultiLLM subscription is still active. If Arco doesn't fit your workflow, keep using MultiLLM. There's nothing to cancel on Arco's side because there's no subscription.",
  },
];

const multillmProYear = 190;
const multillmPremiumYear = 390;

export default function ArcoVsMultiLLMPage() {
  const arcoPrice = UNLIMITED_CURRENT_BATCH_PRICE;
  const pricingRows = [
    { label: "Year 1", arco: `$${arcoPrice} one-time`, pro: `$${multillmProYear}`, prem: `$${multillmPremiumYear}` },
    { label: "Year 2", arco: "$0", pro: `$${multillmProYear}`, prem: `$${multillmPremiumYear}` },
    { label: "Year 3", arco: "$0", pro: `$${multillmProYear}`, prem: `$${multillmPremiumYear}` },
  ];

  return (
    <>
      {/* Hero */}
      <section className="space-y-6 py-12 sm:py-16 lg:py-20">
        <MaxWidthWrapper className="flex max-w-4xl flex-col items-center gap-6 text-center">
          <Badge variant="outline" className="px-3 py-1">
            MultiLLM alternative
          </Badge>

          <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[56px]">
            Arco: the MultiLLM alternative{" "}
            <span className="text-primary">
              with 400+ models to compare, not just three.
            </span>
          </h1>

          <p className="max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            MultiLLM locks you to ChatGPT, Claude, and Gemini, bills you every
            month, and stores every conversation on their servers. Arco lets
            you pick from 400+ models on your own OpenRouter key, pay only for
            the tokens you actually use, and keeps every chat on your Mac.
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
              src="/_static/competitors/arco-vs-multillm.webp"
              alt="Arco vs MultiLLM"
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
                    Pay once. No monthly bill, no query caps
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Where MultiLLM falls short</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    Only 3 provider families (ChatGPT, Claude, Gemini)
                  </li>
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    Query caps on every paid tier, no refunds
                  </li>
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    Chats live on their servers, not yours
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
                  Pick MultiLLM if you&apos;re on Windows, Linux, or mobile, or
                  if you want zero-setup access to ChatGPT, Claude, and Gemini
                  in a browser. Pick Arco if you&apos;re on a Mac, want access
                  to every model on the market (not just three), and don&apos;t
                  want another monthly subscription.
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
            title="Arco vs MultiLLM, feature by feature"
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
                  MultiLLM
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
                    <ValueCell value={row.multillm} />
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
            subtitle="The specific things MultiLLM can't match."
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
            subtitle="MultiLLM bundles the subscription with API access. Arco separates them. You buy the app once and pay OpenRouter directly for the tokens you actually use. Here is the breakdown."
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
                  MultiLLM Pro
                  <br />
                  <span className="text-xs font-normal">(yearly)</span>
                </div>
                <div className="border-l p-4 text-center text-sm font-semibold text-muted-foreground">
                  MultiLLM Premium
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
                    {row.pro}
                  </div>
                  <div className="border-l p-4 text-center text-sm">
                    {row.prem}
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-4 border-b font-semibold">
                <div className="p-4 text-sm">3-year total</div>
                <div className="border-l bg-primary/5 p-4 text-center text-primary">
                  ${arcoPrice}
                </div>
                <div className="border-l p-4 text-center">
                  ${multillmProYear * 3}
                </div>
                <div className="border-l p-4 text-center">
                  ${multillmPremiumYear * 3}
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
                  Included, capped by query limit
                </div>
                <div className="border-l p-4 text-center text-sm">
                  Included, capped by higher query limit
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
                    Free tiers are not the same size.
                  </strong>{" "}
                  MultiLLM&apos;s free tier is 5 queries total, not 5 per month.
                  Arco&apos;s free tier has full features with a 3-saved-conversation
                  cap, so you can decide with real usage.
                </li>
                <li>
                  <strong className="text-foreground">
                    Every paid tier still has a query limit.
                  </strong>{" "}
                  Pro is a &quot;high&quot; limit and Premium is a
                  &quot;maximum&quot; limit. Neither is uncapped.
                </li>
                <li>
                  <strong className="text-foreground">
                    Arco&apos;s ongoing cost is your OpenRouter usage.
                  </strong>{" "}
                  It can be $0 in a light month. MultiLLM bills the flat rate
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
            title="Switching from MultiLLM? Here's how you start."
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
            <AlertTitle>What about my MultiLLM history?</AlertTitle>
            <AlertDescription>
              Chat history isn&apos;t portable between the two apps. Most people
              keep MultiLLM active for a week or two while they move over, then
              cancel once Arco fits their workflow.
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
            subtitle="Straight answers, including where MultiLLM still wins."
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
