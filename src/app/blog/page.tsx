import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import type { Metadata } from "next";
import { BlogBackground } from "@/components/effects/blog-background";

export const metadata: Metadata = {
  title: "Blog | Schnell-Sichtbar",
  description:
    "Tipps und Strategien rund um lokale SEO und Webdesign für kleine Unternehmen in Franken.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <BlogBackground />

      <main className="relative mx-auto max-w-3xl px-6 pb-24 pt-36">
        <p className="mb-3 font-display text-sm font-medium uppercase tracking-widest text-pink">
          Wissen & Tipps
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Blog
        </h1>
        <p className="mt-4 text-muted">
          Praxisnahe Tipps zu lokalem SEO und Webdesign – damit du online gefunden wirst.
        </p>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-muted">
          <p>
            Hier findest du Artikel aus der Praxis: wie lokale Betriebe in Franken bei
            Google sichtbar werden, was eine moderne Webseite heute leisten muss und welche
            Fehler dich Anfragen kosten. Geschrieben für Inhaber kleiner und mittlerer
            Unternehmen, die wenig Zeit, aber klare Erwartungen haben – ohne Marketing-Floskeln,
            ohne Fachchinesisch, ohne Verkaufsdruck.
          </p>
          <p>
            <strong className="text-foreground">Über welche Themen schreibe ich?</strong>{" "}
            Schwerpunkt ist alles, was lokale Sichtbarkeit beeinflusst: Local SEO, Google
            Unternehmensprofil, technisches Webdesign (Ladezeit, Mobile-First, Core Web
            Vitals), Conversion-Optimierung (warum Besucher zu Kunden werden – oder eben
            nicht), branchen­spezifische Tipps für Handwerker, Restaurants, Cafés, Salons
            und Dienstleister sowie regionale Besonderheiten in Unter-, Mittel- und
            Oberfranken.
          </p>
          <p>
            <strong className="text-foreground">Für wen sind die Artikel?</strong>{" "}
            Für Handwerksmeister, die mehr Anfragen wollen, ohne jeden Klick zu bezahlen.
            Für Gastronomen, die ihre Tische auch in ruhigen Monaten füllen wollen. Für
            Friseure, Therapeuten und Salon-Inhaber, die Online-Buchung etablieren möchten.
            Und für alle, die wissen wollen, was eine wirklich gute Webseite von einer
            durchschnittlichen unterscheidet – und warum das oft den Unterschied zwischen
            Wachstum und Stillstand macht.
          </p>
          <p>
            <strong className="text-foreground">Region im Fokus:</strong>{" "}
            Bamberg, Würzburg, Schweinfurt, Nürnberg, Haßfurt, Forchheim, Kitzingen,
            Aschaffenburg, Bad Kissingen, Coburg sowie die Landkreise Haßberge, Bamberg,
            Würzburg, Schweinfurt, Kitzingen und Main-Spessart. Jede Region hat ihre
            eigenen Suchmärkte, Wettbewerbslagen und Branchen­schwerpunkte – und genau
            darauf gehe ich in den Artikeln konkret ein.
          </p>
          <p>
            Wenn dir ein Thema fehlt oder du eine konkrete Frage zu deinem Betrieb hast,
            schreib mir einfach. Aus guten Leserfragen entstehen die nützlichsten Artikel –
            und ich antworte persönlich, nicht per Chatbot.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {posts.length === 0 ? (
            <p className="text-muted">Bald kommen die ersten Beiträge.</p>
          ) : (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl px-6 py-6 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(28,28,36,0.55) 0%, rgba(10,10,14,0.50) 100%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.09), inset 0 0 0 1px rgba(255,255,255,0.06), 0 4px 20px rgba(0,0,0,0.22)",
                  backdropFilter: "blur(16px)",
                }}
              >
                {/* Pink left accent */}
                <div
                  className="pointer-events-none absolute left-0 top-0 h-full w-[2px] rounded-l-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-50"
                  style={{
                    background: "linear-gradient(to bottom, #ff2d8f, #8b5cf6)",
                  }}
                />

                <time className="font-sans text-xs text-muted">
                  {new Date(post.date).toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="font-display text-xl font-semibold text-foreground transition-colors group-hover:text-pink">
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted">{post.description}</p>
                <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-pink">
                  Weiterlesen
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))
          )}
        </div>
      </main>
    </>
  );
}
