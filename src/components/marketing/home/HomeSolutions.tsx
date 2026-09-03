import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { ROUTES } from "@/lib/marketing/navigation";

const TRADE = [
  { label: "General Contractors", href: `${ROUTES.solutions}#general-contractors` },
  { label: "Subcontractors", href: `${ROUTES.solutions}#subcontractors` },
] as const;

const TYPE = [
  { label: "Commercial", href: `${ROUTES.solutions}#commercial` },
  { label: "Residential", href: `${ROUTES.solutions}#residential` },
  { label: "Civil", href: `${ROUTES.solutions}#civil` },
] as const;

export function HomeSolutions() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 py-20 sm:py-24 lg:py-28">
      <div className="site-shell">
        <Reveal className="max-w-3xl">
          <p className="home-label">Solutions</p>
          <h2 className="home-display mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.25rem]">
            Built for the way
            <span className="block text-slate-300">construction actually works.</span>
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="home-panel p-5 sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue">By Trade</p>
            <ul className="mt-4 space-y-2">
              {TRADE.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex min-h-[52px] items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 text-[15px] font-medium text-white transition hover:border-brand-blue/30"
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4 text-slate-500 transition group-hover:text-brand-orange" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="home-panel p-5 sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-orange">By Project Type</p>
            <ul className="mt-4 space-y-2">
              {TYPE.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex min-h-[52px] items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 text-[15px] font-medium text-white transition hover:border-brand-orange/30"
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4 text-slate-500 transition group-hover:text-brand-orange" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
