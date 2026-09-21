"use client";

import { useState } from "react";

import { ResourceSearchField } from "../ResourceSearchField";

type Props = {
  /** When true, omits outer section label (used inside hero). */
  embedded?: boolean;
};

/** Search UI — catalog browse only until full doc search is wired (matches Resource Hub). */
export function HelpCenterSearch({ embedded = false }: Props) {
  const [query, setQuery] = useState("");

  return (
    <div id="help-doc-search" className="scroll-mt-28" data-design-layer="content">
      {embedded ? null : (
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Search product documentation</p>
      )}
      <div className={embedded ? "" : "mt-4"}>
        <ResourceSearchField
          value={query}
          onChange={setQuery}
          placeholder="Search documentation…"
          label="Search product documentation"
        />
        <p className="mt-2 text-[12px] text-brand-muted">Full-text search is coming soon. Documentation is organized by knowledge area on this page.</p>
      </div>
    </div>
  );
}
