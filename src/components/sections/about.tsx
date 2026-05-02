"use client";

import { about } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { GlassCard } from "@/components/ui/glass-card";
import { Quote, MapPin } from "@/lib/icons";
import { motion } from "motion/react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="ueber-uns"
      aria-labelledby="ueber-uns-h"
      className="relative overflow-hidden py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 h-[50%] bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(139,92,246,0.07),transparent)]"
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <Pill tone="violet">{about.eyebrow}</Pill>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="ueber-uns-h"
                className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl text-balance"
              >
                Aus Haßfurt.{" "}
                <em className="font-display font-extrabold not-italic text-gradient">Für dich.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7 space-y-5 text-base leading-relaxed text-muted md:text-lg text-pretty">
                {about.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <figure className="relative mt-10 rounded-3xl glass-strong p-7">
                <Quote
                  aria-hidden
                  className="absolute -top-3 -left-2 h-10 w-10 text-pink/40"
                />
                <blockquote className="font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
                  &bdquo;{about.quote}&ldquo;
                </blockquote>
              </figure>
            </Reveal>

            <Reveal delay={0.4}>
              <dl className="mt-10 grid grid-cols-2 gap-4">
                {about.stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-center">
                    <dt className="font-display text-2xl font-semibold text-gradient md:text-3xl">
                      {s.value}
                    </dt>
                    <dd className="mt-1 text-xs text-muted">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/Über-Mich.jpeg"
                alt="Simon, Inhaber Schnell-Sichtbar.de"
                width={800}
                height={1000}
                className="w-full object-cover"
                style={{ maxHeight: "600px" }}
                quality={80}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function RegionMap() {
  return (
    <div className="relative">
      <GlassCard variant="strong" className="relative aspect-[5/4] overflow-hidden p-6">
        <div className="absolute inset-0 opacity-50">
          <svg
            viewBox="0 0 100 80"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <defs>
              <radialGradient id="grad-region" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ff2d8f" stopOpacity="0.18" />
                <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.08" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="100" height="80" fill="url(#grad-region)" />
            <path
              d="M15,20 Q25,10 40,15 T70,18 Q85,22 88,40 Q90,58 78,68 Q60,78 40,72 Q22,68 14,55 Q8,38 15,20 Z"
              fill="rgba(255,255,255,0.025)"
              stroke="rgba(255,45,143,0.35)"
              strokeWidth="0.4"
              strokeDasharray="1.5 1.5"
            />
          </svg>
        </div>

        {/* Hotspots */}
        {about.cities.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute"
            style={{
              left: `${c.x}%`,
              top: `${c.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="group relative">
              <span className="absolute inset-0 -z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink/30 blur-md animate-pulse-soft" />
              <span className="block h-2.5 w-2.5 rounded-full bg-pink shadow-[0_0_15px_rgba(255,45,143,0.9)]" />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] font-medium text-foreground/85">
                {c.name}
              </span>
            </div>
          </motion.div>
        ))}

        <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full glass-pill px-4 py-2 text-xs font-medium">
          <MapPin className="h-3.5 w-3.5 text-pink" aria-hidden />
          Termin vor Ort möglich
        </div>
      </GlassCard>
    </div>
  );
}
