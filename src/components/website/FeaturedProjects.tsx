"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { getFeaturedProjects, type Project } from "@/lib/website/tenantData";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "./LanguageProvider";

type Props = {
  projects?: Project[];
};

export function FeaturedProjects({ projects: projectsProp }: Props) {
  const { t } = useLanguage();
  const projects = getFeaturedProjects(projectsProp);

  if (projects.length === 0) return null;

  const [primary, ...secondary] = projects;

  return (
    <section className="section-spacing bg-[#F5F3EF]">
      <div className="site-shell">
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">{t.projects.eyebrow}</p>
            <h2 className="display-title mt-5 text-3xl sm:text-4xl lg:text-[3.5rem] lg:leading-[1.08]">
              {t.projects.headline}
            </h2>
            <p className="body-copy prose-width mt-5">{t.projects.supporting}</p>
          </div>
          <Link href="/projects" className="btn-ghost shrink-0">
            {t.projects.viewAll}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-14 grid w-full min-w-0 gap-5 lg:mt-16 lg:grid-cols-[1.05fr_0.45fr] lg:gap-6">
          <Reveal className="w-full min-w-0">
            <ProjectCard project={primary} size="large" viewLabel={t.projects.viewProject} />
          </Reveal>
          <div className="grid w-full min-w-0 gap-5">
            {secondary.map((project, i) => (
              <Reveal key={project.id} delay={(i + 1) * 80} className="h-full">
                <ProjectCard project={project} viewLabel={t.projects.viewProject} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
