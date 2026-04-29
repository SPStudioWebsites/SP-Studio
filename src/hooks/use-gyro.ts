"use client";

export interface GyroPos { x: number; y: number }

export function useGyro() {
  return {
    pos: { x: 50, y: 50 } as GyroPos,
    active: false,
    needsPrompt: false,
    requestPermission: async () => {},
  };
}
