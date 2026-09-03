"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import {
  formatPlanPrice,
  getActivePlans,
  getCatalogYearlySavingsPercent,
  getPlanPrice,
  getPricingCatalog,
  planSignupHref,
  type Plan,
  type PricingPeriod,
} from "@/lib/marketing/pricing";
import { useId, useMemo, useState } from "react";

function BillingToggle({
  period,
  onChange,
  savingsPercent,
}: {
  period: PricingPeriod;
  onChange: (p: PricingPeriod) => void;
  savingsPercent: number | null;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="inline-flex rounded-full border border-brand-line bg-white p-1 shadow-soft"
        role="group"
        aria-label="Billing period"
      >
        {(["monthly", "yearly"] as const).map((p) => {
          const active = period === p;
          return (
            <button
              key={p}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(p)}
              className={`rounded-full px-5 py-2.5 text-[13px] font-semibold capitalize transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${
                active
                  ? "bg-brand-navy text-white"
                  : "text-brand-muted hover:text-brand-navy"
              }`}
            >
              {p}
            </button>
          );
        })}
      </div>
      {savingsPercent != null && (
        <p className="text-[12px] font-medium text-brand-orange">Save up to {savingsPercent}% with yearly billing</p>
      )}
    </div>
  );
}

function PlanPrice({ plan, period }: { plan: Plan; period: PricingPeriod }) {
  const amount = getPlanPrice(plan, period);
  const formatted = formatPlanPrice(amount, plan.currency);

  if (formatted == null) {
    return (
      <div>
        <p className="font-display text-3xl font-bold tracking-tight text-brand-navy">Custom pricing</p>
        <p className="mt-1 text-[13px] text-brand-muted">Contact us for packaging tailored to your team</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-end gap-1">
        <p className="font-display text-4xl font-bold tracking-tight text-brand-navy transition-opacity duration-300">
          {formatted}
        </p>
        <span className="mb-1.5 text-[13px] text-brand-muted">/{period === "yearly" ? "year" : "month"}</span>
      </div>
      <p className="mt-1 text-[13px] text-brand-muted">
        {period === "yearly" ? "Billed yearly" : "Billed monthly"} · {plan.currency}
      </p>
    </div>
  );
}

function planCtaHref(plan: Plan): string {
  if (plan.cta.action === "demo") return CTAS.demo.href;
  if (plan.cta.action === "contact") return ROUTES.contact;
  return planSignupHref(plan.id);
}

function PricingPlanCard({ plan, period }: { plan: Plan; period: PricingPeriod }) {
  const popular = !!plan.popular;
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 sm:p-7 ${
        popular
          ? "border-brand-orange/40 shadow-[0_24px_60px_-28px_rgba(255,106,0,0.25)] ring-1 ring-brand-orange/20"
          : "border-brand-line shadow-soft"
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-6 rounded-full bg-brand-orange px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
          Most popular
        </span>
      )}
      <div>
        <h3 className="font-display text-xl font-bold text-brand-navy">{plan.name}</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">{plan.description}</p>
      </div>
      <div className="mt-6">
        <PlanPrice plan={plan} period={period} />
      </div>
      <Link
        href={planCtaHref(plan)}
        className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm px-5 py-3.5 text-[13px] font-semibold uppercase tracking-wide transition ${
          popular
            ? "bg-brand-orange text-white hover:bg-[#e85f00]"
            : "border border-brand-line bg-brand-soft text-brand-navy hover:border-brand-navy/20"
        }`}
      >
        {plan.cta.label}
        <ArrowRight className="h-4 w-4" />
      </Link>
      <div className="mt-7 border-t border-brand-line/80 pt-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-muted">What&apos;s included</p>
        <ul className="mt-3 space-y-2.5">
          {plan.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[14px] text-brand-navy">
              <span className="mt-0.5 text-brand-orange" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Link
        href="#compare-plans"
        className="mt-auto inline-flex items-center gap-1 pt-6 text-[13px] font-semibold text-brand-blue hover:underline"
      >
        View all features
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
}

function EntitlementCell({ value }: { value: "included" | "excluded" | "addon" }) {
  if (value === "included") {
    return <span className="font-semibold text-brand-orange" aria-label="Included">✓</span>;
  }
  if (value === "addon") {
    return <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-blue">Add-on</span>;
  }
  return <span className="text-brand-muted/50" aria-label="Not included">—</span>;
}

function FeatureComparison({
  catalog,
  plans,
}: {
  catalog: ReturnType<typeof getPricingCatalog>;
  plans: Plan[];
}) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(catalog.featureGroups.map((g) => [g.id, !!g.defaultOpen]))
  );
  const [mobilePlanId, setMobilePlanId] = useState(plans[0]?.id ?? "");

  return (
    <section id="compare-plans" className="border-b border-brand-line/60 bg-[#FAFBFD] py-20 sm:py-24 lg:py-28">
      <div className="site-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Compare Plans</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl lg:text-[2.75rem]">
            Everything you need, clearly laid out.
          </h2>
          <p className="body-copy mx-auto mt-4 max-w-2xl">
            Compare the capabilities included with each Vertex CMS plan.
          </p>
        </div>

        {/* Mobile: one plan at a time */}
        <div className="mt-12 lg:hidden">
          <div className="flex gap-2 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setMobilePlanId(p.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-[13px] font-semibold ${
                  mobilePlanId === p.id
                    ? "border-brand-orange/40 bg-brand-orange/10 text-brand-orange"
                    : "border-brand-line bg-white text-brand-muted"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
          <div className="mt-4 space-y-3">
            {catalog.featureGroups.map((group) => {
              const open = openGroups[group.id];
              return (
                <div key={group.id} className="overflow-hidden rounded-xl border border-brand-line bg-white">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3.5 text-left"
                    aria-expanded={open}
                    onClick={() => setOpenGroups((s) => ({ ...s, [group.id]: !open }))}
                  >
                    <span className="text-[14px] font-semibold text-brand-navy">{group.name}</span>
                    <span className="text-brand-orange">{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <ul className="border-t border-brand-line/70 px-4 py-2">
                      {group.features.map((f) => (
                        <li
                          key={f.id}
                          className="flex items-center justify-between gap-3 border-b border-brand-line/40 py-3 last:border-0"
                        >
                          <span className="text-[13px] text-brand-navy">{f.name}</span>
                          <EntitlementCell value={f.entitlements[mobilePlanId] ?? "excluded"} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop table */}
        <div className="mt-12 hidden overflow-x-auto rounded-2xl border border-brand-line bg-white shadow-soft lg:block">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead className="sticky top-0 z-10 bg-white">
              <tr className="border-b border-brand-line">
                <th className="sticky left-0 z-20 bg-white px-5 py-4 text-[12px] font-bold uppercase tracking-[0.12em] text-brand-muted">
                  Capability
                </th>
                {plans.map((p) => (
                  <th key={p.id} className="px-4 py-4 text-center">
                    <span className="block font-display text-[15px] font-bold text-brand-navy">{p.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {catalog.featureGroups.map((group) => {
                const open = openGroups[group.id] ?? false;
                return (
                  <FragmentGroup
                    key={group.id}
                    open={open}
                    onToggle={() => setOpenGroups((s) => ({ ...s, [group.id]: !open }))}
                    groupName={group.name}
                    colSpan={plans.length + 1}
                  >
                    {open &&
                      group.features.map((f) => (
                        <tr key={f.id} className="border-b border-brand-line/50 transition hover:bg-brand-soft/60">
                          <th
                            scope="row"
                            className="sticky left-0 bg-white px-5 py-3.5 text-[13px] font-medium text-brand-navy"
                          >
                            {f.name}
                          </th>
                          {plans.map((p) => (
                            <td key={p.id} className="px-4 py-3.5 text-center text-[14px]">
                              <EntitlementCell value={f.entitlements[p.id] ?? "excluded"} />
                            </td>
                          ))}
                        </tr>
                      ))}
                  </FragmentGroup>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function FragmentGroup({
  open,
  onToggle,
  groupName,
  colSpan,
  children,
}: {
  open: boolean;
  onToggle: () => void;
  groupName: string;
  colSpan: number;
  children: React.ReactNode;
}) {
  return (
    <>
      <tr className="border-b border-brand-line bg-[#F7F9FC]">
        <td colSpan={colSpan} className="px-0">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            className="flex w-full items-center justify-between px-5 py-3.5 text-left"
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-navy">{groupName}</span>
            <span className="text-brand-orange">{open ? "−" : "+"}</span>
          </button>
        </td>
      </tr>
      {children}
    </>
  );
}

function AddOnsSection({ catalog }: { catalog: ReturnType<typeof getPricingCatalog> }) {
  const addOns = catalog.addOns.filter((a) => a.active).sort((a, b) => a.sort - b.sort);
  return (
    <section className="border-b border-brand-line/60 py-20 sm:py-24">
      <div className="site-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Extend Your Plan</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">Add capabilities as your business grows.</h2>
          <p className="body-copy mt-4">Start with the core platform and add the capabilities your team needs.</p>
        </div>

        <ul className="mt-12 divide-y divide-brand-line border-y border-brand-line">
          {addOns.map((addon) => (
            <li key={addon.id}>
              <Link
                href={ROUTES.contact}
                className="group flex flex-col gap-2 py-5 transition sm:flex-row sm:items-center sm:justify-between sm:gap-8"
              >
                <div className="min-w-0 sm:flex sm:items-baseline sm:gap-8">
                  <p className="shrink-0 font-display text-[13px] font-bold uppercase tracking-[0.14em] text-brand-navy sm:w-40">
                    {addon.name}
                  </p>
                  <p className="text-[15px] text-brand-muted">{addon.description}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold text-brand-orange transition group-hover:gap-3">
                  {addon.priceLabel ?? "Available as an add-on"}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PricingFAQ({ catalog }: { catalog: ReturnType<typeof getPricingCatalog> }) {
  const faqs = catalog.faqs.filter((f) => f.active).sort((a, b) => a.order - b.order);
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);
  const baseId = useId();

  return (
    <section className="border-b border-brand-line/60 bg-[#FAFBFD] py-20 sm:py-24">
      <div className="site-shell max-w-3xl">
        <p className="eyebrow">FAQ</p>
        <h2 className="display-title mt-3 text-3xl sm:text-4xl">Questions about pricing?</h2>
        <p className="body-copy mt-4">Everything you need to know before choosing a plan.</p>

        <div className="mt-10 divide-y divide-brand-line border-y border-brand-line">
          {faqs.map((faq) => {
            const isOpen = open === faq.id;
            const panelId = `${baseId}-${faq.id}`;
            return (
              <div key={faq.id}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : faq.id)}
                >
                  <span className="text-[15px] font-semibold text-brand-navy sm:text-base">{faq.question}</span>
                  <span className="text-brand-orange" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p id={panelId} className="pb-5 text-[15px] leading-relaxed text-brand-muted">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalPricingCTA() {
  return (
    <section className="bg-brand-navy py-20 sm:py-24">
      <div className="site-shell text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">Ready to get started?</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
          Bring your construction business into one connected system.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-300">
          Start a free trial or talk with our team to find the right setup for your business.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={CTAS.trial.href} className="btn-primary">
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={CTAS.demo.href}
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 bg-transparent px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

export function PricingPageContent() {
  const catalog = useMemo(() => getPricingCatalog(), []);
  const plans = useMemo(() => getActivePlans(catalog), [catalog]);
  const [period, setPeriod] = useState<PricingPeriod>("monthly");
  const savings = getCatalogYearlySavingsPercent(catalog);

  return (
    <>
      <section className="border-b border-brand-line/60 bg-[#FAFAF8] pb-14 pt-10 sm:pb-16 sm:pt-12">
        <div className="site-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Pricing</p>
            <h1 className="display-title mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
              Choose the plan that fits your business.
            </h1>
            <p className="body-copy mx-auto mt-5 max-w-2xl">
              Start with the capabilities your team needs today and expand as your construction business grows.
            </p>
          </div>
          <div className="mt-10">
            <BillingToggle period={period} onChange={setPeriod} savingsPercent={savings} />
          </div>
          {catalog.source === "placeholder" && (
            <p className="mx-auto mt-6 max-w-xl text-center text-[12px] text-brand-muted">
              Plan packaging is shown here. Numeric prices will display automatically when live plan data is connected.
            </p>
          )}
        </div>
      </section>

      <section className="border-b border-brand-line/60 py-16 sm:py-20">
        <div className="site-shell">
          <div
            className={`grid gap-5 ${
              plans.length >= 4
                ? "lg:grid-cols-2 xl:grid-cols-4"
                : plans.length === 3
                  ? "lg:grid-cols-3"
                  : "md:grid-cols-2"
            }`}
          >
            {plans.map((plan) => (
              <PricingPlanCard key={plan.id} plan={plan} period={period} />
            ))}
          </div>
        </div>
      </section>

      <FeatureComparison catalog={catalog} plans={plans} />
      <AddOnsSection catalog={catalog} />
      <PricingFAQ catalog={catalog} />
      <FinalPricingCTA />
    </>
  );
}
