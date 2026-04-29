import { brand, faq, process } from "@/lib/content";

const BASE = "https://schnell-sichtbar.de";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${BASE}/#business`,
  name: brand.name,
  url: BASE,
  telephone: brand.phone,
  email: brand.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.address.street,
    addressLocality: brand.address.city,
    postalCode: brand.address.zip,
    addressRegion: "Bayern",
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "City", name: "Haßfurt" },
    { "@type": "City", name: "Ebern" },
    { "@type": "City", name: "Hofheim in Unterfranken" },
    { "@type": "City", name: "Königsberg in Bayern" },
    { "@type": "City", name: "Zeil am Main" },
    { "@type": "City", name: "Eltmann" },
    { "@type": "AdministrativeArea", name: "Haßberge" },
    { "@type": "AdministrativeArea", name: "Unterfranken" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  description: brand.tagline,
  priceRange: "€€",
  founder: { "@id": `${BASE}/#person` },
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE}/#person`,
  name: "Simon Pörschke",
  jobTitle: "Webdesigner & Local SEO Spezialist",
  worksFor: { "@id": `${BASE}/#business` },
  url: BASE,
  address: {
    "@type": "PostalAddress",
    addressLocality: brand.address.city,
    postalCode: brand.address.zip,
    addressRegion: "Unterfranken",
    addressCountry: "DE",
  },
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const howTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "In vier Schritten zur fertigen Website",
  description: "Klar strukturiert, mit echten Zeitfenstern. Ohne Buzzwords.",
  step: process.map((step) => ({
    "@type": "HowToStep",
    position: Number(step.n),
    name: step.title,
    text: step.desc,
    itemListElement: step.points.map((p) => ({
      "@type": "HowToDirection",
      text: p,
    })),
  })),
};

const schemas = [localBusiness, person, faqPage, howTo];

export function JsonLd() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
