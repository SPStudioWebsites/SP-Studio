import type { Metadata } from "next";
import { CityLandingPage } from "@/components/sections/city-landing";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  // No domain suffix here — layout template appends "· Schnell-Sichtbar.de"
  title: "Webdesign Schweinfurt",
  description:
    "Webdesign Schweinfurt – Professionelle Webseiten für Handwerker, Dienstleister & KMUs. Lokal, schnell, ohne Agentur-Bürokratie. Festpreis ab 399 €. Jetzt kostenlos beraten lassen.",
  keywords: [
    "Webdesign Schweinfurt",
    "Webagentur Schweinfurt",
    "Website erstellen Schweinfurt",
    "Homepage Schweinfurt",
    "Local SEO Schweinfurt",
    "Webdesign Unterfranken",
  ],
  openGraph: {
    title: "Webdesign Schweinfurt | Schnell-Sichtbar.de",
    description:
      "Professionelle Webseiten für Betriebe in Schweinfurt & Umgebung. Jetzt kostenlos beraten lassen.",
    type: "website",
    locale: "de_DE",
    siteName: "Schnell-Sichtbar.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Schweinfurt | Schnell-Sichtbar.de",
    description:
      "Professionelle Webseiten für Betriebe in Schweinfurt & Umgebung. Festpreis ab 399 €. Fertig in 14 Tagen.",
  },
  alternates: {
    canonical: "https://schnell-sichtbar.de/webdesign-schweinfurt",
  },
};

const faq = [
  {
    q: "Kommt ihr auch persönlich nach Schweinfurt?",
    a: "Ja, auf Wunsch fahre ich für das Erstgespräch direkt zu dir. Die meisten Projekte laufen remote, persönliche Termine sind aber jederzeit möglich.",
  },
  {
    q: "Was kostet eine Website für einen Betrieb in Schweinfurt?",
    a: "Eine professionelle Website beginnt ab 399 € einmalig — inklusive Design, Entwicklung und SEO-Grundlagen. Für lokale Betriebe in Schweinfurt gibt es klare Festpreise, bevor auch nur eine Zeile Code geschrieben wird.",
  },
  {
    q: "Wie lange dauert es, bis meine neue Website online ist?",
    a: "Im Durchschnitt 14 Tage — vom ersten Gespräch bis zum Launch. Bei größeren Projekten planen wir das gemeinsam realistisch. Es gibt auch einen Express-Slot für 7 Tage Lieferzeit.",
  },
  {
    q: "Warum ist lokales Webdesign für Schweinfurter Betriebe wichtig?",
    a: "Weil deine Kunden lokal suchen. Wer 'Elektriker Schweinfurt' googelt, entscheidet anhand der ersten drei Ergebnisse. Eine lokal optimierte Website bringt dich genau dort hin — ohne Werbebudget, dauerhaft.",
  },
  {
    q: "Brauche ich technisches Wissen?",
    a: "Kein bisschen. Du lieferst die Infos zu deinem Betrieb, ich kümmere mich um den Rest. Kein Fachchinesisch, keine langen Erklärungen — du siehst das Ergebnis, nicht den Prozess.",
  },
  {
    q: "Muss ich die Texte für meine Website selbst schreiben?",
    a: "Nein. Wenn du die Grundinfos zu deinem Betrieb teilst, formuliere ich die Texte für dich — verständlich, überzeugend und SEO-optimiert auf Schweinfurt ausgerichtet. Du kannst natürlich auch eigene Inhalte einbringen.",
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
          <div className="relative max-w-3xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-violet/70">
              Standort
            </p>
            <h2
              id="sw-wirtschaft-h"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl text-balance"
            >
              Webdesign für den Wirtschaftsstandort{" "}
              <em className="font-display font-extrabold not-italic text-gradient">Schweinfurt.</em>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted text-pretty md:text-lg">
              Schweinfurt ist geprägt von Mittelstand, Handwerk und einem dichten Netz an lokalen
              Dienstleistern. Genau für diese Betriebe baue ich Websites — klar, schnell, lokal
              auffindbar. Ob Innenstadt, Gewerbegebiet Nord oder Niederwerrn: Wer bei Google
              sichtbar ist, bekommt die Anfragen. Wer es nicht ist, verliert sie an den
              Wettbewerber der es gemacht hat.
            </p>
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
      heroSubtitle="Ich erstelle professionelle Webseiten für Handwerker, Dienstleister und KMUs in Schweinfurt und Umgebung — schnell, persönlich und ohne Agentur-Bürokratie."
      pitchText="Ich bin Simon — kein Praktikant, kein Callcenter, keine Weitervermittlung. Wenn du eine Frage hast, schreibst du mir direkt. Ich komme aus der Region Haßberge und fahre auf Wunsch persönlich nach Schweinfurt. Ich baue Websites, die für echte Kunden in Schweinfurt und Umgebung funktionieren."
      faq={faq}
      cityBlock={wirtschaftsstandortBlock}
    />
  );
}
