import type { Metadata } from "next";
import { InviteTeamForm } from "@/components/auth/InviteTeamForm";

export const metadata: Metadata = {
  title: "Invite Team | Vertex CMS",
  description: "Invite teammates to your Vertex CMS workspace.",
};

export default function OnboardingInvitePage() {
  return <InviteTeamForm />;
}
