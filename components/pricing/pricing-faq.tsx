import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HeaderSection } from "../shared/header-section";

const pricingFaqData = [
  {
    id: "item-1",
    question: "What's included in the free version?",
    answer:
      "Full access to all features, including 400+ models, AI-powered summary, and all layouts. The only limit is 2 saved conversations. Free users do not receive new feature updates.",
  },
  {
    id: "item-2",
    question: "How does the Pro license work?",
    answer:
      "Pay $39 once and get unlimited saved conversations for one year. No credit card lock-in, no automatic charges.",
  },
  {
    id: "item-3",
    question: "Why are there no refunds?",
    answer:
      "We offer a generous free version that gives you complete access to every feature in the app - all 400+ AI models, the summary tool, every layout option, and full functionality. The only difference with Pro is the number of saved conversations (2 vs unlimited). This means you can thoroughly test the entire app before deciding to upgrade. Since there are no hidden features or surprises after purchase, all license sales are final. We encourage you to use the free version extensively and only upgrade when you're confident it meets your needs.",
  },
  {
    id: "item-4",
    question: "What happens after one year?",
    answer:
      "Your existing conversations stay accessible and you can continue using all features. However, saving new conversations beyond 2 will be limited, and you won't receive new feature updates. We'll email you before your license expires so you can take action manually — no automatic charges.",
  },
  {
    id: "item-5",
    question: "Can I use my license on multiple devices?",
    answer:
      "Each license works on 1 device. For multiple devices, reach out to support for bulk deals.",
  },
  {
    id: "item-6",
    question: "Do I get updates?",
    answer:
      "Yes, all updates during your license period are included.",
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
    </section>
  );
}
