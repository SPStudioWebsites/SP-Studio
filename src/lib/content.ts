export const brand = {
  name: "Schnell-Sichtbar.de",
  short: "Schnell-Sichtbar",
  tagline: "Webseiten, die wirken. Aus der Region Haßberge.",
  region: "Region Haßberge",
  address: {
    street: "Kahlberg 3",
    zip: "97531",
    city: "Theres",
  },
  email: "kontakt@schnell-sichtbar.de",
  phone: "+4917622783639",
  phoneDisplay: "0176/22783639",
  hours: "Mo–Fr 9:00 – 18:00",
};

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Branchen", href: "#branchen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Über mich", href: "#ueber-uns" },
  { label: "FAQ", href: "#faq" },
  { label: "Leistungen", href: "#leistungen" },
] as const;

export const hero = {
  eyebrow: "Webagentur · Region Franken",
  title: ["Schnell sichtbar.", "*Sofort* überzeugend."],
  subtitle:
    "Wir bauen Webseiten für Frisöre, Restaurants, Handwerker und KMUs in Haßfurt, Ebern, Hofheim und Umgebung — schnell, persönlich, ohne Agentur-Bürokratie.",
  ctaPrimary: "Kostenloses Erstgespräch",
  ctaSecondary: "Beispiele ansehen",
  trust: [
    { value: "Region", label: "Haßberge" },
    { value: "ø 14 Tage", label: "Lieferzeit" },
    { value: "inklusive", label: "Hosting & Pflege" },
  ],
};

export const trustPills = [
  "Salon Mara",
  "Café Linde",
  "Bäckerei Eger",
  "Praxis Dr. Roth",
  "Schreinerei Vogel",
  "Yoga Lina",
  "Trattoria Sorrento",
  "Autohaus Becker",
  "Hotel Adler",
  "Floristik Sommer",
  "Physio Vital",
  "Pizzeria Rustica",
];

export const services = [
  {
    icon: "Layout",
    title: "Webdesign & Entwicklung",
    desc: "Moderne, blitzschnelle Webseiten — handgebaut, responsive, suchmaschinenfreundlich.",
    bullets: ["Maßgeschneidertes Design", "Mobile-first", "Schneller Pageload"],
  },
  {
    icon: "Search",
    title: "Local SEO",
    desc: "Damit dich Kund:innen aus Haßfurt, Ebern und Umgebung wirklich finden — auf Google und in Maps.",
    bullets: ["Keyword-Strategie", "Google-Optimierung", "Lokale Sichtbarkeit"],
  },
  {
    icon: "Calendar",
    title: "Online-Buchung",
    desc: "Termine direkt über die Website — für Salons, Praxen und Studios.",
    bullets: ["24/7 buchbar", "Kalender-Sync", "Erinnerungs-Mails"],
  },
  {
    icon: "MapPin",
    title: "Google Unternehmensprofil",
    desc: "Komplett eingerichtet, gepflegt und optimiert. Mit Bewertungs-Workflow.",
    bullets: ["Setup & Verifizierung", "Foto-Pflege", "Bewertungs-Strategie"],
  },
  {
    icon: "Server",
    title: "Hosting & Pflege",
    desc: "Sicheres Hosting in Deutschland, monatliche Updates, Ansprechpartner aus der Region.",
    bullets: ["DSGVO-konform", "Backup täglich", "Support per Telefon"],
  },
  {
    icon: "Sparkles",
    title: "Branding-Light",
    desc: "Logo-Refresh, klare Farbwelt, Visitenkarten — damit alles aus einem Guss wirkt.",
    bullets: ["Logo & Wordmark", "Farbsystem", "Print-Templates"],
  },
] as const;

