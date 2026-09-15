export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function validatePassword(password: string): string | null {
  if (password.length < 8) return "Password must be at least 8 characters.";
  if (!/[A-Za-z]/.test(password)) return "Password must include a letter.";
  if (!/[0-9]/.test(password)) return "Password must include a number.";
  return null;
}

export function validateRequired(value: string, label: string): string | null {
  if (!value.trim()) return `${label} is required.`;
  return null;
}

export function validateTotpCode(code: string): string | null {
  if (!/^\d{6}$/.test(code.trim())) return "Enter the 6-digit verification code.";
  return null;
}

export function validateTermsAccepted(accepted: boolean): string | null {
  if (!accepted) return "Accept the Terms of Service and Privacy Policy to continue.";
  return null;
}

export const DUPLICATE_EMAIL_MESSAGE = "This email is already associated with an account.";

export function isDuplicateEmail(email: string, isRegistered: (email: string) => boolean): boolean {
  const emailLower = email.trim().toLowerCase();
  return emailLower === "exists@company.com" || emailLower.startsWith("taken@") || isRegistered(emailLower);
}

export type SignUpFieldInput = {
  companyName: string;
  name: string;
  email: string;
  password: string;
  termsAccepted?: boolean;
  botCheckAcknowledged?: boolean;
};

export type SignUpValidationOptions = {
  checkDuplicate?: (email: string) => boolean;
  /** When set, only return errors for these field keys (used for blur validation). */
  fields?: string[];
  /** Include terms + captcha checks (defaults true for full-form submit). */
  includeAcknowledgements?: boolean;
};

/** Shared signup validation — used by client forms and AuthClient.signUp. */
export function validateSignUpFields(
  input: SignUpFieldInput,
  options?: SignUpValidationOptions
): Record<string, string> {
  const fieldErrors: Record<string, string> = {};
  const includeAck = options?.includeAcknowledgements !== false;

  const companyErr = validateRequired(input.companyName, "Company name");
  const nameErr = validateRequired(input.name, "Name");
  if (companyErr) fieldErrors.companyName = companyErr;
  if (nameErr) fieldErrors.name = nameErr;

  if (!input.email.trim()) {
    fieldErrors.email = "Work email is required.";
  } else if (!isValidEmail(input.email)) {
    fieldErrors.email = "Please enter a valid work email.";
  } else if (options?.checkDuplicate && isDuplicateEmail(input.email, options.checkDuplicate)) {
    fieldErrors.email = DUPLICATE_EMAIL_MESSAGE;
  }

  const pwErr = validatePassword(input.password);
  if (pwErr) fieldErrors.password = pwErr;

  if (includeAck) {
    const termsErr = validateTermsAccepted(Boolean(input.termsAccepted));
    if (termsErr) fieldErrors.terms = termsErr;

    if (input.botCheckAcknowledged === false) {
      fieldErrors.captcha = "Complete the bot check to continue.";
    }
  }

  if (options?.fields) {
    return Object.fromEntries(Object.entries(fieldErrors).filter(([key]) => options.fields!.includes(key)));
  }

  return fieldErrors;
}

export type SignInFieldInput = {
  email: string;
  password: string;
};

export function validateSignInFields(input: SignInFieldInput): Record<string, string> {
  const fieldErrors: Record<string, string> = {};
  if (!input.email.trim()) {
    fieldErrors.email = "Work email is required.";
  } else if (!isValidEmail(input.email)) {
    fieldErrors.email = "Enter a valid email address.";
  }
  if (!input.password) fieldErrors.password = "Password is required.";
  return fieldErrors;
}
