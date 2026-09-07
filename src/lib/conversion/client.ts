/**
 * ConversionClient — local UI journey for Book Demo & Request Quote.
 * No CRM/API is connected in this marketing repository.
 */

import type { ConversionMode, ConversionResult, DemoRequestInput, QuoteRequestInput } from "./types";
import { validateDemoRequest, validateQuoteRequest } from "./validation";

const delay = (ms = 700) => new Promise((r) => setTimeout(r, ms));

export const CONVERSION_MODE: ConversionMode = "preview";

export const ConversionClient = {
  mode: CONVERSION_MODE,

  async submitDemo(input: DemoRequestInput): Promise<ConversionResult<{ referenceId: string }>> {
    const validated = validateDemoRequest(input);
    if (!validated.ok) {
      await delay(300);
      return validated;
    }
    await delay();
    return {
      ok: true,
      data: { referenceId: `demo-local-${Date.now()}` },
      message: "Demo request received",
    };
  },

  async submitQuote(input: QuoteRequestInput): Promise<ConversionResult<{ referenceId: string }>> {
    const validated = validateQuoteRequest(input);
    if (!validated.ok) {
      await delay(300);
      return validated;
    }
    await delay();
    return {
      ok: true,
      data: { referenceId: `quote-local-${Date.now()}` },
      message: "Quote request received",
    };
  },
};
