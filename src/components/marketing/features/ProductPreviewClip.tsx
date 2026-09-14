"use client";

import { FeatureProductPreview } from "@/components/marketing/features/FeatureProductPreview";
import type { PreviewKey } from "@/lib/marketing/features/register";

/** Fixed viewport heights — scaled mockups must not stretch parents. */
export const PREVIEW_CLIP_HEIGHTS = {
  xl: "h-[260px] sm:h-[320px] lg:h-[380px]",
  lg: "h-[220px] sm:h-[280px] lg:h-[340px]",
  md: "h-[180px] sm:h-[220px] lg:h-[260px]",
  sm: "h-[132px] sm:h-[152px]",
  xs: "h-[88px] sm:h-[100px]",
  thumb: "h-[72px] sm:h-[80px]",
} as const;

type ClipSize = keyof typeof PREVIEW_CLIP_HEIGHTS;

type Props = {
  preview: PreviewKey;
  dark?: boolean;
  label?: string;
  size?: ClipSize;
  scale?: "sm" | "md" | "lg";
  framed?: boolean;
  className?: string;
  /** Outer chrome (label bar + border) like ProductStage */
  chrome?: boolean;
  /** Cap width so mockups do not stretch across ultra-wide containers */
  maxWidth?: string;
};

export function ProductPreviewClip({
  preview,
  dark,
  label,
  size = "lg",
  scale = "md",
  framed = false,
  className = "",
  chrome = false,
  maxWidth = "max-w-full",
}: Props) {
  const surface = dark ? "bg-brand-navy" : "bg-[#FAFBFD]";
  const fadeFrom = dark ? "from-brand-navy" : chrome ? "from-white" : "from-[#FAFBFD]";

  const viewport = (
    <div
      className={
        "relative w-full overflow-hidden " +
        PREVIEW_CLIP_HEIGHTS[size] +
        " " +
        (chrome ? surface : "rounded-xl border border-brand-line/70 " + surface)
      }
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
        <FeatureProductPreview
          preview={preview}
          dark={dark}
          framed={framed}
          scale={scale}
          className="rounded-none border-0 bg-transparent shadow-none"
        />
      </div>
      <div
        className={"pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t to-transparent " + fadeFrom}
        aria-hidden="true"
      />
    </div>
  );

  if (!chrome) {
    return (
      <div className={"min-w-0 " + maxWidth + " " + className}>
        {label ? (
          <p
            className={
              "mb-2 px-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] " +
              (dark ? "text-slate-400" : "text-brand-muted")
            }
          >
            {label}
          </p>
        ) : null}
        {viewport}
      </div>
    );
  }

  return (
    <div
      className={
        "min-w-0 overflow-hidden rounded-[1.35rem] border border-brand-line/70 bg-white " +
        maxWidth +
        " " +
        className
      }
    >
      {label ? (
        <p
          className={
            "border-b px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] " +
            (dark ? "border-white/10 bg-brand-navy text-slate-400" : "border-brand-line/60 text-brand-muted")
          }
        >
          {label}
        </p>
      ) : null}
      {viewport}
    </div>
  );
}
