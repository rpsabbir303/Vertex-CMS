import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/marketing/navigation";

/** Canonical demo route is /book-demo — keep /demo as alias. */
export default function DemoAliasPage() {
  redirect(ROUTES.demo);
}
