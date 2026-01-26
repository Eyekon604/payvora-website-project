import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Users, FileCheck, ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";

export default function Security() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Security & PCI Responsibilities
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Payment security is a shared responsibility. Learn how we protect your data and what you can do to maintain compliance.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What Payvora Does</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-elevated p-6">
                <Lock className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Encrypted Transactions</h3>
                <p className="text-muted-foreground">
                  All payment data is encrypted in transit and at rest using industry-standard encryption protocols.
                </p>
              </div>
              <div className="card-elevated p-6">
                <FileCheck className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">PCI DSS Compliance</h3>
                <p className="text-muted-foreground">
                  Our payment systems are PCI DSS compliant, meeting the highest standards for payment card security.
                </p>
              </div>
              <div className="card-elevated p-6">
                <Shield className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure Infrastructure</h3>
                <p className="text-muted-foreground">
                  We use enterprise-grade cloud infrastructure with regular security audits and monitoring.
                </p>
              </div>
              <div className="card-elevated p-6">
                <Users className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Access Controls</h3>
                <p className="text-muted-foreground">
                  Strict access controls ensure only authorized personnel can access sensitive systems and data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merchant Responsibilities */}
      <section className="section-padding subtle-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Your Responsibilities as a Merchant</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              While we handle the technical security of payment processing, there are steps you should take to maintain a secure environment.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  Best Practices
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground">Use strong, unique passwords for all accounts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground">Enable two-factor authentication where available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground">Train staff on security best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground">Keep all business software up to date</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground">Secure physical access to payment devices</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Things to Avoid
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-1" />
                    <span className="text-muted-foreground">Never store full card numbers on paper or in files</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-1" />
                    <span className="text-muted-foreground">Don't share login credentials between staff</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-1" />
                    <span className="text-muted-foreground">Avoid sending payment info via email or text</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-1" />
                    <span className="text-muted-foreground">Don't ignore security update notifications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About Security?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is happy to discuss security practices and help you understand PCI compliance requirements.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
