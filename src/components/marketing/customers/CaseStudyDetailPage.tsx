import Link from "next/link";
import type { ReactNode } from "react";

import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import {
  getMetricsForCustomer,
  getRelatedCaseStudies,
  getTestimonialForCustomer,
} from "@/lib/marketing/customers/catalog";
import {
  CASE_STUDY_LIMITED_NOTES,
  CUSTOMERS_IN_PAGE_LINKS,
  CUSTOMERS_SECTIONS,
  customersSectionHref,
} from "@/lib/marketing/customers/content";
import type { CaseStudyRecord } from "@/lib/marketing/customers/types";
import { CTAS, ROUTES } from "@/lib/marketing/navigation";

import { CaseStudyCard } from "./CaseStudyCard";
import { CaseStudyCoverImage } from "./CaseStudyCoverImage";
import { CustomerTestimonialQuote } from "./CustomerTestimonialQuote";
import { CustomersFinalCta } from "./CustomersFinalCta";
import { CustomersProofCompactNote } from "./CustomersProofCompactNote";
import { CaseStudyDetailBackdrop } from "./visuals/CaseStudyDetailBackdrop";
import type { CaseStudyBackdropVariant } from "./visuals/CaseStudyDetailBackdrop";
import { CaseStudyChallengeDiagram } from "./visuals/CaseStudyChallengeDiagram";
import { CaseStudyNarrativeStrip } from "./visuals/CaseStudyNarrativeStrip";
import { CaseStudyResultHighlight } from "./visuals/CaseStudyResultHighlight";
import { CaseStudyWorkflowDiagram } from "./visuals/CaseStudyWorkflowDiagram";

type Props = {
  study: CaseStudyRecord;
};

