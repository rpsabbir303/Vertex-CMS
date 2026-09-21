import type { TemplateListingSection } from "@/lib/marketing/resources/template";
import type { ResourceTopic } from "@/lib/marketing/resources/types";

import {
  TemplateFieldOpsAbstract,
  TemplateProjectOpsAbstract,
} from "./TemplateSectionAbstracts";
import { TemplateResourceRow } from "./TemplateResourceRow";

type Props = { section: TemplateListingSection };

function SectionAbstract({ topic }: { topic: ResourceTopic }) {
  if (topic === "field-operations") return <TemplateFieldOpsAbstract className="mx-auto w-full max-w-[15rem] lg:max-w-none" />;
  if (topic === "project-management") return <TemplateProjectOpsAbstract className="mx-auto w-full max-w-[15rem] lg:max-w-none" />;
  return null;
}

export function TemplateCategorySection({ section }: Props) {
  const visualLeft = section.layout === "visual-text-right";
  const headingId = `${section.sectionAnchorId}-heading`;
  const single = section.templates.length === 1;
  const bg =
    section.topic === "field-operations" ? "bg-[#EEF4FA]/45" : section.topic === "project-management" ? "bg-white/75" : "bg-[#F5F8FC]";

  return (
    <section
      id={section.sectionAnchorId}
      className={`relative scroll-mt-28 border-t border-brand-line/50 ${bg}`}
      aria-labelledby={headingId}
      data-design-layer="TemplateCategorySection"
    >
      <div className="py-10 sm:py-11 lg:py-12">
        {visualLeft ? (
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:gap-12">
            <div className="hidden lg:block">
              <SectionAbstract topic={section.topic} />
            </div>
            <div className="min-w-0">
              <header data-design-layer="content">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{section.eyebrow}</p>
                <h3 id={headingId} className="mt-2 font-display text-[1.3rem] font-bold tracking-tight text-brand-navy sm:text-[1.5rem]">
                  {section.heading}
                </h3>
                <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-brand-muted">{section.supporting}</p>
              </header>
              <div className="mt-6 lg:hidden">
                <SectionAbstract topic={section.topic} />
              </div>
              <div className="mt-6">
                {single ? (
                  <TemplateResourceRow template={section.templates[0]!} index={1} variant="spotlight" showCategory={false} />
                ) : (
                  <ul className="divide-y divide-brand-line border border-brand-line bg-white">
                    {section.templates.map((t, i) => (
                      <li key={t.id}>
                        <TemplateResourceRow template={t} index={i + 1} variant="row" showCategory={false} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.66fr)_minmax(0,0.3fr)] lg:gap-12">
            <div className="min-w-0">
              <header data-design-layer="content">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{section.eyebrow}</p>
                <h3 id={headingId} className="mt-2 font-display text-[1.3rem] font-bold tracking-tight text-brand-navy sm:text-[1.5rem]">
                  {section.heading}
                </h3>
                <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-brand-muted">{section.supporting}</p>
              </header>
              <div className="mt-6">
                {single ? (
                  <TemplateResourceRow template={section.templates[0]!} index={1} variant="spotlight" showCategory={false} />
                ) : (
                  <ul className="divide-y divide-brand-line border border-brand-line bg-white">
                    {section.templates.map((t, i) => (
                      <li key={t.id}>
                        <TemplateResourceRow template={t} index={i + 1} variant="row" showCategory={false} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="hidden lg:flex lg:justify-end lg:pt-6">
              <SectionAbstract topic={section.topic} />
            </div>
            <div className="lg:hidden">
              <SectionAbstract topic={section.topic} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
