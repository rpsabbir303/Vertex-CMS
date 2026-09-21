"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import {
  getProjectManagementCapabilityBlocks,
  projectManagementCategory,
  type CategoryCapabilityBlock,
} from "@/lib/marketing/features/categories";
import { FeatureProductPreview } from "./FeatureProductPreview";

const PM_BLOCKS = getProjectManagementCapabilityBlocks();

export function ProjectManagementOverview() {
  const [activeId, setActiveId] = useState(PM_BLOCKS[0]?.areaId ?? "");

  useEffect(() => {
    const apply = () => {
      const hash = window.location.hash.replace(/^#/, "");
      const match = PM_BLOCKS.find((b) => b.areaId === hash || b.slug === hash);
      if (match) setActiveId(match.areaId);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const active = PM_BLOCKS.find((b) => b.areaId === activeId) ?? PM_BLOCKS[0];

  const select = (block: CategoryCapabilityBlock) => {
    setActiveId(block.areaId);
    window.history.replaceState(null, "", `#${block.areaId}`);
  };

  if (!active) return null;

  const { overview } = projectManagementCategory;

  return (
    <section id="pm-capabilities" className="scroll-mt-36 border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{overview.eyebrow}</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">{overview.headline}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{overview.supporting}</p>
        </Reveal>

        {/* Mobile / tablet: horizontal capability chips */}
        <div className="mt-8 lg:hidden">
          <ul
            className="-mx-1 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]"
            aria-label="Project Management capabilities"
          >
            {PM_BLOCKS.map((block) => {
              const selected = block.areaId === active.areaId;
              return (
                <li key={block.areaId} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => select(block)}
                    aria-pressed={selected}
                    className={
                      "whitespace-nowrap rounded-lg border px-3.5 py-2.5 text-[12px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/35 " +
                      (selected
                        ? "border-brand-orange/45 bg-brand-orange/5 text-brand-navy shadow-soft"
                        : "border-brand-line bg-[#FAFBFD] text-brand-muted")
                    }
                  >
                    {block.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-5 rounded-xl border border-brand-line bg-[#FAFBFD] p-4">
            <p className="text-[15px] font-semibold text-brand-navy">{active.label}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{active.description}</p>
            <Link
              href={active.href}
              className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange transition hover:text-brand-navy"
            >
              {active.ctaLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative mt-5 overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4] p-3 sm:p-4">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              VertexBuild · {active.label}
            </p>
            <FeatureProductPreview
              preview={active.preview}
              dark={active.dark}
              framed
              className="min-h-[240px] sm:min-h-[300px]"
            />
          </div>
        </div>

        {/* Desktop: left list + right preview */}
        <div className="mt-10 hidden gap-10 lg:grid lg:grid-cols-[minmax(260px,0.9fr)_minmax(0,1.2fr)] lg:items-start lg:gap-12">
          <ul className="space-y-2" role="listbox" aria-label="Project Management capabilities">
            {PM_BLOCKS.map((block) => {
              const selected = block.areaId === active.areaId;
              return (
                <li key={block.areaId} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onClick={() => select(block)}
                    className={
                      "group flex w-full items-start justify-between gap-3 rounded-xl border px-4 py-3.5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/35 " +
                      (selected
                        ? "border-brand-orange/40 bg-brand-orange/5 shadow-soft"
                        : "border-brand-line bg-[#FAFBFD] hover:border-brand-navy/20 hover:bg-white")
                    }
                    aria-pressed={selected}
                  >
                    <span className="min-w-0">
                      <span className="block text-[14px] font-semibold text-brand-navy">{block.label}</span>
                      {selected ? (
                        <span className="mt-1.5 block text-[13px] leading-relaxed text-brand-muted">
                          {block.description}
                        </span>
                      ) : (
                        <span className="mt-1 block text-[12px] text-brand-muted line-clamp-1">
                          {block.description}
                        </span>
                      )}
                    </span>
                    <ArrowRight
                      className={
                        "mt-0.5 h-4 w-4 shrink-0 transition " +
                        (selected
                          ? "translate-x-0.5 text-brand-orange"
                          : "text-brand-muted/40 group-hover:text-brand-orange")
                      }
                    />
                  </button>
                  {selected ? (
                    <div className="mt-2 px-1">
                      <Link
                        href={block.href}
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange transition hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
                      >
                        {block.ctaLabel}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <div className="lg:sticky lg:top-36">
            <div className="relative overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4] p-4 sm:p-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                VertexBuild · {active.label}
              </p>
              <FeatureProductPreview
                key={active.areaId}
                preview={active.preview}
                dark={active.dark}
                framed
                className="min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="text-[13px] text-brand-muted">
                <span className="font-semibold text-brand-navy">{active.label}</span>
                {" — "}open the capability detail when you are ready.
              </p>
              <Link href={active.href} className="btn-primary shrink-0 text-[12px]">
                {active.ctaLabel}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
