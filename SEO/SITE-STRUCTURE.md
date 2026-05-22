# Seitenarchitektur — schnell-sichtbar.de

**Stand:** Mai 2026  
**Framework:** Next.js App Router  
**Ziel:** Klare Silo-Struktur für maximale SEO-Signalstärke

---

## 1. Aktueller Status (11 Seiten)

```
schnell-sichtbar.de/
├── /                           (Homepage) ✅
├── /blog                       (Blog-Übersicht) ✅
│   ├── /blog/[slug-1]          ✅
│   ├── /blog/[slug-2]          ✅
│   └── /blog/[slug-3]          ✅
├── /webdesign-hassfurt          ✅
├── /webdesign-schweinfurt       ✅
├── /webdesign-bamberg           ✅
├── /webdesign-wuerzburg         ✅
├── /impressum                   ✅
└── /datenschutz                 ✅
```

**Fehlende kritische Seiten:**
- /webdesign-nuernberg (größte Stadt Frankens)
- /leistungen und alle Unterseiten
- /portfolio
- /ueber-mich
- 7+ weitere Stadtseiten

---

## 2. Empfohlene Zielarchitektur (45+ Seiten)

```
schnell-sichtbar.de/
│
├── /                                           HOMEPAGE
│   Target: "Webdesign Franken", "Webdesigner Franken"
│
├── /leistungen/                                LEISTUNGEN (Hub)
│   Target: "Webdesign Leistungen Franken"
│   ├── /leistungen/handwerker                  NISCHE 1
│   │   Target: "Website für Handwerker", "Webdesign Handwerker"
│   ├── /leistungen/gastronomie                 NISCHE 2
│   │   Target: "Webdesign Restaurant Franken", "Website Gastronomie"
│   ├── /leistungen/salons                      NISCHE 3
│   │   Target: "Website Friseursalon", "Webdesign Kosmetik"
│   └── /leistungen/preise                      PREISE (optional eigenständig)
│       Target: "Webdesign Festpreis Franken"
│
├── /stadtseiten/                               GEO-CLUSTER (Hub)  
│   ├── /webdesign-nuernberg                    PRIO 1 ★★★★★
│   │   Target: "Webdesign Nürnberg"
│   ├── /webdesign-wuerzburg                    ✅ vorhanden
│   │   Target: "Webdesign Würzburg"
│   ├── /webdesign-bamberg                      ✅ vorhanden
│   │   Target: "Webdesign Bamberg"
│   ├── /webdesign-erlangen                     PRIO 2 ★★★★☆
│   │   Target: "Webdesign Erlangen"
│   ├── /webdesign-fuerth                       PRIO 2 ★★★★☆
│   │   Target: "Webdesign Fürth"
│   ├── /webdesign-schweinfurt                  ✅ vorhanden
│   │   Target: "Webdesign Schweinfurt"
│   ├── /webdesign-hassfurt                     ✅ vorhanden
│   │   Target: "Webdesign Haßfurt"
│   ├── /webdesign-ansbach                      PRIO 3 ★★★☆☆
│   │   Target: "Webdesign Ansbach"
│   ├── /webdesign-unterfranken                 PRIO 3 ★★★☆☆
│   │   Target: "Webdesign Unterfranken"
│   ├── /webdesign-mittelfranken                PRIO 3 ★★★☆☆
│   │   Target: "Webdesign Mittelfranken"
│   ├── /webdesign-bayreuth                     PRIO 4 ★★☆☆☆
│   │   Target: "Webdesign Bayreuth"
│   ├── /webdesign-coburg                       PRIO 4 ★★☆☆☆
│   │   Target: "Webdesign Coburg"
│   ├── /webdesign-forchheim                    PRIO 4 ★★☆☆☆
│   │   Target: "Webdesign Forchheim"
│   └── /webdesign-kitzingen                    PRIO 5 ★★☆☆☆
│       Target: "Webdesign Kitzingen"
│
├── /portfolio/                                 PORTFOLIO (Hub)
│   Target: "Webdesign Referenzen Franken"
│   ├── /portfolio/elektro-maier-wuerzburg      CASE STUDY 1
│   ├── /portfolio/haarwerk-bamberg             CASE STUDY 2
│   ├── /portfolio/maler-schmidt-nuernberg      CASE STUDY 3
│   └── /portfolio/[weitere...]
│
├── /blog/                                      BLOG (Hub) ✅
│   Target: "Webdesign Tipps Handwerker"
│   ├── /blog/was-kostet-eine-website-handwerker
│   ├── /blog/google-sichtbarkeit-handwerker
│   ├── /blog/5-fehler-handwerker-website
│   ├── /blog/seo-fuer-handwerker
│   ├── /blog/google-business-profil-handwerker
│   └── /blog/[weitere nach Kalender...]
│
├── /ueber-mich                                 ÜBER SIMON
│   Target: "Webdesigner Haßfurt", "Simon Pörschke"
│
├── /kontakt                                    KONTAKT
│   (bereits als Abschnitt — prüfen ob eigenständige URL sinnvoll)
│
├── /impressum                                  ✅
└── /datenschutz                                ✅
```

