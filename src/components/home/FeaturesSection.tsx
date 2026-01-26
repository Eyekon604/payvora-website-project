import { MessageSquare, PhoneMissed, Calendar, RotateCcw, Star, CreditCard, LayoutDashboard, HeadphonesIcon, Check, X } from "lucide-react";

const includedFeatures = [
  { icon: MessageSquare, name: "Two-way SMS" },
  { icon: PhoneMissed, name: "Missed-call text-back" },
  { icon: Calendar, name: "Appointment reminders" },
  { icon: RotateCcw, name: "Recall campaigns" },
  { icon: Star, name: "Review requests" },
  { icon: CreditCard, name: "Payment links" },
  { icon: LayoutDashboard, name: "Simple dashboard" },
  { icon: HeadphonesIcon, name: "Basic onboarding" },
];

const notIncluded = [
  "Paid advertising",
  "Website redesign",
  "Advanced funnels",
  "AI phone answering",
  "Custom API work",
];

export function FeaturesSection() {
  return (
    <section className="section-padding subtle-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A focused toolkit designed to streamline payments and customer communication.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Included */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <Check className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Included</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {includedFeatures.map((feature) => (
                <div
                  key={feature.name}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
                >
                  <feature.icon className="h-5 w-5 text-accent shrink-0" />
                  <span className="font-medium">{feature.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not Included */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                <X className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Not Included</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              We focus on what we do best. These services are outside our scope:
            </p>
            <ul className="space-y-3">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <X className="h-4 w-4 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
