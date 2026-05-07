"use client";

import { useEffect, useState } from "react";

export function BlogBackground() {
  const [mobile, setMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 768px)").matches : false
  );
  const [loaded, setLoaded] = useState(() =>
    typeof window !== "undefined" ? document.readyState === "complete" : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const onLoad = () => setLoaded(true);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  const blur = mobile ? "55px" : "110px";
  const blurMid = mobile ? "40px" : "85px";
  const play = loaded ? "running" : "paused";

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* ── Layer 1: Grain texture — tactile depth ── */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.055,
          mixBlendMode: "overlay",
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>")`,
        }}
      />

      {/* ── Layer 2: Fine dot grid — spatial reference / depth grid ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.6,
        }}
      />

      {/* ── Layer 3: Ambient orbs — colored light sources ── */}

      {/* Pink — top-left */}
      <div
        className="absolute rounded-full"
        style={{
          top: "-18%",
          left: "-8%",
          width: "min(68vw, 720px)",
          height: "min(68vw, 720px)",
          background:
            "radial-gradient(circle at center, rgba(255,45,143,0.58) 0%, rgba(255,45,143,0.18) 38%, transparent 65%)",
          filter: `blur(${blur})`,
          opacity: mobile ? 0.22 : 0.32,
          animationName: "drift",
          animationDuration: "32s",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationDirection: "alternate",
          animationPlayState: play,
        }}
      />

      {/* Violet — bottom-right */}
      <div
        className="absolute rounded-full"
        style={{
          bottom: "-18%",
          right: "-8%",
          width: "min(62vw, 680px)",
          height: "min(62vw, 680px)",
          background:
            "radial-gradient(circle at center, rgba(139,92,246,0.62) 0%, rgba(109,40,217,0.2) 38%, transparent 65%)",
          filter: `blur(${blur})`,
          opacity: mobile ? 0.20 : 0.28,
          animationName: "drift",
          animationDuration: "22s",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationDirection: "alternate",
          animationPlayState: play,
        }}
      />

      {/* Fuchsia — center depth layer (gives mid-depth) */}
      <div
        className="absolute rounded-full"
        style={{
          top: "38%",
          left: "48%",
          transform: "translate(-50%, -50%)",
          width: "min(42vw, 420px)",
          height: "min(42vw, 420px)",
          background:
            "radial-gradient(circle at center, rgba(192,38,211,0.42) 0%, transparent 65%)",
          filter: `blur(${blurMid})`,
          opacity: mobile ? 0.10 : 0.16,
          animationName: "drift",
          animationDuration: "26s",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationDirection: "alternate-reverse",
          animationPlayState: play,
        }}
      />

      {/* ── Layer 4: Top spotlight — illuminates the article header ── */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: "min(130vw, 1200px)",
          height: "520px",
          background:
            "radial-gradient(ellipse at top, rgba(255,45,143,0.20) 0%, rgba(139,92,246,0.10) 42%, transparent 70%)",
          filter: "blur(35px)",
          opacity: mobile ? 0.65 : 1,
        }}
      />

      {/* ── Layer 5: Horizontal light band — adds subtle "floor" depth ── */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: "28%",
          height: "1px",
          background:
            "linear-gradient(to right, transparent 0%, rgba(255,45,143,0.08) 30%, rgba(139,92,246,0.08) 70%, transparent 100%)",
          filter: "blur(2px)",
          opacity: 0.8,
        }}
      />

      {/* ── Layer 6: Vignette — darkens edges, focuses the reader ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 40%, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
