"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { FormField, authInputClass } from "@/components/auth/FormField";
import { OnboardingShell } from "@/components/auth/OnboardingShell";
import { AuthClient } from "@/lib/auth/client";
import type { InviteRole } from "@/lib/auth/types";
import { INVITE_ROLE_LABELS } from "@/lib/auth/types";

type InviteRow = { email: string; role: InviteRole };

export function InviteTeamForm() {
  const router = useRouter();
  const [rows, setRows] = useState<InviteRow[]>([
    { email: "", role: "member" },
    { email: "", role: "member" },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState<string | null>(null);

  function updateRow(index: number, patch: Partial<InviteRow>) {
    setRows((prev) => prev.map((r, i) => (i === index ? { ...r, ...patch } : r)));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    setFieldErrors({});
    const result = await AuthClient.inviteTeam({ invites: rows });
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      setFieldErrors(result.fieldErrors ?? {});
      return;
    }
    setSuccess(`${result.data.sent} invitation${result.data.sent === 1 ? "" : "s"} queued.`);
    window.setTimeout(() => router.push(result.data.redirectTo), 700);
  }

  async function skip() {
    setLoading(true);
    const result = await AuthClient.skipInviteTeam();
    setLoading(false);
    if (result.ok) router.push(result.data.redirectTo);
  }

  return (
    <OnboardingShell
      current="invite"
      title="Bring your team into VertexBuild"
      subtitle="Send email invitations so colleagues can join your workspace. Granular permissions remain controlled by the CMS RBAC layer."
    >
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        {error && <AuthAlert>{error}</AuthAlert>}
        {success && <AuthAlert tone="success">{success}</AuthAlert>}
        {fieldErrors.emails && <AuthAlert>{fieldErrors.emails}</AuthAlert>}

        <div className="space-y-3">
          {rows.map((row, i) => (
            <div key={i} className="grid gap-3 sm:grid-cols-[1fr_160px]">
              <FormField id={`email-${i}`} label={i === 0 ? "Email" : `Email ${i + 1}`}>
                <input
                  id={`email-${i}`}
                  type="email"
                  value={row.email}
                  onChange={(e) => updateRow(i, { email: e.target.value })}
                  className={authInputClass()}
                  placeholder="name@company.com"
                />
              </FormField>
              <FormField id={`role-${i}`} label={i === 0 ? "Role" : "Role"}>
                <select
                  id={`role-${i}`}
                  value={row.role}
                  onChange={(e) => updateRow(i, { role: e.target.value as InviteRole })}
                  className={authInputClass()}
                >
                  {(Object.keys(INVITE_ROLE_LABELS) as InviteRole[]).map((r) => (
                    <option key={r} value={r}>
                      {INVITE_ROLE_LABELS[r]}
                    </option>
                  ))}
                </select>
              </FormField>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="text-[13px] font-semibold text-brand-blue hover:underline"
          onClick={() => setRows((r) => [...r, { email: "", role: "member" }])}
        >
          + Add another invite
        </button>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <AuthButton loading={loading}>Send invitations</AuthButton>
          <AuthButton type="button" variant="secondary" onClick={skip}>
            Skip for now
          </AuthButton>
        </div>
      </form>
    </OnboardingShell>
  );
}
