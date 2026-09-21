import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { RESOURCE_TOPIC_LABELS } from "@/lib/marketing/resources/content";
import type { ResourceRecord, WebinarHubStatus } from "@/lib/marketing/resources/types";
import { BlogEditorialVisual } from "./BlogEditorialVisual";

function formatDate(iso?: string) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

/* ——— Blog: construction operations intelligence / knowledge stream ——— */

const FEATURED_OPS_FLOW = [
  { label: "Field Log", accent: false },
  { label: "Project Context", accent: false },
  { label: "Job Cost", accent: false },
  { label: "Financials", accent: true },
] as const;

export function BlogMagazineFeatured({ resource }: { resource: ResourceRecord }) {
  const date = formatDate(resource.publishedAt);
  const topicLabel = RESOURCE_TOPIC_LABELS[resource.topic];

  return (
    <article className="min-w-0 border border-brand-line bg-white shadow-[0_1px_0_rgba(15,23,42,0.03)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-line bg-[#F7F9FC] px-4 py-2.5 sm:px-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-navy">
          Operations <span className="text-brand-muted">/</span>{" "}
          <span className="text-brand-orange">Intelligence</span>
        </p>
        <p className="font-mono text-[10px] text-brand-muted">01 · Featured</p>
      </div>

      <div className="grid min-w-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="flex min-w-0 flex-col px-4 py-5 sm:px-5 sm:py-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-orange">{topicLabel}</p>
            {date ? (
              <time dateTime={resource.publishedAt} className="text-[11px] text-brand-muted">
                {date}
              </time>
            ) : null}
          </div>

          <h3 className="mt-3 font-display text-[1.45rem] font-bold leading-[1.15] tracking-tight text-brand-navy sm:text-[1.75rem]">
            <Link
              href={resource.href}
              className="hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
            >
              {resource.title}
            </Link>
          </h3>

          <p className="mt-3 text-[14px] leading-relaxed text-brand-muted sm:text-[15px]">{resource.description}</p>

          <div className="mt-5 border-t border-brand-line pt-4">
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Operational path</p>
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              {FEATURED_OPS_FLOW.map((step, i) => (
                <div key={step.label} className="flex items-center gap-1.5">
                  {i > 0 ? (
                    <svg width="14" height="10" viewBox="0 0 14 10" className="shrink-0 text-brand-blue/40" aria-hidden="true">
                      <path d="M0 5 H10 M7 2 L11 5 L7 8" fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  ) : null}
                  <span
                    className={`px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] ${
                      step.accent
                        ? "border border-brand-blue/35 bg-[#EEF4FC] text-brand-blue"
                        : "border border-brand-line bg-[#FAFBFD] text-brand-navy"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href={resource.href}
            className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-navy transition hover:text-brand-blue"
          >
            Read article
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="relative min-w-0 border-t border-brand-line lg:border-l lg:border-t-0">
          <BlogEditorialVisual resource={resource} variant="integrated" />
          <div className="border-t border-brand-line bg-[#FAFBFD] px-4 py-3 sm:px-5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Context</p>
            <p className="mt-1 text-[11px] leading-snug text-brand-navy/80">
              Field activity → shared project record → financial visibility
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function BlogMagazineAsideItem({
  resource,
  index,
}: {
  resource: ResourceRecord;
  index: number;
}) {
  const date = formatDate(resource.publishedAt);
  const num = String(index + 2).padStart(2, "0");
  const topicLabel = RESOURCE_TOPIC_LABELS[resource.topic];
  const eagerThumb = index < 5;

  return (
    <article className="group border-b border-brand-line last:border-b-0">
      <Link
        href={resource.href}
        className="flex items-start gap-3 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-orange/40 sm:gap-3.5 sm:py-3.5"
      >
        <span className="mt-1 w-7 shrink-0 font-mono text-[11px] font-bold tabular-nums text-brand-navy/30 transition group-hover:text-brand-blue sm:w-8 sm:text-[12px]">
          {num}
        </span>
        <BlogEditorialVisual resource={resource} variant="thumbnail" priority={eagerThumb} />
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-orange">{topicLabel}</span>
            {date ? (
              <>
                <span className="text-brand-line" aria-hidden="true">
                  ·
                </span>
                <time dateTime={resource.publishedAt} className="text-[11px] text-brand-muted">
                  {date}
                </time>
              </>
            ) : null}
          </span>
          <span className="mt-1 block font-display text-[14px] font-bold leading-snug text-brand-navy transition group-hover:text-brand-blue sm:text-[15px]">
            {resource.title}
          </span>
          <span className="mt-1 line-clamp-2 block text-[12px] leading-relaxed text-brand-muted">{resource.description}</span>
        </span>
        <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-muted/40 transition group-hover:translate-x-0.5 group-hover:text-brand-orange" />
      </Link>
    </article>
  );
}

/* ——— Guides: SaaS workflow knowledge system ——— */

/** Premium SaaS workflow / knowledge visual — not a PDF or document cover. */
export function GuideDocumentCover({ resource }: { resource: ResourceRecord }) {
  const topicLabel = RESOURCE_TOPIC_LABELS[resource.topic];
  const primaryPath = ["Cost Codes", "Budget", "Commitments"] as const;
  const secondaryPath = [
    { label: "Job Cost", featured: false },
    { label: "Portfolio Financials", featured: true },
  ] as const;

  return (
    <Link
      href={resource.href}
      className="group relative block w-full overflow-hidden border border-brand-line bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-brand-blue/25 hover:shadow-[0_12px_28px_-18px_rgba(8,35,63,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
    >
      <div className="flex items-center justify-between gap-3 border-b border-brand-line bg-[#F7F9FC] px-4 py-2.5 sm:px-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-navy">
          VertexBuild <span className="text-brand-muted">/</span>{" "}
          <span className="text-brand-blue">Guide</span>
        </p>
        <p className="font-mono text-[10px] text-brand-muted">WF-01</p>
      </div>

      <div className="relative px-4 py-5 sm:px-5 sm:py-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Featured guide</p>
        <h3 className="mt-2 font-display text-[1.2rem] font-bold leading-[1.2] tracking-tight text-brand-navy sm:text-[1.35rem]">
          {resource.title}
        </h3>

        <div className="mt-5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-navy">Financial workflow</p>
        </div>

        <div className="mt-4 space-y-0">
          <div className="flex flex-wrap items-center gap-1.5">
            {primaryPath.map((label, i) => (
              <div key={label} className="flex items-center gap-1.5">
                {i > 0 ? (
                  <svg width="14" height="10" viewBox="0 0 14 10" className="shrink-0 text-brand-blue/45" aria-hidden="true">
                    <path d="M0 5 H10 M7 2 L11 5 L7 8" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                ) : null}
                <span className="border border-brand-line bg-[#FAFBFD] px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-brand-navy transition group-hover:border-brand-blue/40 group-hover:text-brand-blue">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center py-0.5 sm:items-start sm:pl-[7.25rem]">
            {secondaryPath.map((step) => (
              <div key={step.label} className="flex flex-col items-center sm:items-start">
                <svg width="12" height="18" viewBox="0 0 12 18" className="text-brand-line" aria-hidden="true">
                  <path d="M6 0 V13 M3 10 L6 14 L9 10" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
                <span
                  className={`px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[0.06em] ${
                    step.featured
                      ? "border border-brand-blue/40 bg-[#EEF4FC] font-bold text-brand-blue"
                      : "border border-brand-line bg-white text-brand-navy transition group-hover:border-brand-blue/35"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-brand-line pt-4">
          <div className="border border-brand-line/80 bg-[#FAFBFD] px-3 py-2.5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Alignment</p>
            <div className="mt-2 flex h-8 items-end gap-1" aria-hidden="true">
              {[10, 16, 12, 22, 18].map((h, i) => (
                <span
                  key={i}
                  className={`w-2 ${i === 3 ? "bg-brand-orange/80" : "bg-brand-blue/25"}`}
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <p className="mt-2 text-[10px] font-medium text-brand-navy">Codes ↔ field</p>
          </div>
          <div className="border border-brand-line/80 bg-[#FAFBFD] px-3 py-2.5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Layers</p>
            <ul className="mt-2 space-y-1.5" aria-hidden="true">
              {["Project", "Entity", "Portfolio"].map((layer, i) => (
                <li key={layer} className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${i === 2 ? "bg-brand-blue" : "border border-brand-line bg-white"}`} />
                  <span className="text-[10px] font-medium text-brand-navy/80">{layer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-brand-line px-4 py-3 sm:px-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">{topicLabel}</p>
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-navy transition group-hover:text-brand-blue">
          Open guide
          <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function GuideLibraryDetail({ resource }: { resource: ResourceRecord }) {
  const date = formatDate(resource.publishedAt);
  return (
    <div className="min-w-0">
      <dl className="grid grid-cols-1 gap-4 border-b border-brand-line pb-5 sm:grid-cols-3 sm:gap-5">
        <div className="border-l-2 border-brand-blue/30 pl-3">
          <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Topic</dt>
          <dd className="mt-1.5 text-[13px] font-semibold text-brand-navy">{RESOURCE_TOPIC_LABELS[resource.topic]}</dd>
        </div>
        <div className="border-l-2 border-brand-line pl-3 sm:border-brand-blue/15">
          <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Format</dt>
          <dd className="mt-1.5 text-[13px] font-semibold text-brand-navy">In-depth guide</dd>
        </div>
        {date ? (
          <div className="border-l-2 border-brand-line pl-3 sm:border-brand-blue/15">
            <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Updated</dt>
            <dd className="mt-1.5 text-[13px] font-semibold text-brand-navy">
              <time dateTime={resource.publishedAt}>{date}</time>
            </dd>
          </div>
        ) : null}
      </dl>

      <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-blue">Featured guide</p>
      <h3 className="mt-2 font-display text-[1.65rem] font-bold leading-tight text-brand-navy sm:text-[1.85rem]">
        <Link
          href={resource.href}
          className="hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
        >
          {resource.title}
        </Link>
      </h3>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-brand-muted">{resource.description}</p>
    </div>
  );
}

export function GuideTopicIndex({ items }: { items: ResourceRecord[] }) {
  return (
    <nav aria-label="Guide library index" className="mt-8 border-t border-brand-navy/10 pt-6">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-navy">In this library</p>
        <p className="font-mono text-[10px] text-brand-muted">{String(items.length).padStart(2, "0")} related</p>
      </div>
      <ol className="relative mt-4">
        <span className="absolute bottom-3 left-[0.85rem] top-3 w-px bg-brand-line" aria-hidden="true" />
        {items.map((item, i) => (
          <li key={item.id} className="relative">
            <Link
              href={item.href}
              className="group flex items-start gap-4 py-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
            >
              <span className="relative z-[1] mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-brand-line bg-white font-mono text-[10px] font-bold text-brand-muted transition group-hover:border-brand-blue/40 group-hover:text-brand-blue">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1 pt-1 text-[14px] font-medium leading-snug text-brand-navy transition group-hover:text-brand-blue">
                {item.title}
              </span>
              <ArrowRight className="mt-1.5 h-3.5 w-3.5 shrink-0 text-brand-muted/40 transition group-hover:translate-x-0.5 group-hover:text-brand-orange" />
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ——— Templates: toolkit ——— */

const RFI_ROWS = [
  { id: "1042", subject: "Door hardware schedule clarification", by: "PM", due: "Mar 12", status: "Open" },
  { id: "1043", subject: "Electrical rough-in at Level 2 corridor", by: "Super", due: "Mar 14", status: "Pending" },
  { id: "1044", subject: "Structural steel connection detail", by: "PE", due: "Mar 18", status: "Answered" },
] as const;

/** Featured RFI worksheet — professional construction resource, not a dashboard. */
export function TemplateFeaturedWorksheet({ resource }: { resource: ResourceRecord }) {
  return (
    <Link
      href={resource.href}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
    >
      <article className="relative overflow-hidden border border-brand-navy/12 bg-[#FFFEFB] shadow-[0_16px_36px_-18px_rgba(8,35,63,0.28)] transition group-hover:border-brand-navy/20">
        <span className="absolute bottom-0 left-0 top-0 w-[3px] bg-brand-orange" aria-hidden="true" />

        <header className="border-b border-brand-navy/10 px-5 py-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              {resource.templateFormat ?? "Worksheet"}
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
              {RESOURCE_TOPIC_LABELS[resource.topic]}
            </p>
          </div>
          <h3 className="mt-2 font-display text-xl font-bold text-brand-navy sm:text-[1.35rem]">{resource.title}</h3>
          <p className="mt-1.5 text-[13px] leading-relaxed text-brand-muted">{resource.description}</p>
        </header>

        <div className="overflow-x-auto px-3 py-4 sm:px-5">
          <table className="w-full min-w-[420px] border-collapse text-left text-[11px]">
            <thead>
              <tr className="border-b border-brand-navy/15 text-[9px] font-semibold uppercase tracking-[0.1em] text-brand-muted">
                <th className="px-2 py-2 font-semibold">RFI #</th>
                <th className="px-2 py-2 font-semibold">Subject</th>
                <th className="hidden px-2 py-2 font-semibold sm:table-cell">Requested by</th>
                <th className="px-2 py-2 font-semibold">Response due</th>
                <th className="px-2 py-2 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {RFI_ROWS.map((row) => (
                <tr key={row.id} className="border-b border-brand-line/70 last:border-b-0">
                  <td className="px-2 py-2.5 font-mono text-[11px] text-brand-navy">{row.id}</td>
                  <td className="max-w-[12rem] truncate px-2 py-2.5 text-brand-navy">{row.subject}</td>
                  <td className="hidden px-2 py-2.5 text-brand-muted sm:table-cell">{row.by}</td>
                  <td className="px-2 py-2.5 text-brand-muted">{row.due}</td>
                  <td className="px-2 py-2.5">
                    <span
                      className={
                        "inline-flex border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] " +
                        (row.status === "Open"
                          ? "border-brand-orange/35 bg-brand-orange/10 text-brand-navy"
                          : row.status === "Pending"
                            ? "border-brand-blue/30 bg-brand-blue/5 text-brand-navy"
                            : "border-brand-line bg-[#FAFBFD] text-brand-muted")
                      }
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="flex items-center justify-between gap-3 border-t border-brand-navy/10 px-5 py-3 sm:px-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Sample worksheet structure</p>
          <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-brand-orange">
            View template
            <ArrowRight className="h-3 w-3" />
          </span>
        </footer>
      </article>
    </Link>
  );
}

function TemplateMiniPreview({ kind }: { kind: "field-log" | "checklist" }) {
  if (kind === "field-log") {
    return (
      <svg className="h-12 w-14 shrink-0 text-brand-navy/15" viewBox="0 0 56 48" fill="none" aria-hidden="true">
        <rect x="4" y="2" width="48" height="44" fill="#FFFEFB" stroke="currentColor" strokeWidth="1" />
        <line x1="10" y1="12" x2="46" y2="12" stroke="currentColor" strokeWidth="1" />
        <line x1="10" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="1" />
        <line x1="10" y1="28" x2="42" y2="28" stroke="currentColor" strokeWidth="1" />
        <rect x="10" y="34" width="8" height="6" stroke="rgba(255,106,0,0.55)" strokeWidth="1" fill="rgba(255,106,0,0.12)" />
        <rect x="22" y="34" width="8" height="6" stroke="rgba(20,110,245,0.4)" strokeWidth="1" fill="rgba(20,110,245,0.08)" />
      </svg>
    );
  }
  return (
    <svg className="h-12 w-14 shrink-0 text-brand-navy/15" viewBox="0 0 56 48" fill="none" aria-hidden="true">
      <rect x="4" y="2" width="48" height="44" fill="#FFFEFB" stroke="currentColor" strokeWidth="1" />
      <rect x="10" y="12" width="7" height="7" stroke="rgba(20,110,245,0.45)" strokeWidth="1" fill="none" />
      <line x1="22" y1="15.5" x2="44" y2="15.5" stroke="currentColor" strokeWidth="1" />
      <rect x="10" y="24" width="7" height="7" stroke="rgba(255,106,0,0.5)" strokeWidth="1" fill="rgba(255,106,0,0.15)" />
      <line x1="22" y1="27.5" x2="40" y2="27.5" stroke="currentColor" strokeWidth="1" />
      <rect x="10" y="36" width="7" height="7" stroke="currentColor" strokeWidth="1" fill="none" />
      <line x1="22" y1="39.5" x2="42" y2="39.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function TemplateToolkitList({ items }: { items: ResourceRecord[] }) {
  return (
    <ol className="border-t border-brand-navy/10">
      {items.map((item, i) => {
        const kind = item.id.includes("punch") ? "checklist" : "field-log";
        return (
          <li key={item.id} className="border-b border-brand-line/80 last:border-b-0">
            <Link
              href={item.href}
              className="group flex items-start gap-4 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 sm:py-5"
            >
              <span className="w-7 shrink-0 font-display text-[15px] font-bold tabular-nums text-brand-navy/25 group-hover:text-brand-orange">
                {String(i + 1).padStart(2, "0")}
              </span>
              <TemplateMiniPreview kind={kind} />
              <span className="min-w-0 flex-1">
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
                  {item.templateFormat ?? "Template"}
                </span>
                <span className="mt-1 block text-[14px] font-semibold leading-snug text-brand-navy group-hover:text-brand-blue sm:text-[15px]">
                  {item.title}
                </span>
                <span className="mt-1 block line-clamp-2 text-[12px] leading-relaxed text-brand-muted">{item.description}</span>
              </span>
              <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-muted/50 transition group-hover:translate-x-0.5 group-hover:text-brand-orange" />
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

export function TemplateToolkitWorkspace({ items }: { items: ResourceRecord[] }) {
  const [featured, ...rest] = items;
  if (!featured) return null;

  return (
    <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:items-start lg:gap-12">
      <TemplateFeaturedWorksheet resource={featured} />
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">In this toolkit</p>
        <div className="mt-3">
          <TemplateToolkitList items={rest.length ? rest : items.slice(1)} />
        </div>
      </div>
    </div>
  );
}

/* ——— Webinars: timeline ——— */

function webinarStatusHeading(status: WebinarHubStatus) {
  if (status === "upcoming") return "Upcoming";
  if (status === "on-demand") return "On demand";
  return "Recorded";
}

export function WebinarTimelineItem({ resource, isLast }: { resource: ResourceRecord; isLast?: boolean }) {
  const date = formatDate(resource.publishedAt);
  const status = resource.webinarStatus ?? "on-demand";
  const actionLabel = status === "upcoming" ? "Register" : "Watch";

  return (
    <article className="relative flex gap-5 pb-10">
      <div className="flex w-3 shrink-0 flex-col items-center">
        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-orange ring-4 ring-brand-orange/15" aria-hidden="true" />
        {!isLast ? <span className="mt-1 min-h-[4rem] w-px flex-1 bg-brand-line sm:min-h-[5rem]" aria-hidden="true" /> : null}
      </div>
      <div className="min-w-0 flex-1 pb-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-orange">{webinarStatusHeading(status)}</p>
        {date ? (
          <time dateTime={resource.publishedAt} className="mt-1 block text-[12px] text-brand-muted">
            {date}
          </time>
        ) : null}
        <h3 className="mt-2 font-display text-lg font-bold text-brand-navy sm:text-xl">
          <Link href={resource.href} className="hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40">
            {resource.title}
          </Link>
        </h3>
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-muted">
          {RESOURCE_TOPIC_LABELS[resource.topic]}
        </p>
        <p className="mt-2 max-w-lg text-[13px] leading-relaxed text-brand-muted">{resource.description}</p>
        <Link
          href={resource.href}
          className="mt-3 inline-flex items-center gap-1 border-b border-brand-orange/40 pb-0.5 text-[12px] font-semibold text-brand-navy hover:border-brand-navy"
        >
          {actionLabel}
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </article>
  );
}

/* ——— Help: product knowledge map (marketing gateway, not a docs app) ——— */

function KnowledgeMapNode({
  index,
  title,
  description,
  featured = false,
  align = "center",
}: {
  index: number;
  title: string;
  description: string;
  featured?: boolean;
  align?: "center" | "left" | "right";
}) {
  const alignClass = align === "left" ? "items-start text-left" : align === "right" ? "items-end text-right" : "items-center text-center";
  const num = String(index).padStart(2, "0");

  return (
    <div className={`relative z-[1] flex max-w-[11.5rem] flex-col ${alignClass} sm:max-w-[13rem]`}>
      <span
        className={`flex h-3 w-3 items-center justify-center rounded-full border sm:h-3.5 sm:w-3.5 ${
          featured ? "border-brand-blue bg-brand-blue" : "border-brand-blue/55 bg-white"
        }`}
        aria-hidden="true"
      >
        {featured ? <span className="h-1 w-1 rounded-full bg-white" /> : null}
      </span>
      <p className="mt-2.5 font-mono text-[10px] tracking-wide text-brand-muted">{num}</p>
      <p
        className={`mt-1 text-[11px] font-bold uppercase tracking-[0.12em] sm:text-[12px] ${
          featured ? "text-brand-blue" : "text-brand-navy"
        }`}
      >
        {title}
      </p>
      <p className="mt-1.5 text-[11px] leading-snug text-brand-muted sm:text-[12px] sm:leading-relaxed">{description}</p>
    </div>
  );
}

function MapConnectorVertical({ height = 28 }: { height?: number }) {
  return (
    <svg width="12" height={height} viewBox={`0 0 12 ${height}`} className="shrink-0 text-brand-line" aria-hidden="true">
      <line x1="6" y1="0" x2="6" y2={height} stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function MapConnectorBranch() {
  return (
    <svg
      viewBox="0 0 320 36"
      className="h-9 w-full max-w-[20rem] text-brand-line sm:h-10 sm:max-w-[22rem]"
      fill="none"
      aria-hidden="true"
    >
      <path d="M160 0 V14 M160 14 H48 M160 14 H272 M48 14 V36 M272 14 V36" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function MapConnectorMerge() {
  return (
    <svg
      viewBox="0 0 320 36"
      className="h-9 w-full max-w-[20rem] text-brand-line sm:h-10 sm:max-w-[22rem]"
      fill="none"
      aria-hidden="true"
    >
      <path d="M48 0 V22 M272 0 V22 M48 22 H272 M160 22 V36" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function HelpDocumentationNav({
  categories,
  helpHref,
}: {
  categories: { id: string; title: string; description: string; href: string }[];
  helpHref: string;
}) {
  const [gettingStarted, projects, financials, fieldOps, account] = categories;

  return (
    <div className="overflow-hidden border border-brand-line bg-white shadow-[0_1px_0_rgba(15,23,42,0.03)]">
      <div className="flex items-baseline justify-between gap-4 border-b border-brand-line px-5 py-3.5 sm:px-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-navy">Product knowledge</p>
        <p className="font-mono text-[10px] tracking-wide text-brand-muted">05 knowledge areas</p>
      </div>

      <div className="relative bg-[#FAFBFD]/px-4 py-8 sm:px-8 sm:py-10">
        <div
          className="pointer-events-none absolute inset-5 border border-dashed border-brand-line/70 sm:inset-6"
          aria-hidden="true"
        />

        <div className="relative z-[1] flex flex-col items-center">
          {gettingStarted ? (
            <KnowledgeMapNode
              index={1}
              title={gettingStarted.title}
              description={gettingStarted.description}
              featured
            />
          ) : null}

          <MapConnectorVertical height={24} />
          <MapConnectorBranch />

          <div className="grid w-full max-w-[20rem] grid-cols-2 gap-x-4 sm:max-w-[22rem] sm:gap-x-8">
            {projects ? (
              <div className="flex justify-start">
                <KnowledgeMapNode
                  index={2}
                  title={projects.title}
                  description={projects.description}
                  align="left"
                />
              </div>
            ) : null}
            {financials ? (
              <div className="flex justify-end">
                <KnowledgeMapNode
                  index={3}
                  title={financials.title}
                  description={financials.description}
                  align="right"
                />
              </div>
            ) : null}
          </div>

          <MapConnectorMerge />

          {fieldOps ? (
            <KnowledgeMapNode index={4} title={fieldOps.title} description={fieldOps.description} />
          ) : null}

          <MapConnectorVertical height={28} />

          {account ? (
            <KnowledgeMapNode index={5} title={account.title} description={account.description} />
          ) : null}
        </div>
      </div>

      <div className="border-t border-brand-line px-5 py-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-brand-muted">
            <span className="block">Marketing resources</span>
            <span className="my-1 block text-brand-blue/60" aria-hidden="true">
              ↓
            </span>
            <span className="block text-brand-navy">Product knowledge</span>
          </div>
          <Link
            href={helpHref}
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-navy transition hover:text-brand-blue"
          >
            Explore Documentation
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function HubTextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-[13px] font-semibold text-brand-navy underline decoration-brand-orange/50 underline-offset-4 hover:decoration-brand-navy ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
