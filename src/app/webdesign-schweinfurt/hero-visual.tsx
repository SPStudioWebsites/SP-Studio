"use client";

import { motion, useReducedMotion } from "motion/react";

const results = [
  {
    rank: 1,
    site: "schnell-sichtbar.de",
    title: "Webdesign Schweinfurt | Schnell-Sichtbar.de",
    url: "schnell-sichtbar.de › webdesign-schweinfurt",
    desc: "Professionelle Webseiten für Betriebe in Schweinfurt & Umgebung. Festpreis ab 399 €. Fertig in 14 Tagen. Jetzt kostenlos beraten lassen.",
    highlight: true,
  },
  {
    rank: 2,
    site: "web-agentur-sw.de",
    title: "Webdesign Agentur Schweinfurt – Ihr digitaler Partner",
    url: "web-agentur-sw.de › leistungen",
    desc: "Wir gestalten professionelle Webseiten und Online-Shops für Unternehmen aus Schweinfurt und der Region.",
    highlight: false,
  },
  {
    rank: 3,
    site: "design-studio-online.de",
    title: "Website erstellen lassen – günstig & schnell",
    url: "design-studio-online.de › angebot",
    desc: "Webdesign-Lösungen für kleine und mittlere Unternehmen. Jetzt Angebot anfordern.",
    highlight: false,
  },
] as const;

export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative flex h-full items-center justify-center pl-8 xl:pl-12">
      {/* Glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-4 bottom-8 h-52 w-52 rounded-full bg-violet/15 blur-3xl"
      />

      {/* SERP card */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 28 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="relative z-10 w-full max-w-[400px]"
      >
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.08), 0 30px 80px -20px rgba(0,0,0,0.7)",
          }}
        >
          {/* Inner glow top */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-20"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)",
            }}
          />

          {/* Search bar */}
          <div className="px-4 pt-5 pb-3">
            <div
              className="flex items-center gap-2.5 rounded-full px-3.5 py-2.5"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <svg
                className="h-3.5 w-3.5 shrink-0 text-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <span className="font-mono text-xs text-foreground/80 tracking-tight">
                Webdesign Schweinfurt
              </span>
              <span className="ml-auto h-3.5 w-px bg-pink animate-pulse" />
            </div>
          </div>

          {/* Divider */}
          <div className="mx-4 h-px bg-white/[0.06]" />

          {/* Results */}
          <div className="divide-y divide-white/[0.04] px-4 pb-4 pt-1">
            {results.map((r) => (
              <div
                key={r.rank}
                className="relative py-3.5 transition-colors duration-200"
                style={{ opacity: r.highlight ? 1 : 0.38 }}
              >
                {r.highlight && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-xl"
                    style={{
                      background: "rgba(255,45,143,0.04)",
                      border: "1px solid rgba(255,45,143,0.12)",
                    }}
                  />
                )}

                <div className="relative flex items-start gap-2.5">
                  {/* Rank + favicon */}
                  <div className="flex flex-col items-center gap-1.5 pt-0.5">
                    <span
                      className="font-mono text-[9px] font-bold leading-none"
                      style={{
                        color: r.highlight
                          ? "transparent"
                          : "rgba(255,255,255,0.3)",
                        backgroundImage: r.highlight
                          ? "linear-gradient(135deg,#ff2d8f,#8b5cf6)"
                          : "none",
                        WebkitBackgroundClip: r.highlight ? "text" : "unset",
                        backgroundClip: r.highlight ? "text" : "unset",
                      }}
                    >
                      #{r.rank}
                    </span>
                    <div
                      className="h-4 w-4 rounded-full"
                      style={{
                        background: r.highlight
                          ? "linear-gradient(135deg,#ff2d8f,#8b5cf6)"
                          : "rgba(255,255,255,0.12)",
                      }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-muted truncate">{r.url}</p>
                    <p
                      className="mt-0.5 text-xs font-medium leading-tight truncate"
                      style={{
                        color: r.highlight ? "#7ca9ff" : "rgba(255,255,255,0.45)",
                      }}
                    >
                      {r.title}
                    </p>
                    {r.highlight && (
                      <p className="mt-1 text-[10px] leading-relaxed text-muted/70 line-clamp-2">
                        {r.desc}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom label */}
          <div
            className="flex items-center justify-center gap-1.5 border-t border-white/[0.05] px-4 py-2.5"
          >
            <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-muted/50">
              Google Suchergebnisse · Illustration
            </span>
          </div>
        </div>
      </motion.div>

      {/* Floating card — Ranking */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, x: 20, y: -16 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
        whileHover={reduce ? {} : { scale: 1.04, y: -2 }}
        className="absolute top-4 right-0 z-20 cursor-default"
        aria-hidden
      >
        <div
          className="rounded-2xl px-4 py-3 shadow-[0_12px_48px_-8px_rgba(0,0,0,0.7)]"
          style={{
            background: "rgba(10,10,10,0.85)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(16px)",
          }}
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-muted">
            Google Ranking
          </p>
          <p
            className="mt-0.5 font-display text-[1.75rem] font-bold leading-none"
            style={{
              backgroundImage: "linear-gradient(135deg,#ff2d8f,#8b5cf6)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            #1
          </p>
          <p className="mt-1 text-[9px] font-medium text-violet/80">
            Webdesign Schweinfurt
          </p>
        </div>
      </motion.div>

      {/* Floating card — +180% */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, x: -20, y: 20 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
        whileHover={reduce ? {} : { scale: 1.04, y: -2 }}
        className="absolute bottom-4 left-0 z-20 cursor-default"
        aria-hidden
      >
        <div
          className="rounded-2xl px-4 py-3 shadow-[0_12px_48px_-8px_rgba(0,0,0,0.7)]"
          style={{
            background: "rgba(10,10,10,0.85)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(16px)",
          }}
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-muted">
            Ø mehr Anfragen
          </p>
          <p className="mt-0.5 font-display text-[1.75rem] font-bold leading-none text-foreground">
            +180%
          </p>
          <p className="mt-1 text-[9px] font-medium text-pink">
            nach Website-Launch
          </p>
        </div>
      </motion.div>
    </div>
  );
}
