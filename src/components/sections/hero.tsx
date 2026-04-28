"use client";

import { hero } from "@/lib/content";
import { GradientOrbs } from "@/components/effects/gradient-orbs";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Magnetic } from "@/components/ui/magnetic-button";
import { ArrowRight, ArrowDown, TrendingUp, Globe, BadgeEuro, ShieldCheck } from "@/lib/icons";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import Image from "next/image";

const WORDS = ["Handwerker", "Frisöre", "Cafés", "Restaurants"];

function RollingHeadline({ reduce }: { reduce: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <h1 className="mt-7 font-display text-[clamp(3.25rem,8.5vw,6.75rem)] font-semibold leading-[0.9] tracking-tight">
      <motion.span
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="block whitespace-nowrap text-foreground"
      >
        Schnell sichtbar.
      </motion.span>
      <motion.span
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
        className="block mt-1 text-foreground text-[clamp(2rem,5.5vw,4.5rem)]"
      >
        Webseiten für
      </motion.span>
      <motion.span
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.34 }}
        className="block mt-1 overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.em
            key={WORDS[index]}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 48, filter: "blur(6px)" }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -48, filter: "blur(6px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block font-serif italic font-normal text-gradient"
          >
            {WORDS[index]}
          </motion.em>
        </AnimatePresence>
      </motion.span>
    </h1>
  );
}

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-8 md:pt-36 md:pb-12"
      aria-label="Einleitung"
    >
      <GradientOrbs />
      <div aria-hidden className="absolute inset-0 grid-bg" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-4 lg:items-center">
        <div className="lg:col-span-8 xl:col-span-7 space-y-0">

          {/* Eyebrow */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex"
          >
            <div className="group inline-flex items-center gap-2 rounded-full glass-pill px-3.5 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pink" />
              </span>
              <AnimatedShinyText className="inline-flex items-center justify-center text-xs font-medium tracking-wide">
                <span>{hero.eyebrow}</span>
              </AnimatedShinyText>
            </div>
          </motion.div>

          {/* Headline */}
          <RollingHeadline reduce={!!reduce} />

          {/* Subtitle */}
          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-muted text-pretty"
          >
            {hero.subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.52 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Magnetic strength={0.18}>
              <ShinyButton href="#kontakt" size="lg">
                {hero.ctaPrimary}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </ShinyButton>
            </Magnetic>
            <ShinyButton href="#beispiele" variant="ghost" size="lg">
              {hero.ctaSecondary}
              <ArrowDown className="h-4 w-4" />
            </ShinyButton>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.66 }}
            className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/[0.07] pt-6 text-xs text-muted"
          >
            <span><span className="font-semibold text-foreground">ø 14 Tage</span> Lieferzeit</span>
            <span><span className="font-semibold text-foreground">Spezialisiert</span> auf KMUs</span>
            <span><span className="font-semibold text-foreground">Region</span> Haßberge</span>
          </motion.div>

          {/* Feature grid */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.78 }}
            className="mt-14 grid grid-cols-2 gap-2.5 pb-16 md:pb-24"
          >
            {[
              { icon: TrendingUp,  text: "Täglich neue Anfragen",       grad: "linear-gradient(135deg,#ff2d8f,#c026d3)" },
              { icon: Globe,       text: "Verkaufsstarke Webseite",      grad: "linear-gradient(135deg,#8b5cf6,#6d28d9)" },
              { icon: BadgeEuro,   text: "Mehr Buchungen. Mehr Umsatz.", grad: "linear-gradient(135deg,#ff2d8f,#8b5cf6)" },
              { icon: ShieldCheck, text: "0,0 Technik-Stress",           grad: "linear-gradient(135deg,#6d28d9,#8b5cf6)" },
            ].map(({ icon: Icon, text, grad }) => (
              <div
                key={text}
                className="relative flex items-center gap-3 overflow-hidden rounded-2xl px-4 py-3.5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(24px) saturate(180%)",
                  WebkitBackdropFilter: "blur(24px) saturate(180%)",
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
          </motion.div>

        </div>

        {/* Right column — laptop visual */}
        <div className="relative lg:col-span-4 xl:col-span-5">
          <div className="relative h-[340px] w-full sm:h-[460px] lg:h-[620px]">
            <LaptopHero />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2",
          reduce ? "hidden" : "hidden md:flex"
        )}
        aria-hidden
      >
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-0.5 rounded-full bg-pink/80"
          />
        </span>
      </motion.div>
    </section>
  );
}

function LaptopHero() {
  const reduce = useReducedMotion();
  return (
    <div className="relative flex h-full items-center justify-center">
      {/* Glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-4 bottom-8 h-56 w-56 rounded-full bg-violet/20 blur-3xl"
      />

      {/* Laptop */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 28 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="relative z-10 w-full"
      >
        <Image
          src="/laptop-herov2.png"
          alt="Moderne Website auf einem MacBook Pro — Beispiel für ein SP Studio Webdesign-Projekt"
          width={2752}
          height={1536}
          className="w-full drop-shadow-[0_50px_110px_rgba(255,45,143,0.25)]"
          priority
        />
      </motion.div>


      {/* Floating card — conversion metric */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, x: -20, y: 20 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
        whileHover={reduce ? {} : { scale: 1.04, y: -2 }}
        className="absolute bottom-10 left-6 z-20 cursor-default sm:bottom-16 sm:left-8"
        aria-hidden
      >
        <div className="rounded-2xl glass-strong px-5 py-3.5 shadow-[0_12px_48px_-8px_rgba(0,0,0,0.7)]">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-muted">Ø mehr Anfragen</p>
          <p className="mt-0.5 font-display text-[1.75rem] font-bold leading-none text-foreground">+180%</p>
          <p className="mt-1 text-[9px] text-pink font-medium">nach Website-Launch</p>
        </div>
      </motion.div>

      {/* Floating card — turnaround */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, x: 20, y: -16 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
        whileHover={reduce ? {} : { scale: 1.04, y: -2 }}
        className="absolute top-6 right-2 z-20 cursor-default sm:top-10 sm:right-0"
        aria-hidden
      >
        <div className="rounded-2xl glass-strong px-5 py-3.5 shadow-[0_12px_48px_-8px_rgba(0,0,0,0.7)]">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-muted">Fertig in</p>
          <p className="mt-0.5 font-display text-[1.75rem] font-bold leading-none text-foreground">14 Tage</p>
          <p className="mt-1 text-[9px] text-violet font-medium">garantierte Lieferzeit</p>
        </div>
      </motion.div>
    </div>
  );
}
