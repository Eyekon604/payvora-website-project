import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { z } from "zod";

const demoFormSchema = z.object({
  practiceName: z.string().trim().min(1, "Practice name is required").max(100),
  contactName: z.string().trim().min(1, "Contact name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20),
  locations: z.string().min(1, "Please select number of locations"),
  currentProcessor: z.string().trim().max(100).optional(),
  notes: z.string().trim().max(1000).optional(),
});

type FormData = z.infer<typeof demoFormSchema>;

export default function RequestDemo() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      practiceName: (form.elements.namedItem("practiceName") as HTMLInputElement).value,
      contactName: (form.elements.namedItem("contactName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      locations: formData.locations || "",
      currentProcessor: (form.elements.namedItem("currentProcessor") as HTMLInputElement).value,
      notes: (form.elements.namedItem("notes") as HTMLTextAreaElement).value,
    };

    const result = demoFormSchema.safeParse(data);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof FormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    // In production, this would submit to your backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-accent" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                We've received your demo request and will be in touch within 1 business day.
              </p>
              <Button asChild>
                <a href="/">Return to Home</a>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              Request a Demo
            </h1>
            <p className="text-lg text-primary-foreground/80">
              See how Payvora can help streamline your payments and customer communication. Fill out the form below and we'll schedule a personalized demo.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <div className="card-elevated p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="practiceName">Practice Name *</Label>
                  <Input
                    id="practiceName"
                    name="practiceName"
                    placeholder="Your Practice Name"
                    className="mt-2"
                  />
                  {errors.practiceName && (
                    <p className="text-destructive text-sm mt-1">{errors.practiceName}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="contactName">Contact Name *</Label>
                  <Input
                    id="contactName"
                    name="contactName"
                    placeholder="Your Name"
                    className="mt-2"
                  />
                  {errors.contactName && (
                    <p className="text-destructive text-sm mt-1">{errors.contactName}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="mt-2"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="locations">Number of Locations *</Label>
                  <Select
                    value={formData.locations}
                    onValueChange={(value) => setFormData({ ...formData, locations: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Location</SelectItem>
                      <SelectItem value="2-3">2-3 Locations</SelectItem>
                      <SelectItem value="4-10">4-10 Locations</SelectItem>
                      <SelectItem value="10+">10+ Locations</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.locations && (
                    <p className="text-destructive text-sm mt-1">{errors.locations}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="currentProcessor">Current Payment Processor</Label>
                  <Input
                    id="currentProcessor"
                    name="currentProcessor"
                    placeholder="e.g., Square, Stripe, etc."
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Tell us about your needs..."
                    rows={4}
                    className="mt-2"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
