"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

interface Service {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  price: string;
  featured?: boolean;
  badge?: string;
}

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Webdesign",
    description:
      "Maßgeschneiderte Gestaltung, die deine Marke klar, warm und professionell wirken lässt.",
    bullets: ["Markenanalyse", "UI & UX Design", "Designsystem", "Prototyp"],
    price: "ab 1.900 €",
  },
  {
    number: "02",
    title: "Komplett-Website",
    description:
      "Design & Entwicklung aus einer Hand. Launch-fertig in rund sechs Wochen — SEO-freundlich, schnell und wartbar.",
    bullets: [
      "Design & Entwicklung",
      "Next.js & React",
      "CMS-Anbindung",
      "SEO & Performance",
      "Launch & Schulung",
    ],
    price: "ab 3.900 €",
    featured: true,
    badge: "Beliebteste Wahl",
  },
  {
    number: "03",
    title: "Betreuung",
    description:
      "Wir bleiben an deiner Seite: Pflege, Updates und Weiterentwicklung im festen Monatspaket.",
    bullets: ["Monatliche Betreuung", "Inhaltliche Updates", "Analytics & Reports"],
    price: "ab 190 €/Mo.",
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(1);

  const goTo = (next: number) => {
    if (next < 0 || next >= SERVICES.length) return;
    setActiveIndex(next);
  };

  return (
    <section id="leistungen" className="relative py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,45,143,0.07) 0%, transparent 60%)",
        }}
      />
      <Container className="relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow="Leistungen"
              title="Klar kalkuliert. Messbar wirksam."
              highlight="Messbar wirksam."
              description="Drei Pakete, die zu kleinen Unternehmen passen — transparent, fair und ohne versteckte Kosten."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="#kontakt"
              className="hidden md:inline-flex items-center gap-2 text-sm text-white/40 transition-colors duration-300 hover:text-white"
            >
              Individuelles Angebot anfragen →
            </a>
          </Reveal>
        </div>

        {/* Mobile: peek carousel */}
        <div className="mt-14 md:hidden">
          {/* Relative wrapper — arrows position relative to this */}
          <div className="relative -mx-6">
            {/* Sliding track — no overflow-hidden so peek cards show at edges */}
            <div
              className="flex gap-4 transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(calc(${-activeIndex} * (80vw + 16px) + 10vw))`,
              }}
            >
              {SERVICES.map((service, i) => (
                <div
                  key={service.title}
                  className={`w-[80vw] shrink-0 transition-opacity duration-350 ${
                    i === activeIndex ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <ServiceCard service={service} index={i} mobile />
                </div>
              ))}
            </div>

            {/* Left arrow — vertically centered on the track */}
            <button
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Vorheriges Paket"
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white/80 backdrop-blur-sm transition-all duration-200 disabled:opacity-0"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Right arrow */}
            <button
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === SERVICES.length - 1}
              aria-label="Nächstes Paket"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white/80 backdrop-blur-sm transition-all duration-200 disabled:opacity-0"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {SERVICES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Paket ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "h-1.5 w-5 bg-[#ff2d8f]"
                    : "h-1.5 w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: all three cards side by side — unchanged */}
        <div className="hidden mt-14 md:flex md:w-full md:items-start md:justify-center md:gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <Reveal delay={0.25}>
          <p className="mt-10 text-center text-sm text-white/30">
            Jedes Projekt erhält vor Start ein transparentes Festpreisangebot. Keine Abos, keine
            Überraschungen.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  index: number;
  mobile?: boolean;
}

function ServiceCard({ service, index, mobile }: ServiceCardProps) {
  const { featured } = service;

  return (
    <motion.article
      initial={mobile ? false : { scale: 0.95, opacity: 0 }}
      whileInView={mobile ? undefined : { scale: 1, opacity: 1 }}
      viewport={mobile ? undefined : { once: true, margin: "-60px" }}
      transition={
        mobile ? undefined : { type: "spring", duration: 0.5, delay: index * 0.1 }
      }
      className={`relative flex w-full flex-col rounded-2xl border p-8 text-center transition-transform duration-300 hover:scale-[1.03] md:w-80 ${
        featured
          ? "border-[#ff2d8f]/40 bg-gradient-to-br from-[#ff2d8f] to-[#8b5cf6] shadow-[0_0_60px_rgba(255,45,143,0.22)] md:-translate-y-3"
          : "border-white/[0.08] bg-white/[0.04] backdrop-blur-sm"
      }`}
      style={
        !featured
          ? {
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.25)",
            }
          : undefined
      }
    >
      {/* Badge */}
      {featured && service.badge ? (
        <span className="mb-5 inline-flex items-center justify-center gap-1.5 self-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-white backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          {service.badge}
        </span>
      ) : null}

      {/* Price */}
      <div
        className={`mb-1 text-4xl font-extrabold tracking-[-1px] ${
          featured ? "text-white" : "text-[#ff2d8f]"
        }`}
      >
        {service.price}
      </div>

      {/* Title */}
      <div
        className={`mb-5 text-sm font-medium ${
          featured ? "text-white/70" : "text-white/40"
        }`}
      >
        {service.title}
      </div>

      {/* Description */}
      <p
        className={`mb-6 text-sm leading-[1.6] ${
          featured ? "text-white/80" : "text-white/55"
        }`}
      >
        {service.description}
      </p>

      {/* Feature list */}
      <ul className="mb-8 grow space-y-2.5 text-left text-sm">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-center gap-2.5">
            <span
              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                featured ? "bg-white/20" : "bg-[#8b5cf6]/20"
              }`}
            >
              <svg
                viewBox="0 0 10 10"
                className={`h-2.5 w-2.5 ${featured ? "text-white" : "text-[#8b5cf6]"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 5.5 L4.2 7.5 L8 3" />
              </svg>
            </span>
            <span className={featured ? "text-white/90" : "text-white/75"}>{b}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#kontakt"
        className={`mt-auto block w-full rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-300 ${
          featured
            ? "bg-white text-[#ff2d8f] hover:bg-white/90"
            : "bg-[#ff2d8f] text-white shadow-[0_0_20px_rgba(255,45,143,0.28)] hover:bg-[#ff4a9f] hover:shadow-[0_0_32px_rgba(255,45,143,0.5)]"
        }`}
      >
        Anfragen
      </a>
    </motion.article>
  );
}
