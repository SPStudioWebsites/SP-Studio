import { location, brand, about } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { MapPin, Clock, ArrowRight } from "@/lib/icons";

/**
 * Sektion 12 — Standort (Conditional, aktiviert: Regionalität ist ein
 * echtes Vertrauenssignal für lokale Kundschaft in Franken/Haßberge).
 */
export function LocationSection() {
  return (
    <section id="standort" aria-labelledby="standort-h" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-6">
            <Reveal>
              <Pill>{location.eyebrow}</Pill>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="standort-h"
                className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl text-balance"
              >
                {location.title}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg text-pretty">
                {location.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href={location.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center gap-4 rounded-2xl border border-border bg-white p-5 transition-colors hover:border-[rgba(30,94,255,0.3)]"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[rgba(30,94,255,0.08)] ring-1 ring-[rgba(30,94,255,0.16)]">
                  <MapPin className="h-5 w-5 text-[#1e5eff]" strokeWidth={1.9} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    {brand.address.street}, {brand.address.zip} {brand.address.city}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted">Auf Google Maps öffnen</span>
                </span>
                <ArrowRight className="ml-auto h-4 w-4 flex-shrink-0 text-muted" />
              </a>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-white p-5">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[rgba(30,94,255,0.08)] ring-1 ring-[rgba(30,94,255,0.16)]">
                  <Clock className="h-5 w-5 text-[#1e5eff]" strokeWidth={1.9} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">{brand.hours}</span>
                  <span className="mt-0.5 block text-xs text-muted">Persönlich erreichbar, kein Callcenter</span>
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-6">
            <div className="rounded-3xl border border-border bg-white p-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Unterwegs in
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {about.cities.map((c) => (
                  <span
                    key={c.name}
                    className="rounded-full border border-border bg-[#faf9f6] px-3.5 py-1.5 text-sm font-medium text-foreground/80"
                  >
                    {c.name}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted text-pretty">
                Und darüber hinaus in ganz Unter-, Mittel- und Oberfranken. Ein Erstgespräch
                vor Ort ist bei Bedarf genauso möglich wie per Video-Call.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
