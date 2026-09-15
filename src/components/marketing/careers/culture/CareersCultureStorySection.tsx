"use client";

import { Reveal } from "@/components/Reveal";

export type CulturePrinciple = {
  number: string;
  sectionEyebrow: string;
  title: string;
  lead: string;
  detail: string;
};

type LayoutVariant = "text-first" | "visual-first";

type Props = {
  principle: CulturePrinciple;
  visual: React.ReactNode;
  layout: LayoutVariant;
  background: string;
  sectionId: string;
};

function CultureCopy({ principle, headingId }: { principle: CulturePrinciple; headingId: string }) {
  return (
    <div className="careers-safe-zone">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
        {principle.sectionEyebrow}
      </p>
      <h2 id={headingId} className="display-title mt-4 text-[1.85rem] leading-[1.1] sm:text-[2.2rem] lg:text-[2.5rem]">
        {principle.title}
      </h2>
      <p className="mt-5 text-[15px] leading-[1.8] text-brand-navy/85 sm:text-base">{principle.lead}</p>
      <p className="mt-4 max-w-md text-[14px] leading-[1.8] text-brand-muted sm:text-[15px]">{principle.detail}</p>
    </div>
  );
}

export function CareersCultureStorySection({ principle, visual, layout, background, sectionId }: Props) {
  const headingId = `${sectionId}-heading`;
  const textFirst = layout === "text-first";

  const textBlock = (
    <Reveal>
      <CultureCopy principle={principle} headingId={headingId} />
    </Reveal>
  );

  const visualBlock = (
    <Reveal delay={80} className="relative z-[1] min-w-0">
      {visual}
    </Reveal>
  );

  return (
    <section className={`relative z-[2] border-b border-brand-navy/[0.1] ${background}`} aria-labelledby={headingId}>
      <div className="site-shell relative py-16 sm:py-20 lg:py-24">
        <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className={textFirst ? "" : "order-2 lg:order-1"}>{textFirst ? textBlock : visualBlock}</div>
          <div className={textFirst ? "" : "order-1 lg:order-2"}>{textFirst ? visualBlock : textBlock}</div>
        </div>
      </div>
    </section>
  );
}
