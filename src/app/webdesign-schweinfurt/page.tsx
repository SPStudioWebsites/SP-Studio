import type { Metadata } from "next";
import { CityLandingPage } from "@/components/sections/city-landing";

export const metadata: Metadata = {
  title: "Webdesign Schweinfurt | Schnell-Sichtbar.de",
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
    description: "Professionelle Webseiten für Betriebe in Schweinfurt & Umgebung. Jetzt kostenlos beraten lassen.",
    type: "website",
    locale: "de_DE",
    siteName: "Schnell-Sichtbar.de",
  },
  alternates: {
    canonical: "https://schnell-sichtbar.de/webdesign-schweinfurt",
  },
};

const faq = [
  {
    q: "Arbeitet ihr auch für Betriebe in Schweinfurt?",
    a: "Ja — wir betreuen Kunden aus ganz Unterfranken, darunter auch Betriebe in Schweinfurt und dem Landkreis Schweinfurt. Beratungsgespräche können telefonisch, per Video oder auf Wunsch auch persönlich stattfinden.",
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
    q: "Was bringt mir Webdesign in Schweinfurt konkret?",
    a: "Eine professionelle Website erhöht deine Sichtbarkeit bei Google, wenn Kunden in Schweinfurt nach deiner Leistung suchen. Kombiniert mit Local SEO und einem gepflegten Google-Unternehmensprofil bringt das nachweislich mehr Anfragen — ohne Werbebudget.",
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

export default function WebdesignSchweinfurtPage() {
  return (
    <CityLandingPage
      city="Schweinfurt"
      slug="webdesign-schweinfurt"
      heroSubtitle="Ich erstelle professionelle Webseiten für Handwerker, Dienstleister und KMUs in Schweinfurt und Umgebung — schnell, persönlich und ohne Agentur-Bürokratie."
      pitchText="Ich bin Simon — kein Praktikant, kein Callcenter, keine Weitervermittlung. Wenn du eine Frage hast, schreibst du mir direkt. Ich kenne Unterfranken, ich kenne die Betriebe hier, und ich baue Websites, die für echte Kunden in Schweinfurt und Umgebung funktionieren."
      faq={faq}
    />
  );
}
