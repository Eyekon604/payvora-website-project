import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  ArrowRight, 
  CreditCard, 
  Calendar, 
  RefreshCcw, 
  MessageSquare,
  Check,
  Users,
  DollarSign,
  Clock
} from "lucide-react";

const useCases = [
  {
    icon: CreditCard,
    title: "Treatment Plan Payments",
    description: "Send payment links for treatment plans directly to patients. They can pay from any device.",
  },
  {
    icon: DollarSign,
    title: "Deposits & Prepayments",
    description: "Collect deposits for major procedures upfront with easy-to-use payment links.",
  },
  {
    icon: RefreshCcw,
    title: "Recurring Payments",
    description: "Set up payment plans for larger treatments, making care accessible for more patients.",
  },
];

const benefits = [
  {
    title: "For Your Practice",
    items: [
      "Reduce time spent on payment follow-ups",
      "Decrease outstanding patient balances",
      "Automate recall and reactivation campaigns",
      "Get paid faster with convenient payment options",
      "Simple dashboard for tracking performance",
    ],
  },
  {
    title: "For Your Patients",
    items: [
      "Pay from any device, anytime",
      "Convenient text reminders for appointments",
      "Easy two-way communication with your office",
      "No apps to download or accounts to create",
      "Modern, professional payment experience",
    ],
  },
];

export default function DentalSolutions() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Stethoscope className="h-4 w-4" />
              Dental Payments
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Payment Processing for Dental Practices
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
              Get paid faster, automate patient communication, and focus on what matters most — providing great dental care.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/request-demo">
                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Dental Practices</h2>
              <p className="text-lg text-muted-foreground">
                From solo practitioners to multi-location practices, Payvora scales with your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-elevated p-6 text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Solo Practices</h3>
                <p className="text-sm text-muted-foreground">Simple tools to manage payments and patient communication.</p>
              </div>
              <div className="card-elevated p-6 text-center">
                <Clock className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Growing Practices</h3>
                <p className="text-sm text-muted-foreground">Automation to help you scale without adding staff.</p>
              </div>
              <div className="card-elevated p-6 text-center">
                <Stethoscope className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Multi-Location</h3>
                <p className="text-sm text-muted-foreground">Centralized management across all your locations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding subtle-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Use Cases</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How dental practices use Payvora to streamline operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card-elevated p-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <useCase.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits for Everyone</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card-elevated p-8">
                <h3 className="text-xl font-semibold mb-6">{benefit.title}</h3>
                <ul className="space-y-4">
                  {benefit.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works Alongside */}
      <section className="section-padding subtle-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <MessageSquare className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Works Alongside Your Existing Software
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Payvora doesn't replace your dental practice management software. We handle payments, SMS, and automation — so you can keep using the tools you already know.
            </p>
            <p className="text-foreground font-medium">
              "We don't replace your business software — we replace the tools around it."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Modernize Your Payment Process?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              See how Payvora can help your dental practice get paid faster and communicate better with patients.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/request-demo">
                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
