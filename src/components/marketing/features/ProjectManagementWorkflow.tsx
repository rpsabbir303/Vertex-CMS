import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { projectManagementCategory } from "@/lib/marketing/features/categories";

export function ProjectManagementWorkflow() {
  const { workflow } = projectManagementCategory;

  return (
    <section className="border-b border-brand-line bg-brand-navy">
      <div className="site-shell py-14 sm:py-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
            Connected workflow
          </p>
          <h2 className="display-title-light mt-3 text-2xl sm:text-3xl">{workflow.headline}</h2>
          <p className="mx-auto mt-3 max-w-lg text-[14px] leading-relaxed text-slate-300">
            {workflow.supporting}
          </p>
        </Reveal>

        <Reveal delay={70} className="mt-10">
          <ol className="mx-auto flex max-w-3xl flex-col items-stretch gap-2 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:flex-nowrap">
            {workflow.steps.map((step, index) => (
              <li key={step.label} className="flex items-center gap-2 sm:contents">
                <Link
                  href={step.href}
                  className="group flex w-full items-center justify-between rounded-xl border border-white/15 bg-[#061525] px-4 py-3.5 transition hover:border-brand-orange/45 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 sm:w-auto sm:min-w-[8.5rem] sm:flex-col sm:items-start lg:flex-1"
                >
                  <span className="font-mono text-[10px] font-bold text-brand-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13px] font-semibold text-white transition group-hover:text-brand-orange sm:mt-1.5">
                    {step.label}
                  </span>
                </Link>
                {index < workflow.steps.length - 1 ? (
                  <>
                    <span className="flex justify-center text-brand-orange/70 sm:hidden" aria-hidden="true">
                      ↓
                    </span>
                    <span
                      className="hidden px-0.5 text-brand-orange/70 sm:inline lg:px-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
