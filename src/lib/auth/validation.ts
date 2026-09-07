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
