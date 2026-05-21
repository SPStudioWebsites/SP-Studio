"use client";

import { process } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { motion, useScroll, useTransform, useReducedMotion, useMotionValueEvent } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Check } from "@/lib/icons";

const ACCENT = [
  "from-pink to-fuchsia-500",
  "from-fuchsia-500 to-violet",
  "from-violet to-fuchsia-500",
  "from-fuchsia-500 to-pink",
];

const GLOW = [
  "rgba(255,45,143,0.6)",
  "rgba(192,38,211,0.6)",
  "rgba(139,92,246,0.6)",
  "rgba(192,38,211,0.6)",
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  // lineCap.maxPx  = px from container-top to box-top  (line stops here)
  // lineCap.triggerT = scrollYProgress value at which the box enters the viewport
  const [lineCap, setLineCap] = useState({ maxPx: 0, triggerT: 0.75 });
  const [beamActive, setBeamActive] = useState(false);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const box = boxRef.current;
      if (!container || !box) return;

      const maxPx =
        box.getBoundingClientRect().top -
        container.getBoundingClientRect().top;
      const sectionH = container.offsetHeight;
      const vh = window.innerHeight;

      // With offset ["start A", "end 0"]:
      // total scroll range = sectionH + A*vh
      // T = maxPx / (sectionH + A*vh)
      const A = 0.4;
      const T = maxPx / (sectionH + A * vh);

      setLineCap({
        maxPx: Math.max(0, maxPx - 12),
        triggerT: Math.max(0.05, Math.min(0.98, T)),
      });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.4", "end 0"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, lineCap.triggerT],
    ["0px", `${lineCap.maxPx}px`],
    { clamp: true }
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!beamActive && v >= lineCap.triggerT * 0.985) setBeamActive(true);
  });

  const reduce = useReducedMotion();

  return (
    <section
      id="ablauf"
      aria-labelledby="ablauf-h"
      className="relative overflow-hidden pt-4 pb-16 md:pt-6 md:pb-24"
    >
      <div aria-hidden className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-pink/5 blur-[120px] hidden md:block" />
      <div aria-hidden className="pointer-events-none absolute right-0 bottom-1/3 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-violet/5 blur-[120px] hidden md:block" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Pill>Ablauf</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="ablauf-h"
              className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl text-balance"
            >
              In 14 Tagen{" "}
              <em className="font-display font-extrabold not-italic text-gradient">
                klingelt dein Telefon.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg text-pretty">
              Kein Stress, kein Technik-Kram. Du lieferst die Infos,
              ich liefere die Webseite.
            </p>
          </Reveal>
        </div>

        <div ref={containerRef} className="relative mt-20">
          {/* Gray guide line — stops at box top */}
          <div
            className="absolute left-5 top-0 w-px bg-white/[0.06] md:left-1/2 md:-translate-x-px"
            style={{ height: lineCap.maxPx > 0 ? `${lineCap.maxPx}px` : "100%" }}
          />
          {/* Animated gradient line — grows to box top then stops */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-5 top-0 w-px bg-gradient-to-b from-pink via-fuchsia-500 to-violet md:left-1/2 md:-translate-x-px"
          />

          <div className="space-y-10 md:space-y-0">
            {process.map((step, i) => {
              const onLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.n}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
                  whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 * i }}
                  className="relative md:flex md:min-h-[160px] md:items-center"
                >
                  {/* Left slot */}
                  <div className={`hidden md:block md:w-1/2 md:pr-14 ${onLeft ? "" : "md:invisible"}`}>
                    {onLeft && <StepCard step={step} />}
                  </div>

                  {/* Center node */}
                  <div className="absolute left-5 top-0 z-10 -translate-x-1/2 md:relative md:left-auto md:top-auto md:translate-x-0 md:flex md:flex-shrink-0 md:items-center md:justify-center">
                    <div
                      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0a0a0a]"
                      style={{ boxShadow: `0 0 0 4px rgba(10,10,10,0.9), 0 0 20px -4px ${GLOW[i]}` }}
                    >
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${ACCENT[i]} opacity-15`} />
                      <span className="relative font-mono text-[11px] font-bold tracking-wider text-pink">
                        {step.n}
                      </span>
                      <span
                        className="absolute inset-0 animate-ping rounded-full opacity-20 hidden md:block"
                        style={{ background: `radial-gradient(circle, ${GLOW[i]}, transparent)` }}
                      />
                    </div>
                  </div>

                  {/* Right slot */}
                  <div className={`hidden md:block md:w-1/2 md:pl-14 ${!onLeft ? "" : "md:invisible"}`}>
                    {!onLeft && <StepCard step={step} />}
                  </div>

                  {/* Mobile card */}
                  <div className="pl-14 md:hidden">
                    <StepCard step={step} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col items-center">
            <BestBox reduce={!!reduce} beamActive={beamActive} bRef={boxRef} />
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
}: {
  step: (typeof process)[number];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-feature group relative overflow-hidden rounded-2xl p-6"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), 0 8px 40px rgba(0,0,0,0.3)",
      }}
    >
      {/* Border reflection on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(255,255,255,0.55) 0%, transparent 45%)`,
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Content */}
      <p className="relative font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-pink/70">
        Schritt {step.n}
      </p>
      <h3 className="relative mt-2 font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
        {step.title}
      </h3>
      <p className="relative mt-2.5 text-sm leading-relaxed text-muted text-pretty">
        {step.desc}
      </p>
      <ul className="relative mt-4 flex flex-wrap gap-2">
        {step.points.map((p) => (
          <li
            key={p}
            className="flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-foreground/75"
          >
            <Check className="h-2.5 w-2.5 flex-shrink-0 text-pink" aria-hidden />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BestBox({
  reduce,
  beamActive,
  bRef,
}: {
  reduce: boolean;
  beamActive: boolean;
  bRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <motion.div
      ref={bRef}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32, scale: 0.96 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="glass-feature relative w-full max-w-2xl overflow-hidden rounded-2xl p-8 text-center"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 40px rgba(0,0,0,0.3)",
      }}
    >
      {beamActive && <BorderTrace bRef={bRef} />}

      {/* Subtle gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.18) 0%, transparent 65%)" }}
      />

      {/* Top border glow */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px rounded-full"
        style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.6) 50%, transparent)" }}
      />

      <p className="relative font-mono text-xs font-semibold uppercase tracking-[0.22em] text-violet/80">
        Das Beste daran
      </p>
      <h3 className="relative mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Du musst{" "}
        <em className="font-display font-extrabold not-italic text-gradient">nichts wissen.</em>
      </h3>
      <p className="relative mt-2 text-base text-muted text-pretty">
        Nur 30 Minuten deiner Zeit nötig. Ich erledige den Rest.
      </p>

      <ul className="relative mt-6 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
        {[
          "Keine Vorkenntnisse nötig",
          "Persönliche Betreuung von A bis Z",
          "Fertig in durchschnittlich 14 Tagen",
          "Individuell ohne Technik-Bla-Bla",
        ].map((item, i) => (
          <motion.li
            key={item}
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: -12 }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.07 }}
            className="flex items-center gap-3 text-[15px] text-foreground/90"
          >
            <span
              className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
              style={{ background: "linear-gradient(135deg, #ff2d8f, #8b5cf6)" }}
            >
              <Check className="h-2.5 w-2.5 text-white" />
            </span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function BorderTrace({ bRef }: { bRef: React.RefObject<HTMLDivElement | null> }) {
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    if (bRef.current) {
      const r = bRef.current.getBoundingClientRect();
      setDims({ w: r.width, h: r.height });
    }
  }, [bRef]);

  if (!dims) return null;

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0"
      width={dims.w}
      height={dims.h}
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id="bt-grad" x1="0" y1="0" x2={dims.w} y2={dims.h} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff2d8f" />
          <stop offset="55%" stopColor="#c026d3" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <filter id="bt-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glow halo — wider, softer, behind */}
      <motion.rect
        x={1} y={1}
        width={dims.w - 2} height={dims.h - 2}
        rx={16} ry={16}
        fill="none"
        stroke="url(#bt-grad)"
        strokeWidth={6}
        strokeOpacity={0.35}
        filter="url(#bt-glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Sharp border trace — on top */}
      <motion.rect
        x={1} y={1}
        width={dims.w - 2} height={dims.h - 2}
        rx={16} ry={16}
        fill="none"
        stroke="url(#bt-grad)"
        strokeWidth={1.5}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
      />
    </svg>
  );
}
