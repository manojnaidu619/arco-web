import { ArrowRight, Ban, Check, Shield, Wallet, X } from "lucide-react";
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

const banner = "/_static/competitors/arco-vs-chathub.webp";

export const metadata = constructMetadata({
  title: "ChatHub Alternative Without the Monthly Bill | Arco",
  description:
    "Looking for a ChatHub alternative? Arco lets you compare 400+ AI models with your own OpenRouter key, no monthly subscription, and every chat stays on your Mac. Built to help you decide, not just compare.",
  image: banner,
});

type Cell = "yes" | "no" | string;

function ValueCell({ value }: { value: Cell }) {
  if (value === "yes") return <Check className="mx-auto size-5 text-green-500" />;
  if (value === "no") return <X className="mx-auto size-5 text-red-400" />;
  return <span className="text-sm font-medium text-amber-500">{value}</span>;
}

const featureRows: Array<{ feature: string; arco: Cell; chathub: Cell }> = [
  { feature: "Send one prompt to every selected model", arco: "yes", chathub: "yes" },
  { feature: "400+ models available", arco: "yes", chathub: "Curated ~20-30" },
  { feature: "Chats stored locally on your device", arco: "yes", chathub: "no" },
  { feature: "Bring your own model key", arco: "yes", chathub: "no" },
  { feature: "No monthly subscription", arco: "yes", chathub: "no" },
  { feature: "No quota caps on advanced models", arco: "yes", chathub: "no" },
  { feature: "Structured AI summary of replies", arco: "yes", chathub: "yes" },
  { feature: "Native macOS app (Apple Silicon)", arco: "yes", chathub: "no" },
  { feature: "Works on Windows / iOS / Android", arco: "no", chathub: "yes" },
  { feature: "Browser extension", arco: "no", chathub: "yes" },
];

const differentiators = [
  {
    icon: Shield,
    title: "Your chats stay on your Mac. Not on someone else's server.",
    body: "Every conversation in ChatHub lives on their infrastructure. You are trusting their retention policy, their security posture, and their access controls with the questions you actually ask. Arco stores everything locally. There is no server between you and the models.",
  },
  {
    icon: Ban,
    title: "One payment, then it's yours.",
    body: "ChatHub bills you every month whether you use it twice a day or twice a week. Arco is a one-time thing. You get it once, you keep it. Skip a month and you do not pay for that month.",
  },
  {
    icon: Wallet,
    title: 'Ask what you want, when you want. No "you have hit your limit" walls.',
    body: "ChatHub Pro caps advanced-model queries at 1,500 a month. Every question to GPT-5, Claude 4.5, or Gemini 3 counts against the same pool. Arco uses your OpenRouter key directly. Your only limit is your own token budget, and you set it.",
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
    q: "What if I'm on Windows or mobile?",
    a: "ChatHub is the better pick here. Arco is macOS 13+ on Apple Silicon only. If you split your time between Mac and Windows, or want a mobile app, ChatHub has native apps for iOS, Android, Windows, and a Chrome extension. That is a real gap on our side.",
  },
  {
    q: "What does ChatHub do better than Arco?",
    a: "Three things. Platform coverage: iOS, Android, Windows, and a Chrome extension (Arco is Mac only). Turnkey setup: ChatHub handles the API for you, Arco makes you set up an OpenRouter account first (takes about 3 minutes, but it is an extra step). Web access baked in: ChatHub includes real-time web search across their models, Arco relies on whichever model you picked supporting it. If any of those matter more than pricing, privacy, or model breadth, ChatHub is a fair choice.",
  },
  {
    q: "Do I need an OpenRouter account?",
    a: "Yes. Sign up at openrouter.ai (free to create). You add credit and pay providers directly for the tokens you use. Arco does not touch the billing or take a cut.",
  },
  {
    q: "Can I switch back?",
    a: "Yes, and you can run both at once. Try Arco for a couple of weeks while your ChatHub subscription is still active. If Arco does not fit your workflow, keep using ChatHub. There is nothing to cancel on Arco's side because there is no subscription.",
  },
];

const chathubProYear = 148;
const chathubUnlimitedYear = 304;

