import { PROVISIONING_MILESTONES, type TenantProvisionStatus } from "@/lib/auth/types";

export type MilestoneVisualState = "done" | "active" | "pending" | "failed";

type Phase = "running" | "ready" | "failed";

export function resolveMilestoneState(
  id: (typeof PROVISIONING_MILESTONES)[number]["id"],
  phase: Phase,
  status: TenantProvisionStatus
): MilestoneVisualState {
  if (phase === "ready") return "done";
  if (id === "account" || id === "email") return "done";

  if (id === "tenant") {
    if (status === "creating_tenant") return phase === "failed" ? "failed" : "active";
    if (["assigning_subdomain", "preparing_workspace", "ready"].includes(status)) return "done";
    if (phase === "failed") return "failed";
    return "pending";
  }

  if (id === "subdomain") {
    if (status === "assigning_subdomain") return phase === "failed" ? "failed" : "active";
    if (["preparing_workspace", "ready"].includes(status)) return "done";
    if (status === "creating_tenant") return "pending";
    if (phase === "failed" && status === "failed") return "failed";
    return "pending";
  }

  if (id === "workspace") {
    if (status === "preparing_workspace") return phase === "failed" ? "failed" : "active";
    if (status === "ready") return "done";
    if (phase === "failed") return "failed";
    return "pending";
  }

  return "pending";
}

export function ProvisioningMilestones({
  phase,
  status,
}: {
  phase: Phase;
  status: TenantProvisionStatus;
}) {
  return (
    <ol className="mt-8 space-y-3" aria-live="polite">
      {PROVISIONING_MILESTONES.map((m) => {
        const state = resolveMilestoneState(m.id, phase, status);
        return (
          <li
            key={m.id}
            className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-[14px] ${
              state === "done"
                ? "border-emerald-200 bg-emerald-50/70 text-brand-navy"
                : state === "active"
                  ? "border-brand-orange/30 bg-brand-orange/5 text-brand-navy"
                  : state === "failed"
                    ? "border-amber-200 bg-amber-50/80 text-brand-navy"
                    : "border-brand-line bg-[#FAFBFD] text-brand-muted"
            }`}
          >
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-[11px] font-bold"
              aria-hidden="true"
            >
              {state === "done" ? "✓" : state === "active" ? "→" : state === "failed" ? "!" : "·"}
            </span>
            <span className="font-medium">{m.label}</span>
            {state === "failed" && (
              <span className="sr-only"> — step incomplete</span>
            )}
          </li>
        );
      })}
    </ol>
  );
}
