import { Zap, TrendingUp, Bot, Users, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Faster Payments",
    description: "Get paid quickly with seamless payment links and automated collection workflows.",
  },
  {
    icon: TrendingUp,
    title: "Better Cash Flow",
    description: "Reduce outstanding balances with automated reminders and easy payment options.",
  },
  {
    icon: Bot,
    title: "Smart Automation",
    description: "Automate routine tasks like appointment reminders, follow-ups, and review requests.",
  },
  {
    icon: Users,
    title: "Better Customer Experience",
    description: "Delight customers with convenient two-way texting and modern payment options.",
  },
  {
    icon: BarChart3,
    title: "Clear Reporting",
    description: "Track performance with a simple dashboard that shows what matters.",
  },
];

export function BenefitsSection() {
  return (
    <section className="section-padding subtle-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Businesses Choose Payvora
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to streamline payments and customer communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="card-elevated p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
