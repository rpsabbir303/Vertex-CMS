import Link from "next/link";
import { Fragment } from "react";

import type { ResolvedTourCapability } from "@/lib/marketing/product-tour/featureLinks";

import { CapabilityNavShell } from "./CapabilityNavShell";

type Props = {
  items: ResolvedTourCapability[];
};

/** Circle row center — arrows align to this offset from stage top (short label + gap + half node). */
const DESKTOP_ARROW_OFFSET = "pt-[2.75rem]";

const stageLinkClass =
  "group flex w-full flex-col items-center rounded-sm border border-transparent px-1 py-2 transition hover:border-brand-line/80 hover:bg-[#F4F8FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/35";

const shortLabelClass =
  "flex h-5 w-full items-center justify-center text-center text-[10px] font-bold uppercase tracking-[0.07em] text-black";

const nodeClass =
  "my-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-line/90 bg-white transition group-hover:border-brand-blue/40 group-hover:bg-[#EEF4FA]";

const featureNameBoxClass =
  "flex min-h-[40px] w-full max-w-[7.25rem] items-start justify-center px-0.5 text-center";

const featureNameClass =
  "text-[13px] font-semibold leading-[1.35] text-[#111827] transition group-hover:text-brand-black sm:text-[13px] lg:text-[13px]";

function FinancialStageDesktop({ item }: { item: ResolvedTourCapability }) {
  return (
    <Link href={item.href} className={stageLinkClass}>
      <span className={shortLabelClass}>{item.shortLabel}</span>
      <span className={nodeClass} aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-brand-blue/35 transition group-hover:bg-brand-orange/70" />
      </span>
      <div className={featureNameBoxClass}>
        <span className={featureNameClass}>{item.label}</span>
      </div>
      <span className="sr-only">{item.exploreLabel}</span>
    </Link>
  );
}

function FinancialStageMobile({
  item,
  index,
}: {
  item: ResolvedTourCapability;
  index: number;
}) {
  return (
    <Link
      href={item.href}
      className="group flex min-h-[48px] w-full gap-3 rounded-sm border border-transparent px-2 py-3 transition hover:border-brand-line/80 hover:bg-[#F4F8FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/35"
    >
      <span className="w-7 shrink-0 font-mono text-[12px] font-semibold tabular-nums text-brand-orange">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.07em] text-black">{item.shortLabel}</span>
        <span className="text-[14px] font-semibold leading-[1.35] text-[#111827] transition group-hover:text-brand-black">
          {item.label}
        </span>
      </span>
      <span className="shrink-0 self-center text-brand-orange" aria-hidden="true">
        →
      </span>
      <span className="sr-only">{item.exploreLabel}</span>
    </Link>
  );
}

export function TourCapabilityFinancialRail({ items }: Props) {
  if (!items.length) return null;

  return (
    <CapabilityNavShell title="Related financial capabilities" titleId="tour-capabilities-financial" variant="financial">
      <div className="pb-3 pt-2" data-design-layer="tour-financial-capability-rail">
        {/* Mobile: vertical progression */}
        <ol className="flex flex-col md:hidden">
          {items.map((item, i) => (
            <Fragment key={item.slug}>
              <li>
                <FinancialStageMobile item={item} index={i} />
              </li>
              {i < items.length - 1 ? (
                <li className="flex justify-center py-1 text-black/50" aria-hidden="true">
                  ↓
                </li>
              ) : null}
            </Fragment>
          ))}
        </ol>

        {/* Tablet: two rows × three stages — no horizontal scroll */}
        <ol className="mx-auto hidden max-w-3xl grid-cols-3 gap-x-3 gap-y-6 md:grid lg:hidden">
          {items.map((item) => (
            <li key={item.slug} className="min-w-0">
              <FinancialStageDesktop item={item} />
            </li>
          ))}
        </ol>

        {/* Desktop: single horizontal progression */}
        <ol className="hidden w-full items-start lg:flex">
          {items.map((item, i) => (
            <Fragment key={item.slug}>
              <li className="min-w-0 flex-1 basis-0">
                <FinancialStageDesktop item={item} />
              </li>
              {i < items.length - 1 ? (
                <li
                  className={`flex shrink-0 items-center px-1 text-[11px] text-black/50 ${DESKTOP_ARROW_OFFSET}`}
                  aria-hidden="true"
                >
                  →
                </li>
              ) : null}
            </Fragment>
          ))}
        </ol>
      </div>
    </CapabilityNavShell>
  );
}
