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
  WebinarFormatAbstract,
  WebinarHeroSessionPreview,
  WebinarOverviewContextAbstract,
  WebinarRegistrationFlowAbstract,
} from "./webinar-detail/WebinarDetailVisuals";

type Props = { webinar: WebinarArticleRecord };

/** Reusable Webinar Detail — `/resources/webinars/[slug]` */
export function WebinarDetailPage({ webinar }: Props) {
  const meta = getWebinarDetailMeta(webinar);
  const date = formatWebinarDate(webinar.publishedAt);
  const topic = webinarTopicLabel(webinar.topic);
  const status = webinarStatusLabel(webinar.webinarStatus);
  const sessionCta = getWebinarRegistrationCta(webinar.webinarStatus);
  const audience = webinarAudienceLabels(webinar.audience);
  const related = getRelatedResourcesForWebinar(webinar, 4);

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
        <section className="relative overflow-hidden border-b border-brand-line/60 bg-[#EEF4FA]/40" data-axis-stage="hero">
          <ResourceHeroAmbient />
          <div className="resource-detail-shell relative z-[1] py-7 sm:py-8 lg:py-9">
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,22rem)] lg:gap-10 xl:gap-12">
              <div className="min-w-0" data-design-layer="content">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Webinar</p>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
                  {topic} · {status}
                </p>
                <h1 className="mt-2 max-w-2xl font-display text-[1.75rem] font-bold leading-[1.1] tracking-tight text-brand-navy sm:text-[2.25rem] lg:text-[2.45rem]">
                  {webinar.title}
                </h1>
                <p className="mt-3 max-w-xl text-[15px] leading-[1.65] text-brand-muted">{webinar.description}</p>
                <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-[12.5px] text-brand-muted">
                  {date ? (
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-muted/80">Date</dt>
                      <dd className="mt-0.5 font-medium text-brand-navy">
                        <time dateTime={webinar.publishedAt}>{date}</time>
                      </dd>
                    </div>
                  ) : null}
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-muted/80">Availability</dt>
                    <dd className="mt-0.5 font-medium text-brand-navy">{status}</dd>
                  </div>
                  {meta ? (
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-muted/80">Format</dt>
                      <dd className="mt-0.5 font-medium text-brand-navy">{meta.formatKind}</dd>
                    </div>
                  ) : null}
                </dl>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href={sessionCta.href} className="btn-primary inline-flex w-full sm:w-auto">
                    {sessionCta.label}
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
            <section className="border-b border-brand-line/60 bg-white" aria-labelledby="webinar-overview-heading">
              <div className="resource-detail-shell py-7 sm:py-8 lg:py-9">
                <div className="resource-detail-main-grid relative items-start">
                  <WebinarDetailGutterAbstract />
                  <div data-design-layer="content">
                    <h2
                      id="webinar-overview-heading"
                      className="font-display text-[1.35rem] font-bold tracking-tight text-brand-navy sm:text-[1.5rem]"
                    >
                      Session overview
                    </h2>
                    <p className="mt-3 max-w-2xl text-[15px] leading-[1.7] text-brand-navy/90">{meta.overviewLead}</p>
                    {meta.overviewContext ? (
                      <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-brand-muted">{meta.overviewContext}</p>
                    ) : null}
                  </div>
                  <WebinarOverviewContextAbstract className="mx-auto hidden sm:block lg:mx-0" />
                </div>
              </div>
            </section>

            {/* WHAT THE SESSION COVERS */}
            <section className="relative border-b border-brand-line/60 bg-[#F5F8FC]" aria-labelledby="webinar-covers-heading">
              <div className="resource-detail-shell relative py-7 sm:py-8 lg:py-9">
                <div className="resource-detail-main-grid relative z-[1] items-start">
                  <div data-design-layer="content">
                    <h2
                      id="webinar-covers-heading"
                      className="font-display text-[1.35rem] font-bold tracking-tight text-brand-navy sm:text-[1.5rem]"
                    >
                      What the session covers
                    </h2>
                    <ol className="mt-6 space-y-0 border border-brand-line/80 bg-white">
                      {meta.coverItems.map((item, index) => (
                        <li
                          key={item.title}
                          className="flex gap-4 border-b border-brand-line/70 px-4 py-4 last:border-b-0 sm:px-5 sm:py-5"
                        >
                          <span className="shrink-0 text-[11px] font-semibold tabular-nums text-brand-orange">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div className="min-w-0">
                            <p className="font-display text-[1rem] font-bold text-brand-navy sm:text-[1.05rem]">{item.title}</p>
                            <p className="mt-1.5 text-[14px] leading-relaxed text-brand-muted">{item.description}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <WebinarCoversWorkflowAbstract labels={meta.coverFlowLabels} className="mx-auto lg:mt-4" />
                </div>
              </div>
            </section>

            {/* SESSION FORMAT */}
            <section className="border-b border-brand-line/60 bg-white" aria-labelledby="webinar-format-heading">
              <div className="resource-detail-shell py-7 sm:py-8 lg:py-9">
                <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.38fr)] lg:gap-12">
                  <div data-design-layer="content">
                    <h2
                      id="webinar-format-heading"
                      className="font-display text-[1.35rem] font-bold tracking-tight text-brand-navy sm:text-[1.5rem]"
                    >
                      Session format
                    </h2>
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-blue">{meta.formatKind}</p>
                    <p className="mt-3 max-w-xl text-[15px] leading-[1.7] text-brand-navy/90">{meta.formatSummary}</p>
                  </div>
                  <WebinarFormatAbstract kind={meta.formatKind} className="mx-auto lg:mx-0" />
                </div>
              </div>
            </section>

            {/* WHO THIS IS FOR */}
            {audience.length > 0 ? (
              <section className="border-b border-brand-line/60 bg-[#F5F8FC]" aria-labelledby="webinar-audience-heading">
                <div className="resource-detail-shell py-7 sm:py-8 lg:py-9">
                  <h2
                    id="webinar-audience-heading"
                    className="font-display text-[1.35rem] font-bold tracking-tight text-brand-navy sm:text-[1.5rem]"
                  >
                    Who this is for
                  </h2>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {audience.map((label, index) => (
                      <li
                        key={label}
                        className="flex items-start gap-3 border border-brand-line/80 bg-white px-4 py-3.5"
                        data-design-layer="content"
                      >
                        <span className="text-[11px] font-semibold tabular-nums text-brand-orange">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[14px] font-medium text-brand-navy">{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ) : null}

            {/* REGISTRATION / WATCH CTA */}
            <section
              id="session-registration"
              className="scroll-mt-28 border-b border-brand-line/60 bg-white"
              aria-labelledby="webinar-register-heading"
            >
              <div className="resource-detail-shell py-7 sm:py-8 lg:py-9">
                <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(10rem,12rem)] lg:gap-10">
                  <div data-design-layer="content">
                    <h2
                      id="webinar-register-heading"
                      className="font-display text-[1.35rem] font-bold tracking-tight text-brand-navy sm:text-[1.5rem]"
                    >
                      {webinar.webinarStatus === "upcoming"
                        ? "Ready to join the session?"
                        : webinar.webinarStatus === "on-demand"
                          ? "Ready to watch the session?"
                          : "Explore more sessions"}
                    </h2>
                    <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-brand-muted">{meta.formatSummary}</p>
                    <Link href={sessionCta.href} className="btn-primary mt-5 inline-flex w-full sm:w-auto">
                      {webinar.webinarStatus === "upcoming" ? "Register for the webinar" : sessionCta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href={ROUTES.resourcesWebinars}
                      className="mt-4 block text-[13px] font-semibold text-brand-blue hover:underline"
                    >
                      ← Back to Webinars
                    </Link>
                  </div>
                  <WebinarRegistrationFlowAbstract className="mx-auto hidden sm:block lg:mx-0" />
                </div>
              </div>
            </section>
          </>
        ) : null}

        {/* RELATED */}
        {related.length > 0 ? (
          <section className="relative border-b border-brand-line/60 bg-[#F5F8FC]" aria-labelledby="webinar-related-heading">
            <div className="resource-detail-shell relative py-7 sm:py-8 lg:py-9">
              <ResourceRelatedAmbient />
              <div className="relative z-[1] grid gap-6 lg:grid-cols-[minmax(11rem,14rem)_minmax(0,1fr)_minmax(9rem,11rem)] lg:items-start lg:gap-8">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Continue</p>
                  <h2
                    id="webinar-related-heading"
                    className="mt-1.5 font-display text-[1.35rem] font-bold tracking-tight text-brand-navy sm:text-[1.55rem]"
                  >
                    Related resources
                  </h2>
                </div>
                <ul className="divide-y divide-brand-line border border-brand-line bg-white" data-design-layer="content">
                  {related.map((item, index) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="group flex items-start gap-3 px-3.5 py-3 transition hover:bg-[#F7FAFD] sm:px-4 sm:py-3.5"
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
