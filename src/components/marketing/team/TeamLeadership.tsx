import { Reveal } from "@/components/Reveal";
import { leadershipMembers } from "@/lib/marketing/team/content";
import { TeamProfile } from "./TeamProfile";

export function TeamLeadership() {
  const featured = leadershipMembers.find((m) => m.featured) ?? leadershipMembers[0];
  const secondary = leadershipMembers.filter((m) => m.id !== featured.id);

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal>
          <p className="eyebrow">Leadership</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">Leadership</h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-brand-muted">
            Profiles below are content-ready slots. Replace placeholders with approved Vertex leadership
            information — names, roles, photos, and biographies are not invented here.
          </p>
        </Reveal>

        <Reveal delay={60} className="mt-12">
          <TeamProfile member={featured} variant="featured" />
        </Reveal>

        {secondary.length > 0 ? (
          <div className="mt-14 grid gap-10 border-t border-brand-line pt-12 lg:grid-cols-2 lg:gap-12">
            {secondary.map((member, index) => (
              <Reveal key={member.id} delay={index * 60}>
                <TeamProfile member={member} variant="secondary" />
              </Reveal>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
