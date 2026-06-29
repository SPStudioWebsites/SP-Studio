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
import { HeroSection } from "@/components/sections/hero";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { Grain } from "@/components/effects/grain";
import { MorphingBackground } from "@/components/effects/morphing-background";
import { ProcessMarginWrapper } from "@/components/sections/process-margin-wrapper";
import { IndustriesSection } from "@/components/sections/industries";
import { ProcessSection } from "@/components/sections/process";
import { AboutSection } from "@/components/sections/about";
import { WhyWebsiteSection } from "@/components/sections/why-website";
import { WhyMeSection } from "@/components/sections/why-me";
import { FAQSection } from "@/components/sections/faq";
import { ServicesSection } from "@/components/sections/services";
import { RegionsSection } from "@/components/sections/regions";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <JsonLd />
      <MorphingBackground />
      <ScrollProgress />
      <Grain />
      <Navbar />
      <main id="main" className="relative">
        <HeroSection />

        {/* Subtle premium background block: Branchen → WhyMe */}
        <div
          className="relative"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {/* Ambient gradients */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 70% 35% at 15% 15%, rgba(255,45,143,0.05) 0%, transparent 65%),
                radial-gradient(ellipse 60% 40% at 85% 75%, rgba(139,92,246,0.06) 0%, transparent 65%),
                radial-gradient(ellipse 90% 50% at 50% 50%, rgba(139,92,246,0.03) 0%, transparent 70%)
              `,
            }}
          />
          {/* Dot grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.13) 1px, transparent 1px)`,
              backgroundSize: `36px 36px`,
            }}
          />

          <IndustriesSection />
          <ProcessMarginWrapper>
            <ProcessSection />
          </ProcessMarginWrapper>
          <WhyWebsiteSection />
          <AboutSection />
          <WhyMeSection />
        </div>

        <ServicesSection />
        <ContactSection />
        <FAQSection />
        <RegionsSection />
      </main>
      <Footer />
</>
  );
}
