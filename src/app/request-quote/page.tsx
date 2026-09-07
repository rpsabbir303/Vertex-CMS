import type { Metadata } from "next";
import { Suspense } from "react";
import { RequestQuoteForm } from "@/components/conversion/RequestQuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote | Vertex CMS",
  description: "Request an enterprise quote for Vertex CMS based on your organization requirements.",
};

export default function RequestQuotePage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-sm text-brand-muted">Loading…</div>
      }
    >
      <RequestQuoteForm />
    </Suspense>
  );
}
