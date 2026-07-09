import { Search, TrendingUp, Check } from "@/lib/icons";
import { BrowserFrame } from "@/components/ui/browser-frame";

/**
 * Hero-Anker = echter Projekt-Screenshot (Spec Sektion 1) statt des früheren
 * code-gemalten Fake-Wireframes. Zeigt ein reales Beispiel-Design (mit echten
 * Gesichtern) im Browser-Rahmen, dazu zwei ehrliche Kontext-Chips
 * (Google-Ranking + neue Anfrage), die die Kernversprechen illustrieren.
 */
export function HeroVisual() {
  return (
    <div className="relative w-full max-w-[500px]">
      {/* soft grounding shadow */}
      <div
        aria-hidden
        className="absolute inset-x-8 bottom-2 h-16 rounded-full"
        style={{ background: "rgba(20,24,31,0.10)", filter: "blur(28px)" }}
      />

      <BrowserFrame
        src="/Branchen/Hero - Friseur.png"
        alt="Beispiel-Website, gebaut von Schnell-Sichtbar.de"
        url="dein-betrieb.de"
        priority
        sizes="500px"
        className="relative"
      />

      {/* ── Floating chip: Google rank ─────────────────── */}
      <div
        aria-hidden
        className="animate-drift absolute -right-6 top-14 w-[188px] rounded-2xl border border-border bg-white p-3.5"
        style={{ boxShadow: "0 24px 52px -18px rgba(20,24,31,0.28)" }}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(30,94,255,0.1)]">
            <Search className="h-3.5 w-3.5 text-[#1e5eff]" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
            Google-Suche
          </span>
        </div>
        <div className="mt-2.5 rounded-lg border border-[rgba(30,94,255,0.18)] bg-[rgba(30,94,255,0.04)] px-2.5 py-2">
          <p className="text-[11px] font-semibold text-foreground">Dein Betrieb</p>
          <div className="mt-1 flex items-center gap-1.5">
            <TrendingUp className="h-3 w-3 text-[#0f9d6b]" strokeWidth={2.5} />
            <span className="text-[10px] font-semibold text-[#0f9d6b]">Platz 1 in der Region</span>
          </div>
        </div>
      </div>

      {/* ── Floating chip: new inquiry ─────────────────── */}
      <div
        aria-hidden
        className="animate-drift-slow absolute -left-7 bottom-16 w-[196px] rounded-2xl border border-border bg-white p-3.5"
        style={{ boxShadow: "0 24px 52px -18px rgba(20,24,31,0.28)" }}
      >
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(16,185,129,0.12)] ring-1 ring-[rgba(16,185,129,0.28)]">
            <Check className="h-3.5 w-3.5 text-[#0f9d6b]" strokeWidth={3} />
          </span>
          <div>
            <p className="text-[11px] font-semibold leading-snug text-foreground">
              Neue Anfrage über deine Website
            </p>
            <p className="mt-0.5 text-[10px] text-muted">gerade eben · über das Kontaktformular</p>
          </div>
        </div>
      </div>
    </div>
  );
}
