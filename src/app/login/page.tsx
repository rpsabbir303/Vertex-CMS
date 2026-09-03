import { redirect } from "next/navigation";

/** Canonical login route — reuses existing sign-in page. */
export default function LoginPage() {
  redirect("/sign-in");
}
