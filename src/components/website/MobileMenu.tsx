"use client";

import Link from "next/link";
import { PRIMARY_NAV, REQUEST_BID_HREF } from "@/lib/website/navigation";
import { useLanguage } from "./LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: Props) {
  const { t } = useLanguage();

  const navLabels: Record<string, string> = {
    "/": t.nav.home,
    "/about": t.nav.about,
    "/services": t.nav.services,
    "/projects": t.nav.projects,
    "/team": t.nav.team,
    "/contact": t.nav.contact,
  };

  if (!open) return null;

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 top-16 z-40 bg-white lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <nav className="site-shell flex h-[calc(100vh-4rem)] flex-col py-8">
        <div className="flex-1 space-y-1">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block border-b border-brand-line/60 py-4 font-display text-2xl font-semibold text-brand-navy transition hover:text-brand-orange"
              onClick={onClose}
            >
              {navLabels[item.href] ?? item.label}
            </Link>
          ))}
        </div>
        <div className="space-y-4 border-t border-brand-line pt-6">
          <Link href={REQUEST_BID_HREF} className="btn-primary w-full" onClick={onClose}>
            {t.nav.requestBid}
          </Link>
          <div className="flex justify-center">
            <LanguageToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
