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
  { label: "FAQ", href: "#faq" },
  { label: "Leistungen", href: "#leistungen" },
] as const;

export const hero = {
  eyebrow: "Webdesign aus Franken",
  title: ["Schnell sichtbar.", "*Sofort* überzeugend."],
  subtitle:
    "Die meisten Betriebe verlieren täglich Kunden, weil ihre Webseite nicht überzeugt. Ich ändere das. In 14 Tagen, zum Festpreis.",
  ctaPrimary: "Kostenloses Erstgespräch",
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
    name: "Praxen & Therapeuten",
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
    text: "Vom Hofladen bis zum Steuerbüro. Ich mache dich sichtbar.",
    span: "lg:col-span-2",
  },
] as const;

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
    { value: "Ø +180%", label: "mehr Anfragen für Kunden" },
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
    a: "Eine professionelle Website beginnt ab 699 € einmalig, inklusive Design, Entwicklung und SEO-Grundlagen. Größere Projekte mit Online-Buchung oder Shop bespreche ich gerne individuell mit dir. Du bekommst immer einen Festpreis, bevor auch nur eine Zeile Code geschrieben wird.",
  },
  {
    q: "Wie schnell ist meine Website online?",
    a: "Im Durchschnitt 14 Tage, vom ersten Gespräch bis zum Launch. Bei größeren Projekten plane ich das realistisch mit dir. Und wenn es wirklich schnell gehen muss: Es gibt einen Express-Slot mit 7 Tagen Lieferzeit.",
  },
  {
    q: "Brauche ich technisches Wissen?",
    a: "Kein bisschen. Du lieferst die Infos zu deinem Betrieb, ich kümmere mich um alles andere. Kein Fachchinesisch, keine langen Erklärungen. Du siehst das Ergebnis, nicht den Prozess.",
  },
  {
    q: "Wie läuft die Zusammenarbeit ab?",
    a: "Einfach und klar. Zuerst führe ich ein kostenloses Erstgespräch mit dir, persönlich oder per Video. Danach bekommst du ein konkretes Angebot. Nach deiner Freigabe starte ich mit Design und Entwicklung. Du gibst einmal Feedback, ich setze es um. Dann geht deine Seite online. Kein Hin und Her, keine langen Warteschleifen.",
  },
  {
    q: "Was passiert nach dem Launch?",
    a: "Das entscheidest du. Auf Wunsch übernehme ich Hosting, Updates und kleine Änderungen als monatliche Betreuung. Du kannst aber auch alles selbst übernehmen oder zu einem anderen Anbieter wechseln. Deine Website, dein Code, kein Lock-in.",
  },
  {
    q: "Kann ich später selbst Inhalte ändern?",
    a: "Ja. Du bekommst auf Wunsch den vollständigen Code deiner Website. Änderungen kannst du selbst vornehmen, einen Entwickler deiner Wahl beauftragen oder jederzeit zu mir kommen. Keine versteckten Abhängigkeiten.",
  },
  {
    q: "Was ist der Unterschied zwischen einer normalen und einer SEO-optimierten Website?",
    a: "Eine normale Website ist online. Eine SEO-optimierte Website wird gefunden. Der Unterschied liegt in Seitenstruktur, Ladezeit, lokalen Keywords und Google-Sichtbarkeit. Ich baue keine Seiten, die nur existieren. Sondern Seiten, die gefunden werden.",
  },
  {
    q: "Wer braucht eine lokale Website?",
    a: "Jeder Betrieb, der Kunden aus der Region gewinnen will. Ob Handwerker, Dienstleister, Praxis oder kleines Unternehmen: Wer lokal gefunden werden möchte, braucht eine Website, die genau dafür gebaut ist. Eine allgemeine Seite reicht längst nicht mehr. Google bevorzugt Seiten mit echtem lokalem Bezug, konkreten Standortangaben und klaren Leistungsbeschreibungen.",
  },
  {
    q: "Wie schnell rechnet sich eine neue Webseite?",
    a: "In den meisten Fällen schon nach wenigen neuen Kunden. Rechne einmal kurz: Wenn eine professionelle Webseite ab 699 € einmalig kostet und ein einziger neuer Stammkunde im Jahr 1.000–3.000 € Umsatz bringt, ist die Investition oft schon im ersten Monat reingespielt. Im Vergleich zu Google Ads, wo jeder Klick neu kostet, oder Print-Werbung, die einmal gedruckt wird und dann wirkungslos verstaubt, arbeitet eine gute Webseite jeden Tag im Jahr für dich – ohne weitere Kosten.",
  },
  {
    q: "Was bringt eine moderne Webseite mehr als eine alte oder selbstgebaute?",
    a: "Eine moderne Webseite lädt in unter 2 Sekunden, sieht auf dem Handy perfekt aus (über 70 % der Suchanfragen kommen heute mobil), wird von Google als vertrauenswürdig eingestuft und führt Besucher gezielt zu Kontakt, Buchung oder Anruf. Eine alte oder selbstgebaute Seite ist meist langsam, mobil kaputt, ohne SEO-Grundlagen und ohne klare Conversion-Pfade. Der Unterschied zeigt sich konkret: ähnlich viele Besucher, aber drei- bis fünfmal mehr Anfragen.",
  },
  {
    q: "Reicht nicht eine Facebook- oder Instagram-Seite statt einer Webseite?",
    a: "Nein. Social Media ist ein nützlicher Kanal, aber kein Ersatz für eine eigene Webseite. Bei Google rankt Facebook nicht für deine lokalen Keywords. Du gehörst dir nicht selbst – Meta kann jederzeit Algorithmen oder Regeln ändern. Und Kunden, die ernsthaft suchen (Handwerker, Steuerberater, Arzttermin), erwarten eine echte Webseite mit klaren Informationen. Social Media ergänzt deine Webseite, ersetzt sie aber nicht.",
  },
  {
    q: "Was unterscheidet eine 'Profi-Webseite' von einem Wix- oder Jimdo-Baukasten?",
    a: "Baukasten-Lösungen sehen am Anfang einfach aus, haben aber strukturelle Probleme: langsame Ladezeiten, eingeschränkte SEO, unsaubere HTML-Struktur, monatliche Mietkosten ohne Eigentum am Code. Eine handgebaute Webseite (wie ich sie liefere) ist schnell, sauber strukturiert, technisch vollständig SEO-optimiert und gehört dir komplett – einmal bezahlt, lebenslang nutzbar. Der Unterschied im Google-Ranking ist nach 3–6 Monaten meist deutlich sichtbar.",
  },
  {
    q: "Wie wichtig ist Mobile-First wirklich für lokale Betriebe?",
    a: "Entscheidend. Über 70 Prozent aller lokalen Suchanfragen kommen vom Smartphone – jemand sucht eine Pizzeria, einen Notdienst, eine Werkstatt unterwegs. Wenn deine Webseite auf dem Handy zu klein, zu langsam oder unübersichtlich ist, ist der Kunde in 3 Sekunden wieder weg. Mobile-First heißt: Die Seite wird zuerst für das Handy designt und entwickelt, nicht nachträglich angepasst. Genau so baue ich.",
  },
] as const;

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
  claim: "Professionelle Webseiten für lokale Unternehmen aus der Region Haßberge.",
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
