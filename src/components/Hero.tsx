import { ArrowRight } from "./Icons";
import { PlanMockup } from "./cms/PlanMockup";
import { Reveal } from "./Reveal";

const PILLARS = [
  { href: "#plan", label: "Plan" },
  { href: "#control", label: "Control" },
  { href: "#build", label: "Build" },
  { href: "#protect", label: "Protect" },
  { href: "#connect", label: "Connect" },
  { href: "#understand", label: "Understand" },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line bg-brand-soft">
      <div className="site-shell grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Vertex CMS · Construction Management</p>
          <h1 className="display-title mt-5 text-4xl sm:text-5xl lg:text-[3.35rem] lg:leading-[1.05]">
            Run construction with complete control.
          </h1>
          <p className="body-copy mt-6 max-w-md">
            Vertex CMS connects planning, financials, field operations, safety, documents, teams, and
            AI intelligence in one construction system built for modern contractors.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#trial" className="btn-primary">
              Start Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#demo" className="btn-secondary">
              Book a Demo
            </a>
          </div>

          <nav className="mt-10 flex flex-wrap gap-x-4 gap-y-2 border-t border-brand-line pt-6" aria-label="Product areas">
            {PILLARS.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="text-sm font-semibold text-brand-navy transition hover:text-brand-blue"
              >
                {p.label}
              </a>
            ))}
          </nav>
        </Reveal>

        <Reveal delay={100} className="min-w-0 lg:col-span-7">
          <div className="overflow-x-auto rounded-2xl shadow-product">
            <div className="min-w-[520px] sm:min-w-0">
              <PlanMockup />
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-brand-muted sm:text-left">
            Product preview · Project portfolio & preconstruction
          </p>
        </Reveal>
      </div>
    </section>
  );
}
