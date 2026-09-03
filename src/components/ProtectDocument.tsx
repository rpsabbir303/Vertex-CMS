import { FeaturePoints, LearnMore } from "./SectionBits";
import { DocsUI, SafetyUI } from "./mockups/ProductMockups";
import { Reveal } from "./Reveal";

export function ProtectDocument() {
  return (
    <section id="protect" className="bg-white py-20 sm:py-24">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <Reveal className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] p-3 shadow-card sm:p-4">
            <DocsUI />
            <div className="mt-3 origin-top scale-[0.98]">
              <SafetyUI />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <p className="eyebrow">Protect & Document</p>
          <h2 className="headline mt-3">Keep every detail documented and accountable.</h2>
          <p className="copy mt-4">
            Safety, drawings, documents, collaboration, and closeout stay connected to the same
            project record.
          </p>
          <FeaturePoints
            items={[
              "Safety & compliance visibility",
              "Drawings with revision control",
              "Documents, markup & search",
              "Collaboration & closeout",
            ]}
          />
          <LearnMore href="/features/documents-project-information" label="Learn more about Documents" />
        </Reveal>
      </div>
    </section>
  );
}
