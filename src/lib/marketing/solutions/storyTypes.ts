/**
 * Shared solution-page story model.
 * Visual structure is one RoomMaster-inspired layout; content stays page-specific
 * and must come from documented VertexBuild capabilities.
 */

import type { PreviewKey } from "@/lib/marketing/features/register";

export type StoryLink = { label: string; href: string };
export type StoryCta = { label: string; href: string };

export type StoryMoment = {
  id: string;
  label: string;
  body: string;
  preview: PreviewKey;
  dark?: boolean;
  phone?: boolean;
};

export type StoryBentoItem = {
  id: string;
  label: string;
  story: string;
  preview: PreviewKey;
  dark?: boolean;
  href: string;
};

export type StorySplit =
  | {
      kind: "moments";
      eyebrow: string;
      headline: string;
      supporting: string;
      href?: string;
      linkLabel?: string;
      reverse?: boolean;
      moments: StoryMoment[];
    }
  | {
      kind: "pair";
      eyebrow: string;
      headline: string;
      supporting: string;
      href?: string;
      linkLabel?: string;
      reverse?: boolean;
      left: { label: string; body: string; preview: PreviewKey; dark?: boolean };
      right: { label: string; body: string; preview: PreviewKey; dark?: boolean };
      bridge: string;
    };

export type SolutionStoryModel = {
  hero: {
    eyebrow: string;
    headline: string;
    supporting: string;
    answer?: string;
    primary: StoryCta;
    secondary: StoryCta;
    preview: PreviewKey;
    previewLabel: string;
    overlayPreview?: PreviewKey;
    overlayLabel?: string;
    overlayDark?: boolean;
    manages: StoryLink[];
  };
  bento: {
    eyebrow: string;
    headline: string;
    supporting: string;
    items: StoryBentoItem[];
  };
  splits: StorySplit[];
  process: {
    eyebrow: string;
    headline: string;
    supporting: string;
    stages: StoryMoment[];
  };
  showcase: {
    eyebrow: string;
    headline: string;
    supporting: string;
    preview: PreviewKey;
    previewLabel: string;
    satellites: Array<{ label: string; preview: PreviewKey; dark?: boolean }>;
  };
  cta: {
    headline: string;
    supporting: string;
    primary: StoryCta;
    secondary: StoryCta;
  };
};
