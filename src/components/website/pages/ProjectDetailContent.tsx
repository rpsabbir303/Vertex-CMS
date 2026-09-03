"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { ContentPlaceholder } from "../ContentPlaceholder";
import { PageHero } from "../PageHero";
import { useLanguage } from "../LanguageProvider";
import type { Project } from "@/lib/website/tenantData";
import { REQUEST_BID_HREF } from "@/lib/website/navigation";

type Props = {
  project: Project;
};

export function ProjectDetailContent({ project }: Props) {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={project.name} description={project.description} />

      <section className="section-spacing">
        <div className="site-shell">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>
              {project.gallery && project.gallery.length > 1 && (
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {project.gallery.slice(0, 3).map((src, i) => (
                    <div key={i} className="relative aspect-[4/3] overflow-hidden">
                      <Image src={src} alt="" fill className="object-cover" sizes="200px" />
                    </div>
                  ))}
                </div>
              )}
            </Reveal>

            <Reveal delay={80}>
              <dl className="space-y-5 border border-brand-line bg-[#FAFAF8] p-6 sm:p-8">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                    {t.pages.projectDetail.projectType}
                  </dt>
                  <dd className="mt-1 font-medium text-brand-navy">{project.type}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                    {t.pages.projectDetail.location}
                  </dt>
                  <dd className="mt-1 font-medium text-brand-navy">{project.location}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                    {t.pages.projectDetail.status}
                  </dt>
                  <dd className="mt-1 font-medium text-brand-navy">{project.status}</dd>
                </div>
                {project.scope && (
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                      {t.pages.projectDetail.scope}
                    </dt>
                    <dd className="mt-1 font-medium text-brand-navy">{project.scope}</dd>
                  </div>
                )}
              </dl>

              <Link
                href={REQUEST_BID_HREF}
                className="btn-primary mt-6 inline-flex w-full justify-center sm:w-auto"
              >
                {t.nav.requestBid}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal className="mt-12">
            <ContentPlaceholder message={t.pages.projectDetail.placeholder} />
          </Reveal>

          <div className="mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-orange"
            >
              ← {t.pages.projectDetail.backToProjects}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
