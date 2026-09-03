"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, CompanyLogo } from "@/components/Icons";
import { company } from "@/lib/website/tenantData";
import { FOOTER_LINKS } from "@/lib/website/navigation";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<string | null>(null);

  const columns = [
    {
      title: t.footer.company,
      links: FOOTER_LINKS.company.map((l) => ({
        label: t.nav[l.labelKey],
        href: l.href,
      })),
    },
    {
      title: t.footer.projects,
      links: FOOTER_LINKS.projects.map((l) => ({
        label: t.footer[l.labelKey],
        href: l.href,
      })),
    },
    {
      title: t.footer.trust,
      links: FOOTER_LINKS.trust.map((l) => ({
        label: t.footer[l.labelKey],
        href: l.href,
      })),
    },
    {
      title: t.footer.contact,
      links: FOOTER_LINKS.contact.map((l) => ({
        label: t.footer[l.labelKey],
        href: l.href,
      })),
    },
    {
      title: t.footer.legal,
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-[#061525] text-slate-400">
      <div className="site-shell py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_2.85fr] lg:gap-20">
          <div>
            <CompanyLogo light />
            <p className="mt-6 max-w-sm text-sm leading-[1.75]">{company.description}</p>
            <div className="mt-8 border-l-2 border-brand-orange pl-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                {t.footer.serviceArea}
              </p>
              <p className="mt-1 text-sm text-slate-300">{company.serviceAreaLabel}</p>
            </div>
            <div className="mt-8">
              <LanguageToggle light />
            </div>
          </div>

          <div className="hidden gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-5">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={`${col.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-sm leading-relaxed transition-colors duration-300 hover:text-brand-orange"
                      >
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
                    <ul className="space-y-2.5 pb-4">
                      {col.links.map((link) => (
                        <li key={`${col.title}-${link.label}`}>
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

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {company.name}. {t.footer.rights}
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="/privacy" className="transition hover:text-brand-orange">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-brand-orange">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
