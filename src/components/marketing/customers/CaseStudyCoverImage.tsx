"use client";

import Image from "next/image";

import type { CaseStudyRecord } from "@/lib/marketing/customers/types";

import { CaseStudyAbstractVisual } from "./visuals/CaseStudyAbstractVisual";

const OBJECT_POSITIONS = ["object-center", "object-[center_28%]", "object-[center_35%]", "object-[center_42%]"] as const;

type Props = {
  study: CaseStudyRecord;
  /** Fallback index when no image is configured (empty / limited states). */
  visualIndex?: number;
  priority?: boolean;
  className?: string;
  /** Default 16:9 card header; featured layout can override. */
  aspectClassName?: string;
  sizes?: string;
  objectPositionClassName?: string;
  imageTreatment?: "default" | "featured";
};

export function CaseStudyCoverImage({
  study,
  visualIndex = 0,
  priority = false,
  className = "",
  aspectClassName = "aspect-video",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  objectPositionClassName,
  imageTreatment = "default",
}: Props) {
  const objectClass =
    objectPositionClassName ?? OBJECT_POSITIONS[visualIndex % OBJECT_POSITIONS.length] ?? "object-center";
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
    <div
      className={`relative w-full overflow-hidden bg-[#EEF2F7] ${aspectClassName} ${className} ${
        imageTreatment === "featured" ? "cust-case-study-image--featured" : "cust-case-study-image"
      }`}
    >
      <Image
        src={src}
        alt={study.imageAlt ?? "Construction project"}
        fill
        className={`object-cover ${objectClass}`}
        sizes={sizes}
        priority={priority}
        unoptimized={isRemote}
      />
    </div>
  );
}
