"use client";

import { useMarketing } from "@/components/marketing/MarketingProviders";
import {
  accessSecurity,
  aiGovernance,
  complianceMatrix,
  complianceSection,
  dataProtection,
  reliability,
} from "@/lib/marketing/security/content";
import type { SecurityPageId } from "@/lib/marketing/security/pages";
import { SecurityInfoPanel } from "./SecurityInfoPanel";
import { SecuritySection } from "./SecuritySection";
import { SecuritySpecGrid } from "./SecuritySpecGrid";
import { StatusPill } from "./StatusPill";

type Props = {
  pageId: Exclude<SecurityPageId, "hub" | "contact">;
};

export function SecurityTopicContent({ pageId }: Props) {
  const { t } = useMarketing();
  const keyEyebrow = t.security.keyInfo.eyebrow;

  if (pageId === "data-protection") {
    return (
      <SecuritySection
        id={dataProtection.id}
        eyebrow={keyEyebrow}
        title={dataProtection.title}
        description={dataProtection.supporting}
        supplemental={
          <SecurityInfoPanel label="Documented controls">
            <ControlList items={dataProtection.controls} />
          </SecurityInfoPanel>
        }
      >
        <BulletList items={dataProtection.summaryBullets} />
        <NotesList notes={dataProtection.notes} />
      </SecuritySection>
    );
  }

  if (pageId === "access-security") {
    return (
      <SecuritySection
        id={accessSecurity.id}
        eyebrow={keyEyebrow}
        title={accessSecurity.title}
        description={accessSecurity.supporting}
        supplemental={
          <SecurityInfoPanel label="Access flow">
            <FlowList steps={accessSecurity.steps} />
          </SecurityInfoPanel>
        }
      >
        <BulletList items={accessSecurity.summaryBullets} />
        <CalloutList items={accessSecurity.callouts} />
      </SecuritySection>
    );
  }

  if (pageId === "compliance") {
    return (
      <SecuritySection
        id={complianceSection.id}
        eyebrow={keyEyebrow}
        title={complianceSection.title}
        description={complianceSection.supporting}
        supplemental={
          <SecurityInfoPanel label="Status key">
            <p className="text-[13px] leading-[1.75] text-[#5C6560]">{complianceSection.distinction}</p>
          </SecurityInfoPanel>
        }
      >
        <ComplianceTable />
      </SecuritySection>
    );
  }

  if (pageId === "ai-governance") {
    return (
      <SecuritySection
        id={aiGovernance.id}
        eyebrow={keyEyebrow}
        title={aiGovernance.title}
        description={aiGovernance.supporting}
        supplemental={
          <SecurityInfoPanel label="AI action flow">
            <FlowList steps={aiGovernance.flow.map((s) => ({ id: s.label, label: s.label, detail: s.detail }))} />
          </SecurityInfoPanel>
        }
      >
        <p className="text-[15px] font-medium leading-[1.75] text-[#0D0D0D]/90">{aiGovernance.coreMessage}</p>
        <BulletList items={aiGovernance.summaryBullets} />
        <PointsList points={aiGovernance.points} />
        <p className="mt-6 text-[13px] leading-[1.75] text-[#5C6560]">{aiGovernance.roadmapNote}</p>
      </SecuritySection>
    );
  }

  return (
    <SecuritySection
      id={reliability.id}
      eyebrow={keyEyebrow}
      title={reliability.title}
      description={reliability.supporting}
        supplemental={
          <SecuritySpecGrid
            items={reliability.metrics.map((m) => ({
              label: `${m.value} · ${m.label}`,
              detail: m.detail,
              status: m.status,
            }))}
          />
        }
    >
      <p className="text-[13px] leading-[1.75] text-[#5C6560]">{reliability.architectureNote}</p>
      <p className="mt-3 text-[13px] leading-[1.75] text-[#5C6560]">{reliability.restoreNote}</p>
    </SecuritySection>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ol className="divide-y divide-[#E8E8E8] border-y border-[#E8E8E8]">
      {items.map((item, index) => (
        <li key={item} className="flex gap-4 py-4">
          <span className="font-mono text-[12px] font-semibold text-[#3FE844]">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-[14px] leading-[1.75] text-[#0D0D0D]/85">{item}</span>
        </li>
      ))}
    </ol>
  );
}

function ControlList({
  items,
}: {
  items: { title: string; value: string; status: import("@/lib/marketing/security/content").SecurityStatus }[];
}) {
  return (
    <ul className="divide-y divide-[#E8E8E8] border-y border-[#E8E8E8]">
      {items.map((control) => (
        <li key={control.title} className="flex flex-wrap items-start justify-between gap-3 py-4 first:pt-5 last:pb-5">
          <div>
            <p className="text-[13px] font-semibold text-[#0D0D0D]">{control.title}</p>
            <p className="mt-1 font-mono text-[12px] text-[#5C6560]">{control.value}</p>
          </div>
          <StatusPill status={control.status} />
        </li>
      ))}
    </ul>
  );
}

function NotesList({
  notes,
}: {
  notes: { title: string; body: string; status: import("@/lib/marketing/security/content").SecurityStatus }[];
}) {
  return (
    <div className="mt-8 space-y-5 border-t border-[#E8E8E8] pt-6">
      {notes.map((note) => (
        <div key={note.title}>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[13px] font-semibold text-[#0D0D0D]">{note.title}</p>
            <StatusPill status={note.status} />
          </div>
          <p className="mt-2 text-[13px] leading-[1.8] text-[#5C6560]">{note.body}</p>
        </div>
      ))}
    </div>
  );
}

function CalloutList({
  items,
}: {
  items: { label: string; body: string; status: import("@/lib/marketing/security/content").SecurityStatus }[];
}) {
  return (
    <ul className="mt-8 space-y-4 border-t border-[#E8E8E8] pt-6">
      {items.map((item) => (
        <li key={item.label} className="border-l-2 border-[#3FE844] pl-4">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[14px] font-semibold text-[#0D0D0D]">{item.label}</p>
            <StatusPill status={item.status} />
          </div>
          <p className="mt-1.5 text-[13px] leading-[1.8] text-[#5C6560]">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

function FlowList({ steps }: { steps: { id: string; label: string; detail: string }[] }) {
  return (
    <ol className="divide-y divide-[#E8E8E8] border-y border-[#E8E8E8]">
      {steps.map((step, index) => (
        <li key={step.id} className="flex gap-4 py-4 first:pt-5 last:pb-5">
          <span className="font-mono text-[11px] font-semibold text-[#3FE844]">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <p className="text-[13px] font-semibold text-[#0D0D0D]">{step.label}</p>
            <p className="mt-0.5 text-[12px] leading-relaxed text-[#5C6560]">{step.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function ComplianceTable() {
  return (
    <div className="overflow-hidden border-y border-[#E8E8E8]">
      <ul role="list">
        {complianceMatrix.map((row) => (
          <li key={row.control} className="grid gap-2 border-b border-[#E8E8E8] px-0 py-4 last:border-0 lg:grid-cols-[1fr_1.4fr_auto] lg:items-start lg:gap-6">
            <p className="font-semibold text-[#0D0D0D]">{row.control}</p>
            <p className="text-[13px] leading-[1.75] text-[#5C6560]">{row.context}</p>
            <StatusPill status={row.status} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function PointsList({ points }: { points: { label: string; body: string }[] }) {
  return (
    <ul className="mt-8 divide-y divide-[#E8E8E8] border-t border-[#E8E8E8]">
      {points.map((point) => (
        <li key={point.label} className="py-4 first:pt-6">
          <p className="text-[13px] font-semibold text-[#0D0D0D]">{point.label}</p>
          <p className="mt-1.5 text-[12px] leading-relaxed text-[#5C6560]">{point.body}</p>
        </li>
      ))}
    </ul>
  );
}
