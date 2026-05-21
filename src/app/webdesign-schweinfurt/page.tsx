import type { Metadata } from "next";
import { CityLandingPage } from "@/components/sections/city-landing";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Webdesign Schweinfurt",
  description:
    "Webdesign Schweinfurt: Professionelle Webseiten für Handwerker, Dienstleister und KMUs in Schweinfurt und Unterfranken. Lokal optimiert, Festpreis ab 399 Euro, fertig in 14 Tagen. Jetzt kostenlos beraten lassen.",
  keywords: [
    "Webdesign Schweinfurt",
    "Webagentur Schweinfurt",
    "Website erstellen Schweinfurt",
    "Homepage Schweinfurt",
    "Local SEO Schweinfurt",
    "Webdesign Unterfranken",
    "Webseite Schweinfurt",
    "SEO Schweinfurt",
    "Webdesign Franken",
  ],
  openGraph: {
    title: "Webdesign Schweinfurt | Schnell-Sichtbar.de",
    description:
      "Professionelle Webseiten für Betriebe in Schweinfurt und Unterfranken. Festpreis ab 399 Euro. Fertig in 14 Tagen. Jetzt kostenlos beraten lassen.",
    type: "website",
    locale: "de_DE",
    siteName: "Schnell-Sichtbar.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Schweinfurt | Schnell-Sichtbar.de",
    description:
      "Professionelle Webseiten für Betriebe in Schweinfurt und Unterfranken. Festpreis ab 399 Euro. Fertig in 14 Tagen.",
  },
  alternates: {
    canonical: "https://schnell-sichtbar.de/webdesign-schweinfurt",
  },
};

const faq = [
  {
    q: "Kommt ihr auch persönlich nach Schweinfurt?",
    a: "Ja, auf Wunsch fahre ich für das Erstgespräch direkt zu dir nach Schweinfurt. Die meisten Projekte laufen reibungslos remote, persönliche Termine vor Ort sind aber jederzeit möglich.",
  },
  {
    q: "Was kostet eine Website für einen Betrieb in Schweinfurt?",
    a: "Eine professionelle Website beginnt ab 399 Euro einmalig, inklusive Design, Entwicklung und SEO-Grundlagen. Für lokale Betriebe in Schweinfurt gibt es klare Festpreise, bevor auch nur eine Zeile Code geschrieben wird. Keine versteckten Folgekosten.",
  },
  {
    q: "Wie lange dauert es, bis meine neue Website online ist?",
    a: "Im Durchschnitt 14 Tage, vom ersten Gespräch bis zum Launch. Bei größeren Projekten planen wir das gemeinsam realistisch. Es gibt auch einen Express-Slot für 7 Tage Lieferzeit.",
  },
  {
    q: "Warum ist lokales Webdesign für Schweinfurter Betriebe so wichtig?",
    a: "Schweinfurt hat rund 54.000 Einwohner und ein dichtes Netz an lokalen Betrieben, die täglich um Sichtbarkeit bei Google konkurrieren. Wer bei 'Elektriker Schweinfurt' oder 'Friseur Schweinfurt' nicht auf Seite 1 erscheint, verliert diese Kunden dauerhaft an Mitbewerber, die es besser gemacht haben.",
  },
  {
    q: "Ist eine Website auch für Industrie- und Handwerksbetriebe in Schweinfurt sinnvoll?",
    a: "Absolut. Schweinfurt ist eine klassische Industriestadt mit starkem Mittelstand. Auch Zulieferer, Handwerksbetriebe und technische Dienstleister werden heute zuerst online gesucht. Eine professionelle Website mit klaren Leistungsseiten und lokalem SEO bringt Anfragen von Geschäftskunden und Privatkunden gleichermaßen.",
  },
  {
    q: "Brauche ich technisches Wissen?",
    a: "Kein bisschen. Du lieferst die Infos zu deinem Betrieb, ich kümmere mich um den Rest. Kein Fachchinesisch, keine langen Erklärungen. Du siehst das Ergebnis, nicht den Prozess.",
  },
  {
    q: "Muss ich die Texte für meine Website selbst schreiben?",
    a: "Nein. Wenn du die Grundinfos zu deinem Betrieb teilst, formuliere ich die Texte für dich: verständlich, überzeugend und SEO-optimiert auf Schweinfurt ausgerichtet. Du kannst natürlich auch eigene Inhalte einbringen.",
  },
] as const;

const wirtschaftsstandortBlock = (
  <section
    aria-labelledby="sw-wirtschaft-h"
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
                id="sw-wirtschaft-h"
                className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl text-balance"
              >
                Webdesign für den{" "}
                <em className="font-display font-extrabold not-italic text-gradient">
                  Industriestandort Schweinfurt.
                </em>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted text-pretty md:text-lg">
                Schweinfurt ist geprägt von Industrie, Mittelstand und einem dichten Netz
                an Handwerks- und Dienstleistungsbetrieben. Ob Innenstadt, Gewerbegebiet
                Nord oder Niederwerrn: Wer bei Google sichtbar ist, bekommt die Anfragen.
                Wer es nicht ist, verliert sie an den Mitbewerber, der eine bessere Website
                hat. In einer Stadt mit so vielen aktiven Betrieben fällt die Entscheidung
                oft allein anhand der Google-Suche.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-pink/70">
                Handwerk und KMU digital sichtbar
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl text-balance">
                Deine Kunden suchen dich schon. Finden sie dich auch?
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
                75 Prozent der Menschen suchen einen lokalen Betrieb zuerst online, bevor
                sie anrufen. Für Elektriker, Sanitärbetriebe, Friseure und Dienstleister
                in Schweinfurt bedeutet das: Wer keine professionelle Website mit lokalem
                SEO hat, verschenkt täglich Aufträge. Eine einmalige Investition in eine
                gute Website bringt dauerhaft neue Kunden, ohne laufende Werbekosten.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default function WebdesignSchweinfurtPage() {
  return (
    <CityLandingPage
      city="Schweinfurt"
      slug="webdesign-schweinfurt"
      region="Unterfranken"
      heroSubtitle="Webdesign Schweinfurt: professionelle Webseiten für Handwerker, Dienstleister und KMUs in Schweinfurt und Unterfranken. Lokal gefunden werden, ohne Agentur-Aufwand."
      pitchText="Ich bin Simon. Kein Praktikant, kein Callcenter, keine Weitervermittlung. Schweinfurt ist eine der aktivsten Mittelstandsregionen in Unterfranken, und genau deshalb ist Sichtbarkeit bei Google hier entscheidend. Ich baue Websites, die in Schweinfurt ranken: für Handwerksbetriebe aus dem Gewerbegebiet, Dienstleister aus der Innenstadt und KMUs aus dem gesamten Landkreis Schweinfurt."
      faq={faq}
      cityBlock={wirtschaftsstandortBlock}
      areaServedExtra={[
        { name: "Haßfurt" },
        { name: "Bad Kissingen" },
        { name: "Gerolzhofen" },
        { name: "Volkach" },
        { name: "Landkreis Schweinfurt" },
      ]}
    />
  );
}
