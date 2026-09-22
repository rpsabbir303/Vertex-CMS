"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { COMPANY_PAGE_LINKS, type CompanyPageId } from "@/lib/marketing/navigation";

type Props = {
  current: CompanyPageId;
};

/** Team page — compact editorial company links (not large cards). */
export function TeamCompanyNav({ current }: Props) {
  const { t } = useMarketing();
  const n = t.careers.companyNav;

  return (
    <section className="relative z-[2] overflow-hidden bg-white" aria-labelledby="team-company-nav-heading">
      <div className="site-shell py-14 sm:py-16 lg:py-20">
        <Reveal className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">{n.eyebrow}</p>
          <h2 id="team-company-nav-heading" className="display-title mt-4 text-[1.75rem] leading-tight sm:text-[2rem]">
            {n.headline}
          </h2>
        </Reveal>
        <nav aria-label={n.navigationAriaLabel} className="mt-8 max-w-lg">
          <ul className="divide-y divide-brand-navy/10 border-y border-brand-navy/10">
            {COMPANY_PAGE_LINKS.map((item) => {
              const isActive = item.id === current;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className="group flex min-h-[48px] items-center justify-between py-4 text-[15px] font-semibold text-[#08233F] transition hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
                  >
                    <span className="uppercase tracking-[0.06em]">{item.label}</span>
                    <span className="text-brand-orange transition group-hover:translate-x-0.5" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}
