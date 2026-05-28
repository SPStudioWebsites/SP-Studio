"use client";

import { useEffect } from "react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    const isTouch = navigator.maxTouchPoints > 0 || "ontouchstart" in window;
    if (isTouch) {
      function onAnchorNative(e: MouseEvent) {
        const a = (e.target as HTMLElement)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
        if (!a) return;
        const hash = a.getAttribute("href");
        if (!hash || hash === "#") return;
        const el = document.querySelector(hash);
        if (!el) return;
        e.preventDefault();
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        });
      }
      document.addEventListener("click", onAnchorNative);
      return () => document.removeEventListener("click", onAnchorNative);
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;

      const lenis = new Lenis({
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      }
      let frame = requestAnimationFrame(raf);

      function onAnchor(e: MouseEvent) {
        const a = (e.target as HTMLElement)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
        if (!a) return;
        const hash = a.getAttribute("href");
        if (!hash || hash === "#") return;
        const el = document.querySelector(hash);
        if (!el) return;
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.2 });
      }
      document.addEventListener("click", onAnchor);

      cleanup = () => {
        cancelAnimationFrame(frame);
        document.removeEventListener("click", onAnchor);
        lenis.destroy();
      };
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return <>{children}</>;
}
