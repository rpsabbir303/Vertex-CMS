"use client";



import Link from "next/link";

import { useMarketing } from "@/components/marketing/MarketingProviders";

import {

  complianceEditorial,

  complianceKeyInfo,

  complianceSection,

  securityCta,

} from "@/lib/marketing/security/content";

import { ComplianceAbstract } from "./ComplianceAbstract";

import {

  SecurityEditorialDivider,

  SecurityEditorialEyebrow,

  SecurityEditorialFrame,

  SecurityEditorialStatus,

} from "./SecurityEditorialFrame";

import { SecurityEditorialCTA } from "./SecurityEditorialCTA";

import { SecurityEditorialExplore } from "./SecurityEditorialExplore";

import { SecurityEditorialTopicRail } from "./SecurityEditorialTopicRail";



function EditorialTopicGrid({

  items,

  "aria-label": ariaLabel,

}: {

  items: readonly { title: string; body: string; status: import("@/lib/marketing/security/content").SecurityStatus }[];

  "aria-label": string;

}) {

  return (

    <section className="border-b border-brand-line bg-white px-5 py-14 sm:px-8 sm:py-16" aria-label={ariaLabel}>

      <div className="min-w-0 border border-brand-line">

        <div className="grid min-w-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:[grid-template-columns:repeat(3,minmax(0,1fr))]">

          {items.map((note, index) => (

            <article

              key={note.title}

              className={`min-w-0 px-6 py-10 sm:px-8 ${index > 0 ? "border-t border-brand-line md:border-l md:border-t-0" : ""}`}

            >

              <div className="flex flex-wrap items-center gap-2">

                <h3 className="text-[15px] font-semibold text-brand-navy">{note.title}</h3>

                <SecurityEditorialStatus status={note.status} />

              </div>

              <p className="mt-3 text-[13px] leading-[1.8] text-brand-muted">{note.body}</p>

            </article>

          ))}

        </div>

      </div>

    </section>

  );

}



