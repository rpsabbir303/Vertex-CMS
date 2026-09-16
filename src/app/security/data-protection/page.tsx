import type { Metadata } from "next";
import { SecurityPageShell } from "@/components/marketing/security/SecurityPageShell";
import { SecurityTopicContent } from "@/components/marketing/security/SecurityTopicContent";
import { securitySubpageMeta } from "@/lib/marketing/security/content";

const meta = securitySubpageMeta.dataProtection;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: { title: meta.title, description: meta.description, url: meta.canonical, type: "website" },
  robots: { index: true, follow: true },
};

export default function SecurityDataProtectionPage() {
  return (
    <SecurityPageShell pageId="data-protection">
      <SecurityTopicContent pageId="data-protection" />
    </SecurityPageShell>
  );
}
