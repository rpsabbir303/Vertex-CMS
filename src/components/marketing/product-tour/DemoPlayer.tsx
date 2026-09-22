"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { ArrowRight } from "@/components/Icons";
import { BrowserFrame, ProjectWorkspace } from "@/components/mockups/ProductMockups";
import { DEMO_PLAYER_COPY } from "@/lib/marketing/product-tour/content";

import { DemoVideoBackdrop, DemoVideoVerticalFlow } from "./compositions/DemoVideoVisuals";
import { DemoVideoTimeline } from "./compositions/DemoVideoTimeline";

type PlayerState = "poster" | "loading" | "playing" | "paused" | "completed" | "error";

/** Preview builds have no hosted tour media — playback simulates controls when bypassing unavailable. */
const PREVIEW_MEDIA_UNAVAILABLE = true;

export function DemoPlayer() {
  const copy = DEMO_PLAYER_COPY;
  const [state, setState] = useState<PlayerState>("poster");
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(false);
  const [captions, setCaptions] = useState(true);
  const [playHovered, setPlayHovered] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  const runSimulatedPlayback = useCallback(() => {
    setState("playing");
    setProgress(0);
    clearTimer();
    timerRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearTimer();
          setState("completed");
          return 100;
        }
        return p + 2;
      });
    }, 200);
  }, [clearTimer]);

  const startPlayback = useCallback(() => {
    setState("loading");
    window.setTimeout(() => {
      if (PREVIEW_MEDIA_UNAVAILABLE) {
        setState("error");
        return;
      }
      runSimulatedPlayback();
    }, 550);
  }, [runSimulatedPlayback]);

  useEffect(() => () => clearTimer(), [clearTimer]);

  const togglePlay = () => {
    if (state === "poster" || state === "completed" || state === "error") {
      if (state === "completed") setProgress(0);
      startPlayback();
    } else if (state === "playing") {
      clearTimer();
      setState("paused");
    } else if (state === "paused") {
      runSimulatedPlayback();
    }
  };

  const resetToPoster = () => {
    clearTimer();
    setProgress(0);
    setState("poster");
  };

  const toggleFullscreen = async () => {
    const el = shellRef.current;
    if (!el) return;
    if (!document.fullscreenElement) await el.requestFullscreen?.();
    else await document.exitFullscreen?.();
  };

  const showPosterUi = state === "poster" || state === "completed" || state === "error";
  const showControls = state === "playing" || state === "paused";

  return (
    <section id="tour-demo" className="relative overflow-hidden border-b border-brand-line/60 bg-white" aria-labelledby="tour-demo-heading">
      <DemoVideoBackdrop className="hidden sm:block" />
      <div className="site-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <header className="mx-auto max-w-3xl text-center" data-design-layer="content">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{copy.eyebrow}</p>
          <h2 id="tour-demo-heading" className="mt-3 font-display text-[1.65rem] font-bold text-black sm:text-[2rem] lg:text-[2.15rem]">
            {copy.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#111827]">{copy.description}</p>
        </header>

        <DemoVideoVerticalFlow />

        <div className="relative mx-auto mt-8 max-w-4xl lg:mt-10">
          <div
            ref={shellRef}
            className="relative z-[1] shadow-[0_24px_60px_-32px_rgba(10,39,68,0.35)] motion-reduce:transform-none lg:-mx-4 xl:-mx-8"
            role="region"
            aria-label="Product tour video player"
          >
            <div className="relative aspect-video overflow-hidden rounded-sm border border-brand-line/90 bg-[#F8FAFC]">
              <div className="absolute inset-0 overflow-hidden">
                <div className="h-full w-full origin-top-left scale-[0.52] sm:scale-[0.58] md:scale-[0.65] lg:scale-[0.72]">
                  <BrowserFrame url="app.vertexcms.com / portfolio" className="h-full shadow-none">
                    <ProjectWorkspace />
                  </BrowserFrame>
                </div>
              </div>

              {state === "loading" && (
                <div className="absolute inset-0 z-[2] flex items-center justify-center bg-brand-navy/40 backdrop-blur-[2px]">
                  <p className="text-sm font-medium text-white">Loading preview…</p>
                </div>
              )}

              {showPosterUi && (
                <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center">
                  <div
                    className={`absolute inset-0 ${state === "error" ? "bg-brand-navy/55" : "bg-gradient-to-t from-brand-navy/50 via-brand-navy/20 to-transparent"}`}
                    aria-hidden="true"
                  />
                  {state === "error" ? (
                    <div className="relative z-[1] mx-6 max-w-md rounded-sm border border-white/20 bg-white/95 px-6 py-6 text-center shadow-lg backdrop-blur-sm">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">{copy.unavailableTitle}</p>
                      <p className="mt-2 font-display text-lg font-bold text-black">{copy.videoLabel}</p>
                      <p className="mt-2 text-[14px] text-[#111827]">{copy.unavailableMessage}</p>
                      <Link
                        href={copy.exploreTourHref}
                        className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-blue hover:underline"
                      >
                        {copy.exploreTourLabel}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <button type="button" onClick={resetToPoster} className="mt-3 block w-full text-[11px] font-semibold text-[#111827] hover:text-black">
                        Back to poster
                      </button>
                    </div>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={togglePlay}
                        onMouseEnter={() => setPlayHovered(true)}
                        onMouseLeave={() => setPlayHovered(false)}
                        className={`relative z-[1] flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 border-white/40 bg-white/15 text-white backdrop-blur-md transition motion-reduce:transition-none ${
                          playHovered ? "scale-105 bg-white/25 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)]" : ""
                        }`}
                        aria-label={`Play ${copy.videoLabel}`}
                      >
                        <span className="ml-1 text-2xl" aria-hidden="true">
                          ▶
                        </span>
                      </button>
                      <p className="relative z-[1] mt-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-white">{copy.videoLabel}</p>
                      <p className="relative z-[1] mt-1 text-[11px] text-white/85">Duration {copy.durationLabel}</p>
                      {state === "completed" ? (
                        <button type="button" onClick={resetToPoster} className="relative z-[1] mt-4 text-[12px] font-semibold text-brand-orange hover:underline">
                          Replay
                        </button>
                      ) : null}
                    </>
                  )}
                </div>
              )}

              {showControls && (
                <div className="absolute inset-0 z-[2] flex flex-col bg-brand-navy/75">
                  <div className="flex flex-1 items-center justify-center px-6 text-center">
                    <p className="max-w-md text-[13px] leading-relaxed text-slate-200">
                      Representative product workspace — hosted tour media is not wired in this preview build.
                    </p>
                  </div>
                  <div className="border-t border-white/10 bg-black/50 px-3 py-3 sm:px-4">
                    <div className="mb-2 h-1 overflow-hidden rounded-full bg-white/15">
                      <div className="h-full bg-brand-orange transition-all motion-reduce:transition-none" style={{ width: `${progress}%` }} />
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <button type="button" onClick={togglePlay} className="rounded px-2 py-1 text-[11px] font-semibold text-white hover:bg-white/10">
                        {state === "playing" ? "Pause" : "Play"}
                      </button>
                      <button type="button" onClick={() => setMuted((m) => !m)} className="rounded px-2 py-1 text-[11px] text-slate-300 hover:bg-white/10">
                        {muted ? "Unmute" : "Mute"}
                      </button>
                      <button type="button" onClick={() => setCaptions((c) => !c)} className="rounded px-2 py-1 text-[11px] text-slate-300 hover:bg-white/10">
                        CC {captions ? "On" : "Off"}
                      </button>
                      <button type="button" onClick={toggleFullscreen} className="rounded px-2 py-1 text-[11px] text-slate-300 hover:bg-white/10">
                        Fullscreen
                      </button>
                      <span className="ml-auto text-[10px] tabular-nums text-slate-400">{progress}%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <DemoVideoTimeline />

        <p className="mt-8 text-center">
          <Link href={copy.exploreTourHref} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-blue hover:underline">
            {copy.exploreTourLabel}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </p>
      </div>
    </section>
  );
}
