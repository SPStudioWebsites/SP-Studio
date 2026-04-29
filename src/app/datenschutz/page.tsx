import { LegalLayout } from "@/components/layout/legal-layout";
import { datenschutz } from "@/lib/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false },
};

export default function DatenschutzPage() {
  const d = datenschutz;
  return (
    <LegalLayout title={d.title}>
      <h2>1. Datenschutz auf einen Blick</h2>
      <p>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
        personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
      </p>

      <h2>2. Verantwortlicher</h2>
      <p>
        {d.verantwortlicher.name}<br />
        {d.verantwortlicher.street}<br />
        {d.verantwortlicher.zip} {d.verantwortlicher.city}<br />
        Telefon: <a href={`tel:${d.verantwortlicher.telefonHref}`}>{d.verantwortlicher.telefon}</a><br />
        E-Mail: <a href={`mailto:${d.verantwortlicher.email}`}>{d.verantwortlicher.email}</a>
      </p>

      <h2>3. Cookies</h2>
      <p>{d.cookieHinweis}</p>

      <h2>4. Google Analytics</h2>
      <p>{d.googleAnalyticsHinweis}</p>

      <h2>5. Kontaktformular</h2>
      <p>{d.kontaktformularHinweis}</p>

      <h2>6. Hosting</h2>
      <p>
        {d.hosting}{" "}
        Details:{" "}
        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
          vercel.com/legal/privacy-policy
        </a>
      </p>

      <h2>7. Ihre Rechte</h2>
      <p>
        Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer gespeicherten
        personenbezogenen Daten. Kontakt:{" "}
        <a href={`mailto:${d.verantwortlicher.email}`}>{d.verantwortlicher.email}</a>
      </p>

      <h2>8. Beschwerderecht</h2>
      <p>{d.aufsichtsbehoerde}</p>
    </LegalLayout>
  );
}
