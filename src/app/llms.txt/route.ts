import { brand, services, industries, about } from "@/lib/content";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

const BASE = "https://schnell-sichtbar.de";

const cityPages = [
  { slug: "webdesign-bamberg",     name: "Webdesign Bamberg",     region: "Oberfranken",
    desc: "Professionelle Webseiten für Handwerker, Gastronomie und KMUs in Bamberg und Oberfranken." },
  { slug: "webdesign-wuerzburg",   name: "Webdesign Würzburg",    region: "Unterfranken",
    desc: "Webdesign für Handwerker, Gastronomie, Weingüter und KMUs in Würzburg und Unterfranken." },
  { slug: "webdesign-schweinfurt", name: "Webdesign Schweinfurt", region: "Unterfranken",
    desc: "Webdesign für Handwerker, Industriedienstleister und KMUs in Schweinfurt und Unterfranken." },
  { slug: "webdesign-hassfurt",    name: "Webdesign Haßfurt",     region: "Haßberge",
    desc: "Webdesign für Handwerker, Direktvermarkter und Dienstleister in Haßfurt und im Landkreis Haßberge." },
  { slug: "webdesign-nuernberg",   name: "Webdesign Nürnberg",    region: "Mittelfranken",
    desc: "Webdesign für Handwerker, Gastronomie und lokale Betriebe in Nürnberg und der Metropolregion." },
];

export function GET() {
  const posts = getAllPosts();

  const lines: string[] = [];

  // ── Titel & Tagline ──
  lines.push(`# ${brand.name}`);
  lines.push("");
  lines.push(`> ${brand.tagline}`);
  lines.push("");

  // ── Einleitung ──
  lines.push(
    "Schnell-Sichtbar.de baut moderne, lokal optimierte Webseiten für Handwerker, " +
    "Gastronomen, Dienstleister und KMUs in Franken. Schwerpunkt: Local SEO, " +
    "Google-Sichtbarkeit, Conversion-orientiertes Webdesign. Ein-Person-Betrieb " +
    "(Simon Pöske) mit Sitz in Theres bei Haßfurt, tätig in Unter-, Mittel- und " +
    "Oberfranken. Festpreismodell ab 399 €, Lieferzeit durchschnittlich 14 Tage."
  );
  lines.push("");
  lines.push(`Standort: ${brand.address.street}, ${brand.address.zip} ${brand.address.city} (Bayern, Deutschland)`);
  lines.push(`Kontakt: ${brand.email} · ${brand.phoneDisplay}`);
  lines.push(`Geschäftszeiten: ${brand.hours}`);
  lines.push("");

  // ── Über mich ──
  lines.push("## Über");
  lines.push("");
  lines.push(about.body[0]);
  lines.push("");
  lines.push(about.body[1]);
  lines.push("");
  lines.push(about.body[2]);
  lines.push("");

  // ── Hauptseiten ──
  lines.push("## Hauptseiten");
  lines.push("");
  lines.push(`- [Startseite](${BASE}/): Webdesign für lokale Unternehmen in Franken – Übersicht, Leistungen, Branchen, Ablauf, Kontakt.`);
  lines.push(`- [Blog](${BASE}/blog): Praxisartikel zu Local SEO, Webdesign und Sichtbarkeit für lokale Betriebe in Franken.`);
  lines.push("");

  // ── Leistungen ──
  lines.push("## Leistungen");
  lines.push("");
  for (const s of services) {
    lines.push(`- **${s.title}**: ${s.desc}`);
  }
  lines.push("");

  // ── Branchen ──
  lines.push("## Branchen");
  lines.push("");
  for (const i of industries) {
    lines.push(`- **${i.name}**: ${i.text}`);
  }
  lines.push("");

  // ── Stadt-Seiten ──
  lines.push("## Lokale Landingpages");
  lines.push("");
  for (const c of cityPages) {
    lines.push(`- [${c.name}](${BASE}/${c.slug}) (Region ${c.region}): ${c.desc}`);
  }
  lines.push("");

  // ── Blog-Beiträge ──
  if (posts.length > 0) {
    lines.push("## Blog-Beiträge");
    lines.push("");
    for (const p of posts) {
      lines.push(`- [${p.title}](${BASE}/blog/${p.slug}): ${p.description}`);
    }
    lines.push("");
  }

  // ── Optional / Rechtliches ──
  lines.push("## Optional");
  lines.push("");
  lines.push(`- [Impressum](${BASE}/impressum)`);
  lines.push(`- [Datenschutz](${BASE}/datenschutz)`);
  lines.push(`- [Sitemap (XML)](${BASE}/sitemap.xml)`);
  lines.push("");

  const body = lines.join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
