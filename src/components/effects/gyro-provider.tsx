"use client";

import { createContext, useContext } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useGyro, type GyroPos } from "@/hooks/use-gyro";

interface GyroCtx {
  pos: GyroPos;
  active: boolean;
}

const Ctx = createContext<GyroCtx>({ pos: { x: 50, y: 50 }, active: false });

export function useGyroContext() {
  return useContext(Ctx);
}

export function GyroProvider({ children }: { children: React.ReactNode }) {
  const { pos, active, needsPrompt, requestPermission } = useGyro();

  return (
    <Ctx.Provider value={{ pos, active }}>
      {children}

      {/* iOS permission prompt — elegant floating pill */}
      <AnimatePresence>
        {needsPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ delay: 2.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-8 left-1/2 z-[200] -translate-x-1/2"
          >
            <button
              onClick={requestPermission}
              className="group flex items-center gap-3 rounded-full py-3 pl-4 pr-5 text-sm font-medium text-white/90"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(24px) saturate(160%)",
                WebkitBackdropFilter: "blur(24px) saturate(160%)",
                border: "1px solid rgba(255,255,255,0.13)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.1), 0 12px 48px rgba(0,0,0,0.5)",
              }}
            >
              {/* Gyro icon */}
              <span
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(135deg,#ff2d8f,#8b5cf6)",
                  boxShadow: "0 0 14px -2px rgba(255,45,143,0.6)",
                }}
              >
                {/* Simple phone-rotate SVG */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 0 1 10 10" />
                  <polyline points="22 2 22 12 12 12" />
                  <rect x="2" y="7" width="10" height="15" rx="2" />
                </svg>
              </span>
              Bewegungseffekte erlauben
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}
