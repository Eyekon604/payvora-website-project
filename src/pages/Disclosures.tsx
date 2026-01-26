import { Layout } from "@/components/layout/Layout";

export default function Disclosures() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Disclosures</h1>
            <p className="text-muted-foreground mb-6">
              Last updated: January 2025
            </p>

            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Payment Processing Disclosure</h2>
                <p className="text-muted-foreground mb-4">
                  Payvora facilitates payment processing through partnerships with licensed payment processors and acquiring banks. When you use our services, your transactions are processed according to the rules and regulations of the payment card networks (Visa, Mastercard, American Express, Discover).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Fees and Pricing</h2>
                <p className="text-muted-foreground mb-4">
                  Payment processing fees vary based on your business type, transaction volume, and underwriting factors. Monthly platform fees are disclosed in your service agreement. All fees are subject to change with 30 days notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">No Guarantees</h2>
                <p className="text-muted-foreground mb-4">
                  While we strive to provide reliable services, we cannot guarantee specific results such as:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Specific increases in revenue or collections</li>
                  <li>Reduction in payment processing time</li>
                  <li>Customer response rates to automated messages</li>
                  <li>Approval for payment processing services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground mb-4">
                  Our platform integrates with third-party services for certain features. These services have their own terms and privacy policies. We are not responsible for the practices of these third-party providers.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Regulatory Compliance</h2>
                <p className="text-muted-foreground mb-4">
                  It is your responsibility to ensure that your use of our services complies with all applicable laws and regulations in your jurisdiction, including but not limited to HIPAA (for healthcare providers), TCPA (for text messaging), and state consumer protection laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these disclosures, contact us at: legal@payvora.us
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
