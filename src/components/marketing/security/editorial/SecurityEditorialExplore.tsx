"use client";

import Link from "next/link";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { SECURITY_NAV_INDEX, SECURITY_NAV_ITEMS, type SecurityPageId } from "@/lib/marketing/security/pages";
import { SecurityEditorialDivider, SecurityEditorialEyebrow } from "./SecurityEditorialFrame";

type Props = {
  current: SecurityPageId;
};

export function SecurityEditorialExplore({ current }: Props) {
  const { t } = useMarketing();
  const r = t.security.related;
  const pages = t.security.pages;

  return (
    <section
      className="min-w-0 border-t border-brand-line bg-white px-5 py-14 sm:px-8 sm:py-16"
      aria-labelledby="editorial-explore-heading"
    >
      <SecurityEditorialEyebrow>{r.eyebrow}</SecurityEditorialEyebrow>
      <h2
        id="editorial-explore-heading"
        className="mt-4 max-w-full break-words font-display text-[1.85rem] font-bold tracking-[-0.03em] text-brand-navy sm:text-[2.35rem]"
      >
        {r.headline}
      </h2>
      <nav aria-label={r.navAria} className="mt-10 min-w-0 border border-brand-line">
        {SECURITY_NAV_ITEMS.map((item, index) => {
          const copy = pages[item.labelKey];
          const active = item.id === current;
          return (
            <div key={item.id}>
              {index > 0 ? <SecurityEditorialDivider /> : null}
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-w-0 items-center gap-4 px-5 py-5 transition sm:px-6 ${
                  active ? "bg-brand-soft/80" : "hover:bg-brand-soft/40"
                }`}
              >
                <span
                  className={`shrink-0 font-mono text-[12px] font-semibold tracking-wide ${
                    active ? "text-brand-orange" : "text-brand-muted"
                  }`}
                >
                  {SECURITY_NAV_INDEX[item.id]}
                </span>
                <span
                  className={`min-w-0 flex-1 break-words text-[16px] font-semibold tracking-tight ${
                    active ? "text-brand-orange" : "text-brand-navy"
                  }`}
                >
                  {copy.nav}
                </span>
              </Link>
            </div>
          );
        })}
      </nav>
    </section>
  );
}
