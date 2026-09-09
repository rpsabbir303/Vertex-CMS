import Link from "next/link";
import { ArrowRight, CheckIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import {
  getProjectManagementCapabilityBlocks,
  type CategoryCapabilityBlock,
} from "@/lib/marketing/features/categories";
import { FeatureProductPreview } from "./FeatureProductPreview";

function CapabilityBlock({ block }: { block: CategoryCapabilityBlock }) {
  const wrap =
    block.surface === "soft"
      ? "bg-[#F7F8FA]"
      : block.surface === "mist"
        ? "bg-[#EEF2F7]"
        : "bg-white";

  return (
    <section id={block.areaId} className={"scroll-mt-36 border-b border-brand-line/60 " + wrap}>
      <div className="site-shell section-spacing">
        <div
          className={
            "grid items-center gap-10 lg:grid-cols-2 lg:gap-14 " +
            (block.reverse ? "lg:[&>*:first-child]:order-2" : "")
          }
        >
          <Reveal>
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              {block.label}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {block.title}
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{block.description}</p>
            <ul className="mt-6 space-y-2.5">
              {block.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-[14px] text-brand-navy">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                  {point}
                </li>
              ))}
            </ul>
            <Link href={block.href} className="btn-primary mt-8 inline-flex">
              {block.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <div className="relative overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4] p-4 sm:p-5">
              <FeatureProductPreview
                preview={block.preview}
                dark={block.dark}
                framed
                className="min-h-[260px] sm:min-h-[320px] lg:min-h-[360px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ProjectManagementCapabilityBlocks() {
  const blocks = getProjectManagementCapabilityBlocks();
  return (
    <div id="pm-capabilities">
      {blocks.map((block) => (
        <CapabilityBlock key={block.areaId} block={block} />
      ))}
    </div>
  );
}
