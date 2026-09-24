"use client";

import { useCallback, useId, useRef, useState } from "react";

import { careersApplicationConfig } from "@/lib/marketing/careers/application/config";
import { formatResumeMetaLine } from "@/lib/marketing/careers/application/formatResumeMeta";
import type { ResumeFileMeta } from "@/lib/marketing/careers/application/types";
import {
  validateResumeFile,
  verifyResumeNotCorrupt,
  type ResumeValidationError,
} from "@/lib/marketing/careers/application/resumeValidation";

export type ResumeUploadStatus =
  | "empty"
  | "uploading"
  | "scanning"
  | "valid"
  | "error";

export type ResumeUploadState = {
  status: ResumeUploadStatus;
  progress: number;
  file: ResumeFileMeta | null;
  errorCode?: ResumeValidationError | "network" | "scan_failed";
};

type Copy = {
  label: string;
  emptyTitle: string;
  emptyHint: string;
  browse: string;
  dragHint: string;
  uploading: string;
  scanning: string;
  validLabel: string;
  securityComplete: string;
  remove: string;
  replace: string;
  retry: string;
  securityNote: string;
  formats: string;
  errors: Record<ResumeValidationError | "network" | "scan_failed", string>;
};

type Props = {
  copy: Copy;
  state: ResumeUploadState;
  onStateChange: (state: ResumeUploadState) => void;
  disabled?: boolean;
  error?: string;
};

function toMeta(file: File): ResumeFileMeta {
  return {
    name: file.name,
    size: file.size,
    type: file.type,
    lastModified: file.lastModified,
  };
}

export function ResumeUploadField({ copy, state, onStateChange, disabled, error }: Props) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const processFile = useCallback(
    async (file: File) => {
      const basic = validateResumeFile(file);
      if (!basic.ok) {
        onStateChange({
          status: "error",
          progress: 0,
          file: toMeta(file),
          errorCode: basic.code,
        });
        return;
      }

      onStateChange({ status: "uploading", progress: 8, file: toMeta(file) });

      let progress = 8;
      const tick = window.setInterval(() => {
        progress = Math.min(progress + 12, 92);
        onStateChange({ status: "uploading", progress, file: toMeta(file) });
      }, 120);

      try {
        await new Promise((r) => setTimeout(r, 700));
        clearInterval(tick);
        onStateChange({ status: "scanning", progress: 96, file: toMeta(file) });
        await new Promise((r) => setTimeout(r, 500));
        const corrupt = await verifyResumeNotCorrupt(file);
        if (!corrupt.ok) {
          onStateChange({ status: "error", progress: 0, file: toMeta(file), errorCode: corrupt.code });
          return;
        }
        onStateChange({ status: "valid", progress: 100, file: toMeta(file) });
      } catch {
        clearInterval(tick);
        onStateChange({ status: "error", progress: 0, file: toMeta(file), errorCode: "network" });
      }
    },
    [onStateChange],
  );

  const onFiles = (files: FileList | null) => {
    if (disabled || !files?.length) return;
    void processFile(files[0]);
  };

  const errorMessage =
    error ??
    (state.status === "error" && state.errorCode ? copy.errors[state.errorCode] : undefined);

  const formats = careersApplicationConfig.supportedResumeExtensions.map((e) => e.toUpperCase()).join(", ");
  const sizeHint =
    typeof careersApplicationConfig.resumeMaxBytes === "number" && Number.isFinite(careersApplicationConfig.resumeMaxBytes)
      ? ` Up to ${Math.round(careersApplicationConfig.resumeMaxBytes / (1024 * 1024))} MB.`
      : "";

  const showEmptyHelp = state.status === "empty" || state.status === "error";

  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="block text-[14px] font-semibold text-brand-navy">
        {copy.label}
        <span className="text-brand-orange" aria-hidden="true">
          {" "}
          *
        </span>
      </label>
      {showEmptyHelp ? (
        <p className="text-[13px] text-brand-muted">
          {copy.formats.replace("{formats}", formats)}
          {sizeHint}
        </p>
      ) : null}

      <div
        className={`relative rounded-lg border bg-white transition-colors ${
          errorMessage ? "border-red-400" : dragOver ? "border-brand-orange bg-brand-orange/[0.03]" : "border-brand-line"
        } ${disabled ? "opacity-60" : ""}`}
        onDragEnter={(e) => {
          e.preventDefault();
          if (!disabled) setDragOver(true);
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          onFiles(e.dataTransfer.files);
        }}
      >
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          className="sr-only"
          accept={careersApplicationConfig.supportedResumeExtensions.map((e) => `.${e}`).join(",")}
          disabled={disabled || state.status === "uploading" || state.status === "scanning"}
          onChange={(e) => onFiles(e.target.files)}
        />

        {showEmptyHelp ? (
          <div className="flex flex-col items-start gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div>
              <p className="text-[15px] font-medium text-brand-navy">{copy.emptyTitle}</p>
              <p className="mt-1 text-[13px] text-brand-muted">{copy.emptyHint}</p>
              <p className="mt-2 text-[12px] text-brand-muted">{copy.dragHint}</p>
            </div>
            <button
              type="button"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-brand-navy/20 bg-white px-5 text-[13px] font-semibold text-brand-navy transition hover:border-brand-orange hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
              disabled={disabled}
              onClick={() => inputRef.current?.click()}
            >
              {copy.browse}
            </button>
          </div>
        ) : null}

        {(state.status === "uploading" || state.status === "scanning") && state.file ? (
          <div className="px-5 py-7 sm:px-7" aria-busy="true">
            <p className="text-[15px] font-medium text-brand-navy">{state.file.name}</p>
            <p className="mt-1 text-[13px] text-brand-muted">
              {state.status === "uploading" ? copy.uploading : copy.scanning}
            </p>
            <div
              className="mt-4 h-1.5 overflow-hidden rounded-full bg-brand-navy/10"
              role="progressbar"
              aria-valuenow={state.progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="h-full bg-brand-orange transition-all duration-200" style={{ width: `${state.progress}%` }} />
            </div>
          </div>
        ) : null}

        {state.status === "valid" && state.file ? (
          <div className="flex flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-700">{copy.validLabel}</p>
              <p className="mt-2 text-[15px] font-medium text-brand-navy">{state.file.name}</p>
              <p className="mt-1 text-[13px] text-brand-muted">{formatResumeMetaLine(state.file)}</p>
              <p className="mt-2 text-[12px] font-medium text-emerald-800/90">{copy.securityComplete}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="min-h-[44px] rounded-full border border-brand-line px-4 text-[13px] font-semibold text-brand-navy hover:border-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
                disabled={disabled}
                onClick={() => inputRef.current?.click()}
              >
                {copy.replace}
              </button>
              <button
                type="button"
                className="min-h-[44px] rounded-full border border-brand-line px-4 text-[13px] font-semibold text-brand-navy hover:border-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
                disabled={disabled}
                onClick={() => onStateChange({ status: "empty", progress: 0, file: null })}
              >
                {copy.remove}
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {state.status === "error" ? (
        <button
          type="button"
          className="text-[13px] font-semibold text-brand-navy underline-offset-2 hover:text-brand-orange hover:underline"
          onClick={() => {
            onStateChange({ status: "empty", progress: 0, file: null });
            inputRef.current?.click();
          }}
        >
          {copy.retry}
        </button>
      ) : null}

      {showEmptyHelp ? (
        <p className="text-[12px] leading-relaxed text-brand-muted">{copy.securityNote}</p>
      ) : null}

      {errorMessage ? (
        <p className="text-[13px] font-medium text-red-600" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
