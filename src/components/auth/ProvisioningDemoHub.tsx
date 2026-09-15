"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthClient, AUTH_PREVIEW_NOTICE } from "@/lib/auth/client";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { setProvisionDemoRetry, type ProvisionDemoRetryOutcome } from "@/lib/auth/provisioningDemo";
import { VertexLogo } from "@/components/Icons";
import { ROUTES } from "@/lib/marketing/navigation";

type DemoScenario = {
  id: string;
  title: string;
  description: string;
  retryable: boolean;
  nextRetry?: ProvisionDemoRetryOutcome;
};

const SCENARIOS: DemoScenario[] = [
  {
    id: "retryable-static",
    title: "Provisioning failure — retryable",
    description: "View the recovery screen with Try Again and Contact Support.",
    retryable: true,
  },
  {
    id: "non-retryable",
    title: "Provisioning failure — non-retryable",
    description: "View the state where only Contact Support and return paths are offered.",
    retryable: false,
  },
  {
    id: "retry-success",
    title: "Retry → success → workspace ready",
    description: "Opens failure state; Try Again completes setup and routes to Workspace Ready.",
    retryable: true,
    nextRetry: "success",
  },
  {
    id: "retry-fail-again",
    title: "Retry → fails again (retryable)",
    description: "Try Again shows loading, then returns to the same recovery state.",
    retryable: true,
    nextRetry: "fail-retryable",
  },
  {
    id: "retry-non-retryable",
    title: "Retry → non-retryable failure",
    description: "Try Again transitions to the non-retryable recovery state.",
    retryable: true,
    nextRetry: "fail-non-retryable",
  },
];

export function ProvisioningDemoHub() {
  const router = useRouter();

  function openScenario(scenario: DemoScenario) {
    setProvisionDemoRetry(scenario.nextRetry ?? "default");
    AuthClient.seedProvisioningFailurePreview({ retryable: scenario.retryable });
    const demo = scenario.retryable ? "retryable" : "non-retryable";
    router.push(`${AUTH_ROUTES.tenantSetupFailed}?demo=${demo}`);
  }

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

      <main className="site-shell max-w-2xl py-10 sm:py-14">
        <div className="mb-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5 px-3 py-2.5 text-[12px] leading-relaxed text-brand-navy/80">
          {AUTH_PREVIEW_NOTICE}
        </div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">Development demo</p>
        <h1 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">Provisioning failure demos</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-brand-muted">
          Preview-only scenarios using sessionStorage. No production tenants or accounts are created.
        </p>

        <ul className="mt-8 space-y-3">
          {SCENARIOS.map((scenario) => (
            <li key={scenario.id}>
              <button
                type="button"
                onClick={() => openScenario(scenario)}
                className="w-full rounded-xl border border-brand-line bg-white px-5 py-4 text-left shadow-soft transition hover:border-brand-orange/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              >
                <p className="font-semibold text-brand-navy">{scenario.title}</p>
                <p className="mt-1 text-[13px] text-brand-muted">{scenario.description}</p>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-xl border border-brand-line bg-white p-5 text-[13px] text-brand-muted">
          <p className="font-semibold text-brand-navy">Live journey path</p>
          <p className="mt-2">
            Sign up with company name <strong className="text-brand-navy">fail provision</strong> to trigger a
            retryable failure during Tenant Setup, or{" "}
            <strong className="text-brand-navy">fail provision permanent</strong> for non-retryable.
          </p>
          <Link
            href={AUTH_ROUTES.signup}
            className="mt-3 inline-block font-semibold text-brand-orange hover:underline"
          >
            Go to Signup
          </Link>
        </div>
      </main>
    </div>
  );
}
