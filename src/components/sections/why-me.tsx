import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { ShinyButton } from "@/components/ui/shiny-button";
import { CTA_LABEL } from "@/lib/content";
import { Check, X, Sparkles, ArrowRight } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface Bullet {
  text: string;
  good: boolean;
}

interface ComparisonSide {
  label: string;
  sublabel: string;
  price: string;
  priceNote: string;
  bullets: Bullet[];
  highlight?: boolean;
}

const sides: ComparisonSide[] = [
  {
    label: "Andere Anbieter",
    sublabel: "Wix · Jimdo · Agenturen",
    price: "15 € bis 15.000 €",
    priceNote: "monatliches Abo oder hoher Einmalinvest, oft ohne Strategie",
    bullets: [
      { good: false, text: "Lieferzeit Wochen bis 6 Monate. Du verlierst täglich Anfragen." },
      { good: false, text: "Google-Auffindbarkeit fehlt oder kostet extra." },
      { good: false, text: "Kein fester Ansprechpartner: wechselnder PM, Forum oder Bot." },
      { good: false, text: "Kein Eigentum am Code: Lock-in, Abo oder proprietäres System." },
      { good: false, text: "Generisch ohne Regionalbezug: Vorlage ohne individuellen Fokus." },
      { good: false, text: "Keine Strategie enthalten. Schöne Seite, null Anfragen." },
    ],
  },
  {
    label: "Schnell-Sichtbar",
    sublabel: "Inhaber direkt · Aus Franken",
    price: "ab 399 €",
    priceNote: "Festpreis, einmalig. Der Code gehört dir komplett.",
    bullets: [
      { good: true, text: "14 Tage bis zur fertigen Seite. Express in 7 Tagen möglich." },
      { good: true, text: "Local SEO inklusive. Du wirst bei Google gefunden." },
      { good: true, text: "Direkt mit mir. Kein Ticketsystem, kein Praktikant." },
      { good: true, text: "Code gehört 100 % dir. Kein Lock-in, kein monatliches Abo." },
      { good: true, text: "Franken-fokussiert: regionaler Marktbezug und lokales Know-how." },
      { good: true, text: "Strategie inklusive: damit deine Seite Anfragen bringt, nicht nur existiert." },
    ],
    highlight: true,
  },
];

const trustStats = [
  { value: "Ab 399 €", label: "Festpreis, einmalig" },
  { value: "14 Tage", label: "bis zur fertigen Seite" },
  { value: "100 %", label: "dein Code, kein Lock-in" },
  { value: "0 €", label: "Folgekosten meinerseits" },
];

export function WhyMeSection() {
  return (
    <section id="warum-mich" aria-labelledby="warum-mich-h" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Pill>Der Unterschied</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="warum-mich-h"
              className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl text-balance"
            >
              Was kostet dich{" "}
              <em className="not-italic text-[#1e5eff]">die falsche Wahl wirklich?</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg text-pretty">
              Die meisten Unternehmer in Franken treffen die Entscheidung für ihre Webseite
              einmal und bereuen sie über Jahre. Hier siehst du auf einen Blick den Unterschied.
            </p>
          </Reveal>
        </div>

        {/* 2-Spalten Vergleich */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 md:items-stretch">
          {sides.map((side, i) => (
            <Reveal
              key={side.label}
              delay={0.1 + i * 0.12}
              className={side.highlight ? "md:order-2" : "md:order-1"}
            >
              <div
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 md:p-9",
                  side.highlight
                    ? "border-[rgba(30,94,255,0.22)] bg-white shadow-[0_30px_70px_-30px_rgba(30,94,255,0.35)]"
                    : "border-border bg-white/60 opacity-80 shadow-[0_1px_2px_rgba(20,24,31,0.04)]"
                )}
              >
                {side.highlight && (
                  <span
                    className="absolute top-5 right-5 z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white"
                    style={{ background: "linear-gradient(135deg,#1e5eff,#4f46e5)" }}
                  >
                    <Sparkles className="h-3 w-3" strokeWidth={2.5} />
                    Empfohlen
                  </span>
                )}

                {/* Card Header */}
                <div>
                  <p
                    className={cn(
                      "font-display text-2xl font-bold tracking-tight",
                      side.highlight ? "text-[#1e5eff]" : "text-foreground/50"
                    )}
                  >
                    {side.label}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {side.sublabel}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-5 border-t border-border pt-5">
                  <p
                    className={cn(
                      "font-display text-4xl font-extrabold leading-none",
                      side.highlight ? "text-foreground" : "text-[#d64b45]/70"
                    )}
                  >
                    {side.price}
                  </p>
                  <p className="mt-2 text-sm text-muted">{side.priceNote}</p>
                </div>

                {/* Bullet list */}
                <ul className="mt-6 flex flex-col gap-3.5 border-t border-border pt-5">
                  {side.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      {b.good ? (
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(16,185,129,0.12)] ring-1 ring-[rgba(16,185,129,0.3)]">
                          <Check className="h-3 w-3 text-[#0f9d6b]" strokeWidth={3} />
                        </span>
                      ) : (
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(214,75,69,0.1)] ring-1 ring-[rgba(214,75,69,0.22)]">
                          <X className="h-3 w-3 text-[#d64b45]" strokeWidth={3} />
                        </span>
                      )}
                      <span
                        className={cn(
                          "text-[14px] leading-snug text-pretty",
                          b.good ? "text-foreground/90" : "text-foreground/50"
                        )}
                      >
                        {b.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Trust-Bar */}
        <Reveal delay={0.4}>
          <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-white p-6 md:grid-cols-4 md:p-8">
            {trustStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-2xl font-extrabold text-[#1e5eff] md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Risk Reverser + CTA */}
        <Reveal delay={0.5}>
          <div className="mt-10 flex flex-col items-center text-center">
            <p className="max-w-xl text-sm leading-relaxed text-muted text-pretty">
              <span className="font-medium text-foreground/85">
                Erstgespräch kostenlos und unverbindlich.
              </span>{" "}
              Du entscheidest danach, nicht ich.
            </p>
            <div className="mt-8">
              <ShinyButton href="#kontakt" size="lg" className="px-10 text-base font-semibold">
                {CTA_LABEL}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </ShinyButton>
            </div>

            <p className="mt-5 text-xs text-muted">
              Antwort innerhalb von 24 Stunden · Kein Verkaufsdruck · Persönlich, nicht per Chatbot
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
