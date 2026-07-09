import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { ArrowRight, MapPin } from "@/lib/icons";

/**
 * Sektion (SEO/Regionen) — statt eines Karten-Grids eine stylisierte,
 * animierte Regionalkarte: Heimat-Pin pulsiert, gestrichelte Routen zu den
 * Städten, jeder Pin ist ein Link. Daneben eine saubere Link-Liste für
 * Zugänglichkeit + SEO. Bricht die Karten-Monotonie und passt thematisch.
 */
type RegionCity = {
  city: string;
  region: string;
  href: string;
  x: number;
  y: number;
  home?: boolean;
};

const CITIES: RegionCity[] = [
  { city: "Haßfurt", region: "Landkreis Haßberge", href: "/webdesign-hassfurt", x: 47, y: 47, home: true },
  { city: "Schweinfurt", region: "Unterfranken", href: "/webdesign-schweinfurt", x: 22, y: 39 },
  { city: "Bamberg", region: "Oberfranken", href: "/webdesign-bamberg", x: 75, y: 36 },
  { city: "Würzburg", region: "Unterfranken", href: "/webdesign-wuerzburg", x: 27, y: 73 },
  { city: "Nürnberg", region: "Mittelfranken", href: "/webdesign-nuernberg", x: 77, y: 75 },
];

const home = CITIES.find((c) => c.home)!;

export function RegionsSection() {
  return (
    <section id="regionen" aria-labelledby="regionen-h" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Pill>Regionen</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="regionen-h"
              className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl text-balance"
            >
              Webdesign in{" "}
              <em className="not-italic text-[#1e5eff]">deiner Stadt.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-lg text-base text-muted text-pretty">
              Aus dem Landkreis Haßberge, für ganz Franken. Wähle deine Stadt für mehr Informationen.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
          {/* Regionalkarte */}
          <Reveal y={28}>
            <RegionMap />
          </Reveal>

          {/* Städte-Liste */}
          <Reveal delay={0.1}>
            <ul className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-white">
              {CITIES.map((c) => (
                <li key={c.city}>
                  <Link
                    href={c.href}
                    className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-[#faf9f6]"
                  >
                    <span
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                      style={{
                        background: c.home
                          ? "linear-gradient(135deg,#1e5eff,#4f46e5)"
                          : "rgba(30,94,255,0.08)",
                      }}
                    >
                      <MapPin
                        className={c.home ? "h-5 w-5 text-white" : "h-5 w-5 text-[#1e5eff]"}
                        strokeWidth={2}
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="font-display text-base font-bold tracking-tight text-foreground">
                          Webdesign {c.city}
                        </span>
                        {c.home && (
                          <span className="rounded-full bg-[rgba(30,94,255,0.1)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#1e5eff]">
                            Basis
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                        {c.region}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-[#1e5eff]" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Stylisierte, animierte Regionalkarte mit Routen + Pins. */
function RegionMap() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-white sm:aspect-[16/10]">
      {/* Hintergrund: Punktraster + weicher Schein */}
      <div aria-hidden className="map-dots absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 47% 47%, rgba(30,94,255,0.10) 0%, transparent 60%)",
        }}
      />

      {/* Routen (SVG, skaliert mit Panel) */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {CITIES.filter((c) => !c.home).map((c) => (
          <line
            key={c.city}
            x1={home.x}
            y1={home.y}
            x2={c.x}
            y2={c.y}
            stroke="#1e5eff"
            strokeWidth={1}
            strokeOpacity={0.35}
            strokeDasharray="3 3"
            vectorEffect="non-scaling-stroke"
            className="animate-route-dash"
          />
        ))}
      </svg>

      {/* Pins */}
      {CITIES.map((c) => (
        <Link
          key={c.city}
          href={c.href}
          className="group absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${c.x}%`, top: `${c.y}%` }}
          aria-label={`Webdesign ${c.city}`}
        >
          {c.home ? (
            <span className="relative flex items-center justify-center">
              <span className="absolute h-10 w-10 rounded-full bg-[rgba(30,94,255,0.25)] animate-ping" />
              <span
                className="relative flex h-9 w-9 items-center justify-center rounded-full text-white shadow-[0_10px_24px_-6px_rgba(30,94,255,0.7)] ring-4 ring-white"
                style={{ background: "linear-gradient(135deg,#1e5eff,#4f46e5)" }}
              >
                <MapPin className="h-4 w-4" strokeWidth={2.4} />
              </span>
            </span>
          ) : (
            <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#1e5eff] ring-1 ring-[rgba(30,94,255,0.3)] shadow-[0_6px_16px_-6px_rgba(20,24,31,0.4)] transition-transform duration-300 group-hover:scale-125">
              <span className="h-2 w-2 rounded-full bg-[#1e5eff]" />
            </span>
          )}
          <span
            className="absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-foreground/80 backdrop-blur-sm transition-colors group-hover:text-[#1e5eff]"
          >
            {c.city}
          </span>
        </Link>
      ))}
    </div>
  );
}
