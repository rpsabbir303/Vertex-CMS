"use client";

import { useMemo, useState } from "react";

import {
  filterCaseStudies,
  getCaseStudyCapabilityFilters,
  getContractorTypes,
  getProjectTypes,
} from "@/lib/marketing/customers/catalog";
import { CUSTOMERS_LIMITED_NOTES } from "@/lib/marketing/customers/content";
import type { CaseStudyRecord } from "@/lib/marketing/customers/types";

import { ResourceSearchField } from "../resources/ResourceSearchField";
import { CaseStudyCard } from "./CaseStudyCard";
import { CustomersProofCompactNote } from "./CustomersProofCompactNote";
import { CustomersSectionBackdrop } from "./visuals/CustomersSectionBackdrop";

type Props = {
  studies: CaseStudyRecord[];
  featuredSlug?: string;
  featuredEyebrow: string;
  headline: string;
  supporting: string;
};

export function CaseStudiesLibrarySection({
  studies,
  featuredSlug,
  featuredEyebrow,
  headline,
  supporting,
}: Props) {
  const contractorTypes = useMemo(() => getContractorTypes(), []);
  const projectTypes = useMemo(() => getProjectTypes(), []);
  const capabilityFilters = useMemo(() => getCaseStudyCapabilityFilters(), []);

  const showContractorFilter = contractorTypes.length > 1;
  const showProjectFilter = projectTypes.length > 1;
  const showCapabilityFilter = capabilityFilters.length > 1;

  const [contractorType, setContractorType] = useState("all");
  const [projectType, setProjectType] = useState("all");
  const [capability, setCapability] = useState("all");
  const [query, setQuery] = useState("");

  const featuredStudy = useMemo(
    () => (featuredSlug ? studies.find((s) => s.slug === featuredSlug) : undefined),
    [studies, featuredSlug],
  );

  const filtered = useMemo(
    () =>
      filterCaseStudies(studies, {
        contractorType,
        projectType,
        capability,
        query,
      }),
    [studies, contractorType, projectType, capability, query],
  );

  const featuredVisible = featuredStudy ? filtered.some((s) => s.slug === featuredStudy.slug) : false;
  const gridStudies = featuredVisible
    ? filtered.filter((s) => s.slug !== featuredStudy?.slug)
    : filtered;

  const hasActiveFilters =
    contractorType !== "all" || projectType !== "all" || capability !== "all" || Boolean(query.trim());

  const showFilters = showContractorFilter || showProjectFilter || showCapabilityFilter;

  return (
    <>
      {studies.length > 0 && featuredStudy && featuredVisible ? (
        <section
          className="relative overflow-hidden border-b border-brand-line bg-white py-10 sm:py-12"
          data-design-layer="CaseStudyFeatured"
          aria-labelledby="case-study-featured-heading"
        >
          <CustomersSectionBackdrop variant="featured" />
          <div className="cust-shell relative z-[1]">
            <p id="case-study-featured-heading" className="cust-eyebrow">
              {featuredEyebrow}
            </p>
            <div className="mt-5">
              <CaseStudyCard study={featuredStudy} variant="featured" showCapabilities />
            </div>
          </div>
        </section>
      ) : null}

      <section
        className="relative overflow-hidden border-b border-brand-line bg-[#F5F8FC] py-10 sm:py-12"
        data-design-layer="CaseStudiesLibrary"
        aria-labelledby="case-studies-library-heading"
      >
        <CustomersSectionBackdrop variant="caseStudies" />
        <div className="cust-shell relative z-[1]">
          <header className="max-w-xl">
            <h2 id="case-studies-library-heading" className="cust-display text-xl sm:text-[1.75rem]">
              {headline}
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">{supporting}</p>
          </header>

          {studies.length === 0 ? (
            <div className="mt-6 rounded-lg border border-brand-line bg-white px-4 py-4 sm:px-5">
              <CustomersProofCompactNote message={CUSTOMERS_LIMITED_NOTES.caseStudies} />
            </div>
          ) : (
            <>
              {showFilters || studies.length > 2 ? (
                <div className="mt-8 space-y-5">
                  <ResourceSearchField
                    value={query}
                    onChange={setQuery}
                    placeholder="Search case studies…"
                    label="Search case studies"
                  />

                  {showFilters ? (
                    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:gap-6">
                      {showContractorFilter ? (
                        <FilterSelect
                          id="case-study-contractor-filter"
                          label="Contractor type"
                          value={contractorType}
                          onChange={setContractorType}
                          options={[
                            { value: "all", label: "All contractor types" },
                            ...contractorTypes.map((t) => ({ value: t, label: t })),
                          ]}
                        />
                      ) : null}
                      {showProjectFilter ? (
                        <FilterSelect
                          id="case-study-project-filter"
                          label="Project type"
                          value={projectType}
                          onChange={setProjectType}
                          options={[
                            { value: "all", label: "All project types" },
                            ...projectTypes.map((t) => ({ value: t, label: t })),
                          ]}
                        />
                      ) : null}
                      {showCapabilityFilter ? (
                        <FilterSelect
                          id="case-study-capability-filter"
                          label="Capability"
                          value={capability}
                          onChange={setCapability}
                          options={[
                            { value: "all", label: "All capabilities" },
                            ...capabilityFilters.map((t) => ({ value: t, label: t })),
                          ]}
                        />
                      ) : null}
                      {hasActiveFilters ? (
                        <button
                          type="button"
                          onClick={() => {
                            setContractorType("all");
                            setProjectType("all");
                            setCapability("all");
                            setQuery("");
                          }}
                          className="text-left text-[13px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                        >
                          Clear filters
                        </button>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              ) : null}

              {filtered.length === 0 ? (
                <p className="mt-8 text-[14px] text-brand-muted">No case studies match the selected filters.</p>
              ) : gridStudies.length === 0 ? (
                <p className="mt-8 text-[14px] text-brand-muted">
                  The featured story above matches your filters. Adjust filters to browse additional stories.
                </p>
              ) : (
                <div
                  className="cust-case-studies-library-grid mt-8 min-w-0"
                  data-design-layer="CaseStudiesGrid"
                  role="list"
                >
                  {gridStudies.map((study, index) => (
                    <CaseStudyCard
                      key={study.slug}
                      study={study}
                      variant="tile"
                      visualIndex={index}
                      libraryLayout
                      showCapabilities
                      className="min-w-0 max-w-none"
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

function FilterSelect({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="min-w-[min(100%,14rem)]">
      <label htmlFor={id} className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-muted">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-sm border border-brand-line bg-white px-3 py-2.5 text-[14px] text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand-orange"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
