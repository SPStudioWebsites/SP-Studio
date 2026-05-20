"use client";

import { useEffect, useState } from "react";

export function ProcessMarginWrapper({ children }: { children: React.ReactNode }) {
  const [mt, setMt] = useState<string>("-10rem");

  useEffect(() => {
    const compute = () => {
      if (window.innerWidth >= 768) {
        setMt("-28rem");
        return;
      }
      // Measure the branchen heading (non-pinned part) to get exact overlap
      const heading = document.querySelector(
        "#branchen > div:first-child"
      ) as HTMLElement | null;
      if (heading) {
        setMt(`-${Math.round(heading.offsetHeight)}px`);
      }
    };

    compute();
    // Small delay for dynamic imports to hydrate
    const t = setTimeout(compute, 120);
    window.addEventListener("resize", compute);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return <div style={{ marginTop: mt }}>{children}</div>;
}
