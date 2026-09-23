type Props = {
  eyebrow: string;
  headline: string;
  supporting?: string;
  className?: string;
};

export function ComparisonsSectionHeader({ eyebrow, headline, supporting, className = "" }: Props) {
  return (
    <header className={`max-w-2xl ${className}`} data-design-layer="content">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{eyebrow}</p>
      <h2 className="mt-2 font-display text-[1.55rem] font-bold leading-snug tracking-tight text-[#000000] sm:text-[1.85rem] lg:text-[2rem]">
        {headline}
      </h2>
      {supporting ? (
        <p className="mt-2.5 max-w-xl text-[14.5px] leading-relaxed text-[#111827] sm:text-[15px]">{supporting}</p>
      ) : null}
    </header>
  );
}
