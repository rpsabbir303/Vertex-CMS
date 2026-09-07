import { SecurityAccess } from "./SecurityAccess";
import { SecurityAIGovernance } from "./SecurityAIGovernance";
import { SecurityArchitecture } from "./SecurityArchitecture";
import { SecurityAudit } from "./SecurityAudit";
import { SecurityCompliance } from "./SecurityCompliance";
import { SecurityCTA } from "./SecurityCTA";
import { SecurityDataProtection } from "./SecurityDataProtection";
import { SecurityHero } from "./SecurityHero";
import { SecurityReliability } from "./SecurityReliability";
import { SecurityTrustStrip } from "./SecurityTrustStrip";

export function SecurityPageContent() {
  return (
    <>
      <SecurityHero />
      <SecurityTrustStrip />
      <SecurityDataProtection />
      <SecurityAccess />
      <SecurityAudit />
      <SecurityCompliance />
      <SecurityReliability />
      <SecurityAIGovernance />
      <SecurityArchitecture />
      <SecurityCTA />
    </>
  );
}
