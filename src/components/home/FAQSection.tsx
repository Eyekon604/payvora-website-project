import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of businesses does Payvora work with?",
    answer: "Payvora is built for service-based businesses, with a primary focus on dental practices. We also support physiotherapy, chiropractic, wellness, and other service industries.",
  },
  {
    question: "Do I need to switch my existing practice management software?",
    answer: "No. Payvora works alongside your existing software. We don't replace your business software — we replace the tools around it, like payment processing and customer communication.",
  },
  {
    question: "How long does setup take?",
    answer: "Most practices are up and running within a few days. Our team handles the technical setup, so you can focus on your business.",
  },
  {
    question: "What payment methods can I accept?",
    answer: "You can accept all major credit and debit cards through payment links. We make it easy for customers to pay from their phone or computer.",
  },
  {
    question: "Is Payvora PCI compliant?",
    answer: "Yes. We maintain PCI DSS compliance for our payment processing systems. We also help merchants understand their own compliance responsibilities.",
  },
  {
    question: "What's included in the monthly fee?",
    answer: "Each plan includes access to our platform features like two-way SMS, appointment reminders, payment links, and our dashboard. Processing fees are separate and based on your volume.",
  },
  {
    question: "Can I try Payvora before committing?",
    answer: "Yes. Contact us to schedule a demo and we'll walk you through the platform and discuss how it fits your specific needs.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "All plans include email support and basic onboarding. Higher tiers include priority support and dedicated account management.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about Payvora and how we work with businesses.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
