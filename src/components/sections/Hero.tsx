"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useIsMobile } from "@/lib/useIsMobile";

const WORDS = ["Handwerker", "Friseure", "Restaurants", "Cafés", "Maler"];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const disableMotion = isMobile || !!prefersReducedMotion;

  // iPad tilt (local to iPad wrapper) — hooks always declared, used conditionally
  const iPadMouseX = useMotionValue(0);
  const iPadMouseY = useMotionValue(0);
  const rotateY = useSpring(useTransform(iPadMouseX, [-0.5, 0.5], [8, -8]), {
    stiffness: 60,
    damping: 28,
    mass: 1,
  });
  const rotateX = useSpring(useTransform(iPadMouseY, [-0.5, 0.5], [-6, 6]), {
    stiffness: 60,
    damping: 28,
    mass: 1,
  });

  // Section cursor tracking (for badge parallax)
  const sectionX = useMotionValue(0);
  const sectionY = useMotionValue(0);

  function handleSectionMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    sectionX.set(e.clientX - rect.left);
    sectionY.set(e.clientY - rect.top);
  }

  function handleIPadMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    iPadMouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    iPadMouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleIPadLeave() {
    iPadMouseX.set(0);
    iPadMouseY.set(0);
  }

  return (
    <section
      id="top"
      onMouseMove={isMobile ? undefined : handleSectionMove}
      className="relative pt-28 pb-20 text-white md:pt-32 md:pb-24"
    >
      {/* Base radial gradient wash — adds depth vs flat #0a0a0a */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(255,45,143,0.10) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 80% 80%, rgba(139,92,246,0.10) 0%, transparent 55%)",
        }}
      />

      {/* Conic mesh — static, atmospheric color variation */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[1400px] w-[1400px] -translate-x-1/2 -translate-y-1/2 opacity-[0.35]"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,45,143,0.08) 60deg, transparent 120deg, rgba(139,92,246,0.08) 200deg, transparent 260deg, rgba(255,45,143,0.06) 320deg, transparent 360deg)",
          filter: "blur(80px)",
        }}
      />

      {/* Animated ambient blobs — disabled on mobile and reduced-motion */}
      <motion.div
        aria-hidden="true"
        animate={disableMotion ? undefined : { x: [-20, 30, -20], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff2d8f]/[0.10] blur-[140px]"
      />
      <motion.div
        aria-hidden="true"
        animate={disableMotion ? undefined : { x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-[#8b5cf6]/[0.09] blur-[140px]"
      />
      <motion.div
        aria-hidden="true"
        animate={disableMotion ? undefined : { x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 left-[-10%] h-[400px] w-[400px] rounded-full bg-[#ff2d8f]/[0.06] blur-[120px]"
      />

      {/* Diagonal light-leak — softened to blend into global atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          background:
            "linear-gradient(115deg, transparent 40%, rgba(255,45,143,0.15) 50%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col gap-8 md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-10">
          {/* Headline */}
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-pink-300 backdrop-blur-md"
            >
              <span className="relative flex h-1.5 w-1.5">
                <motion.span
                  animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inline-flex h-full w-full rounded-full bg-pink-400"
                />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pink-400" />
              </span>
              Neue Projekte ab Juni 2026
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="mt-6 font-extrabold leading-[0.98] tracking-[-1.5px] md:tracking-[-2px]"
            >
              <span className="block text-5xl sm:text-4xl lg:text-5xl 2xl:text-6xl">
                Webseiten für
              </span>
              <span
                className="relative block overflow-hidden text-5xl sm:text-6xl lg:text-[80px] 2xl:text-[100px]"
                style={{ height: "1.05em" }}
              >
                <RotatingWord words={WORDS} disableMotion={disableMotion} />
              </span>
              <span className="block font-bold text-3xl sm:text-[26px] lg:text-[34px] 2xl:text-[40px]">
                die täglich neue Kunden bringen
              </span>
            </motion.h1>
          </div>

          {/* Right: iPad mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", duration: 1.2, bounce: 0.3, delay: 0.2 }}
            className="relative mx-auto flex items-center justify-center md:row-start-1 md:row-span-2 md:self-center"
            style={isMobile ? undefined : { perspective: 1200 }}
            onMouseMove={isMobile ? undefined : handleIPadMove}
            onMouseLeave={isMobile ? undefined : handleIPadLeave}
          >
            {/* Glow behind iPad */}
            <motion.div
              aria-hidden="true"
              animate={
                disableMotion
                  ? { opacity: 0.85, scale: 1 }
                  : { opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }
              }
              transition={{ duration: 5, repeat: disableMotion ? 0 : Infinity, ease: "easeInOut" }}
              className="absolute inset-0 -z-10 flex items-center justify-center"
            >
              <div className="h-[520px] w-[420px] rounded-full bg-gradient-to-br from-[#ff2d8f]/35 via-[#c06bd8]/25 to-[#8b5cf6]/35 blur-[90px]" />
            </motion.div>

            {/* Ground reflection under iPad */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-4 left-1/2 -z-10 h-10 w-[70%] -translate-x-1/2"
            >
              <div className="h-full w-full rounded-[100%] bg-gradient-to-r from-[#ff2d8f]/0 via-[#ff2d8f]/40 to-[#8b5cf6]/0 blur-xl" />
            </div>

            {/* Floating badges with inverse parallax (parallax disabled on mobile) */}
            <FloatingBadge
              label="Next.js"
              className="top-[6%] left-[-4%] md:left-[-10%]"
              delay={0.7}
              float={[-10, 8]}
              duration={5}
              parallaxX={sectionX}
              parallaxY={sectionY}
              parallaxScale={-1}
              disableParallax={isMobile}
            />
            <FloatingBadge
              label="Motion"
              className="top-[22%] right-[-2%] md:right-[-8%]"
              delay={0.9}
              accent
              float={[8, -8]}
              duration={4.5}
              parallaxX={sectionX}
              parallaxY={sectionY}
              parallaxScale={-0.8}
              disableParallax={isMobile}
            />
            <FloatingBadge
              label="Figma"
              className="bottom-[28%] left-[-3%] md:left-[-12%]"
              delay={1.1}
              float={[-6, 10]}
              duration={5.5}
              parallaxX={sectionX}
              parallaxY={sectionY}
              parallaxScale={-0.9}
              disableParallax={isMobile}
            />
            <FloatingBadge
              label="Performance 98/100"
              className="bottom-[8%] right-[-2%] md:right-[-6%]"
              delay={1.3}
              accent
              float={[10, -6]}
              duration={6}
              parallaxX={sectionX}
              parallaxY={sectionY}
              parallaxScale={-1.1}
              disableParallax={isMobile}
            />

            {/* iPad float wrapper (outer — y-drift only, disabled on mobile) */}
            <motion.div
              animate={disableMotion ? undefined : { y: [-8, 10, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={disableMotion ? undefined : { willChange: "transform" }}
              className={`relative mx-auto w-[280px] sm:w-[320px] md:w-[380px] ${isMobile ? "" : "drop-shadow-[0_40px_60px_rgba(0,0,0,0.55)]"}`}
            >
              {/* iPad tilt wrapper (inner — rotateX/Y/Z only, disabled on mobile) */}
              <motion.div
                style={
                  isMobile
                    ? { rotateZ: -2 }
                    : {
                        rotateX,
                        rotateY,
                        rotateZ: -2,
                        transformStyle: "preserve-3d",
                        willChange: "transform",
                      }
                }
                className="relative w-full"
              >
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "1342 / 1780" }}
                >
                  {/* Screen content — positioned BEHIND the iPad frame PNG */}
                  <div className="absolute bottom-[4.38%] left-[5.81%] right-[6.11%] top-[4.66%] overflow-hidden rounded-[18px] bg-[#fafafa]">
                    <ScrollingWebsite isMobile={isMobile} />

                    {/* Screen glare — desktop only (mix-blend-overlay forces compositor layer) */}
                    {!isMobile && (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-30 mix-blend-overlay"
                      />
                    )}
                  </div>

                  {/* iPad frame PNG on top */}
                  <Image
                    src="/images/ipad-frame.png"
                    alt="iPad mit abstrakter Premium-Website"
                    fill
                    sizes="(max-width: 768px) 320px, 380px"
                    className="pointer-events-none select-none object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Body copy */}
          <div className="md:col-start-1 md:row-start-2">
            {/* Mobile: 4-benefit checklist */}
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.25 }}
              className="space-y-3 md:hidden"
            >
              {[
                "Täglich neue Anfragen",
                "Verkaufsstarke Webseite",
                "Mehr Buchungen. Mehr Umsatz.",
                "0,0 Technik-Stress.",
              ].map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-base font-medium text-white/80">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff2d8f]/20">
                    <svg viewBox="0 0 10 10" className="h-3 w-3 text-[#ff2d8f]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 5.5 L4.2 7.5 L8 3" />
                    </svg>
                  </span>
                  {benefit}
                </li>
              ))}
            </motion.ul>

            {/* Desktop: subline text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.25 }}
              className="mt-6 hidden max-w-xl text-lg leading-[1.55] text-white/70 md:block"
            >
              Täglich neue Anfragen mit einer verkaufsstarken Webseite. Mehr Buchungen. Mehr Umsatz. Ohne Technik-Stress.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.35 }}
              className="mt-3 max-w-xl text-sm leading-[1.6] text-white/40"
            >
              Du suchst eine professionelle Webseite für Handwerker, eine Webseite für Friseur oder eine Webseite für dein Restaurant oder Café? Wir erstellen verkaufsstarke Webseiten speziell für lokale Unternehmen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#kontakt"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#ff2d8f] px-5 py-3 text-sm font-bold text-white shadow-[0_0_40px_rgba(255,45,143,0.35)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#ff4a9f] hover:shadow-[0_0_60px_rgba(255,45,143,0.55)]"
              >
                <span className="relative z-10">Kostenloses Beratungsgespräch sichern</span>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RotatingWord({ words, disableMotion }: { words: string[]; disableMotion: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (disableMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2800);
    return () => clearInterval(id);
  }, [disableMotion, words.length]);

  const gradientClass =
    "bg-gradient-to-r from-[#ff2d8f] via-[#ff5fa2] to-[#8b5cf6] bg-clip-text text-transparent";

  if (disableMotion) {
    return (
      <span className={`absolute left-0 top-0 ${gradientClass}`}>
        {words[index]}
      </span>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute left-0 top-0 ${gradientClass}`}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
}

interface FloatingBadgeProps {
  label: string;
  className?: string;
  delay: number;
  accent?: boolean;
  float: [number, number];
  duration: number;
  parallaxX: MotionValue<number>;
  parallaxY: MotionValue<number>;
  parallaxScale: number;
  disableParallax?: boolean;
}

function FloatingBadge({
  label,
  className,
  delay,
  accent,
  float,
  duration,
  parallaxX,
  parallaxY,
  parallaxScale,
  disableParallax,
}: FloatingBadgeProps) {
  const px = useTransform(parallaxX, (v) => ((v - 600) / 600) * 12 * parallaxScale);
  const py = useTransform(parallaxY, (v) => ((v - 400) / 400) * 8 * parallaxScale);
  const sx = useSpring(px, { stiffness: 40, damping: 30, mass: 1 });
  const sy = useSpring(py, { stiffness: 40, damping: 30, mass: 1 });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.8, bounce: 0.35, delay }}
      style={disableParallax ? undefined : { x: sx, y: sy, willChange: "transform" }}
      className={`absolute z-20 ${className ?? ""}`}
    >
      <motion.div
        animate={disableParallax ? undefined : { y: [float[0], float[1], float[0]] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        style={disableParallax ? undefined : { willChange: "transform" }}
        className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-[11px] font-bold shadow-xl ${disableParallax ? "" : "backdrop-blur-md"} ${
          accent
            ? `border-pink-400/40 ${disableParallax ? "bg-[#1a0a14]" : "bg-[#1a0a14]/80"} text-pink-200 shadow-[0_0_24px_rgba(255,45,143,0.3)]`
            : `border-white/15 ${disableParallax ? "bg-[#141414]" : "bg-[#141414]/85"} text-white`
        }`}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

function ScrollingWebsite({ isMobile }: { isMobile: boolean }) {
  if (isMobile) {
    return (
      <div className="flex flex-col">
        <WebsiteImage />
      </div>
    );
  }
  return (
    <motion.div
      animate={{ y: ["0%", "-50%"] }}
      transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      style={{ willChange: "transform" }}
      className="flex flex-col"
    >
      <WebsiteImage />
      <WebsiteImage />
    </motion.div>
  );
}

function WebsiteImage() {
  return (
    <div className="relative w-full flex-shrink-0" style={{ aspectRatio: "9 / 16" }}>
      <Image
        src="/images/ipad-website-content.jpeg"
        alt=""
        fill
        sizes="380px"
        className="object-cover"
      />
    </div>
  );
}
