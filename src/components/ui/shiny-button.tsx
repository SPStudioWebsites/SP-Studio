"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";

interface ShinyButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  asChild?: boolean;
}

export const ShinyButton = forwardRef<HTMLButtonElement, ShinyButtonProps>(
  function ShinyButton(
    { className, children, variant = "primary", size = "md", href, ...props },
    ref
  ) {
    const reduce = useReducedMotion();
    const sizes = {
      sm: "h-10 px-4 text-sm",
      md: "h-12 px-6 text-sm",
      lg: "h-14 px-8 text-base",
    };

    const base =
      "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    if (variant === "ghost") {
      const cls = cn(
        base,
        sizes[size],
        "text-foreground/85 hover:text-foreground hover:bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.18]",
        className
      );
      if (href)
        return (
          <a href={href} className={cls}>
            {children}
          </a>
        );
      return (
        <button ref={ref} className={cls} {...props}>
          {children}
        </button>
      );
    }

    if (variant === "outline") {
      const cls = cn(
        base,
        sizes[size],
        "text-foreground border border-white/[0.18] hover:border-pink/60 hover:text-pink hover:shadow-[0_0_30px_-10px_rgba(255,45,143,0.5)]",
        className
      );
      if (href)
        return (
          <a href={href} className={cls}>
            {children}
          </a>
        );
      return (
        <button ref={ref} className={cls} {...props}>
          {children}
        </button>
      );
    }

    const cls = cn(
      base,
      sizes[size],
      "text-white shadow-[0_10px_40px_-10px_rgba(255,45,143,0.6)] hover:shadow-[0_15px_50px_-10px_rgba(255,45,143,0.8)]",
      className
    );

    const Inner = (
      <>
        {/* Background gradient */}
        <span
          className="absolute inset-0 -z-10 rounded-full"
          style={{
            background:
              "linear-gradient(110deg, #ff2d8f 0%, #c026d3 50%, #8b5cf6 100%)",
          }}
        />
        {/* Shine sweep */}
        {!reduce && (
          <motion.span
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full"
            style={{
              background:
                "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
              backgroundSize: "200% 100%",
            }}
            animate={{ backgroundPosition: ["150% 0%", "-50% 0%"] }}
            transition={{
              duration: 2.6,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 1.4,
            }}
          />
        )}
        {/* Inner highlight */}
        <span className="absolute inset-px rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-60 mix-blend-overlay" />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </>
    );

    if (href)
      return (
        <a href={href} className={cls}>
          {Inner}
        </a>
      );

    return (
      <button ref={ref} className={cls} {...props}>
        {Inner}
      </button>
    );
  }
);
