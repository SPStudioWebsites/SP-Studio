import { Reveal } from "@/components/ui/reveal";
import { CTA_LABEL } from "@/lib/content";
import { ArrowRight, Clock } from "@/lib/icons";

/**
 * Sektion 9 — Mittel-CTA (Kern). Farbiges Band als "zweiter Hero": bricht die
 * helle Sektionsfolge auf und fängt Besucher ab, die jetzt bereit sind. Nutzt
 * den kanonischen CTA-Wortlaut (identisch zu Hero und Final-CTA) und eine
 * ehrliche Kapazitäts-Verknappung (Einzelunternehmer).
 */
export function MidCtaSection() {
  return (
    <section aria-labelledby="mid-cta-h" className="relative px-6 py-8 md:py-12">
      <Reveal>
        <div className="cta-band relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-8 py-14 text-center md:px-16 md:py-20">
          {/* Grain / grid texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 10%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 10%, transparent 70%)",
            }}
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white">
              <Clock className="h-3.5 w-3.5" strokeWidth={2.2} />
              Nur wenige Projekte pro Monat frei
            </span>
            <h2
              id="mid-cta-h"
              className="mx-auto mt-6 max-w-2xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl text-balance"
            >
              Deine Konkurrenz ist schon online. Wie lange noch nicht du?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 text-pretty">
              Als Einzelunternehmer nehme ich nur eine Handvoll Projekte im Monat an –
              damit jede Seite die volle Aufmerksamkeit bekommt. Sichere dir jetzt dein
              kostenloses Erstgespräch.
            </p>
            <div className="mt-9 flex justify-center">
              <a
                href="#kontakt"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-9 text-base font-semibold text-[#14181f] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {CTA_LABEL}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
            <p className="mt-5 text-xs text-white/70">
              Kostenlos & unverbindlich · Antwort innerhalb von 24 Stunden
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
