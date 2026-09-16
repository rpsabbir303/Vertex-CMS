import type { Metadata } from "next";
import { SecurityContactContent } from "@/components/marketing/security/SecurityContactContent";
import { SecurityPageShell } from "@/components/marketing/security/SecurityPageShell";
import { securitySubpageMeta } from "@/lib/marketing/security/content";

const meta = securitySubpageMeta.contact;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: { title: meta.title, description: meta.description, url: meta.canonical, type: "website" },
  robots: { index: true, follow: true },
};

export default function SecurityContactPage() {
  return (
    <SecurityPageShell pageId="contact">
      <SecurityContactContent />
    </SecurityPageShell>
  );
}
