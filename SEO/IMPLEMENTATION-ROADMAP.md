# Implementierungs-Roadmap — schnell-sichtbar.de

**Owner:** Simon Pörschke  
**Ziel:** Top-5-Ranking für "Webdesign Franken" innerhalb 12 Monate  
**Technologie:** Next.js App Router auf Vercel

---

## Phase 1 — Critical Fixes (Wochen 1–4)

*Alle technischen Grundprobleme beheben, die aktuell Rankings und Indexierung blockieren.*

### Woche 1 — On-Page & Technical Basics

#### H1 Keyword-Fix (Priorität: KRITISCH)
**Problem:** H1 lautet aktuell "Mehr Kunden. Mehr Aufträge. Für Handwerker" — das Hauptkeyword "Webdesign Franken" fehlt komplett.  
**Lösung:** H1 umschreiben, sodass das Keyword enthalten ist, ohne Conversion-Botschaft zu opfern.

Vorschlag:
```
H1: "Webdesign Franken — Mehr Kunden für Handwerker & Betriebe"
```
oder als visuell geteilte Headline:
```
Zeile 1 (klein, SEO): Webdesign Franken
Zeile 2 (groß, Conversion): Mehr Kunden. Mehr Aufträge.
Zeile 3 (Nische): Für Handwerker_
```

Datei: `src/app/page.tsx`

---

#### OG-Bild Fix (Priorität: HOCH)
**Problem:** Transparentes PNG — auf Facebook, WhatsApp, LinkedIn erscheint ein defektes Vorschaubild.  
**Lösung:**
- Neues OG-Bild als JPEG/PNG mit weißem oder marken-farbigem Hintergrund erstellen
- Maße: 1200×630px
- Inhalt: Logo + "Webdesign Franken" + "ab €399 | 14 Tage"
- Ablage: `public/og-image.jpg`
- In `src/app/layout.tsx` referenzieren: `openGraph.images[0]`

---

#### Google Search Console einrichten (Priorität: KRITISCH)
- Domain-Property für schnell-sichtbar.de anlegen
- Verification via DNS TXT-Record (Vercel DNS) oder HTML-Tag in `layout.tsx`
- Sitemap übermitteln: `https://schnell-sichtbar.de/sitemap.xml`
- URL-Prüfung für Homepage, alle 4 Stadtseiten, Blog-Posts anstoßen
- Indexierungsstatus prüfen — bei 0 Ergebnissen in site:-Suche sofort Indexierung beantragen

---

### Woche 2 — Schema-Lücken schließen

#### WebSite-Schema (Priorität: HOCH)
Fehlt aktuell. In `src/components/seo/json-ld.tsx` ergänzen:

```json
{
  "@type": "WebSite",
  "@id": "https://schnell-sichtbar.de/#website",
  "url": "https://schnell-sichtbar.de",
  "name": "Schnell-Sichtbar.de",
  "description": "Webdesign für Handwerker, Gastronomen und Salons in Franken",
  "publisher": { "@id": "https://schnell-sichtbar.de/#person" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://schnell-sichtbar.de/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

#### Person-Schema — sameAs ergänzen (Priorität: HOCH)
Aktuell fehlen alle Social-Links. In `json-ld.tsx` beim Person-Schema ergänzen:

```json
"sameAs": [
  "https://www.linkedin.com/in/simon-poerschke",
  "https://www.xing.com/profile/Simon_Poerschke",
  "https://www.instagram.com/schnellsichtbar",
  "https://www.facebook.com/schnellsichtbar"
]
```
(URLs anpassen je nach tatsächlich genutzten Profilen)

---

#### WebPage-Schema für alle Seiten (Priorität: MITTEL)
Für jede Seite ein `WebPage`-Schema mit `isPartOf` und `breadcrumb` ergänzen. Als Komponente in `json-ld.tsx` implementieren, die auf jeder Seite gerendert wird.

---

#### BlogPosting-Schema (Priorität: HOCH)
Für alle 3 bestehenden und alle künftigen Blog-Posts:

```json
{
  "@type": "BlogPosting",
  "headline": "[Titel des Posts]",
  "author": { "@id": "https://schnell-sichtbar.de/#person" },
  "datePublished": "[ISO-Datum]",
  "dateModified": "[ISO-Datum]",
  "publisher": { "@id": "https://schnell-sichtbar.de/#website" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "[URL des Posts]" },
  "inLanguage": "de-DE"
}
```

---

#### BreadcrumbList (Priorität: MITTEL)
Für alle Unterseiten (Blog-Posts, Stadtseiten) BreadcrumbList-Schema ergänzen:

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://schnell-sichtbar.de" },
    { "@type": "ListItem", "position": 2, "name": "[Seite]", "item": "[URL]" }
  ]
}
```

---

### Woche 3 — Nürnberg-Landingpage (Priorität: KRITISCH)

**Warum Nürnberg sofort?** Nürnberg ist mit ~500.000 Einwohnern die größte Stadt Frankens und die einzige Großstadt, für die alle 5 Hauptkonkurrenten bereits Seiten haben.

