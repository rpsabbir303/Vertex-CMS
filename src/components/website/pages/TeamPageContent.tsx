"use client";

import { Reveal } from "@/components/Reveal";
import { ContentPlaceholder } from "../ContentPlaceholder";
import { PageHero } from "../PageHero";
import { TeamMemberCard } from "../TeamMemberCard";
import { useLanguage } from "../LanguageProvider";
import { teamMembers } from "@/lib/website/tenantData";

export function TeamPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.pages.team.title} description={t.pages.team.description} />

      <section className="section-spacing">
        <div className="site-shell">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <Reveal key={member.id} delay={i * 60}>
                <TeamMemberCard member={member} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <ContentPlaceholder message={t.pages.team.placeholder} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
