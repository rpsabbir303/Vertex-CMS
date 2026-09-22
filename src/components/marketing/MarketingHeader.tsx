"use client";

import { Suspense, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloseIcon, MenuIcon, VertexLogo } from "@/components/Icons";
import {
  COMPANY_MEGA_MENU,
  CTAS,
  FEATURES_MEGA_MENU,
  getMarketingActiveNav,
  PRIMARY_NAV,
  RESOURCES_MEGA_MENU,
  ROUTES,
  SOLUTIONS_MEGA_MENU,
  type NavMegaType,
} from "@/lib/marketing/navigation";
import { LanguageSelector } from "./LanguageSelector";
import { MegaMenu } from "./MegaMenu";
import { MobileNavAccordion } from "./MobileNavAccordion";
import { useMarketing } from "./MarketingProviders";
import { ProductTourFeatureReturnBar } from "./product-tour/ProductTourFeatureReturnBar";

type Props = {
  variant?: "light" | "dark";
};

export function MarketingHeader({ variant = "light" }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<NavMegaType>(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const pathname = usePathname();
  const activeHref = getMarketingActiveNav(pathname);
  const { t } = useMarketing();
  const dark = variant === "dark";

  const navLabels: Record<string, string> = {
    [ROUTES.features]: t.header.productFeatures,
    [ROUTES.solutions]: t.header.solutions,
    [ROUTES.pricing]: t.header.pricing,
    [ROUTES.resources]: t.header.resources,
    [ROUTES.company]: t.header.company,
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!megaOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [megaOpen]);

  const closeMobile = () => setMobileOpen(false);

  const headerSurface = dark
    ? scrolled
      ? "border-b border-white/10 bg-[#040b14]/92 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md"
      : "border-b border-transparent bg-[#040b14]/55 backdrop-blur-sm"
    : scrolled
      ? "border-b border-brand-line/80 bg-white/97 shadow-sm backdrop-blur-md"
      : "border-b border-transparent bg-white/90 backdrop-blur-sm";

  return (
    <>
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${headerSurface}`}>
      <div ref={headerRef} className="relative" onMouseLeave={() => setMegaOpen(false)}>
        <div
          className={`site-shell grid grid-cols-[auto_1fr_auto] items-center gap-3 transition-all duration-300 xl:gap-4 ${
            scrolled ? "h-14 xl:h-16" : "h-16 xl:h-[4.25rem]"
          }`}
        >
          <div className="shrink-0">
            <VertexLogo light={dark} />
          </div>

          <nav
            className="hidden min-w-0 items-center justify-center gap-0.5 xl:flex"
            aria-label="Primary"
            id={menuId}
          >
            {PRIMARY_NAV.map((item) => {
              const isActive = activeHref === item.href;
              const baseClass = dark
                ? `shrink-0 whitespace-nowrap rounded-sm px-2.5 py-2 text-[13px] font-medium transition hover:text-white xl:px-3 ${
                    isActive ? "text-white" : "text-slate-400"
                  }`
                : `shrink-0 whitespace-nowrap rounded-sm px-2.5 py-2 text-[13px] font-medium transition hover:text-brand-navy xl:px-3 ${
                    isActive ? "text-brand-navy" : "text-brand-muted"
                  }`;

              if (item.mega) {
                return (
                  <div key={item.label} onMouseEnter={() => setMegaOpen(item.mega)}>
                    <Link
                      href={item.href}
                      className={baseClass}
                      aria-current={isActive ? "page" : undefined}
                      aria-haspopup="true"
                      aria-expanded={megaOpen === item.mega}
                      aria-controls={menuId}
                    >
                      {navLabels[item.href] ?? item.label}
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={baseClass}
                  aria-current={isActive ? "page" : undefined}
                >
                  {navLabels[item.href] ?? item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-1.5 sm:gap-2">
            <div className="hidden shrink-0 xl:block">
              <LanguageSelector compact light={dark} />
            </div>
            <Link
              href={CTAS.login.href}
              className={`hidden whitespace-nowrap rounded-sm px-2 py-2 text-[13px] font-medium transition xl:inline-flex ${
                dark ? "text-slate-400 hover:text-white" : "text-brand-muted hover:text-brand-navy"
              }`}
            >
              {t.header.login}
            </Link>
            <Link
              href={CTAS.demo.href}
              className={
                dark
                  ? "hidden whitespace-nowrap rounded-md border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-semibold text-white transition hover:bg-white/10 lg:inline-flex xl:px-4 xl:py-2.5 xl:text-[12px]"
                  : "btn-secondary hidden whitespace-nowrap px-3 py-2 text-[11px] lg:inline-flex xl:px-4 xl:py-2.5 xl:text-[12px]"
              }
            >
              {t.header.bookDemo}
            </Link>
            <Link
              href={CTAS.trial.href}
              className="btn-primary hidden whitespace-nowrap px-3 py-2 text-[11px] sm:inline-flex xl:px-4 xl:py-2.5 xl:text-[12px]"
            >
              {t.header.startTrial}
            </Link>
            <button
              type="button"
              className={`inline-flex rounded-sm p-2 xl:hidden ${
                dark ? "text-white hover:bg-white/10" : "text-brand-navy hover:bg-brand-soft"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <MegaMenu type={megaOpen} open={!!megaOpen} onClose={() => setMegaOpen(false)} />
      </div>

      {mobileOpen && (
        <div
          className={`fixed inset-0 top-16 z-40 overflow-y-auto xl:hidden ${
            dark ? "bg-[#040b14] text-white" : "bg-white"
          }`}
        >
          <nav className="site-shell flex flex-col py-2" aria-label="Mobile navigation">
            <MobileNavAccordion
              title={navLabels[ROUTES.features] ?? "Product / Features"}
              href={ROUTES.features}
              categories={FEATURES_MEGA_MENU}
              onNavigate={closeMobile}
              showExploreCta
              dark={dark}
            />
            <MobileNavAccordion
              title={navLabels[ROUTES.solutions] ?? "Solutions"}
              href={ROUTES.solutions}
              categories={SOLUTIONS_MEGA_MENU}
              onNavigate={closeMobile}
              dark={dark}
            />
            <MobileNavAccordion
              title={navLabels[ROUTES.resources] ?? "Resources"}
              href={ROUTES.resources}
              categories={RESOURCES_MEGA_MENU}
              onNavigate={closeMobile}
              dark={dark}
            />
            <MobileNavAccordion
              title={navLabels[ROUTES.company] ?? "Company"}
              href={ROUTES.company}
              categories={COMPANY_MEGA_MENU}
              onNavigate={closeMobile}
              dark={dark}
            />
            <Link
              href={ROUTES.pricing}
              className={`flex min-h-[52px] items-center border-b py-3 font-display text-lg font-semibold ${
                dark ? "border-white/10 text-white" : "border-brand-line/60 text-brand-navy"
              }`}
              onClick={closeMobile}
            >
              {navLabels[ROUTES.pricing] ?? "Pricing"}
            </Link>

            <div
              className={`sticky bottom-0 mt-4 space-y-3 border-t pb-8 pt-5 ${
                dark ? "border-white/10 bg-[#040b14]" : "border-brand-line/60 bg-white"
              }`}
            >
              <Link href={CTAS.login.href} className="btn-secondary min-h-[48px] w-full" onClick={closeMobile}>
                {t.header.login}
              </Link>
              <Link href={CTAS.demo.href} className="btn-secondary min-h-[48px] w-full" onClick={closeMobile}>
                {t.header.bookDemo}
              </Link>
              <Link href={CTAS.trial.href} className="btn-primary min-h-[48px] w-full" onClick={closeMobile}>
                {t.header.startTrial}
              </Link>
              <div className="flex justify-center pt-2">
                <LanguageSelector light={dark} />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
    <Suspense fallback={null}>
      <ProductTourFeatureReturnBar />
    </Suspense>
    </>
  );
}
