import Link from "next/link";

import { ComparisonsSectionHeader } from "../ComparisonsSectionHeader";

export type ComparisonCapabilitySectionProps = {
  id?: string;
  eyebrow: string;
  headline: string;
  supporting?: string;
  mode: "landing" | "detail";
  categories?: Array<{ title: string; body: string }>;
  competitorName?: string;
  areas?: Array<{
    id: string;
    title: string;
    frameworkDescription: string;
    vertexBuild: string;
    competitor: string;
    comparisonContext: string;
  }>;
  ctaLabel?: string;
  ctaHref?: string;
  tone?: "white" | "cool";
};

/** CMS-1344 — capability comparison (landing framework + detail side-by-side). */
export function ComparisonCapabilitySection({
  id,
  eyebrow,
  headline,
  supporting,
  mode,
  categories,
  competitorName,
  areas,
  ctaLabel,
  ctaHref,
  tone = "cool",
}: ComparisonCapabilitySectionProps) {
  const bg = tone === "cool" ? "bg-[#F7F9FC]" : "bg-white";

  return (
    <section
      id={id}
      className={`relative scroll-mt-28 border-b border-brand-line/60 ${bg}`}
      aria-labelledby="comparison-capability-heading"
    >
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <ComparisonsSectionHeader eyebrow={eyebrow} headline={headline} supporting={supporting} />
        <h2 id="comparison-capability-heading" className="sr-only">
          {headline}
        </h2>

        {mode === "landing" && categories ? (
          <div className="mt-10 grid gap-px border border-brand-line/80 bg-brand-line/70 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <article key={cat.title} className="bg-white px-5 py-6 sm:px-6 sm:py-7">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#000000]">{cat.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-[#111827]">{cat.body}</p>
              </article>
            ))}
          </div>
        ) : null}

        {mode === "detail" && areas && competitorName ? (
          <div className="mt-10 overflow-x-auto border border-brand-line/80 bg-white">
            <div className="hidden min-w-[720px] border-b border-brand-line/70 bg-[#F7F9FC] px-4 py-3 text-[9px] font-bold uppercase tracking-[0.1em] text-[#111827]/55 lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-4 lg:px-5">
              <span>Capability</span>
              <span>VertexBuild</span>
              <span>{competitorName}</span>
              <span>Comparison context</span>
            </div>
            <ul role="list" className="min-w-[720px]">
              {areas.map((area, index) => (
                <li key={area.id} className={index > 0 ? "border-t border-brand-line/70" : undefined}>
                  <div className="grid gap-4 px-4 py-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-5 lg:px-5 lg:py-6">
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#000000]">{area.title}</h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-[#111827]/80">{area.frameworkDescription}</p>
                    </div>
                    <p className="text-[13px] leading-relaxed text-[#111827]">{area.vertexBuild}</p>
                    <p className="text-[13px] leading-relaxed text-[#111827]">{area.competitor}</p>
                    <p className="text-[13px] leading-relaxed text-[#111827]/85">{area.comparisonContext}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {ctaLabel && ctaHref ? (
          <Link
            href={ctaHref}
            className="mt-8 inline-flex text-[13px] font-semibold text-brand-orange hover:text-[#000000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/45"
          >
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
