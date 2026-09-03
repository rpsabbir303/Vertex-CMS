import Image from "next/image";
import { CheckIcon } from "./Icons";
import { ProjectWorkspace } from "./mockups/ProductMockups";
import { Reveal } from "./Reveal";
import { photos } from "@/lib/images";

const BULLETS = [
  "Portfolio visibility",
  "Project dashboard",
  "Project phases",
  "Tasks",
  "Cost codes",
  "Team visibility",
];

export function ProjectManagement() {
  return (
    <section id="projects" className="bg-brand-soft py-20 sm:py-28">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="relative">
            <div className="absolute -bottom-6 -left-4 hidden h-40 w-40 overflow-hidden rounded-xl shadow-card sm:block lg:-left-8">
              <Image src={photos.crane} alt="Active construction site" fill className="object-cover" sizes="160px" />
            </div>
            <div className="relative z-10">
              <ProjectWorkspace />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="eyebrow">Project Management</p>
          <h2 className="headline mt-3">
            Know what&apos;s happening
            <br />
            across every project.
          </h2>
          <p className="copy mt-4">
            Manage project information, teams, tasks, costs, schedules and project health from a
            single workspace.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-sm text-brand-navy">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
