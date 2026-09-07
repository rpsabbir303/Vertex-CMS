import type { Metadata } from "next";
import { ConnectFinanceStep } from "@/components/auth/ConnectFinanceStep";

export const metadata: Metadata = {
  title: "Connect Bank / GL | Vertex CMS",
  description: "Connect financial systems during Vertex CMS onboarding.",
};

export default function OnboardingConnectPage() {
  return <ConnectFinanceStep />;
}
