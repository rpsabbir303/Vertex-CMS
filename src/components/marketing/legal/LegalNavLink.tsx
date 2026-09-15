"use client";

import Link from "next/link";
import type { LegalDocId } from "@/lib/marketing/legal/content";

export type LegalNavLinkVariant = "sidebar" | "pill" | "footer";

type Props = {
  href: string;
  label: string;
  active: boolean;
  variant: LegalNavLinkVariant;
};

const variantClass: Record<LegalNavLinkVariant, { base: string; active: string; idle: string }> = {
  sidebar: {
    base: "-ml-px block border-l-2 py-2 pl-4 text-[14px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30",
    active: "border-brand-orange font-semibold text-brand-navy",
    idle: "border-transparent text-brand-muted hover:border-brand-line hover:text-brand-navy",
  },
  pill: {
    base: "inline-flex max-w-[16rem] truncate rounded-md border px-3.5 py-2 text-[13px] font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30",
    active: "border-brand-navy bg-brand-navy text-white",
    idle: "border-brand-line bg-white text-brand-muted hover:border-brand-navy/25 hover:text-brand-navy",
  },
  footer: {
    base: "font-medium underline-offset-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30",
    active: "font-semibold text-brand-navy",
    idle: "text-brand-muted hover:text-brand-orange hover:underline",
  },
};

export function LegalNavLink({ href, label, active, variant }: Props) {
  const styles = variantClass[variant];

  if (active && variant === "footer") {
    return (
      <span className={`${styles.base} ${styles.active}`} aria-current="page">
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`${styles.base} ${active ? styles.active : styles.idle}`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export type LegalNavItem = {
  id: LegalDocId;
  href: string;
  label: string;
};
