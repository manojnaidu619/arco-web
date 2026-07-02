import {
  ComparisonRow,
  FeatureLdg,
  HowItWorksStep,
  InfoLdg,
  Testimonial,
  UseCaseLdg,
} from "types";

export const infos: InfoLdg[] = [
  {
    title: "One click to a confident decision",
    description:
      "When multiple models reply, Arco's Summarize feature sends all their responses to a judge model of your choice. You get a structured breakdown: where models agree, where they diverge, and which answer you should act on. When models disagree, that's often the edge case you'd miss with just one.",
    image: "/_static/illustrations/work-from-home.jpg",
    list: [
      {
        title: "Picks any model from your library as the judge",
        description: "",
        icon: "check",
      },
      {
        title: "Streams the comparison in real-time",
        description: "",
        icon: "check",
      },
      {
        title: "Copy the summary to clipboard in one click",
        description: "",
        icon: "check",
      },
      {
        title: "Regenerate anytime with a different judge model",
        description: "",
        icon: "check",
      },
    ],
  },
];

export const features: FeatureLdg[] = [
  {
    icon: "⚡",
    title: "Broadcast to all models",
    description:
      "Type once, send to every model simultaneously. No copying, no pasting, no opening separate chat sites. Get answers from all your favorite models in one place.",
  },
  {
    icon: "🔒",
    title: "Fully private",
    description:
      "Every conversation stays on your device, stored locally and never uploaded. No servers storing your data, no middlemen in between. You're always in control.",
  },
  {
    icon: "✨",
    title: "AI-powered summary",
    description:
      "Generate a structured comparison of all responses instantly. See where models agree, where they differ, and decide which answer to use, in seconds.",
  },
  {
    icon: "🧩",
    title: "400+ models available",
    description:
      "Access 400+ models on OpenRouter, from frontier models to open source alternatives. All with a single API key.",
  },
  {
    icon: "📐",
    title: "Flexible layouts",
    description:
      "Arrange panes in 1, 2, 3, or 4-column grids. Focus on what matters, hide the rest. Your workspace, your way.",
  },
  {
    icon: "💸",
    title: "Pay only what you use",
    description:
      "No subscription required. You pay OpenRouter's per-token rates directly. No hidden fees, no markup.",
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    num: 1,
    title: "Get an OpenRouter key",
    description:
      "Sign up at openrouter.ai and grab a free API key. You get access to every model through one account.",
    image: "/_static/landing/step-1.png",
  },
  {
    num: 2,
    title: "Pick your models",
    description:
      "Choose from GPT-4o, Claude, Gemini, Mistral, and dozens more. Mix and match, change anytime.",
    image: "/_static/landing/step-2.png",
  },
  {
    num: 3,
    title: "Ask anything, see who nails it",
    description:
      "Type your question once. Every model answers in parallel. See where they agree, where they differ, and pick the strongest reply.",
    image: "/_static/landing/step-3.png",
  },
];

export const useCases: UseCaseLdg[] = [
  {
    emoji: "🧑‍💻",
    title: "Developers",
    description:
      "Debug code, weigh architecture advice from multiple models, and commit to the approach that actually holds up.",
    example: {
      user: "How do I handle auth tokens securely in React?",
      ai: "Use httpOnly cookies and avoid localStorage for tokens…",
    },
  },
  {
    emoji: "✍️",
    title: "Writers",
    description:
      "Generate multiple drafts, compare tone and style, and pick the version that fits your voice.",
    example: {
      user: "Write an opening line for a product launch email",
      ai: "Today, everything changes. Introducing…",
    },
  },
  {
    emoji: "🔬",
    title: "Researchers",
    description:
      "Cross-check summaries, surface different perspectives, and decide which interpretation is backed by the strongest reasoning.",
    example: {
      user: "Summarise the key findings of this paper",
      ai: "Three models, three angles. Use Summarize to synthesise…",
    },
  },
  {
    emoji: "📊",
    title: "Business Teams",
    description:
      "Draft reports, generate exec summaries, and pressure-test strategy ideas so you present the version you can defend.",
    example: {
      user: "Summarise Q3 performance for the board deck",
      ai: "Revenue grew 18% QoQ driven by enterprise…",
    },
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Send to all models at once",
    arco: "yes",
    comparisonApps: "yes",
    individualServices: "no",
  },
  {
    feature: "Structured AI summary",
    arco: "yes",
    comparisonApps: "partial",
    individualServices: "no",
  },
  {
    feature: "Your data stays local",
    arco: "yes",
    comparisonApps: "no",
    individualServices: "no",
  },
  {
    feature: "Any model via one API key",
    arco: "yes",
    comparisonApps: "no",
    individualServices: "no",
  },
  {
    feature: "No monthly subscription",
    arco: "yes",
    comparisonApps: "no",
    individualServices: "no",
  },
  {
    feature: "400+ models available",
    arco: "yes",
    comparisonApps: "partial",
    individualServices: "no",
  },
];

export const testimonials: Testimonial[] = [];
