"use client";

import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { ArrowUpRight } from "@/lib/icons";
import {
  Scissors,
  UtensilsCrossed,
  Hammer,
  Stethoscope,
  Dumbbell,
  Store,
} from "@/lib/icons";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import type { ComponentType } from "react";

interface Industry {
  id: string;
  name: string;
  desc: string;
  sub: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  colorA: string;
  colorB: string;
}

const industries: Industry[] = [
  {
    id: "friseure",
    name: "Frisöre & Salons",
    desc: "Online-Buchung, Stylisten-Profile, Vorher-Nachher-Galerie.",
    sub: "Beauty & Wellness",
    icon: Scissors,
    colorA: "#ff2d8f",
    colorB: "#c026d3",
  },
  {
    id: "restaurants",
    name: "Restaurants & Cafés",
    desc: "Speisekarte, Tischreservierung, Click & Collect.",
    sub: "Gastronomie",
    icon: UtensilsCrossed,
    colorA: "#8b5cf6",
    colorB: "#6d28d9",
  },
  {
    id: "handwerk",
    name: "Handwerk",
    desc: "Referenzprojekte, Angebotsanfrage, Notfallkontakt.",
    sub: "Gewerbe & Bau",
    icon: Hammer,
    colorA: "#ff2d8f",
    colorB: "#8b5cf6",
  },
  {
    id: "praxen",
    name: "Praxen & Therapeuten",
    desc: "Online-Termine, Team-Vorstellung, Sprechzeiten.",
    sub: "Gesundheit & Therapie",
    icon: Stethoscope,
    colorA: "#8b5cf6",
    colorB: "#c026d3",
  },
  {
    id: "fitness",
    name: "Fitness & Yoga Studios",
    desc: "Kursplan, Probestunde online, Mitgliedschaft.",
    sub: "Sport & Bewegung",
    icon: Dumbbell,
    colorA: "#c026d3",
    colorB: "#ff2d8f",
  },
  {
    id: "kmus",
    name: "Sonstige KMUs",
    desc: "Vom Hofladen bis zum Steuerbüro — sichtbar werden.",
    sub: "Handel & Dienstleistung",
    icon: Store,
    colorA: "#6d28d9",
    colorB: "#8b5cf6",
  },
];

export function IndustriesSection() {
  return (
    <section
      id="branchen"
      aria-labelledby="branchen-h"
      className="relative overflow-hidden py-16 md:py-24"
    >
      {/* Ambient background orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-pink/10 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-32 h-[400px] w-[400px] rounded-full bg-violet/10 blur-[100px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <Pill tone="violet">Branchen</Pill>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="branchen-h"
                className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl text-balance"
              >
                Wir kennen{" "}
                <em className="font-serif italic font-normal text-gradient">
                  deine
                </em>{" "}
                Branche.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="md:col-span-5">
            <p className="text-base text-muted md:text-lg text-pretty">
              Vom kleinen Hofladen bis zum Yoga-Studio — Strukturen, Texte und
              Buchungssysteme, die genau zu deinem Alltag passen.
            </p>
          </Reveal>
        </div>

        {/* Industry grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.id} industry={industry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({
  industry,
  index,
}: {
  industry: Industry;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();
  const Icon = industry.icon;

  const gradient = `linear-gradient(135deg, ${industry.colorA}, ${industry.colorB})`;

  return (
    <motion.a
      href="#beispiele"
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 36 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      }}
      whileHover={reduce ? undefined : { y: -5, scale: 1.01 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      aria-label={industry.name}
      className="group relative block min-h-[260px] rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink"
    >
      {/* Base card surface */}
      <div className="absolute inset-0 rounded-3xl bg-white/[0.025] backdrop-blur-md border border-white/[0.07]" />

      {/* Hover glow fill */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-3xl"
        style={{ background: gradient }}
        animate={{ opacity: hovered ? 0.08 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Gradient border on hover — webkit-mask technique */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background: gradient,
          padding: "1px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      />

      {/* Card content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-7">
        {/* Top row: icon + sub-label */}
        <div className="flex items-start justify-between">
          {/* Icon with glow */}
          <motion.div
            className="relative"
            animate={
              reduce
                ? {}
                : { scale: hovered ? 1.1 : 1, rotate: hovered ? -6 : 0 }
            }
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Blur glow behind icon */}
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-2xl blur-xl"
              style={{ background: gradient }}
              animate={{ opacity: hovered ? 0.7 : 0.3, scale: hovered ? 1.3 : 1 }}
              transition={{ duration: 0.4 }}
            />
            {/* Icon container */}
            <span
              className="relative flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ background: gradient }}
              aria-hidden
            >
              <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
            </span>
          </motion.div>

          {/* Sub-label */}
          <span className="mt-1 rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
            {industry.sub}
          </span>
        </div>

        {/* Bottom: name + desc + arrow */}
        <div className="mt-8">
          <motion.h3
            className="font-display text-xl font-semibold tracking-tight text-foreground md:text-[1.35rem]"
            animate={{ x: hovered ? 3 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {industry.name}
          </motion.h3>
          <motion.p
            className="mt-2 text-sm leading-relaxed text-muted"
            animate={{ x: hovered ? 3 : 0 }}
            transition={{ duration: 0.3, delay: 0.04 }}
          >
            {industry.desc}
          </motion.p>

          {/* Arrow reveal */}
          <motion.div
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold"
            style={{ color: hovered ? industry.colorA : "rgba(161,161,170,0.8)" }}
            animate={{ x: hovered ? 3 : 0 }}
            transition={{ duration: 0.3, delay: 0.06 }}
          >
            Beispiel ansehen
            <motion.span
              animate={
                reduce
                  ? {}
                  : {
                      x: hovered ? 3 : 0,
                      y: hovered ? -3 : 0,
                    }
              }
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
}
