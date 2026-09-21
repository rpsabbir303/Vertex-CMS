import type { Metadata } from "next";
import { CompanySetupForm } from "@/components/auth/CompanySetupForm";

export const metadata: Metadata = {
  title: "Company Setup | VertexBuild",
  description: "Set up your company profile in VertexBuild.",
};

export default function OnboardingCompanyPage() {
  return <CompanySetupForm />;
}
