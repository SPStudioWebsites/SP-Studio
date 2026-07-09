"use client";

import { hero } from "@/lib/content";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ArrowRight, Check, MapPin, BadgeEuro, ShieldCheck, Clock } from "@/lib/icons";
import { useState, useEffect } from "react";
import { HeroVisual } from "@/components/ui/hero-visual";

const WORDS = ["Handwerker", "Frisöre", "Cafés", "Restaurants", "Praxen"];

const BULLETS = [
  { bold: "75 % googeln zuerst.", rest: "Wer nicht gefunden wird, verliert täglich Aufträge." },
  { bold: "In 14 Tagen online.", rest: "Kein monatelanges Warten, kein Baukasten-Frust." },
  { bold: "Direkt mit mir.", rest: "Kein Agentur-Umweg, kein Callcenter – aus der Region." },
];

const TRUST = [
  { icon: MapPin, label: "Aus Theres · Haßberge" },
  { icon: BadgeEuro, label: "Festpreis, kein Abo" },
  { icon: ShieldCheck, label: "DSGVO · Hosting in DE" },
  { icon: Clock, label: "Antwort in 24 h" },
];

function RollingHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <h1 className="mt-6 font-display font-extrabold leading-[1.02] tracking-tight text-foreground">
      {/* SEO keyword line — carries "Webdesign … Franken" in the H1 */}
      <span className="mb-3 block text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#1e5eff] sm:text-[0.72rem] sm:tracking-[0.14em] sm:mb-4">
        {hero.keywordLine}
      </span>
      <span className="block text-[2rem] sm:text-[2.4rem] md:text-[clamp(2.4rem,5vw,4.1rem)]">
        Endlich eine Website,
      </span>
      <span className="block text-[2rem] sm:text-[2.4rem] md:text-[clamp(2.4rem,5vw,4.1rem)]">
        die <span className="text-[#1e5eff]">Kunden bringt.</span>
      </span>
      <span className="mt-3 block overflow-hidden pb-1 text-[1.2rem] sm:text-[1.4rem] md:text-[clamp(1.35rem,3vw,2.1rem)] font-bold text-muted-strong">
        Für{" "}
        <em
          key={WORDS[index]}
          className="rolling-word-enter inline-block not-italic font-extrabold text-[#1e5eff]"
        >
          {WORDS[index]}
        </em>
      </span>
    </h1>
  );
}

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-10 md:pt-40 md:pb-16"
      aria-label="Einleitung"
    >
      {/* subtle top grid + soft accent glow */}
      <div aria-hidden className="absolute inset-0 grid-bg" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[520px] w-[520px] gradient-orb-a"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-0 h-[440px] w-[440px] gradient-orb-b"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            {/* Eyebrow */}
            <div className="inline-flex hero-enter" style={{ animationDelay: "0ms" }}>
              <span className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full glass-pill px-3.5 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1e5eff] opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1e5eff]" />
                </span>
                <span className="relative text-xs font-medium tracking-wide text-foreground/75">
                  {hero.eyebrow}
                </span>
              </span>
            </div>

            {/* Headline */}
            <div className="hero-enter" style={{ animationDelay: "80ms" }}>
              <RollingHeadline />
            </div>

            {/* Subheadline */}
            <p
              className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg text-pretty hero-enter"
              style={{ animationDelay: "160ms" }}
            >
              {hero.subtitle}
            </p>

            {/* Bullets */}
            <ul className="mt-7 space-y-3 hero-enter" style={{ animationDelay: "200ms" }}>
              {BULLETS.map(({ bold, rest }) => (
                <li key={bold} className="flex items-start gap-3 text-base text-muted">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(16,185,129,0.12)] ring-1 ring-[rgba(16,185,129,0.3)]">
                    <Check className="h-3 w-3 text-[#0f9d6b]" strokeWidth={3} />
                  </span>
                  <span>
                    <span className="font-semibold text-foreground">{bold}</span> {rest}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div
              className="mt-9 flex flex-col items-start gap-3 hero-enter"
              style={{ animationDelay: "240ms" }}
            >
              <ShinyButton
                href="#kontakt"
                size="lg"
                className="px-9 text-base font-semibold animate-cta-pulse hover:-translate-y-0.5"
              >
                {hero.ctaPrimary}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </ShinyButton>
              <p className="text-xs text-muted">
                Unverbindlich · kein Verkaufsdruck · persönlich, nicht per Chatbot
              </p>
            </div>

            {/* Early-trust strip (honest facts) */}
            <ul
              className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-6 hero-enter"
              style={{ animationDelay: "300ms" }}
            >
              {TRUST.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm font-medium text-muted-strong">
                  <Icon className="h-4 w-4 text-[#1e5eff]" strokeWidth={2} />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — product screenshot anchor, desktop only */}
          <div
            className="hidden lg:flex flex-shrink-0 items-center justify-center w-[500px] hero-enter"
            style={{ animationDelay: "180ms" }}
          >
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
