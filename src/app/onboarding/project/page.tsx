import type { Metadata } from "next";
import { FirstProjectForm } from "@/components/auth/FirstProjectForm";

export const metadata: Metadata = {
  title: "First Project | Vertex CMS",
  description: "Create your first project in Vertex CMS.",
};

export default function OnboardingProjectPage() {
  return <FirstProjectForm />;
}
