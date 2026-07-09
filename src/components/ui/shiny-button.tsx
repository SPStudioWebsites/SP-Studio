import { cn } from "@/lib/utils";
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
    const sizes = {
      sm: "h-10 px-4 text-sm",
      md: "h-12 px-6 text-sm",
      lg: "h-14 px-8 text-base",
    };

    const base =
      "group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    if (variant === "ghost") {
      const cls = cn(
        base,
        sizes[size],
        "text-foreground/80 hover:text-foreground hover:bg-[rgba(20,24,31,0.04)] border border-border hover:border-border-strong",
        className
      );
      if (href) {
        return (
          <a href={href} className={cls}>
            {children}
          </a>
        );
      }
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
        "text-foreground border border-border-strong hover:border-[#1e5eff] hover:text-[#1e5eff] hover:bg-[rgba(30,94,255,0.05)]",
        className
      );
      if (href) {
        return (
          <a href={href} className={cls}>
            {children}
          </a>
        );
      }
      return (
        <button ref={ref} className={cls} {...props}>
          {children}
        </button>
      );
    }

    const cls = cn(
      base,
      sizes[size],
      "shiny-button-primary text-white shadow-[0_12px_36px_-10px_rgba(30,94,255,0.5)] hover:shadow-[0_16px_46px_-10px_rgba(30,94,255,0.7)]",
      className
    );

    const inner = (
      <>
        <span className="shiny-button-bg absolute inset-0 -z-10 rounded-full" />
        <span className="shiny-button-sweep absolute inset-0 -z-10 rounded-full" aria-hidden />
        <span className="absolute inset-px rounded-full bg-gradient-to-b from-white/25 to-transparent opacity-50 mix-blend-overlay" />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </>
    );

    if (href) {
      return (
        <a href={href} className={cls}>
          {inner}
        </a>
      );
    }

    return (
      <button ref={ref} className={cls} {...props}>
        {inner}
      </button>
    );
  }
);
