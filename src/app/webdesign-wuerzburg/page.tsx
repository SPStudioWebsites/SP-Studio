import type { Metadata } from "next";
import { CityLandingPage } from "@/components/sections/city-landing";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Webdesign Würzburg",
  description:
    "Webdesign Würzburg: Professionelle Webseiten für Handwerker, Gastronomie, Weingüter und KMUs in Würzburg. Lokal optimiert, Festpreis ab 399 Euro, fertig in 14 Tagen. Jetzt kostenlos beraten lassen.",
  keywords: [
    "Webdesign Würzburg",
    "Webagentur Würzburg",
    "Website erstellen Würzburg",
    "Homepage Würzburg",
    "Local SEO Würzburg",
    "Webdesign Unterfranken",
    "Webseite Würzburg",
    "SEO Würzburg",
    "Webdesign Franken",
  ],
  openGraph: {
    title: "Webdesign Würzburg | Schnell-Sichtbar.de",
    description:
      "Professionelle Webseiten für Betriebe in Würzburg und Unterfranken. Festpreis ab 399 Euro. Fertig in 14 Tagen. Jetzt kostenlos beraten lassen.",
    type: "website",
    locale: "de_DE",
    siteName: "Schnell-Sichtbar.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Würzburg | Schnell-Sichtbar.de",
    description:
      "Professionelle Webseiten für Betriebe in Würzburg und Unterfranken. Festpreis ab 399 Euro. Fertig in 14 Tagen.",
  },
  alternates: {
    canonical: "https://schnell-sichtbar.de/webdesign-wuerzburg",
  },
};

const faq = [
  {
    q: "Kommt ihr auch persönlich nach Würzburg?",
    a: "Ja, auf Wunsch fahre ich für das Erstgespräch direkt zu dir nach Würzburg. Die meisten Projekte laufen reibungslos remote, persönliche Termine vor Ort sind aber jederzeit möglich.",
  },
  {
    q: "Was kostet eine Website für einen Betrieb in Würzburg?",
    a: "Eine professionelle Website beginnt ab 399 Euro einmalig, inklusive Design, Entwicklung und SEO-Grundlagen. Für Betriebe in Würzburg gibt es klare Festpreise, bevor auch nur eine Zeile Code geschrieben wird. Keine versteckten Folgekosten.",
  },
  {
    q: "Wie lange dauert es, bis meine Website online ist?",
    a: "Im Durchschnitt 14 Tage, vom ersten Gespräch bis zum Launch. Bei größeren Projekten planen wir das gemeinsam realistisch. Es gibt auch einen Express-Slot für 7 Tage Lieferzeit.",
  },
  {
    q: "Warum ist eine Website für Würzburger Betriebe so wichtig?",
    a: "Würzburg ist eine der größten Städte Unterfrankens mit über 130.000 Einwohnern, Hunderttausenden Touristen und rund 28.000 Studierenden. Wer bei Google nicht auftaucht, verliert täglich Kunden an Mitbewerber, die sichtbar sind.",
  },
  {
    q: "Brauche ich technisches Wissen?",
    a: "Kein bisschen. Du lieferst die Infos zu deinem Betrieb, ich kümmere mich um den Rest. Kein Fachchinesisch, keine langen Erklärungen. Du siehst das Ergebnis, nicht den Prozess.",
  },
  {
    q: "Muss ich die Texte für meine Website selbst schreiben?",
    a: "Nein. Wenn du die Grundinfos zu deinem Betrieb teilst, formuliere ich die Texte für dich: verständlich, überzeugend und SEO-optimiert auf Würzburg ausgerichtet. Du kannst natürlich auch eigene Inhalte einbringen.",
  },
  {
    q: "Kann mein Weingut oder meine Vinothek von einer Website profitieren?",
    a: "Absolut. Frankenwein ist eine der bekanntesten deutschen Weinregionen, und Würzburger Weingüter sowie Weinstuben werden täglich über Google gesucht. Eine professionelle Website mit lokalem SEO bringt Touristen und Einheimische direkt zu dir, auch wenn sie noch gar nicht wussten, dass es dich gibt.",
  },
  {
    q: "Welche Branchen profitieren in Würzburg am meisten von einer neuen Webseite?",
    a: "In Würzburg profitieren besonders Gastronomie und Weingüter (durch Tourismus und Frankenwein-Reisende), Friseure und Beauty-Studios (durch 28.000 Studierende), Ärzte und Therapeuten, Handwerksbetriebe (Sanitär, Elektrik, Schreinerei) sowie Hotels, Pensionen und Ferienwohnungen. Auch B2B-Dienstleister rund um Universität und Kliniken haben einen großen Suchmarkt: Steuerberater, IT-Dienstleister, Personalberatungen. Wer in einer dieser Branchen lokal sichtbar ist, hat in Würzburg einen klaren Vorteil.",
  },
  {
    q: "Wie wichtig ist Google My Business für Betriebe in Würzburg?",
    a: "Sehr wichtig. In einer Stadt mit so viel Tourismus und Studierenden entscheiden Maps-Bewertungen und Öffnungszeiten oft in Sekunden, ob jemand zu dir kommt oder zur Konkurrenz. Suchanfragen wie 'Mittagstisch Würzburg Marktplatz' oder 'Friseur Würzburg Sanderau' zeigen zuerst die Google-Maps-Box. Ich richte das Profil korrekt ein, hole Bewertungen ab und sorge dafür, dass dein Eintrag nahtlos mit deiner Webseite zusammenarbeitet.",
  },
  {
    q: "Lohnt sich eine Webseite auch, wenn ich schon viele Stammkunden habe?",
    a: "Ja. Würzburg hat einen ständigen Zustrom an Neukunden: 28.000 Studierende, die alle paar Jahre wechseln, Hunderttausende Touristen und Weinreisende, neu zugezogene Familien aus dem ganzen Maintal. Ohne digitale Sichtbarkeit verpasst du diese Zielgruppen komplett. Eine moderne Webseite ist die Grundlage dafür, dass auch in zehn Jahren noch Anfragen reinkommen – ohne dass du jedes Jahr neue Werbe-Kampagnen schalten musst.",
  },
] as const;

