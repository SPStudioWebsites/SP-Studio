import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-36">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          ← Zurück zur Startseite
        </Link>
        <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h1>
        <div className="mt-10 max-w-none [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-foreground [&_p]:text-muted [&_p]:leading-relaxed [&_p]:mb-4 [&_a]:text-pink [&_a]:no-underline hover:[&_a]:underline [&_ul]:text-muted [&_ul]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
