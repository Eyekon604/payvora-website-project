import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { WhoItsForSection } from "@/components/home/WhoItsForSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { SecuritySection } from "@/components/home/SecuritySection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <BenefitsSection />
      <WhoItsForSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SecuritySection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
