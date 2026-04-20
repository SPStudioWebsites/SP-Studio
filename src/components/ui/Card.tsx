interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
}

export function Card({ children, className = "", as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={`rounded-xl border border-line bg-cream p-6 md:p-8 transition-colors duration-300 ease-soft hover:border-charcoal-40 ${className}`}
    >
      {children}
    </Tag>
  );
}
