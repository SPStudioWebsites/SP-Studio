import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

interface GlassCardProps extends ComponentPropsWithoutRef<"div"> {
  variant?: "default" | "strong" | "elevated";
  hover?: boolean;
}

export function GlassCard({
  className,
  variant = "default",
  hover = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      {...props}
      className={cn(
        "relative rounded-3xl",
        variant === "default" && "glass",
        variant === "strong" && "glass-strong",
        variant === "elevated" &&
          "glass-strong shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]",
        hover &&
          "transition-all duration-500 ease-out hover:border-white/[0.16] hover:bg-white/[0.05] hover:-translate-y-0.5",
        className
      )}
    />
  );
}
