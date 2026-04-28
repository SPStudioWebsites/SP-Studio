"use client";

import { cn } from "@/lib/utils";
import { brand, navLinks } from "@/lib/content";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowRight } from "@/lib/icons";
import { useEffect, useState } from "react";
import { useGyroContext } from "@/components/effects/gyro-provider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pos: gyroPos, active: gyroActive } = useGyroContext();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed inset-x-0 top-3 z-50 flex justify-center px-4"
      >
        <nav
          className={cn(
            "relative flex w-full max-w-6xl items-center justify-between gap-4 rounded-full px-3 py-2 transition-all duration-500",
            scrolled
              ? "glass-strong shadow-[0_15px_40px_-15px_rgba(0,0,0,0.7)]"
              : "glass-pill"
          )}
        >
          {/* Gyro border reflection */}
          {gyroActive && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle at ${gyroPos.x}% ${gyroPos.y}%, rgba(255,255,255,0.5) 0%, transparent 50%)`,
                padding: "1px",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                transition: "background 0.08s ease",
              }}
            />
          )}

          <a
            href="#top"
            className="flex items-center gap-2 pl-3 pr-1 group"
            aria-label={brand.name}
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink to-violet shadow-[0_0_18px_-2px_rgba(255,45,143,0.8)]">
              <span className="absolute inset-[2px] rounded-full bg-[#0a0a0a]" />
              <span className="relative font-display text-[15px] font-bold leading-none text-gradient">S</span>
            </span>
            <span className="hidden text-[15px] font-semibold tracking-tight sm:block">
              {brand.short}
              <span className="text-pink">.de</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors duration-200 hover:bg-white/[0.05] hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#kontakt"
              className="group hidden h-10 items-center gap-2 rounded-full pl-5 pr-1.5 text-sm font-medium text-white sm:inline-flex"
              style={{
                background:
                  "linear-gradient(110deg, #ff2d8f 0%, #c026d3 50%, #8b5cf6 100%)",
                boxShadow: "0 8px 30px -10px rgba(255,45,143,0.7)",
              }}
            >
              Erstgespräch
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Menü öffnen"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-foreground/85 hover:bg-white/[0.06] lg:hidden cursor-pointer"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-[#0a0a0a]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between p-5">
              <span className="font-semibold tracking-tight">
                {brand.short}<span className="text-pink">.de</span>
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Menü schließen"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.03] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
              }}
              className="flex flex-col gap-1 px-5 pt-8"
            >
              {navLinks.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <a
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 font-display text-3xl font-medium tracking-tight text-foreground/90 hover:text-pink"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-8"
              >
                <a
                  href="#kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-14 items-center justify-center gap-2 rounded-full text-base font-medium text-white"
                  style={{
                    background:
                      "linear-gradient(110deg, #ff2d8f 0%, #c026d3 50%, #8b5cf6 100%)",
                    boxShadow: "0 12px 40px -10px rgba(255,45,143,0.6)",
                  }}
                >
                  Kostenloses Erstgespräch
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
