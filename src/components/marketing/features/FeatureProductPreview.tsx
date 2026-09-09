"use client";

import type { ReactNode } from "react";
import {
  AIConsole,
  AccountingUI,
  AccountingDashboardUI,
  AccountingApUI,
  AccountingArUI,
  AccountingProjectUI,
  AccountingReportUI,
  AccountingFlowUI,
  BidManagementUI,
  BillingWorkspaceUI,
  BillingSovUI,
  BillingProgressUI,
  BillingPayAppUI,
  BillingArUI,
  BillingFlowUI,
  BudgetJobCostDashboardUI,
  PayAppDashboardUI,
  PayAppG702UI,
  PayAppG703UI,
  PayAppRetainageUI,
  PayAppHistoryUI,
  PayAppReviewUI,
  PayAppFlowUI,
  WipDashboardUI,
  WipProjectUI,
  WipTableUI,
  WipPortfolioUI,
  WipSnapshotUI,
  WipFlowUI,
  CashDashboardUI,
  CashChartUI,
  CashInflowsUI,
  CashOutflowsUI,
  CashArApUI,
  CashProjectUI,
  CashFlowUI,
  BudgetCostCodeTableUI,
  BudgetVsActualUI,
  BudgetFlowUI,
  BudgetIntelligenceUI,
  ChangeOrderUI,
  ChangeOrderRegisterUI,
  ChangeOrderCreateUI,
  ChangeOrderDetailUI,
  ChangeOrderFlowUI,
  ChangeOrderStatusUI,
  ChangeOrderContextUI,
  CollaborationUI,
  ConnectedExperienceUI,
  CrmPipelineUI,
  DocsUI,
  DocumentCenterUI,
  DocumentConsolidateUI,
  DocumentDetailUI,
  DocumentSearchUI,
  DocumentUploadUI,
  DocumentVersionsUI,
  DrawingMarkupUI,
  DrawingRegisterUI,
  DrawingViewerDetailUI,
  DrawingsWorkflowUI,
  FieldDrawingUI,
  EstimateUI,
  EstimatingUI,
  FinanceUI,
  PhoneUI,
  PortfolioAnalytics,
  PreconWorkspaceUI,
  ProcurementUI,
  ProjectCreateUI,
  ProjectDashboardUI,
  ProjectFinancialSummaryUI,
  ProjectPhasesTeamUI,
  ProjectSwitcherUI,
  ProjectWorkspace,
  RfiUI,
  RfiRegisterUI,
  RfiCreateUI,
  RfiDetailUI,
  RfiResponseUI,
  RfiFlowUI,
  RfiStatusUI,
  RfiContextUI,
  RfiFieldUI,
  SafetyUI,
  SheetsAsBuiltUI,
  TransmittalUI,
  ScheduleDependenciesUI,
  ScheduleExportUI,
  ScheduleGanttUI,
  ScheduleLookAheadUI,
  ScheduleRiskUI,
  ScheduleUI,
  SubmittalUI,
  SubmittalRegisterUI,
  SubmittalCreateUI,
  SubmittalDetailUI,
  SubmittalReviewUI,
  SubmittalFlowUI,
  SubmittalStatusUI,
  SubmittalWorkflowUI,
  SubmittalDocsUI,
  SubmittalFieldUI,
  TakeoffUI,
  WorkforceUI,
} from "@/components/mockups/ProductMockups";
import type { PreviewKey } from "@/lib/marketing/features/register";

