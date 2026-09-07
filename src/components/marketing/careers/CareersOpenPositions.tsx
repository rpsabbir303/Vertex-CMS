import { Reveal } from "@/components/Reveal";
import { getOpenJobs, type CareerJob } from "@/lib/marketing/careers/content";
import { CareersEmptyState, CareersJobRow } from "./CareersJobBoard";

type Props = {
  jobs?: CareerJob[];
};

export function CareersOpenPositions({ jobs }: Props) {
  const openJobs = getOpenJobs(jobs);

  return (
    <section id="open-positions" className="scroll-mt-28 border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Open positions</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">Open positions</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">
            {openJobs.length === 0
              ? "Roles appear here when Vertex publishes openings."
              : `${openJobs.length} open ${openJobs.length === 1 ? "role" : "roles"}.`}
          </p>
        </Reveal>

        <Reveal delay={70} className="mt-10">
          {openJobs.length === 0 ? (
            <CareersEmptyState />
          ) : (
            <ul className="border-t border-brand-line">
              {openJobs.map((job) => (
                <CareersJobRow key={job.id} job={job} />
              ))}
            </ul>
          )}
        </Reveal>
      </div>
    </section>
  );
}
