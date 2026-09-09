import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { projectManagementCategory } from "@/lib/marketing/features/categories";

export function ProjectManagementPlanTeaser() {
  const { plan } = projectManagementCategory;

  return (
    <section className="border-b border-brand-line bg-[#FAFBFD]">
      <div className="site-shell py-12 sm:py-14">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="max-w-xl">
            <p className="eyebrow">Plan availability</p>
            <h2 className="display-title mt-2 text-2xl sm:text-3xl">{plan.headline}</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-brand-muted">{plan.supporting}</p>
          </div>
          <Link href={plan.cta.href} className="btn-primary shrink-0">
            {plan.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
