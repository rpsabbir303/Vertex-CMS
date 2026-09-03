"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight } from "@/components/Icons";
import {
  COMPANY_MEGA_MENU,
  CTAS,
  FEATURES_MEGA_MENU,
  RESOURCES_MEGA_MENU,
  ROUTES,
  SOLUTIONS_MEGA_MENU,
  type MegaMenuCategory,
  type NavMegaType,
} from "@/lib/marketing/navigation";
import { MegaMenuPreview } from "./MegaMenuPreview";
import { useMarketing } from "./MarketingProviders";

type Props = {
  type: NavMegaType;
  open: boolean;
  onClose: () => void;
};

const MENU_HEADERS: Record<Exclude<NavMegaType, false>, { eyebrow: string; subtitle: string }> = {
  features: {
    eyebrow: "Product",
    subtitle: "Explore the connected construction platform.",
  },
  solutions: {
    eyebrow: "Solutions",
    subtitle: "Solutions designed around the way construction teams work.",
  },
  resources: {
    eyebrow: "Resources",
    subtitle: "Guides, customer stories, and platform exploration.",
  },
  company: {
    eyebrow: "Company",
    subtitle: "Learn more about Vertex CMS and our team.",
  },
};

function ChevronRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuShell({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div
      className="mega-menu-enter overflow-hidden rounded-[20px] border border-brand-line/90 bg-white shadow-[0_24px_64px_-28px_rgba(8,35,63,0.28)]"
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="false"
    >
      {children}
      {footer}
    </div>
  );
}

function MenuHeader({ type }: { type: Exclude<NavMegaType, false> }) {
  const header = MENU_HEADERS[type];
  return (
    <div className="border-b border-brand-line/70 px-5 py-4 sm:px-6">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-blue">{header.eyebrow}</p>
      <p className="mt-1 text-[13px] text-brand-muted">{header.subtitle}</p>
    </div>
  );
}

