"use client";

import { cn } from "@/lib/utils";
import { brand, navLinks } from "@/lib/content";
import { AnimatePresence, motion, useMotionValue, useVelocity, useSpring, animate } from "motion/react";
import { Menu, X, ArrowRight } from "@/lib/icons";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useGyroContext } from "@/components/effects/gyro-provider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#top");

  // Desktop indicator
  const [indicator, setIndicator] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Map<string, HTMLLIElement>>(new Map());

  // Mobile indicator
  const [mobileIndicator, setMobileIndicator] = useState({ top: 0, height: 0 });
  const mobileListRef = useRef<HTMLUListElement>(null);
  const mobileItemRefs = useRef<Map<string, HTMLLIElement>>(new Map());

  const scrollLockRef = useRef(0);
  const { pos: gyroPos, active: gyroActive } = useGyroContext();
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Entry animation
  const yMV = useMotionValue(-90);
  const velocity = useVelocity(yMV);
  const scaleYSpring = useSpring(1, { stiffness: 200, damping: 14, mass: 0.5 });
  const scaleXSpring = useSpring(1, { stiffness: 200, damping: 14, mass: 0.5 });

  function link(hash: string) { return isHome ? hash : `/${hash}`; }

  // Desktop indicator position
  useEffect(() => {
    const item = itemRefs.current.get(activeHash);
    const list = listRef.current;
    if (!item || !list) return;
    const lr = list.getBoundingClientRect();
    const ir = item.getBoundingClientRect();
    setIndicator({ left: ir.left - lr.left, top: ir.top - lr.top, width: ir.width, height: ir.height });
  }, [activeHash]);

  // Mobile indicator position — measure after menu opens + on activeHash change
  useEffect(() => {
    if (!mobileOpen) return;
    const timeout = setTimeout(() => {
      const item = mobileItemRefs.current.get(activeHash);
      const list = mobileListRef.current;
      if (!item || !list) return;
      const lr = list.getBoundingClientRect();
      const ir = item.getBoundingClientRect();
      setMobileIndicator({ top: ir.top - lr.top, height: ir.height });
    }, 60);
    return () => clearTimeout(timeout);
  }, [activeHash, mobileOpen]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
      if (Date.now() < scrollLockRef.current) return;
      const ids = navLinks.map(l => l.href.slice(1));
      let current = "#top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = `#${id}`;
      }
      setActiveHash(current);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    animate(yMV, 0, { type: "spring", stiffness: 300, damping: 20, mass: 1, delay: 0.05 });
    const unsub = velocity.on("change", (v) => {
      const d = Math.max(-1, Math.min(1, v / 900));
      scaleYSpring.set(1 + d * 0.05);
      scaleXSpring.set(1 - d * 0.035);
    });
    return unsub;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <motion.header
        style={{ y: yMV }}
        className="fixed inset-x-0 top-3 z-50 flex justify-center px-4"
      >
        <motion.nav
          style={{ scaleX: scaleXSpring, scaleY: scaleYSpring }}
          className={cn(
            "relative flex w-full max-w-6xl items-center justify-between gap-4 rounded-full px-3 py-2 transition-all duration-500",
            scrolled ? "glass-strong" : "glass-pill"
          )}
        >
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

          <a href={link("#top")} className="flex items-center gap-2 pl-3 pr-1 group" aria-label={brand.name}>
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink to-violet shadow-[0_0_18px_-2px_rgba(255,45,143,0.8)]">
              <span className="absolute inset-[2px] rounded-full bg-[#0a0a0a]" />
              <span className="relative font-display text-[15px] font-bold leading-none text-gradient">S</span>
            </span>
            <span className="hidden text-[15px] font-semibold tracking-tight sm:block">
              {brand.short}<span className="text-pink">.de</span>
            </span>
          </a>

          <ul ref={listRef} className="relative hidden items-center gap-1 lg:flex">
            {indicator.width > 0 && (
              <motion.div
                aria-hidden
                className="glass-nav-indicator pointer-events-none absolute rounded-full"
                animate={{ left: indicator.left, top: indicator.top, width: indicator.width, height: indicator.height }}
                transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.7 }}
              />
            )}
            {navLinks.map((l) => (
              <li key={l.href} ref={node => { if (node) itemRefs.current.set(l.href, node); else itemRefs.current.delete(l.href); }}>
                <a
                  href={link(l.href)}
                  onClick={() => { setActiveHash(l.href); scrollLockRef.current = Date.now() + 900; }}
                  className={cn(
                    "relative z-10 flex rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                    activeHash === l.href ? "text-foreground" : "text-foreground/60 hover:text-foreground/90"
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={link("#kontakt")}
              className="group hidden h-10 items-center gap-2 rounded-full pl-5 pr-1.5 text-sm font-medium text-white sm:inline-flex"
              style={{ background: "linear-gradient(110deg, #ff2d8f 0%, #c026d3 50%, #8b5cf6 100%)", boxShadow: "0 8px 30px -10px rgba(255,45,143,0.7)" }}
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
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass-mobile fixed inset-0 z-[70] flex flex-col lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5">
              <a href={link("#top")} onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink to-violet shadow-[0_0_18px_-2px_rgba(255,45,143,0.8)]">
                  <span className="absolute inset-[2px] rounded-full bg-[#0a0a0a]" />
                  <span className="relative font-display text-[15px] font-bold leading-none text-gradient">S</span>
                </span>
                <span className="text-[15px] font-semibold tracking-tight">
                  {brand.short}<span className="text-pink">.de</span>
                </span>
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Menü schließen"
                className="flex h-10 w-10 items-center justify-center rounded-full cursor-pointer glass-nav-indicator"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Divider */}
            <div className="mx-6 h-px bg-white/[0.06]" />

            {/* Nav items with sliding indicator */}
            <nav className="flex flex-col px-4 pt-8">
              <ul ref={mobileListRef} className="relative flex flex-col">
                {mobileIndicator.height > 0 && (
                  <motion.div
                    aria-hidden
                    className="glass-nav-indicator pointer-events-none absolute left-0 right-0 rounded-2xl"
                    animate={{ top: mobileIndicator.top, height: mobileIndicator.height }}
                    transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.7 }}
                  />
                )}
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 + 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    ref={node => { if (node) mobileItemRefs.current.set(l.href, node); else mobileItemRefs.current.delete(l.href); }}
                  >
                    <a
                      href={link(l.href)}
                      onClick={() => { setActiveHash(l.href); scrollLockRef.current = Date.now() + 900; setMobileOpen(false); }}
                      className={cn(
                        "relative z-10 flex items-center px-4 py-3.5 font-display text-3xl font-medium tracking-tight transition-colors duration-200",
                        activeHash === l.href ? "text-foreground" : "text-foreground/50"
                      )}
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="px-6 pb-6 pt-4"
            >
              <a
                href={link("#kontakt")}
                onClick={() => setMobileOpen(false)}
                className="flex h-14 w-full items-center justify-center gap-2 rounded-full text-base font-medium text-white"
                style={{ background: "linear-gradient(110deg, #ff2d8f 0%, #c026d3 50%, #8b5cf6 100%)", boxShadow: "0 12px 40px -10px rgba(255,45,143,0.6)" }}
              >
                Kostenloses Erstgespräch
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
