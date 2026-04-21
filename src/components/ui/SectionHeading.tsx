interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-[#ff2d8f]/30 bg-[#ff2d8f]/[0.06] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#ff6bb0]">
          <span className="h-1 w-1 rounded-full bg-[#ff2d8f]" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-4xl md:text-section-h font-bold tracking-[-0.9px] md:tracking-[-1.2px] text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg text-white/60 leading-[1.5]">{description}</p>
      ) : null}
    </div>
  );
}
