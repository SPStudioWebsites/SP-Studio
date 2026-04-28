import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { IndustriesSection } from "@/components/sections/industries";
import { ProcessSection } from "@/components/sections/process";
import { AboutSection } from "@/components/sections/about";
import { FAQSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { Grain } from "@/components/effects/grain";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Grain />
      <Navbar />
      <main id="main" className="relative">
        <HeroSection />
        <IndustriesSection />
        <ProcessSection />
        <AboutSection />
        <FAQSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
