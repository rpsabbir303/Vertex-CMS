import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { ROUTES } from "@/lib/marketing/navigation";
import { RESOURCE_TYPE_LABELS } from "@/lib/marketing/resources/content";
import {
  formatWebinarDate,
  getRelatedResourcesForWebinar,
  getWebinarDetailMeta,
  getWebinarRegistrationCta,
  getWebinarSessionDetailFields,
  webinarAudienceLabels,
  webinarStatusLabel,
  webinarTopicLabel,
} from "@/lib/marketing/resources/webinar";
import type { WebinarArticleRecord } from "@/lib/marketing/resources/types";

import { BlogDetailCtaSection } from "./blog-detail/BlogDetailCtaSection";
import {
  AxisContinuationMark,
  ResourceAbstractSystem,
  ResourceHeroAmbient,
  ResourceRelatedAmbient,
} from "./blog-detail/abstracts";
import { GuideRelatedAbstract } from "./guide-detail/GuideWorkflowVisuals";
import { ResourceTypeBadge } from "./ResourceTypeBadge";
import {
  WebinarCoversWorkflowAbstract,
  WebinarDetailGutterAbstract,
  WebinarHeroMetadataRow,
  WebinarHeroSessionPreview,
  WebinarOverviewContextAbstract,
  WebinarRegistrationFlowAbstract,
  WebinarSessionDetailsStrip,
  WebinarTakeawaysAbstract,
} from "./webinar-detail/WebinarDetailVisuals";

type Props = { webinar: WebinarArticleRecord };

function heroPrimaryCtaLabel(status: WebinarArticleRecord["webinarStatus"], fallback: string): string {
  if (status === "upcoming") return "Register for the webinar";
  return fallback;
}

