import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type FC,
} from "react"

import { cn } from "@/lib/utils"

export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      className={cn(
        "relative mx-auto inline-block max-w-md overflow-hidden text-neutral-600/70 dark:text-neutral-400/70",
        className
      )}
      {...props}
    >
      {children}
      <span
        aria-hidden
        className="animate-shiny-text pointer-events-none absolute inset-0"
        style={
          {
            background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)`,
          } as CSSProperties
        }
      />
    </span>
  )
}
