"use client";

import { useState, useEffect } from "react";

const FONTS = [
  {
    id: 1,
    key: "sans",
    cssVar: "var(--font-geist-sans)",
    name: "Geist (Fließtext)",
  },
  {
    id: 2,
    key: "playfair",
    cssVar: "var(--font-instrument)",
    name: "Playfair Display",
  },
  {
    id: 3,
    key: "cormorant",
    cssVar: "var(--font-cormorant)",
    name: "Cormorant Garamond",
  },
  {
    id: 4,
    key: "fraunces",
    cssVar: "var(--font-fraunces)",
    name: "Fraunces",
  },
] as const;

const STORAGE_KEY = "accent-font";

export function FontSwitcher() {
  const [active, setActive] = useState(2);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const id = saved ? Number(saved) : 2;
    const font = FONTS.find((f) => f.id === id) ?? FONTS[1];
    setActive(font.id);
    document.documentElement.dataset.accent = font.key;
  }, []);

  function select(font: (typeof FONTS)[number]) {
    setActive(font.id);
    document.documentElement.dataset.accent = font.key;
    localStorage.setItem(STORAGE_KEY, String(font.id));
  }

  const activeFont = FONTS.find((f) => f.id === active)!;

  return (
    <div
      className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-2"
      role="group"
      aria-label="Akzentschrift wählen"
    >
      <div
        className="rounded-2xl px-4 py-3 flex items-center gap-3"
        style={{
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
        }}
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 select-none">
          Akzentschrift
        </span>
        <span
          className="text-sm italic text-gradient font-semibold select-none"
          style={{ fontFamily: activeFont.cssVar }}
        >
          {activeFont.name}
        </span>
        <div className="flex items-center gap-1.5">
          {FONTS.map((font) => (
            <button
              key={font.id}
              onClick={() => select(font)}
              title={font.name}
              className="relative flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold transition-all duration-200"
              style={{
                background:
                  active === font.id
                    ? "linear-gradient(135deg, #ff2d8f, #8b5cf6)"
                    : "rgba(255,255,255,0.07)",
                color: active === font.id ? "#fff" : "rgba(255,255,255,0.5)",
                border:
                  active === font.id
                    ? "1px solid transparent"
                    : "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  active === font.id
                    ? "0 0 12px rgba(255,45,143,0.4)"
                    : "none",
                fontFamily: font.cssVar,
              }}
              aria-pressed={active === font.id}
            >
              {font.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
