import { Reveal } from "@/components/Reveal";
import { HUB_MODULES } from "@/lib/marketing/features/hub";
import { FeatureProductPreview } from "./FeatureProductPreview";

const FLOW = [
  { label: "Project", preview: "project" as const },
  { label: "Schedule", preview: "schedule" as const },
  { label: "Documents", preview: "docs" as const },
  { label: "RFI", preview: "docs" as const },
  { label: "Submittal", preview: "docs" as const },
  { label: "Change Order", preview: "finance" as const },
  { label: "Cost / Reporting", preview: "reports" as const },
];

export function FeaturesWorkflowSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-brand-navy">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/3 top-0 h-64 w-64 rounded-full bg-brand-orange/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-shell section-spacing relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
            Connected platform
          </p>
          <h2 className="display-title-light mt-3 text-3xl sm:text-4xl">
            One connected workflow from field to office.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-300">
            Projects, schedules, documents, RFIs, submittals, change orders, and reporting stay on the same
            record—not isolated tools.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-12">
          <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-2">
            {FLOW.map((step, index) => (
              <li key={step.label} className="flex flex-1 flex-col gap-2 lg:min-w-0">
                <div className="flex items-center gap-2 lg:flex-col lg:items-stretch">
                  <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <p className="font-mono text-[10px] font-bold text-brand-orange">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-[13px] font-semibold text-white">{step.label}</p>
                    <div className="mt-3 overflow-hidden rounded-lg border border-white/10">
                      <FeatureProductPreview
                        preview={step.preview}
                        dark={step.preview === "finance" || step.preview === "reports"}
                        scale="md"
                        className="min-h-[88px] border-0 bg-transparent"
                      />
                    </div>
                  </div>
                  {index < FLOW.length - 1 ? (
                    <span
                      className="hidden shrink-0 self-center px-1 font-mono text-brand-orange lg:block"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  ) : null}
                  {index < FLOW.length - 1 ? (
                    <span className="px-1 font-mono text-brand-orange lg:hidden" aria-hidden="true">
                      ↓
                    </span>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={120} className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {HUB_MODULES.map((mod) => (
            <a
              key={mod.id}
              href={"#" + mod.id}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 transition hover:border-brand-orange/30 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
            >
              <p className="font-mono text-[10px] font-bold text-brand-orange">{mod.number}</p>
              <p className="mt-1 text-[14px] font-semibold text-white">{mod.title}</p>
              <p className="mt-1 text-[12px] leading-relaxed text-slate-400 line-clamp-2">{mod.description}</p>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
