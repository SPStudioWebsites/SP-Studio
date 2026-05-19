"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@/lib/icons";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────

interface BranchePanel {
  id: string;
  pill: string;
  headline: string;
  subtitle: string;
  screenshot: string;
  screenshotAlt: string;
  colorA: string;
  colorB: string;
}

const PANELS: BranchePanel[] = [
  {
    id: "handwerker",
    pill: "Handwerk",
    headline: "Mehr Aufträge. Weniger Leerläufe.",
    subtitle:
      "Wer nicht online gefunden wird, verliert den Auftrag an die Konkurrenz — täglich. Deine Website ändert das.",
    screenshot: "/Bildschirmfoto 2026-05-19 um 13.56.41.png",
    screenshotAlt: "Beispiel-Webdesign für Handwerksbetrieb",
    colorA: "#ff2d8f",
    colorB: "#8b5cf6",
  },
  {
    id: "eventlocations",
    pill: "Eventlocations",
    headline: "Dein Kalender soll ausgebucht sein.",
    subtitle:
      "Kunden entscheiden in 5 Minuten, ob sie buchen. Deine Website ist der erste — und oft einzige — Eindruck.",
    screenshot: "/Bildschirmfoto 2026-05-19 um 15.39.25.png",
    screenshotAlt: "Beispiel-Webdesign für Eventlocation",
    colorA: "#8b5cf6",
    colorB: "#6d28d9",
  },
  {
    id: "friseure",
    pill: "Friseure & Salons",
    headline: "Leere Termine kosten Geld.",
    subtitle:
      "Kunden buchen abends um 22 Uhr. Wer keine Online-Buchung hat, verliert diese Kunden dauerhaft an die Konkurrenz.",
    screenshot: "/Bildschirmfoto 2026-05-19 um 13.56.36.png",
    screenshotAlt: "Beispiel-Webdesign für Friseursalon",
    colorA: "#ff2d8f",
    colorB: "#c026d3",
  },
  {
    id: "restaurants",
    pill: "Restaurants & Cafés",
    headline: "Volle Tische. Jeden Abend.",
    subtitle:
      "Eine gute Website füllt dienstags die Tische — nicht nur freitags. Mit Online-Reservierung und lokalem SEO.",
    screenshot: "/Bildschirmfoto 2026-05-19 um 13.56.47.png",
    screenshotAlt: "Beispiel-Webdesign für Restaurant",
    colorA: "#c026d3",
    colorB: "#8b5cf6",
  },
];

// ─── Browser Mockup ───────────────────────────────────────────────────────────

function BrowserMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="overflow-hidden rounded-2xl"
      style={{
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 40px 100px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="flex items-center gap-2 px-3 py-2"
        style={{
          background: "rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div
          className="mx-2 flex flex-1 items-center justify-center rounded px-2 py-0.5"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <span className="text-[9px] text-muted/40">mein-betrieb.de</span>
        </div>
      </div>
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          quality={85}
          sizes="(max-width: 1024px) 0vw, 45vw"
        />
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function IndustriesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[];
      if (panels.length === 0) return;

      // All panels except first start hidden — slightly small, from depth
      gsap.set(panels.slice(1), { opacity: 0, scale: 0.82 });
      gsap.set(panels[0], { opacity: 1, scale: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2500vh",
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            setActive(Math.round(self.progress * (panels.length - 1)));
          },
        },
      });

      panels.forEach((panel, i) => {
        if (i === 0) return;
        // Exit: panel rushes towards viewer and disappears
        tl.to(
          panels[i - 1],
          { opacity: 0, scale: 1.35, duration: 1, ease: "power3.in" },
          i - 1
        );
        // Enter: panel materialises from depth
        tl.fromTo(
          panel,
          { opacity: 0, scale: 0.82 },
          { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
          i - 1
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="branchen" ref={containerRef} aria-label="Branchen">
      {/* Viewport-height container — GSAP pins this */}
      <div className="relative h-screen">

        {/* Panels — all stacked at absolute inset-0 */}
        {PANELS.map((panel, i) => {
          const gradient = `linear-gradient(135deg, ${panel.colorA}, ${panel.colorB})`;
          return (
            <div
              key={panel.id}
              ref={(el) => { panelRefs.current[i] = el; }}
              className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-20"
            >
              <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">

                {/* Left: Text */}
                <div className="flex flex-col justify-center">
                  <div className="mb-6">
                    <span
                      className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white"
                      style={{ background: gradient }}
                    >
                      {panel.pill}
                    </span>
                  </div>

                  <h2 className="font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-extrabold leading-[1.0] tracking-tight text-foreground text-balance">
                    {panel.headline}
                  </h2>

                  <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg text-pretty">
                    {panel.subtitle}
                  </p>

                  <div className="mt-10">
                    <a
                      href="#kontakt"
                      className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
                      style={{
                        background: gradient,
                        boxShadow: `0 8px 28px -4px ${panel.colorA}55`,
                      }}
                    >
                      Website anfragen
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>

                {/* Right: Browser Mockup — desktop only */}
                <div className="hidden lg:block">
                  <BrowserMockup src={panel.screenshot} alt={panel.screenshotAlt} />
                </div>
              </div>
            </div>
          );
        })}

        {/* Dot navigation — inside pinned container so it stays visible */}
        <div className="absolute right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 sm:flex">
          {PANELS.map((_, i) => (
            <div
              key={i}
              className={cn(
                "rounded-full transition-all duration-300",
                active === i
                  ? "h-3 w-3 bg-pink shadow-[0_0_8px_2px_rgba(255,45,143,0.5)]"
                  : "h-2 w-2 bg-white/25"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
