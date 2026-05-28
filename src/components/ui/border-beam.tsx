import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  transition?: unknown;
  className?: string;
  style?: CSSProperties;
  reverse?: boolean;
  initialOffset?: number;
  borderWidth?: number;
}

export const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
}: BorderBeamProps) => {
  return (
    <div
      className="border-beam-frame pointer-events-none absolute inset-0 rounded-[inherit] border-transparent"
      style={{ "--border-beam-width": `${borderWidth}px` } as CSSProperties}
    >
      <div
        className={cn(
          "border-beam-runner absolute aspect-square bg-linear-to-l from-(--color-from) via-(--color-to) to-transparent",
          className
        )}
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            "--color-from": colorFrom,
            "--color-to": colorTo,
            "--border-beam-start": reverse
              ? `${100 - initialOffset}%`
              : `${initialOffset}%`,
            "--border-beam-end": reverse
              ? `${-initialOffset}%`
              : `${100 + initialOffset}%`,
            "--border-beam-duration": `${duration}s`,
            "--border-beam-delay": `${-delay}s`,
            ...style,
          } as CSSProperties
        }
      />
    </div>
  );
};