**URL:** `/webdesign-nuernberg`

**Pflichtinhalte der Seite:**
- H1: "Webdesign Nürnberg — Websites für Handwerker & lokale Betriebe"
- Lead: Persönlich, lokal, Bezug zur Metropolregion
- Angebotspakete mit Preisen
- Liefergarantie 14 Tage prominent
- Vertrauenselemente: Foto Simon, Kundenstimme, Prozess
- LocalBusiness-Schema mit serviceArea Nürnberg
- BreadcrumbList
- CTA: Kostenloses Erstgespräch

---

### Woche 4 — Inhaltsqualität & Quick-Wins

- Alle bestehenden Stadtseiten auf H1-Keyword-Optimierung prüfen
- Meta-Descriptions für alle Seiten auf 155 Zeichen optimieren
- Interne Verlinkung Homepage → Stadtseiten verbessern (alle 4 bestehenden prominent verlinkt)
- robots.txt und sitemap.xml prüfen (aktuell korrekt — keine Änderung nötig)
- PageSpeed-Check via Lighthouse: Core Web Vitals auf grün bringen (LCP < 2,5s)

---

## Phase 2 — Content-Expansion (Wochen 5–12)

*Topical Authority aufbauen, Conversion-Pfade schaffen, Portfolio etablieren.*

### Wochen 5–6: Leistungsseiten

| Seite | URL | Keyword | Aufwand |
|---|---|---|---|
| Leistungen Handwerker | /leistungen/handwerker | Website für Handwerker | 2 Tage |
| Leistungen Gastronomie | /leistungen/gastronomie | Webdesign Restaurant | 1 Tag |
| Leistungen Salons | /leistungen/salons | Website Friseursalon | 1 Tag |

**Inhalt pro Seite:** Pain Points der Nische, Beispiel-Websites (Screenshots), Pakete, FAQ, CTA.

---

### Wochen 7–8: Portfolio-Sektion

**Ziel:** 3 echte Projekte als Case Studies dokumentieren.

**Vorlage pro Case Study:**
1. Kunde und Branche (anonym ok, mit Einwilligung besser)
2. Ausgangssituation: Keine Website / veraltete Website
3. Lösung: Was wurde gebaut, welches Paket
4. Ergebnis: Neue Anfragen, Google-Position, Reaktionen
5. Zitat des Kunden (mit Foto)
6. Screenshots Vorher / Nachher

**Schema:** `CreativeWork` oder `WebPage` + verlinktes `Review`-Schema für Kundenzitat.

---

### Wochen 9–10: 6 weitere Stadtseiten

Priorität:

| Stadt | URL | Begründung |
|---|---|---|
| Erlangen | /webdesign-erlangen | Uni-Stadt, tech-affin, Metropolregion |
| Fürth | /webdesign-fuerth | Direkter Nürnberg-Nachbar, hohes Volumen |
| Ansbach | /webdesign-ansbach | Mittelfranken, wenig Konkurrenz |
| Unterfranken | /webdesign-unterfranken | Regionaler Hub für Haßfurt/SW/Würzburg |
| Mittelfranken | /webdesign-mittelfranken | Regionaler Hub für Nürnberg/Fürth/Erlangen |
| Oberfranken | /webdesign-oberfranken | Bayreuth/Coburg abdecken |

---

### Wochen 11–12: Blog-Aufbau

Ziel: 6 neue Blog-Posts (je 1.200–2.000 Wörter) nach Content-Kalender.

Pflichtartikel für Phase 2:
1. "Was kostet eine Website für Handwerker?" (Informational, hohes Volumen)
2. "Google-Sichtbarkeit für Handwerker — der komplette Guide" (Pillar Content)
3. "5 Fehler bei der Handwerker-Website" (Listicle, Sharing-Potenzial)
4. "Homepage in 14 Tagen — so funktioniert es" (Brand/Prozess-Content)
5. "SEO für Handwerker — ohne Agentur" (Informational, Long-Tail)
6. "Google Business Profil einrichten — Schritt für Schritt" (How-To, Schema)

**Technisch:** Jeder Post bekommt BlogPosting-Schema, Autor-Byline (Simon Pörschke), Lesedauer, OG-Bild (1200×630, kein Transparenz-PNG).

---

## Phase 3 — Authority (Wochen 13–24)

*Externe Signale aufbauen, die Google-Vertrauen stärken.*

### Wochen 13–16: Google Business Profile

- Google Business Profile für Schnell-Sichtbar.de anlegen
- Kategorie: "Web-Designer" + "IT-Dienstleister"
- Vollständiges Profil: Beschreibung mit Keywords, Fotos, Öffnungszeiten, Dienstleistungen
- Erste Bewertungen einholen: mindestens 5 bestehende Kunden aktiv ansprechen
- Posts auf GBP: monatlich aktualisieren (neues Projekt, neuer Blog-Post)

**Ziel bis Monat 6:** 10+ Google-Bewertungen mit Ø 4,8 Sterne.  
**Danach:** AggregateRating-Schema auf Homepage einfügen.

---

