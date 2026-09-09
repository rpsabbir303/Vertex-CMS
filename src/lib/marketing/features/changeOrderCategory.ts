/**
 * Change Orders category page — CO module approved capabilities only.
 * Source: CMS Master Feature Register (Change order requests, Change orders, Contract revision impact)
 * + featureAreas howItWorks / outcomes.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

export const changeOrderCategory = {
  id: "change-orders",
  meta: {
    title: "Change Orders | Vertex CMS Features",
    description:
      "Manage change order requests and change orders tied to contracts, with visibility into cost impact and contract revision impact in Vertex CMS.",
    canonical: `${ROUTES.features}/change-orders`,
  },
  hero: {
    eyebrow: "Change Orders",
    headline: "Keep Project Changes Under Control.",
    supporting:
      "Capture change order requests, convert approved changes into change orders, and keep contract revision impact visible alongside project delivery.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Features", href: ROUTES.features },
    preview: "changeOrderRegister" as PreviewKey,
  },
  intro: {
    eyebrow: "Project Changes",
    headline: "Keep Changes Visible From Start to Finish.",
    body: "Project changes can affect work, cost, and coordination. Vertex CMS helps teams capture change order requests, convert approved changes into change orders, and keep contract revision impact connected to the project.",
    preview: "changeOrderFlow" as PreviewKey,
  },
  register: {
    eyebrow: "Change Order Register",
    headline: "See Project Changes at a Glance.",
    body: "Keep change order requests and change orders organized in one place—with visibility into status, contract linkage, and cost impact.",
    cta: { label: "Explore Change Orders", href: "#change-order-register" },
    preview: "changeOrderRegister" as PreviewKey,
  },
  create: {
    eyebrow: "Create Change Order",
    headline: "Capture the Details Behind Every Change.",
    body: "Create a clear project record for each change order request, including description, contract context, and cost impact information.",
    cta: { label: "Create a Change Order", href: "#change-order-create" },
    preview: "changeOrderCreate" as PreviewKey,
  },
  detail: {
    eyebrow: "Change Order Detail",
    headline: "Everything About the Change, in Context.",
    body: "Give project teams a clear view of the change order—description, approval status, contract reference, and cost impact—tied to the project record.",
    callout: "One clear view of the project change.",
    preview: "changeOrderDetail" as PreviewKey,
  },
  status: {
    eyebrow: "Status & Visibility",
    headline: "Know Where Every Change Stands.",
    body: "Clear status information helps project teams understand which change order requests need attention and where each change sits in the workflow—from request through approved change order and contract revision impact.",
    statuses: [
      "Change Order Request",
      "Pending Approval",
      "Approved",
      "Change Order",
    ] as const,
    preview: "changeOrderStatus" as PreviewKey,
  },
  context: {
    headline: "Keep the Change Connected to the Project.",
    body: "Give teams the project and contract context they need when reviewing a change. Keep cost impact and contract revision information connected to the change instead of relying on disconnected spreadsheet logs.",
    preview: "changeOrderContext" as PreviewKey,
  },
  benefits: [
    {
      title: "Clear visibility",
      body: "Understand what changes exist and where they stand—from request through change order.",
    },
    {
      title: "Organized information",
      body: "Keep change order requests, change orders, and contract context structured and accessible.",
    },
    {
      title: "Better coordination",
      body: "Give project teams a shared view of cost impact and contract revision impact.",
    },
  ],
  related: {
    headline: "Change Orders Work Better With Connected Project Information.",
    cards: [
      {
        title: "Project Management",
        body: "Keep project workflows connected from setup through delivery.",
        href: `${ROUTES.features}/project-management`,
      },
      {
        title: "Documents & Drawings",
        body: "Keep drawings, specs, and project files with controlled revisions.",
        href: `${ROUTES.features}/documents-project-information`,
      },
      {
        title: "RFIs",
        body: "Track project questions with status, responses, and context.",
        href: `${ROUTES.features}/rfis`,
      },
      {
        title: "Submittals",
        body: "Manage submittal review, status, and project documentation.",
        href: `${ROUTES.features}/submittals`,
      },
    ],
  },
  finalCta: {
    headline: "Keep Project Changes Moving Forward.",
    supporting:
      "Bring change order requests, change orders, and contract revision impact into a clearer, more connected construction workflow.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Features", href: ROUTES.features },
  },
} as const;
