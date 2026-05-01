"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

function useReducedOrbs() {
  const [mobile, setMobile] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return mobile;
}

export function GradientOrbs({ className }: { className?: string }) {
  const mobile = useReducedOrbs();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoaded(true);
    } else {
      const onLoad = () => setLoaded(true);
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div
        className="absolute -top-[20%] -left-[10%] h-[60vw] w-[60vw] max-h-[800px] max-w-[800px] rounded-full animate-drift-slow"
        style={{
          filter: `blur(${mobile ? "60px" : "120px"})`,
          opacity: mobile ? 0.28 : 0.40,
          background:
            "radial-gradient(circle at center, rgba(255,45,143,0.55) 0%, rgba(255,45,143,0.15) 40%, transparent 70%)",
          animationPlayState: loaded ? "running" : "paused",
        }}
      />
      <div
        className="absolute -bottom-[20%] -right-[10%] h-[55vw] w-[55vw] max-h-[700px] max-w-[700px] rounded-full animate-drift"
        style={{
          filter: `blur(${mobile ? "60px" : "120px"})`,
          opacity: mobile ? 0.24 : 0.35,
          background:
            "radial-gradient(circle at center, rgba(139,92,246,0.6) 0%, rgba(139,92,246,0.15) 40%, transparent 70%)",
          animationPlayState: loaded ? "running" : "paused",
        }}
      />
      <div
        className="absolute top-[35%] left-[40%] h-[35vw] w-[35vw] max-h-[450px] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-drift"
        style={{
          filter: `blur(${mobile ? "50px" : "100px"})`,
          opacity: mobile ? 0.18 : 0.25,
          background:
            "radial-gradient(circle at center, rgba(192,38,211,0.5) 0%, transparent 65%)",
          animationPlayState: loaded ? "running" : "paused",
        }}
      />
    </div>
  );
}
