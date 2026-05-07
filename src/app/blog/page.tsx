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
