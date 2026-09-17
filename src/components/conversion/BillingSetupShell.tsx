import Link from "next/link";
import { VertexLogo } from "@/components/Icons";
import { ROUTES } from "@/lib/marketing/navigation";

type Props = {
  children: React.ReactNode;
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function BillingSetupShell({ children, eyebrow, title, subtitle }: Props) {
  return (
    <div className="min-h-screen bg-[#FAFBFC] text-brand-navy">
      <header className="border-b border-brand-line bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <VertexLogo />
          <Link
            href={ROUTES.home}
            className="shrink-0 text-[13px] font-semibold text-brand-muted transition hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          >
            Back to website
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1280px] px-5 py-8 sm:px-8 sm:py-10 lg:py-12">
        {eyebrow ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{eyebrow}</p>
        ) : null}
        <h1
          className={`font-display text-[1.65rem] font-bold leading-tight tracking-tight text-brand-navy sm:text-[1.875rem] ${eyebrow ? "mt-3" : ""}`}
        >
          {title}
        </h1>
        {subtitle ? <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-brand-muted">{subtitle}</p> : null}
        <div className="mt-8 min-w-0">{children}</div>
      </main>
    </div>
  );
}