export const industries = [
  {
    icon: "Scissors",
    name: "Frisöre & Salons",
    text: "Online-Buchung, Stylisten-Profile, Vorher-Nachher-Galerie.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    icon: "UtensilsCrossed",
    name: "Restaurants & Cafés",
    text: "Speisekarte, Reservierung, Click & Collect.",
    span: "lg:col-span-2",
  },
  {
    icon: "Hammer",
    name: "Handwerk",
    text: "Referenzen, Angebotsanfrage, Notfallkontakt.",
    span: "lg:col-span-2",
  },
  {
    icon: "Stethoscope",
    name: "Praxen & Therapeut:innen",
    text: "Online-Termine, Team-Vorstellung, Sprechzeiten.",
    span: "lg:col-span-2",
  },
  {
    icon: "Dumbbell",
    name: "Fitness- & Yoga-Studios",
    text: "Kursplan, Probestunde, Mitgliedschaft online.",
    span: "lg:col-span-2",
  },
  {
    icon: "Store",
    name: "Sonstige KMUs",
    text: "Vom Hofladen bis zum Steuerbüro — wir machen euch sichtbar.",
    span: "lg:col-span-2",
  },
] as const;

export const portfolio = [
  {
    name: "Salon Mara",
    branche: "Friseur",
    location: "Haßfurt",
    tags: ["Webdesign", "Online-Buchung", "Local SEO"],
    metric: "Beispiel-Ziel: + 240 % Anfragen",
    accent: "pink",
    mock: {
      brand: "MARA",
      headline: "Cut. Color. Confidence.",
      sub: "Termin in 30 Sekunden online buchen",
      cta: "Termin buchen",
      tone: "warm",
    },
  },
  {
    name: "Trattoria Sorrento",
    branche: "Restaurant",
    location: "Ebern",
    tags: ["Webdesign", "Reservierung", "Speisekarte"],
    metric: "Beispiel-Ziel: + 50 Reservierungen / Woche",
    accent: "violet",
    mock: {
      brand: "Sorrento",
      headline: "Italienisch. Familiär. Seit 1998.",
      sub: "Tisch reservieren — heute Abend ab 18 Uhr",
      cta: "Tisch reservieren",
      tone: "italian",
    },
  },
  {
    name: "Schreinerei Vogel",
    branche: "Handwerk",
    location: "Hofheim",
    tags: ["Webdesign", "Referenzen", "SEO"],
    metric: "Beispiel-Ziel: 14 Tage Build",
    accent: "pink",
    mock: {
      brand: "VOGEL",
      headline: "Möbel mit Charakter.",
      sub: "Maßanfertigungen aus Massivholz — direkt aus Unterfranken",
      cta: "Beratungstermin",
      tone: "wood",
    },
  },
  {
    name: "Bewegungsraum Lina",
    branche: "Yoga-Studio",
    location: "Königsberg",
    tags: ["Webdesign", "Kursplan", "Mitgliedschaft"],
    metric: "Beispiel-Ziel: 30 % mehr Drop-ins",
    accent: "violet",
    mock: {
      brand: "Bewegungsraum",
      headline: "Atmen. Loslassen. Ankommen.",
      sub: "Probestunde diese Woche kostenlos",
      cta: "Probestunde buchen",
      tone: "soft",
    },
  },
] as const;

export const process = [
  {
    n: "01",
    title: "Erstgespräch",
    desc: "Kostenlos, 30 Minuten — telefonisch oder bei dir vor Ort. Wir hören zu, fragen nach und schicken dir ein klares Angebot.",
    points: ["Bedarfsanalyse", "Festpreis-Angebot", "Klarer Zeitplan"],
  },
  {
    n: "02",
    title: "Konzept & Design",
    desc: "Innerhalb von 5 Tagen bekommst du ein Designvorschlag — Wireframe, Farben, Typo, Mockups. Mit Feedback-Schleifen.",
    points: ["Wireframes", "Designvorschläge", "Feedback-Runden"],
  },
  {
    n: "03",
    title: "Entwicklung",
    desc: "Wir bauen sauber: schnell, mobil-optimiert, suchmaschinenfreundlich. Keine Baukasten-Software. Kein Wordpress-Plugin-Chaos.",
    points: ["Sauberer Code", "Performance & SEO", "Inhaltspflege geschult"],
  },
  {
    n: "04",
    title: "Launch & Betreuung",
    desc: "Wir gehen gemeinsam live, schulen dich ein und kümmern uns auf Wunsch um Hosting, Pflege und Updates — solange du willst.",
    points: ["Go-Live", "Schulung & Übergabe", "Hosting & Support"],
  },
] as const;

