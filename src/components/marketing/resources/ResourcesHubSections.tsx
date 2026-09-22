"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { excludeBlogById, getBlogArticles, getFeaturedBlog } from "@/lib/marketing/resources/blog";
import {
  getHubResourcesByType,
  HELP_DOC_CATEGORY_PREVIEWS,
  RESOURCE_TOPIC_LABELS,
  RESOURCES_HUB,
} from "@/lib/marketing/resources/content";
import { ResourceHubHeroVisual } from "./ResourceHubHeroVisual";
import {
  BlogMagazineFeatured,
  GuideDocumentCover,
  GuideLibraryDetail,
  GuideTopicIndex,
  HelpDocumentationNav,
  HubTextLink,
  TemplateToolkitWorkspace,
  WebinarTimelineItem,
} from "./ResourceHubPreviewCards";
import { ResourceSearchField } from "./ResourceSearchField";

type SearchProps = {
  query: string;
  onQueryChange: (q: string) => void;
};

export function ResourcesHubHero({ query, onQueryChange }: SearchProps) {
  const copy = RESOURCES_HUB.hero;
  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell py-12 sm:py-16 lg:py-20">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:gap-16">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">{copy.eyebrow}</p>
            <h1 className="mt-4 font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-brand-navy sm:text-5xl lg:text-[3.25rem]">
              {copy.headline}
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-brand-muted sm:text-base">{copy.supporting}</p>
            <div id="resource-search" className="mt-9 scroll-mt-24">
              <ResourceSearchField
                value={query}
                onChange={onQueryChange}
                placeholder={copy.searchPlaceholder}
                label={copy.searchLabel}
              />
              <p className="mt-2 text-[12px] text-brand-muted">Full library search coming soon — browse by category below.</p>
            </div>
          </div>
          <ResourceHubHeroVisual />
        </div>
      </div>
    </section>
  );
}