---

## 3. Aktuell vs. Empfohlen — Vergleich

| Bereich | Aktuell | Empfohlen | Delta |
|---|---|---|---|
| Homepage | 1 | 1 | — |
| Leistungsseiten | 0 | 4 (/leistungen + 3 Nischen) | +4 |
| Stadtseiten | 4 | 14 | +10 |
| Portfolio | 0 | 4+ | +4 |
| Blog-Posts | 3 | 24+ | +21 |
| Über-mich | 0 | 1 | +1 |
| Rechtliches | 2 | 2 | — |
| **Gesamt** | **11** | **~50+** | **+39** |

---

## 4. URL-Konventionen

| Regel | Korrekt | Falsch |
|---|---|---|
| Nur Kleinbuchstaben | /webdesign-nuernberg | /Webdesign-Nuernberg |
| Bindestriche statt Unterstriche | /webdesign-fuer-handwerker | /webdesign_fuer_handwerker |
| Umlaute transkribieren | /webdesign-nuernberg | /webdesign-nürnberg |
| Kein Trailing Slash | /webdesign-nuernberg | /webdesign-nuernberg/ |
| Keyword in URL | /webdesign-wuerzburg | /stadt/wuerzburg |
| Kurz halten | /blog/was-kostet-website | /blog/was-kostet-eine-website-fuer-handwerker-in-franken |

---

## 5. Interne Verlinkungsstruktur

```
Homepage (Hub)
    ↓ verlinkt auf alle Stadtseiten (geografisch relevant)
    ↓ verlinkt auf /leistungen (Conversion-Pfad)
    ↓ verlinkt auf /blog (Top-Posts)
    ↓ verlinkt auf /portfolio
    ↓ verlinkt auf /ueber-mich

Stadtseiten
    ↓ verlinken zurück auf Homepage
    ↓ verlinken auf passende Leistungsseiten
    ↓ verlinken auf /kontakt
    ↓ verlinken auf geografisch nahgelegene Stadtseiten

Leistungsseiten
    ↓ verlinken auf relevante Stadtseiten
    ↓ verlinken auf relevante Blog-Posts
    ↓ verlinken auf /portfolio (entsprechende Case Studies)

Blog-Posts
    ↓ verlinken auf Leistungsseiten (Conversion)
    ↓ verlinken auf relevante Stadtseiten
    ↓ Interne Links auf thematisch verwandte Posts
```

---

## 6. Schema-Mapping pro Seitentyp

| Seitentyp | Schema-Typen |
|---|---|
| Homepage | WebSite, LocalBusiness, ProfessionalService, Person, FAQPage |
| Stadtseite | WebPage, LocalBusiness (mit serviceArea), BreadcrumbList |
| Leistungsseite | WebPage, Service, FAQPage, BreadcrumbList |
| Blog-Post | BlogPosting, Article, Person (author), BreadcrumbList |
| Portfolio/Case Study | WebPage, CreativeWork, BreadcrumbList |
| Über-mich | AboutPage, Person (mit sameAs), BreadcrumbList |
| Homepage (wenn Reviews vorhanden) | AggregateRating hinzufügen |

---

## 7. Prioritisierte Umsetzungsreihenfolge

1. `/webdesign-nuernberg` — sofort (größter Traffic-Hebel)
2. `/leistungen/handwerker` — sofort (Conversion-Optimierung)
3. `/leistungen/gastronomie` + `/leistungen/salons`
4. `/portfolio` + erste 3 Case Studies
5. `/ueber-mich`
6. `/webdesign-erlangen`, `/webdesign-fuerth`
7. Weitere Stadtseiten nach Priorität (siehe oben)
