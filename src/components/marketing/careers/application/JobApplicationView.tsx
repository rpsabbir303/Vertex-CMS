"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useMemo, useState, type ReactNode } from "react";

import "@/app/company/careers/careers-application.css";

import { AuthAlert } from "@/components/auth/AuthAlert";
import { authInputAria } from "@/components/auth/FormField";
import { TextAreaField } from "@/components/conversion/TextAreaField";
import { CompanyCanvas, CompanyNav } from "@/components/marketing/company/CompanyCanvas";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import {
  loadApplicationDraft,
  saveApplicationDraft,
} from "@/lib/marketing/careers/application/applicationSession";
import { careersApplicationConfig } from "@/lib/marketing/careers/application/config";
import { careerApplyInputClass, careerApplyTextareaClass } from "@/lib/marketing/careers/application/formStyles";
import {
  emptyProfessionalExperience,
  type ProfessionalExperienceFormValues,
} from "@/lib/marketing/careers/application/professionalExperienceTypes";
import {
  hasMeaningfulDraftValues,
  presentationalApplicationValues,
  presentationalProfessionalExperience,
  presentationalResumeFile,
} from "@/lib/marketing/careers/application/presentationalDefaults";
import { submitJobApplication } from "@/lib/marketing/careers/application/submitApplication";
import type { JobApplicationFormValues } from "@/lib/marketing/careers/application/types";
import { validateJobApplication } from "@/lib/marketing/careers/application/validation";
import type { CareerJob } from "@/lib/marketing/careers/content";
import {
  careerApplicationConfirmationPath,
  careerDetailPath,
  isJobOpenForApplications,
} from "@/lib/marketing/careers/content";
import { ROUTES } from "@/lib/marketing/navigation";

import { ApplicationFormField } from "./ApplicationFormField";
import { JobApplicationSection } from "./JobApplicationSection";
import { ProfessionalExperienceSection } from "./ProfessionalExperienceSection";
import { ResumeUploadField, type ResumeUploadState } from "./ResumeUploadField";

type Step = "application" | "review";

type Props = {
  job: CareerJob;
};

const emptyValues: JobApplicationFormValues = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  linkedInUrl: "",
  portfolioUrl: "",
  coverLetter: "",
  privacyConsent: false,
  vacancyTermsAck: false,
};

