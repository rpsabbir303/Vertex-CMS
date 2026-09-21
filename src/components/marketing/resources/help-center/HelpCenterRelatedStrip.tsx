import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { ROUTES } from "@/lib/marketing/navigation";
import { RESOURCE_TYPE_LABELS } from "@/lib/marketing/resources/content";

const ITEMS = [
  {
    type: RESOURCE_TYPE_LABELS.blog,
    description: "Editorial insights on field, project, and financial workflows.",
    href: ROUTES.resourcesBlog,
  },
  {
    type: RESOURCE_TYPE_LABELS.guide,
    description: "Practical workflow guidance for construction teams.",
    href: ROUTES.resourcesGuides,
  },
  {
    type: RESOURCE_TYPE_LABELS.template,
    description: "Downloadable worksheets and checklists.",
    href: ROUTES.resourcesTemplates,
  },
  {
    type: RESOURCE_TYPE_LABELS.webinar,
    description: "Live and on-demand product sessions.",
    href: ROUTES.resourcesWebinars,
  },
] as const;

export function HelpCenterRelatedStrip() {
  return (
    <section className="border-b border-brand-line/60 bg-[#F4F7FB]" aria-labelledby="help-related-resources-heading">
      <div className="resource-detail-shell py-8 sm:py-9">
        <h2 id="help-related-resources-heading" className="font-display text-[1.25rem] font-bold text-brand-navy sm:text-[1.35rem]">
          Related resources
        </h2>
        <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-brand-muted">
          Marketing resources outside product documentation — for workflow ideas, templates, and sessions.
        </p>
        <ul className="mt-5 divide-y divide-brand-line border-y border-brand-line/80" data-design-layer="content">
          {ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex items-start justify-between gap-4 py-4 transition hover:bg-white/60 sm:py-4"
              >
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">{item.type}</p>
                  <p className="mt-1 font-display text-[1rem] font-bold text-brand-navy">{item.type}</p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-brand-muted">{item.description}</p>
                </div>
                <ArrowRight className="mt-2 h-3.5 w-3.5 shrink-0 text-brand-blue" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
