import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/marketing/navigation";

/** Legacy path → canonical /dpa */
export default function LegacyLegalDpaPage() {
  redirect(ROUTES.legalDpa);
}
