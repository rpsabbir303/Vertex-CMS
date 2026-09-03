/**
 * Reliable dev server launcher.
 *
 * Root issue this solves: running `npm run build` while a dev server is active
 * corrupts `.next/static/development/_buildManifest.js`, which triggers
 * "missing required error components, refreshing..." in the browser.
 *
 * By default we start with a fully clean `.next` directory.
 * Pass --fast to reuse an existing .next (advanced use only).
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextDir = path.join(root, ".next");
const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
const port = process.env.PORT ?? "3000";
const lockFile = path.join(root, ".dev-server.lock");

const fast = process.argv.includes("--fast");
const useWebpack = process.argv.includes("--webpack");

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
  console.error("[dev] Another dev server is already running for this project.");
  console.error("[dev] Stop it first, then run `npm run dev` again.");
  process.exit(1);
}

if (!fast) {
  fs.rmSync(nextDir, { recursive: true, force: true });
  console.log("[dev] Fresh .next directory");
}

const args = ["dev", "-p", port];
if (!useWebpack) {
  args.push("--turbo");
}

console.log(`[dev] Starting Next.js on port ${port} (${useWebpack ? "webpack" : "turbopack"})…`);

const child = spawn(process.execPath, [nextBin, ...args], {
  cwd: root,
  stdio: "inherit",
  env: {
    ...process.env,
    ...(useWebpack ? { NEXT_USE_WEBPACK: "1" } : {}),
  },
});

fs.writeFileSync(lockFile, String(child.pid));

function cleanup() {
  try {
    fs.rmSync(lockFile, { force: true });
  } catch {
    // ignore
  }
}

child.on("exit", (code) => {
  cleanup();
  process.exit(code ?? 0);
});

process.on("SIGINT", () => {
  child.kill("SIGINT");
});
process.on("SIGTERM", () => {
  child.kill("SIGTERM");
});
