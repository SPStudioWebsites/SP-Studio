"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useIsMobile } from "@/lib/useIsMobile";

export function GlobalBackground() {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const disableMotion = isMobile || !!prefersReducedMotion;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 100, damping: 28 });
  const glowY = useSpring(mouseY, { stiffness: 100, damping: 28 });

  useEffect(() => {
    if (isMobile) return;
    function onMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [isMobile, mouseX, mouseY]);

  return (
    <>
      {/* Cursor glow — desktop only */}
      {!isMobile && (
        <motion.div
          aria-hidden="true"
          style={{ left: glowX, top: glowY }}
          className="pointer-events-none fixed z-[2] -translate-x-1/2 -translate-y-1/2 mix-blend-plus-lighter"
        >
          <div className="h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(255,45,143,0.18)_0%,rgba(255,45,143,0.06)_35%,transparent_70%)]" />
        </motion.div>
      )}

      {/* Conic gradient mesh — site-wide atmospheric substrate, fades out vertically */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[160vh] opacity-[0.18]"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 30%, transparent 0deg, rgba(255,45,143,0.08) 60deg, transparent 120deg, rgba(139,92,246,0.08) 200deg, transparent 260deg, rgba(255,45,143,0.06) 320deg, transparent 360deg)",
          filter: "blur(80px)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      />

      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 20%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 40%, black 20%, transparent 82%)",
        }}
      />

      {/* Grain texture — desktop only (feTurbulence is expensive on mobile GPUs) */}
      {!isMobile && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.9'/%3E%3C/svg%3E\")",
            backgroundSize: "180px 180px",
          }}
        />
      )}

      {/* Vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 45%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Ambient blobs — absolute, distributed down the full page */}
      <motion.div
        aria-hidden="true"
        animate={disableMotion ? undefined : { x: [-15, 25, -15], y: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[15%] top-[35%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff2d8f]/[0.09] blur-[140px]"
      />
      <motion.div
        aria-hidden="true"
        animate={disableMotion ? undefined : { x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[10%] top-[50%] h-[600px] w-[600px] rounded-full bg-[#8b5cf6]/[0.09] blur-[130px]"
      />
      <motion.div
        aria-hidden="true"
        animate={disableMotion ? undefined : { x: [0, 35, 0], y: [0, -15, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[40%] top-[70%] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[#ff2d8f]/[0.07] blur-[160px]"
      />
      <motion.div
        aria-hidden="true"
        animate={disableMotion ? undefined : { x: [-20, 20, -20], y: [0, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[25%] top-[85%] h-[500px] w-[500px] rounded-full bg-[#8b5cf6]/[0.08] blur-[120px]"
      />
    </>
  );
}
