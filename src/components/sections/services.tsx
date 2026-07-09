import { Reveal } from "@/components/ui/reveal";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Pill } from "@/components/ui/pill";
import { CTA_LABEL } from "@/lib/content";
import { Check, Sparkles } from "@/lib/icons";
import { cn } from "@/lib/utils";

const packages = [
  {
    id: "starter",
    name: "Starter",
    price: "399 €",
    period: "einmalig",
    tagline: "Dein Auftritt, schnell online.",
    features: [
      "Onepager mit klarer Grundstruktur",
      "Modernes, sauberes Design",
      "Mobile Optimierung",
      "Kontaktformular oder Mail-Link",
      "Basis-Metadaten (Title & Description)",
      "1 Korrekturrunde",
    ],
    cta: "Unverbindlich anfragen",
    popular: false,
  },
  {
    id: "wachstum",
    name: "Wachstum",
    price: "699 €",
    period: "einmalig",
    tagline: "Deine Webseite als Kundenmagnet",
    features: [
      "Individueller Onepager (kein Template)",
      "Struktur mit Fokus auf Anfragen & Vertrauen",
      "Mobile- & Performance-Optimierung",
      "Kontaktformular + klare Call-to-Actions",
      "Lokale Keyword-Einbindung",
      "Optimierte Meta-Daten",
      "2–3 Korrekturrunden",
    ],
    cta: CTA_LABEL,
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "1.199 €",
    period: "einmalig",
    tagline: "Alles drin. Maximale Wirkung.",
    features: [
      "Alles aus Wachstum",
      "Erweiterte Seitenstruktur & stärkere Storyline",
      "Individuellere visuelle Ausarbeitung",
      "Vertiefte Conversion-Optimierung",
      "Erweiterte On-Page-SEO-Struktur",
      "Priorisierte Umsetzung",
      "4–5 Korrekturrunden",
    ],
    cta: "Unverbindlich anfragen",
    popular: false,
  },
] as const;

/**
 * Sektion 9 — Mittel-CTA (Kern). Transparente Festpreise entkräften den
 * größten Einwand (Kosten) und münden im "Wachstum"-Paket in den einen
 * kanonischen CTA-Wortlaut, identisch zu Hero und Final-CTA.
 */
export function ServicesSection() {
  return (
    <section id="leistungen" aria-labelledby="leistungen-h" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Pill>Festpreise</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="leistungen-h"
              className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl text-balance"
            >
              Einmal investieren.{" "}
              <em className="not-italic text-[#1e5eff]">Dauerhaft Kunden gewinnen.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg text-pretty">
              Deine Website bezahlt sich mit jeder neuen Anfrage selbst. Festpreis,
              bevor wir starten, keine Überraschungen danach.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-center gap-6 md:grid-cols-3 lg:gap-8">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 0.1} y={30} className={cn("relative", pkg.popular && "md:-mt-4 md:mb-4 z-10")}>
              <PricingCard pkg={pkg} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-10 text-center text-xs text-muted">
            Alle Preise sind Endpreise. Gemäß §19 UStG wird keine Umsatzsteuer erhoben.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function PricingCard({ pkg, index }: { pkg: (typeof packages)[number]; index: number }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl border bg-white",
        pkg.popular
          ? "border-[rgba(30,94,255,0.22)] p-8 shadow-[0_30px_70px_-30px_rgba(30,94,255,0.35)]"
          : "border-border p-6 shadow-[0_1px_2px_rgba(20,24,31,0.04)]"
      )}
    >
      {pkg.popular && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2">
          <span
            className="inline-flex items-center gap-1.5 rounded-b-xl px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white"
            style={{ background: "linear-gradient(135deg,#1e5eff,#4f46e5)" }}
          >
            <Sparkles className="h-3 w-3" strokeWidth={2.5} />
            Beliebtestes Paket
          </span>
        </div>
      )}

      <div className={cn("pt-2", pkg.popular && "pt-6")}>
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className={cn("mt-2 font-display font-bold tracking-tight text-foreground", pkg.popular ? "text-2xl" : "text-xl")}>
          {pkg.name}
        </h3>
        <p className={cn("mt-1 text-muted", pkg.popular ? "text-sm" : "text-xs")}>{pkg.tagline}</p>
      </div>

      <div className={cn("border-t border-border", pkg.popular ? "mt-7 pt-7" : "mt-5 pt-5")}>
        <div className="flex items-end gap-1">
          <span
            className={cn(
              "font-display font-extrabold leading-none tracking-tight",
              pkg.popular ? "text-[2.5rem] text-[#1e5eff]" : "text-[2rem] text-foreground"
            )}
          >
            {pkg.price}
          </span>
          <span className="mb-1 text-sm text-muted">{pkg.period}</span>
        </div>
      </div>

      <ul className={cn("flex-1", pkg.popular ? "mt-7 space-y-3" : "mt-5 space-y-2.5")}>
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <span
              className={cn(
                "mt-0.5 flex flex-shrink-0 items-center justify-center rounded-full",
                pkg.popular ? "size-5 bg-[rgba(16,185,129,0.12)] ring-1 ring-[rgba(16,185,129,0.3)]" : "size-4 bg-[#faf9f6] border border-border"
              )}
              aria-hidden
            >
              <Check className={cn(pkg.popular ? "h-2.5 w-2.5 text-[#0f9d6b]" : "h-2 w-2 text-muted")} />
            </span>
            <span className={cn("leading-relaxed text-foreground/80", pkg.popular ? "text-sm" : "text-xs")}>{f}</span>
          </li>
        ))}
      </ul>

      <div className={pkg.popular ? "mt-8" : "mt-6"}>
        {pkg.popular ? (
          <ShinyButton href="#kontakt" size="lg" className="w-full justify-center">
            {pkg.cta}
          </ShinyButton>
        ) : (
          <ShinyButton href="#kontakt" variant="ghost" size="md" className="w-full justify-center">
            {pkg.cta}
          </ShinyButton>
        )}
      </div>
    </div>
  );
}
