import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/marketing/navigation";

/** Legacy path → canonical /company/careers */
export default function CareersRedirectPage() {
  redirect(ROUTES.careers);
}
