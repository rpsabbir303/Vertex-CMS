import type { Metadata } from "next";
import { SecurityPageContent } from "@/components/marketing/security/SecurityPageContent";
import { SecurityPageShell } from "@/components/marketing/security/SecurityPageShell";
import { securityPageMeta } from "@/lib/marketing/security/content";

export const metadata: Metadata = {
  title: securityPageMeta.title,
  description: securityPageMeta.description,
  alternates: { canonical: securityPageMeta.canonical },
  openGraph: {
    title: securityPageMeta.title,
    description: securityPageMeta.description,
    url: securityPageMeta.canonical,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function SecurityPage() {
  return (
    <SecurityPageShell pageId="hub">
      <SecurityPageContent />
    </SecurityPageShell>
  );
}
