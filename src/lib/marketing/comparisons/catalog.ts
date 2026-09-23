import { getComparisonDirectoryFromRecords, getComparisonRecord } from "./records";

export type ComparisonSlug = "procore" | "buildertrend" | "cmic";

export type ComparisonFocusTag = "Capabilities" | "Operating model" | "Team fit";

export type ComparisonDirectoryRecord = {
  slug: ComparisonSlug;
  index: string;
  name: string;
  summary: string;
  focusTags: readonly string[];
  href: string;
};

/** Supported comparison destinations — single data source for landing + detail routes. */
export const COMPARISON_DIRECTORY: ComparisonDirectoryRecord[] = getComparisonDirectoryFromRecords();

export function getComparisonBySlug(slug: string): ComparisonDirectoryRecord | undefined {
  const record = getComparisonRecord(slug);
  if (!record) return undefined;
  return {
    slug: record.slug,
    index: record.index,
    name: record.name,
    summary: record.summary,
    focusTags: record.focusTags,
    href: record.href,
  };
}

export { getComparisonRecord, COMPARISON_SLUGS, comparisonHref } from "./records";
