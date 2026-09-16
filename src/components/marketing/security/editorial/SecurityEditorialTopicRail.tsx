"use client";

import Link from "next/link";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { SECURITY_NAV_ITEMS, type SecurityPageId } from "@/lib/marketing/security/pages";

export function SecurityEditorialTopicRail({ current }: { current: SecurityPageId }) {
  const { t } = useMarketing();
  return (
    <nav aria-label={t.security.protection.navAria} className="min-w-0 border-b border-brand-line bg-white">
      <div className="flex min-w-0 max-w-full gap-0 overflow-x-auto px-5 sm:px-8 [-webkit-overflow-scrolling:touch]">
        {SECURITY_NAV_ITEMS.map((item) => {
          const active = item.id === current;
          return (
            <Link
              key={item.id}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`whitespace-nowrap border-b-2 px-4 py-3.5 text-[13px] font-semibold transition ${
                active
                  ? "border-brand-orange text-brand-navy"
                  : "border-transparent text-brand-muted hover:border-brand-line hover:text-brand-navy"
              }`}
            >
              {t.security.pages[item.labelKey].nav}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