export const about = {
  eyebrow: "Über mich",
  title: ["Aus Haßfurt.", "Für die *Region*."],
  body: [
    "Die meisten Webdesigner haben noch nie eine Anzeige für einen Schreiner geschaltet. Ich schon.",
    "Ich bin Simon und arbeite bereits seit über 3 Jahren im Marketing. Für Handwerksbetriebe und lokale Dienstleister aus der Region, die nicht wussten, wie sie online Kunden gewinnen sollen. Ich habe ihre Social-Media-Auftritte aufgebaut, Kampagnen geschaltet, Reichweite aufgebaut, Webseiten erstellt und dabei eines gelernt:",
    "Genau das ist der Unterschied bei Schnell-Sichtbar.de. Ich designe keine Seiten, die gut aussehen und dann nichts tun. Ich baue Websites, die auf echten Marketingprinzipien basieren: mit klarer Botschaft, lokalem SEO und einem Aufbau, der Besucher zu Kunden macht.",
    "Und weil ich weiß, wie viel Zeit du als Unternehmer nicht hast, mache ich das schnell und ohne Agentur-Umweg. Du hast eine Frage? Du schreibst mir. Nicht einem Praktikanten.",
  ],
  quote: "Aus der Region Unterfranken. Für Betriebe, die online endlich sichtbar sein wollen.",
  quoteAuthor: "Simon, Inhaber Schnell-Sichtbar.de",
  stats: [
    { value: "3+", label: "Jahre Erfahrung" },
    { value: "100 %", label: "aus der Region" },
  ],
  cities: [
    { name: "Haßfurt", x: 50, y: 55 },
    { name: "Ebern", x: 35, y: 30 },
    { name: "Hofheim", x: 65, y: 25 },
    { name: "Königsberg", x: 25, y: 50 },
    { name: "Zeil a. Main", x: 70, y: 60 },
    { name: "Eltmann", x: 60, y: 75 },
  ],
};

export const testimonials = {
  featured: {
    quote:
      "So könnte eine Stimme klingen, die viele unserer Wunschkund:innen formulieren würden — auf der ganzen Linie persönlich und ehrlich.",
    author: "Beispiel-Stimme",
    role: "Inhaberin · Salon (Beispiel)",
    location: "Haßfurt",
  },
  list: [
    {
      quote:
        "Endlich eine Website, die wir selbst pflegen können. Die Buchungen kommen jetzt direkt rein — ohne Telefon-Pingpong.",
      author: "Andrea M. (Beispiel)",
      role: "Salon-Inhaberin",
      location: "Haßfurt",
    },
    {
      quote:
        "Persönlich, schnell, fair. Wir hatten in 14 Tagen eine Seite, die wirklich aussieht wie unser Restaurant.",
      author: "Marco S. (Beispiel)",
      role: "Restaurant",
      location: "Ebern",
    },
    {
      quote:
        "Die Anfragen über die Website sind explodiert. Das Beste: wenn wir was brauchen, sind sie sofort am Telefon.",
      author: "Heinrich V. (Beispiel)",
      role: "Schreinermeister",
      location: "Hofheim",
    },
    {
      quote:
        "Kein Schnickschnack, kein Englisch-Marketing-Kauderwelsch. Einfach gute Arbeit aus der Region.",
      author: "Lina K. (Beispiel)",
      role: "Yoga-Lehrerin",
      location: "Königsberg",
    },
    {
      quote:
        "Unser Google-Profil hat sich verdoppelt im Ranking. Wir hätten das nie alleine hinbekommen.",
      author: "Dr. T. Roth (Beispiel)",
      role: "Praxis",
      location: "Zeil",
    },
    {
      quote:
        "Beratung wie vom Nachbarn — Ergebnis wie aus der Großstadt. Genau das richtige Mischverhältnis.",
      author: "Petra E. (Beispiel)",
      role: "Bäckerei",
      location: "Eltmann",
    },
  ],
};