export default function ArcoVsChatHubPage() {
  const arcoPrice = UNLIMITED_CURRENT_BATCH_PRICE;
  const pricingRows = [
    { label: "Year 1", arco: `$${arcoPrice} one-time`, pro: `~$${chathubProYear}`, unl: `~$${chathubUnlimitedYear}` },
    { label: "Year 2", arco: "$0", pro: `~$${chathubProYear}`, unl: `~$${chathubUnlimitedYear}` },
    { label: "Year 3", arco: "$0", pro: `~$${chathubProYear}`, unl: `~$${chathubUnlimitedYear}` },
  ];

  return (
    <>
      {/* Hero */}
      <section className="space-y-6 py-12 sm:py-16 lg:py-20">
        <MaxWidthWrapper className="flex max-w-4xl flex-col items-center gap-6 text-center">
          <Badge variant="outline" className="px-3 py-1">
            ChatHub alternative
          </Badge>

          <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[56px]">
            Arco: the ChatHub alternative{" "}
            <span className="text-primary">
              without the monthly bill.
            </span>
          </h1>

          <p className="max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            ChatHub charges you every month whether you use it or not, and caps
            your best models when you hit the quota. Arco lets you pick from
            400+ models on your own key, pay only for the tokens you actually
            use, and keeps every chat on your Mac.
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
              alt="Arco vs ChatHub"
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
                    Pay only when you use it. No monthly bill, no quotas
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Where ChatHub falls short</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    Monthly subscription even for occasional users
                  </li>
                  <li className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    Advanced-model queries capped (1,500/month on Pro)
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
                  Pick ChatHub if you&apos;re on Windows, iOS, or Android, or if
                  you never want to touch an API key. Pick Arco if you&apos;re
                  on a Mac, care where your chats live, and don&apos;t want
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
            title="Arco vs ChatHub, feature by feature"
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
                  ChatHub
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
                    <ValueCell value={row.chathub} />
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
            subtitle="The specific things ChatHub can't match."
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
            subtitle="ChatHub bundles its subscription with API access. Arco separates them. You buy the app once and pay OpenRouter directly for the tokens you actually use. Here is the breakdown."
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
                  ChatHub Pro
                  <br />
                  <span className="text-xs font-normal">(yearly)</span>
                </div>
                <div className="border-l p-4 text-center text-sm font-semibold text-muted-foreground">
                  ChatHub Unlimited
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
                    {row.unl}
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-4 border-b font-semibold">
                <div className="p-4 text-sm">3-year total</div>
                <div className="border-l bg-primary/5 p-4 text-center text-primary">
                  ${arcoPrice}
                </div>
                <div className="border-l p-4 text-center">
                  ~${chathubProYear * 3}
                </div>
                <div className="border-l p-4 text-center">
                  ~${chathubUnlimitedYear * 3}
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
                  Included, capped by quotas
                </div>
                <div className="border-l p-4 text-center text-sm">
                  Included, unlimited
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
                    Every ChatHub user needs their own subscription.
                  </strong>{" "}
                  No team-seat discount surfaced on their public pricing.
                </li>
                <li>
                  <strong className="text-foreground">
                    Pro tier caps advanced-model queries at 1,500 per month.
                  </strong>{" "}
                  Hit that ceiling and you either wait or upgrade to Unlimited.
                </li>
                <li>
                  <strong className="text-foreground">
                    Arco&apos;s ongoing cost is your OpenRouter usage.
                  </strong>{" "}
                  It can be $0 in a light month. ChatHub bills the flat rate
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
            title="Switching from ChatHub? Here's how you start."
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
            <AlertTitle>What about my ChatHub history?</AlertTitle>
            <AlertDescription>
              Chat history isn&apos;t portable between the two apps. Most people
              keep their ChatHub subscription running for a week or two while
              they move over, then cancel once they&apos;re comfortable.
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
            subtitle="Straight answers, including where ChatHub still wins."
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
                When you need a decision, not a subscription.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Arco is a one-time purchase. Skip a month, pay nothing. Your
                OpenRouter key covers 400+ models with no quotas.{" "}So you can stop guessing and start deciding.
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
