import { ClipboardCheck, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Quick Assessment",
    description: "We review your current setup and identify how Payvora can help streamline your payments and communication.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Simple Setup",
    description: "Our team handles the technical setup. You'll be ready to go in days, not weeks.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Go Live",
    description: "Start accepting payments and automating customer communication with ongoing support from our team.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. We handle the heavy lifting so you can focus on your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              
              <div className="relative z-10 inline-flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <step.icon className="h-10 w-10 text-accent" />
                </div>
                <span className="text-sm font-bold text-accent mb-2">{step.step}</span>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
