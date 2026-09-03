import { FeaturePoints, LearnMore } from "./SectionBits";
import { AccountingUI, FinanceUI } from "./mockups/ProductMockups";
import { Reveal } from "./Reveal";

export function FinanceControl() {
  return (
    <section id="finance" className="bg-white py-20 sm:py-24">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <Reveal className="order-2 lg:order-1">
          <div className="space-y-4">
            <FinanceUI />
            <AccountingUI />
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <p className="eyebrow">Finance & Control</p>
          <h2 className="headline mt-3">Know where every construction dollar stands.</h2>
          <p className="copy mt-4">
            Connect contracts, change orders, pay applications, budgets, job cost, and native
            accounting in one financial workflow.
          </p>
          <FeaturePoints
            items={[
              "Contracts, SOV & change orders",
              "Pay applications & cash flow",
              "Budget vs actual / job cost",
              "Native double-entry General Ledger",
            ]}
          />
          <LearnMore href="/features/contracts-financials" label="Learn more about Financials" />
        </Reveal>
      </div>
    </section>
  );
}
