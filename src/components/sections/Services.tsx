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
      <Container>
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
              className="hidden md:inline-flex items-center gap-2 text-sm text-charcoal underline-offset-4 hover:underline"
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
          <p className="mt-10 text-center text-sm text-muted">
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
  const baseCard =
    "group relative flex h-full flex-col overflow-hidden rounded-2xl p-8 md:p-10 transition-all duration-500 ease-soft";
  const featuredCard =
    "bg-charcoal text-cream-soft shadow-inset border border-charcoal md:-translate-y-2 hover:md:-translate-y-3";
  const standardCard =
    "bg-cream text-charcoal border border-line hover:border-charcoal-40 hover:-translate-y-1";

  const numberColor = featured ? "text-cream-soft/40" : "text-charcoal/25";
  const descColor = featured ? "text-cream-soft/70" : "text-muted";
  const priceBorder = featured ? "border-cream-soft/20" : "border-line";
  const priceLabel = featured ? "text-cream-soft/60" : "text-muted";
  const ctaColor = featured ? "text-cream-soft" : "text-charcoal";
  const dotColor = featured ? "bg-cream-soft/40" : "bg-charcoal-40";

  return (
    <motion.article
      whileHover={{ transition: { duration: 0.4, ease } }}
      className={`${baseCard} ${featured ? featuredCard : standardCard}`}
    >
      {featured && service.badge ? (
        <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-pill border border-cream-soft/20 bg-cream-soft/10 px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-cream-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {service.badge}
        </span>
      ) : null}

      {/* background glyph */}
      <span
        aria-hidden
        className={`pointer-events-none absolute -right-6 -top-8 text-[180px] font-semibold leading-none tracking-[-6px] ${numberColor} transition-transform duration-700 ease-soft group-hover:translate-y-1 group-hover:-rotate-2`}
      >
        {service.number}
      </span>

      <div className="relative">
        <span className={`text-xs uppercase tracking-[0.14em] ${descColor}`}>
          Leistung / {service.number}
        </span>
        <h3 className="mt-4 text-3xl md:text-[34px] font-semibold tracking-[-0.9px] leading-[1.05]">
          {service.title}
        </h3>
        <p className={`mt-4 text-base leading-[1.55] ${descColor}`}>{service.description}</p>
      </div>

      <ul className="relative mt-8 space-y-3 text-sm">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-center gap-3">
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full ${
                featured ? "bg-cream-soft/15" : "bg-charcoal-04"
              }`}
            >
              <svg
                viewBox="0 0 10 10"
                className={`h-2.5 w-2.5 ${featured ? "text-cream-soft" : "text-charcoal"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 5.5 L4.2 7.5 L8 3" />
              </svg>
            </span>
            <span className={featured ? "text-cream-soft/90" : "text-charcoal/85"}>{b}</span>
          </li>
        ))}
      </ul>

      <div
        className={`relative mt-10 flex items-end justify-between border-t ${priceBorder} pt-6`}
      >
        <div>
          <span className={`block text-xs uppercase tracking-[0.14em] ${priceLabel}`}>
            Investition
          </span>
          <span className="mt-1 block text-xl font-semibold tracking-[-0.4px]">
            {service.price}
          </span>
        </div>
        <a
          href="#kontakt"
          className={`inline-flex items-center gap-1.5 text-sm ${ctaColor}`}
          aria-label={`Mehr zu ${service.title}`}
        >
          <span className={`h-px w-6 ${dotColor} transition-all duration-500 ease-soft group-hover:w-10`} />
          Anfragen
        </a>
      </div>
    </motion.article>
  );
}
