import {
  ComparisonRow,
  FeatureLdg,
  HowItWorksStep,
  InfoLdg,
  UseCaseLdg,
} from "types";

export const infos: InfoLdg[] = [
  {
    title: "One click to the best answer",
    description:
      "When multiple models reply, Arco's Summarize feature sends all their responses to a judge model of your choice. You get a structured breakdown of what each model said, where they agree, and which answer is strongest.",
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
      "Type once, send to every model simultaneously. No copying, no pasting, no switching tabs.",
  },
  {
    icon: "🔒",
    title: "Stays on your Mac",
    description:
      "Your API key is stored encrypted in macOS Keychain. Your conversations never leave your machine.",
  },
  {
    icon: "✨",
    title: "AI-powered summary",
    description:
      "Generate a structured comparison of all responses instantly and find the best answer in seconds.",
  },
  {
    icon: "🧩",
    title: "400+ models available",
    description:
      "Access 400+ models on OpenRouter, from frontier models to open source, all with a single key.",
  },
  {
    icon: "📐",
    title: "Flexible layouts",
    description:
      "Arrange panes in 1, 2, 3, or 4-column grids. Focus on what matters, hide the rest.",
  },
  {
    icon: "💸",
    title: "Pay only what you use",
    description:
      "No subscription required. Arco is free, and you pay OpenRouter's per-token rates directly.",
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    num: 1,
    title: "Get an OpenRouter key",
    description:
      "Sign up at openrouter.ai and grab a free API key. You get access to every model through one account.",
  },
  {
    num: 2,
    title: "Pick your models",
    description:
      "Choose from GPT-4o, Claude, Gemini, Mistral, and dozens more. Mix and match, change anytime.",
  },
  {
    num: 3,
    title: "Ask anything",
    description:
      "Type your question once. Every model answers in parallel. Compare, copy, and keep chatting.",
  },
];

export const useCases: UseCaseLdg[] = [
  {
    emoji: "🧑‍💻",
    title: "Developers",
    description:
      "Debug code, compare architecture advice, and evaluate API design suggestions from multiple models at once.",
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
      "Cross-check summaries, surface different perspectives on a topic, and validate sources across models.",
    example: {
      user: "Summarise the key findings of this paper",
      ai: "Three models, three angles. Use Summarize to synthesise…",
    },
  },
  {
    emoji: "📊",
    title: "Business Teams",
    description:
      "Draft reports, generate exec summaries, and pressure-test strategy ideas with diverse AI perspectives.",
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
    tabSwitching: "no",
    webInterfaces: "no",
  },
  {
    feature: "Persistent conversation history",
    arco: "yes",
    tabSwitching: "no",
    webInterfaces: "yes",
  },
  {
    feature: "Structured AI summary",
    arco: "yes",
    tabSwitching: "no",
    webInterfaces: "no",
  },
  {
    feature: "Your data stays local",
    arco: "yes",
    tabSwitching: "partial",
    webInterfaces: "no",
  },
  {
    feature: "Any model via one API key",
    arco: "yes",
    tabSwitching: "no",
    webInterfaces: "partial",
  },
  {
    feature: "No subscription",
    arco: "yes",
    tabSwitching: "yes",
    webInterfaces: "no",
  },
];
