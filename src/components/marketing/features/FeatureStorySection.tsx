"use client";

import Link from "next/link";
import { ArrowRight, CheckIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { featureAreaPath, getFeatureAreaByAreaId } from "@/lib/marketing/features/featureAreas";
import type { HubFeatureArea } from "@/lib/marketing/features/hub";
import type { PreviewKey } from "@/lib/marketing/features/register";
import { FeatureProductPreview } from "./FeatureProductPreview";

export type FeatureStorySurface = "white" | "soft" | "mist" | "navy";

type Props = {
  area: HubFeatureArea;
  moduleNumber: string;
  moduleTitle: string;
  reverse?: boolean;
  surface?: FeatureStorySurface;
  /** Override preview from feature detail registry when present */
  previewFallback?: PreviewKey;
};

const SURFACE: Record<FeatureStorySurface, string> = {
  white: "bg-white",
  soft: "bg-[#F7F8FA]",
  mist: "bg-[#EEF2F7]",
  navy: "bg-brand-navy text-white",
};

const STAGE: Record<FeatureStorySurface, string> = {
  white: "from-[#EEF2F7] via-[#F5F7FA] to-[#E8EEF5]",
  soft: "from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4]",
  mist: "from-[#E4EBF4] via-[#EDF1F6] to-[#DDE5EF]",
  navy: "from-[#061525] via-[#0A1F35] to-[#08233F]",
};

export function FeatureStorySection({
  area,
  moduleNumber,
  moduleTitle,
  reverse = false,
  surface = "white",
  previewFallback = "project",
}: Props) {
  const detail = getFeatureAreaByAreaId(area.id);
  const preview = detail?.preview ?? previewFallback;
  const dark = detail?.dark ?? surface === "navy";
  const tagline = detail?.heroTagline ?? area.description;
  const capabilities = (detail?.capabilities ?? area.tags).slice(0, 4);
  const isNavy = surface === "navy";

  return (
    <section
      id={area.id}
      className={"scroll-mt-36 border-b border-brand-line/60 " + SURFACE[surface]}
    >
      <div className="site-shell section-spacing">
        <div
          className={
            "grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16 " +
            (reverse ? "lg:[&>*:first-child]:order-2" : "")
          }
        >
          <Reveal>
            <p
              className={
                "font-mono text-[11px] font-semibold tracking-[0.16em] " +
                (isNavy ? "text-brand-orange" : "text-brand-orange")
              }
            >
              {moduleNumber} / {moduleTitle}
            </p>
            <h2
              className={
                "mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl " +
                (isNavy ? "text-white" : "text-brand-navy")
              }
            >
              {area.label}
            </h2>
            <p
              className={
                "mt-4 text-[17px] font-medium leading-snug " +
                (isNavy ? "text-slate-100" : "text-brand-navy/90")
              }
            >
              {tagline}
            </p>
            <p
              className={
                "mt-3 max-w-lg text-[15px] leading-relaxed " +
                (isNavy ? "text-slate-300" : "text-brand-muted")
              }
            >
              {area.description}
            </p>

            <ul className="mt-7 space-y-3">
              {capabilities.map((cap) => (
                <li
                  key={cap}
                  className={
                    "flex items-start gap-2.5 text-[14px] " +
                    (isNavy ? "text-slate-200" : "text-brand-navy")
                  }
                >
                  <span
                    className={
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full " +
                      (isNavy ? "bg-brand-orange/20 text-brand-orange" : "bg-brand-orange/10 text-brand-orange")
                    }
                  >
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {cap}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href={featureAreaPath(area.slug)}
                className={
                  isNavy
                    ? "inline-flex items-center gap-2 rounded-sm bg-brand-orange px-5 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#e85f00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
                    : "btn-primary inline-flex"
                }
              >
                Explore {area.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div
              className={
                "relative overflow-hidden rounded-2xl border bg-gradient-to-br p-4 sm:p-5 " +
                STAGE[surface] +
                " " +
                (isNavy ? "border-white/10" : "border-brand-line")
              }
            >
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-brand-orange/10 blur-3xl"
                aria-hidden="true"
              />
              <FeatureProductPreview
                preview={preview}
                dark={dark}
                framed
                className="min-h-[260px] transition duration-300 hover:scale-[1.01] motion-reduce:hover:scale-100 sm:min-h-[320px] lg:min-h-[360px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
