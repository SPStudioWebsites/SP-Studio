import type { Metadata } from "next";
import { CityLandingPage } from "@/components/sections/city-landing";

export const metadata: Metadata = {
  title: "Webdesign Haßfurt | Schnell-Sichtbar.de",
  description:
    "Webdesign Haßfurt – Professionelle Webseiten für Handwerker, Dienstleister & KMUs in Haßfurt & den Haßbergen. Lokal, schnell, Festpreis ab 399 €. Jetzt kostenlos beraten lassen.",
  keywords: [
    "Webdesign Haßfurt",
    "Webagentur Haßfurt",
    "Website erstellen Haßfurt",
    "Homepage Haßfurt",
    "Local SEO Haßfurt",
    "Webdesign Haßberge",
  ],
  openGraph: {
    title: "Webdesign Haßfurt | Schnell-Sichtbar.de",
    description: "Professionelle Webseiten für Betriebe in Haßfurt & den Haßbergen. Jetzt kostenlos beraten lassen.",
    type: "website",
    locale: "de_DE",
    siteName: "Schnell-Sichtbar.de",
  },
  alternates: {
    canonical: "https://schnell-sichtbar.de/webdesign-hassfurt",
  },
};

const faq = [
  {
    q: "Arbeitet ihr auch für Betriebe in Haßfurt?",
    a: "Ja — wir sind direkt aus Haßfurt und kennen die Region wie unsere Westentasche. Beratungsgespräche können telefonisch, per Video oder persönlich bei dir vor Ort stattfinden.",
  },
  {
    q: "Was kostet eine Website für einen Betrieb in Haßfurt?",
    a: "Eine professionelle Website beginnt ab 399 € einmalig — inklusive Design, Entwicklung und SEO-Grundlagen. Für Betriebe aus Haßfurt und den Haßbergen gibt es klare Festpreise, bevor auch nur eine Zeile Code geschrieben wird.",
  },
  {
    q: "Wie lange dauert es, bis meine neue Website online ist?",
    a: "Im Durchschnitt 14 Tage — vom ersten Gespräch bis zum Launch. Bei größeren Projekten planen wir das gemeinsam realistisch. Es gibt auch einen Express-Slot für 7 Tage Lieferzeit.",
  },
  {
    q: "Was bringt mir Webdesign in Haßfurt konkret?",
    a: "Eine professionelle Website erhöht deine Sichtbarkeit bei Google, wenn Kunden in Haßfurt und dem Landkreis Haßberge nach deiner Leistung suchen. Kombiniert mit Local SEO und einem gepflegten Google-Unternehmensprofil bringt das nachweislich mehr Anfragen — ohne Werbebudget.",
  },
  {
    q: "Brauche ich technisches Wissen?",
    a: "Kein bisschen. Du lieferst die Infos zu deinem Betrieb, ich kümmere mich um den Rest. Kein Fachchinesisch, keine langen Erklärungen — du siehst das Ergebnis, nicht den Prozess.",
  },
  {
    q: "Muss ich die Texte für meine Website selbst schreiben?",
    a: "Nein. Wenn du die Grundinfos zu deinem Betrieb teilst, formuliere ich die Texte für dich — verständlich, überzeugend und SEO-optimiert auf Haßfurt ausgerichtet. Du kannst natürlich auch eigene Inhalte einbringen.",
  },
] as const;

export default function WebdesignHassfurtPage() {
  return (
    <CityLandingPage
      city="Haßfurt"
      slug="webdesign-hassfurt"
      heroSubtitle="Ich erstelle professionelle Webseiten für Handwerker, Dienstleister und KMUs in Haßfurt und den Haßbergen — schnell, persönlich und direkt aus der Region."
      pitchText="Ich bin Simon — und ich komme aus der Region Haßfurt. Kein Praktikant, kein Callcenter, keine Weitervermittlung. Wenn du eine Frage hast, schreibst du mir direkt. Ich kenne die Betriebe hier, ich kenne die Region, und ich baue Websites, die für echte Kunden in Haßfurt und Umgebung funktionieren."
      faq={faq}
    />
  );
}
