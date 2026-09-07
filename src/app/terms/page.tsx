import type { Metadata } from "next";
import { LegalLayout } from "@/components/marketing/legal/LegalLayout";
import { LEGAL_DOCS } from "@/lib/marketing/legal/content";

const doc = LEGAL_DOCS.terms;

export const metadata: Metadata = {
  title: doc.metaTitle,
  description: doc.metaDescription,
  alternates: { canonical: doc.slug },
  openGraph: {
    title: doc.metaTitle,
    description: doc.metaDescription,
    url: doc.slug,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return <LegalLayout docId="terms" />;
}
