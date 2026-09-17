"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { PostTrialProgress } from "@/components/auth/PostTrialProgress";
import { BillingAddOnsPicker } from "@/components/conversion/BillingAddOnsPicker";
import { BillingPlanPicker, BillingSelectedPlanBanner } from "@/components/conversion/BillingPlanPicker";
import { BillingSetupShell } from "@/components/conversion/BillingSetupShell";
import { PlanCheckoutSummary } from "@/components/conversion/PlanCheckoutSummary";
import { AuthClient } from "@/lib/auth/client";
import { resolveAuthGate } from "@/lib/auth/guards";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { readAuthSession, updateCheckoutPlan } from "@/lib/auth/session";
import type { BillingPeriod } from "@/lib/auth/types";
import {
  getActiveAddOns,
  getActivePlans,
  isAddonIncludedInPlan,
  planQuoteHref,
} from "@/lib/marketing/pricing";

type Phase = "loading" | "ready" | "error" | "complete";

export function BillingSetupView() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const planSectionRef = useRef<HTMLElement>(null);
  const addOnSectionRef = useRef<HTMLDivElement>(null);

  const [catalogReady, setCatalogReady] = useState(false);
  const addOns = useMemo(() => (catalogReady ? getActiveAddOns() : []), [catalogReady]);
  const plans = useMemo(() => (catalogReady ? getActivePlans() : []), [catalogReady]);

  const [phase, setPhase] = useState<Phase>("loading");
  const [processing, setProcessing] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [planError, setPlanError] = useState<string | null>(null);
  const [planId, setPlanId] = useState<string | undefined>();
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  const [trialEndsAt, setTrialEndsAt] = useState<string | null>(null);
  const [showPlanPicker, setShowPlanPicker] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [mobileReviewOpen, setMobileReviewOpen] = useState(false);

  const plan = useMemo(() => (planId ? plans.find((p) => p.id === planId) : undefined), [planId, plans]);
  const selectedAddonObjects = addOns.filter(
    (addon) => selectedAddons.includes(addon.id) && !isAddonIncludedInPlan(addon, planId)
  );
  const needsPlanSelection = !planId || showPlanPicker;
  const isEnterpriseQuote = plan?.cta.action === "quote";

  function loadConfiguration() {
    setPhase("loading");
    setFormError(null);

    const activePlans = getActivePlans();
    const activeAddOns = getActiveAddOns();
    setCatalogReady(true);

    if (activePlans.length === 0) {
      setPhase("error");
      return;
    }

    const session = readAuthSession();
    const gate = resolveAuthGate(session, { allowTrialInactive: false });

    if (gate.reason === "unauthenticated") {
      router.replace(AUTH_ROUTES.signup);
      return;
    }
    if (gate.redirectTo && gate.reason !== "ready" && gate.reason !== "billing_incomplete") {
      router.replace(gate.redirectTo);
      return;
    }
    if (!session) {
      setPhase("error");
      return;
    }

    if (session.checkout.billingComplete) {
      setPlanId(session.planId);
      setBillingPeriod(session.billingPeriod ?? "monthly");
      setSelectedAddons(session.checkout.selectedAddonIds);
      setTrialEndsAt(session.trial.trial_ends_at);
      setPhase("complete");
      return;
    }

    setPlanId(session.planId);
    setBillingPeriod(session.billingPeriod ?? "monthly");
    setShowPlanPicker(!session.planId);
    setTrialEndsAt(session.trial.trial_ends_at);
    setSelectedAddons(session.checkout.selectedAddonIds ?? []);
    setPhase("ready");

    if (activeAddOns.length === 0) {
      // Plans loaded; add-ons may sync later — still allow billing setup.
    }
  }

  useEffect(() => {
    loadConfiguration();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- initial gate + catalog bootstrap
  }, [router]);

  useEffect(() => {
    setSelectedAddons((prev) =>
      prev.filter((id) => {
        const addon = addOns.find((item) => item.id === id);
        if (!addon) return false;
        return !isAddonIncludedInPlan(addon, planId);
      })
    );
  }, [planId, addOns]);

  function toggleAddon(id: string) {
    const addon = addOns.find((item) => item.id === id);
    if (!addon || isAddonIncludedInPlan(addon, planId)) return;
    setSelectedAddons((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function handlePeriodChange(period: BillingPeriod) {
    setBillingPeriod(period);
    if (planId) {
      updateCheckoutPlan(planId, period);
    }
  }

  function scrollToAddons() {
    addOnSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileReviewOpen(false);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);
    setPlanError(null);

    if (!planId || !plan) {
      setPlanError("Select a plan to continue.");
      setShowPlanPicker(true);
      return;
    }
    if (isEnterpriseQuote) return;

    setProcessing(true);
    const result = await AuthClient.completeBillingSetup({
      planId,
      billingPeriod,
      addonIds: selectedAddons,
    });
    setProcessing(false);

    if (!result.ok) {
      setFormError(result.error);
      if (result.fieldErrors?.plan) {
        setPlanError(result.fieldErrors.plan);
        setShowPlanPicker(true);
      }
      return;
    }
    setPhase("complete");
  }

  if (phase === "loading") {
    return (
      <BillingSetupShell
        eyebrow="Payment & billing"
        title="Set up your Vertex CMS workspace"
        subtitle="Configure your plan, billing cadence, and optional capabilities."
      >
        <div className="max-w-lg space-y-3" aria-busy="true" aria-live="polite">
          <p className="text-[14px] text-brand-muted">Loading your billing configuration…</p>
          <div className="h-2 w-1/3 animate-pulse rounded bg-brand-line" />
          <div className="h-24 animate-pulse rounded-xl bg-brand-line/80" />
          <div className="h-32 animate-pulse rounded-xl bg-brand-line/70" />
        </div>
      </BillingSetupShell>
    );
  }

  if (phase === "error") {
    return (
      <BillingSetupShell
        eyebrow="Payment & billing"
        title="Set up your Vertex CMS workspace"
        subtitle="Configure your plan, billing cadence, and optional capabilities."
      >
        <div className="max-w-md rounded-xl border border-brand-line bg-white p-6">
          <p className="text-[15px] font-semibold text-brand-navy">We couldn&apos;t load your billing configuration.</p>
          <p className="mt-2 text-[14px] text-brand-muted">Check your connection and try again.</p>
          <button
            type="button"
            onClick={() => loadConfiguration()}
            className="mt-5 inline-flex rounded-md bg-brand-navy px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-brand-navy/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          >
            Try again
          </button>
        </div>
      </BillingSetupShell>
    );
  }

  const completePlan = plan ?? (planId ? plans.find((p) => p.id === planId) : undefined);
  if (phase === "complete" && completePlan) {
    return (
      <BillingSetupShell
        eyebrow="Billing complete"
        title="Your Vertex CMS workspace is ready."
        subtitle="Billing setup is complete. Payment processing is handled through Vertex CMS billing."
      >
        <PostTrialProgress current="dashboard" />
        <div className="mt-2 max-w-lg space-y-6">
          <AuthAlert tone="success">Billing complete</AuthAlert>
          <PlanCheckoutSummary
            plan={completePlan}
            billingPeriod={billingPeriod}
            selectedAddons={selectedAddonObjects}
            trialEndsAt={trialEndsAt}
            title="Your configuration"
          />
          <AuthButton type="button" labelStyle="normal" className="sm:min-w-[15rem]" onClick={() => router.push(AUTH_ROUTES.appHome)}>
            Continue to Dashboard
          </AuthButton>
        </div>
      </BillingSetupShell>
    );
  }

  const mobileSummaryLine = plan
    ? `${plan.name} · ${billingPeriod === "yearly" ? "Yearly" : "Monthly"} · ${selectedAddonObjects.length} add-on${selectedAddonObjects.length === 1 ? "" : "s"}`
    : "Select a plan";

  return (
    <BillingSetupShell
      eyebrow="Payment & billing"
      title="Set up your Vertex CMS workspace"
      subtitle="Configure your plan, billing cadence, and optional capabilities. Payment processing is handled through Vertex CMS billing."
    >
      <PostTrialProgress current="billing" />

      <form ref={formRef} className="relative min-w-0 space-y-6 pb-24 lg:pb-0" onSubmit={(e) => void submit(e)} noValidate>
        {formError ? (
          <AuthAlert>
            {formError}{" "}
            <span className="font-medium">You can retry without losing your current configuration.</span>
          </AuthAlert>
        ) : null}

        <section ref={planSectionRef} className="min-w-0">
          {needsPlanSelection ? (
            <BillingPlanPicker
              selectedPlanId={planId}
              billingPeriod={billingPeriod}
              onPlanChange={(id) => {
                setPlanId(id);
                setShowPlanPicker(false);
                setPlanError(null);
              }}
              onPeriodChange={handlePeriodChange}
              disabled={processing}
              error={planError ?? undefined}
            />
          ) : plan ? (
            <BillingSelectedPlanBanner
              plan={plan}
              billingPeriod={billingPeriod}
              onPeriodChange={handlePeriodChange}
              onChangePlan={() => setShowPlanPicker(true)}
              disabled={processing}
            />
          ) : null}
        </section>

        <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,320px)] lg:items-start lg:gap-8">
          <div ref={addOnSectionRef} className="min-w-0 rounded-xl border border-brand-line bg-white p-5 sm:p-6">
            <BillingAddOnsPicker
              addOns={addOns}
              selectedIds={selectedAddons}
              planId={planId}
              planName={plan?.name}
              disabled={processing || needsPlanSelection}
              onToggle={toggleAddon}
            />
            {needsPlanSelection ? (
              <p className="mt-4 text-[13px] text-brand-muted">Select a plan to enable optional capabilities.</p>
            ) : null}
          </div>

          <div className="hidden min-w-0 lg:block lg:sticky lg:top-6">
            <PlanCheckoutSummary
              plan={plan}
              billingPeriod={billingPeriod}
              selectedAddons={selectedAddonObjects}
              trialEndsAt={trialEndsAt}
              title="Your configuration"
              onEditSelections={scrollToAddons}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-brand-line pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
          <Link
            href={AUTH_ROUTES.trialStarted}
            className="order-2 inline-flex w-full items-center justify-center rounded-md border border-brand-line bg-white px-6 py-3 text-[14px] font-semibold text-brand-navy hover:bg-brand-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange sm:order-1 sm:w-auto"
          >
            Back
          </Link>
          {isEnterpriseQuote && plan ? (
            <Link
              href={planQuoteHref(plan.id, { period: billingPeriod })}
              className="order-1 inline-flex w-full items-center justify-center rounded-md bg-brand-orange px-6 py-3 text-[14px] font-semibold text-white hover:bg-[#e85f00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange sm:order-2 sm:min-w-[15rem]"
            >
              Request a Quote
            </Link>
          ) : (
            <AuthButton
              type="submit"
              loading={processing}
              loadingLabel="Completing billing setup…"
              labelStyle="normal"
              className="order-1 w-full sm:order-2 sm:min-w-[15rem]"
              disabled={!planId}
            >
              {processing ? "Completing billing setup…" : "Complete Billing Setup"}
            </AuthButton>
          )}
        </div>
      </form>

      {plan ? (
        <>
          <div
            className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-line bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(8,35,63,0.08)] backdrop-blur-sm lg:hidden"
            role="region"
            aria-label="Configuration summary"
          >
            <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3">
              <p className="min-w-0 truncate text-[13px] font-medium text-brand-navy">{mobileSummaryLine}</p>
              <button
                type="button"
                onClick={() => setMobileReviewOpen(true)}
                className="shrink-0 rounded-md border border-brand-line bg-white px-3 py-2 text-[12px] font-semibold text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
              >
                Review
              </button>
            </div>
          </div>

          {mobileReviewOpen ? (
            <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-labelledby="mobile-review-title">
              <button
                type="button"
                className="absolute inset-0 bg-brand-navy/40"
                aria-label="Close review"
                onClick={() => setMobileReviewOpen(false)}
              />
              <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-2xl border-t border-brand-line bg-white p-5 shadow-xl">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h2 id="mobile-review-title" className="text-[16px] font-semibold text-brand-navy">
                    Review configuration
                  </h2>
                  <button
                    type="button"
                    onClick={() => setMobileReviewOpen(false)}
                    className="rounded-md px-2 py-1 text-[13px] font-semibold text-brand-muted hover:text-brand-navy"
                  >
                    Close
                  </button>
                </div>
                <PlanCheckoutSummary
                  plan={plan}
                  billingPeriod={billingPeriod}
                  selectedAddons={selectedAddonObjects}
                  trialEndsAt={trialEndsAt}
                  title="Your configuration"
                  variant="drawer"
                  onEditSelections={scrollToAddons}
                />
                <div className="mt-4">
                  {isEnterpriseQuote ? (
                    <Link
                      href={planQuoteHref(plan.id, { period: billingPeriod })}
                      className="inline-flex w-full items-center justify-center rounded-md bg-brand-orange px-6 py-3 text-[14px] font-semibold text-white"
                    >
                      Request a Quote
                    </Link>
                  ) : (
                    <AuthButton
                      type="button"
                      loading={processing}
                      loadingLabel="Completing billing setup…"
                      labelStyle="normal"
                      className="w-full"
                      disabled={!planId}
                      onClick={() => {
                        setMobileReviewOpen(false);
                        formRef.current?.requestSubmit();
                      }}
                    >
                      Complete Billing Setup
                    </AuthButton>
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </>
      ) : null}
    </BillingSetupShell>
  );
}
