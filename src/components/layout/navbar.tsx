"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { brand, navLinks } from "@/lib/content";
import { Menu, X, ArrowRight } from "@/lib/icons";

interface NavbarProps {
  localLinks?: readonly { label: string; href: string }[];
  logoHref?: string;
}

export function Navbar({ localLinks, logoHref }: NavbarProps = {}) {
  const links = localLinks ?? navLinks;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>(links[0]?.href ?? "#top");
  const [indicator, setIndicator] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [mobileIndicator, setMobileIndicator] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 1023px)").matches : false
  );

  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Map<string, HTMLLIElement>>(new Map());
  const mobileListRef = useRef<HTMLUListElement>(null);
  const mobileItemRefs = useRef<Map<string, HTMLLIElement>>(new Map());
  const scrollLockRef = useRef(0);
  const scrollEndCleanupRef = useRef<() => void>(() => {});
  const pathname = usePathname();
  const isHome = pathname === "/";
  const samePageHashNav = Boolean(localLinks) || isHome;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  function link(hash: string) {
    if (localLinks) return hash;
    return isHome ? hash : `/${hash}`;
  }

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

      const ids = links.map((l) => l.href.slice(1));
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
  }, [links]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    window.dispatchEvent(new CustomEvent("mobilemenu", { detail: { open: mobileOpen } }));
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function scrollToHash(hash: string, lockUntil: number, closeDelay = 420) {
    setActiveHash(hash);
    scrollLockRef.current = lockUntil;
    scrollEndCleanupRef.current();

    setTimeout(() => {
      document.body.style.overflow = "";
      const target =
        hash === "#top"
          ? 0
          : (() => {
              const el = document.getElementById(hash.slice(1));
              return el ? el.getBoundingClientRect().top + window.scrollY - 80 : null;
            })();

      if (target === null) {
        setMobileOpen(false);
        return;
      }

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
    }, closeDelay);
  }

  return (
    <header className="navbar-enter fixed inset-x-0 top-3 z-50 flex justify-center px-4">
      <nav
        className={cn(
          "relative flex w-full max-w-6xl flex-col overflow-hidden [transition:background_500ms_ease,box-shadow_500ms_ease,backdrop-filter_500ms_ease,border-radius_500ms_ease]",
          isMobile ? "glass-pill rounded-[20px]" : scrolled ? "glass-strong rounded-full" : "glass-pill rounded-full",
          mobileOpen && "rounded-[20px]"
        )}
      >
        <div className="flex items-center justify-between gap-4 px-3 py-2">
          <a
            href={logoHref ?? link("#top")}
            onClick={() => mobileOpen && setMobileOpen(false)}
            className="flex items-center gap-2 pl-2 pr-1"
            aria-label={brand.name}
          >
            <span
              className="flex h-7 w-7 items-center justify-center rounded-[9px] font-display text-[14px] font-extrabold text-white"
              style={{ background: "linear-gradient(135deg,#1e5eff,#4f46e5)", boxShadow: "0 4px 12px -4px rgba(30,94,255,0.5)" }}
              aria-hidden
            >
              S
            </span>
            <span className="font-display text-[17px] font-extrabold leading-none tracking-tight text-foreground">
              Schnell<span className="text-[#1e5eff]">-</span>Sichtbar
            </span>
          </a>

          <ul ref={listRef} className="relative hidden items-center gap-1 lg:flex">
            {indicator.width > 0 && (
              <div
                aria-hidden
                className="glass-nav-indicator pointer-events-none absolute rounded-full transition-[left,top,width,height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  left: indicator.left,
                  top: indicator.top,
                  width: indicator.width,
                  height: indicator.height,
                }}
              />
            )}
            {links.map((l) => (
              <li key={l.href} ref={(node) => { if (node) itemRefs.current.set(l.href, node); else itemRefs.current.delete(l.href); }}>
                <a
                  href={link(l.href)}
                  onClick={() => {
                    setActiveHash(l.href);
                    scrollLockRef.current = Date.now() + 900;
                  }}
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
              className="group hidden h-10 items-center gap-2 rounded-full pl-5 pr-1.5 text-sm font-semibold text-white sm:inline-flex"
              style={{ background: "linear-gradient(110deg, #1e5eff 0%, #2f6bff 50%, #4f46e5 100%)", boxShadow: "0 8px 24px -10px rgba(30,94,255,0.6)" }}
            >
              Erstgespräch
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-[rgba(20,24,31,0.03)] text-foreground/80 hover:bg-[rgba(20,24,31,0.06)] lg:hidden cursor-pointer"
            >
              <span className="grid h-4 w-4 place-items-center">
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </span>
            </button>
          </div>
        </div>

        <div
          className={cn(
            "overflow-hidden transition-[max-height] duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
            mobileOpen ? "max-h-[calc(100dvh-80px)]" : "max-h-0"
          )}
          aria-hidden={!mobileOpen}
        >
          <div className="flex flex-col" style={{ minHeight: "calc(100dvh - 80px)" }}>
            <div className="mx-4 h-px bg-[rgba(20,24,31,0.08)]" />

            <nav className="flex flex-col px-4 pt-8">
              <ul ref={mobileListRef} className="relative flex flex-col">
                {mobileIndicator.width > 0 && (
                  <div
                    aria-hidden
                    className="glass-nav-indicator pointer-events-none absolute rounded-2xl transition-[left,top,width,height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      left: mobileIndicator.left + 8,
                      top: mobileIndicator.top + 4,
                      width: mobileIndicator.width - 16,
                      height: mobileIndicator.height - 8,
                    }}
                  />
                )}
                {links.map((l, i) => (
                  <li
                    key={l.href}
                    ref={(node) => { if (node) mobileItemRefs.current.set(l.href, node); else mobileItemRefs.current.delete(l.href); }}
                    className={cn(
                      "transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                    )}
                    style={{ transitionDelay: mobileOpen ? `${i * 60 + 280}ms` : "0ms" }}
                  >
                    <a
                      href={link(l.href)}
                      onClick={(e) => {
                        if (!samePageHashNav) {
                          setMobileOpen(false);
                          return;
                        }
                        e.preventDefault();
                        e.stopPropagation();
                        scrollToHash(l.href, Date.now() + 3000);
                      }}
                      className={cn(
                        "relative z-10 flex w-full items-center justify-center py-4 font-display text-2xl font-medium tracking-tight transition-colors duration-200",
                        activeHash === l.href ? "text-foreground" : "text-foreground/50"
                      )}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div
              className={cn(
                "px-6 pb-6 pt-4 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                mobileOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              )}
              style={{ transitionDelay: mobileOpen ? "500ms" : "0ms" }}
            >
              <a
                href={link("#kontakt")}
                onClick={(e) => {
                  if (!samePageHashNav) {
                    setMobileOpen(false);
                    return;
                  }
                  e.preventDefault();
                  e.stopPropagation();
                  scrollToHash("#kontakt", Date.now() + 3000, 0);
                }}
                className="flex h-14 w-full items-center justify-center gap-2 rounded-full text-base font-semibold text-white"
                style={{ background: "linear-gradient(110deg, #1e5eff 0%, #2f6bff 50%, #4f46e5 100%)", boxShadow: "0 12px 34px -10px rgba(30,94,255,0.55)" }}
              >
                Kostenloses Erstgespräch
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
