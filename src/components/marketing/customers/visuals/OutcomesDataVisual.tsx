import { getRoiMetricsCatalog, hasRoiMetrics } from "@/lib/marketing/customers/catalog";
import { CUSTOMERS_LIMITED_NOTES } from "@/lib/marketing/customers/content";
import { CustomerRoiMetricsPanel } from "../CustomerRoiMetricsPanel";
import { CustomersProofCompactNote } from "../CustomersProofCompactNote";

export function OutcomesDataVisual() {
  if (hasRoiMetrics()) {
    return <CustomerRoiMetricsPanel metrics={getRoiMetricsCatalog()} />;
  }

  return (
    <div className="rounded-lg border border-brand-line bg-[#FAFBFD] px-4 py-4 sm:px-5">
      <CustomersProofCompactNote message={CUSTOMERS_LIMITED_NOTES.roi} />
    </div>
  );
}
