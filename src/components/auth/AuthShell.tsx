import Link from "next/link";
import { VertexLogo } from "@/components/Icons";
import { AUTH_PREVIEW_NOTICE } from "@/lib/auth/client";
import { ROUTES } from "@/lib/marketing/navigation";

type Props = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  panelTitle?: string;
  panelBody?: string;
};

export function AuthShell({
  children,
  title,
  subtitle,
  panelTitle = "Construction runs better when everything connects.",
  panelBody = "Vertex CMS brings projects, financials, field operations, and intelligence into one operating system.",
}: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F9FC] text-brand-navy lg:flex-row">
      <aside className="relative hidden w-[42%] flex-col justify-between overflow-hidden bg-brand-navy px-10 py-10 text-white lg:flex xl:px-14">
        <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-10 bottom-10 h-48 w-48 rounded-full bg-brand-orange/15 blur-3xl" aria-hidden="true" />
        <VertexLogo light />
        <div className="relative max-w-md">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">Vertex CMS</p>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight xl:text-4xl">{panelTitle}</h1>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{panelBody}</p>
        </div>
        <p className="relative text-[12px] text-slate-500">© Vertex Software</p>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-brand-line bg-white px-5 py-4 lg:hidden">
          <VertexLogo />
          <Link href={ROUTES.home} className="text-[13px] font-semibold text-brand-muted hover:text-brand-navy">
            Home
          </Link>
        </header>

        <div className="flex flex-1 items-start justify-center px-5 py-10 sm:px-8 sm:py-14">
          <div className="w-full max-w-[440px]">
            <div className="mb-4 rounded-lg border border-brand-blue/20 bg-brand-blue/5 px-3 py-2.5 text-[12px] leading-relaxed text-brand-navy/80">
              {AUTH_PREVIEW_NOTICE}
            </div>
            <div className="rounded-2xl border border-brand-line bg-white p-6 shadow-soft sm:p-8">
              <div className="mb-6 hidden lg:block">
                <Link href={ROUTES.home} className="text-[12px] font-semibold text-brand-muted hover:text-brand-navy">
                  ← Back to website
                </Link>
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-brand-navy sm:text-[1.75rem]">{title}</h2>
              {subtitle && <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">{subtitle}</p>}
              <div className="mt-7">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
