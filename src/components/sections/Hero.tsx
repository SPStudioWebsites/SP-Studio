"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 gradient-wash" aria-hidden="true" />
      <div className="absolute inset-0 noise" aria-hidden="true" />

      <Container className="relative">
        <div className="grid gap-12 md:grid-cols-2 md:gap-10 md:items-center">
          {/* Left: copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-pill border border-line bg-cream px-3 py-1 text-xs text-muted"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Neue Projekte ab Juni 2026
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="mt-6 text-5xl sm:text-6xl md:text-[64px] lg:text-[72px] font-semibold leading-[1.02] tracking-[-1.5px]"
            >
              Websites, die
              <span className="text-muted"> wirklich Kunden gewinnen.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.25 }}
              className="mt-6 max-w-xl text-lg text-muted leading-[1.5]"
            >
              Wir entwerfen und entwickeln moderne Websites für kleine Unternehmen, lokale
              Betriebe und Kreative — klar, schnell und auf Anfragen ausgelegt.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button href="#kontakt">Unverbindliches Gespräch buchen</Button>
              <Button href="#arbeiten" variant="ghost">
                Arbeiten ansehen
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted"
            >
              <span>Vertraut von:</span>
              <span>Café Norden</span>
              <span>Atelier Reif</span>
              <span>Brügger Bau</span>
              <span>Meridian Yoga</span>
            </motion.div>
          </div>

          {/* Right: floating laptop */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative mx-auto w-full max-w-[600px]"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/laptop.png"
                  alt="Laptop mit einer Website, die im Studio gestaltet wurde"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-contain drop-shadow-[0_30px_40px_rgba(28,28,28,0.18)]"
                />
              </div>
              {/* soft ground shadow */}
              <motion.div
                aria-hidden
                animate={{ scaleX: [1, 0.9, 1], opacity: [0.35, 0.25, 0.35] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                className="mx-auto mt-2 h-6 w-3/4 rounded-full bg-charcoal/20 blur-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
