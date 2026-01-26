import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Lock, CheckCircle, ArrowRight } from "lucide-react";

export function SecuritySection() {
  return (
    <section className="section-padding subtle-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center">
                  <Shield className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Security & Compliance
                </h2>
                <p className="text-muted-foreground mb-6">
                  Payment security is a shared responsibility. We maintain PCI compliance for our systems and help you understand your responsibilities as a merchant.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>PCI DSS Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Lock className="h-4 w-4 text-accent" />
                    <span>Encrypted Transactions</span>
                  </div>
                </div>
                
                <Button variant="outline" asChild>
                  <Link to="/security">
                    Learn About Security <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
