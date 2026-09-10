"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import {
  MobileCaptureUI,
  MobileChainUI,
  MobileDailyLogUI,
  MobileDashboardUI,
  MobileDrawingUI,
  MobileFlowUI,
  MobileHomeUI,
  MobilePhotosUI,
  MobilePunchUI,
  MobileSafetyUI,
  MobileWorkspaceUI,
} from "@/components/mockups/ProductMockups";
import { mobileFeatureDetail } from "@/lib/marketing/features/mobileDetail";
import { featureAreaPath } from "@/lib/marketing/features/featureAreas";
import type { PreviewKey } from "@/lib/marketing/features/register";
import { ROUTES } from "@/lib/marketing/navigation";

const MOBILE_PREVIEWS: Partial<Record<PreviewKey, ReactNode>> = {
  mobileHome: <MobileHomeUI />,
  mobileDashboard: <MobileDashboardUI />,
  mobileDailyLog: <MobileDailyLogUI />,
  mobileDrawing: <MobileDrawingUI />,
  mobilePhotos: <MobilePhotosUI />,
  mobilePunch: <MobilePunchUI />,
  mobileSafety: <MobileSafetyUI />,
  mobileWorkspace: <MobileWorkspaceUI />,
  mobileFlow: <MobileFlowUI />,
  mobileCapture: <MobileCaptureUI />,
  mobileChain: <MobileChainUI />,
};

function PhoneStage({
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
        "relative overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4] p-5 sm:p-6 " +
        className
      }
    >
      <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
        Vertex CMS · {label}
      </p>
      <div className="pointer-events-none flex justify-center" aria-hidden="true">
        {MOBILE_PREVIEWS[preview]}
      </div>
    </div>
  );
}

function SectionCta({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange transition hover:text-brand-navy"
    >
      {label}
      <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  );
}

