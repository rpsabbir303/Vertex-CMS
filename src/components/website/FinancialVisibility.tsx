import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { FinancialDashboard } from "./mockups/MarketingMockups";

export function FinancialVisibility() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,110,245,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(20,110,245,0.9) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="site-shell relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <FinancialDashboard />
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <p className="eyebrow text-brand-orange">Financial Visibility</p>
          <h2 className="display-title mt-4 text-3xl text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            Know Where Your Projects Stand — Financially
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            Move beyond spreadsheets and disconnected accounting tools with real-time visibility into
            budget, committed cost, actual cost, billing, cash flow, and project performance.
          </p>
          <Link
            href="/services#financial-control"
            className="btn-primary mt-8 inline-flex"
          >
            Explore Financial Control
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
