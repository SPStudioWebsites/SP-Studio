import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { GlassCard } from "@/components/ui/glass-card";
import { Search, Sparkles, Clock } from "@/lib/icons";

export function WhyWebsiteSection() {
  return (
    <section
      id="warum-webseite"
      aria-labelledby="warum-webseite-h"
      className="relative overflow-hidden py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Pill>Warum eine Webseite?</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="warum-webseite-h"
              className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl text-balance"
            >
              Eine schöne Seite reicht nicht.{" "}
              <em className="font-display font-extrabold not-italic text-gradient">
                Sie muss verkaufen.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted md:text-lg text-pretty">
              Es gibt einen entscheidenden Unterschied zwischen einer digitalen Visitenkarte
              und einem digitalen Verkäufer. Viele Webseiten in Franken sehen ordentlich aus,
              generieren aber keine Anfragen – weil ihnen die strategische Grundlage fehlt.
              Eine Webseite, die wirklich für dich arbeitet, hat drei Bausteine: Sie wird
              gefunden, sie führt Besucher zur Anfrage und sie tut beides rund um die Uhr.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <Reveal delay={0.1}>
            <GlassCard hover className="flex h-full flex-col gap-4 p-7">
              <span
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl"
                style={{
                  background: "linear-gradient(135deg,#ff2d8f,#c026d3)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
                }}
              >
                <Search className="h-5 w-5 text-white" strokeWidth={1.75} />
              </span>
              <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                Sichtbarkeit zuerst
              </h3>
              <p className="text-sm leading-relaxed text-muted text-pretty">
                Eine Webseite, die niemand findet, ist Deko – egal wie schön sie ist. Local
                SEO, sauberes Google-Unternehmensprofil und technische Grundlagen wie Mobile-First
                und Ladezeit entscheiden, ob du bei Suchanfragen wie „Friseur in der Nähe",
                „Restaurant Franken Bewertungen" oder „Sanitär Notdienst" überhaupt auftauchst.
                Über 90 Prozent aller lokalen Kaufentscheidungen starten heute bei Google.
                Ohne Sichtbarkeit gibt es keine Anfragen, ohne Anfragen keinen Umsatz – so
                einfach ist die Rechnung.
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.2}>
            <GlassCard hover className="flex h-full flex-col gap-4 p-7">
              <span
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl"
                style={{
                  background: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
                }}
              >
                <Sparkles className="h-5 w-5 text-white" strokeWidth={1.75} />
              </span>
              <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                Funktion vor Form
              </h3>
              <p className="text-sm leading-relaxed text-muted text-pretty">
                Eine hübsche Seite ohne klare Handlungspfade, Vertrauenssignale und einfache
                Kontakt- oder Buchungswege ist eine teure Visitenkarte. Funktion heißt: Jeder
                Besucher weiß innerhalb von zwei Sekunden, was du anbietest, für wen, und wie
                er den nächsten Schritt macht. Das entscheidet, ob aus 1.000 Besuchern 5 oder
                50 Anfragen werden. Genau dort liegt der Hebel, der eine professionelle
                Webseite von einer durchschnittlichen unterscheidet.
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.3}>
            <GlassCard hover className="flex h-full flex-col gap-4 p-7">
              <span
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl"
                style={{
                  background: "linear-gradient(135deg,#ff2d8f,#8b5cf6)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
                }}
              >
                <Clock className="h-5 w-5 text-white" strokeWidth={1.75} />
              </span>
              <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                24/7 Arbeitsverhältnis
              </h3>
              <p className="text-sm leading-relaxed text-muted text-pretty">
                Während du auf der Baustelle, in der Küche oder im Behandlungszimmer bist,
                antwortet deine Webseite auf Fragen, nimmt Termine entgegen und sammelt
                Anfragen. Sie arbeitet im Hintergrund, kostet einmalig und macht deine
                Auftragslage planbar – im Gegensatz zu Werbung, die du jeden Monat neu zünden
                und bezahlen musst. Eine moderne Webseite ist heute die wichtigste Investition
                für lokale Betriebe, die nicht jedem Auftrag hinterherrennen wollen.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