const PREVIEWS: Record<PreviewKey, { node: ReactNode; dark?: boolean }> = {
  project: { node: <ProjectWorkspace /> },
  finance: { node: <FinanceUI />, dark: true },
  budgetDashboard: { node: <BudgetJobCostDashboardUI />, dark: true },
  budgetCostCodes: { node: <BudgetCostCodeTableUI />, dark: true },
  budgetVsActual: { node: <BudgetVsActualUI />, dark: true },
  budgetFlow: { node: <BudgetFlowUI /> },
  budgetIntelligence: { node: <BudgetIntelligenceUI />, dark: true },
  field: { node: <PhoneUI variant="home" raised /> },
  workforce: { node: <WorkforceUI /> },
  ai: { node: <AIConsole />, dark: true },
  connected: { node: <ConnectedExperienceUI /> },
  estimate: { node: <EstimateUI /> },
  estimating: { node: <EstimatingUI /> },
  bid: { node: <BidManagementUI /> },
  takeoff: { node: <TakeoffUI /> },
  crm: { node: <CrmPipelineUI /> },
  precon: { node: <PreconWorkspaceUI /> },
  safety: { node: <SafetyUI /> },
  docs: { node: <DocsUI /> },
  documentCenter: { node: <DocumentCenterUI /> },
  documentDetail: { node: <DocumentDetailUI /> },
  documentUpload: { node: <DocumentUploadUI /> },
  drawingsWorkflow: { node: <DrawingsWorkflowUI /> },
  documentSearch: { node: <DocumentSearchUI /> },
  documentVersions: { node: <DocumentVersionsUI />, dark: true },
  documentConsolidate: { node: <DocumentConsolidateUI /> },
  drawingViewer: { node: <DrawingViewerDetailUI /> },
  drawingRegister: { node: <DrawingRegisterUI />, dark: true },
  drawingMarkup: { node: <DrawingMarkupUI /> },
  sheetsAsBuilt: { node: <SheetsAsBuiltUI /> },
  transmittal: { node: <TransmittalUI />, dark: true },
  fieldDrawing: { node: <FieldDrawingUI /> },
  schedule: { node: <ScheduleUI /> },
  scheduleGantt: { node: <ScheduleGanttUI /> },
  scheduleDeps: { node: <ScheduleDependenciesUI /> },
  scheduleLookahead: { node: <ScheduleLookAheadUI /> },
  scheduleRisk: { node: <ScheduleRiskUI />, dark: true },
  scheduleExport: { node: <ScheduleExportUI /> },
  accounting: { node: <AccountingUI />, dark: true },
  accountingDashboard: { node: <AccountingDashboardUI />, dark: true },
  accountingAp: { node: <AccountingApUI />, dark: true },
  accountingAr: { node: <AccountingArUI />, dark: true },
  accountingProject: { node: <AccountingProjectUI />, dark: true },
  accountingReport: { node: <AccountingReportUI />, dark: true },
  accountingFlow: { node: <AccountingFlowUI /> },
  billingWorkspace: { node: <BillingWorkspaceUI />, dark: true },
  billingSov: { node: <BillingSovUI />, dark: true },
  billingProgress: { node: <BillingProgressUI />, dark: true },
  billingPayApp: { node: <BillingPayAppUI />, dark: true },
  billingAr: { node: <BillingArUI />, dark: true },
  billingFlow: { node: <BillingFlowUI /> },
  payAppDashboard: { node: <PayAppDashboardUI />, dark: true },
  payAppG702: { node: <PayAppG702UI />, dark: true },
  payAppG703: { node: <PayAppG703UI />, dark: true },
  payAppRetainage: { node: <PayAppRetainageUI />, dark: true },
  payAppHistory: { node: <PayAppHistoryUI />, dark: true },
  payAppReview: { node: <PayAppReviewUI />, dark: true },
  payAppFlow: { node: <PayAppFlowUI /> },
  wipDashboard: { node: <WipDashboardUI />, dark: true },
  wipProject: { node: <WipProjectUI />, dark: true },
  wipTable: { node: <WipTableUI />, dark: true },
  wipPortfolio: { node: <WipPortfolioUI />, dark: true },
  wipSnapshot: { node: <WipSnapshotUI />, dark: true },
  wipFlow: { node: <WipFlowUI /> },
  cashDashboard: { node: <CashDashboardUI />, dark: true },
  cashChart: { node: <CashChartUI />, dark: true },
  cashInflows: { node: <CashInflowsUI />, dark: true },
  cashOutflows: { node: <CashOutflowsUI />, dark: true },
  cashArAp: { node: <CashArApUI />, dark: true },
  cashProject: { node: <CashProjectUI />, dark: true },
  cashFlow: { node: <CashFlowUI /> },
  procurement: { node: <ProcurementUI /> },
  collaboration: { node: <CollaborationUI /> },
  reports: { node: <PortfolioAnalytics /> },
  rfi: { node: <RfiUI /> },
  rfiRegister: { node: <RfiRegisterUI /> },
  rfiCreate: { node: <RfiCreateUI /> },
  rfiDetail: { node: <RfiDetailUI />, dark: true },
  rfiResponse: { node: <RfiResponseUI /> },
  rfiFlow: { node: <RfiFlowUI /> },
  rfiStatus: { node: <RfiStatusUI /> },
  rfiContext: { node: <RfiContextUI /> },
  rfiField: { node: <RfiFieldUI /> },
  submittal: { node: <SubmittalUI /> },
  submittalRegister: { node: <SubmittalRegisterUI /> },
  submittalCreate: { node: <SubmittalCreateUI /> },
  submittalDetail: { node: <SubmittalDetailUI />, dark: true },
  submittalReview: { node: <SubmittalReviewUI /> },
  submittalFlow: { node: <SubmittalFlowUI /> },
  submittalStatus: { node: <SubmittalStatusUI /> },
  submittalWorkflow: { node: <SubmittalWorkflowUI /> },
  submittalDocs: { node: <SubmittalDocsUI /> },
  submittalField: { node: <SubmittalFieldUI /> },
  changeOrder: { node: <ChangeOrderUI />, dark: true },
  changeOrderRegister: { node: <ChangeOrderRegisterUI />, dark: true },
  changeOrderCreate: { node: <ChangeOrderCreateUI />, dark: true },
  changeOrderDetail: { node: <ChangeOrderDetailUI />, dark: true },
  changeOrderFlow: { node: <ChangeOrderFlowUI /> },
  changeOrderStatus: { node: <ChangeOrderStatusUI />, dark: true },
  changeOrderContext: { node: <ChangeOrderContextUI />, dark: true },
  projectCreate: { node: <ProjectCreateUI /> },
  projectDashboard: { node: <ProjectDashboardUI /> },
  projectFinancial: { node: <ProjectFinancialSummaryUI /> },
  projectPhases: { node: <ProjectPhasesTeamUI /> },
  projectSwitcher: { node: <ProjectSwitcherUI /> },
};

