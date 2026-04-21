"use client";

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
    price: "ab 190 €/Monat",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Services() {
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

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
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
}

function ServiceCard({ service }: ServiceCardProps) {
  const { featured } = service;

  return (
    <motion.article
      whileHover={{ y: -4, transition: { duration: 0.35, ease } }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl p-8 md:p-10 transition-all duration-500 ${
        featured
          ? "border border-[#ff2d8f]/40 bg-gradient-to-br from-[#ff2d8f] to-[#8b5cf6] text-white shadow-[0_0_60px_rgba(255,45,143,0.22)] md:-translate-y-2"
          : "border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm"
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
      {featured && service.badge ? (
        <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-white backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          {service.badge}
        </span>
      ) : null}

      <span
        aria-hidden
        className={`pointer-events-none absolute -right-4 -top-6 select-none text-[160px] font-bold leading-none tracking-[-6px] transition-transform duration-700 group-hover:-rotate-2 group-hover:translate-y-1 ${
          featured ? "text-white/[0.12]" : "text-[#ff2d8f]/[0.08]"
        }`}
      >
        {service.number}
      </span>

      <div className="relative">
        <span className={`text-xs uppercase tracking-[0.14em] ${featured ? "text-white/70" : "text-white/40"}`}>
          Leistung / {service.number}
        </span>
        <h3 className="mt-4 text-3xl md:text-[32px] font-bold tracking-[-0.9px] leading-[1.05] text-white">
          {service.title}
        </h3>
        <p className={`mt-4 text-base leading-[1.55] ${featured ? "text-white/80" : "text-white/60"}`}>
          {service.description}
        </p>
      </div>

      <ul className="relative mt-8 space-y-3 text-sm">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-center gap-3">
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

      <div
        className={`relative mt-10 flex items-end justify-between border-t pt-6 ${
          featured ? "border-white/20" : "border-white/[0.08]"
        }`}
      >
        <div>
          <span className={`block text-xs uppercase tracking-[0.14em] ${featured ? "text-white/60" : "text-white/40"}`}>
            Investition
          </span>
          <span className="mt-1 block text-xl font-bold tracking-[-0.4px] text-white">
            {service.price}
          </span>
        </div>
        <a
          href="#kontakt"
          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 ${
            featured ? "text-white hover:text-white/80" : "text-[#ff2d8f] hover:text-[#ff6bb0]"
          }`}
          aria-label={`Mehr zu ${service.title}`}
        >
          Anfragen →
        </a>
      </div>
    </motion.article>
  );
}
