"use client";

import { portfolio } from "@/lib/content";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, Star } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function PortfolioSection() {
  return (
    <section
      id="beispiele"
      aria-labelledby="beispiele-h"
      className="relative overflow-hidden py-28 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 h-[60%] bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(139,92,246,0.08),transparent)]"
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <Pill tone="pink">Beispiel-Webseiten · keine echten Live-Projekte</Pill>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="beispiele-h"
                className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl text-balance"
              >
                So{" "}
                <em className="font-serif italic font-normal text-gradient">könnte</em>{" "}
                deine aussehen.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="md:col-span-5">
            <p className="text-base text-muted md:text-lg text-pretty">
              Vier Beispiel-Designs, die unseren Stil zeigen — modern, klar,
              conversion-orientiert. Echtes Briefing? Wir bauen genauso für dich.
            </p>
          </Reveal>
        </div>

        <RevealStagger
          staggerChildren={0.12}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {portfolio.map((p, i) => (
            <RevealItem key={p.name} y={30}>
              <PortfolioCard project={p} index={i} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function PortfolioCard({
  project,
  index,
}: {
  project: (typeof portfolio)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);

  return (
    <motion.article
      ref={ref}
      style={{ y }}
      className={cn(
        "group relative",
        index % 2 === 1 && "md:mt-16"
      )}
    >
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-pink/10 via-transparent to-violet/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <BrowserFrame
        url={`${project.name.toLowerCase().replace(/\s+/g, "-")}.de`}
        tone={project.mock.tone as "warm" | "italian" | "wood" | "soft"}
        className="transition-transform duration-500 group-hover:scale-[1.015]"
      >
        <MockSite mock={project.mock} accent={project.accent} />
      </BrowserFrame>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 px-1">
        <div>
          <h3 className="font-display text-lg font-semibold tracking-tight md:text-xl">
            {project.name}{" "}
            <span className="text-muted font-normal">— {project.branche} (Beispiel)</span>
          </h3>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
            {project.location}
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/85">
          <Star className="h-3.5 w-3.5 fill-pink text-pink" aria-hidden />
          {project.metric}
        </span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 px-1">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-0.5 text-[11px] text-muted"
          >
            {t}
          </span>
        ))}
        <a
          href="#kontakt"
          className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-pink hover:underline"
        >
          So eine Seite anfragen
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </motion.article>
  );
}

function MockSite({
  mock,
  accent,
}: {
  mock: (typeof portfolio)[number]["mock"];
  accent: string;
}) {
  const accentColor =
    accent === "pink" ? "from-pink to-violet" : "from-violet to-pink";
  return (
    <div className="relative aspect-[16/10.5] w-full overflow-hidden p-6 md:p-8">
      {/* Mock nav */}
      <div className="flex items-center justify-between text-[10px] tracking-[0.2em] text-foreground/70">
        <span className="font-semibold uppercase">{mock.brand}</span>
        <div className="hidden gap-4 md:flex">
          <span>Start</span>
          <span>Leistungen</span>
          <span>Kontakt</span>
        </div>
      </div>
      {/* Headline */}
      <div className="mt-8 max-w-md">
        <h4 className="font-display text-2xl font-semibold leading-tight md:text-3xl">
          {mock.headline}
        </h4>
        <p className="mt-3 text-xs text-muted md:text-sm">{mock.sub}</p>
        <div
          className={cn(
            "mt-5 inline-flex h-8 items-center rounded-full bg-gradient-to-r px-4 text-[11px] font-medium text-white shadow-[0_8px_25px_-8px_rgba(255,45,143,0.5)] md:h-10 md:text-xs",
            accentColor
          )}
        >
          {mock.cta}
        </div>
      </div>
      {/* Decoration */}
      <div className="absolute -right-10 -top-8 h-44 w-44 rounded-full bg-pink/15 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-violet/15 blur-3xl" />
      <div className="absolute bottom-6 right-6 hidden gap-2 md:flex">
        <span className="h-1.5 w-6 rounded-full bg-pink/70" />
        <span className="h-1.5 w-2 rounded-full bg-white/15" />
        <span className="h-1.5 w-2 rounded-full bg-white/15" />
      </div>
    </div>
  );
}
