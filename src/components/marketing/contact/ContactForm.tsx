"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { FormField, authInputAria, authInputClass } from "@/components/auth/FormField";
import { TextAreaField } from "@/components/conversion/TextAreaField";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { ConversionClient } from "@/lib/conversion/client";
import { setContactSuccess } from "@/lib/conversion/contactSession";
import type { ContactInquiryType } from "@/lib/conversion/types";
import { validateContactInquiry } from "@/lib/conversion/validation";
import { ROUTES } from "@/lib/marketing/navigation";

type FieldKey = "name" | "email" | "company" | "phone" | "inquiryType" | "message";

const INQUIRY_VALUES: ContactInquiryType[] = ["general", "product", "sales", "other"];

export function ContactForm() {
  const router = useRouter();
  const { t } = useMarketing();
  const c = t.contact;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState<ContactInquiryType | "">("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});

  function touch(field: FieldKey) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field);
  }

  function validateField(field: FieldKey) {
    const result = validateContactInquiry({
      name,
      email,
      company: company || undefined,
      phone: phone || undefined,
      inquiryType,
      message,
    });
    if (!result.ok && result.fieldErrors?.[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: result.fieldErrors![field] }));
    } else {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function fieldValid(field: FieldKey): boolean {
    if (!touched[field]) return false;
    const result = validateContactInquiry({
      name,
      email,
      company: company || undefined,
      phone: phone || undefined,
      inquiryType,
      message,
    });
    if (result.ok) return true;
    return !result.fieldErrors?.[field];
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (loading) return;

    setTouched({
      name: true,
      email: true,
      inquiryType: true,
      message: true,
    });
    setError(null);

    const payload = {
      name,
      email,
      company: company || undefined,
      phone: phone || undefined,
      inquiryType,
      message,
    };

    const clientValidation = validateContactInquiry(payload);
    if (!clientValidation.ok) {
      setFieldErrors(clientValidation.fieldErrors ?? {});
      setError(clientValidation.error);
      return;
    }

    setFieldErrors({});
    setLoading(true);
    const result = await ConversionClient.submitContact(payload);
    setLoading(false);

    if (!result.ok) {
      setError(result.error || c.submitError);
      setFieldErrors(result.fieldErrors ?? {});
      return;
    }

    setContactSuccess({
      email: payload.email,
      company: payload.company,
      inquiryType: payload.inquiryType as Exclude<typeof payload.inquiryType, "">,
    });
    router.replace(ROUTES.contactSuccess);
  }

  return (
    <div className="rounded-2xl border border-brand-line bg-white p-6 shadow-[0_4px_24px_rgba(6,21,37,0.07)] sm:p-8 lg:p-9">
      <div className="border-b border-brand-line/60 pb-5 sm:pb-6">
        <h2 className="font-display text-xl font-bold tracking-tight text-brand-navy sm:text-2xl">{c.formTitle}</h2>
        <p className="mt-2 max-w-md text-[14px] leading-relaxed text-brand-muted">{c.formSubtitle}</p>
      </div>

      <form onSubmit={onSubmit} className="mt-6 space-y-5 sm:mt-7 sm:space-y-6" noValidate>
        {error ? <AuthAlert>{error}</AuthAlert> : null}

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            id="contact-name"
            label={c.fields.name}
            required
            error={fieldErrors.name}
            valid={fieldValid("name")}
            touched={touched.name}
          >
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => touch("name")}
              disabled={loading}
              className={authInputClass({ error: fieldErrors.name, valid: fieldValid("name"), touched: touched.name })}
              {...authInputAria({ id: "contact-name", error: fieldErrors.name, valid: fieldValid("name"), touched: touched.name })}
            />
          </FormField>

          <FormField
            id="contact-email"
            label={c.fields.email}
            required
            error={fieldErrors.email}
            valid={fieldValid("email")}
            touched={touched.email}
          >
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => touch("email")}
              disabled={loading}
              className={authInputClass({ error: fieldErrors.email, valid: fieldValid("email"), touched: touched.email })}
              {...authInputAria({ id: "contact-email", error: fieldErrors.email, valid: fieldValid("email"), touched: touched.email })}
            />
          </FormField>

          <FormField id="contact-company" label={c.fields.company} hint={c.fields.optional}>
            <input
              id="contact-company"
              type="text"
              autoComplete="organization"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              disabled={loading}
              className={authInputClass()}
            />
          </FormField>

          <FormField id="contact-phone" label={c.fields.phone} hint={c.fields.phoneHint}>
            <input
              id="contact-phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading}
              className={authInputClass()}
            />
          </FormField>
        </div>

        <FormField
          id="contact-inquiry-type"
          label={c.fields.inquiryType}
          required
          error={fieldErrors.inquiryType}
          valid={fieldValid("inquiryType")}
          touched={touched.inquiryType}
        >
          <select
            id="contact-inquiry-type"
            required
            value={inquiryType}
            onChange={(e) => setInquiryType(e.target.value as ContactInquiryType | "")}
            onBlur={() => touch("inquiryType")}
            disabled={loading}
            className={authInputClass({
              error: fieldErrors.inquiryType,
              valid: fieldValid("inquiryType"),
              touched: touched.inquiryType,
            })}
            {...authInputAria({
              id: "contact-inquiry-type",
              error: fieldErrors.inquiryType,
              valid: fieldValid("inquiryType"),
              touched: touched.inquiryType,
            })}
          >
            <option value="">{c.fields.selectInquiry}</option>
            {INQUIRY_VALUES.map((value) => (
              <option key={value} value={value}>
                {c.inquiryTypes[value]}
              </option>
            ))}
          </select>
        </FormField>

        {inquiryType === "sales" ? (
          <div
            className="rounded-lg border border-brand-line/70 bg-[#FAFBFD] px-4 py-3 text-[13px] leading-relaxed text-brand-muted"
            role="note"
          >
            <p>
              {c.salesDemoPrompt}{" "}
              <Link href={ROUTES.demo} className="font-semibold text-brand-blue hover:text-brand-orange hover:underline">
                {c.bookDemo}
              </Link>
            </p>
            <p className="mt-2">
              {c.salesQuotePrompt}{" "}
              <Link
                href={ROUTES.requestQuote}
                className="font-semibold text-brand-blue hover:text-brand-orange hover:underline"
              >
                {c.requestQuote}
              </Link>
            </p>
          </div>
        ) : null}

        <TextAreaField
          id="contact-message"
          label={c.fields.message}
          required
          value={message}
          onChange={setMessage}
          onBlur={() => touch("message")}
          error={fieldErrors.message}
          hint={c.fields.messageHint}
          valid={fieldValid("message")}
          touched={touched.message}
          disabled={loading}
          rows={5}
        />

        <div className="space-y-4 border-t border-brand-line/50 pt-6">
          <p className="text-[12px] leading-relaxed text-brand-muted">
            {c.privacyNoticeBefore}{" "}
            <Link href={ROUTES.legalPrivacy} className="font-semibold text-brand-blue hover:underline">
              {c.privacyNoticeLink}
            </Link>
            {c.privacyNoticeAfter}
          </p>
          <AuthButton
            type="submit"
            loading={loading}
            loadingLabel={c.submitting}
            disabled={loading}
            className="w-full sm:w-auto sm:min-w-[180px]"
          >
            {c.submit}
          </AuthButton>
        </div>
      </form>
    </div>
  );
}
