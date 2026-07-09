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
  phone: "+491785407221",
  phoneDisplay: "0178/5407221",
  hours: "Mo–Fr 9:00 – 18:00",
};

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Branchen", href: "#branchen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Über mich", href: "#ueber-uns" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "FAQ", href: "#faq" },
] as const;

// Canonical CTA — identical wording in Hero, Mittel-CTA and Final-CTA.
export const CTA_LABEL = "Kostenloses Erstgespräch sichern";

export const hero = {
  eyebrow: "Festpreis · in 14 Tagen online · Code gehört dir",
  keywordLine: "Webdesign für lokale Betriebe in Franken",
  subtitle:
    "Viele Betriebe in Franken verlieren täglich Anfragen – weil ihre Website veraltet ist oder bei Google nicht auftaucht. Ich baue dir in 14 Tagen eine Seite, die gefunden wird und Kunden bringt. Zum Festpreis.",
  ctaPrimary: CTA_LABEL,
};

export const services = [
  {
    icon: "Layout",
    title: "Webdesign & Entwicklung",
    desc: "Moderne, schnelle Webseiten. Handgebaut, responsive und für Suchmaschinen optimiert.",
    bullets: ["Maßgeschneidertes Design", "Mobile-first", "Schneller Pageload"],
  },
  {
    icon: "Search",
    title: "Local SEO",
    desc: "Damit dich Kunden aus Haßfurt, Ebern und Umgebung wirklich finden. Auf Google und in Maps.",
    bullets: ["Keyword-Strategie", "Google-Optimierung", "Lokale Sichtbarkeit"],
  },
  {
    icon: "Calendar",
    title: "Online-Buchung",
    desc: "Termine direkt über deine Website. Für Salons, Praxen und Studios.",
    bullets: ["24/7 buchbar", "Kalender-Sync", "Erinnerungs-Mails"],
  },
  {
    icon: "MapPin",
    title: "Google Unternehmensprofil",
    desc: "Komplett eingerichtet, gepflegt und optimiert. Damit du bei Google Maps ganz oben erscheinst.",
    bullets: ["Setup & Verifizierung", "Foto-Pflege", "Bewertungs-Strategie"],
  },
  {
    icon: "Server",
    title: "Hosting & Pflege",
    desc: "Sicheres Hosting in Deutschland, monatliche Updates. Und ich bin immer persönlich erreichbar.",
    bullets: ["DSGVO-konform", "Tägliches Backup", "Support per Telefon"],
  },
  {
    icon: "Sparkles",
    title: "Branding-Light",
    desc: "Logo-Refresh, klare Farbwelt, Visitenkarten. Damit dein Auftritt aus einem Guss wirkt.",
    bullets: ["Logo & Wordmark", "Farbsystem", "Print-Templates"],
  },
] as const;

export const industries = [
  {
    icon: "Hammer",
    name: "Handwerk",
    text: "Referenzen, Angebotsanfrage, Notfallkontakt.",
    line: "Du hast volle Auftragsbücher verdient, nicht ein Telefon, das nur wegen Kleinkram klingelt.",
    screenshot: "/Branchen/Hero-Handwerker.png",
  },
  {
    icon: "Scissors",
    name: "Frisöre & Salons",
    text: "Online-Buchung, Stylisten-Profile, Vorher-Nachher-Galerie.",
    line: "Termine, die auch um 22 Uhr online reinkommen – ohne dass du ans Telefon musst.",
    screenshot: "/Branchen/Hero - Friseur.png",
  },
  {
    icon: "UtensilsCrossed",
    name: "Restaurants & Cafés",
    text: "Speisekarte, Reservierung, Click & Collect.",
    line: "Auch dienstags gut gebucht, nicht nur freitags und samstags.",
    screenshot: "/Branchen/Hero-Cafe.png",
  },
  {
    icon: "PartyPopper",
    name: "Eventlocations & Feiern",
    text: "Kalender-Auslastung, Anfragen für Hochzeit & Feier, Bildergalerie.",
    line: "Gäste entscheiden in 5 Minuten, ob sie anfragen. Deine Seite ist der erste Eindruck.",
    screenshot: "/Branchen/Hero - Eventlocation.png",
  },
  {
    icon: "Stethoscope",
    name: "Praxen & Therapeuten",
    text: "Online-Termine, Team-Vorstellung, Sprechzeiten.",
    line: "Patienten finden auf Anhieb Sprechzeiten, Team und einen Termin – ohne Warteschleife.",
    screenshot: "",
  },
  {
    icon: "Dumbbell",
    name: "Fitness- & Yoga-Studios",
    text: "Kursplan, Probestunde, Mitgliedschaft online.",
    line: "Kursplan und Probestunde online buchbar, statt Interessenten an der Rezeption zu verlieren.",
    screenshot: "",
  },
] as const;

