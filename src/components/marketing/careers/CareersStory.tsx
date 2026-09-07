import { Reveal } from "@/components/Reveal";
import { careersStory } from "@/lib/marketing/careers/content";

export function CareersStory() {
  if (!careersStory.enabled) return null;

  const statement = careersStory.statement ?? careersStory.statementPlaceholder;
  const supporting = careersStory.supporting ?? careersStory.supportingPlaceholder;
  const statementPlaceholder = careersStory.statement === null;
  const supportingPlaceholder = careersStory.supporting === null;

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:items-start">
          <Reveal>
            <p className="eyebrow">Company</p>
            <h2
              className={`mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${
                statementPlaceholder
                  ? "rounded-lg border border-dashed border-brand-line bg-[#FAFBFD] px-4 py-5 italic text-brand-muted"
                  : "text-brand-navy"
              }`}
            >
              {statement}
            </h2>
          </Reveal>
          <Reveal delay={70}>
            <p
              className={`text-[15px] leading-relaxed sm:text-base ${
                supportingPlaceholder
                  ? "rounded-lg border border-dashed border-brand-line bg-[#FAFBFD] px-4 py-3 italic text-brand-muted"
                  : "text-brand-muted"
              }`}
            >
              {supporting}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
