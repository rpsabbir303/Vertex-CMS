import Link from "next/link";
import { VertexLogo } from "@/components/Icons";
import { ROUTES } from "@/lib/marketing/navigation";

type Props = {
  children: React.ReactNode;
  panelEyebrow: string;
  /** Text before the orange highlight */
  panelHeadlineLead: string;
  /** Final phrase highlighted in orange */
  panelHeadlineAccent: string;
  panelBody: string;
  benefits: string[];
};

/**
 * Split-screen conversion layout aligned with Login/Signup,
 * with a light-blue product panel for commercial lead flows.
 */
export function ConversionShell({
  children,
  panelEyebrow,
  panelHeadlineLead,
  panelHeadlineAccent,
  panelBody,
  benefits,
}: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F9FC] text-brand-navy lg:flex-row">
      <aside className="relative hidden w-[52%] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#E8F1FB] via-[#F2F7FC] to-[#DCE9F8] px-10 py-10 lg:flex xl:w-[55%] xl:px-14">
        <div
          className="pointer-events-none absolute -right-16 top-24 h-72 w-72 rounded-full bg-brand-blue/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-10 bottom-16 h-56 w-56 rounded-full bg-brand-orange/10 blur-3xl"
          aria-hidden="true"
        />

        <VertexLogo />

        <div className="relative max-w-lg">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">{panelEyebrow}</p>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand-navy xl:text-[2.75rem]">
            {panelHeadlineLead}{" "}
            <span className="text-brand-orange">{panelHeadlineAccent}</span>
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-brand-muted">{panelBody}</p>
          <ul className="mt-8 space-y-3">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14px] font-medium text-brand-navy">
                <span className="mt-0.5 text-brand-orange" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-4 shadow-soft backdrop-blur-sm">
            <div className="rounded-xl bg-brand-navy px-4 py-3">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Workspace</p>
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="h-16 rounded-lg bg-white/10" />
                <div className="h-16 rounded-lg bg-white/10" />
                <div className="h-16 rounded-lg bg-brand-orange/30" />
              </div>
              <div className="mt-2 h-8 rounded-lg bg-white/10" />
            </div>
          </div>
        </div>

        <p className="relative text-[12px] text-brand-muted">© Vertex Software</p>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-brand-line bg-white px-5 py-4 lg:hidden">
          <VertexLogo />
          <Link href={ROUTES.home} className="text-[13px] font-semibold text-brand-muted hover:text-brand-navy">
            Home
          </Link>
        </header>

        <div className="border-b border-brand-line/70 bg-gradient-to-br from-[#E8F1FB] to-[#F7F9FC] px-5 py-8 lg:hidden">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">{panelEyebrow}</p>
          <h1 className="mt-3 font-display text-2xl font-bold leading-tight text-brand-navy">
            {panelHeadlineLead} <span className="text-brand-orange">{panelHeadlineAccent}</span>
          </h1>
          <p className="mt-3 text-[14px] leading-relaxed text-brand-muted">{panelBody}</p>
        </div>

        <div className="flex flex-1 items-start justify-center px-5 py-8 sm:px-8 sm:py-12">
          <div className="w-full max-w-[520px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
