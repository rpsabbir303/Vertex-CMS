"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { getFeaturedStoryProject, type Project } from "@/lib/website/tenantData";
import { useLanguage } from "./LanguageProvider";

type Props = {
  project?: Project;
};

export function ProjectStory({ project: projectProp }: Props) {
  const { t } = useLanguage();
  const project = projectProp ?? getFeaturedStoryProject();

  if (!project) return null;

  const narrative = project.narrative ?? project.description;

  return (
    <section className="bg-brand-navy text-white">
      <div className="site-shell section-spacing">
        <Reveal>
          <p className="eyebrow-light">{t.projectStory.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[3.25rem]">
            {project.name}
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.14em] text-slate-400">
            {project.type} · {project.location} · {project.status}
          </p>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-0 lg:mt-16 lg:grid-cols-12">
          <Reveal className="relative min-h-[360px] lg:col-span-7 lg:min-h-[580px]">
            <Image
              src={project.image}
              alt={`${project.name} — featured construction project`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </Reveal>

          <Reveal delay={100} className="flex flex-col justify-center border-t border-white/10 bg-brand-panel p-8 sm:p-10 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-12 xl:p-14">
            <p className="font-display text-xl font-semibold leading-snug text-white sm:text-2xl lg:text-[1.75rem]">
              {t.projectStory.storyLead}
            </p>
            <p className="mt-6 text-sm leading-[1.8] text-slate-300 sm:text-base">{narrative}</p>

            <dl className="mt-10 space-y-5 border-t border-white/10 pt-10">
              {[
                [t.projectStory.projectType, project.type],
                [t.projectStory.location, project.location],
                [t.projectStory.status, project.status],
                project.scope ? [t.projectStory.scope, project.scope] : null,
              ]
                .filter(Boolean)
                .map((row) => (
                  <div key={row![0]} className="grid grid-cols-[1fr_1.2fr] gap-4 text-sm">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {row![0]}
                    </dt>
                    <dd className="font-medium text-white">{row![1]}</dd>
                  </div>
                ))}
            </dl>

            <Link href={`/projects/${project.slug}`} className="btn-ghost mt-10 inline-flex text-brand-orange">
              {t.projectStory.viewDetails}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
