export function CityHeroVisual({ city, slug }: { city: string; slug: string }) {
  const results = [
    {
      rank: 1,
      title: `Webdesign ${city} | Schnell-Sichtbar.de`,
      url: `schnell-sichtbar.de › ${slug}`,
      desc: `Professionelle Webseiten für Betriebe in ${city} & Umgebung. Festpreis ab 399 €. Fertig in 14 Tagen. Jetzt kostenlos beraten lassen.`,
      highlight: true,
    },
    {
      rank: 2,
      title: `Webdesign Agentur ${city} – Ihr digitaler Partner`,
      url: `web-agentur.de › leistungen`,
      highlight: false,
    },
    {
      rank: 3,
      title: "Website erstellen lassen – günstig & schnell",
      url: `design-studio-online.de › angebot`,
      highlight: false,
    },
  ] as const;

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
      <div className="city-hero-serp-enter relative z-10 w-full max-w-[400px]">
        <div className="city-serp-card relative overflow-hidden rounded-2xl">
          <div
            aria-hidden
            className="city-serp-top-glow pointer-events-none absolute inset-x-0 top-0 h-20"
          />

          {/* Search bar */}
          <div className="px-4 pt-5 pb-3">
            <div
              className="city-serp-search flex items-center gap-2.5 rounded-full px-3.5 py-2.5"
            >
              <svg className="h-3.5 w-3.5 shrink-0 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <span className="font-mono text-xs text-foreground/80 tracking-tight">
                Webdesign {city}
              </span>
              <span className="ml-auto h-3.5 w-px bg-pink animate-pulse" />
            </div>
          </div>

          <div className="mx-4 h-px bg-white/[0.06]" />

          {/* Results */}
          <div className="divide-y divide-white/[0.04] px-4 pb-4 pt-1">
            {results.map((r) => (
              <div
                key={r.rank}
                className={`relative py-3.5 ${r.highlight ? "" : "city-result-dim"}`}
              >
                {r.highlight && (
                  <div
                    aria-hidden
                    className="city-result-highlight pointer-events-none absolute inset-0 rounded-xl"
                  />
                )}
                <div className="relative flex items-start gap-2.5">
                  <div className="flex flex-col items-center gap-1.5 pt-0.5">
                    <span
                      className={`font-mono text-[9px] font-bold leading-none ${r.highlight ? "city-rank-text-highlight" : "city-rank-text-muted"}`}
                    >
                      #{r.rank}
                    </span>
                    <div
                      className={`h-4 w-4 rounded-full ${r.highlight ? "city-rank-dot-highlight" : "city-rank-dot-muted"}`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-muted truncate">{r.url}</p>
                    <p
                      className={`mt-0.5 text-xs font-medium leading-tight truncate ${r.highlight ? "city-result-title-highlight" : "city-result-title-muted"}`}
                    >
                      {r.title}
                    </p>
                    {"desc" in r && r.highlight && (
                      <p className="mt-1 text-[10px] leading-relaxed text-muted/70 line-clamp-2">
                        {r.desc}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-1.5 border-t border-white/[0.05] px-4 py-2.5">
            <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-muted/50">
              Google Suchergebnisse · Illustration
            </span>
          </div>
        </div>
      </div>

      {/* Floating card — Ranking */}
      <div
        className="city-hero-rank-enter absolute top-4 right-0 z-20 cursor-default"
        aria-hidden
      >
        <div
          className="city-float-card rounded-2xl px-4 py-3 shadow-[0_12px_48px_-8px_rgba(0,0,0,0.7)]"
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-muted">Google Ranking</p>
          <p
            className="city-float-rank mt-0.5 font-display text-[1.75rem] font-bold leading-none"
          >
            #1
          </p>
          <p className="mt-1 text-[9px] font-medium text-violet/80">Webdesign {city}</p>
        </div>
      </div>

      {/* Floating card — +180% */}
      <div
        className="city-hero-growth-enter absolute bottom-4 left-0 z-20 cursor-default"
        aria-hidden
      >
        <div
          className="city-float-card rounded-2xl px-4 py-3 shadow-[0_12px_48px_-8px_rgba(0,0,0,0.7)]"
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-muted">Ø mehr Anfragen</p>
          <p className="mt-0.5 font-display text-[1.75rem] font-bold leading-none text-foreground">+180%</p>
          <p className="mt-1 text-[9px] font-medium text-pink">nach Website-Launch</p>
        </div>
      </div>
    </div>
  );
}
