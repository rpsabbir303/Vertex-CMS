import type { LegalSection } from "../content";
import { demoSection } from "./shared";

export const DPA_DEMO_SECTIONS: LegalSection[] = [
  demoSection("purpose-scope", "1. Purpose and Scope", [
    "This sample Data Processing Addendum (“DPA”) illustrates contract-style formatting for customer data processing arrangements.",
    "It is demo content for visual review only and is not an executable agreement.",
  ]),
  demoSection("definitions", "2. Definitions", [
    "Sample DPAs often define key terms used throughout the document.",
  ], {
    lists: [{ ordered: false, items: [
      "“Customer” means the organization entering into the main service agreement in this sample framework.",
      "“Personal Data” means information relating to an identifiable individual processed on behalf of the Customer.",
      "“Processing” means any operation performed on Personal Data, such as collection, storage, or deletion in this demo example.",
      "“Services” means the cloud platform services described in the applicable order or agreement.",
    ]}],
  }),
  demoSection("roles", "3. Roles and Responsibilities", [
    "This illustrative section describes a common controller/processor relationship framework without asserting a specific legal classification for all data types.",
    "Final roles and responsibilities will be defined in counsel-approved contractual language.",
  ], {
    subsections: [
      { title: "3.1 Customer responsibilities", body: [
        "Customer determines purposes and means of processing for Customer Content in this sample structure.",
      ]},
      { title: "3.2 Provider responsibilities", body: [
        "Provider processes Personal Data on documented instructions from Customer, subject to final approved terms.",
      ]},
    ],
  }),
  demoSection("processing-instructions", "4. Processing Instructions", [
    "Provider will process Personal Data only in accordance with documented instructions from Customer in this sample framework.",
    "Additional instructions may be communicated through support channels or product configuration where final terms allow.",
  ]),
  demoSection("categories-of-data", "5. Categories of Data", [
    "The categories below are sample placeholders for layout review. They do not describe actual production data inventories.",
  ], {
    tables: [{
      caption: "Sample processing description (demo only)",
      headers: ["Category", "Example data subjects", "Example data types"],
      rows: [
        ["Workforce", "Customer personnel", "Name, work email, role"],
        ["Project operations", "Customer project participants", "Project identifiers, workflow metadata"],
        ["Support", "Authorized administrators", "Support tickets, communication content"],
      ],
    }],
  }),
  demoSection("data-subject-requests", "6. Data Subject Requests", [
    "Sample language may describe how the provider assists the customer in responding to individual rights requests.",
    "Specific procedures, timelines, and allocation of responsibility will appear in approved final copy.",
  ]),
  demoSection("security-measures", "7. Security Measures", [
    "This demo section describes security topics at a high level without claiming specific controls, certifications, or audit outcomes.",
  ], {
    lists: [{ ordered: false, items: [
      "Access management and authentication concepts in sample form.",
      "Logical segregation of customer environments in illustrative language.",
      "Monitoring and incident response processes described generically.",
      "Employee confidentiality expectations in demo copy.",
    ]}],
  }),
  demoSection("confidentiality", "8. Confidentiality", [
    "Personnel authorized to process Personal Data may be subject to confidentiality obligations in this sample framework.",
  ]),
  demoSection("subprocessors", "9. Subprocessors", [
    "Sample DPA language may explain that subprocessors can be engaged to support the Services.",
    "This demo does not list actual subprocessors, geographies, or notification procedures.",
  ]),
  demoSection("security-incidents", "10. Data Breach / Security Incidents", [
    "Illustrative incident language may describe notification concepts in general terms.",
    "Specific breach notification timelines and content requirements will be defined in approved legal copy.",
  ]),
  demoSection("retention-deletion", "11. Data Retention and Deletion", [
    "Sample retention language explains that data may be retained for the subscription term and deleted according to final contractual procedures.",
    "This demo does not specify exact retention periods or deletion SLAs.",
  ]),
  demoSection("international-transfers", "12. International Data Transfers", [
    "Where cross-border processing occurs, final terms may describe transfer mechanisms approved by counsel.",
    "This demo section intentionally omits jurisdictions, adequacy decisions, and contractual transfer tools.",
  ]),
  demoSection("audits", "13. Audits and Compliance", [
    "Sample audit language may describe how customers can obtain reasonable information about processing activities.",
    "Specific audit rights, frequency, and scope will be provided in final approved copy.",
  ]),
  demoSection("term-termination", "14. Term and Termination", [
    "This sample section explains that DPA provisions may continue for the term of the main agreement and survive where appropriate.",
  ]),
  demoSection("contact-notices", "15. Contact / Notices", [
    "Notice addresses and escalation contacts for privacy or security matters will be supplied in approved final copy.",
    "This demo section omits specific legal entities and contact details.",
  ]),
];
