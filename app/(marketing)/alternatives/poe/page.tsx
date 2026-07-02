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
  title: "Poe Alternative Without Compute Points | Arco",
  description:
    "Looking for a Poe alternative? Arco is built for comparing 400+ AI models with your own OpenRouter key. No compute points, no monthly bill, every chat stays on your Mac. Built to help you decide, not just compare.",
});

type Cell = "yes" | "no" | string;

function ValueCell({ value }: { value: Cell }) {
  if (value === "yes") return <Check className="mx-auto size-5 text-green-500" />;
  if (value === "no") return <X className="mx-auto size-5 text-red-400" />;
  return <span className="text-sm font-medium text-amber-500">{value}</span>;
}

const featureRows: Array<{ feature: string; arco: Cell; poe: Cell }> = [
  { feature: "Ask one question, every selected model answers", arco: "yes", poe: "yes" },
  { feature: "Purpose-built for multi-model comparison", arco: "yes", poe: "Aggregator platform" },
  { feature: "400+ models via your own API key (BYOK)", arco: "yes", poe: "no" },
  { feature: "No monthly subscription", arco: "yes", poe: "no" },
  { feature: "No compute-point ceiling on messages", arco: "yes", poe: "no" },
  { feature: "Chat history doesn't burn credits", arco: "yes", poe: "no" },
  { feature: "Chats stored locally on your device", arco: "yes", poe: "no" },
  { feature: "Structured AI summary of all replies", arco: "yes", poe: "no" },
  { feature: "Native macOS app (Apple Silicon)", arco: "yes", poe: "yes" },
  { feature: "Works on Windows / iOS / Android / web", arco: "no", poe: "yes" },
  { feature: "Community bots and personas library", arco: "no", poe: "1M+" },
];

const differentiators = [
  {
    icon: Target,
    title: "Built for comparison, not for aggregation.",
    body: "Poe's business is giving you a bunch of models under one subscription. Multi-bot chat is one feature you can turn on. Arco is the opposite: the whole product exists so you can ask every model the same question and decide from the mix of answers. Everything is designed around that workflow, from Summarize to the layout options.",
  },
  {
    icon: Coins,
    title: "No compute points. No context tax.",
    body: "Poe meters everything with points. Free tier is around 300 points a day. Even keeping chat context on burns extra points, which is why there is a \"Save points by limiting chat history\" toggle in settings. Arco doesn't meter anything. You pay OpenRouter directly for the tokens you actually use, and your chat history is just your chat history.",
  },
  {
    icon: Shield,
    title: "Chats stay on your Mac. Not on Poe's servers.",
    body: "Every Poe conversation lives on their infrastructure and gets forwarded to third-party model providers under their policies. Arco stores everything locally. Nothing gets uploaded, because there is no server to upload to.",
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
    a: "Poe is the better pick here. Arco is macOS 13+ on Apple Silicon only. If you split time between a Mac and a phone, or you're on Windows or Linux, Poe has apps everywhere. That is a real gap on our side.",
  },
  {
    q: "What does Poe do better than Arco?",
    a: "Three things, honestly. Platforms: web, macOS, Windows, iOS, Android, full coverage. Community bots: over a million custom bots and personas you can chat with, which Arco has no equivalent for. Turnkey setup: no API key to wrangle, you subscribe and it just works. If any of those matter more than the comparison workflow, points-free usage, or local storage, Poe is a fair choice.",
  },
  {
    q: "Do I need an OpenRouter account?",
    a: "Yes. Sign up at openrouter.ai (free to create). You add credit and pay providers directly for the tokens you use. Arco doesn't touch the billing or take a cut.",
  },
  {
    q: "Can I switch back?",
    a: "Yes, and you can run both at once. Try Arco for a couple of weeks while your Poe subscription is still active. If it doesn't fit your workflow, keep using Poe. There is nothing to cancel on Arco's side because there is no subscription.",
  },
  {
    q: "What happens to my leftover Poe points if I cancel?",
    a: "Add-on points expire after one year regardless. Subscription points reset with your billing cycle. Cancelling means you lose access at the end of your paid period, so time the switch to line up with your renewal date.",
  },
];

const poeEntryYear = 50;
const poeStandardYear = 200;

