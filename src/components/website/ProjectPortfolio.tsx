import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { DEMO_PROJECTS, type ProjectCard } from "@/lib/website/homeData";

type Props = {
  projects?: ProjectCard[];
};

export function ProjectPortfolio({ projects = DEMO_PROJECTS }: Props) {
  return (
    <section className="border-b border-brand-line bg-white py-16 sm:py-20 lg:py-24">
      <div className="site-shell">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Project Portfolio</p>
            <h2 className="display-title mt-4 text-3xl sm:text-4xl lg:text-[2.75rem]">
              Built Around Real Projects
            </h2>
          </div>
          <Link href="/projects" className="btn-ghost shrink-0">
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <ProjectCardItem project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCardItem({ project }: { project: ProjectCard }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-brand-line bg-white transition hover:-translate-y-0.5 hover:shadow-product">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.name} construction project`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange">{project.type}</p>
        <h3 className="mt-2 text-xl font-bold text-brand-navy">{project.name}</h3>
        <p className="mt-1 text-sm text-brand-muted">{project.location}</p>
        <p className="mt-3 text-sm leading-relaxed text-brand-muted">{project.description}</p>
        <Link
          href={`/projects/${project.slug}`}
          className="btn-ghost mt-4 inline-flex items-center text-sm"
        >
          View Project
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