type Props = {
  preview: PreviewKey;
  dark?: boolean;
  className?: string;
  scale?: "md" | "lg";
  /** Premium browser/app chrome around the product mockup */
  framed?: boolean;
};

export function FeatureProductPreview({
  preview,
  dark,
  className = "",
  scale = "lg",
  framed = false,
}: Props) {
  const entry = PREVIEWS[preview] ?? PREVIEWS.project;
  const isDark = dark ?? entry.dark;
  const scaleClass =
    scale === "lg"
      ? "origin-top-left scale-[0.52] sm:scale-[0.58] lg:scale-[0.68]"
      : "origin-top-left scale-[0.45] sm:scale-[0.52] lg:scale-[0.58]";

  const body = (
    <div className={`pointer-events-none ${scaleClass} ${isDark ? "bg-brand-navy p-1.5" : "p-1.5"}`}>
      {entry.node}
    </div>
  );

  if (framed) {
    return (
      <div
        className={`relative overflow-hidden rounded-xl border border-brand-line/80 bg-white shadow-[0_20px_50px_-28px_rgba(8,35,63,0.35)] ${className}`}
        aria-hidden="true"
      >
        <div
          className={
            "flex items-center gap-2 border-b px-3.5 py-2.5 " +
            (isDark ? "border-white/10 bg-[#061525]" : "border-brand-line/70 bg-[#F7F9FC]")
          }
        >
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/90" />
          </span>
          <div
            className={
              "ml-2 flex-1 truncate rounded-md border px-3 py-1 text-[10px] font-medium " +
              (isDark
                ? "border-white/10 bg-white/5 text-slate-400"
                : "border-brand-line bg-white text-brand-muted")
            }
          >
            app.vertexcms.com
          </div>
        </div>
        <div className={`relative overflow-hidden ${isDark ? "bg-brand-navy" : "bg-[#FAFBFD]"}`}>
          {body}
          <div
            className={
              "pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t to-transparent " +
              (isDark ? "from-[#061525]" : "from-[#FAFBFD]")
            }
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-brand-line bg-[#FAFBFD] ${className}`}
      aria-hidden="true"
    >
      {body}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#FAFBFD] to-transparent" />
    </div>
  );
}
