import Link from "next/link";

import type { ResolvedTourCapability } from "@/lib/marketing/product-tour/featureLinks";

import { CapabilityNavShell } from "./CapabilityNavShell";

type Props = {
  items: ResolvedTourCapability[];
};

export function TourCapabilityAIPipeline({ items }: Props) {
  if (!items.length) return null;

  return (
    <CapabilityNavShell title="Explore AI capabilities" titleId="tour-capabilities-ai" variant="ai">
      <ol className="relative mx-auto max-w-md py-2 sm:max-w-lg">
        {items.map((item, i) => (
          <li key={item.slug} className="relative">
            {i > 0 ? (
              <div className="flex justify-center py-1" aria-hidden="true">
                <svg width="12" height="20" viewBox="0 0 12 20" className="text-brand-navy/25">
                  <line x1="6" y1="0" x2="6" y2="14" stroke="currentColor" strokeWidth="1" />
                  <path d="M3 12 L6 16 L9 12" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            ) : null}
            <Link
              href={item.href}
              className="group block rounded-sm border border-brand-line/60 bg-white/90 px-4 py-3 transition hover:border-brand-blue/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/35"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#111827] transition group-hover:text-brand-black">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-[#111827]">{item.description}</p>
                  {item.statusNote ? (
                    <p className="mt-1.5 text-[11px] font-medium text-[#111827]">{item.statusNote}</p>
                  ) : null}
                </div>
                <span
                  className="shrink-0 pt-0.5 text-[17px] text-brand-orange transition group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
              <span className="sr-only">{item.exploreLabel}</span>
            </Link>
          </li>
        ))}
      </ol>
    </CapabilityNavShell>
  );
}
