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
  "inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:opacity-80 focus:outline-none";

const sizes: Record<Size, string> = {
  md: "text-sm px-5 py-3",
  sm: "text-xs px-3 py-1.5",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[#ff2d8f] text-white shadow-[0_0_32px_rgba(255,45,143,0.35)] hover:-translate-y-px hover:bg-[#ff4a9f] hover:shadow-[0_0_48px_rgba(255,45,143,0.55)]",
  ghost:
    "bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/[0.05]",
  cream:
    "bg-white/[0.05] text-white border border-white/[0.08] hover:bg-white/[0.10] hover:border-white/[0.14]",
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
