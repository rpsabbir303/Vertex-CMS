import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { getPreconstructionRelatedCategories } from "@/lib/marketing/features/categories";

export function PreconstructionRelated() {
  const relatedCategories = getPreconstructionRelatedCategories();

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal>
          <p className="eyebrow">Related features</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">
            Explore more VertexBuild capabilities
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-brand-muted">
            Preconstruction connects to project delivery, financials, field operations, and compliance across the
            platform.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedCategories.map((cat) => (
            <li key={cat.id}>
              <Link
                href={cat.href}
                className="group flex h-full flex-col border border-brand-line bg-[#FAFBFD] px-5 py-5 transition hover:border-brand-navy/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
              >
                <span className="font-mono text-[11px] font-bold text-brand-orange">{cat.number}</span>
                <span className="mt-2 text-[17px] font-semibold text-brand-navy">{cat.title}</span>
                <span className="mt-2 flex-1 text-[13px] leading-relaxed text-brand-muted">{cat.description}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange transition group-hover:text-brand-navy">
                  Explore {cat.title}
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
