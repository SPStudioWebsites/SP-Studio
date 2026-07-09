import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { services } from "@/lib/content";
import {
  Layout,
  Search,
  Calendar,
  MapPin,
  Server,
  Sparkles,
  Check,
  ArrowRight,
  Star,
  Navigation,
} from "@/lib/icons";
import { cn } from "@/lib/utils";

/**
 * Sektion 5 — Produktvorteile (Kern, "WAS du bekommst"). Getrennt von der
 * Methode (Sektion 4, "WIE"). Die zwei Kern-Leistungen laufen als große
 * Zickzack-Blöcke mit echtem Beleg: Block 1 zeigt ein reales Beispiel-Design
 * (Desktop + Handy, responsive), Block 2 ein illustratives Google-Maps-Ranking.
 * Die restlichen vier Leistungen als kompaktes Karten-Raster.
 */

const ICONS = { Layout, Search, Calendar, MapPin, Server, Sparkles } as const;

// Feature (was es ist, aus content.services) → Benefit (was es dir bringt).
const benefitLine: Record<string, string> = {
  "Webdesign & Entwicklung": "Ein Auftritt, der Vertrauen schafft, bevor du ein Wort gesagt hast.",
  "Local SEO": "Neue Kunden finden dich – bevor sie bei der Konkurrenz landen.",
  "Online-Buchung": "Termine kommen rein, während du arbeitest oder schläfst.",
  "Google Unternehmensprofil": "Oben in Google Maps, wenn jemand in deiner Nähe sucht.",
  "Hosting & Pflege": "Läuft, ist sicher, aktuell – und du musst nie daran denken.",
  "Branding-Light": "Ein Auftritt aus einem Guss, der sofort professionell wirkt.",
};

// Die zwei Zugpferde laufen als große Blöcke mit Bild.
const featured = services.slice(0, 2);
const rest = services.slice(2);

