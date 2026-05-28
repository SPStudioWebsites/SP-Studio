import type { Metadata } from "next";
import { CityLandingPage } from "@/components/sections/city-landing";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Webdesign Nürnberg",
  description:
    "Webdesign Nürnberg – Professionelle Webseiten für Handwerker, Gastronomie & lokale Betriebe in Nürnberg & der Metropolregion. Lokal, schnell, ohne Agentur-Bürokratie. Festpreis ab 399 €. Jetzt kostenlos beraten lassen.",
  keywords: [
    "Webdesign Nürnberg",
    "Webagentur Nürnberg",
    "Website erstellen Nürnberg",
    "Homepage Nürnberg",
    "Local SEO Nürnberg",
    "Webdesign Mittelfranken",
    "Webseite Nürnberg",
    "SEO Nürnberg",
    "Homepage Handwerker Nürnberg",
  ],
  openGraph: {
    title: "Webdesign Nürnberg | Schnell-Sichtbar.de",
    description:
      "Professionelle Webseiten für Betriebe in Nürnberg & der Metropolregion. Festpreis ab 399 €. Fertig in 14 Tagen. Jetzt kostenlos beraten lassen.",
    type: "website",
    locale: "de_DE",
    siteName: "Schnell-Sichtbar.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Nürnberg | Schnell-Sichtbar.de",
    description:
      "Professionelle Webseiten für Betriebe in Nürnberg & der Metropolregion. Festpreis ab 399 €. Fertig in 14 Tagen.",
  },
  alternates: {
    canonical: "https://schnell-sichtbar.de/webdesign-nuernberg",
  },
};

const faq = [
  {
    q: "Kommt ihr auch persönlich nach Nürnberg?",
    a: "Ja, auf Wunsch komme ich für das Erstgespräch direkt zu dir nach Nürnberg. Die meisten Projekte laufen problemlos remote ab, persönliche Termine in Nürnberg sind aber jederzeit möglich.",
  },
  {
    q: "Was kostet eine Website für einen Betrieb in Nürnberg?",
    a: "Eine professionelle Website beginnt ab 399 € einmalig, inklusive Design, Entwicklung und SEO-Grundlagen. Für lokale Betriebe in Nürnberg gibt es klare Festpreise, bevor auch nur eine Zeile Code geschrieben wird. Keine versteckten Folgekosten.",
  },
  {
    q: "Wie lange dauert es, bis meine Website online ist?",
    a: "Im Durchschnitt 14 Tage, vom ersten Gespräch bis zum Launch. Bei größeren Projekten planen wir das gemeinsam realistisch. Es gibt auch einen Express-Slot für 7 Tage Lieferzeit.",
  },
  {
    q: "Warum ist eine Website für Nürnberger Betriebe besonders wichtig?",
    a: "Nürnberg ist mit über 500.000 Einwohnern die größte Stadt Frankens und das wirtschaftliche Herz der Metropolregion. Handwerker, Gastronomie und Dienstleister kämpfen hier täglich um die ersten Plätze bei Google. Wer bei 'Elektriker Nürnberg' oder 'Friseur Nürnberg Mitte' nicht auftaucht, verliert diese Kunden dauerhaft an die Konkurrenz.",
  },
  {
    q: "Brauche ich technisches Wissen?",
    a: "Kein bisschen. Du lieferst die Infos zu deinem Betrieb, ich kümmere mich um den Rest. Kein Fachchinesisch, keine langen Erklärungen. Du siehst das Ergebnis, nicht den Prozess.",
  },
  {
    q: "Muss ich die Texte für meine Website selbst schreiben?",
    a: "Nein. Wenn du die Grundinfos zu deinem Betrieb teilst, formuliere ich die Texte für dich: verständlich, überzeugend und SEO-optimiert auf Nürnberg ausgerichtet. Du kannst natürlich auch eigene Inhalte einbringen.",
  },
  {
    q: "Kann ich auch als Handwerker in Nürnberg von einer Website profitieren?",
    a: "Absolut. Nürnberg hat einen riesigen Bedarf an lokalen Handwerkern. Mit einer suchoptimierten Website erscheinst du bei 'Dachdecker Nürnberg', 'Maler Nürnberg Süd' oder 'Sanitär Nürnberg' – und das ohne Werbebudget, dauerhaft.",
  },
  {
    q: "Welche Branchen profitieren in Nürnberg am meisten von einer neuen Webseite?",
    a: "In Nürnberg ist die Spannbreite groß: stark profitieren klassische Handwerksbetriebe (Sanitär, Elektrik, Schreinerei, KFZ in den Gewerbegebieten Maiach und Langwasser), Gastronomie und Hotels in der Altstadt und Gostenhof, Friseure und Kosmetikstudios in den Stadtteilen, Ärzte und Therapeuten, Steuerberater, Anwaltskanzleien sowie spezialisierte B2B-Dienstleister rund um die Industrie. Auch kleine Manufakturen und Direktvermarkter (Lebkuchen, Bratwurst, Bier) bekommen über eine gute Webseite Bestellungen aus ganz Deutschland.",
  },
  {
    q: "Wie wichtig ist Google My Business für Betriebe in Nürnberg?",
    a: "Sehr wichtig. In einer Großstadt mit über 500.000 Einwohnern sind die meisten Suchanfragen lokal: 'Friseur Nürnberg in der Nähe', 'Italiener Nürnberg Altstadt', 'Notdienst Elektriker Nürnberg'. Google zeigt dabei zuerst das sogenannte Local Pack – also drei Google-Unternehmensprofile mit Bewertungen und Maps-Standort. Wer dort nicht auftaucht, ist für viele Nürnberger praktisch unsichtbar. Ich richte das Profil ein und verknüpfe es so mit deiner Webseite, dass beide gemeinsam ranken.",
  },
  {
    q: "Lohnt sich eine Webseite auch, wenn ich schon viele Stammkunden habe?",
    a: "Ja – gerade dann. Nürnberg ist eine sehr dynamische Stadt mit hoher Fluktuation: jedes Jahr ziehen Tausende neue Menschen aus der ganzen Metropolregion, aus Studienorten und aus dem Ausland zu. Ohne digitale Sichtbarkeit erreichst du diese Zielgruppen nicht. Eine professionelle Webseite ist die einfachste Versicherung gegen schwankende Auftragslagen, sie arbeitet 24/7 und macht dich auch für Neukunden auffindbar, die noch nie von dir gehört haben.",
  },
] as const;

