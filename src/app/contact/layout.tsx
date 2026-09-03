import type { ReactNode } from "react";
import { contactMetadata } from "@/lib/website/pageMetadata";

export const metadata = contactMetadata;

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