export function ResourcesBlogPreviewSection() {
  const copy = RESOURCES_HUB.blog;
  const featured = getFeaturedBlog();
  const rest = featured ? excludeBlogById(getBlogArticles(), featured.id).slice(0, 2) : getBlogArticles().slice(0, 2);

  return (
    <section className="border-b border-brand-line bg-white" aria-labelledby="hub-blog-heading">
      <div className="site-shell py-14 sm:py-16 lg:py-20">
        <header className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{copy.eyebrow}</p>
          <h2 id="hub-blog-heading" className="mt-2 font-display text-3xl font-bold text-brand-navy sm:text-[2rem]">
            {copy.headline}
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[#111827] sm:text-[15px]">{copy.supporting}</p>
        </header>

        {featured ? (
          <div className="mt-10 min-w-0 lg:mt-12">
            <BlogMagazineFeatured resource={featured} />
            {rest.length > 0 ? (
              <ul className="mt-8 divide-y divide-brand-line border border-brand-line bg-[#FAFBFD]" role="list">
                {rest.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="group flex flex-col gap-1 px-4 py-4 transition hover:bg-white sm:px-5 sm:py-4"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-orange">
                        {RESOURCE_TOPIC_LABELS[item.topic]}
                      </p>
                      <p className="font-display text-[1.05rem] font-bold leading-snug text-brand-navy group-hover:text-brand-navy">
                        {item.title}
                      </p>
                      <p className="line-clamp-2 text-[13px] leading-relaxed text-[#111827]">{item.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="mt-6 border-t border-brand-line/60 pt-6">
              <HubTextLink href={copy.href}>{copy.cta}</HubTextLink>
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function ResourcesGuidesPreviewSection() {
  const copy = RESOURCES_HUB.guides;
  const items = getHubResourcesByType("guide", 3);
  const [lead, ...indexItems] = items;

  return (
    <section className="relative border-b border-brand-line bg-[#F4F7FB]" aria-labelledby="hub-guides-heading">
      <div className="site-shell relative py-14 sm:py-16 lg:py-20">
        <header className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue">{copy.eyebrow}</p>
          <h2 id="hub-guides-heading" className="mt-2 font-display text-[1.65rem] font-bold text-brand-navy sm:text-3xl">
            {copy.headline}
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-brand-muted sm:text-[15px]">{copy.supporting}</p>
        </header>

        {lead ? (
          <div className="mt-10 grid min-w-0 items-start gap-8 lg:mt-12 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:gap-10 xl:gap-14">
            <div className="min-w-0">
              <GuideDocumentCover resource={lead} />
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                Featured guide <span className="text-brand-blue/50">↓</span> Workflow <span className="text-brand-blue/50">↓</span> Related
              </p>
            </div>
            <div className="min-w-0">
              <GuideLibraryDetail resource={lead} />
              <GuideTopicIndex items={indexItems.length ? indexItems : items.slice(0, 2)} />
              <p className="mt-8">
                <HubTextLink href={copy.href}>{copy.cta}</HubTextLink>
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function ResourcesTemplatesPreviewSection() {
  const copy = RESOURCES_HUB.templates;
  const items = getHubResourcesByType("template", 3);

  return (
    <section className="border-b border-brand-line bg-white" aria-labelledby="hub-templates-heading">
      <div className="site-shell py-12 sm:py-14 lg:py-16">
        <header className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{copy.eyebrow}</p>
          <h2 id="hub-templates-heading" className="mt-2 font-display text-2xl font-bold text-brand-navy sm:text-[1.75rem]">
            {copy.headline}
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-brand-muted sm:text-[15px]">{copy.supporting}</p>
        </header>

        <div className="mt-10 lg:mt-12">
          <TemplateToolkitWorkspace items={items} />
        </div>

        <p className="mt-8 max-w-xl text-[12px] leading-relaxed text-brand-muted">
          Marketing resource templates — worksheets and checklists you can adapt before importing into VertexBuild.
        </p>

        <p className="mt-6">
          <HubTextLink href={copy.href}>{copy.cta}</HubTextLink>
        </p>
      </div>
    </section>
  );
}

export function ResourcesWebinarsPreviewSection() {
  const copy = RESOURCES_HUB.webinars;
  const items = getHubResourcesByType("webinar", 3);

  return (
    <section className="border-b border-brand-line bg-[#F4F7FB]" aria-labelledby="hub-webinars-heading">
      <div className="site-shell py-14 sm:py-16 lg:py-20">
        <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{copy.eyebrow}</p>
            <h2 id="hub-webinars-heading" className="mt-2 font-display text-2xl font-bold text-brand-navy sm:text-[1.65rem]">
              {copy.headline}
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-brand-muted">{copy.supporting}</p>
            <svg className="mt-8 hidden h-24 w-full max-w-[180px] text-brand-navy/10 lg:block" viewBox="0 0 180 80" aria-hidden="true">
              <path d="M20 70 L20 20 L160 20" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="20" cy="20" r="3" fill="rgba(255,106,0,0.4)" />
              <circle cx="160" cy="20" r="3" fill="rgba(20,110,245,0.35)" />
            </svg>
          </div>
          <div className="min-w-0 border-t border-brand-line pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            {items.map((item, index) => (
              <WebinarTimelineItem key={item.id} resource={item} isLast={index === items.length - 1} />
            ))}
            <p className="mt-2 border-t border-brand-line/60 pt-6">
              <HubTextLink href={copy.href}>{copy.cta}</HubTextLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ResourcesHelpPreviewSection() {
  const copy = RESOURCES_HUB.help;

  return (
    <section className="border-b border-brand-line bg-white" aria-labelledby="hub-help-heading">
      <div className="site-shell py-14 sm:py-16 lg:py-20">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.22fr)] lg:gap-12 xl:gap-16">
          <div className="max-w-md">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">{copy.eyebrow}</p>
            <h2
              id="hub-help-heading"
              className="mt-4 font-display text-[1.85rem] font-bold leading-[1.15] tracking-tight text-brand-navy sm:text-4xl"
            >
              {copy.headline}
            </h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-brand-muted">{copy.supporting}</p>
            <Link href={copy.href} className="btn-primary mt-8 inline-flex w-full sm:mt-10 sm:w-auto">
              {copy.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-4 max-w-sm text-[12px] leading-relaxed text-brand-muted/90">{copy.supportingNote}</p>
          </div>
          <HelpDocumentationNav categories={HELP_DOC_CATEGORY_PREVIEWS} helpHref={copy.href} />
        </div>
      </div>
    </section>
  );
}

export function ResourcesHubCtaSection() {
  const cta = RESOURCES_HUB.cta;
  return (
    <section className="bg-brand-navy text-white" aria-labelledby="resources-cta-heading">
      <div className="site-shell py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="resources-cta-heading" className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            {cta.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-300">{cta.supporting}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={cta.primary.href} className="btn-primary w-full sm:w-auto">
              {cta.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={cta.secondary.href}
              className="inline-flex w-full items-center justify-center rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              {cta.secondary.label}
            </Link>
          </div>
          <Link href={cta.tertiary.href} className="btn-ghost-light mt-6 inline-flex normal-case tracking-normal">
            {cta.tertiary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
