import React from "react";
import { getPostSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { BlogBackground } from "@/components/effects/blog-background";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return {};

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);

  const postUrl = `https://schnell-sichtbar.de/blog/${slug}`;
  const cleanTitle = (data.title as string).replace(/\s*\|.*$/, "");
  const ogImage = {
    url: `https://schnell-sichtbar.de/blog/${slug}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: cleanTitle,
  };

  return {
    title: cleanTitle,
    description: data.description,
    authors: [{ name: "Simon Pörschke" }],
    alternates: { canonical: postUrl },
    openGraph: {
      title: cleanTitle,
      description: data.description,
      type: "article",
      url: postUrl,
      locale: "de_DE",
      siteName: "Schnell-Sichtbar.de",
      publishedTime: data.date ? new Date(data.date as string).toISOString() : undefined,
      authors: ["Simon Pörschke"],
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description: data.description,
      images: [ogImage.url],
    },
  };
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let Post: React.ComponentType;
  let data: Record<string, unknown> = {};
  let readingTime = 3;

  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    Post = mod.default;
    const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, "utf-8");
    const parsed = matter(raw);
    data = parsed.data as Record<string, unknown>;
    const wordCount = parsed.content.split(/\s+/).filter(Boolean).length;
    readingTime = Math.max(1, Math.round(wordCount / 200));
  } catch {
    notFound();
  }

  const BASE = "https://schnell-sichtbar.de";
  const postUrl = `${BASE}/blog/${slug}`;
  const blogSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: data.title,
        description: data.description,
        datePublished: data.date
          ? new Date(data.date as string).toISOString()
          : undefined,
        dateModified: data.lastModified
          ? new Date(data.lastModified as string).toISOString()
          : data.date
          ? new Date(data.date as string).toISOString()
          : undefined,
        url: postUrl,
        mainEntityOfPage: postUrl,
        image: {
          "@type": "ImageObject",
          url: `${postUrl}/opengraph-image`,
          width: 1200,
          height: 630,
        },
        author: { "@id": `${BASE}/#person` },
        publisher: { "@id": `${BASE}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
          { "@type": "ListItem", position: 3, name: data.title, item: postUrl },
        ],
      },
      ...(Array.isArray(data.faqs) && data.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: (data.faqs as { q: string; a: string }[]).map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
          ]
        : []),
    ],
  }).replace(/</g, "\\u003c");

  const category = (data.category as string) || "Webdesign & SEO";

  return (
    <>
      <ScrollProgress />
      <BlogBackground />

      <main className="relative mx-auto max-w-5xl px-6 pb-24 pt-36">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: blogSchema }} />

          {/* Back link */}
          <Link
            href="/blog"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            ← Zurück zum Blog
          </Link>

          {/* ── Post header ── */}
          <div className="mt-2">
            {/* Meta row */}
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-pink/20 bg-pink/10 px-3 py-1 text-xs font-semibold text-pink">
                {category}
              </span>
              <span className="text-xs text-muted">·</span>
              <time className="font-sans text-xs text-muted">
                {data.date
                  ? new Date(data.date as string).toLocaleDateString("de-DE", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : ""}
              </time>
              <span className="text-xs text-muted">·</span>
              <span className="text-xs text-muted">{readingTime} Min. Lesezeit</span>
            </div>

            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              {(data.title as string).replace(/\s*\|.*$/, "")}
            </h1>

            {Boolean(data.description) && (
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {data.description as string}
              </p>
            )}

            {/* Author row */}
            <div className="mt-6 flex items-center gap-3">
              <div
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: "linear-gradient(135deg, #ff2d8f, #8b5cf6)" }}
              >
                S
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground/90">Simon Pörschke</span>
                <span className="text-xs text-muted">· Schnell-Sichtbar.de</span>
              </div>
            </div>
          </div>

          {/* Gradient separator */}
          <div className="my-10 h-px bg-gradient-to-r from-pink/50 via-violet/25 to-transparent" />

          {/* ── Post content ── */}
          <div className="blog-content">
            <Post />
          </div>

          {/* ── End CTA card ── */}
          <div
            className="relative mt-16 overflow-hidden rounded-2xl p-8 text-center"
            style={{
              background: "linear-gradient(160deg, rgba(38,38,46,0.60) 0%, rgba(12,12,16,0.55) 100%)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 0 0 1px rgba(255,255,255,0.07), 0 4px 32px rgba(0,0,0,0.35)",
              backdropFilter: "blur(24px)",
            }}
          >
            {/* Top glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at 50% -10%, rgba(255,45,143,0.15) 0%, transparent 60%)",
              }}
            />
            <p className="relative mb-2 text-xs font-semibold uppercase tracking-widest text-pink">
              Kostenlos & unverbindlich
            </p>
            <h2 className="relative mb-3 font-display text-2xl font-bold text-foreground">
              Bereit, online sichtbar zu werden?
            </h2>
            <p className="relative mx-auto mb-7 max-w-sm text-muted">
              Ich zeige dir, wie dein Betrieb bei Google besser abschneidet, in einem kurzen Gespräch.
            </p>
            <Link
              href="/#kontakt"
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(110deg, #ff2d8f 0%, #c026d3 50%, #8b5cf6 100%)",
                boxShadow: "0 10px 40px -10px rgba(255,45,143,0.65)",
              }}
            >
              <span
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, transparent 55%)",
                }}
              />
              <span className="relative">Jetzt Erstgespräch anfragen →</span>
            </Link>
          </div>

          {/* Bottom nav */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              ← Alle Beiträge anzeigen
            </Link>
          </div>
      </main>
    </>
  );
}
