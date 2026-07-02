import { ArrowRight, Check, Coins, Shield, Target, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { DownloadButton } from "@/components/shared/download-button";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UNLIMITED_CURRENT_BATCH_PRICE } from "@/config/subscriptions";
import { cn, constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "TypingMind Alternative Built Around Model Comparison | Arco",
  description:
    "Looking for a TypingMind alternative? Arco is purpose-built for comparing 400+ AI models with one OpenRouter key. Multi-model comparison is free, not a $99 upsell. Every chat stays on your Mac.",
});

type Cell = "yes" | "no" | string;

function ValueCell({ value }: { value: Cell }) {
  if (value === "yes") return <Check className="mx-auto size-5 text-green-500" />;
  if (value === "no") return <X className="mx-auto size-5 text-red-400" />;
  return <span className="text-sm font-medium text-amber-500">{value}</span>;
}

const featureRows: Array<{ feature: string; arco: Cell; typingmind: Cell }> = [
  {
    feature: "Ask one question, every model answers in parallel",
    arco: "yes",
    typingmind: "Premium only",
  },
  {
    feature: "Multi-model comparison on the free tier",
    arco: "yes",
    typingmind: "no",
  },
  {
    feature: "Purpose-built for model comparison",
    arco: "yes",
    typingmind: "One feature of many",
  },
  {
    feature: "400+ models via OpenRouter",
    arco: "yes",
    typingmind: "yes",
  },
  {
    feature: "OpenRouter is the default path in",
    arco: "yes",
    typingmind: "One integration option",
  },
  {
    feature: "Structured AI summary of all replies",
    arco: "yes",
    typingmind: "no",
  },
  {
    feature: "Chats stored in a local database on your device",
    arco: "yes",
    typingmind: "Browser only",
  },
  {
    feature: "Cross-device sync available",
    arco: "no",
    typingmind: "50MB free, then $10/mo",
  },
  {
    feature: "Native desktop app",
    arco: "Mac only",
    typingmind: "no",
  },
  {
    feature: "Works on Windows / Linux / Web",
    arco: "no",
    typingmind: "yes",
  },
  {
    feature: "AI agents and RAG knowledge base",
    arco: "no",
    typingmind: "yes",
  },
  {
    feature: "Plugins, web search, image generation",
    arco: "no",
    typingmind: "Extended / Premium",
  },
  {
    feature: "No monthly subscription (individual)",
    arco: "yes",
    typingmind: "yes",
  },
];

