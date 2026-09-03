import { BuildMockup } from "@/components/cms/BuildMockup";
import { ConnectMockup } from "@/components/cms/ConnectMockup";
import { ControlMockup } from "@/components/cms/ControlMockup";
import { PlanMockup, PlanWorkflowStrip } from "@/components/cms/PlanMockup";
import { ProtectMockup } from "@/components/cms/ProtectMockup";
import { UnderstandMockup } from "@/components/cms/UnderstandMockup";
import { ProductSection } from "@/components/ui/ProductSection";
import { Reveal } from "@/components/Reveal";

export function PlanSection() {
  return (
    <ProductSection
      id="plan"
      index="01"
      eyebrow="Plan with confidence"
      title="Plan Every Project With Confidence."
      copy="Bring projects, teams, estimates, and bids together before work begins. Manage your project portfolio and build accurate estimates that turn into budgets and Schedule of Values."
      points={[
        "Project portfolio and status in one view",
        "Preconstruction, estimating, and bid tracking",
        "Estimates that become budgets and SOV",
        "Milestones and project health visibility",
      ]}
      href="/features/project-management"
      mockup={<PlanMockup />}
      tone="soft"
      aside={
        <Reveal delay={160}>
          <PlanWorkflowStrip />
        </Reveal>
      }
    />
  );
}

export function ControlSection() {
  return (
    <ProductSection
      id="control"
      index="02"
      eyebrow="Control financial performance"
      title="Control Every Dollar. Protect Every Margin."
      copy="Bring contracts, budgets, job costs, change orders, billing, accounting, and cash flow into one connected financial workspace. Track what was committed, what has been spent, what has been billed, and what remains—while keeping project financial data aligned from the contract and SOV through payment and reporting."
      points={[
        "Contracts, SOV, and change orders",
        "Budget vs Actual and job cost",
        "Billing, AP / AR, and cash flow",
        "Accounting and financial reporting",
      ]}
      href="/features/contracts-financials"
      mockup={<ControlMockup />}
      reverse
      tone="white"
    />
  );
}

export function BuildSection() {
  return (
    <ProductSection
      id="build"
      index="03"
      eyebrow="Build in the field"
      title="Keep the job moving from field to office."
      copy="Daily logs, workforce, equipment, schedule progress, and photos stay connected — so field and office work from the same record."
      points={[
        "Daily logs and field updates",
        "Workforce and timesheets",
        "Equipment utilization",
        "Schedule progress and photos",
      ]}
      href="/features/field-operations"
      mockup={<BuildMockup />}
      tone="soft"
    />
  );
}

export function ProtectSection() {
  return (
    <ProductSection
      id="protect"
      index="04"
      eyebrow="Protect people and information"
      title="Protect the project, people and information."
      copy="Safety, drawings, documents, approvals, and collaboration stay visible — with version control and compliance status on every project."
      points={[
        "Safety and compliance status",
        "Drawings with revision control",
        "Approvals and activity",
        "Documents and closeout",
      ]}
      href="/features/documents-project-information"
      mockup={<ProtectMockup />}
      reverse
      tone="white"
    />
  );
}

export function ConnectSection() {
  return (
    <ProductSection
      id="connect"
      index="05"
      eyebrow="Connect every role"
      title="Keep everyone connected to the same project information."
      copy="Office, field, subcontractors, and clients share one project thread — activity, tasks, approvals, and updates in context."
      points={[
        "Project activity feed",
        "Approvals and notifications",
        "Tasks across roles",
        "Field-to-office communication",
      ]}
      href="/features/connected-experience"
      mockup={<ConnectMockup />}
      tone="soft"
    />
  );
}

export function UnderstandSection() {
  return (
    <ProductSection
      id="understand"
      index="06"
      eyebrow="Understand with intelligence"
      title="Turn construction data into better decisions."
      copy="Ask live project questions and surface schedule, financial, and issue risk — with recommended actions you confirm before any write."
      points={[
        "AI Assistant grounded in CMS data",
        "Risk and financial intelligence",
        "Document intelligence",
        "Reports and recommended actions",
      ]}
      href="/features/ai-intelligence"
      mockup={<UnderstandMockup />}
      reverse
      dark
    />
  );
}
