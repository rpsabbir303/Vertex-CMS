"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { featureAreaPath, getFeatureAreaByAreaId } from "@/lib/marketing/features/featureAreas";
import type { HubFeatureArea, HubModuleSection } from "@/lib/marketing/features/hub";
import type { PreviewKey } from "@/lib/marketing/features/register";
import { FeatureProductPreview } from "../FeatureProductPreview";

export const ECOSYSTEM_BAND = "py-9 sm:py-11 lg:py-12";

export function useHubSelection(section: HubModuleSection) {
  const [activeId, setActiveId] = useState(section.areas[0]?.id ?? "");
  const active = section.areas.find((a) => a.id === activeId) ?? section.areas[0];

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash === section.id) {
        setActiveId(section.areas[0]?.id ?? "");
        return;
      }
      const match = section.areas.find((a) => a.id === hash);
      if (match) setActiveId(match.id);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [section.areas, section.id]);

  return {
    active,
    select: (area: HubFeatureArea) => setActiveId(area.id),
  };
}

export function areaPreview(area: HubFeatureArea, section: HubModuleSection): PreviewKey {
  return getFeatureAreaByAreaId(area.id)?.preview ?? section.preview;
}

export function areaDark(area: HubFeatureArea, section: HubModuleSection): boolean | undefined {
  return getFeatureAreaByAreaId(area.id)?.dark ?? section.dark;
}

export function ExploreFeature({
  area,
  tone = "navy",
}: {
  area: HubFeatureArea;
  tone?: "navy" | "orange" | "ghost" | "light";
}) {
  const href = featureAreaPath(area.slug);
  const cls =
    tone === "orange"
      ? "bg-brand-orange text-white hover:bg-orange-500"
      : tone === "ghost"
        ? "border border-brand-line bg-white text-brand-navy hover:border-brand-navy/25"
        : tone === "light"
          ? "border border-white/20 text-white hover:bg-white/10"
          : "bg-brand-navy text-white hover:bg-brand-navy/90";
  return (
    <Link
      href={href}
      className={
        "inline-flex items-center gap-2 rounded-sm px-4 py-2.5 font-sans text-[12px] font-semibold uppercase tracking-[0.08em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 " +
        cls
      }
    >
      Explore {area.label}
      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
    </Link>
  );
}

export function SectionIntro({
  section,
  invert,
}: {
  section: HubModuleSection;
  invert?: boolean;
}) {
  return (
    <header className="max-w-[36rem]">
      <p className="font-mono text-[11px] font-bold tracking-[0.12em] text-brand-orange">{section.number}</p>
      <h2
        id={`${section.id}-heading`}
        className={"mt-6 font-display text-[1.75rem] tracking-tight sm:text-[2rem] " + (invert ? "text-white" : "text-brand-navy")}
      >
        {section.title}
      </h2>
      <p className={"mt-4 text-[14px] leading-relaxed sm:text-[15px] " + (invert ? "text-slate-300" : "text-brand-muted")}>
        {section.description}
      </p>
    </header>
  );
}

export function LiveRegion({ id, label }: { id: string; label: string }) {
  return (
    <p id={id} className="sr-only" aria-live="polite">
      Showing {label}
    </p>
  );
}

export function ProductCanvas({
  area,
  section,
  className = "",
  ratio = "wide",
  previewOverride,
}: {
  area: HubFeatureArea;
  section: HubModuleSection;
  className?: string;
  ratio?: "wide" | "board" | "square";
  previewOverride?: PreviewKey;
}) {
  return (
    <FeatureProductPreview
      preview={previewOverride ?? areaPreview(area, section)}
      dark={previewOverride ? undefined : areaDark(area, section)}
      fit
      ratio={ratio}
      className={className}
    />
  );
}

export function FeatureCopy({ area }: { area: HubFeatureArea }) {
  const detail = getFeatureAreaByAreaId(area.id);
  return (
    <div>
      <h3 className="font-sans text-[15px] font-semibold text-brand-navy">{area.label}</h3>
      <p className="mt-1 text-[13px] leading-relaxed text-brand-muted">{detail?.heroTagline ?? area.description}</p>
    </div>
  );
}

export function GridWash({ variant }: { variant: "workspace" | "ledger" | "field" | "control" | "intel" | "growth" }) {
  const size = variant === "ledger" || variant === "control" ? "20px 20px" : "28px 28px";
  const opacity =
    variant === "intel" ? "opacity-[0.18]" : variant === "workspace" ? "opacity-40" : "opacity-[0.28]";
  return (
    <div
      className={"pointer-events-none absolute inset-0 " + opacity}
      style={{
        backgroundImage:
          "linear-gradient(rgba(8,35,63,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(8,35,63,0.045) 1px, transparent 1px)",
        backgroundSize: size,
      }}
      aria-hidden="true"
    />
  );
}