// Sektion 4 — Methode (branded, 3 Säulen). Beschreibt das WIE/die Philosophie,
// nicht den Projekt-Ablauf (der steht separat in `process`).
export const method = {
  eyebrow: "Wie ich arbeite",
  name: "Die Sichtbar-Formel",
  intro:
    "Die meisten Anbieter liefern nur eins davon: eine hübsche Seite ohne Auffindbarkeit, oder SEO ohne Struktur, die Anfragen holt. Meine Formel verbindet alle drei – deshalb wirkt sie.",
  steps: [
    {
      n: "01",
      icon: "Search",
      title: "Gefunden.",
      desc: "Lokales SEO und ein sauber eingerichtetes Google-Unternehmensprofil sorgen dafür, dass dich neue Kunden in der Region überhaupt finden, bevor sie bei der Konkurrenz landen.",
    },
    {
      n: "02",
      icon: "Layout",
      title: "Überzeugt.",
      desc: "Klare Struktur, echte Beweise, ein einziger nächster Schritt: Design, das nicht nur gut aussieht, sondern Besucher gezielt zur Anfrage führt.",
    },
    {
      n: "03",
      icon: "LifeBuoy",
      title: "Betreut.",
      desc: "Nach dem Launch bist du nicht allein. Hosting, Pflege und ein direkter Draht zu mir, ohne Ticketsystem und ohne Warteschleife.",
    },
  ],
} as const;

export const process = [
  {
    n: "01",
    title: "Erstgespräch",
    desc: "Kostenlos, 30 Minuten, telefonisch oder bei dir vor Ort. Ich höre zu, frage nach und schick dir danach ein klares Angebot.",
    points: ["Bedarfsanalyse", "Festpreis-Angebot", "Klarer Zeitplan"],
  },
  {
    n: "02",
    title: "Konzept & Design",
    desc: "Innerhalb von 5 Tagen bekommst du einen Designvorschlag: Wireframe, Farben, Typo, Mockups. Mit Feedback-Runden bis es passt.",
    points: ["Wireframes", "Designvorschläge", "Feedback-Runden"],
  },
  {
    n: "03",
    title: "Entwicklung",
    desc: "Ich baue sauber: schnell, mobil-optimiert, suchmaschinenfreundlich. Keine Baukasten-Software. Kein WordPress-Plugin-Chaos.",
    points: ["Sauberer Code", "Performance & SEO", "Einfache Pflege"],
  },
  {
    n: "04",
    title: "Launch & Betreuung",
    desc: "Ich gehe mit dir live, zeige dir alles und kümmere mich auf Wunsch um Hosting, Pflege und Updates. So lange du willst.",
    points: ["Go-Live", "Persönliche Übergabe", "Hosting & Support"],
  },
] as const;

