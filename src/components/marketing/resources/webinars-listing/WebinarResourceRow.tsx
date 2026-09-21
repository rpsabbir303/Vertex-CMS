import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import {
  formatWebinarDate,
  webinarActionLabel,
  webinarStatusLabel,
  webinarTopicLabel,
} from "@/lib/marketing/resources/webinar";
import type { WebinarArticleRecord } from "@/lib/marketing/resources/types";

type Props = {
  webinar: WebinarArticleRecord;
  index: number;
};

export function WebinarResourceRow({ webinar, index }: Props) {
  const date = formatWebinarDate(webinar.publishedAt);
  const topic = webinarTopicLabel(webinar.topic);
  const status = webinarStatusLabel(webinar.webinarStatus);
  const action = webinarActionLabel(webinar.webinarStatus);

  return (
    <Link
      href={webinar.href}
      className="group relative flex items-start gap-3 border-l-2 border-transparent px-3 py-4 transition hover:border-brand-blue hover:bg-[#F7FAFD] sm:gap-4 sm:px-5 sm:py-5"
      data-design-layer="content"
    >
      <span className="mt-0.5 shrink-0 text-[11px] font-semibold tabular-nums text-brand-orange">
        {String(index).padStart(2, "0")}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
            Webinar · {topic}
          </p>
          <span className="text-brand-line" aria-hidden="true">
            /
          </span>
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-blue">{status}</p>
        </div>
        <p className="mt-1 font-display text-[1.05rem] font-bold leading-snug text-brand-navy transition group-hover:text-brand-blue sm:text-[1.12rem]">
          {webinar.title}
        </p>
        <p className="mt-1.5 line-clamp-2 text-[13.5px] leading-relaxed text-brand-muted">{webinar.description}</p>
        {date ? (
          <p className="mt-2 text-[12px] text-brand-muted/90">
            <time dateTime={webinar.publishedAt}>{date}</time>
          </p>
        ) : null}
      </div>
      <span className="flex shrink-0 items-center gap-1 pt-1 text-[11px] font-semibold text-brand-blue opacity-85 transition group-hover:translate-x-0.5 group-hover:opacity-100 sm:text-[12px]">
        {action}
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
