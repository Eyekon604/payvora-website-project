import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Info } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For solo practitioners getting started with modern payments.",
    price: "$99",
    period: "/month",
    features: [
      "Payment links",
      "Two-way SMS",
      "Appointment reminders",
      "Review requests",
      "Basic dashboard",
      "Email support",
    ],
    cta: "Request Pricing",
    popular: false,
  },
  {
    name: "Growth",
    description: "For growing practices that need more automation.",
    price: "$249",
    period: "/month",
    features: [
      "Everything in Starter",
      "Missed-call text-back",
      "Recall campaigns",
      "Advanced reporting",
      "Priority support",
      "Dedicated onboarding",
    ],
    cta: "Request Pricing",
    popular: true,
  },
  {
    name: "Multi-Location",
    description: "For practices with multiple locations.",
    price: "Custom",
    period: "",
    features: [
      "Everything in Growth",
      "Centralized dashboard",
      "Location-specific settings",
      "Custom workflows",
      "Dedicated account manager",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Choose the plan that fits your practice. All plans include access to core features.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`card-elevated p-8 relative ${
                  plan.popular ? "border-2 border-accent" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <Link to="/request-demo">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Rates Note */}
      <section className="section-padding subtle-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="card-elevated p-8 flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Info className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">About Processing Rates</h3>
                <p className="text-muted-foreground">
                  Payment processing rates are separate from the monthly platform fee and vary based on your business type, volume, and underwriting. We'll provide a custom quote during your demo call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Check our FAQ or contact us for more details about pricing and features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/request-demo">
                  Request Pricing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
