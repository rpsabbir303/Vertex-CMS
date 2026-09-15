"use client";

import { CompanyCanvas, CompanyNav } from "@/components/marketing/company/CompanyCanvas";
import { CompanyHero } from "@/components/marketing/company/CompanyHero";
import { TeamHeroVisual } from "@/components/marketing/company/CompanyVisuals";
import { TEAM_PENDING, hasDemoTeamContent, teamHero } from "@/lib/marketing/team/content";
import { useTeamDirectory } from "@/lib/marketing/team/useTeamDirectory";
import { TeamBuilding } from "./TeamBuilding";
import { TeamCareersCTA } from "./TeamCareersCTA";
import { TeamDirectory } from "./TeamDirectory";
import { TeamLeadership } from "./TeamLeadership";
import { TeamPendingState } from "./TeamPendingState";

type Props = {
  preview?: "loading" | "error";
};

export function TeamPageContent({ preview }: Props) {
  const { status, directory, errorMessage, retrying, retry } = useTeamDirectory(preview);
  const demoActive = hasDemoTeamContent(directory.members);

  return (
    <CompanyCanvas>
      <CompanyHero
        eyebrow={teamHero.eyebrow}
        headline={teamHero.headline}
        supporting={
          teamHero.supporting ? (
            <p>{teamHero.supporting}</p>
          ) : demoActive ? undefined : (
            <TeamPendingState compact body={TEAM_PENDING.hero} />
          )
        }
        visual={<TeamHeroVisual />}
      />
      <TeamLeadership
        status={status}
        members={directory.members}
        errorMessage={errorMessage}
        retrying={retrying}
        onRetry={retry}
      />
      <TeamDirectory status={status} members={directory.members} />
      <TeamBuilding />
      <TeamCareersCTA hidePendingIntro={demoActive} />
      <CompanyNav current="team" />
    </CompanyCanvas>
  );
}
