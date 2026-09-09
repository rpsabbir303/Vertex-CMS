import Link from "next/link";
import { ArrowRight, CheckIcon } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { featureCategoryPath } from "@/lib/marketing/features/categories";
import { featureAreaPath, getFeatureAreaBySlug } from "@/lib/marketing/features/featureAreas";
import { projectsFeatureDetail } from "@/lib/marketing/features/projectsDetail";
import { ROUTES } from "@/lib/marketing/navigation";
import { FeatureProductPreview } from "./FeatureProductPreview";
import type { PreviewKey } from "@/lib/marketing/features/register";

function PreviewStage({
  preview,
  label,
  className = "",
}: {
  preview: PreviewKey;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4] p-4 sm:p-5 " +
        className
      }
    >
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
        Vertex CMS · {label}
      </p>
      <FeatureProductPreview preview={preview} framed className="min-h-[240px] sm:min-h-[300px] lg:min-h-[340px]" />
    </div>
  );
}

function AlternatingBlock({
  id,
  eyebrow,
  headline,
  body,
  points,
  preview,
  previewLabel,
  reverse = false,
  surface = "white",
}: {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
  points?: readonly string[];
  preview: PreviewKey;
  previewLabel: string;
  reverse?: boolean;
  surface?: "white" | "soft" | "mist";
}) {
  const wrap =
    surface === "soft" ? "bg-[#F7F8FA]" : surface === "mist" ? "bg-[#EEF2F7]" : "bg-white";

  return (
    <section id={id} className={"scroll-mt-28 border-b border-brand-line/60 " + wrap}>
      <div className="site-shell section-spacing">
        <div
          className={
            "grid items-center gap-10 lg:grid-cols-2 lg:gap-14 " +
            (reverse ? "lg:[&>*:first-child]:order-2" : "")
          }
        >
          <Reveal>
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {headline}
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{body}</p>
            {points?.length ? (
              <ul className="mt-6 space-y-2.5">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[14px] text-brand-navy">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
          </Reveal>
          <Reveal delay={80}>
            <PreviewStage preview={preview} label={previewLabel} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ProjectsFeatureDetailPage() {
  const d = projectsFeatureDetail;
  const related = d.related.slugs
    .map((slug) => getFeatureAreaBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => !!item);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Features", href: ROUTES.features },
          { label: "Project Management", href: featureCategoryPath("project-management") },
          { label: "Projects" },
        ]}
      />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-brand-line/70 bg-[#F7F9FC]">
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(8,35,63,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,35,63,0.04) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
          aria-hidden="true"
        />
        <div className="site-shell relative py-14 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
            <Reveal>
              <p className="eyebrow">{d.hero.eyebrow}</p>
              <h1 className="display-title mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.15rem]">
                {d.hero.headline}
              </h1>
              <p className="body-copy mt-5 max-w-xl">{d.hero.supporting}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={d.hero.primary.href} className="btn-primary w-full sm:w-auto">
                  {d.hero.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={d.hero.secondary.href}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brand-line bg-white px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy transition hover:border-brand-navy/25 sm:w-auto"
                >
                  {d.hero.secondary.label}
                </Link>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <PreviewStage preview={d.hero.preview} label="Project workspace" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Project workspace */}
      <section id="project-workspace" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                The project workspace
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.workspace.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.workspace.body}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {d.workspace.highlights.map((item) => (
                  <li key={item.label} className="border-t border-brand-line pt-3">
                    <p className="text-[14px] font-semibold text-brand-navy">{item.label}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-brand-muted">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.workspace.preview} label="Workspace overview" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Create projects */}
      <AlternatingBlock
        id="create-project"
        eyebrow="Project creation"
        headline={d.create.headline}
        body={d.create.body}
        points={d.create.fields}
        preview={d.create.preview}
        previewLabel="Project setup"
        reverse={false}
        surface="soft"
      />

      {/* 4. Lifecycle */}
      <section id="project-lifecycle" className="scroll-mt-28 border-b border-brand-line bg-brand-navy">
        <div className="site-shell section-spacing">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              Project status
            </p>
            <h2 className="display-title-light mt-3 text-3xl sm:text-4xl">{d.lifecycle.headline}</h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-300">
              {d.lifecycle.body}
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-12">
            <ol className="relative mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-2 lg:flex-nowrap lg:gap-0">
              {d.lifecycle.statuses.map((status, index) => {
                const active = status === "Active";
                return (
                  <li key={status} className="flex items-center sm:contents lg:flex lg:flex-1">
                    <div
                      className={
                        "w-full rounded-xl border px-3 py-3 text-center sm:w-auto sm:min-w-[7.5rem] lg:w-full " +
                        (active
                          ? "border-brand-orange/50 bg-brand-orange/10"
                          : "border-white/15 bg-white/[0.04]")
                      }
                    >
                      <span className="block font-mono text-[9px] font-bold text-brand-orange">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={
                          "mt-1 block text-[12px] font-semibold leading-snug " +
                          (active ? "text-brand-orange" : "text-white")
                        }
                      >
                        {status}
                      </span>
                    </div>
                    {index < d.lifecycle.statuses.length - 1 ? (
                      <span
                        className="hidden px-1 text-brand-orange/60 lg:inline"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 5. Dashboard */}
      <AlternatingBlock
        id="project-dashboard"
        eyebrow="Project dashboard"
        headline={d.dashboard.headline}
        body={d.dashboard.body}
        points={d.dashboard.indicators}
        preview={d.dashboard.preview}
        previewLabel="Project dashboard"
        reverse
        surface="white"
      />

      {/* 6. Financial */}
      <AlternatingBlock
        id="project-financials"
        eyebrow="Financial summary"
        headline={d.financial.headline}
        body={d.financial.body}
        points={d.financial.fields}
        preview={d.financial.preview}
        previewLabel="Financial summary"
        reverse={false}
        surface="mist"
      />

      {/* 7. Phases & team */}
      <AlternatingBlock
        id="phases-team"
        eyebrow="Phases & members"
        headline={d.phases.headline}
        body={d.phases.body}
        points={d.phases.points}
        preview={d.phases.preview}
        previewLabel="Phases & team"
        reverse
        surface="soft"
      />

      {/* 8. Project switcher */}
      <AlternatingBlock
        id="project-switcher"
        eyebrow="Project switcher"
        headline={d.switcher.headline}
        body={d.switcher.body}
        preview={d.switcher.preview}
        previewLabel="Project switcher"
        reverse={false}
        surface="white"
      />

      {/* 9. Connected workflow */}
      <section className="border-b border-brand-line bg-brand-navy">
        <div className="site-shell section-spacing">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              Connected project workflow
            </p>
            <h2 className="display-title-light mt-3 text-3xl sm:text-4xl">{d.workflow.headline}</h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-300">
              {d.workflow.supporting}
            </p>
          </Reveal>
          <Reveal delay={80} className="mt-12">
            <ol className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2 lg:max-w-none lg:grid-cols-6">
              {d.workflow.steps.map((step, index) => (
                <li key={step}>
                  <div className="flex h-full flex-col rounded-xl border border-white/15 bg-[#061525] px-3.5 py-4">
                    <span className="font-mono text-[10px] font-bold text-brand-orange">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-2 text-[13px] font-semibold leading-snug text-white">{step}</span>
                    {index < d.workflow.steps.length - 1 ? (
                      <span className="mt-3 text-[11px] text-brand-orange/70 lg:hidden" aria-hidden="true">
                        ↓ next
                      </span>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <Reveal>
            <p className="eyebrow">{d.related.eyebrow}</p>
            <h2 className="display-title mt-3 text-2xl sm:text-3xl">{d.related.headline}</h2>
            <Link
              href={d.related.categoryHref}
              className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange hover:text-brand-navy"
            >
              View {d.related.categoryLabel}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={featureAreaPath(item.slug)}
                  className="group flex h-full flex-col border border-brand-line bg-white px-4 py-4 transition hover:border-brand-navy/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
                >
                  <p className="text-[15px] font-semibold text-brand-navy">{item.label}</p>
                  <p className="mt-2 flex-1 text-[12px] leading-relaxed text-brand-muted line-clamp-2">
                    {item.description}
                  </p>
                  <span className="mt-3 text-[12px] font-semibold text-brand-orange group-hover:text-brand-navy">
                    Explore {item.label} →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="bg-brand-navy">
        <div className="site-shell section-spacing">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="display-title-light text-3xl sm:text-4xl lg:text-[2.75rem]">
              {d.finalCta.headline}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300">
              {d.finalCta.supporting}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={d.finalCta.primary.href} className="btn-primary w-full sm:w-auto">
                {d.finalCta.primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={d.finalCta.secondary.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 sm:w-auto"
              >
                {d.finalCta.secondary.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
