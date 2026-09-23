"use client";

import Image from "next/image";

import type { CaseStudyRecord } from "@/lib/marketing/customers/types";

import { CaseStudyAbstractVisual } from "./visuals/CaseStudyAbstractVisual";

type Props = {
  study: CaseStudyRecord;
  /** Fallback index when no image is configured (empty / limited states). */
  visualIndex?: number;
  priority?: boolean;
  className?: string;
  /** Default 16:9 card header; featured layout can override. */
  aspectClassName?: string;
  sizes?: string;
};

export function CaseStudyCoverImage({
  study,
  visualIndex = 0,
  priority = false,
  className = "",
  aspectClassName = "aspect-video",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: Props) {
  const src = study.imageSrc?.trim();

  if (!src) {
    return (
      <CaseStudyAbstractVisual
        variant={visualIndex}
        className={`${aspectClassName} w-full ${className}`}
      />
    );
  }

  const isRemote = src.startsWith("http://") || src.startsWith("https://");

  return (
    <div className={`relative w-full overflow-hidden ${aspectClassName} ${className}`}>
      <Image
        src={src}
        alt={study.imageAlt ?? "Construction project"}
        fill
        className="object-cover object-center"
        sizes={sizes}
        priority={priority}
        unoptimized={isRemote}
      />
    </div>
  );
}
