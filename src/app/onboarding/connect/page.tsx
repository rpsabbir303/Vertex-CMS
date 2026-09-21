import type { Metadata } from "next";
import { ConnectFinanceStep } from "@/components/auth/ConnectFinanceStep";

export const metadata: Metadata = {
  title: "Connect Bank / GL | VertexBuild",
  description: "Connect financial systems during VertexBuild onboarding.",
};

export default function OnboardingConnectPage() {
  return <ConnectFinanceStep />;
}
