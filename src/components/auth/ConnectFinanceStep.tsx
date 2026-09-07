"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { OnboardingShell } from "@/components/auth/OnboardingShell";
import { AuthClient } from "@/lib/auth/client";
import type { FinanceConnectStatus } from "@/lib/auth/types";

type ConnectKind = "bank" | "gl";

export function ConnectFinanceStep() {
  const router = useRouter();
  const [selected, setSelected] = useState<ConnectKind | null>(null);
  const [status, setStatus] = useState<FinanceConnectStatus>("not_connected");
  const [activeKind, setActiveKind] = useState<ConnectKind | null>(null);
  const [loading, setLoading] = useState(false);
  const [skipping, setSkipping] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [hint, setHint] = useState<string | null>(null);

  async function startConnect(kind: ConnectKind) {
    setSelected(kind);
    setActiveKind(kind);
    setLoading(true);
    setMessage(null);
    setHint(null);
    setStatus("connecting");

    const result = await AuthClient.connectFinance(kind);
    setLoading(false);

    if (!result.ok) {
      setStatus("failed");
      setMessage(
        kind === "bank"
          ? "We couldn’t connect your bank right now. You can try again, or finish this later from Financial Settings."
          : "We couldn’t connect your general ledger right now. You can try again, or finish this later from Financial Settings."
      );
      return;
    }

    setStatus(result.data.status);
    if (result.data.status === "connected") {
      setMessage(
        kind === "bank"
          ? "Your bank connection is ready. You can continue to your workspace."
          : "Your general-ledger connection is ready. You can continue to your workspace."
      );
    }
  }

  async function connectAccounts() {
    if (!selected) {
      setHint("Choose Bank Connection or General Ledger to continue.");
      return;
    }
    await startConnect(selected);
  }

  async function skip() {
    setSkipping(true);
    const result = await AuthClient.skipConnect();
    setSkipping(false);
    if (result.ok) router.push(result.data.redirectTo);
  }

  async function continueAfterSuccess() {
    setSkipping(true);
    const result = await AuthClient.skipConnect();
    setSkipping(false);
    if (result.ok) router.push(result.data.redirectTo);
  }

  const optionClass = (kind: ConnectKind) => {
    const active = selected === kind;
    const busy = loading && activeKind === kind;
    return `flex flex-col rounded-xl border px-5 py-5 text-left transition ${
      active
        ? "border-brand-orange/40 bg-brand-orange/5 shadow-soft"
        : "border-brand-line bg-[#FAFBFD] hover:border-brand-navy/20"
    } ${busy ? "opacity-80" : ""}`;
  };

  return (
    <OnboardingShell
      current="connect"
      showPreviewNotice={false}
      headline="Connect your financial accounts."
      description="Connect your bank or general-ledger system to keep your financial data connected with your Vertex CMS workspace."
      title="Financial connections"
      subtitle="Connect your financial accounts when you’re ready. You can also complete this step later from Financial Settings."
    >
      <div className="space-y-6">
        {status === "connecting" && (
          <AuthAlert tone="info">
            Connecting your {activeKind === "gl" ? "general ledger" : "bank"}…
          </AuthAlert>
        )}

        {message && (
          <AuthAlert tone={status === "failed" ? "error" : status === "connected" ? "success" : "info"}>
            {message}
          </AuthAlert>
        )}

        {hint && !message && <AuthAlert tone="info">{hint}</AuthAlert>}

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            className={optionClass("bank")}
            onClick={() => {
              setSelected("bank");
              setHint(null);
              void startConnect("bank");
            }}
            disabled={loading || skipping}
            aria-pressed={selected === "bank"}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Bank connection</p>
            <p className="mt-2 text-[15px] font-semibold text-brand-navy">Connect your supported banking system.</p>
            <p className="mt-4 text-[13px] font-semibold text-brand-blue">
              {loading && activeKind === "bank" ? "Connecting…" : "Connect bank →"}
            </p>
          </button>

          <button
            type="button"
            className={optionClass("gl")}
            onClick={() => {
              setSelected("gl");
              setHint(null);
              void startConnect("gl");
            }}
            disabled={loading || skipping}
            aria-pressed={selected === "gl"}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">General ledger</p>
            <p className="mt-2 text-[15px] font-semibold text-brand-navy">
              Connect your accounting or general-ledger system.
            </p>
            <p className="mt-4 text-[13px] font-semibold text-brand-blue">
              {loading && activeKind === "gl" ? "Connecting…" : "Connect GL →"}
            </p>
          </button>
        </div>

        <p className="text-[13px] leading-relaxed text-brand-muted">
          You can skip this step and connect your financial accounts later from Financial Settings.
        </p>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row">
          {status === "connected" ? (
            <AuthButton type="button" loading={skipping} onClick={() => void continueAfterSuccess()}>
              Continue to workspace
            </AuthButton>
          ) : (
            <AuthButton type="button" loading={loading} disabled={skipping} onClick={() => void connectAccounts()}>
              {status === "failed" ? "Try again" : "Connect Accounts"}
            </AuthButton>
          )}
          <AuthButton type="button" variant="secondary" loading={skipping} disabled={loading} onClick={() => void skip()}>
            Skip for now
          </AuthButton>
        </div>
      </div>
    </OnboardingShell>
  );
}
