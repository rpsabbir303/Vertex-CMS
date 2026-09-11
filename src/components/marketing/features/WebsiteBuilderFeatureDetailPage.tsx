"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { websiteBuilderFeatureDetail } from "@/lib/marketing/features/websiteBuilderDetail";
import { featureAreaPath } from "@/lib/marketing/features/featureAreas";
import type { PreviewKey } from "@/lib/marketing/features/register";
import { ROUTES } from "@/lib/marketing/navigation";
import { FeatureProductPreview } from "./FeatureProductPreview";

const TEMPLATE_ACCENTS: Record<string, string> = {
  navy: "from-brand-navy to-[#0A2744]",
  orange: "from-brand-orange/90 to-brand-navy",
  slate: "from-slate-600 to-brand-navy",
  steel: "from-slate-500 to-slate-800",
  blue: "from-brand-blue/80 to-brand-navy",
  warm: "from-amber-700/80 to-brand-navy",
};

function TemplateThumb({ accent }: { accent: string }) {
  const grad = TEMPLATE_ACCENTS[accent] ?? TEMPLATE_ACCENTS.navy;
  return (
    <div className="overflow-hidden rounded-lg border border-brand-line bg-white">
      <div className={"bg-gradient-to-br px-3 py-4 " + grad}>
        <div className="h-1.5 w-10 rounded bg-white/40" />
        <div className="mt-2 h-2 w-3/4 rounded bg-white/25" />
        <div className="mt-1.5 h-1.5 w-1/2 rounded bg-white/15" />
      </div>
      <div className="grid grid-cols-3 gap-1 p-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded border border-brand-line bg-[#FAFBFD] p-1.5">
            <div className="h-5 rounded bg-slate-200/80" />
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewStage({
  preview,
  label,
  dark = false,
  tall = false,
  className = "",
}: {
  preview: PreviewKey;
  label: string;
  dark?: boolean;
  tall?: boolean;
  className?: string;
}) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl border p-4 sm:p-5 " +
        (dark
          ? "border-white/10 bg-gradient-to-br from-[#061525] via-[#0A1F35] to-[#08233F] "
          : "border-brand-line bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4] ") +
        className
      }
    >
      <p
        className={
          "mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] " +
          (dark ? "text-slate-400" : "text-brand-muted")
        }
      >
        Vertex CMS · {label}
      </p>
      <FeatureProductPreview
        preview={preview}
        dark={dark}
        framed
        className={
          tall
            ? "min-h-[320px] sm:min-h-[400px] lg:min-h-[460px]"
            : "min-h-[240px] sm:min-h-[300px] lg:min-h-[340px]"
        }
      />
    </div>
  );
}

