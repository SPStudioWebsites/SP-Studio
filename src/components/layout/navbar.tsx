"use client";

import { cn } from "@/lib/utils";
import { brand, navLinks } from "@/lib/content";
import { AnimatePresence, motion, useMotionValue, useVelocity, useSpring, animate } from "motion/react";
import { Menu, X, ArrowRight } from "@/lib/icons";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useGyroContext } from "@/components/effects/gyro-provider";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#top");

  const [indicator, setIndicator] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Map<string, HTMLLIElement>>(new Map());

  const [mobileIndicator, setMobileIndicator] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const mobileListRef = useRef<HTMLUListElement>(null);
  const mobileItemRefs = useRef<Map<string, HTMLLIElement>>(new Map());

  const [isMobile, setIsMobile] = useState(false);
  const scrollLockRef = useRef(0);
  const scrollEndCleanupRef = useRef<() => void>(() => {});
  const { pos: gyroPos, active: gyroActive } = useGyroContext();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const yMV = useMotionValue(-90);
  const velocity = useVelocity(yMV);
  const scaleYSpring = useSpring(1, { stiffness: 200, damping: 14, mass: 0.5 });
  const scaleXSpring = useSpring(1, { stiffness: 200, damping: 14, mass: 0.5 });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  function link(hash: string) { return isHome ? hash : `/${hash}`; }

  useEffect(() => {
    const item = itemRefs.current.get(activeHash);
    const list = listRef.current;
    if (!item || !list) return;
    const lr = list.getBoundingClientRect();
    const ir = item.getBoundingClientRect();
    setIndicator({ left: ir.left - lr.left, top: ir.top - lr.top, width: ir.width, height: ir.height });
  }, [activeHash]);

  useEffect(() => {
    if (!mobileOpen) return;
    const timeout = setTimeout(() => {
      const item = mobileItemRefs.current.get(activeHash);
      const list = mobileListRef.current;
      if (!item || !list) return;
      const lr = list.getBoundingClientRect();
      const ir = item.getBoundingClientRect();
      setMobileIndicator({ left: 0, top: ir.top - lr.top, width: lr.width, height: ir.height });
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
    window.dispatchEvent(new CustomEvent("mobilemenu", { detail: { open: mobileOpen } }));
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
    <motion.header
      style={{ y: yMV }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-4"
    >
      <motion.nav
        initial={{ borderRadius: isMobile ? 20 : 9999 }}
        animate={{ borderRadius: isMobile ? 20 : mobileOpen ? 20 : 9999 }}
        transition={{
          borderRadius: (!isMobile && !mobileOpen)
            ? { delay: 0.55, type: "spring", stiffness: 400, damping: 30 }
            : { duration: 0 },
        }}
        style={{ scaleX: scaleXSpring, scaleY: scaleYSpring, overflow: "hidden" }}
        className={cn(
          "relative flex w-full max-w-6xl flex-col [transition:background_500ms_ease,box-shadow_500ms_ease,backdrop-filter_500ms_ease]",
          isMobile ? "glass-pill" : scrolled ? "glass-strong" : "glass-pill"
        )}
      >
        {gyroActive && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
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

        {/* Top row */}
        <div className="flex items-center justify-between gap-4 px-3 py-2">
          <a
            href={link("#top")}
            onClick={() => mobileOpen && setMobileOpen(false)}
            className="flex items-center pl-2 pr-1"
            aria-label={brand.name}
          >
            <Image src="/logo.png" alt={brand.name} width={2861} height={430} className="h-6 w-auto" quality={100} priority />
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
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-foreground/85 hover:bg-white/[0.06] lg:hidden cursor-pointer"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="h-4 w-4" />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="h-4 w-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile expanded section */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{
                height: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
              }}
              className="overflow-hidden lg:hidden"
            >
              <div className="flex flex-col" style={{ minHeight: "calc(100dvh - 80px)" }}>
              <div className="mx-4 h-px bg-white/[0.06]" />

              <nav className="flex flex-col px-4 pt-8">
                <ul ref={mobileListRef} className="relative flex flex-col">
                  {mobileIndicator.width > 0 && (
                    <motion.div
                      aria-hidden
                      className="glass-nav-indicator pointer-events-none absolute rounded-2xl"
                      animate={{ left: mobileIndicator.left + 8, top: mobileIndicator.top + 4, width: mobileIndicator.width - 16, height: mobileIndicator.height - 8 }}
                      transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.7 }}
                    />
                  )}
                  {navLinks.map((l, i) => (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 + 0.28, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      ref={node => { if (node) mobileItemRefs.current.set(l.href, node); else mobileItemRefs.current.delete(l.href); }}
                    >
                      <a
                        href={link(l.href)}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setActiveHash(l.href);
                          scrollLockRef.current = Date.now() + 3000;
                          scrollEndCleanupRef.current();
                          setTimeout(() => {
                            document.body.style.overflow = "";
                            const target = l.href === "#top" ? 0 : (() => {
                              const el = document.getElementById(l.href.slice(1));
                              return el ? el.getBoundingClientRect().top + window.scrollY - 80 : null;
                            })();
                            if (target === null) { setMobileOpen(false); return; }
                            window.scrollTo({ top: target, behavior: "smooth" });
                            let rafId: number;
                            const check = () => {
                              if (Math.abs(window.scrollY - target) < 8) {
                                setMobileOpen(false);
                              } else {
                                rafId = requestAnimationFrame(check);
                              }
                            };
                            rafId = requestAnimationFrame(check);
                            scrollEndCleanupRef.current = () => cancelAnimationFrame(rafId);
                          }, 420);
                        }}
                        className={cn(
                          "relative z-10 flex w-full items-center justify-center py-4 font-display text-2xl font-medium tracking-tight transition-colors duration-200",
                          activeHash === l.href ? "text-foreground" : "text-foreground/50"
                        )}
                      >
                        {l.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="px-6 pb-6 pt-4"
              >
                <a
                  href={link("#kontakt")}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveHash("#kontakt");
                    scrollLockRef.current = Date.now() + 3000;
                    scrollEndCleanupRef.current();
                    document.body.style.overflow = "";
                    const el = document.getElementById("kontakt");
                    if (!el) { setMobileOpen(false); return; }
                    const target = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: target, behavior: "smooth" });
                    let rafId: number;
                    const check = () => {
                      if (Math.abs(window.scrollY - target) < 8) {
                        setMobileOpen(false);
                      } else {
                        rafId = requestAnimationFrame(check);
                      }
                    };
                    rafId = requestAnimationFrame(check);
                    scrollEndCleanupRef.current = () => cancelAnimationFrame(rafId);
                  }}
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-full text-base font-medium text-white"
                  style={{ background: "linear-gradient(110deg, #ff2d8f 0%, #c026d3 50%, #8b5cf6 100%)", boxShadow: "0 12px 40px -10px rgba(255,45,143,0.6)" }}
                >
                  Kostenloses Erstgespräch
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}
