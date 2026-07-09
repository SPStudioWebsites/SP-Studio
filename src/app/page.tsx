import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign Franken | Schnell-Sichtbar.de",
  description:
    "Du willst online gefunden werden? Ich baue professionelle Webseiten für lokale Unternehmen in Franken – Festpreis ab 399 €, schnell online. Jetzt anfragen.",
  keywords: [
    "Webdesign Franken",
    "Webagentur Franken",
    "Webdesign Unterfranken",
    "Webseite erstellen Franken",
    "Webdesign für Handwerker",
    "Webdesign für Restaurants",
    "lokale Webseite Franken",
  ],
  alternates: { canonical: "https://schnell-sichtbar.de" },
  openGraph: {
    title: "Webdesign Franken | Schnell-Sichtbar.de",
    description:
      "Du willst online gefunden werden? Ich baue professionelle Webseiten für lokale Unternehmen in Franken – Festpreis ab 399 €, schnell online. Jetzt anfragen.",
  },
};
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { HeroSection } from "@/components/sections/hero";
import { ProblemsSection } from "@/components/sections/problems";
import { IndustriesSection } from "@/components/sections/industries";
import { MethodSection } from "@/components/sections/method";
import { BenefitsSection } from "@/components/sections/benefits";
import { WhyMeSection } from "@/components/sections/why-me";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { ProcessSection } from "@/components/sections/process";
import { AboutSection } from "@/components/sections/about";
import { MidCtaSection } from "@/components/sections/mid-cta";
import { ServicesSection } from "@/components/sections/services";
import { LocationSection } from "@/components/sections/location";
import { FAQSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { RegionsSection } from "@/components/sections/regions";

export default function Home() {
  return (
    <>
      <JsonLd />
      <ScrollProgress />
      <Navbar />
      <main id="main" className="relative">
        <HeroSection />
        <ProblemsSection />
        <IndustriesSection />
        <MethodSection />
        <BenefitsSection />
        <WhyMeSection />
        <CaseStudiesSection />
        <ProcessSection />
        <AboutSection />
        <MidCtaSection />
        <ServicesSection />
        <LocationSection />
        <FAQSection />
        <ContactSection />
        <RegionsSection />
      </main>
      <Footer />
    </>
  );
}
