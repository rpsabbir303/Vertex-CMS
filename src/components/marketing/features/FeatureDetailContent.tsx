import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import {
  featureAreaPath,
  getFeatureAreaBySlug,
  type FeatureAreaDetail,
} from "@/lib/marketing/features/featureAreas";
import { categoryNavHref } from "@/lib/marketing/features/categories";
import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import { FeatureProductPreview } from "./FeatureProductPreview";

function RelatedFeatures({ feature }: { feature: FeatureAreaDetail }) {
  const related = feature.relatedSlugs
    .map((slug) => getFeatureAreaBySlug(slug))
    .filter((item): item is FeatureAreaDetail => !!item);

  if (!related.length) return null;

  return (
    <section className="border-b border-brand-line bg-[#FAFBFD]">
      <div className="site-shell section-spacing">
        <Reveal>
          <p className="eyebrow">Connected workflows</p>
          <h2 className="display-title mt-3 text-2xl sm:text-3xl">Works with your project workflows</h2>
          <p className="mt-3 max-w-2xl text-[15px] text-brand-muted">
            {feature.label} stays connected to related feature areas in Vertex CMS.
          </p>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <li key={item.slug}>
              <Link
                href={featureAreaPath(item.slug)}
                className="block rounded-lg border border-brand-line bg-white px-4 py-4 transition hover:border-brand-navy/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
                  {item.moduleTitle}
                </p>
                <p className="mt-2 text-[15px] font-semibold text-brand-navy">{item.label}</p>
                <p className="mt-2 text-[12px] leading-relaxed text-brand-muted line-clamp-2">
                  {item.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-brand-orange">
                  Explore {item.label}
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FeatureDetailContent({ feature }: { feature: FeatureAreaDetail }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Features", href: ROUTES.features },
          { label: feature.moduleTitle, href: categoryNavHref(feature.moduleSectionId) },
          { label: feature.label },
        ]}
      />

      <section className="border-b border-brand-line bg-[#F7F9FC]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{feature.moduleTitle}</p>
            <h1 className="display-title mt-3 text-4xl sm:text-5xl">{feature.label}</h1>
            <p className="mt-5 text-lg font-medium leading-snug text-brand-navy sm:text-xl">
              {feature.heroTagline}
            </p>
            <p className="body-copy mt-4 max-w-2xl">{feature.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`${ROUTES.features}#features-library`} className="btn-secondary">
                Explore Feature Library
              </Link>
              <Link href={CTAS.demo.href} className="btn-primary">
                {CTAS.demo.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={80} className="mt-12 max-w-5xl">
            <div
              className={
                "overflow-hidden rounded-xl border shadow-soft " +
                (feature.dark ? "border-white/10 bg-[#061525]" : "border-brand-line bg-white")
              }
            >
              <FeatureProductPreview
                preview={feature.preview}
                dark={feature.dark}
                className="min-h-[280px] border-0 bg-transparent sm:min-h-[360px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <Reveal>
              <h2 className="display-title text-2xl sm:text-3xl">Key capabilities</h2>
              <ul className="mt-6 space-y-2">
                {feature.capabilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-brand-line bg-[#FAFBFD] px-4 py-3 text-[14px] text-brand-navy"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={60}>
              <h2 className="display-title text-2xl sm:text-3xl">How it works</h2>
              <ol className="mt-6 space-y-3">
                {feature.howItWorks.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-line bg-white font-mono text-[11px] font-bold text-brand-orange">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 text-[14px] leading-relaxed text-brand-muted">{step}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <Reveal delay={90} className="mt-12 rounded-xl border border-brand-line bg-[#FAFBFD] p-6 sm:p-8">
            <h2 className="display-title text-xl sm:text-2xl">Outcomes</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {feature.outcomes.map((item) => (
                <li key={item} className="rounded-lg border border-brand-line bg-white px-4 py-4 text-[13px] leading-relaxed text-brand-navy">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <RelatedFeatures feature={feature} />

      <section className="bg-brand-navy">
        <div className="site-shell section-spacing">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="display-title-light text-3xl sm:text-4xl">See {feature.label} in the full platform.</h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">
              Explore the complete Feature Library or book a demo to see how {feature.label} connects across
              Vertex CMS.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={`${ROUTES.features}#features-library`} className="btn-primary w-full sm:w-auto">
                Explore Feature Library
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={CTAS.demo.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 sm:w-auto"
              >
                Book a Demo
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