const differentiators = [
  {
    icon: Target,
    title: "Comparison is the whole product, not a $99 upsell.",
    body: "TypingMind is a feature-rich AI workspace: agents, knowledge bases, plugins, a canvas editor. Multi-model parallel chat sits at the top of that feature stack, locked behind the $99 Premium tier. In Arco, asking multiple models the same question and comparing their answers is what the entire app does. It is free from the first launch, with no tier to unlock.",
  },
  {
    icon: Coins,
    title: "OpenRouter-first, not OpenRouter as an add-on.",
    body: "TypingMind supports OpenRouter, and you can paste in one key to reach many models. But TypingMind is a general AI workspace: direct OpenAI keys, Anthropic keys, plugins, agents, and OpenRouter all live side by side. Arco is built around OpenRouter from the first screen. One key, one catalog, one job: compare models and pick the best answer.",
  },
  {
    icon: Shield,
    title: "A real app on your Mac, not a browser tab with local storage.",
    body: "TypingMind runs in a browser. Your chats live in browser localStorage by default, with a finite storage limit. TypingMind Cloud is a separate opt-in service for sync across devices. It includes 50MB of free cloud storage, with paid upgrades at $10/month if you need more. It is not included when you buy a license. Arco is a native Mac app that writes to a local database on your machine. Your history stays put without a recurring cloud bill.",
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
    body: "Sign up at openrouter.ai (free account) and paste your key into Arco. That one key covers every model on OpenRouter.",
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
    a: "Yes. Every Arco conversation stays on your Mac. Nothing gets uploaded, because there are no Arco servers. Your OpenRouter key is stored locally too.",
  },
  {
    q: "What if I'm on Windows?",
    a: "Arco is Mac-only today (macOS 13+, Apple Silicon). TypingMind runs in any browser, so it covers Windows and Linux. If Mac is your primary machine, Arco is the stronger pick for the comparison workflow. If you're on Windows, TypingMind is a reasonable option.",
  },
  {
    q: "What does TypingMind do better than Arco?",
    a: "Quite a bit, honestly, if your needs go beyond comparison. TypingMind has AI agents, a RAG knowledge base, MCP server integration, a plugin ecosystem, image generation, web search, and a canvas editor. It also works on Windows and Linux, and it supports OpenRouter alongside direct provider keys. If you need that full workspace, TypingMind earns its price. Arco is narrower: it does one job well.",
  },
  {
    q: "Doesn't TypingMind support OpenRouter?",
    a: "Yes. You can add an OpenRouter API key in TypingMind and enable models from their catalog. Arco supports OpenRouter too. The difference is focus: Arco is built entirely around that one key and the comparison workflow. TypingMind treats OpenRouter as one integration option inside a broader AI workspace, and multi-model parallel chat still requires Premium.",
  },
  {
    q: "Do I need an OpenRouter account?",
    a: "Yes. Sign up at openrouter.ai (free to create). You add credit and pay providers directly for the tokens you use. Arco doesn't touch the billing or take a cut.",
  },
  {
    q: "Does TypingMind include cloud sync?",
    a: "Not with your license. TypingMind stores chats locally in your browser by default. For cross-device sync, TypingMind Cloud is a separate opt-in service. It includes 50MB of free cloud storage, with paid upgrades at $10/month if you need more room. Buying a license does not automatically give you a cloud account.",
  },
  {
    q: "Can I switch back?",
    a: "Yes, and you can run both at once. Try Arco while your TypingMind license is still active. If the comparison workflow doesn't fit, keep using TypingMind. There is nothing to cancel on Arco's side, because there is no subscription.",
  },
];

