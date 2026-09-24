import { authInputClass, type AuthInputOptions } from "@/components/auth/FormField";

export function careerApplyInputClass(options?: AuthInputOptions): string {
  return `${authInputClass(options)} careers-application-input`;
}

export function careerApplyTextareaClass(options?: AuthInputOptions): string {
  return `${careerApplyInputClass(options)} careers-application-textarea min-h-[152px] resize-y`;
}
