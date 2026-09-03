"use client";

import { useState } from "react";

type Props = {
  placeholder?: string;
};

export function MarketingSearch({ placeholder = "Search resources…" }: Props) {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<"idle" | "results" | "empty">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState(query.trim() ? "empty" : "idle");
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setState("idle");
          }}
          placeholder={placeholder}
          className="flex-1 rounded-sm border border-brand-line px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
          aria-label="Search"
        />
        <button type="submit" className="btn-secondary px-4 py-2.5 text-[12px]">
          Search
        </button>
      </form>
      {state === "empty" && (
        <p className="mt-2 text-sm text-brand-muted">No results found. Search will be available when content is published.</p>
      )}
    </div>
  );
}
