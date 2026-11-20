// Full-page screenshots for visual review (motion off, so every section is shown).
// Usage: node tests/screens.mjs [baseUrl] [outDir]
import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";

const base = process.argv[2] ?? "http://localhost:3100";
const out = process.argv[3] ?? "test-results/screens";
mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe" });
for (const width of [360, 393, 820, 1280, 1440]) {
  const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: "reduce" });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.screenshot({ path: `${out}/full-${width}.png`, fullPage: true });
  await page.close();
}
await browser.close();
