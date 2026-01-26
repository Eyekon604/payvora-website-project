import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
            <p className="text-muted-foreground mb-6">
              Last updated: January 2025
            </p>

            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing or using Payvora's services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Use of Services</h2>
                <p className="text-muted-foreground mb-4">
                  You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Ensuring your use complies with applicable laws and regulations</li>
                  <li>Providing accurate and complete information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Payment Processing</h2>
                <p className="text-muted-foreground mb-4">
                  By using our payment processing services, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Pay all applicable fees as outlined in your service agreement</li>
                  <li>Comply with payment card industry standards and regulations</li>
                  <li>Maintain necessary licenses for your business operations</li>
                  <li>Not use the service for prohibited transaction types</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  All content, features, and functionality of our services are owned by Payvora and are protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  To the maximum extent permitted by law, Payvora shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Termination</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to suspend or terminate your access to our services at any time, with or without cause, and with or without notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms, contact us at: legal@payvora.us
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
