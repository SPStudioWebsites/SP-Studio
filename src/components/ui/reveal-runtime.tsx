"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RevealRuntime() {
  const pathname = usePathname();

  useEffect(() => {
    const revealRoots = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-on-scroll, .reveal-stagger")
    );

    if (revealRoots.length === 0) return;

    document.querySelectorAll<HTMLElement>(".reveal-stagger").forEach((root) => {
      root.querySelectorAll<HTMLElement>(".reveal-item").forEach((child, index) => {
        child.style.setProperty("--reveal-index", String(index));
      });
    });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      revealRoots.forEach((el) => el.classList.add("is-visible"));
      document
        .querySelectorAll<HTMLElement>(".reveal-item")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          const once = !el.classList.contains("reveal-repeat");

          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            if (once) observer.unobserve(el);
          } else if (!once) {
            el.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    revealRoots.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
