"use client";

import { process } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { useRef, useState, useEffect } from "react";
import type { CSSProperties, MouseEvent, RefObject } from "react";
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
  const [lineHeight, setLineHeight] = useState(0);
  const [beamActive, setBeamActive] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const container = containerRef.current;
      const box = boxRef.current;
      if (!container || !box) return;

      const rawMaxPx =
        box.getBoundingClientRect().top -
        container.getBoundingClientRect().top;
      const maxPx = Math.max(0, rawMaxPx - 12);
      const sectionH = container.offsetHeight;
      const vh = window.innerHeight;

      // With offset ["start A", "end 0"]:
      // total scroll range = sectionH + A*vh
      // T = maxPx / (sectionH + A*vh)
      const A = 0.4;
      const T = rawMaxPx / (sectionH + A * vh);
      const triggerT = Math.max(0.05, Math.min(0.98, T));

      setLineCap((prev) =>
        Math.abs(prev.maxPx - maxPx) > 0.5 || Math.abs(prev.triggerT - triggerT) > 0.001
          ? { maxPx, triggerT }
          : prev
      );

      const rect = container.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, (vh * A - rect.top) / (sectionH + A * vh))
      );
      const nextHeight = Math.max(0, Math.min(maxPx, maxPx * (progress / triggerT)));
      setLineHeight(nextHeight);
      if (progress >= triggerT * 0.985) setBeamActive(true);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section
      id="ablauf"
      aria-labelledby="ablauf-h"
      className="relative overflow-hidden pt-4 pb-10 md:pt-6 md:pb-20"
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
              Fertig in 14 Tagen.{" "}
              <em className="font-display font-extrabold not-italic text-gradient">
                Dann klingelt dein Telefon.
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
          <div
            style={{ height: `${lineHeight}px` }}
            className="absolute left-5 top-0 w-px bg-gradient-to-b from-pink via-fuchsia-500 to-violet md:left-1/2 md:-translate-x-px"
          />

          <div className="space-y-10 md:space-y-0">
            {process.map((step, i) => {
              const onLeft = i % 2 === 0;
              return (
                <Reveal
                  key={step.n}
                  y={40}
                  delay={0.05 * i}
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
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col items-center">
            <BestBox beamActive={beamActive} bRef={boxRef} />
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="#kontakt"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm md:px-10 md:py-4 md:text-base md:gap-2.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_44px_-4px_rgba(255,45,143,0.8)] animate-cta-pulse"
              style={{
                background: "linear-gradient(110deg, #ff2d8f 0%, #c026d3 50%, #8b5cf6 100%)",
                boxShadow: "0 6px 36px -6px rgba(255,45,143,0.5)",
              }}
            >
              <span className="absolute inset-px rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-60 mix-blend-overlay" />
              <span className="relative">Jetzt kostenlos beraten lassen</span>
              <Check className="relative h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
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

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
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
      className={`process-step-card glass-feature group relative overflow-hidden rounded-2xl p-6 ${hovered ? "is-hovered" : ""}`}
      style={{ "--spot-x": `${mouse.x}%`, "--spot-y": `${mouse.y}%` } as CSSProperties}
    >
      {/* Border reflection on hover */}
      <div
        aria-hidden
        className="process-step-reflection pointer-events-none absolute inset-0 rounded-2xl"
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
  beamActive,
  bRef,
}: {
  beamActive: boolean;
  bRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={bRef}
      className="reveal-on-scroll reveal-y-32 glass-feature relative w-full max-w-2xl overflow-hidden rounded-2xl p-8 text-center"
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
          <li
            key={item}
            className="process-check-item flex items-center gap-3 text-[15px] text-foreground/90"
            style={{ "--process-check-delay": `${0.1 + i * 0.07}s` } as CSSProperties}
          >
            <span
              className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
              style={{ background: "linear-gradient(135deg, #ff2d8f, #8b5cf6)" }}
            >
              <Check className="h-2.5 w-2.5 text-white" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BorderTrace({ bRef }: { bRef: RefObject<HTMLDivElement | null> }) {
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
      <rect
        x={1} y={1}
        width={dims.w - 2} height={dims.h - 2}
        rx={16} ry={16}
        fill="none"
        stroke="url(#bt-grad)"
        strokeWidth={6}
        strokeOpacity={0.35}
        filter="url(#bt-glow)"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1}
        className="border-trace-draw"
      />

      {/* Sharp border trace — on top */}
      <rect
        x={1} y={1}
        width={dims.w - 2} height={dims.h - 2}
        rx={16} ry={16}
        fill="none"
        stroke="url(#bt-grad)"
        strokeWidth={1.5}
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1}
        className="border-trace-draw"
      />
    </svg>
  );
}
