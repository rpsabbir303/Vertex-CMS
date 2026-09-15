"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { ProvisioningMilestones } from "@/components/auth/ProvisioningMilestones";
import { TenantSetupShell } from "@/components/auth/TenantSetupShell";
import { AuthClient } from "@/lib/auth/client";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { resolveAuthGate } from "@/lib/auth/guards";
import { readAuthSession } from "@/lib/auth/session";
import { getActivePlans } from "@/lib/marketing/pricing";
import { ROUTES } from "@/lib/marketing/navigation";

const COPY = {
  retryable: {
    headline: "We couldn\u2019t finish setting up your workspace.",
    body: "Something went wrong while completing your workspace setup. Please try again.",
    alert: "Your account is safe, but we weren\u2019t able to complete your workspace setup right now.",
  },
  nonRetryable: {
    headline: "We couldn\u2019t complete your workspace setup.",
    body: "Your workspace could not be created at this time. Please contact support for help completing your setup.",
    alert: "Your account details are saved. Contact support to finish setup.",
  },
} as const;

export function ProvisioningFailureForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [ready, setReady] = useState(false);
  const [retrying, setRetrying] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [planLabel, setPlanLabel] = useState<string | null>(null);
  const [retryable, setRetryable] = useState(true);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const syncContext = useCallback(() => {
    const session = readAuthSession();
    if (!session) return;
    setCompanyName(session.companyName);
    setEmail(session.email);
    setRetryable(session.tenant.failureRetryable !== false);
    if (session.planId) {
      setPlanLabel(getActivePlans().find((p) => p.id === session.planId)?.name ?? session.planId);
    }
  }, []);

  useEffect(() => {
    const demo = params.get("demo");
    if (demo === "retryable" || demo === "non-retryable") {
      AuthClient.seedProvisioningFailurePreview({
        retryable: demo === "retryable",
      });
    }

    const session = readAuthSession();
    const gate = resolveAuthGate(session, {
      allowUnverifiedEmail: false,
      allowUnprovisionedTenant: true,
      allowTrialInactive: true,
    });

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

    if (session?.tenant.status === "ready") {
      router.replace(AUTH_ROUTES.tenantSetup);
      return;
    }

    if (session?.tenant.status !== "failed") {
      router.replace(AUTH_ROUTES.tenantSetup);
      return;
    }

    syncContext();
    setReady(true);
  }, [params, router, syncContext]);

  async function handleRetry() {
    if (retrying || !retryable) return;

    setRetrying(true);
    setStatusMessage("Retrying workspace setup…");

    const result = await AuthClient.retryTenantProvisioning();
    setRetrying(false);

    if (!result.ok) {
      syncContext();
      setStatusMessage(null);
      const session = readAuthSession();
      if (session?.tenant.failureRetryable === false) {
        setRetryable(false);
      }
      return;
    }

    setStatusMessage("Workspace setup completed successfully.");
    router.push(AUTH_ROUTES.tenantSetup);
  }

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F9FC] text-sm text-brand-muted">
        Loading…
      </div>
    );
  }

  const copy = retryable ? COPY.retryable : COPY.nonRetryable;

  return (
    <TenantSetupShell>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">Workspace setup</p>

      <h1 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">{copy.headline}</h1>

      <p className="mt-3 text-[15px] leading-relaxed text-brand-muted">{copy.body}</p>

      <div className="mt-4 rounded-lg border border-brand-line bg-[#FAFBFD] px-4 py-3 text-[13px] text-brand-navy">
        {companyName ? (
          <p>
            <span className="text-brand-muted">Company: </span>
            <strong>{companyName}</strong>
          </p>
        ) : null}
        {email ? (
          <p className={companyName ? "mt-1" : undefined}>
            <span className="text-brand-muted">Account: </span>
            <strong>{email}</strong>
          </p>
        ) : null}
        {planLabel ? (
          <p className="mt-1">
            <span className="text-brand-muted">Plan: </span>
            <strong>{planLabel}</strong>
          </p>
        ) : null}
      </div>

      <ProvisioningMilestones phase="failed" status="failed" />

      <div className="mt-6 space-y-4" role="region" aria-label="Recovery actions">
        <AuthAlert tone="info">{copy.alert}</AuthAlert>

        {statusMessage && retrying && (
          <p className="text-[13px] font-medium text-brand-navy" role="status" aria-live="polite">
            {statusMessage}
          </p>
        )}

        {retryable ? (
          <>
            <AuthButton type="button" loading={retrying} disabled={retrying} onClick={() => void handleRetry()}>
              Try Again
            </AuthButton>
            <Link
              href={ROUTES.contact}
              className="inline-flex min-h-[46px] w-full items-center justify-center rounded-sm border border-brand-line bg-white px-5 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy hover:bg-brand-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              Contact Support
            </Link>
            <Link
              href={AUTH_ROUTES.tenantSetup}
              className="block text-center text-[13px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              Back to setup
            </Link>
          </>
        ) : (
          <>
            <Link href={ROUTES.contact} className="btn-primary block min-h-[46px] text-center leading-[46px]">
              Contact Support
            </Link>
            <Link
              href={AUTH_ROUTES.signIn}
              className="inline-flex min-h-[46px] w-full items-center justify-center rounded-sm border border-brand-line bg-white px-5 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy hover:bg-brand-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              Return to sign in
            </Link>
            <Link
              href={AUTH_ROUTES.tenantSetup}
              className="block text-center text-[13px] font-semibold text-brand-blue hover:underline"
            >
              Back to setup
            </Link>
          </>
        )}
      </div>
    </TenantSetupShell>
  );
}
