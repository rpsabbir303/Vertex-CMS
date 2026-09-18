"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AuthButton } from "@/components/auth/AuthButton";
import { PostTrialProgress } from "@/components/auth/PostTrialProgress";
import { BillingAddOnsPicker } from "@/components/conversion/BillingAddOnsPicker";
import { BillingPlanPickerDesign } from "@/components/conversion/BillingPlanPickerDesign";
import { BillingSelectedPlanBanner } from "@/components/conversion/BillingPlanPicker";
import { BillingSetupShell } from "@/components/conversion/BillingSetupShell";
import { PlanCheckoutSummary } from "@/components/conversion/PlanCheckoutSummary";
import type { BillingPeriod } from "@/lib/auth/types";
import {
  BILLING_DESIGN_TRIAL_ENDS_AT,
  getBillingSetupDesignCatalog,
  pickDefaultDesignPlanId,
} from "@/lib/marketing/pricing/billingDesignCatalog";
import {
  getActivePlans,
  isAddonIncludedInPlan,
  isPurchasableAddonForPlan,
} from "@/lib/marketing/pricing";

const INITIAL_SELECTED_ADDONS = ["ai-packs", "seats"];

/**
 * Standalone billing setup UI for html.to.design / Figma handoff.
 * Public route — no auth, session, or payment processing.
 */
export function BillingSetupDesignView() {
  const formRef = useRef<HTMLFormElement>(null);
  const planSectionRef = useRef<HTMLElement>(null);
  const addOnSectionRef = useRef<HTMLDivElement>(null);

  const billingCatalog = useMemo(() => getBillingSetupDesignCatalog(), []);
  const addOns = billingCatalog.purchasable;
  const plans = useMemo(() => getActivePlans(), []);

  const defaultPlanId = useMemo(() => pickDefaultDesignPlanId(), []);

  const [planId, setPlanId] = useState<string | undefined>(defaultPlanId);
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  const [showPlanPicker, setShowPlanPicker] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(INITIAL_SELECTED_ADDONS);
  const [mobileReviewOpen, setMobileReviewOpen] = useState(false);

  const plan = useMemo(() => (planId ? plans.find((p) => p.id === planId) : undefined), [planId, plans]);
  const selectedAddonObjects = addOns.filter(
    (addon) => selectedAddons.includes(addon.id) && !isAddonIncludedInPlan(addon, planId)
  );
  const needsPlanSelection = !planId || showPlanPicker;

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
    if (!addon || !isPurchasableAddonForPlan(addon, planId)) return;
    setSelectedAddons((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function scrollToAddons() {
    addOnSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileReviewOpen(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  if (!defaultPlanId && plans.length === 0) {
    return (
      <BillingSetupShell
        eyebrow="Payment & billing"
        title="Set up your Vertex CMS workspace"
        subtitle="Configure your plan, billing cadence, and optional capabilities."
      >
        <p className="text-[14px] text-brand-muted">Plan configuration is unavailable for this design preview.</p>
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

      <form ref={formRef} className="relative min-w-0 space-y-6 pb-24 lg:pb-0" onSubmit={handleSubmit} noValidate>
        <section ref={planSectionRef} className="min-w-0">
          {needsPlanSelection ? (
            <BillingPlanPickerDesign
              selectedPlanId={planId}
              billingPeriod={billingPeriod}
              onPlanChange={(id) => {
                setPlanId(id);
                setShowPlanPicker(false);
              }}
              onPeriodChange={setBillingPeriod}
            />
          ) : plan ? (
            <BillingSelectedPlanBanner
              plan={plan}
              billingPeriod={billingPeriod}
              onPeriodChange={setBillingPeriod}
              onChangePlan={() => setShowPlanPicker(true)}
            />
          ) : null}
        </section>

        <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,320px)] lg:items-start lg:gap-8">
          <div ref={addOnSectionRef} className="min-w-0 rounded-xl border border-brand-line bg-white p-5 sm:p-6">
            <BillingAddOnsPicker
              catalog={billingCatalog}
              selectedIds={selectedAddons}
              planId={planId}
              planName={plan?.name}
              billingPeriod={billingPeriod}
              disabled={needsPlanSelection}
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
              trialEndsAt={BILLING_DESIGN_TRIAL_ENDS_AT}
              title="Your configuration"
              onEditSelections={scrollToAddons}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-brand-line pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
          <button
            type="button"
            className="order-2 inline-flex w-full items-center justify-center rounded-md border border-brand-line bg-white px-6 py-3 text-[14px] font-semibold text-brand-navy hover:bg-brand-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange sm:order-1 sm:w-auto"
          >
            Back
          </button>
          <AuthButton type="button" labelStyle="normal" className="order-1 w-full sm:order-2 sm:min-w-[15rem]" disabled={!planId}>
            Complete Billing Setup
          </AuthButton>
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
                  trialEndsAt={BILLING_DESIGN_TRIAL_ENDS_AT}
                  title="Your configuration"
                  variant="drawer"
                  onEditSelections={scrollToAddons}
                />
                <div className="mt-4">
                  <AuthButton type="button" labelStyle="normal" className="w-full" disabled={!planId}>
                    Complete Billing Setup
                  </AuthButton>
                </div>
              </div>
            </div>
          ) : null}
        </>
      ) : null}
    </BillingSetupShell>
  );
}
