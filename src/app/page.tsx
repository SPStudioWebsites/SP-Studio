import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlobalBackground } from "@/components/layout/GlobalBackground";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      <GlobalBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
