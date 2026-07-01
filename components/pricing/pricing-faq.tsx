import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/config/site";

import { HeaderSection } from "../shared/header-section";

const pricingFaqData = [
  {
    id: "item-1",
    question: "What is Arco?",
    answer:
      "Arco is a native macOS app that lets you compare multiple AI models side by side in one window. Type your prompt once and get parallel responses from GPT-4o, Claude, Gemini, Mistral, and 400+ other models through OpenRouter. It helps you find better answers faster without switching between different chat websites.",
  },
  {
    id: "item-2",
    question: "How is Arco different from other multi-model comparison apps?",
    answer:
      "Other comparison apps also let you chat with multiple models side by side, and Arco does that too. Where Arco stands out is privacy, pricing, and model access. Your conversations stay on your Mac instead of on a third-party server. You bring your own OpenRouter API key and pay only for the tokens you use, with no monthly subscription for the app itself. You also get access to 400+ models through one key, without managing separate accounts for each provider. Arco is a native macOS app built for speed and focus, while most alternatives are browser-based and charge a recurring fee to access models on their terms.",
  },
  {
    id: "item-3",
    question: "How is Arco different from ChatGPT or Claude?",
    answer:
      "ChatGPT and Claude only give you access to their own models. Arco connects to 400+ models through one interface, so you can compare responses and pick the best answer. You also pay only for what you use through OpenRouter instead of multiple monthly subscriptions.",
  },
  {
    id: "item-4",
    question: "What platforms does Arco support?",
    answer:
      "Arco is currently available for macOS 13 (Ventura) and later, on Apple Silicon Macs. Windows and Linux versions are not available at this time.",
  },
  {
    id: "item-5",
    question: "What is OpenRouter and why does Arco use it?",
    answer:
      "OpenRouter is a unified API service that provides access to hundreds of AI models from different providers (OpenAI, Anthropic, Google, Meta, and more) through a single API key. Arco uses OpenRouter so you can access any model without managing separate accounts or API keys for each provider. Whenever a new model hits the market, you can start using it in Arco right away by copying and pasting its model ID from the OpenRouter website.",
  },
  {
    id: "item-6",
    question: "Do I need to pay for OpenRouter separately?",
    answer:
      "Yes. Arco is the app, and OpenRouter is the API service that connects you to AI models. You pay OpenRouter directly for the tokens you use, with no markup from Arco. Many models have free tiers, and paid usage is typically pennies per conversation.",
  },
  {
    id: "item-7",
    question: "Where is my data stored?",
    answer:
      "All your conversations are stored locally on your Mac. Arco does not have servers that store your data. Your prompts and responses stay on your device.",
  },
  {
    id: "item-8",
    question: "Does Arco share my data with anyone?",
    answer:
      "Arco sends your prompts to the AI models you select through OpenRouter. That is the only time your data leaves your device. We do not collect, store, or sell your conversation data.",
  },
  {
    id: "item-9",
    question: "What is the Summarize feature?",
    answer:
      "When you get responses from multiple models, Summarize analyzes them using a judge model of your choice. It shows you where the models agree, where they differ, and which response is strongest. This helps you quickly understand the consensus without reading every response in detail.",
  },
  {
    id: "item-10",
    question: "How many models can I compare at once?",
    answer:
      "You can compare up to 6 models at once. Arco supports flexible layouts so you can view multiple responses side by side.",
  },
  {
    id: "item-11",
    question: "Can I use my own custom prompts or system instructions?",
    answer:
      "This feature is not currently available, but it is in progress. Stay tuned for updates.",
  },
  {
    id: "item-12",
    question: "What's included in the free version?",
    answer:
      "Full access to all features, including 400+ models, AI-powered summary, and all layouts. The only limit is 3 saved conversations. Free users do not receive new feature updates.",
  },
  // Pro license FAQ — hidden until subscription model launches
  // {
  //   id: "item-13",
  //   question: "How does the Pro license work?",
  //   answer:
  //     "Get unlimited saved conversations for one year. No credit card lock-in, no automatic charges.",
  // },
  {
    id: "item-13b",
    question: "How does the Unlimited license work?",
    answer:
      "Pay once and own Arco forever. Your purchase includes 1 year of updates, support, and new features. After that, you can keep using the last version you have, or optionally renew at a discount to continue receiving updates and support.",
  },
  {
    id: "item-14",
    question: "Why are there no refunds?",
    answer:
      "We offer a generous free version that gives you complete access to every feature in the app - all 400+ AI models, the summary tool, every layout option, and full functionality. The only difference with Unlimited is the number of saved conversations (3 vs unlimited) and that the app is yours to keep forever. This means you can thoroughly test the entire app before deciding to upgrade. Since there are no hidden features or surprises after purchase, all license sales are final. We encourage you to use the free version extensively and only upgrade when you're confident it meets your needs.",
  },
  {
    id: "item-15",
    question: "What happens after my 1 year of updates expires?",
    answer:
      "Your app keeps working with the last version you updated to. No features are removed. You just won't receive new feature updates or support. You can optionally renew at a discount to get another year of updates and support.",
  },
  {
    id: "item-16",
    question: "Can I use my license on multiple devices?",
    answer:
      "Each license works on 1 device. For multiple devices, reach out to support for bulk deals.",
  },
  {
    id: "item-17",
    question: "Do I get updates?",
    answer:
      "Yes. All updates, new features, and support for the first year are included with your Unlimited license. After that, the app continues working. You just won't receive new updates or support unless you choose to renew.",
  },
];

export function PricingFaq() {
  return (
    <section id="faq" className="container max-w-4xl scroll-mt-20 py-20 md:py-24">
      <HeaderSection
        label="FAQ"
        title="Frequently Asked Questions"
        subtitle="Explore our comprehensive FAQ to find quick answers to common
          inquiries. If you need further assistance, don't hesitate to
          contact us for personalized help."
      />

      <Accordion type="single" collapsible className="my-12 w-full">
        {pricingFaqData.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id}>
            <AccordionTrigger>{faqItem.question}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground sm:text-[15px]">
              {faqItem.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <p className="text-center text-sm text-muted-foreground">
        Have more questions? Reach out to{" "}
        <a
          href={siteConfig.links.email}
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          {siteConfig.mailSupport}
        </a>
      </p>
    </section>
  );
}
