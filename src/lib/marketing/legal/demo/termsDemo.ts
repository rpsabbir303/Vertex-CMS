import type { LegalSection } from "../content";
import { demoSection } from "./shared";

export const TERMS_DEMO_SECTIONS: LegalSection[] = [
  demoSection("introduction", "1. Introduction", [
    "These sample Terms of Service (“Terms”) illustrate how a completed Vertex CMS legal document may be structured on this website.",
    "The sample text below is provided solely for visual design review. It is not official legal copy and should not be relied upon for any legal purpose.",
  ]),
  demoSection("acceptance", "2. Acceptance of Terms", [
    "By accessing or using the sample service described in this demo document, you acknowledge that you have read and understood these illustrative Terms.",
    "If you do not agree with this sample language, you should not treat this page as governing any real relationship with Vertex CMS.",
  ]),
  demoSection("eligibility", "3. Eligibility", [
    "This demo section describes eligibility concepts commonly found in SaaS terms. Actual eligibility requirements will be defined in counsel-approved copy.",
  ], {
    lists: [{ ordered: false, items: [
      "You must have authority to enter into agreements on behalf of your organization, where applicable.",
      "You must use the service in compliance with applicable laws and internal policies.",
      "You must not use the service for unlawful or unauthorized purposes in this sample framework.",
    ]}],
  }),
  demoSection("account-registration", "4. Account Registration", [
    "Sample account registration language may describe how users create credentials, verify email addresses, and maintain account security.",
    "Final terms will specify the actual registration flow supported by the Vertex CMS product.",
  ], {
    subsections: [
      { title: "4.1 Account information", body: [
        "You agree to provide accurate, current information during registration and to keep that information updated in this sample framework.",
      ]},
      { title: "4.2 Account security", body: [
        "You are responsible for safeguarding credentials and for activity occurring under your account in this illustrative section.",
      ]},
    ],
  }),
  demoSection("use-of-service", "5. Use of the Service", [
    "This sample section describes permitted use of a cloud-based construction management platform in general terms.",
    "Specific product capabilities, modules, and limitations will be documented in approved product materials and final legal terms.",
  ]),
  demoSection("customer-responsibilities", "6. Customer Responsibilities", [
    "Customers may be responsible for configuring workspaces, managing user access, and maintaining appropriate internal controls.",
  ], {
    lists: [{ ordered: true, items: [
      "Assigning roles and permissions within your organization.",
      "Ensuring users follow your internal policies when using the platform.",
      "Maintaining backups or exports where your workflow requires them.",
      "Promptly notifying Vertex of unauthorized access, when final terms require it.",
    ]}],
  }),
  demoSection("subscriptions-billing", "7. Subscriptions and Billing", [
    "Sample subscription language may address plan selection, billing cycles, invoicing, and payment methods at a high level.",
    "Actual pricing, billing mechanics, and plan entitlements are not defined by this demo document.",
  ], {
    subsections: [
      { title: "7.1 Plans and fees", body: [
        "Fees, plan tiers, and billing frequency will be described in approved commercial documentation and final terms.",
      ]},
      { title: "7.2 Taxes", body: [
        "Sample tax language may state that fees are exclusive of applicable taxes unless otherwise specified in final copy.",
      ]},
    ],
  }),
  demoSection("free-trials", "8. Free Trials", [
    "This illustrative section describes how a free trial might be presented in final terms, including duration, conversion, and limitations.",
    "Trial availability, length, and feature access are product decisions that will be reflected in approved legal and commercial materials.",
  ]),
  demoSection("intellectual-property", "9. Intellectual Property", [
    "Sample intellectual property language typically distinguishes platform ownership from customer content ownership.",
    "Final terms will define ownership, license grants, and restrictions with counsel-approved precision.",
  ]),
  demoSection("customer-content", "10. Customer Content", [
    "You retain ownership of content you submit to the service in this sample framework, subject to the licenses necessary to operate the platform.",
    "You represent that you have the rights needed to upload and process customer content within your workspace.",
  ]),
  demoSection("acceptable-use", "11. Acceptable Use", [
    "Sample acceptable use provisions describe conduct expectations for users of the platform.",
  ], {
    lists: [{ ordered: false, items: [
      "Do not attempt to disrupt or compromise platform security in this illustrative example.",
      "Do not upload malicious code or unlawful material.",
      "Do not misuse support channels or impersonate others.",
      "Do not reverse engineer the service except where permitted by applicable law in final terms.",
    ]}],
  }),
  demoSection("third-party-services", "12. Third-Party Services", [
    "The platform may integrate with third-party services. This sample section explains that such services may be subject to separate terms.",
    "Final terms will identify integration categories and customer responsibilities where appropriate.",
  ]),
  demoSection("service-availability", "13. Service Availability", [
    "Sample availability language may describe maintenance windows, updates, and service continuity at a general level.",
    "Specific uptime commitments, support tiers, and maintenance policies will appear only in approved legal copy.",
  ]),
  demoSection("disclaimers", "14. Disclaimers", [
    "This demo disclaimer section illustrates how a SaaS provider may describe service limitations in generic terms.",
    "Final disclaimers must be drafted and approved by legal counsel and may differ materially from this sample text.",
  ]),
  demoSection("limitation-of-liability", "15. Limitation of Liability", [
    "Sample limitation language demonstrates how liability caps and exclusions may be structured in a long-form terms document.",
    "This is placeholder-style legal formatting only and does not create any actual liability framework.",
  ]),
  demoSection("termination", "16. Termination", [
    "Illustrative termination language may describe how subscriptions end, how access is disabled, and what happens after termination.",
  ], {
    subsections: [
      { title: "16.1 Termination by customer", body: [
        "Sample text may describe how a customer can cancel a subscription according to final commercial terms.",
      ]},
      { title: "16.2 Termination by provider", body: [
        "Sample text may describe suspension or termination for material breach, subject to counsel-approved procedures.",
      ]},
    ],
  }),
  demoSection("changes", "17. Changes to the Terms", [
    "This sample section explains that terms may be updated over time and how notice may be provided.",
    "Final change-control language will be supplied by legal counsel.",
  ]),
  demoSection("contact", "18. Contact Information", [
    "Contact details for legal or contractual notices will be provided in approved final copy.",
    "This demo section intentionally omits specific addresses, entities, or jurisdictional designations.",
  ]),
];
