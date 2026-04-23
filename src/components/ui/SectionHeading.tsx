interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  const renderedTitle = (() => {
    if (!highlight) return title;
    const idx = title.indexOf(highlight);
    if (idx === -1) return title;
    const before = title.slice(0, idx);
    const after = title.slice(idx + highlight.length);
    return (
      <>
        {before}
        <span className="bg-gradient-to-r from-[#ff2d8f] via-[#ff5fa2] to-[#8b5cf6] bg-clip-text text-transparent">
          {highlight}
        </span>
        {after}
      </>
    );
  })();

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-[#ff2d8f]/30 bg-[#ff2d8f]/[0.06] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#ff6bb0]">
          <span className="h-1 w-1 rounded-full bg-[#ff2d8f]" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-4xl md:text-section-h font-bold tracking-[-0.9px] md:tracking-[-1.2px] text-white">
        {renderedTitle}
      </h2>
      {description ? (
        <p className="mt-4 text-lg text-white/60 leading-[1.5]">{description}</p>
      ) : null}
    </div>
  );
}
