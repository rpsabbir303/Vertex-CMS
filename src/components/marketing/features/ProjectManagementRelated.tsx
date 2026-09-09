import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { getProjectManagementRelatedCategories } from "@/lib/marketing/features/categories";

export function ProjectManagementRelated() {
  const relatedCategories = getProjectManagementRelatedCategories();

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell py-12 sm:py-14">
        <Reveal>
          <p className="eyebrow">Related capabilities</p>
          <h2 className="display-title mt-2 text-2xl sm:text-3xl">Continue exploring Vertex CMS</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-brand-muted">
            Move to adjacent capability categories in the Features journey.
          </p>
        </Reveal>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {relatedCategories.map((cat) => (
            <li key={cat.id}>
              <Link
                href={cat.href}
                className="group flex h-full flex-col border border-brand-line bg-[#FAFBFD] px-4 py-4 transition hover:border-brand-navy/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
              >
                <span className="text-[15px] font-semibold text-brand-navy">{cat.title}</span>
                <span className="mt-1.5 flex-1 text-[12px] leading-relaxed text-brand-muted line-clamp-2">
                  {cat.description}
                </span>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-orange transition group-hover:text-brand-navy">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
