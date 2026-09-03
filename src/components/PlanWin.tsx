import { FeaturePoints, LearnMore } from "./SectionBits";
import { EstimateUI, ProjectWorkspace } from "./mockups/ProductMockups";
import { Reveal } from "./Reveal";

export function PlanWin() {
  return (
    <section id="plan" className="bg-brand-soft py-20 sm:py-24">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <p className="eyebrow">Plan & Win</p>
          <h2 className="headline mt-3">Start every project with better visibility.</h2>
          <p className="copy mt-4">
            Manage portfolio health and preconstruction in one workspace — from projects and phases
            through estimating and bids.
          </p>
          <FeaturePoints
            items={[
              "Projects & portfolio dashboard",
              "Project status, progress & milestones",
              "Estimating & bid management",
              "Tasks and cost-code visibility",
            ]}
          />
          <LearnMore href="/features/project-management" label="Learn more about Project Management" />
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-4">
            <ProjectWorkspace />
            <div className="origin-top scale-[0.98] overflow-hidden rounded-2xl">
              <EstimateUI />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