export default function ArcoVsPoePage() {
  const arcoPrice = UNLIMITED_CURRENT_BATCH_PRICE;
  const pricingRows = [
    { label: "Year 1", arco: `$${arcoPrice} one-time`, entry: `~$${poeEntryYear}`, std: `~$${poeStandardYear}` },
    { label: "Year 2", arco: "$0", entry: `~$${poeEntryYear}`, std: `~$${poeStandardYear}` },
    { label: "Year 3", arco: "$0", entry: `~$${poeEntryYear}`, std: `~$${poeStandardYear}` },
  ];

  return (
    <>
      {/* Hero */}
      <section className="space-y-6 py-12 sm:py-16 lg:py-20">
        <MaxWidthWrapper className="flex max-w-4xl flex-col items-center gap-6 text-center">
          <Badge variant="outline" className="px-3 py-1">
            Poe alternative
          </Badge>

          <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[56px]">
            Arco: the Poe alternative{" "}
            <span className="text-primary">
              for comparing model answers, not just accessing them.
            </span>
          </h1>

          <p className="max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Poe is an AI aggregator. You subscribe, you get access to a lot of
            models, and multi-bot chat is one feature inside a general-purpose
            platform. Arco is built around a single job: ask every model the
            same question, read the answers together, and make better decisions
            from what they all say.
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
              src="/_static/competitors/arco-vs-poe.webp"
              alt="Arco vs Poe"
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
                    Purpose-built for asking multiple models the same question
                    and comparing answers to make better decisions
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-green-500" />
                    No compute points. Your OpenRouter tokens are the only
                    limit, and chat history doesn&apos;t cost extra
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-green-500" />
                    Chats stored locally on your Mac. Not on Poe&apos;s servers
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Where Poe falls short</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    General-purpose AI hub. Multi-model comparison is one
                    feature among many, not the product&apos;s core
                  </li>
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    Free tier is around 300 points/day (roughly one message),
                    and even keeping chat context burns points
                  </li>
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    Every conversation lives on Poe&apos;s infrastructure and is
                    forwarded to third-party model providers
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
                  Pick Poe if you want an all-in-one AI hub with mobile apps, a
                  million community bots, and don&apos;t mind a monthly bill
                  plus a points budget. Pick Arco if comparing model responses
                  is the actual job you&apos;re doing, you&apos;re on a Mac, and
                  you&apos;d rather your chats stay on your machine.
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
            title="Arco vs Poe, feature by feature"
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
                  Poe
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
                    <ValueCell value={row.poe} />
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
            subtitle="The specific things Poe can't match."
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
            subtitle="Poe bundles its subscription with model access and meters both with compute points. Arco separates them. You buy the app once and pay OpenRouter directly for the tokens you actually use. Here is the breakdown."
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
                  Poe Entry
                  <br />
                  <span className="text-xs font-normal">
                    (10K points/day, yearly)
                  </span>
                </div>
                <div className="border-l p-4 text-center text-sm font-semibold text-muted-foreground">
                  Poe Standard
                  <br />
                  <span className="text-xs font-normal">
                    (660K points/mo, yearly)
                  </span>
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
                    {row.entry}
                  </div>
                  <div className="border-l p-4 text-center text-sm">
                    {row.std}
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-4 border-b font-semibold">
                <div className="p-4 text-sm">3-year total</div>
                <div className="border-l bg-primary/5 p-4 text-center text-primary">
                  ${arcoPrice}
                </div>
                <div className="border-l p-4 text-center">
                  ~${poeEntryYear * 3}
                </div>
                <div className="border-l p-4 text-center">
                  ~${poeStandardYear * 3}
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
                  Included, capped by daily/monthly points
                </div>
                <div className="border-l p-4 text-center text-sm">
                  Included, capped by monthly points
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
                    Add-on points expire after 1 year.
                  </strong>{" "}
                  Even if you buy extra points to cover a busy month, they
                  don&apos;t roll forever.
                </li>
                <li>
                  <strong className="text-foreground">
                    Chat history costs points too.
                  </strong>{" "}
                  Poe has a &quot;Save points by limiting chat history&quot;
                  toggle in settings, which is a hint about how quickly they add
                  up.
                </li>
                <li>
                  <strong className="text-foreground">
                    Arco&apos;s ongoing cost is your OpenRouter usage.
                  </strong>{" "}
                  It can be $0 in a quiet month. Poe bills the flat rate
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
            title="Switching from Poe? Here's how you start."
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
            <AlertTitle>What about my Poe history?</AlertTitle>
            <AlertDescription>
              Chat history isn&apos;t portable between the two apps. Most people
              keep their Poe subscription running for a week or two while they
              move over, then cancel once they&apos;re comfortable. Poe chats
              stay on Poe&apos;s servers either way.
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
            subtitle="Straight answers, including where Poe still wins."
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
                Make better decisions without compute points getting in the way.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Arco uses your own OpenRouter key. No points, no caps, no
                monthly subscription. Just 400+ models and your questions.
                {" "}So you can stop guessing and start deciding.
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
