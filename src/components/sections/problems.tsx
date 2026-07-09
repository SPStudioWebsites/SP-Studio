import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { Search, Layout, Phone, Clock, AlertCircle, MapPin, Star } from "@/lib/icons";

/**
 * Sektion 2 — Probleme der Zielgruppe (Pain-Spiegel VOR der Zielgruppen-Nennung).
 * Layout B (Split Bild + Text) statt Karten-Raster: links eine „auf Google
 * unsichtbar"-Szene (dein Betrieb auf Seite 2, Konkurrenz oben), rechts die
 * Pains als narrative Liste an einem roten Spine. Bietet bewusst KEINE Lösung.
 */
const problems = [
  {
    icon: Search,
    title: "Bei Google unsichtbar",
    body: "Kundschaft sucht deinen Betrieb in der Region – und landet bei der Konkurrenz. Wer nicht auf Seite 1 steht, existiert für neue Kunden schlicht nicht.",
  },
  {
    icon: Layout,
    title: "Die Seite schreckt ab",
    body: "Veraltet, langsam, auf dem Handy zerschossen. Der erste Eindruck sitzt in drei Sekunden – und ist verloren, bevor das Telefon überhaupt klingelt.",
  },
  {
    icon: Phone,
    title: "Immer dieselben Fragen",
    body: "Öffnungszeiten, Preise, Termine – alles läuft über Anrufe und WhatsApp. Deine Website nimmt dir keine Arbeit ab, sondern macht am Ende mehr davon.",
  },
  {
    icon: Clock,
    title: "Keine Zeit dafür",
    body: "Das Website-Projekt steht seit Monaten auf der Liste. Zwischen Baustelle, Kundschaft und Buchhaltung kommst du einfach nicht dazu.",
  },
];

export function ProblemsSection() {
  return (
    <section id="probleme" aria-labelledby="probleme-h" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Pill tone="warn">Kommt dir das bekannt vor?</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="probleme-h"
              className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl text-balance"
            >
              Was dich online{" "}
              <em className="not-italic text-[#1e5eff]">täglich Kunden kostet.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg text-pretty">
              Die meisten Betriebe in Franken verlieren Anfragen, ohne es zu merken –
              nicht weil sie schlecht arbeiten, sondern weil online der erste Eindruck fehlt.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Grafik: auf Google unsichtbar */}
          <Reveal y={28}>
            <UnseenScene />
          </Reveal>

          {/* Pains als narrative Liste am roten Spine */}
          <Reveal delay={0.1}>
            <ul className="relative space-y-6 pl-6">
              <span
                aria-hidden
                className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-[#d64b45] via-[#d64b45]/50 to-transparent"
              />
              {problems.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.title} className="relative">
                    <span className="absolute -left-[26px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[rgba(214,75,69,0.12)] ring-2 ring-[#faf9f6]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#d64b45]" />
                    </span>
                    <div className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[rgba(214,75,69,0.09)] ring-1 ring-[rgba(214,75,69,0.18)]">
                        <Icon className="h-5 w-5 text-[#d64b45]" strokeWidth={1.9} />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-[15px] leading-relaxed text-muted text-pretty">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Google-Ergebnis, in dem der eigene Betrieb auf „Seite 2" verschwindet. */
function UnseenScene() {
  const competitors = [
    { name: "Konkurrenz A", rating: "4,6" },
    { name: "Konkurrenz B", rating: "4,4" },
    { name: "Konkurrenz C", rating: "4,2" },
  ];
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_30px_70px_-30px_rgba(20,24,31,0.32)]">
        {/* Suchleiste */}
        <div className="flex items-center gap-2 border-b border-border bg-[#f4f3ef] px-4 py-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
            <Search className="h-3.5 w-3.5 text-muted" />
          </span>
          <div className="flex h-7 flex-1 items-center rounded-full border border-border bg-white px-3 text-[12px] font-medium text-foreground/70">
            handwerker in haßfurt
          </div>
        </div>

        {/* Konkurrenz oben */}
        <div className="space-y-2 p-4">
          {competitors.map((c, idx) => (
            <div key={c.name} className="flex items-center gap-3 rounded-xl border border-border bg-white px-3 py-2.5">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#faf9f6] text-[11px] font-bold text-muted ring-1 ring-border">
                {idx + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold text-foreground">{c.name}</p>
                <div className="mt-0.5 flex items-center gap-1">
                  <Star className="h-2.5 w-2.5 fill-[#f5a623] text-[#f5a623]" />
                  <span className="text-[10px] font-medium text-muted">{c.rating} · in deiner Nähe</span>
                </div>
              </div>
              <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-[#1e5eff]/40" />
            </div>
          ))}

          {/* Seite-2-Trennung */}
          <div className="flex items-center gap-3 py-1.5">
            <span className="h-px flex-1 bg-border" />
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
              Seite 2
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          {/* Dein Betrieb — verblasst, unsichtbar */}
          <div className="flex items-center gap-3 rounded-xl border border-dashed border-[rgba(214,75,69,0.4)] bg-[rgba(214,75,69,0.03)] px-3 py-2.5 opacity-70">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(214,75,69,0.1)] text-[11px] font-bold text-[#d64b45]">
              17
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold text-foreground/50">Dein Betrieb</p>
              <p className="text-[10px] text-[#d64b45]">hier sucht dich niemand</p>
            </div>
          </div>
        </div>
      </div>

      {/* Roter Verlust-Chip */}
      <div className="animate-float-y absolute -bottom-4 -right-3 flex items-center gap-2 rounded-2xl border border-[rgba(214,75,69,0.25)] bg-white px-3.5 py-2.5 shadow-[0_20px_44px_-16px_rgba(214,75,69,0.4)]">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(214,75,69,0.12)]">
          <AlertCircle className="h-4 w-4 text-[#d64b45]" strokeWidth={2.2} />
        </span>
        <div>
          <p className="text-[11px] font-bold leading-tight text-foreground">Anfragen verloren</p>
          <p className="text-[10px] text-muted">gehen an die Konkurrenz</p>
        </div>
      </div>
    </div>
  );
}
