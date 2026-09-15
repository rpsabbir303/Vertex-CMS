import { redirect } from "next/navigation";

/** Documented alias — canonical signup route is /signup */
export default function SignUpAliasPage() {
  redirect("/signup");
}
