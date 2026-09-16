import type { ReactNode } from "react";
import { SECURITY_STATUS_LABEL, type SecurityStatus } from "@/lib/marketing/security/content";

/**
 * Horizontal inset for Data Protection outer shell.
 * xl+: 150px each side (viewport − 300px content). Smaller breakpoints use responsive padding.
 * Uses padding (not margin + fixed width) to avoid horizontal overflow.
 */
export const SECURITY_EDITORIAL_GUTTER_CLASS =
  "box-border w-full min-w-0 max-w-full px-5 sm:px-6 md:px-10 lg:px-12 xl:px-[150px]";

export function SecurityEditorialContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`${SECURITY_EDITORIAL_GUTTER_CLASS} ${className}`}>{children}</div>;
}

export function SecurityEditorialFrame({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-w-0 bg-white">
      <SecurityEditorialContainer>
        <div className="min-w-0 border border-brand-line bg-white">{children}</div>
      </SecurityEditorialContainer>
    </div>
  );
}

export function SecurityEditorialEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex min-w-0 items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
      <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SecurityEditorialDivider({ orientation = "horizontal" }: { orientation?: "horizontal" | "vertical" }) {
  if (orientation === "vertical") {
    return <div role="presentation" className="hidden w-px shrink-0 self-stretch bg-brand-line sm:block" />;
  }
  return <div role="presentation" className="h-px w-full shrink-0 bg-brand-line" />;
}

export function SecurityEditorialStatus({ status }: { status: SecurityStatus }) {
  const styles: Record<SecurityStatus, string> = {
    requirement: "border-brand-line bg-white text-brand-navy",
    target: "border-brand-orange/30 bg-brand-soft text-brand-navy",
    capability: "border-brand-line bg-brand-soft text-brand-muted",
    product: "border-brand-line bg-brand-soft text-brand-muted",
  };
  const label = SECURITY_STATUS_LABEL[status];
  if (!label) return null;
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-sm border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${styles[status]}`}
    >
      {label}
    </span>
  );
}