function CategoryNav({
  categories,
  activeId,
  onSelect,
  listId,
}: {
  categories: MegaMenuCategory[];
  activeId: string;
  onSelect: (id: string) => void;
  listId: string;
}) {
  return (
    <ul className="space-y-0.5" role="list" id={listId}>
      {categories.map((cat) => {
        const isActive = cat.id === activeId;
        return (
          <li key={cat.id}>
            <button
              type="button"
              className={`flex w-full min-h-[44px] items-center justify-between gap-2 rounded-lg px-3.5 py-2.5 text-left text-[13px] font-semibold transition ${
                isActive
                  ? "bg-brand-blue/[0.07] text-brand-navy ring-1 ring-brand-blue/10"
                  : "text-brand-muted hover:bg-brand-soft/80 hover:text-brand-navy"
              }`}
              onMouseEnter={() => onSelect(cat.id)}
              onFocus={() => onSelect(cat.id)}
              onClick={() => onSelect(cat.id)}
              aria-current={isActive ? "true" : undefined}
            >
              <span>{cat.title}</span>
              <ChevronRight className={isActive ? "text-brand-orange" : "text-brand-muted/50"} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function FeatureLinks({
  category,
  onClose,
  contentId,
}: {
  category: MegaMenuCategory;
  onClose: () => void;
  contentId: string;
}) {
  return (
    <div key={category.id} id={contentId} className="mega-content-fade">
      <Link
        href={category.href}
        className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-orange hover:underline"
        onClick={onClose}
      >
        {category.title}
      </Link>
      <ul className="mt-4 space-y-1" role="list">
        {category.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group flex min-h-[36px] items-center justify-between rounded-md px-1 py-1.5 text-[13px] text-brand-muted transition hover:bg-brand-soft/60 hover:text-brand-navy"
              onClick={onClose}
            >
              <span>{link.label}</span>
              <ChevronRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LinkGroupColumn({
  group,
  onClose,
}: {
  group: MegaMenuCategory;
  onClose: () => void;
}) {
  return (
    <div className="rounded-xl border border-brand-line/60 bg-[#FAFAF8]/60 p-4 sm:p-5">
      <Link
        href={group.href}
        className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-orange hover:underline"
        onClick={onClose}
      >
        {group.title}
      </Link>
      <ul className="mt-3 space-y-1" role="list">
        {group.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="flex min-h-[40px] items-center rounded-md px-1 text-[13px] text-brand-muted transition hover:bg-white hover:text-brand-navy"
              onClick={onClose}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeaturesMegaPanel({ onClose }: { onClose: () => void }) {
  const { t } = useMarketing();
  const contentId = useId();
  const [activeId, setActiveId] = useState(FEATURES_MEGA_MENU[0]?.id ?? "");
  const active = FEATURES_MEGA_MENU.find((c) => c.id === activeId) ?? FEATURES_MEGA_MENU[0];

  if (!active) return null;

  return (
    <MenuShell
      footer={
        <div className="flex flex-col gap-3 border-t border-brand-line/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <Link
              href={CTAS.exploreFeatures.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition hover:gap-3"
              onClick={onClose}
            >
              {t.header.exploreAllFeatures}
            </Link>
            <p className="mt-1 text-[12px] text-brand-muted">View the complete Vertex CMS platform.</p>
          </div>
          <Link href={CTAS.exploreFeatures.href} className="btn-secondary shrink-0 text-[12px]" onClick={onClose}>
            Explore Features
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      }
    >
      <MenuHeader type="features" />
      <div className="grid lg:grid-cols-12">
        <div className="border-b border-brand-line/70 bg-brand-soft/40 p-3 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-4">
          <CategoryNav
            categories={FEATURES_MEGA_MENU}
            activeId={activeId}
            onSelect={setActiveId}
            listId={`${contentId}-categories`}
          />
        </div>

        <div className="border-b border-brand-line/70 p-5 sm:p-6 lg:col-span-4 lg:border-b-0 lg:border-r">
          <FeatureLinks category={active} onClose={onClose} contentId={`${contentId}-links`} />
        </div>

        <div className="flex flex-col bg-[#FAFAF8] p-4 sm:p-5 lg:col-span-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-muted">Product preview</p>
          <div className="mt-3 flex-1">
            <MegaMenuPreview categoryId={active.id} className="min-h-[180px] lg:min-h-[220px]" />
          </div>
          <Link
            href={active.href}
            className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-blue transition hover:gap-2.5 hover:text-brand-navy"
            onClick={onClose}
          >
            Explore {active.title.split(" & ")[0]}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </MenuShell>
  );
}

function SolutionsMegaPanel({ onClose }: { onClose: () => void }) {
  return (
    <MenuShell
      footer={
        <div className="border-t border-brand-line/70 px-5 py-4 sm:px-6">
          <Link
            href={ROUTES.solutions}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition hover:gap-3"
            onClick={onClose}
          >
            View all solutions
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      }
    >
      <MenuHeader type="solutions" />
      <div className="grid gap-4 p-5 sm:grid-cols-2 sm:gap-5 sm:p-6">
        {SOLUTIONS_MEGA_MENU.map((group) => (
          <LinkGroupColumn key={group.id} group={group} onClose={onClose} />
        ))}
      </div>
    </MenuShell>
  );
}

function ResourcesMegaPanel({ onClose }: { onClose: () => void }) {
  return (
    <MenuShell
      footer={
        <div className="border-t border-brand-line/70 px-5 py-4 sm:px-6">
          <Link
            href={ROUTES.resources}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition hover:gap-3"
            onClick={onClose}
          >
            Browse all resources
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      }
    >
      <MenuHeader type="resources" />
      <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 sm:p-6">
        {RESOURCES_MEGA_MENU.map((group) => (
          <LinkGroupColumn key={group.id} group={group} onClose={onClose} />
        ))}
      </div>
    </MenuShell>
  );
}

function CompanyMegaPanel({ onClose }: { onClose: () => void }) {
  const group = COMPANY_MEGA_MENU[0];
  if (!group) return null;

  return (
    <MenuShell>
      <MenuHeader type="company" />
      <div className="grid gap-2 p-5 sm:grid-cols-2 sm:p-6">
        {group.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="flex min-h-[48px] items-center justify-between rounded-xl border border-brand-line/60 bg-[#FAFAF8]/60 px-4 text-[14px] font-medium text-brand-navy transition hover:border-brand-blue/20 hover:bg-white"
            onClick={onClose}
          >
            {link.label}
            <ChevronRight className="h-4 w-4 text-brand-muted/60" />
          </Link>
        ))}
      </div>
    </MenuShell>
  );
}

export function MegaMenu({ type, open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !type) return null;

  return (
    <>
      <button
        type="button"
        className="fixed inset-x-0 bottom-0 top-14 z-40 hidden cursor-default bg-brand-navy/[0.04] xl:top-16 xl:block"
        aria-label="Close menu"
        tabIndex={-1}
        onClick={onClose}
      />

      <div
        ref={panelRef}
        className="absolute left-0 right-0 top-full z-50 hidden pt-2 xl:block"
        role="region"
        aria-label="Submenu"
      >
        <div className="mx-auto w-[calc(100%-32px)] max-w-[1240px] px-0">
          {type === "features" && <FeaturesMegaPanel onClose={onClose} />}
          {type === "solutions" && <SolutionsMegaPanel onClose={onClose} />}
          {type === "resources" && <ResourcesMegaPanel onClose={onClose} />}
          {type === "company" && <CompanyMegaPanel onClose={onClose} />}
        </div>
      </div>
    </>
  );
}
