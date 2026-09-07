"use client";

import Link from "next/link";
import { LEGAL_NAV, type LegalDocId } from "@/lib/marketing/legal/content";

type Props = {
  current: LegalDocId;
};

export function LegalNavigation({ current }: Props) {
  return (
    <>
      {/* Mobile / tablet: horizontal scroll */}
      <nav aria-label="Legal documents" className="mb-8 lg:hidden print:hidden">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
          Legal
        </p>
        <ul className="-mx-1 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]">
          {LEGAL_NAV.map((item) => {
            const active = item.id === current;
            return (
              <li key={item.id} className="shrink-0">
                <Link
                  href={item.href}
                  className={`inline-flex rounded-md border px-3.5 py-2 text-[13px] font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 ${
                    active
                      ? "border-brand-navy bg-brand-navy text-white"
                      : "border-brand-line bg-white text-brand-muted hover:border-brand-navy/25 hover:text-brand-navy"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Desktop: sticky vertical nav */}
      <nav aria-label="Legal documents" className="hidden lg:block print:hidden">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Legal</p>
        <ul className="mt-4 space-y-1 border-l border-brand-line">
          {LEGAL_NAV.map((item) => {
            const active = item.id === current;
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`-ml-px block border-l-2 py-2 pl-4 text-[14px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 ${
                    active
                      ? "border-brand-orange font-semibold text-brand-navy"
                      : "border-transparent text-brand-muted hover:border-brand-line hover:text-brand-navy"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
