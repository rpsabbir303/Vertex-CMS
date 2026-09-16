"use client";

import Link from "next/link";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { dataProtection, hubSpecificationGrid, securityCta } from "@/lib/marketing/security/content";
import { DataProtectionAbstract } from "./DataProtectionAbstract";
import {
  SecurityEditorialDivider,
  SecurityEditorialEyebrow,
  SecurityEditorialFrame,
  SecurityEditorialStatus,
} from "./SecurityEditorialFrame";
import { SecurityEditorialCTA } from "./SecurityEditorialCTA";
import { SecurityEditorialExplore } from "./SecurityEditorialExplore";
import { SecurityEditorialTopicRail } from "./SecurityEditorialTopicRail";

const KEY_INFO_LABELS = new Set(["TLS 1.3", "AES-256"]);

export function DataProtectionEditorialPage() {
  const { t } = useMarketing();
  const pageCopy = t.security.pages["data-protection"];
  const keyItems = hubSpecificationGrid.filter((item) => KEY_INFO_LABELS.has(item.label));

  return (
    <SecurityEditorialFrame>
      {/* Hero */}
      <section className="border-b border-brand-line bg-white" aria-labelledby="dp-hero-heading">
        <div className="grid min-w-0 grid-cols-1 lg:grid-cols-2 lg:[grid-template-columns:minmax(0,1fr)_minmax(0,1fr)]">
          <div className="min-w-0 border-b border-brand-line px-5 py-14 sm:px-8 sm:py-16 lg:border-b-0 lg:py-[4.5rem]">
            <SecurityEditorialEyebrow>{t.security.hero.eyebrow}</SecurityEditorialEyebrow>
            <h1
              id="dp-hero-heading"
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
              <DataProtectionAbstract className="max-h-full max-w-full" />
            </div>
          </div>
        </div>
      </section>

      <SecurityEditorialTopicRail current="data-protection" />

      {/* Key security information */}
      <section className="border-b border-brand-line bg-white px-5 py-14 sm:px-8 sm:py-16" aria-labelledby="dp-key-info-heading">
        <h2
          id="dp-key-info-heading"
          className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-navy"
        >
          {t.security.keyInfo.eyebrow}
        </h2>
        <div className="mx-auto mt-10 w-full min-w-0 max-w-3xl border border-brand-line sm:flex">
          {keyItems.map((item, index) => (
            <div
              key={item.label}
              className={`min-w-0 flex-1 px-6 py-8 sm:py-10 ${index > 0 ? "border-t border-brand-line sm:border-l sm:border-t-0" : ""}`}
            >
              <p className="break-words font-display text-[1.75rem] font-bold tracking-[-0.03em] text-brand-navy sm:text-[2.35rem]">
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

      {/* Main editorial container */}
      <section className="border-b border-brand-line bg-white px-5 py-14 sm:px-8 sm:py-16" aria-labelledby="dp-main-heading">
        <div className="min-w-0 border border-brand-line">
          <div className="min-w-0 border-b border-brand-line px-6 py-10 sm:px-8 sm:py-12">
            <SecurityEditorialEyebrow>{t.security.dataProtection.eyebrow}</SecurityEditorialEyebrow>
            <h2
              id="dp-main-heading"
              className="mt-4 max-w-full break-words font-display text-[1.75rem] font-bold tracking-[-0.03em] text-brand-navy sm:text-[2.5rem]"
            >
              {dataProtection.title}
            </h2>
            <p className="mt-4 max-w-full text-[15px] leading-[1.75] text-brand-muted">{dataProtection.supporting}</p>
          </div>

          <div className="grid min-w-0 grid-cols-1 lg:grid-cols-2 lg:[grid-template-columns:minmax(0,1fr)_minmax(0,1fr)]">
            <div className="min-w-0 border-b border-brand-line px-6 py-8 sm:px-8 sm:py-10 lg:border-b-0 lg:border-r">
              <ol className="m-0 list-none p-0">
                {dataProtection.summaryBullets.map((item, index) => (
                  <li key={item}>
                    {index > 0 ? <SecurityEditorialDivider /> : null}
                    <div className="flex min-w-0 gap-4 py-5">
                      <span className="shrink-0 font-mono text-[12px] font-semibold text-brand-orange">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 break-words text-[14px] leading-[1.75] text-brand-navy/90">{item}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="min-w-0 px-6 py-8 sm:px-8 sm:py-10">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-muted">Documented controls</p>
              <SecurityEditorialDivider />
              <ul className="m-0 list-none p-0">
                {dataProtection.controls.map((control, index) => (
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

      {/* Data handling */}
      <section className="border-b border-brand-line bg-white px-5 py-14 sm:px-8 sm:py-16" aria-label="Data handling">
        <div className="min-w-0 border border-brand-line">
          <div className="grid min-w-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:[grid-template-columns:repeat(3,minmax(0,1fr))]">
            {dataProtection.notes.map((note, index) => (
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

      <SecurityEditorialExplore current="data-protection" />
      <SecurityEditorialCTA />
    </SecurityEditorialFrame>
  );
}