const standortBlock = (
  <section
    aria-labelledby="nb-standort-h"
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
                Standort
              </p>
              <h2
                id="nb-standort-h"
                className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl text-balance"
              >
                Webdesign für die{" "}
                <em className="font-display font-extrabold not-italic text-gradient">
                  Metropole Frankens.
                </em>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted text-pretty md:text-lg">
                Nürnberg ist die größte Stadt Frankens und das wirtschaftliche Zentrum der
                gesamten Region. Mit über 500.000 Einwohnern und einer der stärksten
                Handwerksdichten Bayerns ist der Wettbewerb bei Google entsprechend hart.
                Wer bei &quot;Handwerker Nürnberg&quot; oder &quot;Restaurant Nürnberg Altstadt&quot;
                nicht sichtbar ist, verliert täglich Aufträge.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-pink/70">
                Metropolregion als Marktchance
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl text-balance">
                3,6 Millionen Menschen. Eine Region. Deine Kunden.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
                Die Metropolregion Nürnberg ist mit Erlangen, Fürth, Schwabach und dem
                gesamten Umland eine der größten Wirtschaftsregionen Deutschlands. Eine
                lokal optimierte Website für Nürnberg erschließt dir diesen gesamten Markt –
                dauerhaft und ohne laufende Werbekosten.
              </p>
            </div>
          </div>

          <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-10">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-violet/70">
                Stadtteile und Quartiere
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground md:text-xl text-balance">
                Nürnberg ist nicht ein Markt. Es sind 90.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted text-pretty md:text-base">
                Nürnberg hat über 90 Stadtteile, und Kunden suchen quartiersnah: &quot;Friseur
                Gostenhof&quot;, &quot;Italiener Altstadt&quot;, &quot;Sanitär Langwasser&quot;,
                &quot;Steuerberater Mögeldorf&quot;, &quot;Café St. Johannis&quot;. Ich
                optimiere deine Webseite für die Stadtteile, in denen du arbeitest – Altstadt,
                Gostenhof, St. Johannis, Mögeldorf, Wöhrd, Maxfeld, Schweinau, Langwasser,
                Zerzabelshof, Eibach oder die umliegenden Orte Fürth, Erlangen, Stein,
                Feucht, Lauf und das gesamte Nürnberger Land.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-pink/70">
                Branchen mit lokalem Hebel
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground md:text-xl text-balance">
                Handwerk, Industrie, Dienstleistung.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted text-pretty md:text-base">
                Nürnberg ist Heimat eines extrem dichten Handwerks-Netzes, einer starken
                Industrie (Siemens, Schaeffler, MAN, GfK) und einer großen Bandbreite
                lokaler Dienstleister. Diese Vielfalt heißt: jede Branche braucht eigene
                SEO-Strategien. Ein Maler in Langwasser wird anders gefunden als ein
                IT-Dienstleister in der Südstadt oder eine Hochzeitsfotografin in der
                Altstadt. Ich kenne die Suchgewohnheiten der jeweiligen Zielgruppe und
                baue Webseiten, die in der richtigen Nische ranken.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-violet/70">
                Pendler und Metropolregion
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground md:text-xl text-balance">
                Täglich 200.000 Pendler. Alle suchen lokal.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted text-pretty md:text-base">
                Über 200.000 Menschen pendeln täglich nach Nürnberg zur Arbeit – aus Fürth,
                Erlangen, Schwabach, dem Nürnberger Land, Roth und dem gesamten Umland.
                Sie alle suchen Friseure, Ärzte, Mittagsrestaurants, Werkstätten oder
                Dienstleister in der Nähe ihres Arbeitsplatzes. Eine lokal optimierte
                Webseite erschließt dir nicht nur die 500.000 Einwohner Nürnbergs, sondern
                den gesamten Wirtschaftsraum der Metropolregion mit 3,6 Millionen Menschen.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default function WebdesignNuernbergPage() {
  return (
    <CityLandingPage
      city="Nürnberg"
      slug="webdesign-nuernberg"
      region="Mittelfranken"
      heroSubtitle="Webdesign Nürnberg: professionelle Webseiten für Handwerker, Gastronomen und lokale Betriebe in Nürnberg und der gesamten Metropolregion. Lokal gefunden werden, ohne Agentur-Bürokratie."
      pitchText="Ich bin Simon. Kein Callcenter, kein anonymes Studio, keine Weitervermittlung. Nürnberg ist die größte Stadt Frankens – und genau deshalb ist der Wettbewerb bei Google besonders groß. Ich baue Websites, die in Nürnberg gefunden werden: für Handwerker aus dem Stadtgebiet und dem Umland, Gastronomen in der Altstadt und den Stadtteilen sowie Dienstleister aus der gesamten Metropolregion."
      faq={faq}
      cityBlock={standortBlock}
      areaServedExtra={[
        { name: "Fürth" },
        { name: "Erlangen" },
        { name: "Schwabach" },
        { name: "Landkreis Nürnberger Land" },
        { name: "Metropolregion Nürnberg" },
      ]}
    />
  );
}
