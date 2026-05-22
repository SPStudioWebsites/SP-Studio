"use client";

import { hero } from "@/lib/content";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ArrowRight, Check } from "@/lib/icons";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";

import { useState, useEffect } from "react";
import { HeroMockup } from "@/components/ui/hero-mockup";


const WORDS = ["Handwerker", "Frisöre", "Cafés", "Restaurants"];

function RollingHeadline({ reduce }: { reduce: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <h1 className="mt-7 font-display font-semibold leading-[0.95] tracking-tight">
      <span className="block text-foreground/60 text-[1rem] md:text-[1.25rem] font-medium tracking-widest uppercase mb-3">
        Webdesign Franken
      </span>
      <span className="block text-foreground text-[2.5rem] md:text-[clamp(2rem,5.5vw,4.5rem)]">
        Mehr Kunden.
      </span>
      <span className="block mt-1 text-foreground text-[2.5rem] md:text-[clamp(2rem,5.5vw,4.5rem)]">
        Mehr Aufträge.
      </span>
      <span className="block mt-1 overflow-hidden pb-3 text-[2rem] md:text-[clamp(1.5rem,4vw,3rem)]">
        <span className="text-foreground font-semibold">Für </span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.em
            key={WORDS[index]}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -40 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block font-display font-extrabold not-italic text-gradient pr-[0.08em]"
          >
            {WORDS[index]}
          </motion.em>
        </AnimatePresence>
      </span>
    </h1>
  );
}

export function HeroSection() {
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 1023px)").matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-24 pb-8 md:pt-52 md:pb-12"
      aria-label="Einleitung"
    >
<div aria-hidden className="absolute inset-0 grid-bg" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
        <div className="space-y-0 flex-1">

          {/* Eyebrow */}
          <div className="inline-flex hero-enter" style={{ animationDelay: "0ms" }}>
            <div className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full glass-pill px-3.5 py-1.5">
              {/* Pill shine sweep */}
              <span
                aria-hidden
                className="animate-shiny-text pointer-events-none absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)",
                }}
              />
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pink" />
              </span>
              <span className="relative text-xs font-medium tracking-wide text-foreground/85">
                {hero.eyebrow}
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="hero-enter" style={{ animationDelay: "80ms" }}>
            <RollingHeadline reduce={!!reduce} />
          </div>

          {/* Subtitle */}
          <p className="mt-4 md:mt-8 max-w-lg text-xs leading-relaxed text-muted text-pretty md:text-lg hero-enter" style={{ animationDelay: "160ms" }}>
            {hero.subtitle}
          </p>

          {/* Bullets */}
          <ul className="mt-5 md:mt-10 space-y-2 md:space-y-3 hero-enter" style={{ animationDelay: "200ms" }}>
            {[
              { bold: "75 % der Kunden googeln zuerst.", rest: "Wer nicht gefunden wird, verliert täglich Aufträge." },
              { bold: "Deine Website arbeitet 24/7.", rest: "Neue Anfragen kommen auch wenn du schläfst." },
              { bold: "Direkt mit mir, kein Agentur-Umweg.", rest: "Aus der Region, persönlich erreichbar." },
            ].map(({ bold, rest }) => (
              <li key={bold} className="flex items-start gap-3 text-base text-muted">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink to-violet">
                  <Check className="h-2.5 w-2.5 text-white" />
                </span>
                <span><span className="font-semibold text-foreground">{bold}</span>{" "}{rest}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-14 mb-16 flex justify-center lg:justify-start hero-enter" style={{ animationDelay: "240ms" }}>
            {isMobile ? (
              <ShinyButton
                href="#kontakt"
                size="lg"
                className="shadow-[0_16px_60px_-8px_rgba(255,45,143,0.8)] hover:shadow-[0_24px_64px_-6px_rgba(255,45,143,0.95)] hover:-translate-y-1.5 px-12 text-base font-semibold animate-cta-pulse"
              >
                {hero.ctaPrimary}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </ShinyButton>
            ) : (
              <ShinyButton
                href="#kontakt"
                size="lg"
                className="shadow-[0_16px_60px_-8px_rgba(255,45,143,0.8)] hover:shadow-[0_24px_64px_-6px_rgba(255,45,143,0.95)] hover:-translate-y-1.5 px-12 text-base font-semibold animate-cta-pulse"
              >
                {hero.ctaPrimary}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </ShinyButton>
            )}
          </div>



        </div>{/* end left column */}

          {/* Right column — mockup, desktop only */}
          <div className="hidden lg:flex flex-shrink-0 items-center justify-center w-[520px]">
            <HeroMockup />
          </div>

        </div>{/* end flex row */}
      </div>

    </section>
  );
}
