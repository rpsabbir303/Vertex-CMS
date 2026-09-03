import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { CTAS } from "@/lib/marketing/navigation";

export function HomeFinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <div className="home-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[20%] top-[30%] h-40 w-40 rounded-full bg-brand-orange/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-shell relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-8 flex max-w-md flex-wrap items-center justify-center gap-2" aria-hidden="true">
            {["Projects", "Financials", "Field", "People", "AI"].map((n) => (
              <span key={n} className="home-node border-brand-blue/25 text-slate-200">
                {n}
              </span>
            ))}
          </div>
          <h2 className="home-display text-4xl leading-[1.05] sm:text-5xl lg:text-[3.75rem]">
            Everything connected.
            <span className="block text-slate-300">Nothing lost.</span>
          </h2>
          <p className="home-body mx-auto mt-5 max-w-xl">
            Bring projects, people, money and intelligence together with Vertex CMS.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={CTAS.trial.href} className="btn-home-primary">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={CTAS.demo.href} className="btn-home-secondary">
              Book a Demo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