export const faq = [
  {
    q: "Was kostet eine Website bei SP Studio?",
    a: "Eine professionelle Website beginnt ab 699 € einmalig — inklusive Design, Entwicklung und SEO-Grundlagen. Größere Projekte mit Online-Buchung oder Shop besprechen wir individuell. Du bekommst immer einen Festpreis, bevor auch nur eine Zeile Code geschrieben wird.",
  },
  {
    q: "Wie schnell ist meine Website online?",
    a: "Im Durchschnitt 14 Tage — vom ersten Gespräch bis zum Launch. Bei größeren Projekten planen wir das gemeinsam realistisch. Und wenn es schnell gehen muss: Es gibt einen Express-Slot für 7 Tage Lieferzeit.",
  },
  {
    q: "Brauche ich technisches Wissen?",
    a: "Kein bisschen. Du lieferst die Infos zu deinem Betrieb, ich kümmere mich um den Rest. Kein Fachchinesisch, keine langen Erklärungen — du siehst das Ergebnis, nicht den Prozess.",
  },
  {
    q: "Wie läuft die Zusammenarbeit ab?",
    a: "Einfach und klar strukturiert. Zuerst führen wir ein kostenloses Erstgespräch — persönlich oder per Video. Danach bekommst du ein konkretes Angebot. Nach deiner Freigabe starten wir mit Design und Entwicklung. Du gibst einmal Feedback, wir setzen es um. Dann geht deine Seite online. Kein hin und her, keine langen Warteschleifen.",
  },
  {
    q: "Was passiert nach dem Launch?",
    a: "Du entscheidest. Auf Wunsch übernehme ich Hosting, Updates und kleine Änderungen als monatliche Betreuung. Du kannst aber auch alles selbst übernehmen oder zu einem anderen Anbieter wechseln. Deine Website, dein Code — kein Lock-in.",
  },
  {
    q: "Kann ich später selbst Inhalte ändern?",
    a: "Ja. Du bekommst auf Wunsch den vollständigen Code deiner Website. Änderungen kannst du selbst vornehmen, einen Entwickler deiner Wahl beauftragen oder jederzeit zu mir kommen. Keine versteckten Abhängigkeiten.",
  },
  {
    q: "Was ist der Unterschied zwischen einer normalen und einer SEO-optimierten Website?",
    a: "Eine normale Website ist online. Eine SEO-optimierte Website wird gefunden. Der Unterschied liegt in Dingen wie Seitenstruktur, Ladezeit, lokalen Keywords, technischer Auszeichnung und Google-Sichtbarkeit. Wir bauen keine Seiten die nur existieren — sondern Seiten die gefunden werden.",
  },
  {
    q: "Wer braucht eine lokale Website?",
    a: "Jeder Betrieb, der Kunden aus der Region gewinnen will. Ob Handwerker, Dienstleister, Praxis oder kleines Unternehmen: Wer lokal gefunden werden will, braucht eine Website die für genau diese Suchen gebaut ist. Eine allgemeine Seite reicht nicht mehr — Google bevorzugt Seiten mit lokalem Bezug, echten Standortangaben und klaren Leistungsbeschreibungen.",
  },
] as const;

export const contact = {
  eyebrow: "Kontakt",
  title: ["Lass uns reden.", "*Kostenlos.* Unverbindlich."],
  subtitle:
    "Erzähl uns kurz von deinem Vorhaben — wir melden uns innerhalb von 24 Stunden zurück.",
  branchen: [
    "Frisör / Salon",
    "Restaurant / Café",
    "Handwerk",
    "Praxis / Therapeut:in",
    "Fitness / Yoga",
    "Einzelhandel",
    "Sonstiges",
  ],
  privacy:
    "Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung der Anfrage verarbeitet werden.",
};

export const footer = {
  claim: "Premium Webseiten für lokale Unternehmen aus der Region Haßberge.",
  sitemap: [
    { label: "Home", href: "#top" },
    { label: "Branchen", href: "#branchen" },
    { label: "Ablauf", href: "#ablauf" },
    { label: "Über mich", href: "#ueber-uns" },
    { label: "FAQ", href: "#faq" },
    { label: "Leistungen", href: "#leistungen" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
  ],
};
