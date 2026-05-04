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

  return {
    title: data.title,
    description: data.description,
  };
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  try {
    const { default: Post } = await import(`@/content/blog/${slug}.mdx`);
    const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);

    return (
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-36">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          ← Zurück zum Blog
        </Link>

        <time className="block font-sans text-sm text-muted">
          {data.date
            ? new Date(data.date).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : ""}
        </time>

        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {data.title}
        </h1>

        {data.description && (
          <p className="mt-4 text-lg text-muted">{data.description}</p>
        )}

        <hr className="my-10 border-border" />

        <div className="[&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-foreground [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-foreground [&_p]:text-muted [&_p]:leading-relaxed [&_p]:mb-5 [&_a]:text-pink [&_a]:no-underline hover:[&_a]:underline [&_ul]:text-muted [&_ul]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-5 [&_ol]:text-muted [&_ol]:leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-5 [&_strong]:text-foreground [&_strong]:font-semibold [&_blockquote]:border-l-2 [&_blockquote]:border-pink [&_blockquote]:pl-4 [&_blockquote]:text-muted [&_blockquote]:italic [&_blockquote]:my-6 [&_table]:w-full [&_table]:my-8 [&_table]:border-collapse [&_table]:text-sm [&_thead]:border-b [&_thead]:border-border [&_th]:text-left [&_th]:font-display [&_th]:font-semibold [&_th]:text-foreground [&_th]:py-3 [&_th]:pr-6 [&_td]:text-muted [&_td]:py-3 [&_td]:pr-6 [&_td]:border-b [&_td]:border-border [&_tr:last-child_td]:border-0 [&_td_strong]:text-pink">
          <Post />
        </div>
      </main>
    );
  } catch {
    notFound();
  }
}
