"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// useLayoutEffect on client (no flash), useEffect on server (avoids SSR warning)
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function ProcessMarginWrapper({ children }: { children: React.ReactNode }) {
  // Start with undefined so no marginTop is applied until measured
  const [mt, setMt] = useState<string | undefined>(undefined);
  const triedRef = useRef(false);

  const compute = () => {
    const section = document.getElementById("branchen");
    if (!section) return false;

    if (window.innerWidth >= 768) {
      // Desktop/laptop: the Branchen panels live in a 100dvh pinned container.
      // Their content is anchored to the TOP, so the bottom of the container is
      // empty after the pinned scroll. Pull the Ablauf section up by exactly that
      // empty space so it sits right under the last panel — on EVERY viewport.
      //
      // The empty space = 100dvh − panelPaddingTop − contentHeight. It scales with
      // viewport height AND content height (the inline mockup grows with width), so
      // a fixed value (the old -mt-[34rem]) only looked right at one screen size and
      // badly over-/under-lapped on every other display. Must be measured.
      const container = section.lastElementChild as HTMLElement | null;
      const panels = container
        ? (Array.from(container.children).filter(
            (el) => el instanceof HTMLElement && el.querySelector(".max-w-7xl")
          ) as HTMLElement[])
        : [];
      if (container && panels.length > 0) {
        const padTop = parseFloat(getComputedStyle(panels[0]).paddingTop) || 0;
        const contentH = Math.max(
          ...panels.map(
            (p) => (p.querySelector(".max-w-7xl") as HTMLElement).offsetHeight
          )
        );
        const empty = container.offsetHeight - padTop - contentH;
        // Clamp ≤ 0: on short screens the content already fills (or overflows) the
        // viewport, so no upward pull is needed — never push the section down.
        setMt(`${Math.round(Math.min(0, -empty))}px`);
        return true;
      }
      return false;
    }

    // Mobile (<768) — unchanged: cancel the tall heading block.
    const heading = section.firstElementChild as HTMLElement | null;
    if (heading) {
      setMt(`-${Math.round(heading.offsetHeight)}px`);
      return true;
    }
    return false;
  };

  useIsomorphicLayoutEffect(() => {
    const ok = compute();

    // If the Branchen section isn't measurable yet (dynamic import / hydration),
    // retry once after it settles.
    const t = ok
      ? undefined
      : setTimeout(() => {
          compute();
          triedRef.current = true;
        }, 150);

    // Re-measure once web fonts finish loading — text height can shift slightly,
    // which changes the panel content height the margin is derived from.
    document.fonts?.ready.then(() => compute());

    return () => {
      if (t) clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return <div style={mt !== undefined ? { marginTop: mt } : undefined}>{children}</div>;
}
