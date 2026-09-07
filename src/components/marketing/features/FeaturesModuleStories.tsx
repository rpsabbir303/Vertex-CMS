import { Reveal } from "@/components/Reveal";
import { HUB_MODULES } from "@/lib/marketing/features/hub";
import { FeatureModulePanel } from "./FeatureModulePanel";
import { FeatureProductPreview } from "./FeatureProductPreview";
import { FeatureStorySection, type FeatureStorySurface } from "./FeatureStorySection";

const PM_SURFACES: FeatureStorySurface[] = ["white", "soft", "mist", "white", "soft", "mist"];

const PANEL_SURFACES: Record<string, "white" | "soft" | "mist" | "navy"> = {
  "financial-management": "soft",
  "field-operations": "white",
  compliance: "mist",
  ai: "navy",
  growth: "soft",
};

/**
 * Editorial product stories for Project Management (full alternating sections),
 * plus interactive panels for the remaining modules — same hub data, no new features.
 */
export function FeaturesModuleStories() {
  const projectManagement = HUB_MODULES[0];
  const otherModules = HUB_MODULES.slice(1);

  return (
    <>
      {/* Project Management chapter intro + full feature stories */}
      <section
        id={projectManagement.id}
        className="scroll-mt-36 border-b border-brand-line/60 bg-white"
      >
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                {projectManagement.number} · CORE CAPABILITIES
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem]">
                {projectManagement.title}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">
                {projectManagement.description}
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {projectManagement.areas.map((area) => (
                  <li key={area.id}>
                    <a
                      href={"#" + area.id}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-brand-line bg-[#FAFBFD] px-3 py-2 text-[12px] font-semibold text-brand-navy transition hover:border-brand-orange/35 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/35"
                    >
                      {area.label}
                      <span aria-hidden="true" className="text-brand-orange">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <div className="relative overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4] p-4 sm:p-5">
                <FeatureProductPreview
                  preview={projectManagement.preview}
                  framed
                  className="min-h-[280px] sm:min-h-[340px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {projectManagement.areas.map((area, index) => (
        <FeatureStorySection
          key={area.id}
          area={area}
          moduleNumber={projectManagement.number}
          moduleTitle={projectManagement.title}
          reverse={index % 2 === 1}
          surface={PM_SURFACES[index % PM_SURFACES.length]}
          previewFallback={projectManagement.preview}
        />
      ))}

      {otherModules.map((module) => (
        <FeatureModulePanel
          key={module.id}
          module={module}
          surface={PANEL_SURFACES[module.id] ?? "soft"}
        />
      ))}
    </>
  );
}
