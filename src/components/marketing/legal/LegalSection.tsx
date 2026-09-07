import type { LegalSection } from "@/lib/marketing/legal/content";

type Props = {
  section: LegalSection;
};

export function LegalSection({ section }: Props) {
  return (
    <section
      id={section.id}
      className="scroll-mt-28 border-b border-brand-line/70 py-10 last:border-b-0"
    >
      <h2 className="font-display text-xl font-bold tracking-tight text-brand-navy sm:text-[1.35rem]">
        {section.title}
      </h2>
      {section.placeholder ? (
        <p className="mt-3 inline-flex rounded-sm border border-dashed border-brand-line bg-[#FAFBFD] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
          Editable legal placeholder
        </p>
      ) : null}
      <div className="mt-5 space-y-4 text-[15px] leading-[1.8] text-brand-navy/85">
        {section.body.map((paragraph, index) => {
          const isPlaceholder =
            paragraph.startsWith("[") &&
            (paragraph.includes("to be provided") || paragraph.includes("Legal section"));
          return (
            <p
              key={`${section.id}-${index}`}
              className={
                isPlaceholder
                  ? "rounded-lg border border-dashed border-brand-line bg-[#FAFBFD] px-4 py-3 font-medium italic text-brand-muted"
                  : undefined
              }
            >
              {paragraph}
            </p>
          );
        })}
      </div>
    </section>
  );
}

/** @deprecated Use LegalSection — kept for existing imports */
export const LegalSectionBlock = LegalSection;
