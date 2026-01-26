import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-gradient text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up text-primary-foreground">
            Payments and Automation for{" "}
            <span className="text-accent">Service Businesses</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            We don't replace your business software — we replace the tools around it.
          </p>
          
          <p className="text-base md:text-lg text-primary-foreground/60 mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Streamlined payment processing, two-way SMS, automated reminders, and more — built for dental practices and service-based businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/request-demo">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