function MobileStickyNav() {
  const items = mobileFeatureDetail.nav;
  const [active, setActive] = useState<string>(items[0].id);

  useEffect(() => {
    const els = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Mobile sections"
      className="sticky top-[4.5rem] z-30 border-b border-brand-line/80 bg-white/95 backdrop-blur-md"
    >
      <div className="site-shell">
        <ul className="-mx-1 flex gap-1.5 overflow-x-auto py-3 [scrollbar-width:thin]">
          {items.map((item) => {
            const selected = item.id === active;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  className={
                    "inline-flex items-center rounded-lg border px-3.5 py-2 text-[12px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/35 " +
                    (selected
                      ? "border-brand-orange/45 bg-brand-orange/5 text-brand-navy shadow-soft"
                      : "border-transparent text-brand-muted hover:border-brand-line hover:bg-[#FAFBFD] hover:text-brand-navy")
                  }
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export function MobileFeatureDetailPage() {
  const d = mobileFeatureDetail;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Features", href: ROUTES.features },
          { label: "Field Operations", href: `${ROUTES.features}#field-operations` },
          { label: "Mobile" },
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
              <p className="mt-5 text-lg font-medium leading-snug text-brand-navy sm:text-xl">
                {d.hero.supporting}
              </p>
              <p className="body-copy mt-4 max-w-xl">{d.hero.description}</p>
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
              <PhoneStage preview={d.hero.preview} label="Field home" />
            </Reveal>
          </div>
        </div>
      </section>

      <MobileStickyNav />

      {/* 3. Intro */}
      <section id="mobile-overview" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.intro.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.intro.body}</p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {d.intro.points.map((point, index) => (
              <li key={point.title} className="border border-brand-line bg-[#FAFBFD] px-5 py-5">
                <p className="font-mono text-[10px] font-bold text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[15px] font-semibold text-brand-navy">{point.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{point.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Dark workspace showcase */}
      <section className="border-b border-brand-line bg-brand-navy">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="display-title-light text-3xl sm:text-4xl">{d.workspace.headline}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{d.workspace.body}</p>
          </Reveal>
          <Reveal delay={80} className="mt-8 pointer-events-none" aria-hidden="true">
            {MOBILE_PREVIEWS[d.workspace.preview]}
          </Reveal>
        </div>
      </section>

      {/* 5. Field dashboard */}
      <section id="mobile-access" className="scroll-mt-28 border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                {d.dashboard.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.dashboard.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.dashboard.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <PhoneStage preview={d.dashboard.preview} label="Today on site" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Daily work */}
      <section id="mobile-daily" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                {d.dailyWork.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.dailyWork.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.dailyWork.body}</p>
              <ul className="mt-6 space-y-3">
                {d.dailyWork.items.map((item) => (
                  <li key={item.title} className="border border-brand-line bg-[#FAFBFD] px-4 py-3">
                    <p className="text-[14px] font-semibold text-brand-navy">{item.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-brand-muted">{item.body}</p>
                  </li>
                ))}
              </ul>
              <SectionCta label={d.dailyWork.cta.label} href={d.dailyWork.cta.href} />
            </Reveal>
            <Reveal delay={80}>
              <PhoneStage preview={d.dailyWork.preview} label="Daily log" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Project information */}
      <section id="mobile-info" className="scroll-mt-28 border-b border-brand-line bg-[#EEF2F7]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.projectInfo.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.projectInfo.body}</p>
          </Reveal>
          <div className="mt-10 space-y-14">
            {d.projectInfo.blocks.map((block, index) => (
              <div
                key={block.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
              >
                <Reveal className={index % 2 === 1 ? "lg:order-2" : undefined}>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-brand-navy">
                    {block.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-brand-muted">{block.body}</p>
                </Reveal>
                <Reveal delay={80} className={index % 2 === 1 ? "lg:order-1" : undefined}>
                  <PhoneStage preview={block.preview} label={block.label} />
                </Reveal>
              </div>
            ))}
          </div>
          <Reveal className="mt-8">
            <SectionCta label={d.projectInfo.cta.label} href={d.projectInfo.cta.href} />
          </Reveal>
        </div>
      </section>

      {/* 8. Capture */}
      <section className="border-b border-brand-line bg-[#061525]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="display-title-light text-3xl sm:text-4xl">{d.capture.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.capture.body}</p>
              <ul className="mt-8 space-y-3">
                {d.capture.panels.map((panel, index) => (
                  <li
                    key={panel.title}
                    className="rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[13px] font-semibold text-white">{panel.title}</p>
                      <span className="font-mono text-[10px] font-bold text-brand-orange">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-1 text-[12px] text-slate-400">{panel.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <PhoneStage preview={d.capture.preview} label="New field record" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. Connected FO chain */}
      <section id="mobile-workflows" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.chain.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.chain.body}</p>
          </Reveal>
          <Reveal delay={80} className="mt-8 pointer-events-none" aria-hidden="true">
            {MOBILE_PREVIEWS[d.chain.preview]}
          </Reveal>
        </div>
      </section>

      {/* 10. Field-to-office */}
      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                {d.connected.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.connected.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.connected.body}</p>
            </Reveal>
            <Reveal delay={80} className="pointer-events-none" aria-hidden="true">
              {MOBILE_PREVIEWS[d.connected.preview]}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 11. Day story */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.dayStory.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.dayStory.body}</p>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {d.dayStory.stages.map((stage) => (
              <Reveal key={stage.n}>
                <p className="font-mono text-[11px] font-bold text-brand-orange">{stage.n}</p>
                <h3 className="mt-2 text-[15px] font-semibold text-brand-navy">{stage.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{stage.body}</p>
                <div className="mt-4">
                  <PhoneStage preview={stage.preview} label={stage.label} className="!p-3 sm:!p-4" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Outcomes */}
      <section id="mobile-outcomes" className="scroll-mt-28 border-b border-brand-line bg-[#EEF2F7]">
        <div className="site-shell section-spacing">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.outcomes.headline}
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.outcomes.cards.map((card, index) => (
              <li key={card.title} className="border border-brand-line bg-white px-5 py-5">
                <p className="font-mono text-[10px] font-bold text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[14px] font-semibold text-brand-navy">{card.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{card.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 13. Why mobile matters */}
      <section className="border-b border-brand-line bg-brand-navy">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="display-title-light text-3xl sm:text-4xl">{d.whyMobile.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.whyMobile.body}</p>
              <ul className="mt-8 space-y-4">
                {d.whyMobile.statements.map((item) => (
                  <li key={item.title} className="border-l-2 border-brand-orange/50 pl-4">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-orange">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[14px] text-slate-300">{item.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <PhoneStage preview={d.whyMobile.preview} label="Jobsite access" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 14. Explore FO */}
      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              {d.fieldOps.eyebrow}
            </p>
            <h2 className="mt-3 display-title text-2xl sm:text-3xl">{d.fieldOps.headline}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.fieldOps.body}</p>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {d.fieldOps.cards.map((card) => {
              const active = card.slug === d.fieldOps.activeSlug;
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

      {/* 15. Final CTA */}
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
