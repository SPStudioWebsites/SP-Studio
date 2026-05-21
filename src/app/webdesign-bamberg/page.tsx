import type { Metadata } from "next";
import { CityLandingPage } from "@/components/sections/city-landing";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Webdesign Bamberg",
  description:
    "Webdesign Bamberg – Professionelle Webseiten für Handwerker, Gastronomie & KMUs in Bamberg & Oberfranken. Lokal, schnell, ohne Agentur-Bürokratie. Festpreis ab 399 €. Jetzt kostenlos beraten lassen.",
  keywords: [
    "Webdesign Bamberg",
    "Webagentur Bamberg",
    "Website erstellen Bamberg",
    "Homepage Bamberg",
    "Local SEO Bamberg",
    "Webdesign Oberfranken",
    "Webseite Bamberg",
    "SEO Bamberg",
  ],
  openGraph: {
    title: "Webdesign Bamberg | Schnell-Sichtbar.de",
    description:
      "Professionelle Webseiten für Betriebe in Bamberg & Oberfranken. Festpreis ab 399 €. Fertig in 14 Tagen. Jetzt kostenlos beraten lassen.",
    type: "website",
    locale: "de_DE",
    siteName: "Schnell-Sichtbar.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Bamberg | Schnell-Sichtbar.de",
    description:
      "Professionelle Webseiten für Betriebe in Bamberg & Oberfranken. Festpreis ab 399 €. Fertig in 14 Tagen.",
  },
  alternates: {
    canonical: "https://schnell-sichtbar.de/webdesign-bamberg",
  },
};

const faq = [
  {
    q: "Kommt ihr auch persönlich nach Bamberg?",
    a: "Ja, auf Wunsch fahre ich für das Erstgespräch direkt zu dir nach Bamberg. Die meisten Projekte laufen problemlos remote, persönliche Termine in Bamberg sind aber jederzeit möglich.",
  },
  {
    q: "Was kostet eine Website für einen Betrieb in Bamberg?",
    a: "Eine professionelle Website beginnt ab 399 € einmalig, inklusive Design, Entwicklung und SEO-Grundlagen. Für lokale Betriebe in Bamberg gibt es klare Festpreise, bevor auch nur eine Zeile Code geschrieben wird. Keine versteckten Folgekosten.",
  },
  {
    q: "Wie lange dauert es, bis meine Website online ist?",
    a: "Im Durchschnitt 14 Tage, vom ersten Gespräch bis zum Launch. Bei größeren Projekten planen wir das gemeinsam realistisch. Es gibt auch einen Express-Slot für 7 Tage Lieferzeit.",
  },
  {
    q: "Warum ist eine Website für Bamberger Betriebe besonders wichtig?",
    a: "Bamberg ist eine der meistbesuchten Städte Bayerns: Touristen und Einheimische suchen Restaurants, Handwerker und Dienstleister täglich über Google. Wer bei 'Elektriker Bamberg' oder 'Friseur Bamberg Innenstadt' nicht auftaucht, verliert diese Kunden dauerhaft an die Konkurrenz.",
  },
  {
    q: "Brauche ich technisches Wissen?",
    a: "Kein bisschen. Du lieferst die Infos zu deinem Betrieb, ich kümmere mich um den Rest. Kein Fachchinesisch, keine langen Erklärungen. Du siehst das Ergebnis, nicht den Prozess.",
  },
  {
    q: "Muss ich die Texte für meine Website selbst schreiben?",
    a: "Nein. Wenn du die Grundinfos zu deinem Betrieb teilst, formuliere ich die Texte für dich: verständlich, überzeugend und SEO-optimiert auf Bamberg ausgerichtet. Du kannst natürlich auch eigene Inhalte einbringen.",
  },
  {
    q: "Kann meine Website auch Touristen ansprechen?",
    a: "Absolut. Bamberg zieht jährlich Hunderttausende Besucher an, für Gastronomie, Hotels und Läden in der Innenstadt ist das eine riesige Chance. Ich baue Websites, die sowohl auf Deutsch als auch für internationale Suchanfragen gut auffindbar sind.",
  },
] as const;

const standortBlock = (
  <section
    aria-labelledby="ba-standort-h"
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
                id="ba-standort-h"
                className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl text-balance"
              >
                Webdesign für die{" "}
                <em className="font-display font-extrabold not-italic text-gradient">
                  Weltkulturerbe-Stadt Bamberg.
                </em>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted text-pretty md:text-lg">
                Bamberg ist mehr als eine schöne Altstadt. Es ist ein hart umkämpfter lokaler
                Markt. Handwerker, Gastronomen, Friseure und Dienstleister konkurrieren täglich
                um die ersten Plätze bei Google. Wer bei &quot;Dachdecker Bamberg&quot; oder
                &quot;Restaurant Bamberg Innenstadt&quot; nicht sichtbar ist, verliert Aufträge
                an Wettbewerber, täglich.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-pink/70">
                Tourismus als Wachstumschance
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl text-balance">
                Hunderttausende Besucher. Jedes Jahr. Findest du sie?
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
                Bamberg zieht jährlich über eine Million Übernachtungsgäste und Tagestouristen
                an. Restaurants, Cafés, Läden und Attraktionen werden über Google Maps und
                Websuche gebucht, meist noch vor der Anreise. Eine lokal optimierte Website
                erschließt dir diesen Kundenstrom ohne Werbebudget, dauerhaft.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default function WebdesignBambergPage() {
  return (
    <CityLandingPage
      city="Bamberg"
      slug="webdesign-bamberg"
      region="Oberfranken"
      heroSubtitle="Webdesign Bamberg: professionelle Webseiten für Handwerker, Gastronomen und KMUs in Bamberg, Forchheim und ganz Oberfranken. Lokal gefunden werden, ohne Agentur-Bürokratie."
      pitchText="Ich bin Simon. Kein Callcenter, kein anonymes Studio, keine Weitervermittlung. Bamberg ist eine der bekanntesten Städte Bayerns, und genau deshalb ist die Konkurrenz bei Google groß. Ich baue Websites, die in Bamberg gefunden werden: für Handwerker aus dem Landkreis Bamberg, Gastronomen in der Innenstadt und Gärtnerstadt sowie Dienstleister aus der ganzen Region Oberfranken."
      faq={faq}
      cityBlock={standortBlock}
      areaServedExtra={[
        { name: "Forchheim" },
        { name: "Erlangen" },
        { name: "Lichtenfels" },
        { name: "Kronach" },
        { name: "Landkreis Bamberg" },
      ]}
    />
  );
}
