import Link from "next/link";

import type { ResolvedTourCapability } from "@/lib/marketing/product-tour/featureLinks";

import { CapabilityNavShell } from "./CapabilityNavShell";

type Props = {
  title: string;
  titleId: string;
  items: ResolvedTourCapability[];
  variant: "platform" | "field";
};

export function TourCapabilityEditorialList({ title, titleId, items, variant }: Props) {
  if (!items.length) return null;

  const uppercaseTitles = variant === "platform";

  return (
    <CapabilityNavShell title={title} titleId={titleId} variant={variant === "field" ? "field" : "default"}>
      <ol className="divide-y divide-brand-line/55">
        {items.map((item, i) => (
          <li key={item.slug}>
            <Link
              href={item.href}
              className="group grid gap-2 py-3.5 transition sm:grid-cols-[2.75rem_minmax(0,1fr)_2rem] sm:items-center sm:gap-4 sm:py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-orange/35 hover:bg-[#F4F8FC]/80"
            >
              <span className="font-mono text-[12px] font-semibold tabular-nums text-brand-orange sm:text-[13px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span
                  className={
                    "block text-[14px] font-semibold text-[#111827] transition group-hover:text-brand-black sm:text-[15px] " +
                    (uppercaseTitles ? "uppercase tracking-[0.06em]" : "")
                  }
                >
                  {item.label}
                </span>
                <span className="mt-0.5 block text-[13px] leading-snug text-[#111827]">{item.description}</span>
              </span>
              <span
                className="inline-flex justify-end text-[18px] font-light text-brand-orange transition group-hover:translate-x-0.5 sm:justify-center"
                aria-hidden="true"
              >
                →
              </span>
              <span className="sr-only">{item.exploreLabel}</span>
            </Link>
          </li>
        ))}
      </ol>
    </CapabilityNavShell>
  );
}