export function ComplianceEditorialPage() {

  const { t } = useMarketing();

  const pageCopy = t.security.pages.compliance;

  const ed = complianceEditorial;

  const ctaCopy = t.security.complianceCta;



  return (

    <SecurityEditorialFrame>

      <section className="border-b border-brand-line bg-white" aria-labelledby="co-hero-heading">

        <div className="grid min-w-0 grid-cols-1 lg:grid-cols-2 lg:[grid-template-columns:minmax(0,1fr)_minmax(0,1fr)]">

          <div className="min-w-0 border-b border-brand-line px-5 py-14 sm:px-8 sm:py-16 lg:border-b-0 lg:py-[4.5rem]">

            <SecurityEditorialEyebrow>{t.security.hero.eyebrow}</SecurityEditorialEyebrow>

            <h1

              id="co-hero-heading"

              className="mt-5 max-w-full break-words font-display text-[2rem] font-bold leading-[1.08] tracking-[-0.04em] text-brand-navy sm:text-[2.75rem] lg:text-[3.25rem]"

            >

              {pageCopy.title}

            </h1>

            <p className="mt-5 max-w-full text-[16px] leading-[1.7] text-brand-muted">{pageCopy.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">

              <Link href={securityCta.primaryHref} className="btn-primary inline-flex px-5 py-2.5 text-[13px]">

                {t.security.cta.primary}

              </Link>

              <Link href={securityCta.secondaryHref} className="btn-secondary inline-flex px-5 py-2.5 text-[13px]">

                {t.security.cta.secondary}

              </Link>

            </div>

          </div>

          <div className="flex min-h-[280px] min-w-0 items-center justify-center overflow-hidden border-brand-line bg-brand-soft/50 p-6 sm:min-h-[320px] sm:p-10 lg:min-h-[480px] lg:border-l">

            <div className="h-full max-h-[360px] w-full max-w-full">

              <ComplianceAbstract className="max-h-full max-w-full" />

            </div>

          </div>

        </div>

      </section>



      <SecurityEditorialTopicRail current="compliance" />



      <section className="border-b border-brand-line bg-white px-5 py-14 sm:px-8 sm:py-16" aria-labelledby="co-key-info-heading">

        <h2

          id="co-key-info-heading"

          className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-navy"

        >

          {t.security.complianceKeyInfo.eyebrow}

        </h2>

        <div className="mx-auto mt-10 grid w-full min-w-0 max-w-5xl grid-cols-1 border border-brand-line sm:grid-cols-2 lg:grid-cols-4">

          {complianceKeyInfo.map((item, index) => (

            <div

              key={item.label}

              className={[
                "min-w-0 px-6 py-8 sm:py-10",
                index > 0 ? "border-t border-brand-line" : "",
                index % 2 === 1 ? "sm:border-l sm:border-t-0" : "",
                index >= 2 ? "sm:border-t" : "",
                index > 0 ? "lg:border-l lg:border-t-0" : "",
              ]
                .filter(Boolean)
                .join(" ")}

            >

              <p className="break-words font-display text-[1.35rem] font-bold tracking-[-0.03em] text-brand-navy sm:text-[1.65rem] lg:text-[1.5rem] xl:text-[1.75rem]">

                {item.label}

              </p>

              <p className="mt-2 text-[14px] text-brand-muted">{item.detail}</p>

              {item.qualifier ? (

                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">{item.qualifier}</p>

              ) : null}

            </div>

          ))}

        </div>

      </section>



      <section className="border-b border-brand-line bg-white px-5 py-14 sm:px-8 sm:py-16" aria-labelledby="co-main-heading">

        <div className="min-w-0 border border-brand-line">

          <div className="min-w-0 border-b border-brand-line px-6 py-10 sm:px-8 sm:py-12">

            <SecurityEditorialEyebrow>{t.security.compliance.eyebrow}</SecurityEditorialEyebrow>

            <h2

              id="co-main-heading"

              className="mt-4 max-w-full break-words font-display text-[1.75rem] font-bold tracking-[-0.03em] text-brand-navy sm:text-[2.5rem]"

            >

              {ed.mainHeadline}

            </h2>

            <p className="mt-4 max-w-full text-[15px] leading-[1.75] text-brand-muted">{complianceSection.supporting}</p>

            <p className="mt-4 max-w-full text-[15px] leading-[1.75] text-brand-muted">{ed.productSupportNote}</p>

            <p className="mt-4 max-w-full border-l-2 border-brand-orange/60 pl-4 text-[14px] leading-[1.75] text-brand-muted">

              {complianceSection.distinction}

            </p>

          </div>



          <div className="grid min-w-0 grid-cols-1 lg:grid-cols-2 lg:[grid-template-columns:minmax(0,1fr)_minmax(0,1fr)]">

            <div className="min-w-0 border-b border-brand-line px-6 py-8 sm:px-8 sm:py-10 lg:border-b-0 lg:border-r">

              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-muted">Compliance areas</p>

              <SecurityEditorialDivider />

              <ol className="m-0 list-none p-0">

                {ed.capabilityRows.map((item, index) => (

                  <li key={item.title}>

                    {index > 0 ? <SecurityEditorialDivider /> : null}

                    <div className="flex min-w-0 gap-4 py-5">

                      <span className="shrink-0 font-mono text-[12px] font-semibold text-brand-orange">

                        {String(index + 1).padStart(2, "0")}

                      </span>

                      <span className="min-w-0 break-words text-[14px] leading-[1.75] text-brand-navy/90">

                        <span className="font-semibold text-brand-navy">{item.title}</span>

                        {" — "}

                        {item.body}

                      </span>

                    </div>

                  </li>

                ))}

              </ol>

            </div>

            <div className="min-w-0 px-6 py-8 sm:px-8 sm:py-10">

              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-muted">Compliance controls</p>

              <SecurityEditorialDivider />

              <ul className="m-0 list-none p-0">

                {ed.complianceControls.map((control, index) => (

                  <li key={control.title}>

                    {index > 0 ? <SecurityEditorialDivider /> : null}

                    <div className="flex flex-wrap items-start justify-between gap-3 py-4">

                      <div className="min-w-0">

                        <p className="text-[13px] font-semibold text-brand-navy">{control.title}</p>

                        <p className="mt-1 font-mono text-[12px] text-brand-muted">{control.value}</p>

                      </div>

                      <SecurityEditorialStatus status={control.status} />

                    </div>

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </section>



      <EditorialTopicGrid items={ed.complianceAreas} aria-label="Compliance areas" />

      <EditorialTopicGrid items={ed.supportingTopics} aria-label="Supporting compliance information" />



      <SecurityEditorialExplore current="compliance" />

      <SecurityEditorialCTA

        abstract={ComplianceAbstract}

        title={ctaCopy.title}

        supporting={ctaCopy.supporting}

      />

    </SecurityEditorialFrame>

  );

}


