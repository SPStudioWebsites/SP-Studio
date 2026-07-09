import { industries } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { BrowserFrame } from "@/components/ui/browser-frame";
import {
  Hammer,
  Scissors,
  UtensilsCrossed,
  PartyPopper,
  Stethoscope,
  Dumbbell,
} from "@/lib/icons";

/**
 * Sektion 3 — Zielgruppen-Nennung/-Qualifikation ("das bin ich"), Layout B als
 * Foto-Kachel-Galerie: echte Beispiel-Designs (großer visueller Beweis) statt
 * eines reinen Icon-Text-Grids. Darunter eine Branchen-Coverage-Zeile, damit
 * die Selbst-Identifikation für alle Branchen explizit bleibt.
 */
const ICONS = {
  Hammer,
  Scissors,
  UtensilsCrossed,
  PartyPopper,
  Stethoscope,
  Dumbbell,
} as const;

// Illustrative Demo-Adressen je Beispiel-Design (keine echten Kundenseiten).
const DEMO_URL: Record<string, string> = {
  Handwerk: "dein-handwerk.de",
  "Frisöre & Salons": "dein-salon.de",
  "Restaurants & Cafés": "dein-cafe.de",
  "Eventlocations & Feiern": "deine-location.de",
};

const showcase = industries.filter((i) => i.screenshot);

export function IndustriesSection() {
  return (
    <section id="branchen" aria-labelledby="branchen-h" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Pill>Für wen das genau richtig ist</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="branchen-h"
              className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl text-balance"
            >
              Gebaut für Betriebe,{" "}
              <em className="not-italic text-[#1e5eff]">die vor Ort arbeiten.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg text-pretty">
              Jede Branche tickt anders – aber das Prinzip bleibt: Kundschaft sucht lokal,
              vergleicht in Sekunden und entscheidet sich für den, der zuerst überzeugt.
              So sehen meine Seiten aus.
            </p>
          </Reveal>
        </div>

        {/* Foto-Kachel-Galerie: echte Beispiel-Designs */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {showcase.map((ind, i) => {
            const Icon = ICONS[ind.icon as keyof typeof ICONS];
            return (
              <Reveal key={ind.name} delay={0.08 * i}>
                <div className="group">
                  <BrowserFrame
                    src={ind.screenshot}
                    alt={`Beispiel-Webdesign für die Branche ${ind.name}`}
                    url={DEMO_URL[ind.name]}
                    aspect="aspect-[16/10]"
                    imageClassName="transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 560px"
                  />
                  <div className="mt-4 flex items-start gap-3 px-1">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[rgba(30,94,255,0.08)] ring-1 ring-[rgba(30,94,255,0.16)]">
                      <Icon className="h-5 w-5 text-[#1e5eff]" strokeWidth={1.9} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                        {ind.name}
                      </h3>
                      <p className="mt-1 text-[14px] leading-relaxed text-muted text-pretty">
                        {ind.line}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Branchen-Coverage: Selbst-Identifikation für alle Branchen */}
        <Reveal delay={0.15}>
          <div className="mt-16 rounded-3xl border border-border bg-white p-7 md:p-9 shadow-[0_1px_2px_rgba(20,24,31,0.04)]">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="md:max-w-xs">
                <p className="font-display text-xl font-bold tracking-tight text-foreground">
                  Deine Branche ist nicht dabei?
                </p>
                <p className="mt-1.5 text-sm text-muted text-pretty">
                  Das Prinzip funktioniert für jeden lokalen Betrieb. Ich baue unter anderem für:
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5 md:max-w-md md:justify-end">
                {industries.map((ind) => {
                  const Icon = ICONS[ind.icon as keyof typeof ICONS];
                  return (
                    <span
                      key={ind.name}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-[#faf9f6] px-3.5 py-2 text-sm font-medium text-foreground/80"
                    >
                      <Icon className="h-4 w-4 text-[#1e5eff]" strokeWidth={1.9} />
                      {ind.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
