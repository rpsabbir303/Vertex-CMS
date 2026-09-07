import { TeamBuilding } from "./TeamBuilding";
import { TeamCareersCTA } from "./TeamCareersCTA";
import { TeamHero } from "./TeamHero";
import { TeamKeyRoles } from "./TeamKeyRoles";
import { TeamLeadership } from "./TeamLeadership";

export function TeamPageContent() {
  return (
    <>
      <TeamHero />
      <TeamLeadership />
      <TeamKeyRoles />
      <TeamBuilding />
      <TeamCareersCTA />
    </>
  );
}
