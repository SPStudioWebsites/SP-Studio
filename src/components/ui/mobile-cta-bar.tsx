"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { brand } from "@/lib/content";
import { Phone, ArrowRight } from "@/lib/icons";

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const dir = y > lastScrollY.current ? "down" : "up";
      lastScrollY.current = y;

      // Hide completely when contact section is in view
      const kontakt = document.getElementById("kontakt");
      if (kontakt) {
        const rect = kontakt.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisible(false);
          return;
        }
      }

      if (y < 320) { setVisible(false); return; }
      setVisible(dir === "down");
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 z-[60] sm:hidden rounded-2xl glass-pill overflow-hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="flex gap-3 px-4 py-3">
            <a
              href={`tel:${brand.phone}`}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] text-sm font-medium text-foreground/90 active:bg-white/[0.10]"
            >
              <Phone className="h-4 w-4 text-pink" />
              Anrufen
            </a>
            <a
              href="#kontakt"
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(110deg, #ff2d8f 0%, #c026d3 50%, #8b5cf6 100%)",
                boxShadow: "0 8px 30px -10px rgba(255,45,143,0.7)",
              }}
            >
              Anfrage stellen
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
