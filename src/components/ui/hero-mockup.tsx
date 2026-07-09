"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const BARS = [35, 52, 44, 68, 55, 72, 90];

export function HeroMockup() {
  const phoneRef = useRef<HTMLDivElement>(null);

  // Outer refs — mouse parallax
  const cardAOuterRef = useRef<HTMLDivElement>(null);
  const cardBOuterRef = useRef<HTMLDivElement>(null);

  // Inner refs — idle float
  const cardAInnerRef = useRef<HTMLDivElement>(null);
  const cardBInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void import("gsap").then(({ default: gsap }) => {
      if (cancelled) return;

      const ctx = gsap.context(() => {
        // ── 1. Entrance ─────────────────────────────────────────
        gsap.set(phoneRef.current, { scale: 0.92 });
        gsap.set([cardAOuterRef.current, cardBOuterRef.current], { y: 35 });

        const tl = gsap.timeline({ delay: 0.6 });

        tl.to(phoneRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
        });

        tl.to([cardAOuterRef.current, cardBOuterRef.current], {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "back.out(1.2)",
          stagger: 0.12,
        }, "-=0.5");

        // ── 2. Idle float (inner elements — separate from parallax) ──
        tl.add(() => {
          gsap.to(cardAInnerRef.current, {
            y: 8,
            duration: 3.2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
          gsap.to(cardBInnerRef.current, {
            y: -7,
            duration: 2.8,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 0.5,
          });
        });
      });

      // ── 3. Mouse parallax (outer elements) ──────────────────────
      const setPhoneX  = gsap.quickTo(phoneRef.current,      "x", { duration: 0.5, ease: "power2.out" });
      const setPhoneY  = gsap.quickTo(phoneRef.current,      "y", { duration: 0.5, ease: "power2.out" });
      const setCardAX  = gsap.quickTo(cardAOuterRef.current, "x", { duration: 0.4, ease: "power2.out" });
      const setCardAY  = gsap.quickTo(cardAOuterRef.current, "y", { duration: 0.4, ease: "power2.out" });
      const setCardBX  = gsap.quickTo(cardBOuterRef.current, "x", { duration: 0.4, ease: "power2.out" });
      const setCardBY  = gsap.quickTo(cardBOuterRef.current, "y", { duration: 0.4, ease: "power2.out" });

      function onMove(e: MouseEvent) {
        const nx = (e.clientX / window.innerWidth)  - 0.5;
        const ny = (e.clientY / window.innerHeight) - 0.5;
        setPhoneX(nx * 12);  setPhoneY(ny * 10);
        setCardAX(nx * 24);  setCardAY(ny * 20);
        setCardBX(nx * -20); setCardBY(ny * -16);
      }

      window.addEventListener("mousemove", onMove);
      cleanup = () => {
        window.removeEventListener("mousemove", onMove);
        ctx.revert();
      };
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center" style={{ height: 580, transform: "translate(40px, -40px)" }}>

      {/* ── Phone frame ─────────────────────────────────────── */}
      <div ref={phoneRef} className="relative" style={{ width: 310, height: 620, opacity: 0 }}>
        <Image
          src="/iphone 17 Pro filled.png"
          alt="Beispiel-Website für einen lokalen Betrieb auf dem Smartphone"
          fill
          sizes="310px"
          className="object-contain drop-shadow-[0_40px_70px_rgba(20,24,31,0.22)]"
          unoptimized
          priority
        />

        {/* ── Card A — top right: Anfragen ──────────────────── */}
        <div ref={cardAOuterRef} style={{ position: "absolute", right: -100, top: "14%", zIndex: 20, opacity: 0 }}>
          <div ref={cardAInnerRef} style={{
            width: 160,
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(20,24,31,0.08)",
            borderRadius: 18,
            padding: "14px 16px",
            boxShadow: "0 24px 52px -18px rgba(20,24,31,0.30), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}>
            <p style={{ fontSize: 10, fontWeight: 600, color: "#57616f", margin: 0, textTransform: "uppercase", letterSpacing: "0.15em" }}>
              Neue Anfragen
            </p>
            <p style={{ fontSize: 26, fontWeight: 800, color: "#14181f", margin: "3px 0 0", lineHeight: 1 }}>
              +180%
            </p>
            <p style={{ fontSize: 11, color: "#1e5eff", marginTop: 5, fontWeight: 600 }}>
              nach Website-Launch
            </p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 3, marginTop: 10, height: 28 }}>
              {BARS.map((h, i) => (
                <div key={i} style={{
                  flex: 1, height: `${h}%`,
                  background: i === BARS.length - 1 ? "#1e5eff" : "rgba(30,94,255,0.28)",
                  borderRadius: 2,
                }} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Card B — bottom left: Lieferzeit ─────────────── */}
        <div ref={cardBOuterRef} style={{ position: "absolute", left: -105, top: "62%", zIndex: 20, opacity: 0 }}>
          <div ref={cardBInnerRef} style={{
            width: 168,
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(20,24,31,0.08)",
            borderRadius: 18,
            padding: "14px 16px",
            boxShadow: "0 24px 52px -18px rgba(20,24,31,0.30), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}>
            <p style={{ fontSize: 10, fontWeight: 600, color: "#57616f", margin: 0, textTransform: "uppercase", letterSpacing: "0.15em" }}>
              Fertig in
            </p>
            <p style={{ fontSize: 32, fontWeight: 800, color: "#14181f", margin: "3px 0 0", lineHeight: 1 }}>
              14 Tage
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 7 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", flexShrink: 0 }} />
              <p style={{ fontSize: 10, color: "#57616f", margin: 0 }}>Ø Lieferzeit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
