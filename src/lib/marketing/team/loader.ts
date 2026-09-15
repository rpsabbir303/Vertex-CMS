/**
 * Team directory loader.
 * Reads CMS-sourced members when NEXT_PUBLIC_VERTEX_TEAM_CMS_URL is set.
 * Otherwise returns demo members (when `teamConfig.useDemoMembers`) or the
 * local approved list.
 */

import {
  approvedKeyRoles,
  getLocalTeamMembers,
  TEAM_PENDING,
  type KeyRole,
  type TeamDirectory,
  type TeamMember,
} from "./content";

export class TeamLoadError extends Error {
  constructor(message = TEAM_PENDING.loadError) {
    super(message);
    this.name = "TeamLoadError";
  }
}

const CMS_URL = process.env.NEXT_PUBLIC_VERTEX_TEAM_CMS_URL ?? "";

export function hasRemoteTeamCms(): boolean {
  return CMS_URL.length > 0;
}

function asTrimmed(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function asSafeImage(value: unknown): string | null {
  const src = asTrimmed(value);
  if (!src) return null;
  if (src.startsWith("/") || src.startsWith("https://") || src.startsWith("http://")) return src;
  return null;
}

function asCategory(value: unknown): TeamMember["category"] {
  return value === "member" ? "member" : "leadership";
}

function normalizeMember(raw: unknown, index: number): TeamMember | null {
  if (!raw || typeof raw !== "object") return null;
  const row = raw as Record<string, unknown>;
  const name = asTrimmed(row.name);
  if (!name) return null;

  return {
    id: asTrimmed(row.id) ?? `member-${index + 1}`,
    name,
    role: asTrimmed(row.role),
    image: asSafeImage(row.image ?? row.photo ?? row.portrait),
    bio: asTrimmed(row.bio ?? row.biography),
    linkedin: asTrimmed(row.linkedin),
    category: asCategory(row.category),
    featured: row.featured === true,
    department: asTrimmed(row.department),
    demoContent: row.demoContent === true || row.isDemo === true,
  };
}

function normalizeRole(raw: unknown, index: number): KeyRole | null {
  if (!raw || typeof raw !== "object") return null;
  const row = raw as Record<string, unknown>;
  const title = asTrimmed(row.title ?? row.role);
  if (!title) return null;
  return {
    id: asTrimmed(row.id) ?? `role-${index + 1}`,
    title,
    description: asTrimmed(row.description ?? row.body),
  };
}

function parseDirectory(payload: unknown): TeamDirectory {
  if (Array.isArray(payload)) {
    return {
      members: payload.map(normalizeMember).filter((member): member is TeamMember => member !== null),
      roles: [],
    };
  }

  if (!payload || typeof payload !== "object") {
    throw new TeamLoadError();
  }

  const data = payload as Record<string, unknown>;
  const membersRaw = Array.isArray(data.members) ? data.members : [];
  const rolesRaw = Array.isArray(data.roles) ? data.roles : [];

  return {
    members: membersRaw.map(normalizeMember).filter((member): member is TeamMember => member !== null),
    roles: rolesRaw.map(normalizeRole).filter((role): role is KeyRole => role !== null),
  };
}

export function getLocalTeamDirectory(): TeamDirectory {
  return {
    members: getLocalTeamMembers(),
    roles: approvedKeyRoles,
  };
}

export async function fetchTeamDirectory(options?: {
  forceError?: boolean;
  delayMs?: number;
}): Promise<TeamDirectory> {
  if (options?.delayMs) {
    await new Promise((resolve) => setTimeout(resolve, options.delayMs));
  }

  if (options?.forceError) {
    throw new TeamLoadError();
  }

  if (!hasRemoteTeamCms()) {
    return getLocalTeamDirectory();
  }

  try {
    const response = await fetch(CMS_URL, { cache: "no-store" });
    if (!response.ok) throw new TeamLoadError();
    const payload: unknown = await response.json();
    return parseDirectory(payload);
  } catch (error) {
    if (error instanceof TeamLoadError) throw error;
    throw new TeamLoadError();
  }
}