const standortBlock = (
  <section
    aria-labelledby="wue-standort-h"
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
                Wirtschaftsstandort
              </p>
              <h2
                id="wue-standort-h"
                className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl text-balance"
              >
                Webdesign für eine Stadt mit{" "}
                <em className="font-display font-extrabold not-italic text-gradient">
                  hartem Wettbewerb.
                </em>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted text-pretty md:text-lg">
                Würzburg ist die größte Stadt Unterfrankens und ein hart umkämpfter
                Suchmarkt. Hunderte Handwerker, Restaurants, Dienstleister und Einzelhändler
                konkurrieren täglich um die ersten Plätze bei Google. Wer bei
                &quot;Elektriker Würzburg&quot; oder &quot;Friseur Würzburg Innenstadt&quot;
                nicht auf Seite 1 erscheint, verliert diese Kunden an die Konkurrenz.
                Dauerhaft.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-pink/70">
                Wein, Tourismus und Studierende
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl text-balance">
                Drei Zielgruppen. Eine gute Website erreicht sie alle.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
                Würzburg zieht Touristen wegen Residenz und Festung Marienberg, Weinliebhaber
                aus ganz Deutschland wegen des Frankenweins und 28.000 Studierende, die lokal
                konsumieren. Gastronomie, Weingüter, Handel und Dienstleister, die online
                gefunden werden, bedienen alle drei Gruppen ohne zusätzliches Werbebudget.
              </p>
            </div>
          </div>

          <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-10">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-violet/70">
                Stadtteile und Quartiere
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground md:text-xl text-balance">
                Sanderau, Grombühl, Heidingsfeld & Co.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted text-pretty md:text-base">
                Würzburger suchen quartiersgenau: &quot;Friseur Sanderau&quot;, &quot;Café
                Grombühl&quot;, &quot;Hausarzt Heidingsfeld&quot;, &quot;Pizzeria Frauenland&quot;.
                Ich optimiere deine Webseite gezielt für deine Stadtteile – Altstadt,
                Sanderau, Grombühl, Heidingsfeld, Frauenland, Zellerau, Versbach, Lengfeld
                und die umliegenden Orte Höchberg, Veitshöchheim, Estenfeld, Eibelstadt
                sowie das gesamte Weinanbaugebiet rund um die Stadt.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-pink/70">
                Branchen mit lokalem Hebel
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground md:text-xl text-balance">
                Wein, Gastronomie, Gesundheit.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted text-pretty md:text-base">
                Würzburg lebt von Frankenwein (Würzburger Stein, Würzburger Pfaffenberg,
                Iphofen, Volkach), einer reichen Gastroszene zwischen Studenten-Kneipen
                und Sterneküche und einem starken Gesundheitssektor (Uniklinik, Missioklinik,
                zahlreiche Fachärzte). Dazu kommen Handwerk, Einzelhandel und touristische
                Anbieter. Jede dieser Branchen braucht eigene SEO-Strategien – ich kenne
                die Unterschiede und baue Seiten, die in der richtigen Nische ranken.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-violet/70">
                Studierende und Pendler
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground md:text-xl text-balance">
                Eine Stadt, die nie stillsteht.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted text-pretty md:text-base">
                28.000 Studierende der Julius-Maximilians-Universität und der Hochschule
                für angewandte Wissenschaften suchen täglich nach Wohnungen, Lokalen,
                Friseuren, Reparaturwerkstätten und Dienstleistungen. Dazu kommen
                Tausende Pendler aus Kitzingen, Marktheidenfeld, Ochsenfurt und Bad
                Kissingen. Eine Webseite, die für mobile Suche optimiert und in Maps
                gut sichtbar ist, erreicht alle diese Gruppen – ohne dass du dafür
                jeden Monat neue Werbeanzeigen schalten musst.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default function WebdesignWuerzburgPage() {
  return (
    <CityLandingPage
      city="Würzburg"
      slug="webdesign-wuerzburg"
      region="Unterfranken"
      heroSubtitle="Webdesign Würzburg: professionelle Webseiten für Handwerker, Gastronomie, Weingüter und KMUs in Würzburg und ganz Unterfranken. Lokal gefunden werden, ohne Agentur-Aufwand."
      pitchText="Ich bin Simon. Kein Callcenter, kein anonymes Studio, keine Weitervermittlung. Würzburg ist der größte Suchmarkt in Unterfranken, und genau deshalb ist eine lokal optimierte Website hier besonders wichtig. Ich baue Seiten, die in Würzburg ranken: für Handwerker aus der Zellerau, Gastronomen am Marktplatz und Weingüter aus dem Würzburger Umland."
      faq={faq}
      cityBlock={standortBlock}
      areaServedExtra={[
        { name: "Kitzingen" },
        { name: "Bad Kissingen" },
        { name: "Marktheidenfeld" },
        { name: "Ochsenfurt" },
        { name: "Landkreis Würzburg" },
      ]}
    />
  );
}
