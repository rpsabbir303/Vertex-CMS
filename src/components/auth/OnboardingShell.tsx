"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { VertexLogo } from "@/components/Icons";
import { AUTH_PREVIEW_NOTICE } from "@/lib/auth/client";
import { OnboardingProgress } from "@/components/auth/OnboardingProgress";
import { resolveAuthGate } from "@/lib/auth/guards";
import { readAuthSession } from "@/lib/auth/session";
import type { OnboardingStepId } from "@/lib/auth/types";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { ROUTES } from "@/lib/marketing/navigation";

type Props = {
  current: OnboardingStepId;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  /** Page-level heading override (defaults preserve existing onboarding copy). */
  headline?: string;
  /** Page-level supporting text override. */
  description?: string;
  /** Hide the preview/API notice — used for customer-facing steps. */
  showPreviewNotice?: boolean;
};

export function OnboardingShell({
  current,
  title,
  subtitle,
  children,
  headline,
  description,
  showPreviewNotice = true,
}: Props) {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [completed, setCompleted] = useState<Partial<Record<OnboardingStepId, boolean>>>({});
  const [workspaceLabel, setWorkspaceLabel] = useState("");

  useEffect(() => {
    const session = readAuthSession();
    const gate = resolveAuthGate(session, { requireOnboardingComplete: false });

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
    if (gate.reason === "trial_expired") {
      router.replace(AUTH_ROUTES.trialExpired);
      return;
    }

    if (!session) return;

    setWorkspaceLabel(session.tenant.workspaceLabel || session.companyName);
    setCompleted({
      company: session.onboarding.companyComplete,
      project: session.onboarding.projectComplete,
      invite: session.onboarding.inviteComplete,
      connect: session.onboarding.connectSkipped || session.onboarding.financeStatus === "connected",
    });
    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F9FC] text-sm text-brand-muted">
        Loading onboarding…
      </div>
    );
  }

  const pageHeadline = headline ?? "Let's get your company set up.";
  const pageDescription =
    description ??
    (workspaceLabel
      ? `Complete the guided checklist for ${workspaceLabel}.`
      : "Complete the guided checklist to set up your company in Vertex CMS.");

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-brand-navy">
      <header className="border-b border-brand-line bg-white">
        <div className="site-shell flex h-16 items-center justify-between">
          <VertexLogo />
          <Link href={ROUTES.home} className="text-[13px] font-semibold text-brand-muted hover:text-brand-navy">
            Exit to website
          </Link>
        </div>
      </header>
      <main className="site-shell py-10 sm:py-14">
        {showPreviewNotice ? (
          <div className="mb-4 rounded-lg border border-brand-blue/20 bg-brand-blue/5 px-3 py-2.5 text-[12px] text-brand-navy/80">
            {AUTH_PREVIEW_NOTICE}
          </div>
        ) : null}
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">Get started</p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">{pageHeadline}</h1>
        <p className="mt-2 max-w-2xl text-[15px] text-brand-muted">{pageDescription}</p>
        <div className="mt-8">
          <OnboardingProgress current={current} completed={completed} />
        </div>
        <div className="mx-auto max-w-2xl rounded-2xl border border-brand-line bg-white p-6 shadow-soft sm:p-8">
          <h2 className="font-display text-xl font-bold text-brand-navy sm:text-2xl">{title}</h2>
          {subtitle && <p className="mt-2 text-[14px] text-brand-muted">{subtitle}</p>}
          <div className="mt-6">{children}</div>
        </div>
      </main>
    </div>
  );
}
