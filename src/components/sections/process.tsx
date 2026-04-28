"use client";

import { process } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import { Check } from "@/lib/icons";
import { useGyroContext } from "@/components/effects/gyro-provider";
import type { GyroPos } from "@/hooks/use-gyro";

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
  const { pos: gyroPos, active: gyroActive } = useGyroContext();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.65", "end 0.35"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const reduce = useReducedMotion();

  return (
    <section
      id="ablauf"
      aria-labelledby="ablauf-h"
      className="relative py-16 md:py-24"
    >
      <div aria-hidden className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-pink/5 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute right-0 bottom-1/3 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-violet/5 blur-[120px]" />

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
              In{" "}
              <em className="font-serif italic font-normal text-gradient">
                vier Schritten
              </em>{" "}
              zur fertigen Website.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg text-pretty">
              Klar strukturiert, mit echten Zeitfenstern. Ohne Buzzwords.
              Ohne Folien-Marathon.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-20">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/[0.06] md:left-1/2 md:-translate-x-px" />
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
                    {onLeft && <StepCard step={step} index={i} gyroPos={gyroActive ? gyroPos : undefined} />}
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
                        className="absolute inset-0 animate-ping rounded-full opacity-20"
                        style={{ background: `radial-gradient(circle, ${GLOW[i]}, transparent)` }}
                      />
                    </div>
                  </div>

                  {/* Right slot */}
                  <div className={`hidden md:block md:w-1/2 md:pl-14 ${!onLeft ? "" : "md:invisible"}`}>
                    {!onLeft && <StepCard step={step} index={i} gyroPos={gyroActive ? gyroPos : undefined} />}
                  </div>

                  {/* Mobile card */}
                  <div className="pl-14 md:hidden">
                    <StepCard step={step} index={i} gyroPos={gyroActive ? gyroPos : undefined} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
  gyroPos,
}: {
  step: (typeof process)[number];
  index: number;
  gyroPos?: GyroPos;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState<GyroPos>({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const reflectPos    = gyroPos ?? mouse;
  const reflectActive = gyroPos ? true : hovered;

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (gyroPos) return; // gyro takes over on mobile
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
      onMouseEnter={() => { if (!gyroPos) setHovered(true); }}
      onMouseLeave={() => { if (!gyroPos) setHovered(false); }}
      className="group relative overflow-hidden rounded-2xl p-6"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(28px) saturate(180%)",
        WebkitBackdropFilter: "blur(28px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), 0 8px 40px rgba(0,0,0,0.3)",
      }}
    >
      {/* Border reflection — mouse on desktop, gyro on mobile */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${reflectPos.x}% ${reflectPos.y}%, rgba(255,255,255,0.55) 0%, transparent 45%)`,
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          opacity: reflectActive ? 1 : 0,
          transition: gyroPos ? "opacity 0.6s ease, background 0.1s ease" : "opacity 0.4s ease",
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
