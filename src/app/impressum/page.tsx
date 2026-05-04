import { LegalLayout } from "@/components/layout/legal-layout";
import { impressum } from "@/lib/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  const d = impressum;
  return (
    <LegalLayout title={d.title}>
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        {d.betreiber.name}<br />
        {d.betreiber.street}<br />
        {d.betreiber.zip} {d.betreiber.city}
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href={`tel:${d.kontakt.telefonHref}`}>{d.kontakt.telefon}</a><br />
        E-Mail: <a href={`mailto:${d.kontakt.email}`}>{d.kontakt.email}</a>
      </p>

      <h2>Umsatzsteuer</h2>
      <p>{d.kleinunternehmer}</p>

      <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
      <p>
        {d.beruf}<br />
        Zuständige Aufsichtsbehörde: {d.behoerde}.
      </p>

      <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
      <p>
        {d.verantwortlicher.name}<br />
        {d.verantwortlicher.street}<br />
        {d.verantwortlicher.zip} {d.verantwortlicher.city}
      </p>

      <h2>Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
        . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
        nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
        Informationen zu überwachen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
        Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
        verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
        dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung und Verbreitung bedürfen
        der schriftlichen Zustimmung des jeweiligen Autors.
      </p>
    </LegalLayout>
  );
}
