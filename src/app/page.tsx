import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { IndustriesSection } from "@/components/sections/industries";
import { ServicesSection } from "@/components/sections/services";
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
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)`,
              backgroundSize: `36px 36px`,
            }}
          />
          {/* Film grain */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-overlay"
            style={{
              opacity: 0.6,
              backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23g)'/></svg>")`,
            }}
          />
          <IndustriesSection />
          <ProcessSection />
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
