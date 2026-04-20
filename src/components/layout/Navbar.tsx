"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const NAV_LINKS = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#arbeiten", label: "Arbeiten" },
  { href: "#prozess", label: "Prozess" },
  { href: "#studio", label: "Studio" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const border = scrolled ? "border-line" : "border-transparent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b ${border} bg-cream/80 backdrop-blur transition-colors duration-500 ease-soft`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="#top" className="text-base font-semibold tracking-[-0.4px]">
          SP<span className="text-muted"> Studio</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-charcoal/80 hover:text-charcoal transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#kontakt" size="sm">
            Projekt starten
          </Button>
        </div>

        <button
          type="button"
          aria-label="Menü"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md border border-charcoal-40 px-3 py-1.5 text-sm"
        >
          {open ? "Schließen" : "Menü"}
        </button>
      </Container>

      {open ? (
        <div className="md:hidden border-t border-line bg-cream">
          <Container className="py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-charcoal"
              >
                {l.label}
              </a>
            ))}
            <Button href="#kontakt" className="mt-2 w-full">
              Projekt starten
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
