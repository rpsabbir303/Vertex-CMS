import Link from "next/link";
import { VertexLogo } from "@/components/Icons";
import { AUTH_PREVIEW_NOTICE } from "@/lib/auth/client";
import { ROUTES } from "@/lib/marketing/navigation";

type Props = {
  children: React.ReactNode;
  showPreviewNotice?: boolean;
};

export function TenantSetupShell({ children, showPreviewNotice = true }: Props) {
  return (
    <div className="min-h-screen bg-[#F7F9FC] text-brand-navy">
      <header className="border-b border-brand-line bg-white">
        <div className="site-shell flex h-16 items-center justify-between gap-4">
          <VertexLogo />
          <Link
            href={ROUTES.home}
            className="shrink-0 text-[13px] font-semibold text-brand-muted hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            Exit to website
          </Link>
        </div>
      </header>

      <main className="site-shell py-10 sm:py-16">
        {showPreviewNotice && (
          <div className="mb-4 rounded-lg border border-brand-blue/20 bg-brand-blue/5 px-3 py-2.5 text-[12px] leading-relaxed text-brand-navy/80">
            {AUTH_PREVIEW_NOTICE}
          </div>
        )}
        <div className="mx-auto max-w-xl rounded-2xl border border-brand-line bg-white p-6 shadow-soft sm:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
