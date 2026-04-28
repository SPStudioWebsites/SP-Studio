"use client";

import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import {
  Scissors,
  UtensilsCrossed,
  Hammer,
  Stethoscope,
  Dumbbell,
  Store,
  Check,
  ChevronDown,
} from "@/lib/icons";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useState } from "react";
import type { ComponentType } from "react";

interface Industry {
  id: string;
  name: string;
  headline: string;
  text: string;
  bullets: string[];
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  colorA: string;
  colorB: string;
}

const industries: Industry[] = [
  {
    id: "handwerker",
    name: "Handwerk",
    headline: "Webseite für Handwerker, die Aufträge bringt",
    text: "Viele Handwerker verlieren täglich Kunden, weil sie online nicht sichtbar sind. Wir erstellen deine Webseite so, dass Kunden dich bei Google sofort finden.",
    bullets: ["Mehr Anfragen aus deiner Region", "Klare Darstellung deiner Leistungen", "Vertrauen durch Referenzen"],
    icon: Hammer,
    colorA: "#ff2d8f",
    colorB: "#8b5cf6",
  },
  {
    id: "friseur",
    name: "Frisöre & Salons",
    headline: "Webseite für Friseure, die Termine füllt",
    text: "Deine Kunden suchen online nach Friseuren – wir sorgen dafür, dass sie dich finden und direkt buchen.",
    bullets: ["Online-Buchung 24/7", "Mehr Neukunden durch Google", "Stylisten-Profile & Galerie"],
    icon: Scissors,
    colorA: "#ff2d8f",
    colorB: "#c026d3",
  },
  {
    id: "restaurant",
    name: "Restaurants",
    headline: "Webseite für Restaurants, die Gäste bringt",
    text: "Mit einer optimierten Webseite bekommst du mehr Reservierungen und wirst bei Google besser gefunden.",
    bullets: ["Tischreservierung online", "Speisekarte immer aktuell", "Mehr Sichtbarkeit in der Region"],
    icon: UtensilsCrossed,
    colorA: "#8b5cf6",
    colorB: "#6d28d9",
  },
  {
    id: "cafe",
    name: "Cafés",
    headline: "Webseite für Cafés mit lokalem SEO",
    text: "Werde sichtbar für Gäste in deiner Umgebung und steigere deine Besucherzahlen.",
    bullets: ["Lokal bei Google sichtbar", "Öffnungszeiten & Karte", "Mehr Laufkundschaft"],
    icon: Store,
    colorA: "#c026d3",
    colorB: "#8b5cf6",
  },
  {
    id: "praxen",
    name: "Praxen & Therapeuten",
    headline: "Webseite für Praxen, der man vertraut",
    text: "Patienten googeln ihren Arzt oder Therapeuten — stell sicher, dass sie dich finden und dir vertrauen.",
    bullets: ["Online-Terminbuchung", "Team & Leistungen klar kommuniziert", "Seriöser erster Eindruck"],
    icon: Stethoscope,
    colorA: "#8b5cf6",
    colorB: "#c026d3",
  },
  {
    id: "fitness",
    name: "Fitness & Yoga",
    headline: "Webseite für Studios, die Mitglieder gewinnt",
    text: "Zeig deinen Kursplan, lass Probestunden buchen und gewinne neue Mitglieder — automatisch.",
    bullets: ["Kursplan & Probestunden online", "Mehr Mitglieder durch Sichtbarkeit", "Mobile-optimiert"],
    icon: Dumbbell,
    colorA: "#c026d3",
    colorB: "#ff2d8f",
  },
];

export function IndustriesSection() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="branchen"
      aria-labelledby="branchen-h"
      className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-24"
    >
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[70vw] max-w-3xl -translate-x-1/2 rounded-full bg-violet/5 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6">
        {/* Header */}
        <Reveal>
          <div className="mb-10 text-center">
            <Pill tone="violet">Branchen</Pill>
            <h2
              id="branchen-h"
              className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl text-balance"
            >
              Wir kennen{" "}
              <em className="font-serif italic font-normal text-gradient">deine</em>{" "}
              Branche.
            </h2>
            <p className="mt-3 text-sm text-muted md:text-base">
              Klapp deine Branche auf und sieh, was wir für dich tun können.
            </p>
          </div>
        </Reveal>

        {/* Accordion */}
        <ul className="flex flex-col gap-3">
          {industries.map((industry, i) => {
            const isOpen = open === i;
            const Icon = industry.icon;
            const gradient = `linear-gradient(135deg, ${industry.colorA}, ${industry.colorB})`;

            return (
              <motion.li
                key={industry.id}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
                whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl transition-colors duration-300"
                style={{
                  background: isOpen ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.03)",
                  border: isOpen ? `1px solid rgba(255,255,255,0.14)` : "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                {/* Trigger */}
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left cursor-pointer md:px-6 md:py-5"
                >
                  {/* Icon */}
                  <span
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl shadow-md transition-transform duration-300"
                    style={{
                      background: gradient,
                      transform: isOpen ? "scale(1.08)" : "scale(1)",
                      boxShadow: isOpen ? `0 0 18px -4px ${industry.colorA}90` : "none",
                    }}
                  >
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                  </span>

                  {/* Label */}
                  <span className="flex-1 text-base font-semibold text-foreground md:text-lg">
                    {industry.name}
                  </span>

                  {/* Chevron */}
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300"
                    style={{
                      borderColor: isOpen ? `${industry.colorA}50` : undefined,
                      color: isOpen ? industry.colorA : undefined,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      {/* Gradient divider */}
                      <div className="mx-5 h-px md:mx-6" style={{ background: `linear-gradient(90deg, ${industry.colorA}60, ${industry.colorB}60, transparent)` }} />

                      <div className="px-5 pb-6 pt-4 md:px-6 md:pb-7">
                        <h3 className="font-display text-lg font-semibold text-foreground md:text-xl">
                          {industry.headline}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted md:text-[15px]">
                          {industry.text}
                        </p>
                        <ul className="mt-4 flex flex-col gap-2">
                          {industry.bullets.map((b) => (
                            <li key={b} className="flex items-center gap-2.5 text-sm text-foreground/85">
                              <span
                                className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                                style={{ background: gradient }}
                              >
                                <Check className="h-2.5 w-2.5 text-white" />
                              </span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>

        {/* CTA */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="#kontakt"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-9 py-4 text-base font-semibold text-white transition-all duration-500 hover:scale-[1.04]"
            style={{
              background: "linear-gradient(135deg, #ff2d8f 0%, #a855f7 50%, #8b5cf6 100%)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.12) inset, 0 8px 32px -4px rgba(168,85,247,0.45), 0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            {/* inner highlight */}
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            {/* hover shimmer */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Kostenlos Anfragen</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
