import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Schnell-Sichtbar",
  description:
    "Tipps und Strategien rund um lokale SEO und Webdesign für kleine Unternehmen in Franken.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-36">
      <p className="mb-3 font-display text-sm font-medium uppercase tracking-widest text-pink">
        Wissen & Tipps
      </p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        Blog
      </h1>
      <p className="mt-4 text-muted">
        Praxisnahe Tipps zu lokalem SEO und Webdesign – damit du online gefunden wirst.
      </p>

      <div className="mt-16 space-y-px">
        {posts.length === 0 ? (
          <p className="text-muted">Bald kommen die ersten Beiträge.</p>
        ) : (
          posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2 rounded-xl border border-border px-6 py-6 transition-colors hover:border-border-strong hover:bg-surface"
            >
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
              <p className="text-sm text-muted">{post.description}</p>
              <span className="mt-1 text-sm font-medium text-pink">
                Weiterlesen →
              </span>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
