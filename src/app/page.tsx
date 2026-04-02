import { HeroSection } from "@/components/hero-section";
import { TechStack } from "@/components/tech-stack";
import { ServicesSection } from "@/components/services-section";
import { CrmSection } from "@/components/crm-section";
import { VoiceSection } from "@/components/voice-section";
import { AboutSection } from "@/components/about-section";
import { ProcessSection } from "@/components/process-section";
import { ContactSection } from "@/components/contact-section";
import { GradientDivider } from "@/components/gradient-divider";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <GradientDivider />
      <AboutSection />
      <GradientDivider />
      <TechStack />
      <GradientDivider />
      <ServicesSection />
      <GradientDivider />
      <CrmSection />
      <GradientDivider />
      <VoiceSection />
      <GradientDivider />
      <ProcessSection />
      <GradientDivider />
      <ContactSection />
    </main>
  );
}
