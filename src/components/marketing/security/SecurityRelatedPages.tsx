"use client";

import { useState } from "react";
import Link from "next/link";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { SECURITY_NAV_INDEX, SECURITY_NAV_ITEMS, type SecurityPageId } from "@/lib/marketing/security/pages";
import { SecurityLiveEyebrow, SecurityMeasure } from "./SecuritySurface";

type Props = {
  current: SecurityPageId;
};

export function SecurityRelatedPages({ current }: Props) {
  const { t } = useMarketing();
  const r = t.security.related;
  const pages = t.security.pages;
  const [open, setOpen] = useState<string | null>(
    current === "hub" || current === "contact" ? null : current,
  );

  return (
    <section
      className="border-b border-[#E8E8E8] bg-white"
      aria-labelledby="security-related-heading"
      data-figma-section="explore-trust-model"
    >
      <SecurityMeasure className="py-14 sm:py-16">
        <SecurityLiveEyebrow>{r.eyebrow}</SecurityLiveEyebrow>
        <h2
          id="security-related-heading"
          className="mt-4 max-w-[16em] font-display text-[1.85rem] font-bold tracking-[-0.03em] text-[#0D0D0D] sm:text-[2.35rem]"
        >
          {r.headline}
        </h2>
        <nav aria-label={r.navAria} className="mt-10 border-t border-[#E8E8E8]" data-figma-region="explore-trust-model-nav">
          {SECURITY_NAV_ITEMS.map((item) => {
            const copy = pages[item.labelKey];
            const isOpen = open === item.id;
            const active = item.id === current;
            return (
              <div key={item.id} className="border-b border-[#E8E8E8]" data-figma-cell={item.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-[12px] font-semibold text-[#3FE844]">{SECURITY_NAV_INDEX[item.id]}</span>
                    <span className={`text-[16px] font-semibold tracking-tight ${active ? "text-[#3FE844]" : "text-[#0D0D0D]"}`}>
                      {copy.nav}
                    </span>
                  </span>
                  <span className="text-[22px] leading-none text-[#5C6560]" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <div className="pb-6 pl-9 sm:pl-12">
                    <p className="max-w-[36rem] text-[14px] leading-[1.7] text-[#5C6560]">{copy.description}</p>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className="mt-4 inline-flex items-center rounded-md bg-[#3FE844] px-3.5 py-2 text-[12px] font-semibold text-[#0D0D0D] hover:bg-[#35d13c]"
                    >
                      {t.security.explore} →
                    </Link>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
      </SecurityMeasure>
    </section>
  );
}
