"use client";
import { useState, useEffect, useCallback } from "react";

export interface GyroPos { x: number; y: number }

type PermissionState = "pending" | "granted" | "denied" | "not-required" | "unavailable";

export function useGyro() {
  const [pos, setPos]         = useState<GyroPos>({ x: 50, y: 50 });
  const [permission, setPerm] = useState<PermissionState>("pending");

  const onEvent = useCallback((e: DeviceOrientationEvent) => {
    const gamma = e.gamma ?? 0;
    const beta  = e.beta  ?? 45;
    setPos({
      x: Math.min(100, Math.max(0, ((gamma + 45) / 90) * 100)),
      y: Math.min(100, Math.max(0, ((beta  + 20) / 90) * 100)),
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("DeviceOrientationEvent" in window)) {
      setPerm("unavailable");
      return;
    }
    const mobile = /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    if (!mobile) { setPerm("unavailable"); return; }

    // @ts-expect-error iOS 13+ API
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      setPerm("pending");
    } else {
      window.addEventListener("deviceorientation", onEvent, true);
      setPerm("not-required");
    }
    return () => window.removeEventListener("deviceorientation", onEvent, true);
  }, [onEvent]);

  useEffect(() => {
    if (permission !== "granted") return;
    window.addEventListener("deviceorientation", onEvent, true);
    return () => window.removeEventListener("deviceorientation", onEvent, true);
  }, [permission, onEvent]);

  const requestPermission = useCallback(async () => {
    try {
      // @ts-expect-error iOS 13+
      const res = await DeviceOrientationEvent.requestPermission();
      setPerm(res === "granted" ? "granted" : "denied");
    } catch {
      setPerm("denied");
    }
  }, []);

  const active        = permission === "granted" || permission === "not-required";
  const needsPrompt   = permission === "pending";

  return { pos, active, needsPrompt, requestPermission };
}