export default function ArcoVsTypingMindPage() {
  const arcoPrice = UNLIMITED_CURRENT_BATCH_PRICE;

  return (
    <>
      {/* Hero */}
      <section className="space-y-6 py-12 sm:py-16 lg:py-20">
        <MaxWidthWrapper className="flex max-w-4xl flex-col items-center gap-6 text-center">
          <Badge variant="outline" className="px-3 py-1">
            TypingMind alternative
          </Badge>

          <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[56px]">
            Arco: the TypingMind alternative{" "}
            <span className="text-primary">
              where model comparison is the whole point.
            </span>
          </h1>

          <p className="max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            TypingMind is a powerful AI workspace with agents, plugins, and a
            knowledge base. Multi-model comparison is one feature inside it,
            locked behind the $99 Premium tier. Arco is built around a single
            job: ask every model the same question, read the answers side by
            side, and pick the best one. That workflow is free from the start.
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
              src="/_static/competitors/arco-vs-typingmind.webp"
              alt="Arco vs TypingMind"
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
                    Multi-model comparison is free in Arco. TypingMind requires
                    the $99 Premium tier to unlock the same feature.
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-green-500" />
                    OpenRouter is the whole app, not one integration tucked
                    inside a larger workspace.
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-green-500" />
                    Native Mac app with a real local database. Chats don&apos;t
                    live in browser localStorage where they can disappear.
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Where TypingMind falls short</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    Comparing models is a Premium feature. The $39 and $79 tiers
                    don&apos;t include it.
                  </li>
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    Browser-based app. Chats in localStorage can be lost if you
                    clear browser data or switch browsers.
                  </li>
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    Browser localStorage has limits. TypingMind Cloud offers
                    50MB free, then $10/month for more. It is not included
                    with your license purchase.
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
                  Pick TypingMind if you need a full AI workspace: agents, a
                  knowledge base, plugins, web search, and image generation. It
                  also wins if you&apos;re on Windows or Linux. Pick Arco if
                  comparing model responses is the job you actually need done,
                  you&apos;re on a Mac, and you want that workflow free and
                  ready from the first launch.
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
            title="Arco vs TypingMind, feature by feature"
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
                  TypingMind
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
                    <ValueCell value={row.typingmind} />
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
            subtitle="The specific things TypingMind can't match."
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
            title="Getting to multi-model comparison"
            subtitle="Both tools are one-time purchases with no monthly fee for individuals. But the feature you actually came for costs very different amounts to unlock."
          />
          <Card className="mt-10 overflow-x-auto">
            <div className="min-w-[560px]">
              <div className="grid grid-cols-3 border-b bg-muted/40">
                <div className="p-4 text-sm font-medium text-muted-foreground">
                  What you get
                </div>
                <div className="border-l p-4 text-center text-sm font-bold text-primary">
                  Arco
                </div>
                <div className="border-l p-4 text-center text-sm font-semibold text-muted-foreground">
                  TypingMind
                </div>
              </div>
              <div className="grid grid-cols-3 border-b">
                <div className="p-4 text-sm text-muted-foreground">
                  Multi-model parallel chat
                </div>
                <div className="border-l bg-primary/5 p-4 text-center text-sm font-medium text-green-600">
                  Free tier
                </div>
                <div className="border-l p-4 text-center text-sm text-muted-foreground">
                  Premium only ($99)
                </div>
              </div>
              <div className="grid grid-cols-3 border-b">
                <div className="p-4 text-sm text-muted-foreground">
                  Unlimited saved conversations
                </div>
                <div className="border-l bg-primary/5 p-4 text-center text-sm">
                  ${arcoPrice} one-time
                </div>
                <div className="border-l p-4 text-center text-sm text-muted-foreground">
                  All tiers
                </div>
              </div>
              <div className="grid grid-cols-3 border-b">
                <div className="p-4 text-sm text-muted-foreground">
                  Platform license cost to compare models
                </div>
                <div className="border-l bg-primary/5 p-4 text-center text-sm font-medium text-green-600">
                  $0
                </div>
                <div className="border-l p-4 text-center text-sm">$99</div>
              </div>
              <div className="grid grid-cols-3">
                <div className="p-4 text-sm text-muted-foreground">
                  Ongoing token cost
                </div>
                <div className="border-l bg-primary/5 p-4 text-center text-sm">
                  Pay OpenRouter directly, no markup
                </div>
                <div className="border-l p-4 text-center text-sm">
                  Pay OpenRouter or provider APIs directly
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
                    TypingMind&apos;s entry tiers don&apos;t include
                    multi-model chat.
                  </strong>{" "}
                  Standard ($39) and Extended ($79) are both solid for
                  single-model use, but you need Premium to run one prompt
                  through several models at once.
                </li>
                <li>
                  <strong className="text-foreground">
                    TypingMind Teams switches back to a monthly subscription.
                  </strong>{" "}
                  The one-time pricing only applies to personal licenses. If
                  you ever need multi-seat access, recurring fees come back.
                </li>
                <li>
                  <strong className="text-foreground">
                    TypingMind Cloud is not included with your license.
                  </strong>{" "}
                  Chats stay in browser localStorage by default. TypingMind
                  Cloud is a separate opt-in service with 50MB of free storage.
                  Paid upgrades run $10/month if you need more room or heavier
                  cross-device sync.
                </li>
                <li>
                  <strong className="text-foreground">
                    Arco&apos;s ongoing cost is only your OpenRouter usage.
                  </strong>{" "}
                  It can be $0 in a quiet month. There is no platform fee after
                  your initial download.
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
            title="Getting started with Arco"
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
            <AlertTitle>What about my TypingMind history?</AlertTitle>
            <AlertDescription>
              Chat history isn&apos;t portable between the two apps. Most
              people keep both running for a week or two while they try Arco,
              then decide from there. TypingMind chats stay in your browser
              either way.
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
            subtitle="Straight answers, including where TypingMind still wins."
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
