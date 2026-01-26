import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Stethoscope, Activity, Bone, Building2, ArrowRight, Clock } from "lucide-react";

const solutions = [
  {
    icon: Stethoscope,
    title: "Dental Payments",
    description: "Payment processing and patient communication tools built specifically for dental practices.",
    href: "/solutions/dental",
    status: "available",
  },
  {
    icon: Activity,
    title: "Physio Payments",
    description: "Streamlined payment and scheduling solutions for physiotherapy clinics.",
    href: "/solutions/physio",
    status: "coming-soon",
  },
  {
    icon: Bone,
    title: "Chiropractic Payments",
    description: "Payment processing and automation designed for chiropractic offices.",
    href: "/solutions/chiropractic",
    status: "coming-soon",
  },
  {
    icon: Building2,
    title: "Other Service Businesses",
    description: "Flexible payment and communication tools for wellness, spa, and other service-based businesses.",
    href: "/request-demo",
    status: "available",
  },
];

export default function Solutions() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Solutions for Service Businesses
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Whether you're a dental practice, physiotherapy clinic, or other service business, Payvora helps you get paid faster and communicate better with customers.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className={`card-elevated p-8 relative ${
                  solution.status === "coming-soon" ? "opacity-75" : ""
                }`}
              >
                {solution.status === "coming-soon" && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-muted text-muted-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                    <Clock className="h-3.5 w-3.5" />
                    Coming Soon
                  </div>
                )}
                
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <solution.icon className="h-7 w-7 text-accent" />
                </div>
                
                <h2 className="text-2xl font-bold mb-3">{solution.title}</h2>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                
                {solution.status === "available" ? (
                  <Button asChild>
                    <Link to={solution.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button variant="subtle" disabled>
                    Coming Soon
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding subtle-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Payvora works with many types of service businesses. Contact us to discuss how we can help streamline your payments.
            </p>
            <Button size="lg" asChild>
              <Link to="/request-demo">
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
