"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  Hammer,
  Scissors,
  UtensilsCrossed,
  ChevronsLeftRight,
  AlertTriangle,
  X,
  Check,
} from "@/lib/icons";
import { cn } from "@/lib/utils";

/**
 * Interaktiver Vorher/Nachher-Vergleich für Sektion 6. Links eine bewusst
 * veraltete Fake-Alt-Seite (Code-gezeichnet), rechts ein echtes Beispiel-Design.
 * Ziehbar per Maus/Touch/Tastatur. Branchen-Tabs schalten das Beispiel um.
 * Illustrativ ("So sieht der Unterschied aus") – keine echten Kundenprojekte.
 */
const CASES = [
  {
    key: "Handwerk",
    icon: Hammer,
    shot: "/Branchen/Hero-Handwerker.png",
    vorher: "Keine Website. Anfragen kamen nur über Mundpropaganda und Zufallsfunde bei Google.",
    nachher: "Eine Seite mit Referenzen und schnellem Angebots-Kontakt, die auch ohne Empfehlung Anfragen sammelt.",
  },
  {
    key: "Friseur",
    icon: Scissors,
    shot: "/Branchen/Hero - Friseur.png",
    vorher: "Alte Website ohne Online-Buchung. Jeder Termin lief über Anrufe mitten im Betrieb.",
    nachher: "Online-Buchung rund um die Uhr – Termine kommen rein, ohne dass jemand ans Telefon muss.",
  },
  {
    key: "Café",
    icon: UtensilsCrossed,
    shot: "/Branchen/Hero-Cafe.png",
    vorher: "Auf dem Handy kaum lesbar, Speisekarte nur als PDF verlinkt.",
    nachher: "Mobil-optimierte Seite mit klarer Speisekarte und Tisch-Anfrage direkt vom Handy.",
  },
] as const;

