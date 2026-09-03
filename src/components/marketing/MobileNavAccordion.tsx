"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "@/components/Icons";
import { CTAS, type MegaMenuCategory } from "@/lib/marketing/navigation";

type Props = {
  title: string;
  href: string;
  categories: MegaMenuCategory[];
  onNavigate: () => void;
  showExploreCta?: boolean;
  dark?: boolean;
};

export function MobileNavAccordion({
  title,
  href,
  categories,
  onNavigate,
  showExploreCta,
  dark = false,
}: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={dark ? "border-b border-white/10" : "border-b border-brand-line/60"}>
      <div className="flex min-h-[52px] items-center justify-between gap-2 py-2">
        <Link
          href={href}
          className={`min-h-[44px] flex-1 py-2 font-display text-lg font-semibold ${
            dark ? "text-white" : "text-brand-navy"
          }`}
          onClick={onNavigate}
        >
          {title}
        </Link>
        <button
          type="button"
          className={`flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg ${
            dark ? "text-slate-400 hover:bg-white/10" : "text-brand-muted hover:bg-brand-soft"
          }`}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${open ? "Collapse" : "Expand"} ${title} menu`}
          onClick={() => setOpen((v) => !v)}
        >
          <ChevronDown className={`h-5 w-5 transition ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      {open && (
        <div id={panelId} className="space-y-5 pb-5 pl-1">
          {categories.map((group) => (
            <div key={group.id}>
              <Link
                href={group.href}
                className="inline-flex min-h-[36px] items-center text-[11px] font-bold uppercase tracking-[0.12em] text-brand-orange"
                onClick={onNavigate}
              >
                {group.title}
              </Link>
              <ul className="mt-1 space-y-0.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`flex min-h-[44px] items-center rounded-md px-2 text-[15px] ${
                        dark
                          ? "text-slate-400 hover:bg-white/5 hover:text-white"
                          : "text-brand-muted hover:bg-brand-soft/70 hover:text-brand-navy"
                      }`}
                      onClick={onNavigate}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {showExploreCta && (
            <Link
              href={CTAS.exploreFeatures.href}
              className="inline-flex min-h-[44px] items-center text-sm font-semibold text-brand-orange"
              onClick={onNavigate}
            >
              Explore All Features →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
