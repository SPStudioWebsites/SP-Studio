"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { brand } from "@/lib/content";
import { Phone, ArrowRight } from "@/lib/icons";

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 320);
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
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[60] sm:hidden"
          style={{
            background: "rgba(10,10,10,0.92)",
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
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