/** Reusable Webinar Detail — `/resources/webinars/[slug]` */
export function WebinarDetailPage({ webinar }: Props) {
  const meta = getWebinarDetailMeta(webinar);
  const date = formatWebinarDate(webinar.publishedAt);
  const topic = webinarTopicLabel(webinar.topic);
  const status = webinarStatusLabel(webinar.webinarStatus);
  const sessionCta = getWebinarRegistrationCta(webinar.webinarStatus);
  const audience = webinarAudienceLabels(webinar.audience);
  const related = getRelatedResourcesForWebinar(webinar, 4);
  const detailFields = meta ? getWebinarSessionDetailFields(webinar, meta) : [];
  const showTakeaways = Boolean(meta && meta.keyTakeaways.length >= 2);

  return (
    <div className="relative overflow-x-hidden bg-[#F5F8FC] font-sans text-brand-navy">
      <ResourceAbstractSystem />

      <div className="relative z-[1]">
        <Breadcrumbs
          items={[
            { label: "Home", href: ROUTES.home },
            { label: "Resources", href: ROUTES.resources },
            { label: "Webinars", href: ROUTES.resourcesWebinars },
            { label: webinar.title },
          ]}
        />

        {/* HERO */}
        <section
          className="relative overflow-hidden border-b border-brand-line/60 bg-[#EEF4FA]/50"
          data-axis-stage="hero"
          data-resource-visual="webinar-hero"
        >
          <ResourceHeroAmbient />
          <div className="resource-detail-shell relative z-[1] py-8 sm:py-9 lg:py-10">
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(16rem,22rem)] lg:gap-10 xl:gap-14">
              <div className="min-w-0" data-design-layer="content">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">Webinar</p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
                  {topic} · {status}
                </p>
                <h1 className="mt-3 max-w-2xl font-display text-[1.85rem] font-bold leading-[1.08] tracking-tight text-brand-navy sm:text-[2.35rem] lg:text-[2.55rem]">
                  {webinar.title}
                </h1>
                <p className="mt-4 max-w-xl text-[15px] leading-[1.65] text-brand-muted sm:text-[15.5px]">
                  {webinar.description}
                </p>
                {meta ? (
                  <WebinarHeroMetadataRow
                    dateIso={webinar.publishedAt}
                    dateLabel={date}
                    availability={status}
                    formatKind={meta.formatKind}
                  />
                ) : null}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href={sessionCta.href} className="btn-primary inline-flex w-full sm:w-auto">
                    {heroPrimaryCtaLabel(webinar.webinarStatus, sessionCta.label)}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="#session-registration" className="btn-secondary inline-flex w-full sm:w-auto">
                    Session details
                  </a>
                </div>
              </div>
              {meta ? (
                <WebinarHeroSessionPreview variant={meta.heroVisual} className="justify-self-center lg:justify-self-end" />
              ) : null}
            </div>
          </div>
        </section>

        {meta ? (
          <>
            {/* SESSION OVERVIEW */}
            <section
              className="relative border-b border-brand-line/60 bg-white"
              aria-labelledby="webinar-overview-heading"
              data-resource-visual="webinar-overview"
            >
              <div className="resource-detail-shell py-8 sm:py-9 lg:py-10">
                <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(9rem,11rem)] lg:gap-12">
                  <div className="relative min-w-0" data-design-layer="content">
                    <WebinarDetailGutterAbstract />
                    <h2
                      id="webinar-overview-heading"
                      className="font-display text-[1.4rem] font-bold tracking-tight text-brand-navy sm:text-[1.55rem]"
                    >
                      Session overview
                    </h2>
                    <p className="mt-3 max-w-2xl text-[15px] leading-[1.72] text-brand-navy/92">{meta.overviewLead}</p>
                    {meta.overviewContext ? (
                      <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-brand-muted">{meta.overviewContext}</p>
                    ) : null}
                    <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-brand-muted">{meta.formatSummary}</p>
                  </div>
                  <WebinarOverviewContextAbstract className="mx-auto opacity-90 lg:mx-0 lg:pt-2" />
                </div>
              </div>
            </section>

            {/* SESSION DETAILS */}
            <section
              className="border-b border-brand-line/60 bg-[#F5F8FC]"
              aria-labelledby="webinar-details-heading"
              data-resource-visual="webinar-details"
            >
              <div className="resource-detail-shell py-8 sm:py-9 lg:py-10">
                <h2
                  id="webinar-details-heading"
                  className="font-display text-[1.4rem] font-bold tracking-tight text-brand-navy sm:text-[1.55rem]"
                >
                  Session details
                </h2>
                <div className="mt-5">
                  <WebinarSessionDetailsStrip fields={detailFields} dateIso={webinar.publishedAt} />
                </div>
              </div>
            </section>

            {/* WHAT THE SESSION COVERS */}
            <section
              className="relative border-b border-brand-line/60 bg-white"
              aria-labelledby="webinar-covers-heading"
              data-resource-visual="webinar-covers"
            >
              <div className="resource-detail-shell relative py-8 sm:py-9 lg:py-10">
                <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(8.5rem,10.5rem)] lg:gap-12">
                  <div data-design-layer="content">
                    <h2
                      id="webinar-covers-heading"
                      className="font-display text-[1.4rem] font-bold tracking-tight text-brand-navy sm:text-[1.55rem]"
                    >
                      What the session covers
                    </h2>
                    <ol className="mt-6 divide-y divide-brand-line/80 border border-brand-line/80 bg-[#FAFCFE]">
                      {meta.coverItems.map((item, index) => (
                        <li key={item.title} className="flex gap-4 px-4 py-5 sm:gap-5 sm:px-6 sm:py-6">
                          <span className="shrink-0 pt-0.5 text-[12px] font-semibold tabular-nums text-brand-orange">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div className="min-w-0 border-l-2 border-brand-blue/25 pl-4 sm:pl-5">
                            <p className="font-display text-[1.02rem] font-bold leading-snug text-brand-navy sm:text-[1.12rem]">
                              {item.title}
                            </p>
                            <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">{item.description}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <WebinarCoversWorkflowAbstract labels={meta.coverFlowLabels} className="mx-auto lg:mt-6 lg:opacity-95" />
                </div>
              </div>
            </section>

            {/* KEY TAKEAWAYS */}
            {showTakeaways ? (
              <section
                className="border-b border-brand-line/60 bg-[#F5F8FC]"
                aria-labelledby="webinar-takeaways-heading"
                data-resource-visual="webinar-takeaways"
              >
                <div className="resource-detail-shell py-8 sm:py-9 lg:py-10">
                  <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(9rem,11rem)] lg:gap-12">
                    <div data-design-layer="content">
                      <h2
                        id="webinar-takeaways-heading"
                        className="font-display text-[1.4rem] font-bold tracking-tight text-brand-navy sm:text-[1.55rem]"
                      >
                        Key takeaways
                      </h2>
                      <ol className="mt-6 space-y-4">
                        {meta.keyTakeaways.map((text, index) => (
                          <li key={`${index}-${text.slice(0, 24)}`} className="flex gap-4 sm:gap-5">
                            <span className="shrink-0 text-[12px] font-semibold tabular-nums text-brand-orange">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <p className="max-w-2xl text-[15px] leading-[1.65] text-brand-navy/90">{text}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <WebinarTakeawaysAbstract className="mx-auto hidden sm:block lg:mx-0" />
                  </div>
                </div>
              </section>
            ) : null}

            {/* WHO THIS IS FOR */}
            {audience.length > 0 ? (
              <section
                className="border-b border-brand-line/60 bg-white"
                aria-labelledby="webinar-audience-heading"
                data-resource-visual="webinar-audience"
              >
                <div className="resource-detail-shell py-8 sm:py-9 lg:py-10">
                  <h2
                    id="webinar-audience-heading"
                    className="font-display text-[1.4rem] font-bold tracking-tight text-brand-navy sm:text-[1.55rem]"
                  >
                    Who this is for
                  </h2>
                  <ul className="mt-6 divide-y divide-brand-line/80 border border-brand-line/80">
                    {audience.map((label, index) => (
                      <li
                        key={label}
                        className="flex items-center gap-4 bg-[#FAFCFE] px-4 py-4 sm:gap-6 sm:px-6 sm:py-5"
                        data-design-layer="content"
                      >
                        <span className="shrink-0 text-[12px] font-semibold tabular-nums text-brand-orange">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[1.05rem] font-bold text-brand-navy sm:text-[1.12rem]">{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ) : null}

            {/* REGISTRATION / JOIN CTA */}
            <section
              id="session-registration"
              className="scroll-mt-28 border-b border-brand-line/60 bg-[#EEF4FA]/40"
              aria-labelledby="webinar-register-heading"
              data-resource-visual="webinar-registration"
            >
              <div className="resource-detail-shell py-8 sm:py-9 lg:py-10">
                <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(10rem,12rem)] lg:gap-12">
                  <div data-design-layer="content">
                    <h2
                      id="webinar-register-heading"
                      className="font-display text-[1.5rem] font-bold tracking-tight text-brand-navy sm:text-[1.65rem]"
                    >
                      {webinar.webinarStatus === "upcoming"
                        ? "Ready to join the session?"
                        : webinar.webinarStatus === "on-demand"
                          ? "Ready to watch the session?"
                          : "Explore more sessions"}
                    </h2>
                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-brand-muted">{meta.formatSummary}</p>
                    <Link href={sessionCta.href} className="btn-primary mt-6 inline-flex w-full sm:w-auto">
                      {heroPrimaryCtaLabel(webinar.webinarStatus, sessionCta.label)}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href={ROUTES.resourcesWebinars}
                      className="mt-4 inline-flex text-[13px] font-semibold text-brand-blue hover:underline"
                    >
                      ← Back to Webinars
                    </Link>
                  </div>
                  <WebinarRegistrationFlowAbstract className="mx-auto hidden opacity-90 sm:block lg:mx-0" />
                </div>
              </div>
            </section>
          </>
        ) : null}

        {/* RELATED */}
        {related.length > 0 ? (
          <section
            className="relative border-b border-brand-line/60 bg-white"
            aria-labelledby="webinar-related-heading"
            data-resource-visual="webinar-related"
          >
            <div className="resource-detail-shell relative py-8 sm:py-9 lg:py-10">
              <ResourceRelatedAmbient />
              <div className="relative z-[1] grid gap-6 lg:grid-cols-[minmax(11rem,14rem)_minmax(0,1fr)_minmax(9rem,11rem)] lg:items-start lg:gap-8">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Continue</p>
                  <h2
                    id="webinar-related-heading"
                    className="mt-1.5 font-display text-[1.4rem] font-bold tracking-tight text-brand-navy sm:text-[1.55rem]"
                  >
                    Related resources
                  </h2>
                </div>
                <ul className="divide-y divide-brand-line border border-brand-line bg-[#FAFCFE]" data-design-layer="content">
                  {related.map((item, index) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="group flex items-start gap-3 px-3.5 py-3.5 transition hover:bg-[#F7FAFD] sm:px-4 sm:py-4"
                      >
                        <span className="mt-0.5 shrink-0 text-[11px] font-semibold tabular-nums text-brand-orange">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <ResourceTypeBadge type={item.type} />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-muted">
                              {RESOURCE_TYPE_LABELS[item.type]}
                            </span>
                          </div>
                          <p className="mt-1 font-display text-[0.98rem] font-bold leading-snug text-brand-navy group-hover:text-brand-blue sm:text-[1.05rem]">
                            {item.title}
                          </p>
                          <p className="mt-0.5 line-clamp-2 text-[13px] text-brand-muted">{item.description}</p>
                        </div>
                        <ArrowRight className="hidden h-3 w-3 shrink-0 text-brand-blue sm:block" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <GuideRelatedAbstract className="mx-auto hidden lg:mx-0 lg:mt-2 lg:block" />
              </div>
            </div>
            <AxisContinuationMark stage="related-exit" className="opacity-60" />
          </section>
        ) : null}

        <BlogDetailCtaSection />
      </div>
    </div>
  );
}
