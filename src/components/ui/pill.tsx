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
      ? "bg-[#1e5eff] shadow-[0_0_8px_rgba(30,94,255,0.55)]"
      : tone === "violet"
        ? "bg-[#4f46e5] shadow-[0_0_8px_rgba(79,70,229,0.5)]"
        : tone === "warn"
          ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.55)]"
          : "bg-[#1e5eff] shadow-[0_0_8px_rgba(30,94,255,0.5)]";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full glass-pill px-3.5 py-1.5 text-xs font-medium tracking-wide text-foreground/70",
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
