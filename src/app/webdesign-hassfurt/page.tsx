import type { Metadata } from "next";
import { CityLandingPage } from "@/components/sections/city-landing";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Webdesign Haßfurt",
  description:
    "Webdesign Haßfurt und Haßberge: Professionelle Webseiten für Handwerker, Dienstleister und KMUs im Landkreis Haßberge. Lokal optimiert, Festpreis ab 399 Euro, fertig in 14 Tagen. Jetzt kostenlos beraten lassen.",
  keywords: [
    "Webdesign Haßfurt",
    "Webdesign Haßberge",
    "Webagentur Haßfurt",
    "Website erstellen Haßfurt",
    "Homepage Haßfurt",
    "Local SEO Haßfurt",
    "Webdesign Unterfranken",
    "Webseite Haßfurt",
    "SEO Haßberge",
    "Webdesign Franken",
  ],
  openGraph: {
    title: "Webdesign Haßfurt | Schnell-Sichtbar.de",
    description:
      "Professionelle Webseiten für Betriebe in Haßfurt und dem Landkreis Haßberge. Festpreis ab 399 Euro. Fertig in 14 Tagen. Jetzt kostenlos beraten lassen.",
    type: "website",
    locale: "de_DE",
    siteName: "Schnell-Sichtbar.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Haßfurt | Schnell-Sichtbar.de",
    description:
      "Professionelle Webseiten für Betriebe in Haßfurt und dem Landkreis Haßberge. Festpreis ab 399 Euro. Fertig in 14 Tagen.",
  },
  alternates: {
    canonical: "https://schnell-sichtbar.de/webdesign-hassfurt",
  },
};

const faq = [
  {
    q: "Bist du wirklich aus der Region Haßfurt?",
    a: "Ja, ich komme direkt aus der Region Haßberge und kenne die lokalen Betriebe und den Markt hier. Beratungsgespräche können telefonisch, per Video oder persönlich bei dir vor Ort stattfinden.",
  },
  {
    q: "Was kostet eine Website für einen Betrieb in Haßfurt oder den Haßbergen?",
    a: "Eine professionelle Website beginnt ab 399 Euro einmalig, inklusive Design, Entwicklung und SEO-Grundlagen. Für Betriebe aus Haßfurt und dem Landkreis Haßberge gibt es klare Festpreise, bevor auch nur eine Zeile Code geschrieben wird. Keine versteckten Folgekosten.",
  },
  {
    q: "Wie lange dauert es, bis meine neue Website online ist?",
    a: "Im Durchschnitt 14 Tage, vom ersten Gespräch bis zum Launch. Bei größeren Projekten planen wir das gemeinsam realistisch. Es gibt auch einen Express-Slot für 7 Tage Lieferzeit.",
  },
  {
    q: "Was bringt mir Webdesign in Haßfurt und den Haßbergen konkret?",
    a: "Eine professionelle Website erhöht deine Sichtbarkeit bei Google, wenn Kunden im Landkreis Haßberge nach deiner Leistung suchen. Kombiniert mit Local SEO und einem gepflegten Google-Unternehmensprofil bringt das nachweislich mehr Anfragen, ohne laufende Werbekosten.",
  },
  {
    q: "Lohnt sich eine Website auch für kleine Betriebe auf dem Land?",
    a: "Gerade auf dem Land ist eine Website oft der einzige digitale Berührungspunkt zwischen dir und deinen Kunden. Im Landkreis Haßberge gibt es kaum spezialisierte Webagenturen vor Ort. Das bedeutet: Wer hier eine gute Website hat, hat einen klaren Vorteil gegenüber allen Mitbewerbern, die noch keine haben.",
  },
  {
    q: "Brauche ich technisches Wissen?",
    a: "Kein bisschen. Du lieferst die Infos zu deinem Betrieb, ich kümmere mich um den Rest. Kein Fachchinesisch, keine langen Erklärungen. Du siehst das Ergebnis, nicht den Prozess.",
  },
  {
    q: "Muss ich die Texte für meine Website selbst schreiben?",
    a: "Nein. Wenn du die Grundinfos zu deinem Betrieb teilst, formuliere ich die Texte für dich: verständlich, überzeugend und SEO-optimiert auf Haßfurt und die Haßberge ausgerichtet. Du kannst natürlich auch eigene Inhalte einbringen.",
  },
  {
    q: "Welche Branchen profitieren in Haßfurt und den Haßbergen am meisten?",
    a: "Im Landkreis Haßberge profitieren besonders Handwerksbetriebe (Sanitär, Elektrik, Maler, Schreinerei, Dachdecker), Landwirtschaftszulieferer und Direktvermarkter, Gastronomiebetriebe entlang des Mains (Zeil, Haßfurt, Eltmann), Pflegedienste, Tierärzte sowie kleine Manufakturen und Hofläden. Gerade auf dem Land ist die Konkurrenz online noch gering – wer hier eine moderne Webseite hat, ist oft der einzige in seiner Nische, der überhaupt bei Google auftaucht.",
  },
  {
    q: "Wie wichtig ist Google My Business für Betriebe in Haßfurt?",
    a: "Sehr wichtig. Gerade in ländlichen Regionen wie den Haßbergen ist das Google-Unternehmensprofil oft die erste und einzige Information, die Kunden über dich finden. Suchanfragen wie 'Bäcker Haßfurt offen', 'Werkstatt Zeil am Main' oder 'Friseur Ebern in der Nähe' zeigen Maps-Einträge ganz oben. Ich richte das Profil ein, hole Bewertungen und verknüpfe es sauber mit deiner Webseite, damit beide gemeinsam für lokale Suchen ranken.",
  },
  {
    q: "Lohnt sich eine Webseite auch, wenn ich schon viele Stammkunden habe?",
    a: "Ja, gerade in der Region Haßberge. Ländliche Strukturen verändern sich: Junge Generationen suchen alles online, Stammkunden ziehen weg oder werden weniger mobil, neue Bewohner kommen ohne Verbindungen in die Region. Ohne digitale Sichtbarkeit reißt der Nachschub an Neukunden früher oder später ab. Eine moderne Webseite ist die einfachste Versicherung dagegen – einmal investiert, arbeitet sie über Jahre für dich.",
  },
] as const;

