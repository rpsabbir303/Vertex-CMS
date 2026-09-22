import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import {
  formatWebinarDate,
  getWebinarDetailMeta,
  webinarListingLinkLabel,
  webinarStatusLabel,
  webinarTopicLabel,
} from "@/lib/marketing/resources/webinar";
import type { WebinarArticleRecord } from "@/lib/marketing/resources/types";

import { WebinarHeroSessionPreview } from "../webinar-detail/WebinarDetailVisuals";

type Props = {
  webinar: WebinarArticleRecord;
};

export function WebinarCard({ webinar }: Props) {
  const meta = getWebinarDetailMeta(webinar);
  const date = formatWebinarDate(webinar.publishedAt);
  const topic = webinarTopicLabel(webinar.topic);
  const status = webinarStatusLabel(webinar.webinarStatus);
  const action = webinarListingLinkLabel(webinar.webinarStatus);
  const showPlay = webinar.webinarStatus === "on-demand";

  return (
    <article className="group flex h-full w-full min-w-0" data-design-layer="content">
      <Link
        href={webinar.href}
        className="flex h-full w-full min-w-0 flex-col border border-brand-line/80 bg-white shadow-[0_1px_0_rgba(15,23,42,0.05)] transition hover:border-brand-orange/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/45"
      >
        <div className="relative bg-[#F4F7FB]">
          {meta ? (
            <div className="relative min-h-[200px] sm:min-h-[220px] lg:min-h-[240px]">
              <WebinarHeroSessionPreview
                variant={meta.heroVisual}
                className="h-full rounded-none border-0 bg-[#F4F7FB] from-[#F4F7FB] via-[#F4F7FB] to-[#EEF4FA] py-6 shadow-none sm:py-7"
              />
              {showPlay ? (
                <span
                  className="pointer-events-none absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center border border-brand-line/80 bg-white text-brand-navy"
                  aria-hidden="true"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M5 3.5v9l7-4.5-7-4.5z" />
                  </svg>
                </span>
              ) : null}
            </div>
          ) : (
            <div className="flex min-h-[200px] items-center justify-center text-[12px] text-[#111827]/50 sm:min-h-[220px] lg:min-h-[240px]">
              Session preview
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-orange">{topic}</p>
          <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.06em] text-[#111827]/45">{status}</p>
          <h3 className="mt-3 font-display text-[1.15rem] font-bold leading-snug text-brand-navy sm:text-[1.22rem] lg:text-[1.28rem]">
            {webinar.title}
          </h3>
          <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-[#111827]">{webinar.description}</p>

          <div className="mt-auto border-t border-brand-line/50 pt-4">
            {date ? (
              <time dateTime={webinar.publishedAt} className="block text-[12px] text-[#111827]/65">
                {date}
              </time>
            ) : (
              <span className="block min-h-[1.125rem]" aria-hidden="true" />
            )}
            <span className="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-brand-navy group-hover:text-brand-orange">
              {action}
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
