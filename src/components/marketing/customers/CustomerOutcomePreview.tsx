import { getRoiMetricsCatalog, hasRoiMetrics } from "@/lib/marketing/customers/catalog";

import { CUSTOMERS_LIMITED_NOTES, CUSTOMERS_PAGE, CUSTOMERS_SECTIONS } from "@/lib/marketing/customers/content";

import { CustomerRoiMetricsPanel } from "./CustomerRoiMetricsPanel";

import { CustomersProofCompactNote } from "./CustomersProofCompactNote";

import { CustomersSectionBackdrop } from "./visuals/CustomersSectionBackdrop";



export function CustomerOutcomePreview() {

  const { roi } = CUSTOMERS_PAGE;

  const metrics = hasRoiMetrics() ? getRoiMetricsCatalog() : [];



  return (

    <section

      id={CUSTOMERS_SECTIONS.results}

      className="cust-scroll-target relative overflow-hidden border-b border-brand-line bg-[#F5F8FC] py-10 sm:py-12"

      data-design-layer="OutcomesVisualization"

    >

      <CustomersSectionBackdrop variant="results" />

      <div className="cust-shell relative z-[1]">

        <div className="max-w-xl">

          <p className="cust-eyebrow">{roi.eyebrow}</p>

          <h2 className="cust-display mt-2 text-xl sm:text-[1.75rem]">{roi.headline}</h2>

          <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">{roi.supporting}</p>

        </div>



        <div className="mt-6">

          {metrics.length > 0 ? (

            <CustomerRoiMetricsPanel metrics={metrics} />

          ) : (

            <div className="rounded-lg border border-brand-line bg-white px-4 py-4 sm:px-5">

              <CustomersProofCompactNote message={CUSTOMERS_LIMITED_NOTES.roi} />

            </div>

          )}

        </div>

      </div>

    </section>

  );

}


