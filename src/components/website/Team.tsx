"use client";

import { Reveal } from "@/components/Reveal";
import { teamMembers, type TeamMember } from "@/lib/website/tenantData";
import { TeamMemberCard } from "./TeamMemberCard";
import { useLanguage } from "./LanguageProvider";

type Props = {
  members?: TeamMember[];
};

export function Team({ members: membersProp }: Props) {
  const { t } = useLanguage();
  const members = membersProp ?? teamMembers;

  if (members.length === 0) return null;

  return (
    <section className="section-spacing border-t border-brand-line bg-white">
      <div className="site-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{t.team.eyebrow}</p>
          <h2 className="display-title mt-5 text-3xl sm:text-4xl lg:text-[3.5rem] lg:leading-[1.08]">
            {t.team.headline}
            <br />
            {t.team.headlineLine2}
          </h2>
          <p className="body-copy prose-width mt-6">{t.team.supporting}</p>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {members.map((member, i) => (
            <Reveal key={member.id} delay={i * 60}>
              <TeamMemberCard member={member} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
