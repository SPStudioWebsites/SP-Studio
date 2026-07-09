import { process, CTA_LABEL } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { ShinyButton } from "@/components/ui/shiny-button";
import {
  Check,
  ArrowRight,
  Phone,
  Layout,
  Server,
  TrendingUp,
} from "@/lib/icons";

/**
 * Sektion 7 — Ablauf der Zusammenarbeit (Kern). Komplett neu als animierte
 * Timeline: eine Spine mit wanderndem Lichtstrahl, Tag-Marker (untermauert das
 * 14-Tage-Versprechen) und pro Schritt eine code-gezeichnete Mini-Szene statt
 * gleichförmiger Karten.
 */

const DAYS = ["Tag 1", "Tag 2–6", "Tag 7–13", "Tag 14"];
const SCENES = [ChatScene, DesignScene, BuildScene, LaunchScene];

export function ProcessSection() {
  return (
    <section id="ablauf" aria-labelledby="ablauf-h" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Pill>Ablauf</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="ablauf-h"
              className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl text-balance"
            >
              Fertig in 14 Tagen.{" "}
              <em className="not-italic text-[#1e5eff]">Dann klingelt dein Telefon.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg text-pretty">
              Kein Stress, kein Technik-Kram. Du lieferst die Infos, ich liefere die Webseite.
            </p>
          </Reveal>
        </div>

        {/* Animierte Timeline */}
        <div className="relative mt-16 md:mt-20">
          {/* Spine + wandernder Lichtstrahl */}
          <div
            aria-hidden
            className="absolute left-[26px] top-3 bottom-24 w-px bg-gradient-to-b from-border via-border to-transparent md:left-[34px]"
          >
            <div className="spine-beam animate-beam-fall absolute inset-0" />
          </div>

          <div className="space-y-10 md:space-y-14">
            {process.map((step, i) => {
              const Scene = SCENES[i];
              return (
                <Reveal key={step.n} y={28} delay={i === 0 ? 0 : 0.1}>
                  <div className="relative pl-16 md:pl-24">
                    {/* Node */}
                    <div className="absolute left-0 top-0 flex flex-col items-center">
                      <span className="relative flex h-[54px] w-[54px] items-center justify-center md:h-[70px] md:w-[70px]">
                        <span className="absolute inset-0 rounded-full bg-[rgba(30,94,255,0.14)] animate-pulse-soft" />
                        <span
                          className="relative flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-bold text-white shadow-[0_10px_26px_-8px_rgba(30,94,255,0.7)] md:h-14 md:w-14 md:text-base"
                          style={{ background: "linear-gradient(135deg,#1e5eff,#4f46e5)" }}
                        >
                          {step.n}
                        </span>
                      </span>
                      <span className="mt-3 rounded-full border border-border bg-white px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1e5eff]">
                        {DAYS[i]}
                      </span>
                    </div>

                    {/* Content: Text + Mini-Szene */}
                    <div className="grid items-center gap-6 rounded-3xl border border-border bg-white p-6 shadow-[0_1px_2px_rgba(20,24,31,0.04),0_30px_60px_-42px_rgba(20,24,31,0.28)] md:grid-cols-[1.1fr_0.9fr] md:p-8">
                      <div>
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                          Schritt {step.n}
                        </p>
                        <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                          {step.title}
                        </h3>
                        <p className="mt-2.5 text-sm leading-relaxed text-muted text-pretty">
                          {step.desc}
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {step.points.map((p) => (
                            <li
                              key={p}
                              className="flex items-center gap-1.5 rounded-full border border-border bg-[#faf9f6] px-3 py-1 text-[11px] font-medium text-foreground/75"
                            >
                              <Check className="h-2.5 w-2.5 flex-shrink-0 text-[#1e5eff]" aria-hidden />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="animate-float-y md:justify-self-end">
                        <Scene />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Abschluss: Reassurance + CTA */}
          <Reveal delay={0.15}>
            <div className="relative mt-14 overflow-hidden rounded-3xl border border-border bg-white p-8 text-center md:mt-16">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Das Beste daran
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Du musst <em className="not-italic text-[#1e5eff]">nichts wissen.</em>
              </h3>
              <p className="mx-auto mt-2 max-w-md text-base text-muted text-pretty">
                Nur 30 Minuten deiner Zeit nötig. Ich erledige den Rest.
              </p>
              <div className="mt-8 flex justify-center">
                <ShinyButton href="#kontakt" size="lg" className="px-9 text-base font-semibold">
                  {CTA_LABEL}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </ShinyButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Mini-Szenen (code-gezeichnet, on-brand) ─────────────────────── */

function SceneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-32 w-full overflow-hidden rounded-2xl border border-border bg-[#faf9f6] p-4 md:w-64">
      {children}
    </div>
  );
}

/** Schritt 1 — Erstgespräch: Chat + „30 Min"-Chip. */
function ChatScene() {
  return (
    <SceneFrame>
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(30,94,255,0.1)]">
          <Phone className="h-3 w-3 text-[#1e5eff]" />
        </span>
        <span className="h-1.5 w-16 rounded bg-foreground/15" />
      </div>
      <div className="mt-3 space-y-2">
        <span className="ml-auto block h-5 w-28 rounded-2xl rounded-br-sm bg-[#1e5eff]" />
        <span className="block h-5 w-24 rounded-2xl rounded-bl-sm border border-border bg-white" />
      </div>
      <span className="absolute bottom-3 right-3 rounded-full bg-[rgba(16,185,129,0.12)] px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-[#0f9d6b] ring-1 ring-[rgba(16,185,129,0.28)]">
        30 Min · gratis
      </span>
    </SceneFrame>
  );
}

/** Schritt 2 — Konzept & Design: Wireframe + Farbfelder. */
function DesignScene() {
  return (
    <SceneFrame>
      <div className="flex items-center gap-2">
        <Layout className="h-3.5 w-3.5 text-[#1e5eff]" />
        <span className="h-1.5 w-14 rounded bg-foreground/15" />
      </div>
      <div className="mt-3 grid grid-cols-[1.4fr_1fr] gap-2">
        <div className="space-y-1.5">
          <span className="block h-2 w-full rounded bg-[#1e5eff]/25" />
          <span className="block h-1.5 w-4/5 rounded bg-foreground/15" />
          <span className="block h-1.5 w-3/5 rounded bg-foreground/12" />
          <span className="mt-1 block h-4 w-12 rounded bg-[#1e5eff]" />
        </div>
        <div className="rounded-lg bg-white ring-1 ring-border" />
      </div>
      <div className="mt-2.5 flex items-center gap-1.5">
        {["#1e5eff", "#4f46e5", "#10b981", "#14181f"].map((c) => (
          <span key={c} className="h-3 w-3 rounded-full ring-1 ring-black/5" style={{ background: c }} />
        ))}
      </div>
    </SceneFrame>
  );
}

/** Schritt 3 — Entwicklung: Code-Fenster + Performance-Score. */
function BuildScene() {
  return (
    <SceneFrame>
      <div className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#e5554e]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#f5b544]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#4bbf73]" />
      </div>
      <div className="mt-3 space-y-1.5 font-mono">
        <div className="flex gap-1.5">
          <span className="h-1.5 w-6 rounded bg-[#4f46e5]/50" />
          <span className="h-1.5 w-16 rounded bg-foreground/15" />
        </div>
        <div className="flex gap-1.5 pl-3">
          <span className="h-1.5 w-10 rounded bg-[#1e5eff]/50" />
          <span className="h-1.5 w-12 rounded bg-foreground/12" />
        </div>
        <div className="flex gap-1.5 pl-3">
          <span className="h-1.5 w-8 rounded bg-[#10b981]/60" />
          <span className="h-1.5 w-20 rounded bg-foreground/12" />
        </div>
      </div>
      <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-[rgba(16,185,129,0.12)] px-2 py-1 text-[9px] font-bold text-[#0f9d6b] ring-1 ring-[rgba(16,185,129,0.28)]">
        <TrendingUp className="h-2.5 w-2.5" strokeWidth={2.6} /> 100/100
      </span>
    </SceneFrame>
  );
}

/** Schritt 4 — Launch: Browser mit LIVE-Badge + steigender Pfeil. */
function LaunchScene() {
  return (
    <SceneFrame>
      <div className="flex items-center gap-1.5">
        <Server className="h-3.5 w-3.5 text-[#1e5eff]" />
        <span className="h-1.5 w-14 rounded bg-foreground/15" />
        <span className="ml-auto flex items-center gap-1 rounded-full bg-[#0f9d6b] px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-white">
          <span className="h-1 w-1 rounded-full bg-white animate-pulse-soft" /> Live
        </span>
      </div>
      <div className="mt-3 flex items-end gap-1.5">
        {[40, 55, 45, 70, 85].map((h, idx) => (
          <span
            key={idx}
            className="w-3 rounded-t bg-[#1e5eff]"
            style={{ height: `${h * 0.5}px`, opacity: 0.35 + idx * 0.14 }}
          />
        ))}
        <TrendingUp className="mb-1 ml-1 h-5 w-5 text-[#0f9d6b]" strokeWidth={2.4} />
      </div>
      <span className="absolute bottom-3 right-3 text-[9px] font-semibold text-muted">
        Anfragen ↗
      </span>
    </SceneFrame>
  );
}
