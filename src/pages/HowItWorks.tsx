import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ClipboardCheck, 
  Settings, 
  Rocket, 
  ArrowRight,
  MessageSquare,
  CreditCard,
  BarChart3,
  HeadphonesIcon,
  Check
} from "lucide-react";

const timeline = [
  {
    step: "Day 1-2",
    title: "Discovery Call",
    description: "We learn about your business, current tools, and goals. We'll identify how Payvora can help.",
    icon: ClipboardCheck,
  },
  {
    step: "Day 3-5",
    title: "Account Setup",
    description: "Our team configures your account, sets up payment processing, and customizes your automation workflows.",
    icon: Settings,
  },
  {
    step: "Day 6-7",
    title: "Training & Go-Live",
    description: "Quick training session, final testing, and you're ready to start accepting payments and automating communication.",
    icon: Rocket,
  },
];

const whatPayvoraHandles = [
  { icon: CreditCard, label: "Payment processing" },
  { icon: MessageSquare, label: "Two-way SMS" },
  { icon: ClipboardCheck, label: "Appointment reminders" },
  { icon: BarChart3, label: "Performance dashboard" },
];

const whatYouKeep = [
  "Practice management software",
  "Scheduling system",
  "Patient records",
  "Imaging software",
  "Insurance billing",
];

export default function HowItWorks() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              How Payvora Works
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              A simple onboarding process gets you up and running in about a week. We handle the technical setup so you can focus on your business.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Onboarding Timeline</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From first call to going live in about a week.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.title} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-7 w-7 text-accent" />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-4" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-sm font-bold text-accent">{item.step}</span>
                    <h3 className="text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Payvora Handles vs What You Keep */}
      <section className="section-padding subtle-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Clear Division of Responsibilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle payments and communication. You keep your existing business tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* What Payvora Handles */}
            <div className="card-elevated p-8 border-2 border-accent/20">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <Check className="h-4 w-4 text-accent-foreground" />
                </div>
                What Payvora Handles
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {whatPayvoraHandles.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <item.icon className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What You Keep */}
            <div className="card-elevated p-8">
              <h3 className="text-xl font-semibold mb-6">Your Existing Software</h3>
              <ul className="space-y-3">
                {whatYouKeep.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="h-4 w-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground italic">
                Payvora works alongside these tools — no disruption to your workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                <HeadphonesIcon className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ongoing Support</h2>
                <p className="text-muted-foreground mb-4">
                  Our team is here to help you succeed. All plans include email support and access to our knowledge base. Higher tiers include priority support and dedicated account management.
                </p>
                <p className="text-foreground font-medium">
                  We're invested in your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Schedule a demo and see how easy it is to modernize your payment process.
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
