import { redirect } from "next/navigation";

import { ROUTES } from "@/lib/marketing/navigation";

type PageProps = { params: { slug: string } };

/** Alias — canonical documentation routes live under `/resources/help/[slug]`. */
export default function HelpCenterDocAliasRedirect({ params }: PageProps) {
  redirect(ROUTES.resourcesHelpArticle(params.slug));
}
