import { redirect } from "next/navigation";

import { ROUTES } from "@/lib/marketing/navigation";

/** Alias — canonical Help Center is `/resources/help`. */
export default function HelpCenterAliasRedirect() {
  redirect(ROUTES.resourcesHelp);
}
