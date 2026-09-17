export type BillingPaymentInput = {
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvc: string;
  billingName: string;
  billingAddress: string;
};

export function validateBillingPayment(input: BillingPaymentInput): Record<string, string> {
  const errors: Record<string, string> = {};
  const digits = input.cardNumber.replace(/\D/g, "");
  if (digits.length < 13 || digits.length > 19) {
    errors.cardNumber = "Enter a valid card number.";
  }
  const month = Number.parseInt(input.expMonth, 10);
  if (!input.expMonth.trim() || Number.isNaN(month) || month < 1 || month > 12) {
    errors.expMonth = "Enter a valid expiration month (01–12).";
  }
  const year = Number.parseInt(input.expYear, 10);
  if (!input.expYear.trim() || Number.isNaN(year) || input.expYear.replace(/\D/g, "").length < 2) {
    errors.expYear = "Enter a valid expiration year.";
  }
  const cvcDigits = input.cvc.replace(/\D/g, "");
  if (cvcDigits.length < 3 || cvcDigits.length > 4) {
    errors.cvc = "Enter a valid CVC.";
  }
  if (!input.billingName.trim()) {
    errors.billingName = "Enter the name on the card.";
  }
  if (!input.billingAddress.trim()) {
    errors.billingAddress = "Enter a billing address.";
  }
  return errors;
}

/** Preview-only — simulates provider decline without claiming real processing. */
export function isPreviewPaymentDecline(cardNumber: string): boolean {
  const digits = cardNumber.replace(/\D/g, "");
  return digits.endsWith("0002");
}
