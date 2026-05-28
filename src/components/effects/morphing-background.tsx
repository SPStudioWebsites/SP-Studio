"use client";

import { useEffect, useRef } from "react";

export function MorphingBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobARef = useRef<HTMLDivElement>(null);
  const blobBRef = useRef<HTMLDivElement>(null);
  const blobCRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([{ default: gsap }, { ScrollTrigger }]) => {
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const st = {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        };

        // Hue shift on scroll
        const proxy = { hue: 0 };
        gsap.to(proxy, {
          hue: 50,
          ease: "none",
          scrollTrigger: st,
          onUpdate: () => {
            if (containerRef.current) {
              containerRef.current.style.filter = `hue-rotate(${proxy.hue}deg)`;
            }
          },
        });

        // Blob A: drifts down-right as page scrolls
        gsap.to(blobARef.current, {
          x: "35vw",
          y: "40vh",
          ease: "none",
          scrollTrigger: st,
        });

        // Blob B: drifts up-left as page scrolls
        gsap.to(blobBRef.current, {
          x: "-38vw",
          y: "-35vh",
          ease: "none",
          scrollTrigger: st,
        });

        // Blob C: moves diagonally and scales up slightly
        gsap.to(blobCRef.current, {
          x: "25vw",
          y: "-45vh",
          scale: 1.4,
          ease: "none",
          scrollTrigger: st,
        });
      });

      cleanup = () => ctx.revert();
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Blob A — top left, pink */}
      <div
        ref={blobARef}
        className="absolute -left-[5%] -top-[10%] h-[42vw] w-[42vw] max-h-[580px] max-w-[580px]"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(255,45,143,0.18) 0%, rgba(180,60,220,0.12) 30%, rgba(80,80,255,0.08) 55%, rgba(80,80,255,0) 75%)",
          filter: "blur(55px)",
          animation: "morph-a 20s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* Blob B — bottom right, violet */}
      <div
        ref={blobBRef}
        className="absolute -bottom-[15%] -right-[5%] h-[38vw] w-[38vw] max-h-[520px] max-w-[520px]"
        style={{
          background:
            "radial-gradient(circle at 55% 55%, rgba(139,92,246,0.19) 0%, rgba(139,92,246,0.10) 35%, rgba(139,92,246,0.03) 60%, rgba(139,92,246,0) 75%)",
          filter: "blur(55px)",
          animation: "morph-b 26s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* Blob C — center, fuchsia accent */}
      <div
        ref={blobCRef}
        className="absolute left-1/2 top-1/2 h-[25vw] w-[25vw] max-h-[340px] max-w-[340px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle at center, rgba(192,38,211,0.12) 0%, rgba(192,38,211,0.05) 40%, rgba(192,38,211,0) 65%)",
          filter: "blur(60px)",
          animation: "morph-c 32s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* Grain overlay — breaks 8-bit quantisation banding in gradients */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.028,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
