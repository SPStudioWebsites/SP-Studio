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
    if (window.innerWidth >= 768) {
      setMt("-28rem");
      return true;
    }
    const heading = document.querySelector(
      "#branchen > div:first-child"
    ) as HTMLElement | null;
    if (heading) {
      setMt(`-${Math.round(heading.offsetHeight)}px`);
      return true;
    }
    return false;
  };

  useIsomorphicLayoutEffect(() => {
    if (compute()) return;

    // Branchen section not yet hydrated — retry once after dynamic import settles
    const t = setTimeout(() => {
      compute();
      triedRef.current = true;
    }, 150);

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return <div style={mt !== undefined ? { marginTop: mt } : undefined}>{children}</div>;
}
