import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type FC,
} from "react"

import { cn } from "@/lib/utils"

export type AnimatedShinyTextProps = ComponentPropsWithoutRef<"span">

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
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
            background: `radial-gradient(ellipse 28% 75% at 50% 50%, rgba(255,255,255,0.55) 0%, transparent 100%)`,
          } as CSSProperties
        }
      />
    </span>
  )
}
