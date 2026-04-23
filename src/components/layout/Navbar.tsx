"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useIsMobile } from "@/lib/useIsMobile";

const NAV_LINKS = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#arbeiten", label: "Arbeiten" },
  { href: "#prozess", label: "Prozess" },
  { href: "#studio", label: "Studio" },
  { href: "#kontakt", label: "Kontakt" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Pointer-tracked specular highlight (Liquid Glass refraction feel) — desktop only
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const sx = useSpring(pointerX, { stiffness: 120, damping: 25 });
  const sy = useSpring(pointerY, { stiffness: 120, damping: 25 });
  const specular = useMotionTemplate`radial-gradient(180px 80px at ${sx}% ${sy}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 30%, transparent 70%)`;

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set(((e.clientX - rect.left) / rect.width) * 100);
    pointerY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  function handlePointerLeave() {
    pointerX.set(50);
    pointerY.set(50);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease, delay: 0.1 }}
      className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-4 md:top-5"
    >
      <div
        onPointerMove={isMobile ? undefined : handlePointerMove}
        onPointerLeave={isMobile ? undefined : handlePointerLeave}
        className={`pointer-events-auto relative flex w-full max-w-[1100px] items-center justify-between overflow-hidden rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "border-white/[0.14] bg-white/[0.06] shadow-[0_10px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.3)]"
            : "border-white/[0.10] bg-white/[0.03] shadow-[0_6px_28px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.25)]"
        }`}
        style={
          isMobile
            ? {
                backdropFilter: "blur(12px) saturate(140%)",
                WebkitBackdropFilter: "blur(12px) saturate(140%)",
              }
            : {
                backdropFilter: "blur(24px) saturate(200%) brightness(110%)",
                WebkitBackdropFilter: "blur(24px) saturate(200%) brightness(110%)",
              }
        }
      >
        {/* Pointer-tracked specular highlight — desktop only */}
        {!isMobile && (
          <motion.span
            aria-hidden="true"
            style={{ background: specular }}
            className="pointer-events-none absolute inset-0 rounded-full mix-blend-plus-lighter"
          />
        )}
        {/* Inner top chrome edge */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
        {/* Inner bottom rim — darker for lens curvature */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-12 bottom-0 h-px bg-gradient-to-r from-transparent via-black/40 to-transparent"
        />
        {/* Soft pink under-glow */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-60 blur-xl"
          style={{
            background:
              "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(255,45,143,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <Link
          href="#top"
          className="relative flex items-center gap-2 px-5 py-3 text-[15px] font-bold tracking-[-0.3px] text-white md:px-6"
        >
          <span className="relative flex h-2 w-2">
            <motion.span
              animate={{ scale: [1, 2.2, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
              className="absolute inline-flex h-full w-full rounded-full bg-[#ff2d8f]"
            />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff2d8f] shadow-[0_0_8px_rgba(255,45,143,0.8)]" />
          </span>
          SP <span className="font-medium text-white/60">Studio</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative rounded-full px-3.5 py-2 text-[13.5px] font-medium text-white/70 transition-colors duration-300 hover:text-white"
            >
              <span className="relative z-10">{l.label}</span>
              <span className="pointer-events-none absolute inset-0 rounded-full bg-white/0 transition-colors duration-300 group-hover:bg-white/[0.06]" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden px-2 md:block">
          <a
            href="#kontakt"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#ff2d8f] px-4 py-2 text-[13.5px] font-bold text-white shadow-[0_0_24px_rgba(255,45,143,0.35)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:bg-[#ff4a9f] hover:shadow-[0_0_36px_rgba(255,45,143,0.55)]"
          >
            <span className="relative z-10">Projekt starten</span>
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative mr-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-colors hover:bg-white/[0.08] md:hidden"
        >
          <span className="relative flex h-3 w-4 flex-col justify-between">
            <motion.span
              animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease }}
              className="block h-[1.5px] w-full origin-center rounded-full bg-[#ff2d8f]"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-[1.5px] w-full rounded-full bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease }}
              className="block h-[1.5px] w-full origin-center rounded-full bg-white"
            />
          </span>
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease }}
            className="pointer-events-auto fixed inset-x-4 top-[76px] md:hidden"
          >
            <div
              className="relative overflow-hidden rounded-3xl border border-white/[0.14] bg-white/[0.05] p-4 shadow-[0_20px_56px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.3)]"
              style={{
                backdropFilter: "blur(12px) saturate(140%)",
                WebkitBackdropFilter: "blur(12px) saturate(140%)",
              }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-14 bottom-0 h-px bg-gradient-to-r from-transparent via-black/40 to-transparent"
              />
              <nav className="flex flex-col">
                {NAV_LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease, delay: 0.05 + i * 0.04 }}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <motion.a
                href="#kontakt"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease, delay: 0.05 + NAV_LINKS.length * 0.04 }}
                className="mt-3 flex items-center justify-center rounded-2xl bg-[#ff2d8f] px-4 py-3 text-sm font-bold text-white shadow-[0_0_24px_rgba(255,45,143,0.4)]"
              >
                Projekt starten
              </motion.a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
