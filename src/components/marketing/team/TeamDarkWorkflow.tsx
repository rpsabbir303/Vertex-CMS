import { Reveal } from "@/components/Reveal";
import { BrowserFrame, DocsUI, FinanceUI, ProjectWorkspace } from "@/components/mockups/ProductMockups";
import { darkWorkflowSection } from "@/lib/marketing/team/content";
import { WorkflowStackDiagram } from "./TeamSystemDiagrams";

export function TeamDarkWorkflow() {
  const copy = darkWorkflowSection;

  return (
    <section className="relative z-[2] border-b border-brand-navy/10 bg-[#08233F] text-white" aria-labelledby="team-dark-workflow-heading">
      <div className="site-shell py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-14">
          <Reveal>
            <h2 id="team-dark-workflow-heading" className="display-title text-[1.65rem] leading-[1.12] text-white sm:text-[2rem]">
              {copy.headline}
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-[1.8] text-white/88">{copy.body}</p>
            <div className="mt-10 lg:hidden">
              <WorkflowStackDiagram steps={copy.stack} light />
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="grid gap-6 sm:grid-cols-[auto_1fr] lg:grid-cols-1 xl:grid-cols-[auto_1fr]">
              <div className="hidden sm:block lg:hidden xl:block">
                <WorkflowStackDiagram steps={copy.stack} light />
              </div>
              <div className="space-y-3">
                <div className="overflow-hidden border border-white/15 bg-white/5">
                  <BrowserFrame url="app.vertexcms.com / project" className="shadow-none [&_*]:text-brand-navy">
                    <div className="max-h-[100px] overflow-hidden origin-top scale-[0.85]">
                      <ProjectWorkspace />
                    </div>
                  </BrowserFrame>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="overflow-hidden border border-white/15 bg-white/5 p-1">
                    <div className="max-h-[72px] overflow-hidden scale-[0.55] origin-top-left">
                      <DocsUI />
                    </div>
                  </div>
                  <div className="overflow-hidden border border-white/15 bg-white/5 p-1">
                    <div className="max-h-[72px] overflow-hidden scale-[0.55] origin-top-left">
                      <FinanceUI />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