export function BeforeAfter() {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(52);
  const dragging = useRef(false);
  const wrap = useRef<HTMLDivElement>(null);
  const current = CASES[active];

  function moveTo(clientX: number) {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(4, Math.min(96, p)));
  }

  return (
    <div>
      {/* Branchen-Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {CASES.map((c, i) => {
          const Icon = c.icon;
          const on = i === active;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={on}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                on
                  ? "border-transparent text-white shadow-[0_10px_26px_-10px_rgba(30,94,255,0.7)]"
                  : "border-border bg-white text-foreground/70 hover:border-[rgba(30,94,255,0.3)] hover:text-foreground",
              )}
              style={on ? { background: "linear-gradient(135deg,#1e5eff,#4f46e5)" } : undefined}
            >
              <Icon className="h-4 w-4" strokeWidth={2} />
              {c.key}
            </button>
          );
        })}
      </div>

      {/* Vergleich */}
      <div
        ref={wrap}
        className="relative mt-6 aspect-[16/11] w-full touch-none select-none overflow-hidden rounded-2xl border border-border bg-white shadow-[0_30px_70px_-30px_rgba(20,24,31,0.32)] sm:aspect-[16/10]"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          moveTo(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && moveTo(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        {/* Nachher (Basis) — echtes Beispiel-Design */}
        <Image
          key={current.shot}
          src={current.shot}
          alt={`Neues Beispiel-Design für ${current.key}`}
          fill
          quality={82}
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover object-top"
        />
        <span className="pointer-events-none absolute right-3 top-3 z-20 rounded-full bg-[#0f9d6b] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
          Nachher
        </span>

        {/* Vorher (Overlay, links vom Regler) — veraltete Fake-Seite */}
        <div
          className="absolute inset-0 z-10"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <OldSite branch={current.key} />
          <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-[#d64b45] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
            Vorher
          </span>
        </div>

        {/* Trenn-Regler */}
        <div
          className="absolute inset-y-0 z-30 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(20,24,31,0.12)]"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1e5eff] shadow-[0_6px_18px_-4px_rgba(20,24,31,0.4)] ring-1 ring-border">
            <ChevronsLeftRight className="h-4 w-4" strokeWidth={2.4} />
          </span>
        </div>

        {/* Tastatur-Zugänglichkeit */}
        <label className="sr-only" htmlFor="ba-range">
          Vorher-Nachher-Vergleich
        </label>
        <input
          id="ba-range"
          type="range"
          min={4}
          max={96}
          value={Math.round(pos)}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-x-0 bottom-0 z-40 h-8 w-full cursor-ew-resize opacity-0"
          aria-label="Vergleich Vorher gegen Nachher verschieben"
        />
      </div>

      {/* Copy zum aktiven Fall */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5">
          <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(214,75,69,0.1)] ring-1 ring-[rgba(214,75,69,0.22)]">
            <X className="h-3.5 w-3.5 text-[#d64b45]" strokeWidth={3} />
          </span>
          <div>
            <p className="font-semibold text-[#d64b45]">Vorher</p>
            <p className="mt-1 text-sm leading-relaxed text-muted text-pretty">{current.vorher}</p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-2xl border border-[rgba(16,185,129,0.25)] bg-[rgba(16,185,129,0.04)] p-5">
          <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(16,185,129,0.12)] ring-1 ring-[rgba(16,185,129,0.3)]">
            <Check className="h-3.5 w-3.5 text-[#0f9d6b]" strokeWidth={3} />
          </span>
          <div>
            <p className="font-semibold text-[#0f9d6b]">Nachher</p>
            <p className="mt-1 text-sm leading-relaxed text-foreground/80 text-pretty">{current.nachher}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Bewusst veraltete „Alt-Seite" – code-gezeichnet, dated Look. */
function OldSite({ branch }: { branch: string }) {
  return (
    <div className="h-full w-full overflow-hidden bg-[#e7e4dc] font-serif">
      {/* Clashing Header */}
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{ background: "linear-gradient(#5a6b3b,#3f4a29)" }}
      >
        <span className="text-[13px] font-bold italic text-[#e8e4c9]">Firma Müller &amp; Sohn</span>
        <span className="hidden gap-2 text-[9px] text-[#cfcaa8] sm:flex">
          <span>Startseite</span>
          <span>Über&nbsp;uns</span>
          <span>Kontakt</span>
        </span>
      </div>
      {/* Baustellen-Banner */}
      <div className="flex items-center justify-center gap-1.5 bg-[#e8d44a] py-1 text-[10px] font-bold uppercase tracking-wide text-[#5a4a00]">
        <AlertTriangle className="h-3 w-3" strokeWidth={2.4} />
        Diese Seite ist noch im Aufbau
      </div>

      <div className="grid grid-cols-[1.3fr_1fr] gap-3 p-4">
        <div>
          <p className="text-[13px] font-bold text-[#3a3a3a] underline">
            Herzlich Willkommen!
          </p>
          <div className="mt-2 space-y-1">
            <span className="block h-1.5 w-full rounded-none bg-[#b7b2a6]" />
            <span className="block h-1.5 w-11/12 rounded-none bg-[#b7b2a6]" />
            <span className="block h-1.5 w-4/5 rounded-none bg-[#b7b2a6]" />
            <span className="block h-1.5 w-full rounded-none bg-[#c7c2b6]" />
            <span className="block h-1.5 w-3/4 rounded-none bg-[#c7c2b6]" />
          </div>
          <p className="mt-3 text-[9px] italic text-[#6b6b6b]">
            Branche: {branch}. Tel. 0 99 99 / 12 34
          </p>
        </div>
        {/* Kaputtes Bild */}
        <div className="relative flex items-center justify-center border-2 border-dashed border-[#9a958a] bg-[#d5d1c7]">
          <div className="flex flex-col items-center gap-1 text-[#8a8579]">
            <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-[#c0392b] text-white">
              <X className="h-3.5 w-3.5" strokeWidth={3} />
            </div>
            <span className="text-[8px]">Bild nicht gefunden</span>
          </div>
        </div>
      </div>

      {/* Alt-Footer */}
      <div className="mt-1 flex items-center justify-between border-t border-[#c7c2b6] px-4 py-1.5 text-[8px] text-[#6b6b6b]">
        <span>Besucher: 000042</span>
        <span className="hidden sm:inline">Optimiert für Internet&nbsp;Explorer&nbsp;6</span>
        <span className="rounded-sm bg-[#7d7d7d] px-1 text-white">© 2011</span>
      </div>
    </div>
  );
}
