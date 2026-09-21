import type { Metadata } from "next";
import { FirstProjectForm } from "@/components/auth/FirstProjectForm";

export const metadata: Metadata = {
  title: "First Project | VertexBuild",
  description: "Create your first project in VertexBuild.",
};

export default function OnboardingProjectPage() {
  return <FirstProjectForm />;
}
