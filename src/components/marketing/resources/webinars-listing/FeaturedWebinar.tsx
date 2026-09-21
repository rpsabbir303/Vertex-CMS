import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import {
  formatWebinarDate,
  webinarActionLabel,
  webinarStatusLabel,
  webinarTopicLabel,
  WEBINAR_LISTING_PAGE_ANCHORS,
} from "@/lib/marketing/resources/webinar";
import type { WebinarArticleRecord } from "@/lib/marketing/resources/types";

import { WebinarFeaturedSessionAbstract } from "./WebinarSectionAbstracts";

type Props = { webinar: WebinarArticleRecord };

export function FeaturedWebinar({ webinar }: Props) {
  const date = formatWebinarDate(webinar.publishedAt);
  const topic = webinarTopicLabel(webinar.topic);
  const status = webinarStatusLabel(webinar.webinarStatus);
  const action = webinarActionLabel(webinar.webinarStatus);

  return (
    <section
      id={WEBINAR_LISTING_PAGE_ANCHORS.featured}
      className="relative scroll-mt-28 border-b border-brand-line/60 bg-white"
      aria-labelledby="featured-webinar-heading"
    >
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:gap-12 xl:gap-16">
          <WebinarFeaturedSessionAbstract className="order-2 lg:order-1" />
          <div className="order-1 min-w-0 lg:order-2" data-design-layer="content">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-blue">Featured webinar</p>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
              {topic} · {status}
            </p>
            <h2
              id="featured-webinar-heading"
              className="mt-2 font-display text-[1.55rem] font-bold leading-[1.12] tracking-tight text-brand-navy sm:text-[1.95rem] lg:text-[2.1rem]"
            >
              {webinar.title}
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.65] text-brand-muted sm:text-[15.5px]">{webinar.description}</p>
            {date ? (
              <p className="mt-4 text-[12.5px] text-brand-muted">
                <time dateTime={webinar.publishedAt}>{date}</time>
              </p>
            ) : null}
            <Link href={webinar.href} className="btn-primary mt-7 inline-flex w-full sm:w-auto">
              {action}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
