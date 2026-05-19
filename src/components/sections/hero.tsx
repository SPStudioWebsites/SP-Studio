"use client";

import { hero } from "@/lib/content";
import { GradientOrbs } from "@/components/effects/gradient-orbs";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Magnetic } from "@/components/ui/magnetic-button";
import { ArrowRight, TrendingUp, Globe, BadgeEuro, ShieldCheck } from "@/lib/icons";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";

import { useState, useEffect } from "react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";


const WORDS = ["Handwerker", "Frisöre", "Cafés", "Restaurants"];

function RollingHeadline({ reduce }: { reduce: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <h1 className="mt-7 font-display text-[3.25rem] md:text-[clamp(2.4rem,8.5vw,6.75rem)] font-semibold leading-[0.95] tracking-tight">
      <span className="block text-foreground">
        Mehr Kunden.
      </span>
      <span className="block mt-1 text-foreground text-[2.5rem] md:text-[clamp(2rem,5.5vw,4.5rem)]">
        Mehr Aufträge.
      </span>
      <span className="block mt-1 overflow-hidden pb-3 text-[2rem] md:text-[clamp(1.5rem,4vw,3rem)]">
        <span className="text-foreground/60 font-semibold">Für </span>
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
      className="relative isolate overflow-hidden pt-28 pb-8 md:pt-36 md:pb-12"
      aria-label="Einleitung"
    >
      <GradientOrbs />
      <div aria-hidden className="absolute inset-0 grid-bg" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="space-y-0">

          {/* Eyebrow */}
          <div className="inline-flex hero-enter" style={{ animationDelay: "0ms" }}>
            <div className="group inline-flex items-center gap-2 rounded-full glass-pill px-3.5 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pink" />
              </span>
              <AnimatedShinyText className="inline-flex items-center justify-center text-xs font-medium tracking-wide">
                <span>{hero.eyebrow}</span>
              </AnimatedShinyText>
            </div>
          </div>

          {/* Headline */}
          <div className="hero-enter" style={{ animationDelay: "80ms" }}>
            <RollingHeadline reduce={!!reduce} />
          </div>

          {/* Subtitle */}
          <p className="mt-8 max-w-lg text-xs leading-relaxed text-muted text-pretty md:text-lg hero-enter" style={{ animationDelay: "160ms" }}>
            {hero.subtitle}
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center lg:justify-start hero-enter" style={{ animationDelay: "240ms" }}>
            {isMobile ? (
              <ShinyButton
                href="#kontakt"
                size="lg"
                className="shadow-[0_16px_60px_-8px_rgba(255,45,143,0.8)] hover:shadow-[0_22px_70px_-8px_rgba(255,45,143,1)] px-12 text-base font-semibold"
              >
                {hero.ctaPrimary}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </ShinyButton>
            ) : (
              <Magnetic strength={0.22}>
                <ShinyButton
                  href="#kontakt"
                  size="lg"
                  className="shadow-[0_16px_60px_-8px_rgba(255,45,143,0.8)] hover:shadow-[0_22px_70px_-8px_rgba(255,45,143,1)] px-12 text-base font-semibold"
                >
                  {hero.ctaPrimary}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </ShinyButton>
              </Magnetic>
            )}
          </div>

          {/* Trust pills */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/[0.07] pt-6 text-xs text-muted hero-enter" style={{ animationDelay: "300ms" }}>
            <span><span className="font-semibold text-foreground">ø 14 Tage</span> Lieferzeit</span>
            <span><span className="font-semibold text-foreground">Spezialisiert</span> auf KMUs</span>
            <span><span className="font-semibold text-foreground">Region</span> Franken</span>
          </div>

          {/* Trust metric badges — mobile only (floating cards are desktop-only) */}
          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div
              className="rounded-2xl px-4 py-3"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted">Ø mehr Anfragen</p>
              <p className="mt-0.5 font-display text-2xl font-bold leading-none text-foreground">+180%</p>
              <p className="mt-1 text-[9px] font-medium text-pink">nach Website-Launch</p>
            </div>
            <div
              className="rounded-2xl px-4 py-3"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted">Fertig in</p>
              <p className="mt-0.5 font-display text-2xl font-bold leading-none text-foreground">14 Tage</p>
              <p className="mt-1 text-[9px] font-medium text-violet">durchschnittliche Lieferzeit</p>
            </div>
          </div>

          {/* Feature grid */}
          <div className="mt-14 grid grid-cols-2 gap-2.5 pb-16 md:pb-24 hero-enter" style={{ animationDelay: "360ms" }}>
            {[
              { icon: TrendingUp,  text: "Täglich neue Anfragen",          grad: "linear-gradient(135deg,#ff2d8f,#c026d3)" },
              { icon: Globe,       text: "Deine Webseite arbeitet 24/7",  grad: "linear-gradient(135deg,#8b5cf6,#6d28d9)" },
              { icon: BadgeEuro,   text: "Mehr Buchungen. Mehr Umsatz.",  grad: "linear-gradient(135deg,#ff2d8f,#8b5cf6)" },
              { icon: ShieldCheck, text: "In 14 Tagen live & fertig",     grad: "linear-gradient(135deg,#6d28d9,#8b5cf6)" },
            ].map(({ icon: Icon, text, grad }) => (
              <div
                key={text}
                className="relative flex items-center gap-3 overflow-hidden rounded-2xl px-4 py-3.5 glass-feature"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 24px rgba(0,0,0,0.25)",
                }}
              >
                {/* subtle inner glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{ background: "radial-gradient(ellipse at 30% 0%, rgba(255,255,255,0.06) 0%, transparent 60%)" }} />
                <span
                  className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl shadow-lg"
                  style={{ background: grad, boxShadow: `0 4px 14px rgba(0,0,0,0.3)` }}
                >
                  <Icon className="h-4 w-4 text-white" strokeWidth={1.75} />
                </span>
                <span className="relative text-xs font-medium leading-snug text-foreground/90">{text}</span>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Scroll cue — desktop only, CSS animation */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2",
          reduce ? "hidden" : "hidden md:flex"
        )}
        aria-hidden
      >
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1">
          <span className="h-1.5 w-0.5 rounded-full bg-pink/80 animate-bounce" />
        </span>
      </div>
    </section>
  );
}
