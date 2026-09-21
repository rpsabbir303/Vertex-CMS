import type { Metadata } from "next";
import { InviteTeamForm } from "@/components/auth/InviteTeamForm";

export const metadata: Metadata = {
  title: "Invite Team | VertexBuild",
  description: "Invite teammates to your VertexBuild workspace.",
};

export default function OnboardingInvitePage() {
  return <InviteTeamForm />;
}
