"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloseIcon, CompanyLogo, MenuIcon } from "@/components/Icons";
import { getActiveNavHref, PRIMARY_NAV, REQUEST_BID_HREF } from "@/lib/website/navigation";
import { useLanguage } from "./LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuId = useId();
  const pathname = usePathname();
  const activeHref = getActiveNavHref(pathname);
  const { t } = useLanguage();

  const navLabels: Record<string, string> = {
    "/": t.nav.home,
    "/about": t.nav.about,
    "/services": t.nav.services,
    "/projects": t.nav.projects,
    "/team": t.nav.team,
    "/contact": t.nav.contact,
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-line/80 bg-white/97 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div
        className={`site-shell flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? "h-14 lg:h-16" : "h-16 lg:h-[4.5rem]"
        }`}
      >
        <CompanyLogo />

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex"
          aria-label="Primary"
          id={menuId}
        >
          {PRIMARY_NAV.map((item) => {
            const isActive = activeHref === item.href;
            return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`rounded-sm px-3 py-2 text-[13px] font-medium transition hover:text-brand-navy ${
                isActive ? "text-brand-navy" : "text-brand-muted"
              }`}
            >
              {navLabels[item.href] ?? item.label}
            </Link>
          );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>
          <Link href={REQUEST_BID_HREF} className="btn-primary hidden px-4 py-2.5 text-[13px] md:inline-flex">
            {t.nav.requestBid}
          </Link>
          <button
            type="button"
            className="inline-flex rounded-sm p-2 text-brand-navy hover:bg-brand-soft lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
