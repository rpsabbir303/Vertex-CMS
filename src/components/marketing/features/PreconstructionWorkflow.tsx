import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { preconstructionCategory } from "@/lib/marketing/features/categories";
import { ROUTES } from "@/lib/marketing/navigation";

const STEP_HREFS = [
  `${ROUTES.features}/crm`,
  `${ROUTES.features}/estimating`,
  `${ROUTES.features}/quantity-takeoff`,
  `${ROUTES.features}/bid-management`,
  `${ROUTES.features}/bid-management`,
  `${ROUTES.features}/projects`,
] as const;

export function PreconstructionWorkflow() {
  const { workflow } = preconstructionCategory;

  return (
    <section className="border-b border-brand-line bg-brand-navy">
      <div className="site-shell section-spacing">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
            Connected workflow
          </p>
          <h2 className="display-title-light mt-3 text-3xl sm:text-4xl">{workflow.headline}</h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-300">
            {workflow.supporting}
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-12">
          <div className="relative mx-auto max-w-xl overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] p-6 sm:p-8 lg:max-w-none">
            <ol className="grid gap-3 lg:grid-cols-6 lg:gap-3">
              {workflow.steps.map((step, index) => (
                <li key={step} className="relative flex flex-col items-center lg:block">
                  <Link
                    href={STEP_HREFS[index]}
                    className="group flex w-full flex-col items-center rounded-xl border border-white/15 bg-[#061525] px-3 py-4 text-center transition hover:border-brand-orange/50 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 lg:items-start lg:text-left"
                  >
                    <span className="font-mono text-[10px] font-bold text-brand-orange">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-2 text-[13px] font-semibold text-white transition group-hover:text-brand-orange">
                      {step}
                    </span>
                  </Link>
                  {index < workflow.steps.length - 1 ? (
                    <span className="my-1 text-brand-orange/70 lg:hidden" aria-hidden="true">
                      ↓
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
