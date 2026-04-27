import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Pill({
  children,
  className,
  dot = true,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  dot?: boolean;
  tone?: "default" | "pink" | "violet" | "warn";
}) {
  const dotColor =
    tone === "pink"
      ? "bg-pink shadow-[0_0_10px_rgba(255,45,143,0.8)]"
      : tone === "violet"
        ? "bg-violet shadow-[0_0_10px_rgba(139,92,246,0.8)]"
        : tone === "warn"
          ? "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.7)]"
          : "bg-pink shadow-[0_0_10px_rgba(255,45,143,0.7)]";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full glass-pill px-3.5 py-1.5 text-xs font-medium tracking-wide text-foreground/85",
        className
      )}
    >
      {dot && (
        <span className={cn("h-1.5 w-1.5 rounded-full animate-pulse-soft", dotColor)} />
      )}
      {children}
    </span>
  );
}
