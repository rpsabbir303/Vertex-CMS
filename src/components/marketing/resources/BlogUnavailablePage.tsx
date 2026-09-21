import Link from "next/link";

import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { ROUTES } from "@/lib/marketing/navigation";

/** Shown when a blog slug is missing, invalid, or the article is not published. */
export function BlogUnavailablePage() {
  return (
    <div className="bg-white text-brand-navy">
      <Breadcrumbs
        items={[
          { label: "Resources", href: ROUTES.resources },
          { label: "Blog", href: ROUTES.resourcesBlog },
          { label: "Article" },
        ]}
      />

      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell py-14 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Blog</p>
            <h1 className="mt-3 font-display text-[1.85rem] font-bold leading-tight tracking-tight text-brand-navy sm:text-[2.25rem]">
              This article is not available
            </h1>
            <p className="mt-5 border-l-2 border-brand-orange pl-4 text-[15px] leading-relaxed text-brand-muted">
              The article you requested could not be found, or it is not published for public reading yet.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={ROUTES.resourcesBlog} className="btn-primary w-full sm:w-auto">
                Back to Blog
              </Link>
              <Link href={ROUTES.resources} className="btn-secondary w-full sm:w-auto">
                Resource Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
