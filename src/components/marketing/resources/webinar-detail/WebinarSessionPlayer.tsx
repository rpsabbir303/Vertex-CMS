"use client";

import { useRef, useState } from "react";

import { BrowserFrame, ProjectWorkspace } from "@/components/mockups/ProductMockups";
import type { WebinarHubStatus } from "@/lib/marketing/resources/types";

type PlayerState = "poster" | "playing" | "paused" | "unavailable";

type Props = {
  status: WebinarHubStatus;
  videoUrl?: string | null;
  title: string;
};

export function WebinarSessionPlayer({ status, videoUrl, title }: Props) {
  const [playerState, setPlayerState] = useState<PlayerState>(() =>
    status === "completed" ? "unavailable" : "poster",
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (status === "completed") return;
    if (videoRef.current && videoUrl) {
      if (videoRef.current.paused) {
        void videoRef.current.play();
        setPlayerState("playing");
      } else {
        videoRef.current.pause();
        setPlayerState("paused");
      }
      return;
    }
    if (!videoUrl) {
      setPlayerState("unavailable");
    }
  };

  const unavailableCopy =
    status === "completed"
      ? "A public recording is not available for this session."
      : status === "upcoming"
        ? "Registration opens the live session — recording availability will be posted after delivery."
        : "Video coming soon.";

  return (
    <div className="overflow-hidden border border-brand-line/80 bg-[#0a1628]" data-design-layer="content">
      <div className="relative aspect-video w-full bg-[#0a1628]">
        {videoUrl && playerState !== "unavailable" ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={videoUrl}
            controls
            playsInline
            aria-label={`${title} recording`}
            onPlay={() => setPlayerState("playing")}
            onPause={() => setPlayerState("paused")}
          />
        ) : (
          <>
            <div className="absolute inset-0 opacity-90">
              <BrowserFrame url="vertexbuild.com / webinar" className="h-full shadow-none [&_*]:pointer-events-none">
                <div className="max-h-full origin-top scale-[0.88] overflow-hidden">
                  <ProjectWorkspace />
                </div>
              </BrowserFrame>
            </div>
            {playerState === "unavailable" ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-navy/75 px-6 text-center">
                <p className="text-[15px] font-semibold text-white">{unavailableCopy}</p>
              </div>
            ) : (
              <button
                type="button"
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-brand-navy/20 transition hover:bg-brand-navy/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50"
                aria-label={status === "upcoming" ? "Session preview" : "Play webinar"}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-sm border border-white/30 bg-white/95 text-brand-navy shadow-lg">
                  <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M5 3.5v9l7-4.5-7-4.5z" />
                  </svg>
                </span>
              </button>
            )}
          </>
        )}
      </div>
      {videoUrl ? null : (
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-4 py-3 text-[12px] text-white/85">
          <span>{status === "on-demand" ? "On-demand session" : status === "upcoming" ? "Upcoming session" : "Past session"}</span>
          {playerState !== "unavailable" && status !== "completed" ? (
            <button
              type="button"
              onClick={togglePlay}
              className="font-semibold text-brand-orange hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50"
            >
              {status === "upcoming" ? "Session preview" : "Check availability"}
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}