export function CaseStudyDetailPage({ study }: Props) {
  const segment = [study.contractorType, study.projectType].filter(Boolean).join(" · ");
  const quote = getTestimonialForCustomer(study.customerName);
  const metrics = getMetricsForCustomer(study.customerName);
  const related = getRelatedCaseStudies(study.slug, 3);
  const backHref = `${ROUTES.customers}${customersSectionHref(CUSTOMERS_SECTIONS.caseStudies)}`;

  return (
    <div className="customers-page-canvas">
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Customers", href: ROUTES.customers },
          { label: "Case Studies", href: backHref },
          { label: study.customerName },
        ]}
      />

      <Link
        href={backHref}
        className="cust-shell relative z-[1] mt-2 inline-flex text-[13px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
      >
        ← Back to Case Studies
      </Link>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-brand-line bg-white py-7 sm:py-9 lg:py-10">
        <CaseStudyDetailBackdrop variant="hero" />
        <div className="cust-shell relative z-[1]">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-start lg:gap-8">
            <div className="min-w-0">
              <p className="cust-eyebrow">Case study</p>
              <h1 className="cust-display mt-3 text-[1.95rem] leading-[1.12] sm:text-[2.45rem]">{study.headline}</h1>
              <p className="mt-3 text-[14px] font-semibold text-brand-navy">{study.customerName}</p>
              <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-muted">{segment}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-muted">{study.summary}</p>
              {study.outcome ? (
                <p className="mt-3 border-l-2 border-brand-orange pl-3 text-[13px] font-medium leading-snug text-brand-navy">
                  {study.outcome}
                </p>
              ) : null}
              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <Link href={CTAS.demo.href} className="btn-primary w-full sm:w-auto">
                  {CTAS.demo.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={CTAS.trial.href} className="btn-secondary w-full sm:w-auto">
                  {CTAS.trial.label}
                </Link>
              </div>
            </div>
            <div className="min-w-0 space-y-3">
              <CaseStudyCoverImage
                study={study}
                priority
                aspectClassName="aspect-video min-h-[220px] sm:min-h-[240px] lg:min-h-[280px]"
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="rounded-lg border border-brand-line"
              />
              {study.workflowSteps && study.workflowSteps.length > 0 ? (
                <CaseStudyWorkflowDiagram steps={study.workflowSteps} size="compact" />
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {study.customerContext ? (
        <DetailSection id="customer-context" variant="context" surface="muted" density="compact">
          <CustomerContextBlock
            body={study.customerContext}
            meta={[
              { label: "Contractor type", value: study.contractorType },
              study.projectType ? { label: "Project type", value: study.projectType } : null,
            ].filter(Boolean) as { label: string; value: string }[]}
          />
        </DetailSection>
      ) : null}

      {study.challenge ? (
        <DetailSection id="challenge" variant="challenge" surface="white">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.42fr)] lg:items-center lg:gap-10">
            <div>
              <p className="cust-eyebrow">The challenge</p>
              <h2 className="cust-display mt-2 text-xl sm:text-[1.85rem]">Where workflows disconnected</h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-brand-navy sm:text-[16px]">
                {study.challenge}
              </p>
            </div>
            <CaseStudyChallengeDiagram className="w-full" />
          </div>
        </DetailSection>
      ) : null}

      {study.approach ? (
        <DetailSection id="approach" variant="approach" surface="muted">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.46fr)] lg:items-start lg:gap-10">
            <div>
              <p className="cust-eyebrow">The Vertex CMS approach</p>
              <h2 className="cust-display mt-2 max-w-2xl text-xl sm:text-[1.85rem]">Connected workflow on Vertex CMS</h2>
              <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-brand-muted">{study.approach}</p>
            </div>
            {study.workflowSteps && study.workflowSteps.length > 0 ? (
              <CaseStudyWorkflowDiagram steps={study.workflowSteps} size="large" className="w-full lg:sticky lg:top-24" />
            ) : null}
          </div>
        </DetailSection>
      ) : null}

      {study.capabilities && study.capabilities.length > 0 ? (
        <DetailSection id="capabilities" variant="capabilities" surface="white" density="compact">
          <p className="cust-eyebrow">Capabilities used</p>
          <h2 className="cust-display mt-2 text-xl sm:text-[1.75rem]">Workflow capabilities in this story</h2>
          <ul className="mt-5 divide-y divide-brand-line border-y border-brand-line">
            {study.capabilities.map((cap) => (
              <li key={cap.name} className="grid gap-2 py-3.5 sm:grid-cols-[minmax(0,0.28fr)_minmax(0,1fr)] sm:gap-8">
                <div>
                  {cap.href ? (
                    <Link
                      href={cap.href}
                      className="text-[14px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                    >
                      {cap.name}
                    </Link>
                  ) : (
                    <p className="text-[14px] font-semibold text-brand-navy">{cap.name}</p>
                  )}
                </div>
                <p className="text-[14px] leading-relaxed text-brand-muted">{cap.context}</p>
              </li>
            ))}
          </ul>
        </DetailSection>
      ) : null}

      <DetailSection id="results" variant="results" surface="muted">
        <p className="cust-eyebrow">{metrics.length > 0 ? "Measurable results" : "Validated outcomes"}</p>
        <h2 className="cust-display mt-2 text-xl sm:text-[1.75rem]">
          {metrics.length > 0 ? "Documented outcomes" : "Results"}
        </h2>
        <div className="mt-5">
          {metrics.length > 0 ? (
            <CaseStudyResultHighlight metrics={metrics} />
          ) : study.outcome ? (
            <p className="max-w-2xl border-l-2 border-brand-orange pl-4 text-[15px] font-medium leading-relaxed text-brand-navy">
              {study.outcome}
            </p>
          ) : (
            <CustomersProofCompactNote message={CASE_STUDY_LIMITED_NOTES.outcomes} />
          )}
        </div>
      </DetailSection>

      {quote ? (
        <DetailSection id="quote" variant="quote" surface="white" backdrop={false}>
          <p className="cust-eyebrow">Customer voice</p>
          <div className="mt-5 max-w-3xl">
            <CustomerTestimonialQuote testimonial={quote} size="featured" />
          </div>
        </DetailSection>
      ) : null}

      {study.narrativeStages && study.narrativeStages.length > 0 ? (
        <DetailSection id="story-flow" variant="context" surface="muted" density="compact">
          <p className="cust-eyebrow">The story at a glance</p>
          <h2 className="cust-display mt-2 text-xl sm:text-[1.75rem]">Narrative flow</h2>
          <CaseStudyNarrativeStrip stages={study.narrativeStages} />
        </DetailSection>
      ) : null}

      {study.exploreLinks && study.exploreLinks.length > 0 ? (
        <DetailSection id="explore-workflow" variant="explore" surface="white" density="compact">
          <p className="cust-eyebrow">Explore the workflow</p>
          <h2 className="cust-display mt-2 text-xl sm:text-[1.75rem]">Relevant features & solutions</h2>
          <ul className="mt-4 space-y-2.5">
            {study.exploreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                >
                  {link.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </DetailSection>
      ) : null}

      <CustomersFinalCta />

      {related.length > 0 ? (
        <DetailSection id="related" variant="related" surface="muted">
          <h2 className="cust-display text-xl sm:text-[1.75rem]">More customer stories</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <CaseStudyCard key={item.slug} study={item} variant="tile" visualIndex={index + 2} />
            ))}
          </div>
        </DetailSection>
      ) : null}

      <div className="cust-shell relative z-[1] border-t border-brand-line bg-white py-6">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
        >
          ← Back to Case Studies
        </Link>
        <Link
          href={CUSTOMERS_IN_PAGE_LINKS.exploreCaseStudies.href}
          className="ml-6 inline-flex items-center gap-2 text-[13px] font-semibold text-brand-muted hover:text-brand-blue"
        >
          {CUSTOMERS_IN_PAGE_LINKS.exploreCaseStudies.label}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

function DetailSection({
  id,
  variant,
  surface,
  density = "default",
  backdrop = true,
  children,
}: {
  id: string;
  variant: CaseStudyBackdropVariant;
  surface: "white" | "muted";
  density?: "default" | "compact";
  backdrop?: boolean;
  children: ReactNode;
}) {
  const bg = surface === "muted" ? "bg-[#F5F8FC]" : "bg-white";
  const py = density === "compact" ? "py-7 sm:py-8" : "py-8 sm:py-10";
  return (
    <section id={id} className={`relative overflow-hidden border-b border-brand-line ${bg} ${py}`}>
      {backdrop ? <CaseStudyDetailBackdrop variant={variant} /> : null}
      <div className="cust-shell relative z-[1]">{children}</div>
    </section>
  );
}

function CustomerContextBlock({
  body,
  meta,
}: {
  body: string;
  meta: { label: string; value: string }[];
}) {
  return (
    <div>
      <p className="cust-eyebrow">About the customer</p>
      <h2 className="cust-display mt-2 text-lg sm:text-xl">Customer context</h2>
      {meta.length > 0 ? (
        <dl className="mt-4 flex flex-col gap-3 border-y border-brand-line py-4 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-3">
          {meta.map((row) => (
            <div key={row.label} className="min-w-0 sm:max-w-[240px]">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">{row.label}</dt>
              <dd className="mt-0.5 text-[14px] font-medium text-brand-navy">{row.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-brand-muted">{body}</p>
    </div>
  );
}
