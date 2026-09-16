"use client";

import { securityContactPage } from "@/lib/marketing/security/content";
import { SecurityContactCTA } from "./SecurityContactCTA";
import { SecurityLiveEyebrow, SecurityMeasure, SecurityPaper } from "./SecuritySurface";

export function SecurityContactContent() {
  return (
    <SecurityPaper className="border-b border-[#C5DDB8]">
      <SecurityMeasure className="py-16 text-center sm:py-20">
        <SecurityLiveEyebrow>{securityContactPage.title}</SecurityLiveEyebrow>
        <h2 className="mx-auto mt-4 max-w-[16em] font-display text-[1.85rem] font-bold leading-[1.15] tracking-[-0.03em] text-[#0D0D0D] sm:text-[2.4rem]">
          {securityContactPage.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.75] text-[#5C6560]">{securityContactPage.supporting}</p>
        <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-[1.7] text-[#0D0D0D]/80">{securityContactPage.body}</p>
        <div className="mt-8">
          <SecurityContactCTA embedded />
        </div>
      </SecurityMeasure>
    </SecurityPaper>
  );
}
