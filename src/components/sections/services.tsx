"use client";

import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { Pill } from "@/components/ui/pill";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Check } from "@/lib/icons";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const packages = [
  {
    id: "starter",
    name: "Starter",
    price: "399 €",
    period: "einmalig",
    tagline: "Für einen einfachen, sauberen Einstieg",
    features: [
      "Onepager mit klarer Grundstruktur",
      "Modernes, sauberes Design",
      "Mobile Optimierung",
      "Kontaktformular oder Mail-Link",
      "Basis-Metadaten (Title & Description)",
      "1 Korrekturrunde",
    ],
    cta: "Starter anfragen",
    popular: false,
    accent: "violet" as const,
  },
  {
    id: "wachstum",
    name: "Wachstum",
    price: "699 €",
    period: "einmalig",
    tagline: "Für mehr Anfragen und klare Struktur",
    features: [
      "Individueller Onepager (kein Template)",
      "Struktur mit Fokus auf Anfragen & Vertrauen",
      "Ausformulierte Headlines & Seitenstruktur",
      "Mobile- & Performance-Optimierung",
      "Kontaktformular + klare Call-to-Actions",
      "Lokale Keyword-Einbindung",
      "Saubere H1–H3 Struktur",
      "Optimierte Meta-Daten",
      "2–3 Korrekturrunden",
    ],
    cta: "Projekt anfragen",
    popular: true,
    accent: "pink" as const,
  },
  {
    id: "premium",
    name: "Premium",
    price: "1.199 €",
    period: "einmalig",
    tagline: "Maximale Wirkung aus deinem Onepager",
    features: [
      "Alles aus Wachstum",
      "Erweiterte Seitenstruktur & stärkere Storyline",
      "Individuellere visuelle Ausarbeitung",
      "Vertiefte Conversion-Optimierung",
      "Erweiterte On-Page-SEO-Struktur",
      "Vorbereitung für spätere Erweiterungen",
      "Priorisierte Umsetzung",
      "4–5 Korrekturrunden",
    ],
    cta: "Premium anfragen",
    popular: false,
    accent: "violet" as const,
  },
] as const;

export function ServicesSection() {
  return (
    <section
      id="leistungen"
      aria-labelledby="leistungen-h"
      className="relative overflow-hidden py-16 md:py-24"
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[90vw] max-w-4xl -translate-x-1/2 rounded-full bg-pink/5 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[40vw] rounded-full bg-violet/5 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Pill>Pakete & Preise</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="leistungen-h"
              className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl text-balance"
            >
              Klare Pakete.{" "}
              <em className="font-display font-extrabold not-italic text-gradient">Keine Überraschungen.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg text-pretty">
              Drei klare Pakete — kein Kleingedrucktes, kein Preisschock.
              Festpreis, bevor wir starten.
            </p>
          </Reveal>
        </div>

        {/* Pricing grid */}
        <div className="mt-16 grid items-center gap-6 md:grid-cols-3 lg:gap-8">
          {packages.map((pkg, i) => (
            <PricingCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <Reveal delay={0.4}>
          <p className="mt-10 text-center text-xs text-muted">
            Alle Preise zzgl. MwSt. · Individuelle Anpassungen auf Anfrage möglich
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function PricingCard({
  pkg,
  index,
}: {
  pkg: (typeof packages)[number];
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      whileHover={reduce ? undefined : { y: pkg.popular ? -6 : -4 }}
      className={cn("relative", pkg.popular && "md:-mt-4 md:mb-4 z-10")}
    >
      <GlassCard
        variant={pkg.popular ? "strong" : "default"}
        className={cn(
          "relative flex h-full flex-col overflow-hidden p-8",
          pkg.popular &&
            "shadow-[0_0_60px_-10px_rgba(255,45,143,0.35)] border-pink/20"
        )}
      >
        {pkg.popular && (
          <BorderBeam
            duration={10}
            size={180}
            colorFrom="#ff2d8f"
            colorTo="#8b5cf6"
            borderWidth={1.5}
          />
        )}

        {/* Popular badge */}
        {pkg.popular && (
          <div className="absolute -top-px left-1/2 -translate-x-1/2">
            <span className="inline-block rounded-b-xl bg-gradient-to-r from-pink to-violet px-4 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-lg">
              Beliebtestes Paket
            </span>
          </div>
        )}

        {/* Header */}
        <div className={cn("pt-2", pkg.popular && "pt-5")}>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted/70">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">
            {pkg.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{pkg.tagline}</p>
        </div>

        {/* Price */}
        <div className="mt-7 border-t border-white/[0.07] pt-7">
          <div className="flex items-end gap-1">
            <span
              className={cn(
                "font-display text-[2.5rem] font-bold leading-none tracking-tight",
                pkg.popular ? "text-gradient" : "text-foreground"
              )}
            >
              {pkg.price}
            </span>
            <span className="mb-1 text-sm text-muted">{pkg.period}</span>
          </div>
        </div>

        {/* Features */}
        <ul className="mt-7 flex-1 space-y-3">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <span
                className={cn(
                  "mt-0.5 flex size-5 flex-shrink-0 items-center justify-center rounded-full",
                  pkg.popular
                    ? "bg-gradient-to-br from-pink to-violet"
                    : "bg-white/[0.07] border border-white/10"
                )}
                aria-hidden
              >
                <Check className="h-2.5 w-2.5 text-white" />
              </span>
              <span className="text-sm leading-relaxed text-foreground/80">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-8">
          {pkg.popular ? (
            <ShinyButton href="#kontakt" size="lg" className="w-full justify-center">
              {pkg.cta}
            </ShinyButton>
          ) : (
            <ShinyButton
              href="#kontakt"
              variant="ghost"
              size="lg"
              className="w-full justify-center"
            >
              {pkg.cta}
            </ShinyButton>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}
