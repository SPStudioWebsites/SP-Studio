interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
}

export function Card({ children, className = "", as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={`rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 md:p-8 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-white/[0.14] ${className}`}
      style={{
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.25)",
      }}
    >
      {children}
    </Tag>
  );
}
