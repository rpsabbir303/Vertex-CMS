import type { LegalSection } from "../content";
import { demoSection } from "./shared";

export const PRIVACY_DEMO_SECTIONS: LegalSection[] = [
  demoSection("overview", "1. Overview", [
    "This sample Privacy Policy demonstrates how privacy information may be organized on the Vertex CMS website.",
    "The text is for visual design review only and does not describe actual data practices unless otherwise documented in approved materials.",
  ]),
  demoSection("information-collected", "2. Information We Collect", [
    "Sample privacy documents often group collected information into categories. Final copy will reflect actual product and website practices.",
  ]),
  demoSection("information-you-provide", "3. Information You Provide", [
    "You may provide information when creating an account, requesting information, or communicating with us in this illustrative framework.",
  ], {
    lists: [{ ordered: false, items: [
      "Contact details such as name and work email in demo examples.",
      "Company or organization information submitted during signup flows.",
      "Support requests and feedback you choose to send.",
      "Billing-related information where a purchase flow is involved in final product terms.",
    ]}],
  }),
  demoSection("information-automatic", "4. Information Collected Automatically", [
    "Websites and SaaS platforms may automatically collect technical information to operate and improve the service.",
    "This demo section describes categories only. Specific technologies will be listed in approved final copy and the Cookie Policy where applicable.",
  ], {
    subsections: [
      { title: "4.1 Device and usage information", body: [
        "Sample categories may include browser type, pages viewed, and general interaction data in aggregated form.",
      ]},
      { title: "4.2 Log data", body: [
        "Sample log data may include timestamps, diagnostic events, and security-related records in this illustrative example.",
      ]},
    ],
  }),
  demoSection("how-used", "5. How Information Is Used", [
    "Sample privacy policies often describe purposes such as providing the service, securing accounts, and improving product experience.",
  ], {
    lists: [{ ordered: true, items: [
      "Operating, maintaining, and improving the platform in this demo framework.",
      "Creating and administering customer accounts.",
      "Responding to inquiries and support requests.",
      "Analyzing aggregated usage trends where permitted in final terms.",
      "Protecting against fraud, abuse, and security incidents.",
    ]}],
  }),
  demoSection("service-providers", "6. Service Providers", [
    "Sample language may explain that vendors can assist with hosting, support, analytics, or communications.",
    "Final copy will identify categories of providers and contractual safeguards where required. This demo does not name specific vendors.",
  ]),
  demoSection("account-product-data", "7. Account and Product Data", [
    "Customer workspace data may include project information, documents, and operational records entered by users.",
    "This demo section illustrates how product data may be distinguished from marketing website data in a privacy document.",
  ]),
  demoSection("communications", "8. Communications", [
    "We may send service-related communications in this sample framework, such as account notices or requested product updates.",
    "Marketing communication preferences will be described in approved final copy where applicable.",
  ]),
  demoSection("data-security", "9. Data Security", [
    "Sample security language describes organizational and technical measures in general terms.",
    "This demo does not assert specific certifications, audit results, or security guarantees.",
  ]),
  demoSection("data-retention", "10. Data Retention", [
    "Retention practices depend on the nature of the data, contractual requirements, and operational needs.",
    "Specific retention periods will be provided in counsel-approved copy. This demo intentionally avoids stating fixed timelines.",
  ]),
  demoSection("your-choices", "11. Your Choices", [
    "Depending on the service and region, you may have choices about account information, communications, and certain cookies.",
  ], {
    lists: [{ ordered: false, items: [
      "Update account profile information where the product supports self-service changes.",
      "Manage cookie preferences through the website cookie controls.",
      "Contact us using the method provided in final approved copy.",
    ]}],
  }),
  demoSection("privacy-rights", "12. Privacy Rights", [
    "Sample privacy rights sections describe how individuals may request access, correction, or deletion in general terms.",
    "Final rights and procedures will be defined according to applicable law and counsel guidance.",
  ]),
  demoSection("children", "13. Children's Privacy", [
    "The Vertex CMS business service is intended for organizations and professionals. This sample section states that the service is not directed to children in a generic way.",
  ]),
  demoSection("international", "14. International Considerations", [
    "Customers may access services from multiple regions. Final privacy copy will address cross-border processing where applicable.",
    "This demo does not specify transfer mechanisms, regions, or regulatory representations.",
  ]),
  demoSection("changes", "15. Changes to This Policy", [
    "We may update this sample policy structure over time. Final change notice practices will be defined in approved legal copy.",
  ]),
  demoSection("contact", "16. Contact", [
    "Contact instructions for privacy inquiries will be included in approved final copy.",
    "This demo section omits specific email addresses, legal entities, and mailing addresses.",
  ]),
];
