"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { VertexLogo } from "@/components/Icons";
import { AUTH_BACKEND_GAPS, AUTH_PREVIEW_NOTICE } from "@/lib/auth/client";
import { resolveAuthGate } from "@/lib/auth/guards";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { readAuthSession } from "@/lib/auth/session";

/**
 * Post-onboarding app entry placeholder.
 * Production must redirect to the authenticated tenant CMS URL.
 */
export default function AppEntryPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [subdomain, setSubdomain] = useState<string | undefined>();
  const [tenantId, setTenantId] = useState<string | undefined>();
  const [trialEndsAt, setTrialEndsAt] = useState<string | null>(null);

  useEffect(() => {
    const session = readAuthSession();
    const gate = resolveAuthGate(session, { requirePostTrialCheckout: true });

    if (gate.reason === "unauthenticated") {
      router.replace(AUTH_ROUTES.signIn);
      return;
    }
    if (gate.redirectTo && gate.reason !== "ready") {
      router.replace(gate.redirectTo);
      return;
    }
    if (!session) {
      router.replace(AUTH_ROUTES.signIn);
      return;
    }

    setCompanyName(session.companyName);
    setSubdomain(session.tenant.subdomain);
    setTenantId(session.tenant.tenantId);
    setTrialEndsAt(session.trial.trial_ends_at);
    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F9FC] text-sm text-brand-muted">
        Loading workspace…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-brand-navy">
      <header className="border-b border-brand-line bg-white">
        <div className="site-shell flex h-16 items-center justify-between">
          <VertexLogo />
          <span className="text-[12px] font-semibold uppercase tracking-wide text-brand-muted">VertexBuild</span>
        </div>
      </header>
      <main className="site-shell py-12">
        <div className="mb-4 rounded-lg border border-brand-blue/20 bg-brand-blue/5 px-3 py-2.5 text-[12px] text-brand-navy/80">
          {AUTH_PREVIEW_NOTICE}
        </div>
        <div className="mx-auto max-w-xl rounded-2xl border border-brand-line bg-white p-8 shadow-soft">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">Application</p>
          <h1 className="mt-3 font-display text-3xl font-bold">Welcome to VertexBuild</h1>
          <p className="mt-3 text-[15px] text-brand-muted">
            You are inside your provisioned tenant workspace
            {companyName ? (
              <>
                {" "}
                for <strong className="text-brand-navy">{companyName}</strong>
              </>
            ) : null}
            .
          </p>
          <div className="mt-5 space-y-2 text-[13px] text-brand-muted">
            {tenantId ? (
              <p>
                Tenant ID: <strong className="font-mono text-brand-navy">{tenantId}</strong>
              </p>
            ) : null}
            {subdomain ? (
              <p>
                Workspace address: <strong className="font-mono text-brand-navy">{subdomain}</strong>
              </p>
            ) : null}
            {trialEndsAt ? (
              <p>
                Trial ends: <strong className="text-brand-navy">{new Date(trialEndsAt).toLocaleString()}</strong>
              </p>
            ) : (
              <p>Trial status: active (end date from plan API when configured).</p>
            )}
          </div>
          <div className="mt-6">
            <AuthAlert tone="info">
              This is the marketing-site app entry placeholder. Production must open the authenticated CMS application
              for this tenant.
            </AuthAlert>
          </div>
          <details className="mt-6 text-[12px] text-brand-muted">
            <summary className="cursor-pointer font-semibold text-brand-navy">Backend integration points</summary>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {AUTH_BACKEND_GAPS.map((gap) => (
                <li key={gap}>{gap}</li>
              ))}
            </ul>
          </details>
          <p className="mt-6 text-[13px] text-brand-muted">
            Complete company profile, projects, and team setup from the dashboard when you&apos;re ready.
          </p>
        </div>
      </main>
    </div>
  );
}
