"use client";

import { useEffect, useId, useState } from "react";
import { CloseIcon, MenuIcon, VertexLogo } from "./Icons";

const NAV = [
  { label: "Plan", href: "#plan" },
  { label: "Control", href: "#control" },
  { label: "Build", href: "#build" },
  { label: "Protect", href: "#protect" },
  { label: "Connect", href: "#connect" },
  { label: "Understand", href: "#understand" },
  { label: "Features", href: "/features" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled ? "border-brand-line bg-white/95 shadow-sm backdrop-blur-md" : "border-brand-line/80 bg-white"
      }`}
    >
      <div className="site-shell flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <VertexLogo />

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 xl:flex"
          aria-label="Primary"
          id={menuId}
        >
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-md px-2.5 py-2 text-[13px] font-medium text-brand-muted transition hover:bg-brand-soft hover:text-brand-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#login"
            className="hidden rounded-md px-3 py-2 text-sm font-medium text-brand-muted hover:text-brand-navy sm:inline-flex"
          >
            Login
          </a>
          <a href="#demo" className="btn-secondary hidden px-3.5 py-2.5 lg:inline-flex">
            Book a Demo
          </a>
          <a href="#trial" className="btn-primary hidden px-3.5 py-2.5 sm:inline-flex">
            Start Free
          </a>
          <button
            type="button"
            className="inline-flex rounded-md p-2 text-brand-navy hover:bg-brand-soft xl:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-brand-line bg-white xl:hidden">
          <div className="site-shell space-y-1 py-4">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-brand-navy"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 border-t border-brand-line pt-4">
              <a href="#login" className="btn-secondary" onClick={() => setMobileOpen(false)}>
                Login
              </a>
              <a href="#demo" className="btn-secondary" onClick={() => setMobileOpen(false)}>
                Book a Demo
              </a>
              <a href="#trial" className="btn-primary" onClick={() => setMobileOpen(false)}>
                Start Free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
