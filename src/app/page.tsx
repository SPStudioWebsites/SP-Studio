import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Webdesign Franken | Schnell-Sichtbar.de",
  description:
    "Webdesign Franken für lokale Unternehmen – professionelle Webseiten für Handwerker, Restaurants, Frisöre & Salons in der Region. Festpreis ab 399 €. Kostenlose Beratung.",
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
      "Webdesign Franken für lokale Unternehmen – professionelle Webseiten für Handwerker, Restaurants & Salons. Festpreis ab 399 €.",
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

const IndustriesSection = dynamic(() =>
  import("@/components/sections/industries").then((m) => m.IndustriesSection)
);
const ProcessSection = dynamic(() =>
  import("@/components/sections/process").then((m) => m.ProcessSection)
);
const AboutSection = dynamic(() =>
  import("@/components/sections/about").then((m) => m.AboutSection)
);
const WhyWebsiteSection = dynamic(() =>
  import("@/components/sections/why-website").then((m) => m.WhyWebsiteSection)
);
const WhyMeSection = dynamic(() =>
  import("@/components/sections/why-me").then((m) => m.WhyMeSection)
);
const FAQSection = dynamic(() =>
  import("@/components/sections/faq").then((m) => m.FAQSection)
);
const ServicesSection = dynamic(() =>
  import("@/components/sections/services").then((m) => m.ServicesSection)
);
const RegionsSection = dynamic(() =>
  import("@/components/sections/regions").then((m) => m.RegionsSection)
);
const ContactSection = dynamic(() =>
  import("@/components/sections/contact").then((m) => m.ContactSection)
);

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
          <div className="md:-mt-[34rem]">
            <ProcessMarginWrapper>
              <ProcessSection />
            </ProcessMarginWrapper>
          </div>
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
