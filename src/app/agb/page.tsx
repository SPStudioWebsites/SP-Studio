import { LegalLayout } from "@/components/layout/legal-layout";
import { agb } from "@/lib/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  robots: { index: false },
};

export default function AGBPage() {
  const d = agb;
  return (
    <LegalLayout title={d.title}>
      <p>
        Stand: {d.stand} · {d.firma}
      </p>

      {d.paragraphen.map((p) => (
        <div key={p.titel}>
          <h2>{p.titel}</h2>
          <p>{p.text}</p>
        </div>
      ))}

      <p>
        Bei Fragen:{" "}
        <a href={`mailto:${d.kontaktEmail}`}>{d.kontaktEmail}</a>
      </p>
    </LegalLayout>
  );
}
