import { ArrowRight, Key, Lock, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { DownloadButton } from "@/components/shared/download-button";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn, constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Arco Alternatives & Comparisons | Arco",
  description:
    "See how Arco compares to ChatHub, Poe, TypingMind, ChatPlayground, MultiLLM, ChatComparison, and AI Fiesta. 400+ models, BYOK, no subscription, every chat stays on your Mac.",
});

const competitors = [
  {
    name: "ChatHub",
    slug: "chathub",
    pain: "Monthly subscription, even for occasional use",
    pitch:
      "ChatHub charges monthly whether you use it daily or twice a week. Arco is a one-time purchase with 400+ models on your own key.",
    banner: "/_static/competitors/arco-vs-chathub.webp",
  },
  {
    name: "Poe",
    slug: "poe",
    pain: "Compute points that run out mid-month",
    pitch:
      "Poe bundles model access behind compute points. Run a few multi-model queries and the pool drains fast. Arco uses your own OpenRouter key with no points or caps.",
    banner: "/_static/competitors/arco-vs-poe.webp",
  },
  {
    name: "TypingMind",
    slug: "typingmind",
    pain: "Multi-model comparison locked behind the $99 tier",
    pitch:
      "TypingMind is a powerful AI workspace, but side-by-side comparison is a premium add-on. Arco is built around that workflow from the start.",
    banner: "/_static/competitors/arco-vs-typingmind.webp",
  },
  {
    name: "ChatPlayground",
    slug: "chatplayground",
    pain: "Web-only with ~30 curated models",
    pitch:
      "ChatPlayground runs in the browser with a fixed catalog of around 30 models. Arco is a native Mac app with 400+ models on your own key.",
    banner: "/_static/competitors/arco-vs-chatplayground.webp",
  },
  {
    name: "MultiLLM",
    slug: "multillm",
    pain: "Locked to three provider families",
    pitch:
      "MultiLLM only supports GPT, Claude, and Gemini. Arco connects to 400+ models through OpenRouter, including Mistral, Llama, DeepSeek, and everything else.",
    banner: "/_static/competitors/arco-vs-multillm.webp",
  },
  {
    name: "ChatComparison",
    slug: "chatcomparison",
    pain: "~40 curated models, no BYOK",
    pitch:
      "ChatComparison gives you around 40 models they picked. Arco gives you 400+ on your own key, so you add new models the day they ship.",
    banner: "/_static/competitors/arco-vs-chatcomparison.webp",
  },
  {
    name: "AI Fiesta",
    slug: "aifiesta",
    pain: "Credit pool drains fast on multi-model queries",
    pitch:
      "AI Fiesta charges a subscription that includes credits. Every multi-model query burns credits in parallel, and the pool runs out well before the month ends. Arco has no credit system.",
    banner: "/_static/competitors/arco-vs-aifiesta.webp",
  },
];

export default function AlternativesIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="space-y-6 py-12 sm:py-16 lg:py-20">
        <MaxWidthWrapper className="flex max-w-4xl flex-col items-center gap-6 text-center">
          <Badge variant="outline" className="px-3 py-1">
            Alternatives
          </Badge>

          <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[56px]">
            How Arco compares to{" "}
            <span className="text-primary">
              every multi-model AI tool
            </span>
          </h1>

          <p className="max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Most multi-model tools charge monthly, cap your usage, or store
            your chats on their servers. Arco gives you 400+ models on your
            own OpenRouter key, with every conversation stored locally on
            your Mac.
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
              href="#comparisons"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  rounded: "lg",
                }),
                "px-6",
              )}
            >
              See all comparisons
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Competitor cards */}
      <section id="comparisons" className="py-16 md:py-20">
        <MaxWidthWrapper>
          <HeaderSection
            label="Head to head"
            title="Pick a tool to compare"
            subtitle="Each page breaks down features, pricing, and where Arco wins (and where it doesn't)."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {competitors.map((c) => (
              <Link
                key={c.slug}
                href={`/alternatives/${c.slug}`}
                className="group"
              >
                <Card className="flex h-full flex-col overflow-hidden transition-shadow group-hover:shadow-lg">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={c.banner}
                      alt={`Arco vs ${c.name}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-[1.02]"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">
                        Arco vs {c.name}
                      </CardTitle>
                      <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col gap-3">
                    <Alert>
                      <AlertDescription className="text-xs">
                        {c.pain}
                      </AlertDescription>
                    </Alert>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {c.pitch}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Why Arco summary */}
      <section className="py-16 md:py-20">
        <MaxWidthWrapper className="max-w-3xl">
          <HeaderSection
            label="The common thread"
            title="What every comparison comes down to"
            subtitle="Across all tools, the same three gaps keep showing up."
          />
          <div className="mt-10 grid grid-rows-[1fr] gap-6 md:grid-cols-3">
            <Card className="flex h-full flex-col">
              <CardHeader>
                <Key className="size-6 text-primary" />
                <CardTitle className="pt-3 text-lg">Your key, your models</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Bring your own OpenRouter key and pick from 400+ models.
                  No waiting for someone else to add support.
                </p>
              </CardContent>
            </Card>
            <Card className="flex h-full flex-col">
              <CardHeader>
                <Lock className="size-6 text-primary" />
                <CardTitle className="pt-3 text-lg">
                  Chats stay on your Mac
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Every conversation is stored locally. No servers, no
                  uploads, no third-party access.
                </p>
              </CardContent>
            </Card>
            <Card className="flex h-full flex-col">
              <CardHeader>
                <Wallet className="size-6 text-primary" />
                <CardTitle className="pt-3 text-lg">No monthly bill</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Pay once for Arco, then pay OpenRouter directly for the
                  tokens you actually use. Skip a month, pay nothing.
                </p>
              </CardContent>
            </Card>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <MaxWidthWrapper className="max-w-3xl">
          <Card>
            <CardContent className="p-10 text-center">
              <h2 className="font-heading text-3xl md:text-4xl">
                Stop paying monthly for multi-model AI.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Compare 400+ models with your own OpenRouter key. Chats stay
                on your Mac.
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