### Wochen 17–20: Backlink-Aufbau

**Tier 1 — Verzeichnisse (kostenlos, sofort):**
- Das Örtliche: Eintrag für schnell-sichtbar.de
- Gelbe Seiten: Kostenpflichtiger Grundeintrag
- Yelp Deutschland: Firmenprofil anlegen
- Cylex.de: Kostenloser Eintrag
- Wlw.de (Wer liefert was): Eintrag als IT-Dienstleister
- Handwerker-Portale: Myhammer, Blauarbeit (Empfehlung, nicht Buchung)

**Tier 2 — Lokale Autorität:**
- IHK Würzburg/Schweinfurt: Mitglied-Verzeichnis
- HWK Unterfranken: Branchenpartner-Eintrag
- Lokale Unternehmernetzwerke (BNI Haßfurt/Schweinfurt): Mitgliedschaft prüfen

**Tier 3 — Content-Kooperationen:**
- Gastbeiträge auf Handwerker-Blogs ("So findet dein Betrieb online mehr Kunden")
- Interviews in lokalen Medien (Mainpost, Infranken.de) als "junger Gründer aus Haßfurt"
- Kooperation mit Handwerksmeistern: Sie verlinken auf ihre neue Website (= Link auf schnell-sichtbar.de als "erstellt von")

---

### Wochen 21–24: GEO-Optimierung (Generative Engine Optimization)

*Vorbereitung für AI-Overviews (Google SGE), ChatGPT-Empfehlungen und Perplexity.*

- FAQ-Schema auf Homepage und Leistungsseiten: Fragen in natürlichem Gesprächs-Ton formulieren
- "Über uns"-Content auf About-Seite: Konkrete, belegbare Fakten (Gründungsjahr, Projekte, Standort)
- Strukturierte Daten vollständig und korrekt: Validierung via schema.org Validator und Google Rich Results Test
- Kundenzitate als `Review`-Schema einbetten
- Preisübersicht als `Offer`-Schema in Leistungsseiten
- Wikipedia-ähnliche Faktendichte in Pillar Content (Quellen verlinken, Zahlen belegen)

---

## Phase 4 — Scale (Monate 7–12)

*Marktführerschaft in der Nische "Webdesign Handwerker Franken" anstreben.*

### Monat 7–8: Thought Leadership
- Eigenständiger Jahresbericht: "Was kosten Websites für Handwerker in Bayern 2026?" — mit echten Daten, Link-Magnet für Medien
- Kooperation mit Handwerksinnungen: Workshop "Digitale Sichtbarkeit für Handwerksbetriebe" → Backlinks, lokale Presse, GBP-Fotos

### Monat 9–10: PR & Lokale Medien
- Pressemitteilung an Mainpost.de, Infranken.de: "Haßfurter baut Websites für Handwerker in 14 Tagen"
- DIHK oder HWK-Magazin: Fachartikel zu Digitalisierung im Handwerk
- Podcast-Auftritte in regionalen Business-Podcasts

### Monat 11–12: Advanced Schema & Features
- `HowTo`-Schema für Schritt-für-Schritt-Anleitungen (Google Rich Results)
- `VideoObject`-Schema wenn Erklärvideos entstehen
- `Event`-Schema für Webinare oder Vor-Ort-Workshops
- AggregateRating sobald 10+ Bewertungen vorhanden
- Sitelinks-Suchfeld über WebSite-Schema aktivieren

---

## Checkliste: Phase 1 (muss in Woche 1–4 abgehakt sein)

- [ ] H1 Homepage enthält "Webdesign Franken"
- [ ] OG-Bild: Solides JPEG 1200×630px, kein transparentes PNG
- [ ] Google Search Console: Domain verifiziert, Sitemap eingereicht
- [ ] GSC: URL-Prüfung für alle 11 Seiten angestoßen
- [ ] WebSite-Schema in json-ld.tsx ergänzt
- [ ] Person-Schema: sameAs mit Social-Links befüllt
- [ ] BlogPosting-Schema für alle 3 Blog-Posts aktiv
- [ ] BreadcrumbList auf Stadtseiten und Blog-Posts
- [ ] /webdesign-nuernberg live mit korrektem Schema
- [ ] Lighthouse PageSpeed: LCP < 2,5s, CLS < 0,1 auf Homepage

---

## Zeitplan-Übersicht

| Zeitraum | Phase | Hauptziel | Erwartetes Ergebnis |
|---|---|---|---|
| Wochen 1–4 | Critical Fixes | Technische Basis, Nürnberg | Indexierung stabil, erste Impressionen in GSC |
| Wochen 5–12 | Content-Expansion | 6 Stadtseiten, 3 Nischenseiten, Portfolio, 6 Posts | Top-20 für 3–5 Keywords |
| Wochen 13–24 | Authority | GBP, Backlinks, Reviews, GEO | Top-10 für "Webdesign Franken", 300+ Klicks/Monat |
| Monate 7–12 | Scale | PR, Thought Leadership, Advanced Schema | Top-5 für Hauptkeyword, 1.000+ Klicks/Monat |
