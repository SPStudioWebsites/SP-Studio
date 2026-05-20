import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { HeroSection } from "@/components/sections/hero";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { Grain } from "@/components/effects/grain";
import { MorphingBackground } from "@/components/effects/morphing-background";

const IndustriesSection = dynamic(() =>
  import("@/components/sections/industries").then((m) => m.IndustriesSection)
);
const ProcessSection = dynamic(() =>
  import("@/components/sections/process").then((m) => m.ProcessSection)
);
const AboutSection = dynamic(() =>
  import("@/components/sections/about").then((m) => m.AboutSection)
);
const FAQSection = dynamic(() =>
  import("@/components/sections/faq").then((m) => m.FAQSection)
);
const ServicesSection = dynamic(() =>
  import("@/components/sections/services").then((m) => m.ServicesSection)
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

        {/* Subtle premium background block: Branchen → FAQ */}
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
          <div className="-mt-[14rem] md:-mt-[28rem]">
            <ProcessSection />
          </div>
          <AboutSection />
          <FAQSection />
        </div>

        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
</>
  );
}
