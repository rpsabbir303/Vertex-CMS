"use client";

import { Reveal } from "@/components/Reveal";
import { ContentPlaceholder } from "../ContentPlaceholder";
import { PageHero } from "../PageHero";
import { ProjectCard } from "../ProjectCard";
import { useLanguage } from "../LanguageProvider";
import {
  getFeaturedProjects,
  getProjectTypes,
  projects,
} from "@/lib/website/tenantData";
import { PAGE_ANCHORS } from "@/lib/website/navigation";

export function ProjectsPageContent() {
  const { t } = useLanguage();
  const featured = getFeaturedProjects(projects);
  const types = getProjectTypes(projects);

  return (
    <>
      <PageHero title={t.pages.projects.title} description={t.pages.projects.description} />

      <section id={PAGE_ANCHORS.featured} className="section-spacing scroll-mt-24">
        <div className="site-shell">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-brand-navy">{t.pages.projects.featured}</h2>
          </Reveal>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {featured.map((project, i) => (
              <Reveal key={project.id} delay={i * 80}>
                <ProjectCard project={project} viewLabel={t.projects.viewProject} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id={PAGE_ANCHORS.categories} className="section-spacing scroll-mt-24 bg-[#FAFAF8]">
        <div className="site-shell">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-brand-navy">{t.pages.projects.categories}</h2>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-3">
            {types.map((type) => (
              <span
                key={type}
                className="border border-brand-line bg-white px-5 py-2.5 text-sm font-medium text-brand-navy"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-shell">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-brand-navy">{t.pages.projects.allProjects}</h2>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 60}>
                <ProjectCard project={project} viewLabel={t.projects.viewProject} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <ContentPlaceholder message={t.pages.projects.placeholder} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
