import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { GlassCard } from "@/components/ui/glass-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Check, X, Sparkles, ArrowRight } from "@/lib/icons";

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
      { good: false, text: "Google Auffindbarkeit fehlt oder kostet extra. Ohne Google-Sichtbarkeit keine Kunden." },
      { good: false, text: "Kein fester Ansprechpartner: wechselnder PM, Forum oder Bot." },
      { good: false, text: "Kein Eigentum am Code: Lock-in, Abo oder proprietäres System." },
      { good: false, text: "Generisch ohne Regionalbezug: Vorlagen ohne individuellen Fokus." },
      { good: false, text: "Baukasten: 3.000 Euro in 5 Jahren. Agentur: bis zu 20.000 Euro einmalig." },
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
      { good: true, text: "Ab 399 Euro Festpreis, einmalig. Keine Überraschungen, keine Folgekosten." },
      { good: true, text: "Strategie inklusive: damit deine Seite Anfragen generiert, nicht nur existiert." },
    ],
    highlight: true,
  },
];

const trustStats = [
  { value: "+180 %", label: "mehr Anfragen und Buchungen" },
  { value: "14 Tage", label: "Ø Lieferzeit" },
  { value: "100 %",   label: "Festpreis ohne Überraschungen" },
  { value: "0 €",     label: "Folgekosten meinerseits" },
];

export function WhyMeSection() {
  return (
    <section
      id="warum-mich"
      aria-labelledby="warum-mich-h"
      className="relative overflow-hidden py-16 md:py-24"
    >
      {/* Section-level glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 20%, rgba(255,45,143,0.05) 0%, transparent 70%),
            radial-gradient(ellipse 55% 45% at 50% 85%, rgba(139,92,246,0.05) 0%, transparent 65%)
          `,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Pill>Die Entscheidung</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="warum-mich-h"
              className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl text-balance"
            >
              Was kostet dich{" "}
              <em className="font-display font-extrabold not-italic text-gradient">
                die falsche Wahl wirklich?
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted md:text-lg text-pretty">
              Die meisten Unternehmer in Franken treffen die Entscheidung für ihre Webseite
              einmal und bereuen sie über Jahre. Zu teuer, zu langsam, zu generisch oder
              zu wenig sichtbar. Hier siehst du auf einen Blick den Unterschied.
            </p>
          </Reveal>
        </div>

        {/* 2-Spalten Vergleich */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 md:items-stretch">
          {sides.map((side, i) => (
            <Reveal
              key={side.label}
              delay={0.1 + i * 0.12}
              /* Schnell-Sichtbar (highlight) is index 1 in DOM but should be right on desktop.
                 On mobile it stays at natural order (highlight card = second = bottom).
                 We flip on md via order utilities. */
              className={side.highlight ? "md:order-2" : "md:order-1"}
            >
              <div className={`relative h-full ${side.highlight ? "" : ""}`}>
                {/* Outer glow behind highlighted card */}
                {side.highlight && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-2 rounded-[2rem]"
                    style={{
                      background:
                        "linear-gradient(135deg,rgba(255,45,143,0.3),rgba(139,92,246,0.3))",
                      filter: "blur(22px)",
                      zIndex: 0,
                    }}
                  />
                )}

                <GlassCard
                  variant={side.highlight ? "elevated" : "default"}
                  className={`relative z-10 flex h-full flex-col overflow-hidden p-7 md:p-9 ${
                    side.highlight ? "" : "opacity-75"
                  }`}
                >
                  {/* Empfohlen Badge */}
                  {side.highlight && (
                    <span
                      className="absolute top-5 right-5 z-20 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white"
                      style={{
                        background: "linear-gradient(135deg,#ff2d8f,#8b5cf6)",
                        boxShadow: "0 4px 20px rgba(255,45,143,0.45)",
                      }}
                    >
                      <Sparkles className="h-3 w-3" strokeWidth={2.5} />
                      Empfohlen
                    </span>
                  )}

                  {/* Card Header */}
                  <div>
                    <p
                      className={`font-display text-2xl font-bold tracking-tight ${
                        side.highlight ? "text-gradient" : "text-foreground/60"
                      }`}
                    >
                      {side.label}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                      {side.sublabel}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mt-5 border-t border-white/[0.07] pt-5">
                    <p
                      className={`font-display text-4xl font-extrabold leading-none ${
                        side.highlight ? "text-gradient" : "text-red-400/70"
                      }`}
                    >
                      {side.price}
                    </p>
                    <p className="mt-2 text-sm text-muted">{side.priceNote}</p>
                  </div>

                  {/* Bullet list */}
                  <ul className="mt-6 flex flex-col gap-3.5 border-t border-white/[0.07] pt-5">
                    {side.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        {b.good ? (
                          <span
                            className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                            style={{ background: "linear-gradient(135deg,#ff2d8f,#8b5cf6)" }}
                          >
                            <Check className="h-3 w-3 text-white" strokeWidth={3} />
                          </span>
                        ) : (
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-500/15 ring-1 ring-red-500/30">
                            <X className="h-3 w-3 text-red-400" strokeWidth={3} />
                          </span>
                        )}
                        <span
                          className={`text-[14px] leading-snug text-pretty ${
                            b.good ? "text-foreground/90" : "text-foreground/50"
                          }`}
                        >
                          {b.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Always-on BorderBeam on highlighted card */}
                  {side.highlight && (
                    <div className="pointer-events-none absolute inset-0 rounded-3xl">
                      <BorderBeam
                        size={130}
                        duration={6}
                        colorFrom="#ff2d8f"
                        colorTo="#8b5cf6"
                      />
                    </div>
                  )}
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Trust-Bar */}
        <Reveal delay={0.4}>
          <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 md:grid-cols-4 md:p-8">
            {trustStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-2xl font-extrabold text-gradient md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Risk Reverser + Verknappung + CTA */}
        <Reveal delay={0.5}>
          <div className="mt-10 flex flex-col items-center text-center">
            <p className="max-w-xl text-sm leading-relaxed text-muted text-pretty">
              <span className="text-foreground/85 font-medium">
                Erstgespräch kostenlos und unverbindlich.
              </span>{" "}
              Du entscheidest danach, nicht ich.
            </p>
            <div className="mt-8">
              <ShinyButton
                href="#kontakt"
                size="lg"
                className="shadow-[0_16px_60px_-8px_rgba(255,45,143,0.7)] hover:shadow-[0_22px_70px_-8px_rgba(255,45,143,1)] px-10 text-base font-semibold"
              >
                Jetzt kostenloses Strategiegespräch sichern
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
