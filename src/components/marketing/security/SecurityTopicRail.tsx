"use client";

import Link from "next/link";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { SECURITY_NAV_ITEMS, type SecurityPageId } from "@/lib/marketing/security/pages";
import { SecurityMeasure } from "./SecuritySurface";

export function SecurityTopicRail({ current }: { current: SecurityPageId }) {
  const { t } = useMarketing();
  const topics = SECURITY_NAV_ITEMS.filter((item) => item.id !== "hub");

  return (
    <nav aria-label={t.security.protection.navAria} className="border-y border-[#E8E8E8] bg-white">
      <SecurityMeasure className="flex gap-1 overflow-x-auto py-1">
        {topics.map((item) => {
          const active = item.id === current;
          return (
            <Link
              key={item.id}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`whitespace-nowrap px-4 py-3 text-[13px] font-semibold transition ${
                active ? "text-[#0D0D0D] shadow-[inset_0_-2px_0_#3FE844]" : "text-[#5C6560] hover:text-[#0D0D0D]"
              }`}
            >
              {t.security.pages[item.labelKey].nav}
            </Link>
          );
        })}
      </SecurityMeasure>
    </nav>
  );
}
