import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { GlassCard } from "@/components/ui/glass-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { Search, Sparkles, Clock } from "@/lib/icons";

const cards = [
  {
    n: "01",
    icon: Search,
    stat: "90 %",
    statLabel: "der Kaufentscheidungen starten bei Google",
    title: "Sichtbarkeit zuerst",
    body: `Eine Webseite, die niemand findet, ist Deko – egal wie schön sie ist. Local SEO, ein sauberes Google-Unternehmensprofil und technische Grundlagen wie Mobile-First und Ladezeit entscheiden, ob du bei Suchanfragen wie „Friseur in der Nähe" oder „Sanitär Notdienst" überhaupt auftauchst. Ohne Sichtbarkeit gibt es keine Anfragen.`,
    grad: "linear-gradient(135deg,#ff2d8f,#c026d3)",
    beamFrom: "#ff2d8f",
    beamTo: "#c026d3",
  },
  {
    n: "02",
    icon: Sparkles,
    stat: "10×",
    statLabel: "mehr Anfragen mit klarer Struktur",
    title: "Funktion vor Form",
    body: "Eine hübsche Seite ohne klare Handlungspfade, Vertrauenssignale und einfache Kontaktwege ist eine teure Visitenkarte. Funktion heißt: Jeder Besucher weiß in zwei Sekunden, was du anbietest und wie er den nächsten Schritt macht. Das entscheidet, ob aus 1.000 Besuchern 5 Anfragen werden – oder 50.",
    grad: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
    beamFrom: "#8b5cf6",
    beamTo: "#c026d3",
  },
  {
    n: "03",
    icon: Clock,
    stat: "24/7",
    statLabel: "arbeitet, während du arbeitest",
    title: "Arbeitet ohne Pause",
    body: "Während du auf der Baustelle, in der Küche oder im Behandlungszimmer bist, antwortet deine Webseite auf Fragen, nimmt Termine entgegen und sammelt Anfragen. Sie kostet einmalig und macht deine Auftragslage planbar – im Gegensatz zu Werbung, die du jeden Monat neu zünden musst.",
    grad: "linear-gradient(135deg,#ff2d8f,#8b5cf6)",
    beamFrom: "#ff2d8f",
    beamTo: "#8b5cf6",
  },
] as const;

export function WhyWebsiteSection() {
  return (
    <section
      id="warum-webseite"
      aria-labelledby="warum-webseite-h"
      className="relative overflow-hidden py-16 md:py-24"
    >
      {/* Subtle section-level glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 25%, rgba(255,45,143,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 50% 45% at 50% 85%, rgba(139,92,246,0.05) 0%, transparent 65%)
          `,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Pill>Warum eine Webseite?</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="warum-webseite-h"
              className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl text-balance"
            >
              Eine schöne Seite reicht nicht.{" "}
              <em className="font-display font-extrabold not-italic text-gradient">
                Sie muss verkaufen.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg text-pretty">
              Eine Webseite, die wirklich für dich arbeitet, hat drei Bausteine:
              Sie wird gefunden, sie führt Besucher zur Anfrage – und sie tut beides
              rund um die Uhr.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.n} delay={0.1 + i * 0.1}>
                <GlassCard
                  hover
                  className="group relative flex h-full flex-col gap-5 overflow-hidden p-7 md:p-8"
                >
                  {/* Step number deco */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute top-4 right-5 select-none font-display text-7xl font-extrabold leading-none text-gradient opacity-[0.13] md:text-8xl"
                  >
                    {c.n}
                  </span>

                  {/* Icon */}
                  <span
                    className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl"
                    style={{
                      background: c.grad,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
                    }}
                  >
                    <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                  </span>

                  {/* Stat anchor */}
                  <div className="relative z-10 mt-1">
                    <p className="font-display text-3xl font-extrabold leading-none text-gradient md:text-4xl">
                      {c.stat}
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/55">
                      {c.statLabel}
                    </p>
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 mt-1 font-display text-xl font-semibold tracking-tight text-foreground">
                    {c.title}
                  </h3>

                  {/* Body */}
                  <p className="relative z-10 text-sm leading-relaxed text-muted text-pretty">
                    {c.body}
                  </p>

                  {/* Animated border on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <BorderBeam
                      size={90}
                      duration={6}
                      colorFrom={c.beamFrom}
                      colorTo={c.beamTo}
                    />
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
