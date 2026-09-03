import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import type { Project } from "@/lib/website/tenantData";

type Props = {
  project: Project;
  className?: string;
  size?: "large" | "small";
  viewLabel?: string;
};

export function ProjectCard({ project, className = "", size = "small", viewLabel = "View Project" }: Props) {
  const isLarge = size === "large";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group block h-full overflow-hidden ${className}`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          isLarge
            ? "aspect-[16/10] min-h-[340px] lg:aspect-auto lg:min-h-[560px] lg:h-full"
            : "aspect-[4/3] min-h-[220px] lg:min-h-[260px]"
        }`}
      >
        <Image
          src={project.image}
          alt={`${project.name} — ${project.type} construction project`}
          fill
          className="image-hover-zoom object-cover"
          sizes={isLarge ? "(max-width: 1024px) 100vw, 68vw" : "(max-width: 1024px) 100vw, 32vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/25 to-transparent" />
        <div className={`absolute bottom-0 left-0 right-0 ${isLarge ? "p-8 sm:p-10 lg:p-12" : "p-6 sm:p-7"}`}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
            {project.type} · {project.location}
          </p>
          <h3
            className={`mt-2 font-display font-bold leading-tight text-white ${
              isLarge ? "text-2xl sm:text-3xl lg:text-[2.5rem]" : "text-lg sm:text-xl"
            }`}
          >
            {project.name}
          </h3>
          {isLarge && (
            <p className="prose-width mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
              {project.description}
            </p>
          )}
          <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wide text-white transition-all duration-300 group-hover:gap-3">
            {viewLabel}
            <ArrowRight className="h-4 w-4 text-brand-orange" />
          </span>
        </div>
      </div>
    </Link>
  );
}
