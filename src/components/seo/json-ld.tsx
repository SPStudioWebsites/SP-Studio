import { brand, process, faq } from "@/lib/content";

const BASE = "https://schnell-sichtbar.de";

const localBusiness = {
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
    { "@type": "City", name: "Schweinfurt" },
    { "@type": "City", name: "Bamberg" },
    { "@type": "City", name: "Würzburg" },
    { "@type": "City", name: "Ebern" },
    { "@type": "City", name: "Hofheim in Unterfranken" },
    { "@type": "City", name: "Königsberg in Bayern" },
    { "@type": "City", name: "Zeil am Main" },
    { "@type": "City", name: "Eltmann" },
    { "@type": "AdministrativeArea", name: "Franken" },
    { "@type": "AdministrativeArea", name: "Unterfranken" },
    { "@type": "AdministrativeArea", name: "Oberfranken" },
    { "@type": "AdministrativeArea", name: "Haßberge" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  description: "Webdesign Franken für lokale Unternehmen – professionelle Webseiten für Handwerker, Restaurants, Frisöre & Salons in der Region.",
  priceRange: "€€",
  sameAs: ["https://maps.app.goo.gl/usAdLbggi5VHqWrR7"],
  founder: { "@id": `${BASE}/#person` },
};

const person = {
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
  sameAs: [
    "https://www.linkedin.com/in/simon-poerschke",
    "https://www.xing.com/profile/Simon_Poerschke",
    "https://www.instagram.com/schnellsichtbar",
    "https://www.facebook.com/schnellsichtbar",
  ],
};

const website = {
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  url: BASE,
  name: "Schnell-Sichtbar.de",
  description: "Webdesign für Handwerker, Gastronomen und Salons in Franken",
  publisher: { "@id": `${BASE}/#person` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const howTo = {
  "@type": "HowTo",
  "@id": `${BASE}/#process`,
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

const faqPage = {
  "@type": "FAQPage",
  "@id": `${BASE}/#faq`,
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [localBusiness, person, website, howTo, faqPage],
};

const jsonLd = JSON.stringify(schemaGraph).replace(/</g, "\\u003c");

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}