export const about = {
  eyebrow: "Über mich",
  title: ["Aus Haßfurt.", "Für die *Region*."],
  body: [
    "Die meisten Webdesigner haben noch nie eine Anzeige für einen Schreiner geschaltet. Ich schon.",
    "Ich bin Simon und arbeite seit über 3 Jahren im Marketing, für Handwerksbetriebe und lokale Dienstleister aus der Region. Ich habe ihre Social-Media-Auftritte aufgebaut, Kampagnen geschaltet, Webseiten erstellt und dabei eines gelernt: Eine Webseite allein bringt keine Kunden. Es braucht Strategie.",
    "Genau das ist der Unterschied bei Schnell-Sichtbar.de. Ich baue keine Seiten, die gut aussehen und dann nichts tun. Ich baue Websites, die auf echten Marketingprinzipien basieren, mit klarer Botschaft, lokalem SEO und einem Aufbau, der Besucher zu Kunden macht.",
    "Und weil ich weiß, wie wenig Zeit du als Unternehmer hast, läuft das bei mir schnell und ohne Umwege. Du hast eine Frage? Du schreibst mir. Nicht einem Praktikanten.",
  ],
  quote: "Aus der Region Unterfranken. Für Betriebe, die online endlich sichtbar sein wollen.",
  quoteAuthor: "Simon, Inhaber Schnell-Sichtbar.de",
  stats: [
    { value: "3+ Jahre", label: "Marketing für lokale Betriebe" },
    { value: "14 Tage", label: "bis zur fertigen Seite" },
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

export const faq = [
  {
    q: "Was kostet eine Website bei Schnell-Sichtbar.de?",
    a: "Ab 399 € einmalig, inklusive Design, Entwicklung und SEO-Grundlagen. Größere Projekte mit Online-Buchung oder Shop bespreche ich gerne individuell mit dir. Du bekommst immer einen Festpreis, bevor auch nur eine Zeile Code geschrieben wird.",
  },
  {
    q: "Wie schnell ist meine Website online?",
    a: "Im Durchschnitt 14 Tage, vom ersten Gespräch bis zum Launch. Wenn es wirklich schnell gehen muss: Es gibt einen Express-Slot mit 7 Tagen Lieferzeit.",
  },
  {
    q: "Brauche ich technisches Wissen?",
    a: "Kein bisschen. Du lieferst die Infos zu deinem Betrieb, ich kümmere mich um alles andere. Kein Fachchinesisch, keine langen Erklärungen. Du siehst das Ergebnis, nicht den Prozess.",
  },
  {
    q: "Wie läuft die Zusammenarbeit ab?",
    a: "Zuerst ein kostenloses Erstgespräch, persönlich oder per Video. Danach bekommst du ein konkretes Angebot. Nach deiner Freigabe starte ich mit Design und Entwicklung, du gibst Feedback, ich setze es um. Dann geht deine Seite online. Kein Hin und Her, keine langen Warteschleifen.",
  },
  {
    q: "Was passiert nach dem Launch?",
    a: "Das entscheidest du. Auf Wunsch übernehme ich Hosting, Updates und kleine Änderungen als monatliche Betreuung. Du kannst aber auch alles selbst übernehmen oder zu einem anderen Anbieter wechseln. Deine Website, dein Code, kein Lock-in.",
  },
  {
    q: "Wer braucht eine lokale Website wirklich?",
    a: "Jeder Betrieb, der Kunden aus der Region gewinnen will. Handwerker, Gastronomie, Praxis oder kleines Unternehmen: Wer lokal gefunden werden will, braucht eine Seite mit echtem Ortsbezug, nicht nur eine allgemeine Visitenkarte.",
  },
  {
    q: "Reicht nicht eine Facebook- oder Instagram-Seite statt einer Webseite?",
    a: "Nein. Bei Google rankt Facebook nicht für deine lokalen Keywords, und du gehörst dir dort nicht selbst – Meta kann Regeln jederzeit ändern. Kunden, die ernsthaft suchen, erwarten eine echte Webseite mit klaren Infos. Social Media ergänzt sie, ersetzt sie aber nicht.",
  },
  {
    q: "Was unterscheidet das von einem Wix- oder Jimdo-Baukasten?",
    a: "Baukasten-Lösungen sehen anfangs einfach aus, haben aber strukturelle Probleme: langsame Ladezeiten, eingeschränkte SEO, monatliche Mietkosten ohne Eigentum am Code. Eine handgebaute Seite ist schnell, sauber strukturiert und gehört dir komplett, einmal bezahlt, dauerhaft nutzbar.",
  },
] as const;

// Sektion 6 — Trust-Block. Schnell-Sichtbar.de ist jung: statt Kundenzahlen zu
// erfinden, trägt hier ehrliche Risikoumkehr (Garantien) + Gründer-Track-Record.
// Sobald echte Fallstudien vorliegen, ersetzen sie diesen Block.
export const guarantees = [
  {
    icon: "BadgeEuro",
    title: "Festpreis, bevor es losgeht",
    desc: "Du bekommst einen verbindlichen Preis, bevor die erste Zeile Code entsteht. Keine Nachträge, keine Überraschung auf der Rechnung.",
  },
  {
    icon: "ShieldCheck",
    title: "Der Code gehört dir",
    desc: "Kein Abo, kein Lock-in, kein proprietärer Baukasten. Deine Seite gehört komplett dir – für immer.",
  },
  {
    icon: "Phone",
    title: "Direkt mit dem Inhaber",
    desc: "Du sprichst nie mit einem Callcenter oder Praktikanten. Bei Fragen schreibst du mir, und ich antworte persönlich.",
  },
  {
    icon: "CheckCircle2",
    title: "Feedback, bis es passt",
    desc: "Klare Korrekturrunden sind eingeplant. Deine Seite geht erst online, wenn du wirklich zufrieden bist.",
  },
] as const;

// Typische Ausgangslagen → was die neue Seite konkret leistet (Ziel, keine
// erfundene Ergebnis-Zahl). Wird ersetzt, sobald echte Fallzahlen vorliegen.
export const scenarios = [
  {
    branche: "Handwerksbetrieb",
    problem: "Keine Website. Anfragen kamen nur über Mundpropaganda und Zufallsfunde bei Google.",
    result: "Eine Seite mit Referenzen und schnellem Angebots-Kontakt, die auch dann Anfragen sammelt, wenn dich niemand empfohlen hat.",
  },
  {
    branche: "Friseursalon",
    problem: "Alte Website ohne Online-Buchung. Jeder Termin lief über Anrufe mitten im Betrieb.",
    result: "Online-Buchung rund um die Uhr – Termine kommen rein, ohne dass jemand ans Telefon muss.",
  },
  {
    branche: "Café / Restaurant",
    problem: "Website auf dem Handy kaum lesbar, Speisekarte nur als PDF verlinkt.",
    result: "Mobil-optimierte Seite mit klarer Speisekarte und Tisch-Anfrage direkt vom Handy.",
  },
] as const;

// Sektion 12 — Standort. Echte Adresse & Einzugsgebiet für lokale Glaubwürdigkeit.
export const location = {
  eyebrow: "Standort",
  title: "Vor Ort in der Region.",
  subtitle:
    "Kein Callcenter, keine Agentur in einer fremden Großstadt. Ich arbeite von hier aus, für Betriebe hier aus der Gegend.",
  mapsHref: "https://maps.app.goo.gl/usAdLbggi5VHqWrR7",
} as const;

export const contact = {
  eyebrow: "Kontakt",
  title: ["Lass uns reden.", "*Kostenlos.* Unverbindlich."],
  subtitle:
    "Erzähl mir kurz von deinem Vorhaben. Ich melde mich innerhalb von 24 Stunden persönlich bei dir.",
  branchen: [
    "Frisör / Salon",
    "Restaurant / Café",
    "Handwerk",
    "Praxis / Therapeut",
    "Fitness / Yoga",
    "Einzelhandel",
    "Sonstiges",
  ],
  privacy:
    "Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung der Anfrage verarbeitet werden.",
};

export const footer = {
  claim:
    "Moderne Webseiten für lokale Betriebe in der Region Haßberge & Franken – die nicht nur gut aussehen, sondern Anfragen und Umsatz bringen. Jetzt anfragen!",
  sitemap: [
    { label: "Home", href: "/" },
    { label: "Branchen", href: "/#branchen" },
    { label: "Ablauf", href: "/#ablauf" },
    { label: "Über mich", href: "/#ueber-uns" },
    { label: "FAQ", href: "/#faq" },
    { label: "Leistungen", href: "/#leistungen" },
    { label: "Kontakt", href: "/#kontakt" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
  regions: [
    { label: "Webdesign Nürnberg",    href: "/webdesign-nuernberg" },
    { label: "Webdesign Haßfurt",     href: "/webdesign-hassfurt" },
    { label: "Webdesign Schweinfurt", href: "/webdesign-schweinfurt" },
    { label: "Webdesign Bamberg",     href: "/webdesign-bamberg" },
    { label: "Webdesign Würzburg",    href: "/webdesign-wuerzburg" },
  ],
};
