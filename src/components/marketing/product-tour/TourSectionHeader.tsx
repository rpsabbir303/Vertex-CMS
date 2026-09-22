type Props = {
  navIndex: number;
  eyebrow: string;
  title: string;
  intro: string;
  headingId: string;
};

export function TourSectionHeader({ navIndex, eyebrow, title, intro, headingId }: Props) {
  return (
    <header className="max-w-3xl" data-design-layer="content">
      <p className="text-[11px] font-semibold tabular-nums text-brand-orange">{String(navIndex).padStart(2, "0")}</p>
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/70">{eyebrow}</p>
      <h2 id={headingId} className="mt-2 font-display text-[1.55rem] font-bold text-black sm:text-[1.85rem] lg:text-[2rem]">
        {title}
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-[#111827] sm:text-[15.5px]">{intro}</p>
    </header>
  );
}
