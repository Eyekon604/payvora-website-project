import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Stethoscope, Building2, ArrowRight } from "lucide-react";

export function WhoItsForSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who It's For</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for service-based businesses that need reliable payments and better customer communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Dental - Featured */}
          <div className="card-elevated p-8 border-2 border-accent/20 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
              Featured
            </div>
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Stethoscope className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Dental Practices</h3>
            <p className="text-muted-foreground mb-6">
              Process treatment plan payments, automate recall campaigns, send appointment reminders, and collect reviews — all without switching software.
            </p>
            <Button asChild>
              <Link to="/solutions/dental">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Other Businesses */}
          <div className="card-elevated p-8">
            <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
              <Building2 className="h-7 w-7 text-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Service Businesses</h3>
            <p className="text-muted-foreground mb-6">
              Whether you're in physiotherapy, chiropractic, wellness, or any service-based industry — Payvora helps you get paid and stay connected with customers.
            </p>
            <Button variant="outline" asChild>
              <Link to="/solutions">
                View All Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
