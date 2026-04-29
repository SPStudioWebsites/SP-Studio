"use client";

import { createContext, useContext } from "react";
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
  const { pos, active } = useGyro();

  return (
    <Ctx.Provider value={{ pos, active }}>
      {children}
    </Ctx.Provider>
  );
}