const regionBlock = (
  <section
    aria-labelledby="hf-region-h"
    className="relative overflow-hidden py-12 md:py-16"
  >
    <div className="mx-auto max-w-7xl px-6">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-2xl p-8 md:p-12"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background:
                "radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.10) 0%, transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(139,92,246,0.45) 50%, transparent)",
            }}
          />
          <div className="relative grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="max-w-xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-violet/70">
                Haßfurt und Haßberge
              </p>
              <h2
                id="hf-region-h"
                className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl text-balance"
              >
                Webdesign für{" "}
                <em className="font-display font-extrabold not-italic text-gradient">
                  Haßfurt und den ganzen Landkreis Haßberge.
                </em>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted text-pretty md:text-lg">
                Ich komme selbst aus der Region Haßberge und kenne die lokalen Betriebe,
                die Stärken des Standorts und die Zielgruppen hier. Ob Handwerksbetrieb
                in Haßfurt, Gastronomie in Zeil am Main, Dienstleister in Eltmann oder
                Landwirtschaft in Knetzgau: Ich baue Websites, die lokal gefunden werden
                und echte Anfragen bringen.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-pink/70">
                Chancen in einer Region ohne viel Konkurrenz
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl text-balance">
                Im Haßberge-Kreis gibt es kaum Webagenturen. Das ist dein Vorteil.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
                Viele Betriebe im Landkreis Haßberge haben noch keine professionelle
                Website oder eine, die veraltet und nicht für Google optimiert ist.
                Das bedeutet: Wer jetzt handelt, besetzt die vorderen Plätze bei lokalen
                Suchanfragen, bevor es die Konkurrenz tut. Eine gute Website ist im
                Haßberge-Kreis noch immer ein echter Wettbewerbsvorteil.
              </p>
            </div>
          </div>

          <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-10">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-violet/70">
                Orte und Ortsteile
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground md:text-xl text-balance">
                Vom Main bis in die Haßberge.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted text-pretty md:text-base">
                Im Landkreis Haßberge gibt es nicht nur Haßfurt selbst, sondern zahlreiche
                Marktgemeinden und Dörfer, in denen lokale Suche entscheidend ist:
                &quot;Werkstatt Zeil am Main&quot;, &quot;Hofladen Knetzgau&quot;,
                &quot;Sanitär Ebern&quot;, &quot;Restaurant Königsberg&quot;. Ich optimiere
                deine Webseite für die Orte, in denen du tätig bist – Haßfurt, Zeil am Main,
                Eltmann, Ebern, Königsberg, Hofheim, Knetzgau, Stettfeld, Theres, Wonfurt,
                Sand am Main und das gesamte Maintal.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-pink/70">
                Branchen mit lokalem Hebel
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground md:text-xl text-balance">
                Handwerk, Landwirtschaft, Direktvermarkter.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted text-pretty md:text-base">
                Die Haßberge sind geprägt von einer starken Handwerks-Tradition (Schreinerei,
                Sanitär, Bau, Dachdecker), landwirtschaftlichen Betrieben mit Direktvermarktung
                (Hofläden, Metzgereien, Bäckereien, Brennereien), Gastronomie entlang des Mains
                sowie kleinen Manufakturen. Anders als in der Großstadt geht es hier nicht um
                hartes SEO-Wettrüsten, sondern um saubere Grundlagen: eine schnelle, mobile
                Webseite mit klaren Leistungen reicht oft schon, um die Konkurrenz zu überholen.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-violet/70">
                Wenig Konkurrenz, klare Vorteile
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground md:text-xl text-balance">
                Wer früh dran ist, gewinnt langfristig.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted text-pretty md:text-base">
                Im Landkreis Haßberge ist die Online-Konkurrenz in vielen Branchen noch
                überschaubar. Wer jetzt eine moderne Webseite hat, besetzt die ersten
                Google-Plätze für Suchanfragen in Haßfurt, Ebern, Zeil und Umgebung – und
                hält diese Position oft jahrelang. Genau das ist die größte Chance auf dem
                Land: niedrige Eintrittsbarrieren, dauerhafte Sichtbarkeit, planbare Anfragen.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default function WebdesignHassfurtPage() {
  return (
    <CityLandingPage
      city="Haßfurt"
      slug="webdesign-hassfurt"
      region="Unterfranken"
      heroSubtitle="Webdesign Haßfurt und Haßberge: professionelle Webseiten für Handwerker, Dienstleister und KMUs im Landkreis Haßberge. Direkt aus der Region, lokal optimiert."
      pitchText="Ich bin Simon, und ich komme direkt aus dem Landkreis Haßberge. Kein Callcenter, kein anonymes Studio, keine Weitervermittlung. Ich kenne die Betriebe hier, ich kenne die Region, und ich baue Websites, die für echte Kunden in Haßfurt, Ebern, Zeil am Main und dem gesamten Haßberge-Kreis funktionieren."
      faq={faq}
      cityBlock={regionBlock}
      areaServedExtra={[
        { name: "Landkreis Haßberge" },
        { name: "Eltmann" },
        { name: "Zeil am Main" },
        { name: "Ebern" },
        { name: "Hofheim in Unterfranken" },
        { name: "Knetzgau" },
      ]}
    />
  );
}
