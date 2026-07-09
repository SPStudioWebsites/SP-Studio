import { guarantees } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { BeforeAfter } from "@/components/sections/before-after";
import {
  BadgeEuro,
  ShieldCheck,
  Phone,
  CheckCircle2,
  ArrowRight,
  Quote,
} from "@/lib/icons";

/**
 * Sektion 6 — Trust-Block (Kern). Schnell-Sichtbar.de ist jung: statt erfundener
 * Zahlen trägt hier ehrliche Risikoumkehr. Garantien laufen als EIN
 * zusammenhängendes Band (statt vieler loser Karten), darunter ein
 * interaktiver Vorher/Nachher-Vergleich mit echten Beispiel-Designs und ein
 * reservierter, ehrlich markierter Testimonial-Slot.
 */
const GUARANTEE_ICONS = { BadgeEuro, ShieldCheck, Phone, CheckCircle2 } as const;

export function CaseStudiesSection() {
  return (
    <section id="ergebnisse" aria-labelledby="ergebnisse-h" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Pill>Dein Risiko: keins</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="ergebnisse-h"
              className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl text-balance"
            >
              Warum du mir{" "}
              <em className="not-italic text-[#1e5eff]">vertrauen kannst.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg text-pretty">
              Schnell-Sichtbar.de ist jung – große Kundenzahlen sammle ich gerade erst.
              Was ich dir dafür jetzt schon gebe: klare Garantien statt Versprechen ins Blaue.
            </p>
          </Reveal>
        </div>

        {/* Garantien als zusammenhängendes Band */}
        <Reveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-white shadow-[0_1px_2px_rgba(20,24,31,0.04),0_40px_80px_-52px_rgba(20,24,31,0.3)]">
            <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
              {guarantees.map((g, i) => {
                const Icon = GUARANTEE_ICONS[g.icon as keyof typeof GUARANTEE_ICONS];
                return (
                  <div
                    key={g.title}
                    className={`p-7 ${i > 0 ? "lg:border-l lg:border-border" : ""} ${i === 1 ? "sm:border-l sm:border-border" : ""} ${i === 3 ? "sm:border-l sm:border-border lg:border-l" : ""}`}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(16,185,129,0.1)] ring-1 ring-[rgba(16,185,129,0.28)]">
                      <Icon className="h-5 w-5 text-[#0f9d6b]" strokeWidth={1.9} />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold tracking-tight text-foreground text-balance">
                      {g.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted text-pretty">{g.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Interaktiver Vorher/Nachher-Vergleich */}
        <Reveal delay={0.15}>
          <p className="mt-20 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            So sieht der Unterschied aus
          </p>
          <h3 className="mx-auto mt-3 max-w-xl text-center font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl text-balance">
            Zieh den Regler.{" "}
            <em className="not-italic text-[#1e5eff]">Alt gegen neu.</em>
          </h3>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 max-w-4xl">
            <BeforeAfter />
          </div>
        </Reveal>

        {/* Reservierter Testimonial-Slot: menschliche Form + ehrlich als offen markiert */}
        <Reveal delay={0.15}>
          <figure className="relative mt-16 overflow-hidden rounded-3xl border border-dashed border-[rgba(30,94,255,0.4)] bg-[rgba(30,94,255,0.03)] p-8 md:p-10">
            <span className="absolute right-5 top-5 rounded-full border border-[rgba(30,94,255,0.3)] bg-white px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1e5eff]">
              Kundenstimme folgt
            </span>
            <Quote aria-hidden className="h-9 w-9 text-[#1e5eff]/30" />
            <blockquote className="mt-4 max-w-2xl font-serif text-xl italic leading-relaxed text-foreground/70 md:text-2xl text-pretty">
              „Hier steht bald die Erfahrung eines echten Kunden – mit Name, Betrieb und
              konkretem Ergebnis. Willst du der Erste sein?"
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-[rgba(30,94,255,0.4)] bg-white text-[9px] font-semibold uppercase tracking-wide text-[#1e5eff]/70"
                aria-label="Platz für ein Kundenfoto"
              >
                Foto
              </span>
              <span>
                <span className="block h-2.5 w-28 rounded-full bg-[rgba(30,94,255,0.18)]" />
                <span className="mt-2 block h-2 w-20 rounded-full bg-[rgba(30,94,255,0.12)]" />
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <p className="max-w-lg text-sm text-muted text-pretty">
              Du wärst gern eine der ersten echten Erfolgsgeschichten hier? Als früher Kunde
              bekommst du besondere Aufmerksamkeit bei Design und Betreuung.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1e5eff] hover:underline"
            >
              Jetzt einsteigen
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
