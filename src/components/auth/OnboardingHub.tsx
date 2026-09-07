"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { OnboardingProgress } from "@/components/auth/OnboardingProgress";
import { AUTH_BACKEND_GAPS, AUTH_PREVIEW_NOTICE } from "@/lib/auth/client";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { getNextOnboardingHref, isOnboardingComplete, resolveAuthGate } from "@/lib/auth/guards";
import { readAuthSession } from "@/lib/auth/session";
import type { OnboardingStepId } from "@/lib/auth/types";
import { VertexLogo } from "@/components/Icons";
import { ROUTES } from "@/lib/marketing/navigation";

export function OnboardingHub() {
  const router = useRouter();
  const params = useSearchParams();
  const completeQuery = params.get("complete") === "1";
  const [ready, setReady] = useState(false);
  const [completed, setCompleted] = useState<Partial<Record<OnboardingStepId, boolean>>>({});
  const [companyName, setCompanyName] = useState("");
  const [subdomain, setSubdomain] = useState<string | undefined>();
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const session = readAuthSession();
    const gate = resolveAuthGate(session, { allowUnprovisionedTenant: false });

    if (gate.reason === "unauthenticated") {
      router.replace(AUTH_ROUTES.signup);
      return;
    }
    if (gate.reason === "email_unverified") {
      router.replace(AUTH_ROUTES.verifyEmail);
      return;
    }
    if (gate.reason === "mfa_required") {
      router.replace(AUTH_ROUTES.mfa);
      return;
    }
    if (gate.reason === "tenant_incomplete" || gate.reason === "tenant_failed") {
      router.replace(AUTH_ROUTES.tenantSetup);
      return;
    }
    if (gate.reason === "trial_incomplete") {
      router.replace(AUTH_ROUTES.trialStarted);
      return;
    }

    if (!session) return;

    const done = isOnboardingComplete(session) || completeQuery;
    setCompanyName(session.companyName);
    setSubdomain(session.tenant.subdomain);
    setCompleted({
      company: session.onboarding.companyComplete,
      project: session.onboarding.projectComplete,
      invite: session.onboarding.inviteComplete,
      connect: session.onboarding.connectSkipped || session.onboarding.financeStatus === "connected",
    });
    setIsComplete(done);
    setReady(true);

    if (!done && !session.onboarding.companyComplete) {
      router.replace(AUTH_ROUTES.onboardingCompany);
    }
  }, [completeQuery, router]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F9FC] text-sm text-brand-muted">
        Loading…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <header className="border-b border-brand-line bg-white">
        <div className="site-shell flex h-16 items-center justify-between">
          <VertexLogo />
          <Link href={ROUTES.home} className="text-[13px] font-semibold text-brand-muted hover:text-brand-navy">
            Exit to website
          </Link>
        </div>
      </header>
      <main className="site-shell py-12">
        <div className="mb-4 rounded-lg border border-brand-blue/20 bg-brand-blue/5 px-3 py-2.5 text-[12px] text-brand-navy/80">
          {AUTH_PREVIEW_NOTICE}
        </div>
        {isComplete ? (
          <div className="mx-auto max-w-xl rounded-2xl border border-brand-line bg-white p-8 text-center shadow-soft">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">Ready</p>
            <h1 className="mt-3 font-display text-3xl font-bold text-brand-navy">
              Your Vertex CMS workspace is ready.
            </h1>
            <p className="mt-3 text-[15px] text-brand-muted">
              Your company, project, and team are set up. Welcome to Vertex CMS
              {companyName ? ` — ${companyName}` : ""}.
            </p>
            {subdomain ? (
              <p className="mt-2 text-[13px] text-brand-muted">
                Workspace address (preview): <strong className="text-brand-navy">{subdomain}</strong>
              </p>
            ) : null}
            <div className="mt-5 text-left">
              <AuthAlert tone="info">
                <strong>Backend dependency:</strong> authenticated CMS app entry is not hosted on this marketing site
                yet. Production should redirect to the tenant application URL after onboarding.
              </AuthAlert>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href={AUTH_ROUTES.appHome} className="btn-primary">
                Enter Vertex CMS
              </Link>
              <Link href={AUTH_ROUTES.signIn} className="btn-secondary">
                Back to sign in
              </Link>
            </div>
            <details className="mt-8 text-left text-[12px] text-brand-muted">
              <summary className="cursor-pointer font-semibold text-brand-navy">Missing backend APIs</summary>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {AUTH_BACKEND_GAPS.map((gap) => (
                  <li key={gap}>{gap}</li>
                ))}
              </ul>
            </details>
          </div>
        ) : (
          <>
            <h1 className="font-display text-3xl font-bold text-brand-navy">Onboarding checklist</h1>
            <p className="mt-2 text-brand-muted">Continue where you left off.</p>
            <div className="mt-8">
              <OnboardingProgress current="company" completed={completed} />
            </div>
            <AuthButton
              type="button"
              onClick={() => {
                const session = readAuthSession();
                router.push(session ? getNextOnboardingHref(session) : AUTH_ROUTES.onboardingCompany);
              }}
            >
              Continue setup
            </AuthButton>
          </>
        )}
      </main>
    </div>
  );
}
