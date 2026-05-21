"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { GlassCard } from "@/components/ui/glass-card";
import { Accordion } from "@/components/ui/accordion";
import { GradientOrbs } from "@/components/effects/gradient-orbs";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { Search, Phone, CheckCircle2 } from "@/lib/icons";

const steps = [
  {
    Icon: Search,
    title: "Ich analysiere deine Website",
    desc: "Noch vor unserem Gespräch schaue ich mir deinen aktuellen Online-Auftritt an, damit du sofort konkrete Tipps bekommst.",
  },
  {
    Icon: Phone,
    title: "Wir telefonieren kurz",
    desc: "Ein kurzes, unverbindliches Gespräch (ca. 15 Min.), in dem ich erkläre, was möglich ist und was für dich am meisten bringt.",
  },
  {
    Icon: CheckCircle2,
    title: "Du bekommst ein konkretes Angebot",
    desc: "Kein Bla-Bla. Ein klares Angebot mit Preis, Umfang und Zeitplan. Du entscheidest, ob es passt.",
  },
];


const faqItems = [
  {
    q: "Bin ich jetzt zu etwas verpflichtet?",
    a: "Nein, das Gespräch ist völlig unverbindlich und kostenlos. Du entscheidest danach, ob du weitermachen möchtest.",
  },
  {
    q: "Was kostet eine Website bei dir?",
    a: "Websites starten ab 399 €, je nach Umfang. Im Gespräch erkläre ich dir genau, was für dich am besten passt.",
  },
  {
    q: "Wie schnell kann ich eine neue Website haben?",
    a: "Erste Entwürfe erstelle ich oft schon in 3–5 Tagen. Die finale Website ist meist nach 1–2 Wochen online.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function DankeContent() {
  const reduce = useReducedMotion();

  return (
    <main className="relative z-10 overflow-hidden">
      <GradientOrbs />

      {/* ── HERO ── */}
      <section className="relative mx-auto max-w-3xl px-6 pb-16 pt-20 text-center md:pb-24 md:pt-30">
        {/* Pulsing hero glow */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[80%]"
          animate={reduce ? {} : { opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(255,45,143,0.10), transparent)",
          }}
        />

        <div className="relative">
          {/* Checkmark — entrance scale + continuous float */}
          <motion.div
            className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center"
            initial={reduce ? { opacity: 0 } : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.05 }}
          >
            {/* Expanding pulse ring */}
            {!reduce && (
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-full bg-gradient-to-br from-pink/40 to-violet/40"
                animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
            {/* Float wrapper */}
            <motion.div
              className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-pink to-violet text-3xl font-bold text-white shadow-[0_0_60px_-10px_rgba(255,45,143,0.5)]"
              animate={reduce ? {} : { y: [0, -9, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              ✓
            </motion.div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.28 }}
          >
            Super, deine Anfrage ist{" "}
            <span className="text-gradient">eingegangen!</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mx-auto mt-6 max-w-xl text-lg text-muted text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.46 }}
          >
            Ich schaue mir deine aktuelle Online-Präsenz an und melde mich
            innerhalb von{" "}
            <span className="font-semibold text-foreground">24 Stunden</span>{" "}
            persönlich bei dir.
          </motion.p>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="relative mx-auto max-w-5xl px-6 pb-16 md:pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center"
        >
          <div
            className="h-[500px] w-[700px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, rgba(255,45,143,0.06) 45%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        <RevealStagger
          className="relative grid gap-4 md:grid-cols-3"
          staggerChildren={0.12}
          delay={0.05}
        >
          {steps.map(({ Icon, title, desc }, i) => (
            <RevealItem key={i} y={32}>
              <GlassCard variant="strong" className="relative p-7 overflow-hidden h-full">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink/40 to-transparent"
                />
                <div className="mb-5 flex items-center gap-3">
                  {/* Icon with continuous breathe */}
                  <motion.span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink/30 to-violet/30 text-pink"
                    animate={reduce ? {} : { scale: [1, 1.08, 1] }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.7,
                    }}
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </motion.span>
                  <span className="font-display text-xs font-semibold uppercase tracking-widest text-pink">
                    Schritt {i + 1}
                  </span>
                </div>
                <h2 className="font-display text-lg font-semibold text-foreground">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* ── PERSONAL ── */}
      <section className="relative mx-auto max-w-3xl px-6 pb-16 md:pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-x-32 top-1/2 -translate-y-1/2 flex justify-end"
        >
          <div
            className="h-[400px] w-[400px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,45,143,0.10) 0%, transparent 70%)",
              filter: "blur(70px)",
            }}
          />
        </div>

        <Reveal y={0} delay={0}>
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease }}
          >
            <GlassCard variant="elevated" className="p-8 md:p-10">
              <div className="flex items-center gap-4">
                <Image
                src="/simon-danke.jpg"
                alt="Simon Pörschke"
                width={80}
                height={80}
                className="h-20 w-20 shrink-0 rounded-full object-cover"
              />
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">
                    Simon Pörschke
                  </p>
                  <p className="text-sm text-muted">Webdesigner · Unterfranken</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Ich bin lokaler Webdesigner aus der Region Haßberge/Bamberg und
                helfe kleinen Betrieben, online sichtbar zu werden, mit
                modernen Websites, die schnell fertig sind und wirklich
                funktionieren.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Kein Agentur-Overhead, keine langen Wartezeiten. Ich setze dein
                Projekt persönlich um, meistens innerhalb von 1–2 Wochen.
              </p>
            </GlassCard>
          </motion.div>
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <section className="relative mx-auto max-w-3xl px-6 pb-16 text-center md:pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center"
        >
          <div
            className="h-[350px] w-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(139,92,246,0.18) 0%, rgba(255,45,143,0.08) 50%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
        </div>

        <Reveal y={28}>
          <GlassCard variant="elevated" className="relative px-8 py-12">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-pink">
              Lieber direkt?
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Schreib mir einfach auf WhatsApp
            </h2>
            <p className="mt-3 text-muted">
              Schnelle Antwort garantiert. Kein Formular, kein Warten.
            </p>

            {/* WhatsApp button with shine sweep */}
            <a
              href="https://wa.me/491785407221"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 inline-flex h-12 items-center gap-3 overflow-hidden rounded-full px-8 text-sm font-semibold text-white shadow-[0_0_30px_-8px_rgba(255,45,143,0.6)] transition-all hover:shadow-[0_0_40px_-6px_rgba(255,45,143,0.75)] hover:scale-[1.03]"
              style={{
                background: "linear-gradient(110deg, #ff2d8f 0%, #c026d3 50%, #8b5cf6 100%)",
              }}
            >
              {!reduce && (
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.30) 50%, transparent 70%)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{ backgroundPosition: ["150% 0%", "-50% 0%"] }}
                  transition={{
                    duration: 2.4,
                    ease: "linear",
                    repeat: Infinity,
                    repeatDelay: 1.6,
                  }}
                />
              )}
              <span className="relative z-10">WhatsApp öffnen</span>
            </a>

            <p className="mt-5 text-sm text-muted">
              Oder warte auf meinen Anruf. Ich melde mich innerhalb von 24 Stunden.
            </p>
          </GlassCard>
        </Reveal>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-6 pb-24 md:pb-32">
        <Reveal y={20}>
          <h2 className="mb-8 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl text-center">
            Häufige Fragen
          </h2>
        </Reveal>
        <Reveal y={20} delay={0.1}>
          <Accordion items={faqItems} />
        </Reveal>
        <Reveal y={16} delay={0.2}>
          <div className="mt-20 flex justify-center">
            <Link
              href="/"
              className="relative inline-flex h-15 items-center gap-3 overflow-hidden rounded-full px-8 text-sm font-semibold text-white shadow-[0_0_30px_-8px_rgba(255,45,143,0.6)] transition-all hover:shadow-[0_0_40px_-6px_rgba(255,45,143,0.75)] hover:scale-[1.03]"
              style={{
                background: "linear-gradient(110deg, #ff2d8f 0%, #c026d3 50%, #8b5cf6 100%)",
              }}
            >
              {!reduce && (
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.30) 50%, transparent 70%)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{ backgroundPosition: ["150% 0%", "-50% 0%"] }}
                  transition={{
                    duration: 2.4,
                    ease: "linear",
                    repeat: Infinity,
                    repeatDelay: 1.6,
                  }}
                />
              )}
              <span className="relative z-10">← Zurück zur Startseite</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
