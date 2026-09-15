"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { COMPANY_PAGE_LINKS, type CompanyPageId } from "@/lib/marketing/navigation";
import { CareersTechField } from "./CareersTechField";

type Props = {
  current: CompanyPageId;
};

const INDEX = ["01", "02", "03", "04"] as const;

export function CareersCompanyNav({ current }: Props) {
  const { t } = useMarketing();
  const n = t.careers.companyNav;

  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="careers-company-nav-heading">
      <CareersTechField tone="light" intensity="quiet" paths />

      <div className="site-shell relative z-[2] py-16 sm:py-20 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">{n.eyebrow}</p>
          <h2
            id="careers-company-nav-heading"
            className="display-title mt-4 text-[2rem] leading-tight sm:text-[2.35rem] lg:text-[2.5rem]"
          >
            {n.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-brand-muted sm:text-base">{n.supporting}</p>
        </Reveal>

        <Reveal delay={80}>
          <nav aria-label={n.navigationAriaLabel} className="mt-12 sm:mt-14">
            <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
              {COMPANY_PAGE_LINKS.map((item, index) => {
                const isActive = item.id === current;
                const hint = n.items[item.id]?.hint ?? "";
                const ariaLabel = isActive ? `${item.label}, ${n.currentPageSuffix}` : item.label;

                return (
                  <li key={item.id} className="min-h-[168px]">
                    <Link
                      href={item.href}
                      aria-label={ariaLabel}
                      aria-current={isActive ? "page" : undefined}
                      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-sm border p-5 transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 sm:p-6 ${
                        isActive
                          ? "border-brand-navy/12 bg-[#F3F7FC]"
                          : "border-brand-navy/10 bg-white hover:border-brand-navy/20 hover:bg-[#FAFBFD]"
                      }`}
                    >
                      {isActive ? (
                        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-orange" aria-hidden="true" />
                      ) : null}

                      <svg
                        viewBox="0 0 160 80"
                        className="pointer-events-none absolute -right-4 -top-2 h-20 w-40 opacity-50"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M 10 50 C 40 20, 80 70, 150 28"
                          stroke="#08233F"
                          strokeOpacity="0.1"
                          className="careers-line-flow-slow"
                          strokeDasharray="4 8"
                        />
                        <circle cx="150" cy="28" r="2.5" fill={isActive ? "#FF6A00" : "#08233F"} fillOpacity={isActive ? 0.55 : 0.18} />
                      </svg>

                      <div className="relative">
                        <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-brand-orange">
                          {INDEX[index]}
                        </span>
                        <p
                          className={`mt-3 text-[17px] leading-snug sm:text-lg ${
                            isActive ? "font-semibold text-brand-navy" : "font-medium text-brand-navy group-hover:text-brand-navy"
                          }`}
                        >
                          {item.label}
                        </p>
                        <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{hint}</p>
                      </div>

                      <div className="relative mt-6 flex items-center justify-between gap-3">
                        {isActive ? (
                          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-orange">
                            {n.currentPageSuffix}
                          </span>
                        ) : (
                          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-brand-muted">
                            {n.exploreLabel}
                          </span>
                        )}
                        <span
                          className={`font-mono text-sm transition duration-200 group-hover:translate-x-0.5 group-hover:text-brand-orange ${
                            isActive ? "text-brand-orange" : "text-brand-muted"
                          }`}
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
