"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, VertexLogo } from "@/components/Icons";
import { FOOTER_COLUMNS } from "@/lib/marketing/navigation";
import { LanguageSelector } from "./LanguageSelector";
import { useMarketing } from "./MarketingProviders";

export function MarketingFooter() {
  const { t } = useMarketing();
  const [open, setOpen] = useState<string | null>(null);

  const columns = Object.values(FOOTER_COLUMNS);

  return (
    <footer className="bg-[#061525] text-slate-400">
      <div className="site-shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2.9fr] lg:gap-16">
          <div>
            <VertexLogo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Construction management software connecting projects, financials, field operations,
              compliance, workforce, and intelligence.
            </p>
            <div className="mt-8">
              <LanguageSelector light />
            </div>
          </div>

          <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white">{col.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm transition hover:text-brand-orange">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-0 sm:hidden">
            {columns.map((col) => {
              const isOpen = open === col.title;
              return (
                <div key={col.title} className="border-b border-white/10">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-sm font-semibold text-white"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : col.title)}
                  >
                    {col.title}
                    <ChevronDown className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <ul className="space-y-2 pb-4">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <Link href={link.href} className="block text-sm hover:text-brand-orange">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">{t.footer.rights}</p>
          <div className="flex flex-wrap gap-4 text-xs">
            <Link href="/privacy" className="hover:text-brand-orange">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-brand-orange">
              Terms
            </Link>
            <Link href="/dpa" className="hover:text-brand-orange">
              DPA
            </Link>
            <Link href="/cookie-policy" className="hover:text-brand-orange">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
