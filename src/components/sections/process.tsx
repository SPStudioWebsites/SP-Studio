"use client";

import { process } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Check } from "@/lib/icons";

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.5", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="ablauf"
      aria-labelledby="ablauf-h"
      className="relative py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
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
              <em className="font-serif italic font-normal text-gradient">vier Schritten</em>{" "}
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

        <div ref={ref} className="relative mt-20 grid gap-12 md:grid-cols-[1fr_auto_1fr]">
          {/* Center timeline */}
          <div className="absolute left-6 top-2 bottom-2 hidden md:left-1/2 md:block md:-translate-x-1/2">
            <div className="h-full w-px bg-white/[0.08]" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute inset-x-0 top-0 w-px bg-gradient-to-b from-pink via-fuchsia-500 to-violet"
            />
          </div>

          <div className="contents md:hidden">
            <div className="absolute left-6 top-2 bottom-2 w-px bg-white/[0.08] md:hidden" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-6 top-0 w-px bg-gradient-to-b from-pink via-fuchsia-500 to-violet md:hidden"
            />
          </div>

          {process.map((step, i) => {
            const onLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`md:col-span-3 grid grid-cols-[auto_1fr] items-start gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center ${
                  i > 0 ? "mt-4 md:mt-12" : ""
                }`}
              >
                <div className={`hidden md:block ${onLeft ? "" : "md:order-3"}`}>
                  {onLeft ? <StepCard step={step} /> : <StepImage step={step} />}
                </div>

                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] font-mono text-xs font-semibold tracking-wider text-pink shadow-[0_0_30px_-10px_rgba(255,45,143,0.6)] md:order-2">
                  {step.n}
                </div>

                <div className={`md:hidden`}>
                  <StepCard step={step} />
                </div>

                <div className={`hidden md:block ${onLeft ? "md:order-3" : ""}`}>
                  {onLeft ? <StepImage step={step} /> : <StepCard step={step} />}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step }: { step: (typeof process)[number] }) {
  return (
    <div className="rounded-3xl glass p-7 md:p-8">
      <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
        {step.title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted text-pretty">
        {step.desc}
      </p>
      <ul className="mt-6 grid gap-2 sm:grid-cols-3">
        {step.points.map((p) => (
          <li
            key={p}
            className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[12px] text-foreground/85"
          >
            <Check className="h-3 w-3 text-pink" aria-hidden />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function StepImage({ step }: { step: (typeof process)[number] }) {
  return (
    <div className="relative hidden h-44 overflow-hidden rounded-3xl glass-strong md:block">
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 gap-px opacity-30">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="bg-white/[0.03]" />
        ))}
      </div>
      <div className="relative flex h-full flex-col justify-between p-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Schritt {step.n}
        </span>
        <div>
          <div className="text-gradient font-display text-5xl font-bold leading-none">
            {step.n}
          </div>
        </div>
      </div>
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pink/15 blur-2xl" />
    </div>
  );
}
