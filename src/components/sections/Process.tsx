"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

interface Step {
  title: string;
  description: string;
  weekStart: number;
  weekEnd: number;
  deliverables: string[];
  icon: "chat" | "pen" | "code" | "rocket";
}

const TOTAL_WEEKS = 6;

const STEPS: Step[] = [
  {
    title: "Gespräch & Strategie",
    description:
      "Wir lernen dein Unternehmen kennen, definieren Ziele und Zielgruppe.",
    weekStart: 1,
    weekEnd: 1,
    deliverables: ["Kennenlern-Call", "Zielbild", "Projektplan"],
    icon: "chat",
  },
  {
    title: "Design",
    description:
      "Erste Entwürfe, klare Iterationen — ruhig, markengerecht und stimmig.",
    weekStart: 2,
    weekEnd: 3,
    deliverables: ["Moodboard", "UI-Entwürfe", "Feedback"],
    icon: "pen",
  },
  {
    title: "Entwicklung",
    description:
      "Saubere Umsetzung — schnell, wartbar, SEO-freundlich und barrierearm.",
    weekStart: 3,
    weekEnd: 5,
    deliverables: ["Next.js-Build", "CMS", "Performance"],
    icon: "code",
  },
  {
    title: "Launch & Betreuung",
    description:
      "Go-live gemeinsam — auf Wunsch laufende Pflege, Updates und Analytics.",
    weekStart: 6,
    weekEnd: 6,
    deliverables: ["Go-Live", "Schulung", "Monitoring"],
    icon: "rocket",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function StepIcon({ name, className }: { name: Step["icon"]; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };
  switch (name) {
    case "chat":
      return (
        <svg {...common}>
          <path d="M4 5h16v10H8l-4 4V5z" />
          <path d="M8 9h8M8 12h5" />
        </svg>
      );
    case "pen":
      return (
        <svg {...common}>
          <path d="M4 20h4l10-10-4-4L4 16v4z" />
          <path d="M14 6l4 4" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 6l-4 12" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...common}>
          <path d="M5 19c0-3 1-5 3-7 3-3 7-5 11-5 0 4-2 8-5 11-2 2-4 3-7 3l-2-2z" />
          <circle cx="14" cy="10" r="1.6" />
          <path d="M7 17l-2 2M9 19l-1 1M5 15l-1 1" />
        </svg>
      );
  }
}

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 70%"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <section id="prozess" className="relative py-20 md:py-24 bg-charcoal-03 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#1c1c1c 1px, transparent 1px), linear-gradient(90deg, #1c1c1c 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Unser Prozess"
            title="Von der ersten Idee bis zum Launch — in rund sechs Wochen."
            description="Ein klarer Ablauf ohne Überraschungen. Du weißt jederzeit, wo wir stehen und was als Nächstes passiert."
          />
        </Reveal>

        <div ref={containerRef} className="relative mt-12 md:mt-14 max-w-4xl mx-auto">
          {/* Rail */}
          <div
            aria-hidden
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px -translate-x-px bg-line"
          />
          <motion.div
            aria-hidden
            style={{ scaleY: smooth }}
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px -translate-x-px bg-charcoal origin-top"
          />

          <ol className="relative space-y-6 md:space-y-8">
            {STEPS.map((step, i) => (
              <TimelineItem
                key={step.title}
                step={step}
                index={i}
                total={STEPS.length}
                scrollYProgress={smooth}
              />
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

interface TimelineItemProps {
  step: Step;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

function TimelineItem({ step, index, total, scrollYProgress }: TimelineItemProps) {
  const isRight = index % 2 === 1;
  const threshold = index / total;

  const cardRing = useTransform(scrollYProgress, (v) =>
    v >= threshold ? "#1c1c1c" : "#eceae4"
  );
  const dotFill = useTransform(scrollYProgress, (v) =>
    v >= threshold ? "#1c1c1c" : "#f7f4ed"
  );

  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease, delay: 0.05 }}
      className="relative grid md:grid-cols-2 md:gap-10"
    >
      {/* Dot */}
      <motion.span
        aria-hidden
        style={{ backgroundColor: dotFill }}
        className="absolute left-5 md:left-1/2 top-5 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-charcoal shadow-focus"
      />

      {/* Horizontal connector (desktop) */}
      <span
        aria-hidden
        className={`hidden md:block absolute top-6 h-px w-6 bg-line ${
          isRight ? "left-1/2 ml-2" : "right-1/2 mr-2"
        }`}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isRight ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease, delay: 0.12 }}
        className={`ml-12 md:ml-0 ${
          isRight ? "md:col-start-2 md:pl-6" : "md:col-start-1 md:pr-6 md:text-right"
        }`}
      >
        <motion.div
          style={{ borderColor: cardRing }}
          className={`relative overflow-hidden rounded-2xl border-2 bg-cream p-5 md:p-6 transition-shadow duration-500 hover:shadow-focus ${
            isRight ? "" : "md:ml-auto"
          }`}
        >
          {/* Watermark number */}
          <span
            aria-hidden
            className={`pointer-events-none absolute text-[80px] font-semibold leading-none tracking-[-4px] text-charcoal/[0.06] ${
              isRight ? "-left-1 -top-5" : "-right-1 -top-5"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Header row */}
          <div
            className={`relative flex items-center gap-3 ${
              isRight ? "justify-start" : "md:flex-row-reverse"
            }`}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-charcoal text-cream-soft shadow-inset">
              <StepIcon name={step.icon} className="h-5 w-5" />
            </span>
            <div className={`min-w-0 ${isRight ? "" : "md:text-right"}`}>
              <span className="block text-[10px] uppercase tracking-[0.14em] text-muted">
                Schritt {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <h3 className="mt-0.5 text-xl md:text-[22px] font-semibold tracking-[-0.5px] leading-[1.15]">
                {step.title}
              </h3>
            </div>
            <span
              className={`ml-auto rounded-pill border border-line bg-cream px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-muted whitespace-nowrap ${
                isRight ? "" : "md:ml-0 md:mr-auto md:order-first"
              }`}
            >
              {step.weekStart === step.weekEnd
                ? `W ${step.weekStart}`
                : `W ${step.weekStart}–${step.weekEnd}`}
            </span>
          </div>

          <p className="relative mt-3 text-sm text-muted leading-[1.5]">{step.description}</p>

          {/* Week bar + deliverables on one row */}
          <div
            className={`relative mt-4 flex items-center gap-3 ${
              isRight ? "" : "md:flex-row-reverse"
            }`}
          >
            <div className="relative h-1 w-16 shrink-0 rounded-pill bg-charcoal-04">
              <span
                className="absolute inset-y-0 rounded-pill bg-charcoal"
                style={{
                  left: `${((step.weekStart - 1) / TOTAL_WEEKS) * 100}%`,
                  width: `${((step.weekEnd - step.weekStart + 1) / TOTAL_WEEKS) * 100}%`,
                }}
              />
            </div>
            <ul
              className={`flex flex-wrap gap-1.5 ${
                isRight ? "" : "md:justify-end"
              }`}
            >
              {step.deliverables.map((d) => (
                <li
                  key={d}
                  className="inline-flex items-center gap-1 rounded-pill border border-line bg-charcoal-03 px-2 py-0.5 text-[11px] text-charcoal/80"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.li>
  );
}
