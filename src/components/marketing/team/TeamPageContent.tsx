"use client";

import { CompanyCanvas } from "@/components/marketing/company/CompanyCanvas";
import { hasDemoTeamContent } from "@/lib/marketing/team/content";
import { useTeamDirectory } from "@/lib/marketing/team/useTeamDirectory";
import { TeamBuildStorySection } from "./TeamBuildStorySection";
import { TeamCareersCTA } from "./TeamCareersCTA";
import { TeamEditorialGallery } from "./TeamEditorialGallery";
import { TeamHeroSection } from "./TeamHeroSection";
import { TeamLeadershipDirection } from "./TeamLeadershipDirection";

type Props = {
  preview?: "loading" | "error";
};

export function TeamPageContent({ preview }: Props) {
  const { status, directory, errorMessage, retrying, retry } = useTeamDirectory(preview);
  const demoActive = hasDemoTeamContent(directory.members);

  return (
    <CompanyCanvas>
      <TeamHeroSection
        showCopy={demoActive || directory.members.some((m) => m.name?.trim())}
        members={directory.members}
      />
      <TeamLeadershipDirection
        status={status}
        members={directory.members}
        errorMessage={errorMessage}
        retrying={retrying}
        onRetry={retry}
      />
      <TeamEditorialGallery status={status} members={directory.members} />
      <TeamBuildStorySection />
      <TeamCareersCTA hidePendingIntro={demoActive} />
    </CompanyCanvas>
  );
}
