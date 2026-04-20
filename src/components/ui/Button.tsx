import Link from "next/link";

type Variant = "primary" | "ghost" | "cream";
type Size = "md" | "sm";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-normal transition-[opacity,box-shadow,transform] duration-300 ease-soft active:opacity-80 focus:outline-none focus:shadow-focus";

const sizes: Record<Size, string> = {
  md: "text-base px-4 py-2",
  sm: "text-sm px-3 py-1.5",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-charcoal text-cream-soft shadow-inset hover:-translate-y-[1px]",
  ghost:
    "bg-transparent text-charcoal border border-charcoal-40 hover:bg-charcoal-04",
  cream: "bg-cream text-charcoal hover:bg-charcoal-04",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