export function WebsiteBuilderFeatureDetailPage() {
  const d = websiteBuilderFeatureDetail;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Features", href: ROUTES.features },
          { label: "Business Growth", href: `${ROUTES.features}#growth` },
          { label: "Website Builder" },
        ]}
      />

      {/* Hero — flagship large preview */}
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
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
            <Reveal>
              <p className="eyebrow">{d.hero.eyebrow}</p>
              <h1 className="display-title mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.15rem]">
                {d.hero.headline}
              </h1>
              <p className="mt-5 max-w-xl text-lg font-medium leading-snug text-brand-navy sm:text-xl">
                {d.hero.supporting}
              </p>
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
              <PreviewStage preview={d.hero.preview} label="Website Builder" dark tall />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core value */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.intro.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.intro.body}</p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {d.intro.cards.map((card) => (
              <li key={card.title} className="border border-brand-line bg-[#FAFBFD] px-5 py-5">
                <p className="font-mono text-[10px] font-bold text-brand-orange">{card.n}</p>
                <h3 className="mt-2 text-[15px] font-semibold text-brand-navy">{card.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{card.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Template gallery */}
      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.templates.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.templates.body}</p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.templates.items.map((tpl) => (
              <li key={tpl.name} className="flex flex-col border border-brand-line bg-white p-4">
                <TemplateThumb accent={tpl.accent} />
                <p className="mt-3 font-mono text-[10px] font-bold text-brand-orange">{tpl.n}</p>
                <h3 className="mt-1 text-[15px] font-semibold text-brand-navy">{tpl.name}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-brand-muted">{tpl.body}</p>
                <div className="mt-4 flex gap-2">
                  <span className="rounded-md border border-brand-line px-3 py-1.5 text-[11px] font-semibold text-brand-muted">
                    Preview template
                  </span>
                  <span className="rounded-md bg-brand-navy px-3 py-1.5 text-[11px] font-semibold text-white">
                    Select
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Template preview */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.templatePreview.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.templatePreview.body}</p>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <PreviewStage preview={d.templatePreview.preview} label="Template preview" tall />
          </Reveal>
        </div>
      </section>

      {/* Website editor */}
      <section className="border-b border-brand-line bg-[#F4F7FB]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.editor.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.editor.body}</p>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <PreviewStage preview={d.editor.preview} label="Website editor" tall />
          </Reveal>
        </div>
      </section>

      {/* Section editor */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.sectionEditor.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.sectionEditor.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {d.sectionEditor.sections.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-brand-line bg-[#FAFBFD] px-2.5 py-1 text-[12px] font-medium text-brand-navy"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.sectionEditor.preview} label="Section editor" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CMS import — dark */}
      <section className="border-b border-brand-line bg-[#061525]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <Reveal>
              <h2 className="display-title-light text-3xl sm:text-4xl">{d.cmsImport.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.cmsImport.body}</p>
              <ul className="mt-8 space-y-3">
                {d.cmsImport.flows.map((flow) => (
                  <li key={flow.source} className="flex flex-wrap items-center gap-2 text-[13px]">
                    <span className="rounded-md border border-white/15 bg-white/[0.06] px-2.5 py-1 text-slate-200">
                      {flow.source}
                    </span>
                    <span className="text-slate-500">↓</span>
                    <span className="text-slate-400">{flow.target}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.cmsImport.preview} label="Import from CMS" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Portfolio manager */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal delay={80} className="order-2 lg:order-1">
              <PreviewStage preview={d.portfolio.preview} label="Portfolio manager" />
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.portfolio.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.portfolio.body}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Branding */}
      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.branding.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.branding.body}</p>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <PreviewStage preview={d.branding.preview} label="Branding settings" />
          </Reveal>
        </div>
      </section>

      {/* SEO */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.seo.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.seo.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.seo.preview} label="SEO settings" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Preview & publish */}
      <section className="border-b border-brand-line bg-[#061525]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="display-title-light text-3xl sm:text-4xl">{d.publish.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.publish.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {d.publish.steps.map((step, i) => (
                  <span key={step} className="flex items-center gap-1 text-[12px] text-slate-400">
                    <span className={i === d.publish.steps.length - 1 ? "font-semibold text-brand-orange" : ""}>
                      {step}
                    </span>
                    {i < d.publish.steps.length - 1 ? <span>↓</span> : null}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.publish.preview} label="Preview & publish" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Custom domain */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.domain.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.domain.body}</p>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <PreviewStage preview={d.domain.preview} label="Domain settings" />
          </Reveal>
        </div>
      </section>

      {/* DNS verification */}
      <section className="border-b border-brand-line bg-[#F4F7FB]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal delay={80} className="order-2 lg:order-1">
              <PreviewStage preview={d.dns.preview} label="DNS verification" />
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.dns.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.dns.body}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SSL / live status */}
      <section className="border-b border-brand-line bg-[#061525]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="display-title-light text-3xl sm:text-4xl">{d.ssl.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.ssl.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.ssl.preview} label="SSL & live status" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact form → CRM */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.contactLead.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.contactLead.body}</p>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <PreviewStage preview={d.contactLead.preview} label="Website inquiry → CRM lead" dark tall />
          </Reveal>
        </div>
      </section>

      {/* Complete workflow */}
      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.workflow.headline}
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.workflow.steps.map((step) => (
              <li key={step.n} className="border border-brand-line bg-white px-5 py-5">
                <p className="font-mono text-[10px] font-bold text-brand-orange">{step.n}</p>
                <h3 className="mt-2 text-[15px] font-semibold text-brand-navy">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.outcomes.headline}
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.outcomes.cards.map((card) => (
              <li key={card.title} className="border border-brand-line bg-[#FAFBFD] px-5 py-5">
                <p className="font-mono text-[10px] font-bold text-brand-orange">{card.n}</p>
                <h3 className="mt-2 text-[14px] font-semibold text-brand-navy">{card.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{card.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Differentiator */}
      <section className="border-b border-brand-line bg-[#F4F7FB]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.differentiator.headline}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="border border-brand-line bg-white px-5 py-6">
              <p className="text-[11px] font-bold uppercase tracking-wide text-brand-muted">Traditional website workflow</p>
              <ul className="mt-4 space-y-2">
                {d.differentiator.traditional.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13px] text-brand-muted">
                    <span className="text-slate-300">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-brand-orange/35 bg-brand-orange/[0.04] px-5 py-6">
              <p className="text-[11px] font-bold uppercase tracking-wide text-brand-orange">Vertex CMS Website Builder</p>
              <ul className="mt-4 space-y-2">
                {d.differentiator.vertex.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13px] font-medium text-brand-navy">
                    <span className="text-brand-orange">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Connected workflows */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.connectedWorkflows.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.connectedWorkflows.body}</p>
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {d.connectedWorkflows.cards.map((card) => {
              const isCurrent = card.slug === "website-builder";
              return (
                <li key={card.slug}>
                  <Link
                    href={featureAreaPath(card.slug)}
                    aria-current={isCurrent ? "page" : undefined}
                    className={
                      "group flex h-full flex-col border px-4 py-4 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 " +
                      (isCurrent
                        ? "border-brand-orange/45 bg-brand-orange/5"
                        : "border-brand-line bg-[#FAFBFD] hover:border-brand-navy/25 hover:shadow-soft")
                    }
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                      {card.category}
                    </p>
                    <p className="mt-2 text-[15px] font-semibold text-brand-navy">{card.title}</p>
                    <p className="mt-2 flex-1 text-[12px] leading-relaxed text-brand-muted">{card.body}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-orange group-hover:text-brand-navy">
                      {isCurrent ? "Current feature" : `Explore ${card.title}`}
                      {!isCurrent ? <ArrowRight className="h-3.5 w-3.5" /> : null}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Explore Business Growth */}
      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              {d.explore.eyebrow}
            </p>
            <h2 className="mt-3 display-title text-2xl sm:text-3xl">{d.explore.headline}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.explore.body}</p>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {d.explore.cards.map((card) => {
              const active = card.slug === d.explore.activeSlug;
              return (
                <li key={card.slug}>
                  <Link
                    href={featureAreaPath(card.slug)}
                    aria-current={active ? "page" : undefined}
                    className={
                      "group flex h-full flex-col border px-4 py-4 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 " +
                      (active
                        ? "border-brand-orange/45 bg-brand-orange/5"
                        : "border-brand-line bg-white hover:border-brand-navy/25")
                    }
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                      {card.category}
                    </p>
                    <p className="mt-2 text-[15px] font-semibold text-brand-navy">{card.title}</p>
                    <p className="mt-2 flex-1 text-[12px] leading-relaxed text-brand-muted">{card.body}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-orange group-hover:text-brand-navy">
                      {active ? "Current feature" : "Explore"}
                      {!active ? <ArrowRight className="h-3.5 w-3.5" /> : null}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
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
