import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export function SecurityMeasure({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1120px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function SecurityPaper({
  children,
  className = "",
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return <div className={`${dark ? "security-paper-dark" : "security-paper"} ${className}`}>{children}</div>;
}

export function SecurityLimeButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-md bg-[#3FE844] px-5 py-2.5 text-[13px] font-semibold text-[#0D0D0D] transition hover:bg-[#35d13c]"
    >
      {children}
      <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  );
}

export function SecurityGhostButton({
  href,
  children,
  onDark = false,
}: {
  href: string;
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        onDark
          ? "inline-flex items-center gap-2 rounded-md border border-white/35 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:border-white hover:bg-white/10"
          : "inline-flex items-center gap-2 rounded-md border border-[#0D0D0D] px-5 py-2.5 text-[13px] font-semibold text-[#0D0D0D] transition hover:bg-[#0D0D0D] hover:text-white"
      }
    >
      {children}
    </Link>
  );
}

export function SecurityLiveEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#5C6560]">
      <span className="security-lime-dot inline-block h-1.5 w-1.5 rounded-full bg-[#3FE844]" aria-hidden="true" />
      {children}
    </p>
  );
}
