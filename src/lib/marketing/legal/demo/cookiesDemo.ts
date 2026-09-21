import type { LegalSection } from "../content";
import { demoSection } from "./shared";

export const COOKIES_DEMO_SECTIONS: LegalSection[] = [
  demoSection("overview", "1. Overview", [
    "This sample Cookie Policy demonstrates how cookie and tracking information may be presented on the VertexBuild website.",
    "It is for visual design review only and does not describe the actual cookies or technologies currently deployed unless documented elsewhere in approved materials.",
  ]),
  demoSection("what-are-cookies", "2. What Cookies Are", [
    "Cookies are small text files stored on your device when you visit a website. Similar technologies, such as local storage, may serve comparable functions in some cases.",
    "This demo section uses generic explanatory language suitable for layout testing.",
  ]),
  demoSection("how-used", "3. How Cookies Are Used", [
    "Sample cookie policies often group cookies by purpose. Final approved copy will reflect actual site behavior and consent categories.",
  ], {
    lists: [{ ordered: true, items: [
      "Support core site functionality and security.",
      "Remember preferences you select where applicable.",
      "Help measure site usage in aggregated form when enabled.",
    ]}],
  }),
  demoSection("essential", "4. Essential Cookies", [
    "Essential cookies are typically required for basic site operation, such as maintaining session continuity or storing consent choices.",
    "In the live site, essential cookies include those needed to remember your cookie preference selection.",
  ]),
  demoSection("preference", "5. Preference Cookies", [
    "Preference cookies may remember choices that improve your experience, such as language or interface settings in a sample framework.",
    "Final category definitions will align with the website consent manager and approved legal copy.",
  ]),
  demoSection("analytics", "6. Analytics / Measurement Cookies", [
    "Analytics cookies may help understand how visitors use the website in aggregated form when you opt in through consent controls.",
    "This demo section does not name analytics vendors or describe specific tracking technologies.",
  ]),
  demoSection("cookie-management", "7. Cookie Management", [
    "You can manage cookie preferences through the website cookie banner and through the Manage Cookie Preferences control on this page.",
    "Your selections are stored locally in your browser for demonstration of the consent experience.",
  ]),
  demoSection("third-party", "8. Third-Party Technologies", [
    "Some pages may reference third-party content or integrations. Final copy will describe third-party technologies only when approved by legal counsel.",
    "This demo section intentionally avoids naming specific providers.",
  ]),
  demoSection("browser-controls", "9. Browser Controls", [
    "Most browsers allow you to block or delete cookies through settings. Restricting cookies may affect site functionality.",
  ], {
    lists: [{ ordered: false, items: [
      "Review cookie settings in your browser preferences.",
      "Use private browsing modes where appropriate.",
      "Revisit Manage Cookie Preferences on this page to update site-specific choices.",
    ]}],
  }),
  demoSection("disclosure-table", "10. Sample Cookie Disclosure", [
    "The table below uses fictional sample cookie names to demonstrate disclosure layout. These are not deployed production cookies.",
  ], {
    tables: [{
      caption: "Sample cookie disclosure (demo only — not deployed cookies)",
      headers: ["Cookie / Category", "Purpose", "Duration"],
      rows: [
        ["sample_consent_state (Essential)", "Stores your cookie preference choice for this demo site", "1 year"],
        ["sample_session_demo (Essential)", "Illustrative session continuity example", "Session"],
        ["sample_ui_pref (Preference)", "Illustrative remembered interface preference", "6 months"],
        ["sample_usage_demo (Analytics — sample)", "Illustrative aggregated usage category", "30 days"],
      ],
    }],
  }),
  demoSection("changes", "11. Changes to the Cookie Policy", [
    "We may update the structure or content of this sample policy for design review. Final change practices will be defined in approved legal copy.",
  ]),
  demoSection("contact", "12. Contact", [
    "Contact details for cookie-related inquiries will appear in approved final copy.",
    "This demo section omits specific addresses and legal entity names.",
  ]),
];
