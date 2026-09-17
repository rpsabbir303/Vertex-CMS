"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { featureAreaPath, getFeatureAreaByAreaId } from "@/lib/marketing/features/featureAreas";
import type { HubFeatureArea, HubModuleSection } from "@/lib/marketing/features/hub";
import {
  ECOSYSTEM_BAND,
  ExploreFeature,
  GridWash,
  LiveRegion,
  ProductCanvas,
  SectionIntro,
  useHubSelection,
} from "./FeaturesEcosystemShared";

function complianceCell(area: HubFeatureArea): string {
  return area.tags[0] ?? "—";
}

function workforceCell(area: HubFeatureArea): string {
  return area.tags[1] ?? area.tags[0] ?? "—";
}

function ExploreLink({ area }: { area: HubFeatureArea }) {
  return (
    <Link
      href={featureAreaPath(area.slug)}
      className="inline-flex items-center gap-1 font-sans text-[13px] font-semibold text-brand-blue hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
    >
      Explore
      <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
    </Link>
  );
}

function WorkforceRow({
  area,
  selected,
  onSelect,
}: {
  area: HubFeatureArea;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <>
      <tr className={selected ? "bg-brand-orange/[0.07]" : "border-t border-brand-line/70 hover:bg-[#FAFBFD]"}>
        <td className="px-4 py-3.5">
          <button
            type="button"
            aria-pressed={selected}
            onClick={onSelect}
            className="text-left font-sans text-[14px] font-semibold text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
          >
            {area.label}
          </button>
        </td>
        <td className="px-4 py-3.5 font-sans text-[13px] text-brand-muted">{complianceCell(area)}</td>
        <td className="px-4 py-3.5 font-sans text-[13px] text-brand-muted">{workforceCell(area)}</td>
        <td className="px-4 py-3.5">
          <ExploreLink area={area} />
        </td>
      </tr>
    </>
  );
}

function WorkforceMobileItem({
  area,
  selected,
  onSelect,
}: {
  area: HubFeatureArea;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      className={
        "border border-brand-line/90 bg-white p-4 " +
        (selected ? "shadow-[inset_3px_0_0_0_#FF6A00]" : "")
      }
    >
      <button
        type="button"
        aria-pressed={selected}
        onClick={onSelect}
        className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
      >
        <p className="font-sans text-[14px] font-semibold text-brand-navy">{area.label}</p>
      </button>
      <dl className="mt-3 grid grid-cols-2 gap-2 text-[12px]">
        <div className="min-w-0 rounded-sm border border-brand-line/70 bg-[#FAFBFD] px-2.5 py-2">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Compliance</dt>
          <dd className="mt-0.5 font-medium text-brand-navy">{complianceCell(area)}</dd>
        </div>
        <div className="min-w-0 rounded-sm border border-brand-line/70 bg-[#FAFBFD] px-2.5 py-2">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Workforce</dt>
          <dd className="mt-0.5 font-medium text-brand-navy">{workforceCell(area)}</dd>
        </div>
      </dl>
      <div className="mt-3 border-t border-brand-line/70 pt-3">
        <ExploreLink area={area} />
      </div>
    </div>
  );
}

const COMPLIANCE_HUB_SLUGS = new Set(["subcontractors", "compliance", "workforce", "payroll-readiness"]);

export function WorkforceControl({ section }: { section: HubModuleSection }) {
  const hubAreas = section.areas.filter((a) => COMPLIANCE_HUB_SLUGS.has(a.slug));
  const { active, select } = useHubSelection({ ...section, areas: hubAreas });
  const detail = getFeatureAreaByAreaId(active.id);

  return (
    <section
      id={section.id}
      className="relative scroll-mt-36 overflow-hidden border-b border-brand-line/80 bg-white"
      aria-labelledby={`${section.id}-heading`}
      data-design-layer="WorkforceControl"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,35,63,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(8,35,63,0.035) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      <GridWash variant="control" />
      <div className={"feat-shell relative " + ECOSYSTEM_BAND}>
        <SectionIntro section={section} />

        <div className="mt-8 min-w-0 overflow-hidden border border-brand-line/90 bg-white shadow-[0_8px_40px_-24px_rgba(8,35,63,0.12)]">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-line/80 bg-[#F6F8FB] px-4 py-3">
            <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-navy">
              Workforce control
            </p>
            <p className="font-sans text-[10px] text-brand-muted">Subcontractors · Compliance · Workforce · Payroll</p>
          </div>

          <div className="hidden min-w-0 md:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-0 text-left">
                <thead>
                  <tr className="border-b border-brand-line/80 bg-[#FAFBFD]">
                    {["Feature", "Compliance", "Workforce", "Explore"].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-muted last:text-right md:last:pr-6"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {hubAreas.map((area) => (
                    <WorkforceRow
                      key={area.id}
                      area={area}
                      selected={area.id === active.id}
                      onSelect={() => select(area)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-2 p-3 md:hidden">
            {hubAreas.map((area) => (
              <WorkforceMobileItem
                key={area.id}
                area={area}
                selected={area.id === active.id}
                onSelect={() => select(area)}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 grid min-w-0 gap-4 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] lg:items-start">
          <div className="border border-brand-line/80 bg-white p-4 shadow-[0_1px_0_0_rgba(8,35,63,0.04)]">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-brand-orange">
              Subcontractors → compliance → payroll readiness
            </p>
            <p className="mt-3 font-sans text-[15px] font-semibold text-brand-navy">{active.label}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">
              {detail?.heroTagline ?? active.description}
            </p>
            <div className="mt-4">
              <ExploreFeature area={active} tone="ghost" />
            </div>
          </div>
          <div className="min-w-0 overflow-hidden border border-brand-line/80 bg-white">
            <ProductCanvas area={active} section={section} ratio="wide" className="rounded-none border-0" />
          </div>
        </div>
        <LiveRegion id={`${section.id}-live`} label={active.label} />
      </div>
    </section>
  );
}
