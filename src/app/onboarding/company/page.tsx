import type { Metadata } from "next";
import { CompanySetupForm } from "@/components/auth/CompanySetupForm";

export const metadata: Metadata = {
  title: "Company Setup | Vertex CMS",
  description: "Set up your company profile in Vertex CMS.",
};

export default function OnboardingCompanyPage() {
  return <CompanySetupForm />;
}
