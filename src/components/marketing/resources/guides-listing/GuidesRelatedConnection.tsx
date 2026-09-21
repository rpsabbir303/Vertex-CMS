import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { ROUTES } from "@/lib/marketing/navigation";
import { RESOURCE_TYPE_LABELS } from "@/lib/marketing/resources/content";

import { GUIDE_LISTING_PAGE_ANCHORS } from "@/lib/marketing/resources/guide";

import { GuideRelatedAbstract } from "../guide-detail/GuideWorkflowVisuals";

const CONNECTIONS = [
  {
    type: "blog" as const,
    label: RESOURCE_TYPE_LABELS.blog,
    description: "Editorial insights on field, project, and financial workflows.",
    href: ROUTES.resourcesBlog,
  },
  {
    type: "template" as const,
    label: RESOURCE_TYPE_LABELS.template,
    description: "Downloadable worksheets and checklists for active jobs.",
    href: ROUTES.resourcesTemplates,
  },
  {
    type: "webinar" as const,
    label: RESOURCE_TYPE_LABELS.webinar,
    description: "Live and on-demand sessions with product and operations leaders.",
    href: ROUTES.resourcesWebinars,
  },
];

/** Links guides to the broader VertexBuild resource ecosystem. */
export function GuidesRelatedConnection() {
  return (
    <section
      id={GUIDE_LISTING_PAGE_ANCHORS.connectedResources}
      className="relative scroll-mt-28 border-b border-brand-line/60 bg-white/60"
      aria-labelledby="guides-related-heading"
    >
      <div className="resource-detail-shell relative z-[1] py-8 sm:py-9 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(9rem,11rem)_minmax(0,1fr)] lg:items-start lg:gap-10">
          <GuideRelatedAbstract className="mx-auto lg:mx-0" />
          <div data-design-layer="content">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Connected resources</p>
            <h2 id="guides-related-heading" className="mt-1.5 font-display text-[1.35rem] font-bold tracking-tight text-brand-navy sm:text-[1.5rem]">
              Part of the VertexBuild Resources system
            </h2>
            <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-brand-muted">
              Guides sit alongside blog articles, templates, and webinars — one VertexBuild knowledge system for construction
              operations.
            </p>
            <ul className="mt-6 divide-y divide-brand-line border border-brand-line bg-white">
              {CONNECTIONS.map((item) => (
                <li key={item.type}>
                  <Link
                    href={item.href}
                    className="group flex items-start justify-between gap-4 px-4 py-3.5 transition hover:bg-[#F7FAFD] sm:px-5 sm:py-4"
                  >
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">{item.label}</p>
                      <p className="mt-1 text-[14px] leading-relaxed text-brand-navy/90">{item.description}</p>
                    </div>
                    <span className="flex shrink-0 items-center gap-1 text-[12px] font-semibold text-brand-blue transition group-hover:translate-x-0.5">
                      Explore
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              <Link href={ROUTES.resources} className="text-[13px] font-semibold text-brand-blue hover:underline">
                ← Back to Resource Hub
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
