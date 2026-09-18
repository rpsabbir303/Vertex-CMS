/**
 * Browser DOM audit for Customers + Case Study abstract layers (1920×1080).
 * Run: node scripts/verify-abstract-dom.mjs
 */
import { chromium } from "playwright";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const VIEWPORT = { width: 1920, height: 1080 };

function auditPage(page, label) {
  return page.evaluate((pageLabel) => {
    const q = (sel) => document.querySelectorAll(sel).length;
    const gridSvgs = [...document.querySelectorAll('[data-design-layer="CustomerAbstractGrid"]')];
    const gridStats = gridSvgs.map((svg, i) => {
      const lines = svg.querySelectorAll("line");
      const rect = svg.getBoundingClientRect();
      return {
        index: i,
        lineCount: lines.length,
        viewBox: svg.getAttribute("viewBox"),
        renderedWidth: Math.round(rect.width),
        renderedHeight: Math.round(rect.height),
        hasPattern: !!svg.querySelector("pattern"),
        urlFill: !!svg.querySelector('[fill^="url("]'),
      };
    });

    const backdropLines = document.querySelectorAll(
      '[data-design-layer="CustomersSectionBackdrop"] line, [data-design-layer="CaseStudyDetailBackdrop"] line',
    ).length;
    const backdropCircles = document.querySelectorAll(
      '[data-design-layer="CustomersSectionBackdrop"] circle, [data-design-layer="CaseStudyDetailBackdrop"] circle',
    ).length;

    const ecoLines = document.querySelectorAll('[data-design-layer="CustomerEcosystemVisual"] line').length;
    const logoWallLines = document.querySelectorAll(
      '[data-design-layer="LogoWall"] line, .relative.overflow-hidden.py-1 svg line',
    ).length;

    const workflow = document.querySelectorAll('[data-design-layer="CaseStudyWorkflowDiagram"] line').length;
    const challenge = document.querySelectorAll('[data-design-layer="CaseStudyChallengeDiagram"] line').length;
    const caseAbstract = document.querySelectorAll('[data-design-layer="CaseStudyAbstractVisual"] line').length;

    const patterns = document.querySelectorAll("pattern").length;
    const urlFills = [...document.querySelectorAll("[fill]")].filter((el) => {
      const f = el.getAttribute("fill");
      return f && f.includes("url(");
    }).length;

    const pageSpineVisible = [...document.querySelectorAll("svg line")].some((line) => {
      const dash = line.getAttribute("stroke-dasharray");
      return dash === "6 8";
    });

    return {
      pageLabel,
      gridStats,
      totalGridLines: gridStats.reduce((s, g) => s + g.lineCount, 0),
      backdropLines,
      backdropCircles,
      ecoLines,
      logoWallLines,
      workflowLines: workflow,
      challengeLines: challenge,
      caseAbstractLines: caseAbstract,
      patternCount: patterns,
      urlFillCount: urlFills,
      pageSpineDashLinePresent: pageSpineVisible,
      canvasCount: document.querySelectorAll("canvas").length,
    };
  }, label);
}

async function waitForGridStable(page, timeoutMs = 3000) {
  const start = Date.now();
  let last = -1;
  while (Date.now() - start < timeoutMs) {
    const total = await page.evaluate(() =>
      [...document.querySelectorAll('[data-design-layer="CustomerAbstractGrid"]')].reduce(
        (s, svg) => s + svg.querySelectorAll("line").length,
        0,
      ),
    );
    if (total > 0 && total === last) return { stable: true, total, ms: Date.now() - start };
    last = total;
    await page.waitForTimeout(100);
  }
  return { stable: false, total: last, ms: timeoutMs };
}

async function breakpointAudit() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const paths = ["/customers", "/customers/case-studies/northline-construction"];
  const widths = [1920, 1440, 1024, 768, 390];
  const out = [];
  for (const w of widths) {
    await page.setViewportSize({ width: w, height: 1080 });
    for (const p of paths) {
      await page.goto(`${BASE}${p}`, { waitUntil: "networkidle" });
      await page.waitForTimeout(200);
      const r = await page.evaluate(() => {
        const dashSpine = [...document.querySelectorAll("line")].some(
          (l) => l.getAttribute("stroke-dasharray") === "6 8",
        );
        return {
          totalGridLines: [...document.querySelectorAll('[data-design-layer="CustomerAbstractGrid"] line')].length,
          backdropLines: document.querySelectorAll(
            '[data-design-layer="CustomersSectionBackdrop"] line, [data-design-layer="CaseStudyDetailBackdrop"] line',
          ).length,
          patterns: document.querySelectorAll("pattern").length,
          pageSpineDashLine: dashSpine,
        };
      });
      out.push({ width: w, path: p, ...r });
    }
  }
  await browser.close();
  return out;
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: VIEWPORT });
  const page = await context.newPage();

  const results = {};

  for (const path of ["/customers", "/customers/case-studies/northline-construction"]) {
    const url = `${BASE}${path}`;
    const res = await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    if (!res || !res.ok()) {
      results[path] = { error: `HTTP ${res?.status() ?? "failed"}` };
      continue;
    }
    await page.waitForTimeout(300);
    const gridWait = await waitForGridStable(page);
    const initial = await auditPage(page, `${path} (after layout)`);
    results[path] = { gridWait, audit: initial };
  }

  await page.goto(`${BASE}/customers`, { waitUntil: "networkidle" });
  const immediate = await page.evaluate(() =>
    [...document.querySelectorAll('[data-design-layer="CustomerAbstractGrid"]')].reduce(
      (s, svg) => s + svg.querySelectorAll("line").length,
      0,
    ),
  );
  await page.waitForTimeout(0);
  const afterTick = await page.evaluate(() =>
    [...document.querySelectorAll('[data-design-layer="CustomerAbstractGrid"]')].reduce(
      (s, svg) => s + svg.querySelectorAll("line").length,
      0,
    ),
  );
  await page.waitForTimeout(500);
  const after500 = await page.evaluate(() =>
    [...document.querySelectorAll('[data-design-layer="CustomerAbstractGrid"]')].reduce(
      (s, svg) => s + svg.querySelectorAll("line").length,
      0,
    ),
  );

  results.resizeObserverTiming = { immediate, afterTick, after500 };

  console.log(JSON.stringify(results, null, 2));
  await browser.close();

  const breakpoints = await breakpointAudit();
  console.log("BREAKPOINTS", JSON.stringify(breakpoints, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
