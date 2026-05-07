import React from "react";
import { getPostSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";

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
  let data: Record<string, unknown>;

  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    Post = mod.default;
    const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, "utf-8");
    data = matter(raw).data as Record<string, unknown>;
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

  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: blogSchema }} />
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        ← Zurück zum Blog
      </Link>

      <time className="block font-sans text-sm text-muted">
        {data.date
          ? new Date(data.date as string).toLocaleDateString("de-DE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : ""}
      </time>

      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {(data.title as string).replace(/\s*\|.*$/, "")}
      </h1>

      {Boolean(data.description) && (
        <p className="mt-4 text-lg text-muted">{data.description as string}</p>
      )}

      <hr className="my-10 border-border" />

      <div className="[&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-foreground [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-foreground [&_p]:text-muted [&_p]:leading-relaxed [&_p]:mb-5 [&_a]:text-pink [&_a]:no-underline hover:[&_a]:underline [&_ul]:text-muted [&_ul]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-5 [&_ol]:text-muted [&_ol]:leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-5 [&_strong]:text-foreground [&_strong]:font-semibold [&_blockquote]:border-l-2 [&_blockquote]:border-pink [&_blockquote]:pl-4 [&_blockquote]:text-muted [&_blockquote]:italic [&_blockquote]:my-6 [&_table]:w-full [&_table]:my-8 [&_table]:border-collapse [&_table]:text-sm [&_thead]:border-b [&_thead]:border-border [&_th]:text-left [&_th]:font-display [&_th]:font-semibold [&_th]:text-foreground [&_th]:py-3 [&_th]:pr-6 [&_td]:text-muted [&_td]:py-3 [&_td]:pr-6 [&_td]:border-b [&_td]:border-border [&_tr:last-child_td]:border-0 [&_td_strong]:text-pink">
        <Post />
      </div>
    </main>
  );
}
