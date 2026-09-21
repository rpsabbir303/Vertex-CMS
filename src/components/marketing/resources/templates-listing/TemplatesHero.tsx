import { ResourceHeroAmbient } from "../blog-detail/abstracts";
import { TemplateHeroWorkflowAbstract } from "./TemplateSectionAbstracts";

export function TemplatesHero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line/60 bg-[#F5F8FC]" data-design-layer="TemplatesHero">
      <ResourceHeroAmbient />
      <div className="resource-detail-shell relative z-[1] py-9 sm:py-10 lg:py-11">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,20rem)] lg:gap-12">
          <div className="min-w-0" data-design-layer="content">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">Templates</p>
            <h1 className="mt-2.5 max-w-2xl font-display text-[1.85rem] font-bold leading-[1.12] tracking-tight text-brand-navy sm:text-[2.35rem] lg:text-[2.5rem]">
              Ready-to-use workflows for construction teams
            </h1>
            <p className="mt-3 max-w-xl text-[15px] leading-[1.65] text-brand-muted sm:text-[15.5px]">
              VertexBuild templates help teams standardize recurring project, field, financial, compliance, and operational
              workflows — structured worksheets and checklists you can adapt before data lives on the project record.
            </p>
          </div>
          <div className="justify-self-center rounded-sm border border-brand-line/70 bg-white/75 px-3 py-4 sm:justify-self-end lg:px-5 lg:py-5">
            <TemplateHeroWorkflowAbstract />
          </div>
        </div>
      </div>
    </section>
  );
}
