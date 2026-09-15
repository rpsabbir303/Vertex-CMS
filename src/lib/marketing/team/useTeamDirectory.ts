"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getLocalTeamDirectory, hasRemoteTeamCms, fetchTeamDirectory, TeamLoadError } from "./loader";
import { TEAM_PENDING, type TeamDirectory } from "./content";

export type TeamDirectoryStatus = "loading" | "loaded" | "error";
export type TeamPreviewState = "loading" | "error";

export function useTeamDirectory(preview?: TeamPreviewState) {
  const remote = hasRemoteTeamCms();
  const [status, setStatus] = useState<TeamDirectoryStatus>(
    preview === "loading" || (remote && preview !== "error") ? "loading" : preview === "error" ? "error" : "loaded"
  );
  const [directory, setDirectory] = useState<TeamDirectory>(getLocalTeamDirectory);
  const [errorMessage, setErrorMessage] = useState<string | null>(preview === "error" ? TEAM_PENDING.loadError : null);
  const [retrying, setRetrying] = useState(false);
  const loadInFlight = useRef(false);

  const load = useCallback(
    async (isRetry = false) => {
      if (loadInFlight.current) return;
      loadInFlight.current = true;

      if (isRetry) setRetrying(true);
      else if (preview === "loading" || (remote && !preview)) setStatus("loading");

      setErrorMessage(null);

      try {
        if (preview === "loading") {
          setStatus("loading");
          return;
        }

        const data = await fetchTeamDirectory({
          forceError: preview === "error",
          delayMs: preview === "error" || isRetry ? 240 : undefined,
        });
        setDirectory(data);
        setStatus("loaded");
      } catch (error) {
        setDirectory({ members: [], roles: [] });
        setStatus("error");
        setErrorMessage(error instanceof TeamLoadError ? error.message : TEAM_PENDING.loadError);
      } finally {
        loadInFlight.current = false;
        setRetrying(false);
      }
    },
    [preview, remote]
  );

  useEffect(() => {
    void load(false);
  }, [load]);

  return {
    status,
    directory,
    errorMessage,
    retrying,
    retry: () => load(true),
    isLoading: status === "loading",
  };
}
