# Schnell-Sichtbar.de

Marketing-Website fuer Schnell-Sichtbar.de: lokale Webdesign- und Local-SEO-Angebote fuer kleine Unternehmen in der Region Hassberge/Franken.

## Tech Stack

- Next.js 16 mit App Router
- React 19
- Tailwind CSS 4
- MDX-Blog ueber `src/content/blog`
- Resend fuer das Kontaktformular
- Vercel Analytics und Vercel Speed Insights
- Google Analytics vorbereitet ueber Consent-Banner

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Der Dev-Server laeuft standardmaessig unter `http://localhost:3000`.

## Checks

```bash
npm run lint
npx tsc --noEmit --incremental false
npm run build
```

Hinweis: Falls TypeScript noch alte `.next/types` referenziert, `.next` entfernen und den Build/Dev-Server neu starten.

## Environment

Fuer das Kontaktformular wird lokal und in Produktion benoetigt:

```bash
RESEND_API_KEY=...
```

Google Analytics ist aktuell im Consent Manager vorbereitet. Die Platzhalter-ID `G-XXXXXXXXXX` in `src/components/analytics/consent-manager.tsx` muss vor echter Nutzung durch die korrekte Measurement-ID ersetzt werden.

## Deployment

Das Projekt ist fuer Vercel vorbereitet. Vor dem Deployment pruefen:

- `RESEND_API_KEY` ist in Vercel gesetzt.
- Google-Analytics-ID ist ersetzt, falls GA genutzt werden soll.
- `npm run lint` und `npm run build` laufen sauber.
- Datenschutztexte passen zu den aktivierten Tracking-Diensten.