export function BenefitsSection() {
  return (
    <section id="vorteile" aria-labelledby="vorteile-h" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Pill>Was du bekommst</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="vorteile-h"
              className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl text-balance"
            >
              Keine Website von der Stange.{" "}
              <em className="not-italic text-[#1e5eff]">Ein Werkzeug, das arbeitet.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg text-pretty">
              Jede Leistung hat einen Zweck: mehr gefunden werden, mehr überzeugen,
              weniger Aufwand für dich. Alles inklusive, kein verstecktes Extra.
            </p>
          </Reveal>
        </div>

        {/* Zwei große Feature→Benefit-Blöcke (Zickzack) */}
        <div className="mt-16 flex flex-col gap-16 md:gap-24">
          {featured.map((svc, i) => {
            const Icon = ICONS[svc.icon as keyof typeof ICONS];
            const flip = i % 2 === 1;
            return (
              <Reveal key={svc.title}>
                <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                  {/* Text */}
                  <div className={cn(flip && "md:order-2")}>
                    <span className="inline-flex items-center gap-2.5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(30,94,255,0.08)] ring-1 ring-[rgba(30,94,255,0.16)]">
                        <Icon className="h-5 w-5 text-[#1e5eff]" strokeWidth={1.9} />
                      </span>
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                        {svc.title}
                      </span>
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl text-balance">
                      {benefitLine[svc.title]}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted text-pretty">
                      {svc.desc}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5">
                      {svc.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[rgba(16,185,129,0.12)] ring-1 ring-[rgba(16,185,129,0.3)]">
                            <Check className="h-2.5 w-2.5 text-[#0f9d6b]" strokeWidth={3} />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bild */}
                  <div className={cn(flip && "md:order-1")}>
                    {i === 0 ? <ResponsiveShowcase /> : <LocalRankMockup />}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Restliche vier Leistungen als Karten-Raster */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-24">
          {rest.map((svc, i) => {
            const Icon = ICONS[svc.icon as keyof typeof ICONS];
            return (
              <Reveal key={svc.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-[0_1px_2px_rgba(20,24,31,0.04)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(30,94,255,0.08)] ring-1 ring-[rgba(30,94,255,0.16)]">
                    <Icon className="h-5 w-5 text-[#1e5eff]" strokeWidth={1.9} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                      {svc.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-[#1e5eff]/90 text-pretty">
                      {benefitLine[svc.title]}
                    </p>
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted text-pretty">{svc.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex justify-center">
            <a
              href="#leistungen"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1e5eff] hover:underline"
            >
              Was das kostet? Zu den Festpreisen
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Block 1 — echtes Beispiel-Design, Desktop + Handy (dieselbe Seite, responsive). */
function ResponsiveShowcase() {
  return (
    <div className="relative pb-8 pr-4 md:pb-4">
      <BrowserFrame
        src="/Branchen/Hero-Handwerker.png"
        alt="Beispiel-Website von Schnell-Sichtbar.de – Desktop-Ansicht"
        url="dein-handwerk.de"
        sizes="(max-width: 768px) 100vw, 560px"
      />
      {/* überlappendes Handy: dieselbe Seite mobil */}
      <div className="absolute -bottom-1 right-1 w-[24%] max-w-[132px] drop-shadow-[0_20px_40px_rgba(20,24,31,0.28)] md:right-2">
        <div className="relative aspect-[300/620]">
          <Image
            src="/iphone 17 Pro filled.png"
            alt="Dieselbe Website auf dem Smartphone"
            fill
            className="object-contain"
            sizes="140px"
            quality={85}
          />
        </div>
      </div>
    </div>
  );
}

/** Block 2 — illustratives Google-Maps-/Local-Pack-Ranking (Code-Mockup, kein Foto). */
function LocalRankMockup() {
  const results = [
    { name: "Dein Betrieb", rating: "5,0", reviews: 87, top: true },
    { name: "Mitbewerber Nord", rating: "4,3", reviews: 41, top: false },
    { name: "Mitbewerber Süd", rating: "4,1", reviews: 23, top: false },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_30px_70px_-30px_rgba(20,24,31,0.32)]">
      {/* Such-Leiste */}
      <div className="flex items-center gap-2 border-b border-border bg-[#f4f3ef] px-4 py-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
          <Search className="h-3.5 w-3.5 text-[#1e5eff]" />
        </span>
        <div className="flex h-7 flex-1 items-center rounded-full border border-border bg-white px-3 text-[12px] font-medium text-muted">
          betrieb in meiner nähe
        </div>
      </div>

      {/* Karten-Streifen */}
      <div
        className="relative h-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(120% 120% at 30% 10%, #eaf0ff 0%, #f4f6fb 55%, #eef1f6 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30,94,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(30,94,255,0.10) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <span className="absolute left-[18%] top-[58%] h-2 w-2 rounded-full bg-[#1e5eff]/30" />
        <span className="absolute right-[22%] top-[30%] h-2 w-2 rounded-full bg-[#1e5eff]/30" />
        {/* Haupt-Pin */}
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1e5eff] text-white shadow-[0_10px_24px_-6px_rgba(30,94,255,0.7)] ring-4 ring-white">
            <MapPin className="h-4 w-4" strokeWidth={2.4} />
          </span>
        </span>
      </div>

      {/* Ergebnisliste */}
      <div className="space-y-2 p-4">
        {results.map((r, idx) => (
          <div
            key={r.name}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2.5",
              r.top
                ? "border border-[rgba(30,94,255,0.28)] bg-[rgba(30,94,255,0.05)]"
                : "border border-transparent",
            )}
          >
            <span
              className={cn(
                "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold",
                r.top ? "bg-[#1e5eff] text-white" : "bg-[#faf9f6] text-muted ring-1 ring-border",
              )}
            >
              {idx + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p
                className={cn(
                  "truncate text-[13px] font-semibold",
                  r.top ? "text-foreground" : "text-muted",
                )}
              >
                {r.name}
              </p>
              <div className="mt-0.5 flex items-center gap-1.5">
                <span className="text-[11px] font-semibold text-[#f5a623]">{r.rating}</span>
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-2.5 w-2.5 fill-[#f5a623] text-[#f5a623]"
                    />
                  ))}
                </span>
                <span className="text-[10px] text-muted">({r.reviews})</span>
              </div>
            </div>
            {r.top && (
              <span className="flex flex-shrink-0 items-center gap-1 rounded-full bg-[rgba(16,185,129,0.12)] px-2 py-1 text-[10px] font-semibold text-[#0f9d6b] ring-1 ring-[rgba(16,185,129,0.28)]">
                <Navigation className="h-2.5 w-2.5" strokeWidth={2.6} />
                Platz 1
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