function JobApplicationProgress({ step, copy }: { step: Step; copy: { aria: string; a: string; b: string } }) {
  const steps: { id: Step; label: string }[] = [
    { id: "application", label: copy.a },
    { id: "review", label: copy.b },
  ];
  const index = step === "application" ? 0 : 1;

  return (
    <ol className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6" aria-label={copy.aria}>
      {steps.map((s, i) => {
        const active = i === index;
        const complete = i < index;
        return (
          <li key={s.id} className="flex items-center gap-3 text-[14px]">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[13px] font-semibold ${
                active
                  ? "border-brand-orange bg-brand-orange text-white"
                  : complete
                    ? "border-brand-navy bg-brand-navy text-white"
                    : "border-brand-line bg-white text-brand-muted"
              }`}
              aria-current={active ? "step" : undefined}
            >
              {i + 1}
            </span>
            <span className={active ? "font-semibold text-brand-navy" : "text-brand-muted"}>{s.label}</span>
          </li>
        );
      })}
    </ol>
  );
}

export function JobApplicationView({ job }: Props) {
  const router = useRouter();
  const { t } = useMarketing();
  const a = t.careers.application;
  const d = t.careers.detail;

  const [step, setStep] = useState<Step>("application");
  const [values, setValues] = useState<JobApplicationFormValues>(emptyValues);
  const [touched, setTouched] = useState<Partial<Record<keyof JobApplicationFormValues, boolean>>>({});
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof JobApplicationFormValues | "resume", string>>>({});
  const [professionalExperience, setProfessionalExperience] =
    useState<ProfessionalExperienceFormValues>(emptyProfessionalExperience);
  const [resume, setResume] = useState<ResumeUploadState>({ status: "empty", progress: 0, file: null });
  const [submitting, setSubmitting] = useState(false);
  const [bannerError, setBannerError] = useState<string | null>(null);
  const [bannerCode, setBannerCode] = useState<string | null>(null);

  const open = isJobOpenForApplications(job);

  useEffect(() => {
    const draft = loadApplicationDraft(job.slug);
    if (hasMeaningfulDraftValues(draft?.values)) {
      setValues({ ...emptyValues, ...draft!.values });
      if (draft?.professionalExperience) {
        setProfessionalExperience({ ...emptyProfessionalExperience, ...draft.professionalExperience });
      }
      if (draft?.resume) {
        setResume({ status: "valid", progress: 100, file: draft.resume });
      }
      return;
    }

    if (job.demoContent) {
      setValues({ ...emptyValues, ...presentationalApplicationValues });
      setProfessionalExperience({ ...emptyProfessionalExperience, ...presentationalProfessionalExperience });
      setResume({ status: "valid", progress: 100, file: presentationalResumeFile });
    }
  }, [job.slug, job.demoContent]);

  useEffect(() => {
    saveApplicationDraft(job.slug, {
      values,
      professionalExperience,
      resume: resume.file,
      updatedAt: Date.now(),
    });
  }, [job.slug, values, professionalExperience, resume.file]);

  const resumeCopy = useMemo(
    () => ({
      label: a.resumeLabel,
      emptyTitle: a.resumeEmptyTitle,
      securityComplete: a.resumeSecurityComplete,
      emptyHint: a.resumeEmptyHint,
      browse: a.resumeBrowse,
      dragHint: a.resumeDragHint,
      uploading: a.resumeUploading,
      scanning: a.resumeScanning,
      validLabel: a.resumeValid,
      remove: a.resumeRemove,
      replace: a.resumeReplace,
      retry: a.resumeRetry,
      securityNote: a.resumeSecurityNote,
      formats: a.resumeFormats,
      errors: a.resumeErrors,
    }),
    [a],
  );

  function setField<K extends keyof JobApplicationFormValues>(key: K, value: JobApplicationFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function validateStepApplication() {
    const errors = validateJobApplication(values);
    if (resume.status !== "valid" || !resume.file) {
      errors.resume = errors.resume ?? "Upload a valid resume to continue.";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function goToReview(e?: FormEvent) {
    e?.preventDefault();
    setBannerError(null);
    setBannerCode(null);
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      location: true,
      linkedInUrl: true,
      portfolioUrl: true,
      privacyConsent: true,
      vacancyTermsAck: true,
    });
    if (!validateStepApplication()) return;
    setStep("review");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting) return;
    if (!open) {
      setBannerError(a.errorUnavailable);
      setBannerCode("vacancy_unavailable");
      return;
    }
    if (!validateStepApplication()) {
      setStep("application");
      return;
    }

    setSubmitting(true);
    setBannerError(null);
    setBannerCode(null);

    const result = await submitJobApplication({
      jobSlug: job.slug,
      values,
      resume: resume.file,
      resumeValidated: resume.status === "valid",
    });

    setSubmitting(false);

    if (!result.ok) {
      if (result.errorCode === "duplicate") {
        setBannerError(a.errorDuplicate);
        setBannerCode("duplicate");
      } else if (result.errorCode === "vacancy_unavailable") {
        setBannerError(a.errorUnavailable);
        setBannerCode("vacancy_unavailable");
      } else if (result.errorCode === "validation") {
        setFieldErrors(result.fieldErrors ?? {});
        setStep("application");
        setBannerError(result.message);
      } else {
        setBannerError(a.errorGeneric);
      }
      return;
    }

    router.push(careerApplicationConfirmationPath(job.slug));
  }

  const errorSummary = Object.entries(fieldErrors);

  if (!open) {
    return (
      <CompanyCanvas>
        <section className="relative z-[2] border-b border-brand-navy/[0.1]">
          <div className="site-shell py-14 sm:py-16 lg:py-20">
            <div className="careers-safe-zone max-w-xl">
              <Link href={careerDetailPath(job.slug)} className="text-[13px] font-semibold text-brand-navy hover:text-brand-orange">
                {a.backToRole}
              </Link>
              <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">{a.pageEyebrow}</p>
              <h1 className="display-title mt-4 text-[2rem] leading-[1.08] sm:text-[2.4rem]">{a.unavailableTitle}</h1>
              <p className="mt-5 text-[16px] leading-[1.75] text-brand-muted">{a.unavailableBody}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={ROUTES.careers}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-navy px-6 text-[13px] font-semibold text-white hover:bg-[#0c2d4d]"
                >
                  {a.viewOpenRoles}
                </Link>
                <Link
                  href={ROUTES.contact}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-brand-navy/20 px-6 text-[13px] font-semibold text-brand-navy hover:border-brand-orange"
                >
                  {a.contactUs}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <CompanyNav current="careers" />
      </CompanyCanvas>
    );
  }

  return (
    <CompanyCanvas>
      <section className="relative z-[2] border-b border-brand-navy/[0.1]">
        <div className="site-shell py-10 sm:py-12 lg:py-16">
          <div className="careers-application-shell mx-auto w-full min-w-0 px-0">
            <Link
              href={careerDetailPath(job.slug)}
              className="text-[14px] font-semibold text-brand-navy hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
            >
              {a.backToRole}
            </Link>

            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">{a.pageEyebrow}</p>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-brand-muted">{a.pageIntro}</p>

            <div className="mt-10 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,17.5rem)_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[minmax(0,19rem)_minmax(0,1fr)]">
              <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-xl border border-brand-navy/10 bg-white px-5 py-6 shadow-[0_1px_3px_rgba(8,35,63,0.05)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">{a.applyingFor}</p>
                  <h1 className="display-title mt-3 text-[1.45rem] leading-[1.12] text-brand-navy sm:text-[1.65rem]">
                    {job.title}
                  </h1>
                  {job.location ? (
                    <p className="mt-3 text-[14px] leading-relaxed text-brand-muted">
                      <span className="font-semibold text-brand-navy">{d.location}</span>
                      <br />
                      {job.location}
                    </p>
                  ) : null}
                </div>
                <div className="mt-6 hidden rounded-xl border border-brand-navy/10 bg-[#FAFBFD] px-5 py-5 lg:block">
                  <JobApplicationProgress
                    step={step}
                    copy={{ aria: a.progressAria, a: a.stepApplication, b: a.stepReview }}
                  />
                </div>
              </aside>

              <div className="min-w-0">
                <div className="mb-6 lg:hidden">
                  <JobApplicationProgress
                    step={step}
                    copy={{ aria: a.progressAria, a: a.stepApplication, b: a.stepReview }}
                  />
                </div>

            {bannerError ? (
              <div className="mt-6">
                <AuthAlert tone={bannerCode === "duplicate" ? "info" : "error"}>{bannerError}</AuthAlert>
                {bannerCode === "duplicate" ? (
                  <p className="mt-3 text-[13px] text-brand-muted">
                    <Link href={ROUTES.contact} className="font-semibold text-brand-blue hover:underline">
                      {a.contactUs}
                    </Link>
                  </p>
                ) : null}
              </div>
            ) : null}

            {errorSummary.length > 0 && step === "application" ? (
              <div className="mt-6 rounded-lg border border-red-200 bg-red-50/80 px-4 py-3" role="alert">
                <p className="text-[13px] font-semibold text-red-800">{a.errorSummaryTitle}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[12px] text-red-700">
                  {errorSummary.map(([key, msg]) => (
                    <li key={key}>{msg}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {step === "application" ? (
              <form className="careers-application-form mt-2 flex flex-col gap-6 sm:gap-7" onSubmit={goToReview} noValidate>
                <JobApplicationSection
                  id="apply-section-candidate"
                  title={a.sectionCandidate}
                  description={a.sectionCandidateIntro}
                >
                  <ApplicationFormField id="apply-name" label={a.fieldFullName} required error={fieldErrors.fullName}>
                    <input
                      id="apply-name"
                      className={careerApplyInputClass({ error: fieldErrors.fullName, touched: touched.fullName })}
                      value={values.fullName}
                      autoComplete="name"
                      onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
                      onChange={(e) => setField("fullName", e.target.value)}
                      {...authInputAria({ id: "apply-name", error: fieldErrors.fullName, touched: touched.fullName })}
                    />
                  </ApplicationFormField>
                  <ApplicationFormField id="apply-email" label={a.fieldEmail} required error={fieldErrors.email}>
                    <input
                      id="apply-email"
                      type="email"
                      className={careerApplyInputClass({ error: fieldErrors.email, touched: touched.email })}
                      value={values.email}
                      autoComplete="email"
                      onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                      onChange={(e) => setField("email", e.target.value)}
                      {...authInputAria({ id: "apply-email", error: fieldErrors.email, touched: touched.email })}
                    />
                  </ApplicationFormField>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <ApplicationFormField id="apply-phone" label={a.fieldPhone} required error={fieldErrors.phone}>
                      <input
                        id="apply-phone"
                        type="tel"
                        className={careerApplyInputClass({ error: fieldErrors.phone, touched: touched.phone })}
                        value={values.phone}
                        autoComplete="tel"
                        onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                        onChange={(e) => setField("phone", e.target.value)}
                        {...authInputAria({ id: "apply-phone", error: fieldErrors.phone, touched: touched.phone })}
                      />
                    </ApplicationFormField>
                    <ApplicationFormField id="apply-location" label={a.fieldLocation} required error={fieldErrors.location}>
                      <input
                        id="apply-location"
                        className={careerApplyInputClass({ error: fieldErrors.location, touched: touched.location })}
                        value={values.location}
                        autoComplete="address-level2"
                        onBlur={() => setTouched((t) => ({ ...t, location: true }))}
                        onChange={(e) => setField("location", e.target.value)}
                        {...authInputAria({
                          id: "apply-location",
                          error: fieldErrors.location,
                          touched: touched.location,
                        })}
                      />
                    </ApplicationFormField>
                  </div>
                </JobApplicationSection>

                <JobApplicationSection
                  id="apply-section-profile"
                  title={a.sectionProfile}
                  description={a.sectionProfileIntro}
                >
                  <ApplicationFormField id="apply-linkedin" label={a.fieldLinkedIn} error={fieldErrors.linkedInUrl}>
                    <input
                      id="apply-linkedin"
                      type="url"
                      className={careerApplyInputClass({ error: fieldErrors.linkedInUrl, touched: touched.linkedInUrl })}
                      value={values.linkedInUrl}
                      onBlur={() => setTouched((t) => ({ ...t, linkedInUrl: true }))}
                      onChange={(e) => setField("linkedInUrl", e.target.value)}
                      {...authInputAria({
                        id: "apply-linkedin",
                        error: fieldErrors.linkedInUrl,
                        touched: touched.linkedInUrl,
                      })}
                    />
                  </ApplicationFormField>
                  <ApplicationFormField id="apply-portfolio" label={a.fieldPortfolio} error={fieldErrors.portfolioUrl}>
                    <input
                      id="apply-portfolio"
                      type="url"
                      className={careerApplyInputClass({ error: fieldErrors.portfolioUrl, touched: touched.portfolioUrl })}
                      value={values.portfolioUrl}
                      onBlur={() => setTouched((t) => ({ ...t, portfolioUrl: true }))}
                      onChange={(e) => setField("portfolioUrl", e.target.value)}
                      {...authInputAria({
                        id: "apply-portfolio",
                        error: fieldErrors.portfolioUrl,
                        touched: touched.portfolioUrl,
                      })}
                    />
                  </ApplicationFormField>
                </JobApplicationSection>

                <ProfessionalExperienceSection
                  sectionId="apply-section-experience"
                  title={a.sectionExperience}
                  copy={{
                    intro: a.sectionExperienceIntro,
                    currentRole: a.fieldCurrentRole,
                    currentCompany: a.fieldCurrentCompany,
                    yearsOfExperience: a.fieldYearsExperience,
                    previousRole: a.fieldPreviousRole,
                    previousCompany: a.fieldPreviousCompany,
                  }}
                  values={professionalExperience}
                  onChange={setProfessionalExperience}
                />

                {careersApplicationConfig.coverLetterInput === "textarea" ? (
                  <JobApplicationSection
                    id="apply-section-cover"
                    title={a.sectionCoverLetter}
                    description={a.sectionCoverLetterIntro}
                  >
                    <div className="careers-application-field">
                      <TextAreaField
                        id="apply-cover"
                        label={a.fieldCoverLetter}
                        hint={a.coverLetterHint}
                        value={values.coverLetter}
                        onChange={(v) => setField("coverLetter", v)}
                        rows={7}
                        inputClassName={careerApplyTextareaClass()}
                      />
                    </div>
                  </JobApplicationSection>
                ) : null}

                <JobApplicationSection id="apply-section-resume" title={a.sectionResume}>
                  <ResumeUploadField
                    copy={resumeCopy}
                    state={resume}
                    onStateChange={setResume}
                    error={fieldErrors.resume}
                    disabled={submitting}
                  />
                </JobApplicationSection>

                <JobApplicationSection id="apply-section-consent" title={a.sectionConsent}>
                  <label className="careers-application-consent flex cursor-pointer items-start gap-3 text-brand-navy">
                    <input
                      type="checkbox"
                      className="rounded border-brand-line text-brand-orange focus:ring-brand-orange"
                      checked={values.privacyConsent}
                      onChange={(e) => setField("privacyConsent", e.target.checked)}
                    />
                    <span>
                      {a.privacyConsentLabel}{" "}
                      <Link href={ROUTES.legalPrivacy} className="font-semibold text-brand-blue hover:underline">
                        {a.privacyLinkLabel}
                      </Link>
                    </span>
                  </label>
                  {fieldErrors.privacyConsent ? (
                    <p className="text-[13px] font-medium text-red-600" role="alert">
                      {fieldErrors.privacyConsent}
                    </p>
                  ) : null}
                  <label className="careers-application-consent flex cursor-pointer items-start gap-3 text-brand-navy">
                    <input
                      type="checkbox"
                      className="rounded border-brand-line text-brand-orange focus:ring-brand-orange"
                      checked={values.vacancyTermsAck}
                      onChange={(e) => setField("vacancyTermsAck", e.target.checked)}
                    />
                    <span>{a.vacancyTermsLabel}</span>
                  </label>
                  {fieldErrors.vacancyTermsAck ? (
                    <p className="text-[13px] font-medium text-red-600" role="alert">
                      {fieldErrors.vacancyTermsAck}
                    </p>
                  ) : null}
                </JobApplicationSection>

                <div className="flex flex-col gap-4 rounded-xl border border-brand-navy/10 bg-[#FAFBFD] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                  <Link href={careerDetailPath(job.slug)} className="text-[14px] font-semibold text-brand-muted hover:text-brand-navy">
                    {a.cancel}
                  </Link>
                  <button
                    type="submit"
                    className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-brand-navy px-10 text-[14px] font-semibold text-white transition hover:bg-[#0c2d4d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 sm:w-auto"
                  >
                    {a.continueToReview}
                  </button>
                </div>
              </form>
            ) : (
              <form className="careers-application-form mt-2 flex flex-col gap-6" onSubmit={onSubmit} noValidate>
                <div className="rounded-xl border border-brand-navy/10 bg-white px-5 py-6 sm:px-7">
                  <h2 className="display-title text-[1.35rem] leading-snug sm:text-[1.55rem]">{a.reviewTitle}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-brand-muted">{a.reviewIntro}</p>
                </div>

                <ReviewBlock title={a.reviewVacancy} onEdit={() => setStep("application")} editLabel={a.editSection}>
                  <p className="font-medium text-brand-navy">{job.title}</p>
                  {job.location ? <p className="mt-1 text-[14px] text-brand-muted">{job.location}</p> : null}
                </ReviewBlock>

                <ReviewBlock title={a.reviewCandidate} onEdit={() => setStep("application")} editLabel={a.editSection}>
                  <p>{values.fullName}</p>
                  <p className="mt-1 text-[14px] text-brand-muted">{values.email}</p>
                  <p className="mt-1 text-[14px] text-brand-muted">{values.phone}</p>
                  <p className="mt-1 text-[14px] text-brand-muted">{values.location}</p>
                </ReviewBlock>

                <ReviewBlock title={a.reviewProfile} onEdit={() => setStep("application")} editLabel={a.editSection}>
                  <p className="text-[14px] text-brand-muted">
                    {a.fieldLinkedIn}: {values.linkedInUrl.trim() || a.reviewNotProvided}
                  </p>
                  <p className="mt-1 text-[14px] text-brand-muted">
                    {a.fieldPortfolio}: {values.portfolioUrl.trim() || a.reviewNotProvided}
                  </p>
                </ReviewBlock>

                {careersApplicationConfig.enableProfessionalExperienceFields ? (
                  <ReviewBlock title={a.reviewExperience} onEdit={() => setStep("application")} editLabel={a.editSection}>
                    <p className="text-[14px] text-brand-navy">
                      {professionalExperience.currentRole}
                      {professionalExperience.currentCompany
                        ? ` · ${professionalExperience.currentCompany}`
                        : ""}
                    </p>
                    {professionalExperience.yearsOfExperience ? (
                      <p className="mt-1 text-[14px] text-brand-muted">{professionalExperience.yearsOfExperience}</p>
                    ) : null}
                    {professionalExperience.previousEntries[0]?.role ? (
                      <p className="mt-2 text-[14px] text-brand-muted">
                        {professionalExperience.previousEntries[0].role}
                        {professionalExperience.previousEntries[0].company
                          ? ` · ${professionalExperience.previousEntries[0].company}`
                          : ""}
                      </p>
                    ) : null}
                  </ReviewBlock>
                ) : null}

                <ReviewBlock title={a.reviewCoverLetter} onEdit={() => setStep("application")} editLabel={a.editSection}>
                  <p className="whitespace-pre-wrap text-[14px] leading-relaxed text-brand-navy/90">
                    {values.coverLetter.trim() || a.reviewNotProvided}
                  </p>
                </ReviewBlock>

                <ReviewBlock title={a.reviewResume} onEdit={() => setStep("application")} editLabel={a.editSection}>
                  <p className="text-[14px] font-medium text-brand-navy">{resume.file?.name ?? a.reviewNotProvided}</p>
                </ReviewBlock>

                <ReviewBlock title={a.reviewConsent} onEdit={() => setStep("application")} editLabel={a.editSection}>
                  <ul className="list-disc space-y-1 pl-5 text-[14px] text-brand-muted">
                    <li>{values.privacyConsent ? a.privacyConsentLabel : a.reviewNotProvided}</li>
                    <li>{values.vacancyTermsAck ? a.vacancyTermsLabel : a.reviewNotProvided}</li>
                  </ul>
                </ReviewBlock>

                <div className="flex flex-col gap-4 rounded-xl border border-brand-navy/10 bg-[#FAFBFD] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                  <button
                    type="button"
                    className="text-[14px] font-semibold text-brand-muted hover:text-brand-navy"
                    disabled={submitting}
                    onClick={() => setStep("application")}
                  >
                    {a.editSection}
                  </button>
                  <button
                    type="submit"
                    className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-brand-navy px-10 text-[14px] font-semibold text-white transition hover:bg-[#0c2d4d] disabled:opacity-70 sm:w-auto"
                    disabled={submitting || resume.status !== "valid"}
                    aria-busy={submitting}
                  >
                    {submitting ? a.submitting : a.submitApplication}
                  </button>
                </div>
              </form>
            )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CompanyNav current="careers" />
    </CompanyCanvas>
  );
}

function ReviewBlock({
  title,
  children,
  onEdit,
  editLabel,
}: {
  title: string;
  children: ReactNode;
  onEdit: () => void;
  editLabel: string;
}) {
  return (
    <section className="rounded-xl border border-brand-navy/10 bg-white px-5 py-5 shadow-[0_1px_3px_rgba(8,35,63,0.05)] sm:px-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-orange">{title}</h3>
        <button
          type="button"
          className="shrink-0 text-[12px] font-semibold text-brand-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
          onClick={onEdit}
        >
          {editLabel}
        </button>
      </div>
      <div className="mt-3">{children}</div>
    </section>
  );
}
