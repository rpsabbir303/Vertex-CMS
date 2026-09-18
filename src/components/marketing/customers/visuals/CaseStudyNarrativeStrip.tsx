import type { CaseStudyNarrativeStage } from "@/lib/marketing/customers/types";

type Props = {
  stages: CaseStudyNarrativeStage[];
};

/** Compact horizontal narrative — not four large cards. */
export function CaseStudyNarrativeStrip({ stages }: Props) {
  return (
    <ol className="mt-5 flex flex-col gap-0 border-t border-brand-line sm:flex-row sm:divide-x sm:divide-brand-line">
      {stages.map((stage, index) => (
        <li key={stage.step} className="relative min-w-0 flex-1 py-4 sm:px-4 sm:py-3 first:sm:pl-0 last:sm:pr-0">
          {index < stages.length - 1 ? (
            <span
              className="absolute right-0 top-1/2 hidden h-px w-3 -translate-y-1/2 bg-brand-line sm:block lg:hidden"
              aria-hidden="true"
            />
          ) : null}
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{stage.step}</p>
          <p className="mt-1 text-[13px] font-semibold text-brand-navy">{stage.title}</p>
          <p className="mt-1 line-clamp-3 text-[12px] leading-relaxed text-brand-muted">{stage.description}</p>
        </li>
      ))}
    </ol>
  );
}
