import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { ArrowRight } from "@/lib/icons";

const CITIES = [
  {
    city: "Haßfurt",
    region: "Landkreis Haßberge",
    href: "/webdesign-hassfurt",
    desc: "Webseiten für Handwerker und Betriebe im Haßberge-Kreis.",
    grad: "from-pink to-fuchsia-500",
  },
  {
    city: "Schweinfurt",
    region: "Unterfranken",
    href: "/webdesign-schweinfurt",
    desc: "Webseiten für den Industriestandort Schweinfurt und Umgebung.",
    grad: "from-fuchsia-500 to-violet",
  },
  {
    city: "Bamberg",
    region: "Oberfranken",
    href: "/webdesign-bamberg",
    desc: "Webseiten für Gastronomie, Handwerk und Tourismus in Bamberg.",
    grad: "from-violet to-fuchsia-500",
  },
  {
    city: "Würzburg",
    region: "Unterfranken",
    href: "/webdesign-wuerzburg",
    desc: "Webseiten für Betriebe in der größten Stadt Unterfrankens.",
    grad: "from-fuchsia-500 to-pink",
  },
] as const;

export function RegionsSection() {
  return (
    <section
      aria-labelledby="regionen-h"
      className="relative overflow-hidden py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Pill>Regionen</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="regionen-h"
              className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl text-balance"
            >
              Webdesign in{" "}
              <em className="font-display font-extrabold not-italic text-gradient">
                deiner Stadt.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-lg text-base text-muted text-pretty">
              Ich erstelle professionelle Webseiten für lokale Betriebe in Franken und
              Unterfranken. Wähle deine Stadt für mehr Informationen.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CITIES.map((c, i) => (
            <Reveal key={c.city} delay={0.05 + i * 0.08}>
              <Link
                href={c.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), 0 4px 24px rgba(0,0,0,0.25)",
                }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(ellipse at 50% 0%, rgba(255,45,143,0.08) 0%, transparent 65%)",
                  }}
                />
                <div
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${c.grad}`}
                  style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.3)" }}
                >
                  <span className="font-display text-sm font-bold text-white">
                    {c.city[0]}
                  </span>
                </div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted/60">
                  {c.region}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-semibold tracking-tight text-foreground">
                  Webdesign {c.city}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted text-pretty">
                  {c.desc}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-pink">
                  Mehr erfahren
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
