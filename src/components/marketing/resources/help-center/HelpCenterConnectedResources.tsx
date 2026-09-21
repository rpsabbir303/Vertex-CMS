import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { ROUTES } from "@/lib/marketing/navigation";
import { RESOURCE_TYPE_LABELS } from "@/lib/marketing/resources/content";

import { GuideRelatedAbstract } from "../guide-detail/GuideWorkflowVisuals";

const CONNECTIONS = [
  {
    label: RESOURCE_TYPE_LABELS.blog,
    description: "Editorial insights on field, project, and financial workflows.",
    href: ROUTES.resourcesBlog,
  },
  {
    label: RESOURCE_TYPE_LABELS.guide,
    description: "Practical workflow guidance.",
    href: ROUTES.resourcesGuides,
  },
  {
    label: RESOURCE_TYPE_LABELS.template,
    description: "Downloadable worksheets and checklists.",
    href: ROUTES.resourcesTemplates,
  },
  {
    label: RESOURCE_TYPE_LABELS.webinar,
    description: "Live and on-demand product sessions.",
    href: ROUTES.resourcesWebinars,
  },
];

export function HelpCenterConnectedResources() {
  return (
    <section
      className="relative border-b border-brand-line/60 bg-[#F5F8FC]"
      aria-labelledby="help-connected-resources-heading"
      data-resource-visual="help-connected"
    >
      <HelpCenterSectionAmbient />
      <div className="resource-detail-shell relative z-[1] py-8 sm:py-10 lg:py-11">
        <div className="grid gap-8 lg:grid-cols-[minmax(9rem,11rem)_minmax(0,1fr)] lg:items-start lg:gap-10">
          <GuideRelatedAbstract className="mx-auto lg:mx-0" />
          <div data-design-layer="content">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Connected resources</p>
            <h2
              id="help-connected-resources-heading"
              className="mt-1.5 font-display text-[1.35rem] font-bold tracking-tight text-brand-navy sm:text-[1.5rem]"
            >
              Part of the VertexBuild Resources system
            </h2>
            <ul className="mt-6 divide-y divide-brand-line border border-brand-line bg-white">
              {CONNECTIONS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-start justify-between gap-4 px-4 py-4 transition hover:bg-[#F7FAFD] sm:px-5 sm:py-4"
                  >
                    <div className="min-w-0">
                      <p className="font-display text-[1rem] font-bold text-brand-navy group-hover:text-brand-blue sm:text-[1.05rem]">
                        {item.label}
                      </p>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-brand-muted">{item.description}</p>
                    </div>
                    <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-blue" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function HelpCenterSectionAmbient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" data-abstract="connected" aria-hidden="true">
      <svg className="absolute right-8 top-12 hidden h-24 w-20 opacity-20 lg:block" viewBox="0 0 80 96" fill="none">
        <path d="M40 8 V88 M8 48 H72" stroke="#3B6F9A" strokeWidth="1" opacity="0.35" />
        <circle cx="40" cy="48" r="3" fill="#FF6A00" opacity="0.75" />
      </svg>
    </div>
  );
}
