"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { getCategoryLabel } from "@/lib/marketing/integrations/categories";
import { integrationDetailPath } from "@/lib/marketing/integrations/data";
import type { IntegrationRecord } from "@/lib/marketing/integrations/types";
import { IntegrationMonogram } from "./IntegrationMonogram";

export type IntegrationCardProps = {
  item: IntegrationRecord;
  compact?: boolean;
  loading?: boolean;
  disabled?: boolean;
};

function KindLabel({ kind }: { kind: IntegrationRecord["kind"] }) {
  if (kind === "capability") {
    return (
      <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-blue">
        Platform capability
      </span>
    );
  }
  return null;
}

function StatusBadge({ availability }: { availability: IntegrationRecord["availability"] }) {
  if (availability === "AVAILABLE") {
    return (
      <span className="inline-flex items-center gap-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-700">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
        Available
      </span>
    );
  }
  return (
    <span className="inline-flex rounded-sm border border-brand-line bg-[#FAFBFD] px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
      Coming Soon
    </span>
  );
}

export function IntegrationCard({ item, compact, loading, disabled }: IntegrationCardProps) {
  if (loading) {
    return (
      <div className="flex animate-pulse gap-4 border-b border-brand-line/80 py-5 motion-reduce:animate-none" aria-hidden="true">
        <div className="h-10 w-10 rounded-sm bg-brand-line/60" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-40 rounded-sm bg-brand-line/60" />
          <div className="h-3 w-full max-w-md rounded-sm bg-brand-line/40" />
        </div>
      </div>
    );
  }

  const muted = item.availability === "COMING_SOON";
  const category = getCategoryLabel(item.categoryId);
  const canNavigate = !disabled;

  const inner = (
    <>
      <IntegrationMonogram name={item.name} monogram={item.monogram} logoSrc={item.logoSrc} muted={muted} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <KindLabel kind={item.kind} />
          {!compact && item.kind === "integration" && (
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-brand-muted">{category}</p>
          )}
        </div>
        <p className={"mt-1 font-sans text-[15px] font-semibold tracking-tight " + (muted ? "text-brand-navy/70" : "text-brand-navy")}>
          {item.name}
        </p>
        {compact && (
          <p className="mt-0.5 font-sans text-[10px] uppercase tracking-[0.12em] text-brand-muted">{category}</p>
        )}
        <p className={"mt-1 text-[13px] leading-relaxed " + (muted ? "text-brand-muted/90" : "text-brand-muted")}>
          {item.shortDescription}
        </p>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-2 sm:flex-row sm:items-center sm:gap-4">
        <StatusBadge availability={item.availability} />
        {canNavigate ? (
          <span
            className={
              "inline-flex items-center gap-1 text-[13px] font-semibold transition group-hover:gap-2 " +
              (muted ? "text-brand-muted group-hover:text-brand-navy" : "text-brand-orange")
            }
          >
            {muted ? "Overview" : "View details"}
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </span>
        ) : (
          <span className="text-[12px] text-brand-muted">Unavailable</span>
        )}
      </div>
    </>
  );

  const className =
    "group flex w-full gap-4 border-b border-brand-line/80 px-1 text-left transition " +
    (compact ? "int-detail-related-row py-3.5" : "py-5") +
    " " +
    (canNavigate
      ? "hover:bg-[#FAFBFD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 focus-visible:ring-offset-2"
      : "cursor-default");

  if (canNavigate) {
    return (
      <Link href={integrationDetailPath(item.slug)} className={className} aria-label={`${item.name}, ${muted ? "coming soon" : "available"}`}>
        {inner}
      </Link>
    );
  }

  return <div className={className}>{inner}</div>;
}
