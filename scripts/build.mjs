/**
 * Production build wrapper.
 * Refuses to run while the dev server is active to avoid corrupting `.next`.
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
const lockFile = path.join(root, ".dev-server.lock");

function isDevServerRunning() {
  if (!fs.existsSync(lockFile)) return false;
  try {
    const pid = Number(fs.readFileSync(lockFile, "utf8").trim());
    if (!pid) return false;
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

if (isDevServerRunning()) {
  console.error("[build] Dev server is running. Stop it first with Ctrl+C, then run `npm run build`.");
  console.error("[build] Running build while dev is active corrupts .next and breaks the browser.");
  process.exit(1);
}

const child = spawn(process.execPath, [nextBin, "build"], {
  cwd: root,
  stdio: "inherit",
});

child.on("exit", (code) => process.exit(code ?? 0));
