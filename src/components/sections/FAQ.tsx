"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

interface Item {
  q: string;
  a: string;
}

const ITEMS: Item[] = [
  {
    q: "Was kostet eine Website bei SP Studio?",
    a: "Projekte starten bei etwa 3.900 €. Der finale Preis richtet sich nach Umfang, Inhalten und Funktionen. Sie erhalten vor Projektstart ein transparentes Festpreisangebot.",
  },
  {
    q: "Wie lange dauert ein Projekt?",
    a: "In der Regel rund sechs Wochen vom ersten Gespräch bis zum Launch. Bei umfangreicheren Projekten planen wir gemeinsam einen realistischen Zeitrahmen.",
  },
  {
    q: "Kann ich die Website später selbst pflegen?",
    a: "Ja. Wir integrieren ein einfaches, intuitives Content-Management-System und schulen Sie darin. Auf Wunsch übernehmen wir die Pflege auch im Betreuungspaket.",
  },
  {
    q: "Arbeitet ihr nur lokal?",
    a: "Wir arbeiten mit Kundinnen und Kunden aus dem gesamten deutschsprachigen Raum. Das erste Gespräch findet online oder gerne persönlich statt — je nachdem, wie Sie es bevorzugen.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Häufige Fragen" title="Antworten, bevor Sie fragen." />
        </Reveal>

        <div className="mt-12 max-w-3xl divide-y divide-white/[0.06] border-t border-b border-white/[0.08]">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-lg font-medium tracking-[-0.3px] transition-colors duration-300 ${
                      isOpen ? "text-[#ff6bb0]" : "text-white"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`ml-6 text-xl transition-colors duration-300 ${
                      isOpen ? "text-[#ff2d8f]" : "text-white/30 group-hover:text-white/60"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-white/50 leading-[1.5] max-w-2xl">{item.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
