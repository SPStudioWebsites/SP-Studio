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
        <span className="inline-flex items-center gap-2 text-sm text-muted">
          <span className="h-1 w-1 rounded-full bg-charcoal-40" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-4xl md:text-section-h font-semibold tracking-[-0.9px] md:tracking-[-1.2px] text-charcoal">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg text-muted leading-[1.5]">{description}</p>
      ) : null}
    </div>
  );
}
