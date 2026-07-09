import { method } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Search, Layout, LifeBuoy } from "@/lib/icons";

/**
 * Sektion 4 — Methode (branded, WIE es funktioniert). GROSS-Anker: als dunkle,
 * immersive Sektion gebaut, um Rhythmus in die sonst helle Seite zu bringen und
 * die "Sichtbar-Formel" als Kern-Versprechen visuell hervorzuheben.
 * Getrennt von Sektion 7 (Ablauf): hier Prinzip, dort Projektschritte.
 */
const ICONS = { Search, Layout, LifeBuoy } as const;

export function MethodSection() {
  return (
    <section
      id="methode"
      aria-labelledby="methode-h"
      className="section-dark dark-grid relative overflow-hidden py-24 md:py-36"
    >
      {/* Ambient orbs */}
      <div className="dark-orb left-[-8%] top-[-10%] h-[420px] w-[420px] bg-[rgba(30,94,255,0.28)]" aria-hidden />
      <div className="dark-orb bottom-[-15%] right-[-6%] h-[460px] w-[460px] bg-[rgba(79,70,229,0.26)]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5b8bff] shadow-[0_0_8px_rgba(91,139,255,0.8)] animate-pulse-soft" />
              {method.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="methode-h"
              className="mt-6 font-display text-4xl font-bold leading-[1.03] tracking-tight text-white md:text-6xl text-balance"
            >
              Die{" "}
              <em className="not-italic bg-gradient-to-r from-[#5b8bff] to-[#a78bfa] bg-clip-text text-transparent">
                Sichtbar-Formel
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg text-pretty">
              {method.intro}
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
          {method.steps.map((step, i) => {
            const Icon = ICONS[step.icon as keyof typeof ICONS];
            const accent = i === 1;
            return (
              <Reveal key={step.n} delay={0.1 + i * 0.12}>
                <div
                  className={`group relative flex h-full flex-col gap-5 rounded-3xl p-8 ${
                    accent ? "dark-card-accent" : "dark-card"
                  }`}
                >
                  <span
                    className="pointer-events-none absolute right-6 top-4 font-display text-6xl font-extrabold leading-none text-white/5 md:text-7xl"
                    aria-hidden
                  >
                    {step.n}
                  </span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/8 ring-1 ring-white/12">
                    <Icon className="h-6 w-6 text-[#7ea6ff]" strokeWidth={1.9} />
                  </span>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-white/60 text-pretty">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-12 max-w-xl text-center text-sm text-white/45 text-pretty">
            Gefunden. Überzeugt. Betreut. — drei Bausteine, ein Ergebnis:
            eine Seite, die Kunden bringt, statt nur online zu sein.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
