// Responsive check across phones, tablets and desktops.
// Usage: node tests/responsive.mjs [baseUrl] [outDir]
// Needs the site running (npm run build && npx next start -p 3100) and Google Chrome installed.
import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";

const base = process.argv[2] ?? "http://localhost:3100";
const out = process.argv[3] ?? "test-results";
mkdirSync(out, { recursive: true });

const chrome = process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe";

const devices = [
  { name: "small-android-320", width: 320, height: 640, mobile: true, dpr: 2 },
  { name: "galaxy-360", width: 360, height: 780, mobile: true, dpr: 3 },
  { name: "iphone-se-375", width: 375, height: 667, mobile: true, dpr: 2 },
  { name: "iphone-15-393", width: 393, height: 852, mobile: true, dpr: 3 },
  { name: "iphone-pro-max-430", width: 430, height: 932, mobile: true, dpr: 3 },
  { name: "ipad-mini-768", width: 768, height: 1024, mobile: true, dpr: 2 },
  { name: "ipad-air-820", width: 820, height: 1180, mobile: true, dpr: 2 },
  { name: "ipad-landscape-1024", width: 1024, height: 768, mobile: true, dpr: 2 },
  { name: "laptop-1280", width: 1280, height: 800, mobile: false, dpr: 1 },
  { name: "desktop-1440", width: 1440, height: 900, mobile: false, dpr: 1 },
  { name: "wide-1920", width: 1920, height: 1080, mobile: false, dpr: 1 },
];

const browser = await chromium.launch({ executablePath: chrome, headless: true });
let failures = 0;

for (const d of devices) {
  const ctx = await browser.newContext({
    viewport: { width: d.width, height: d.height },
    isMobile: d.mobile,
    hasTouch: d.mobile,
    deviceScaleFactor: d.dpr,
  });
  const page = await ctx.newPage();
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(base, { waitUntil: "networkidle" });

  // scroll the whole page slowly so every reveal and counter runs
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 300) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
  });
  await page.waitForTimeout(1600);

  const r = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    // can the page be pushed sideways?
    window.scrollTo(300, window.scrollY);
    const scrollX = window.scrollX;
    window.scrollTo(0, window.scrollY);
    // text that spills out of its own box
    const spill = [...document.querySelectorAll("h1,h2,h3,p,b,strong,a,button,blockquote,span,li,summary")]
      .filter((el) => el.offsetParent && el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).overflow === "visible" && getComputedStyle(el).display !== "inline")
      .filter((el) => !el.closest(".ticker-win,[aria-hidden='true'],.ring"))
      .map((el) => `${el.tagName.toLowerCase()}: "${el.textContent.trim().slice(0, 40)}" (${el.scrollWidth}>${el.clientWidth})`);
    // tap targets smaller than 24 x 24 (WCAG 2.5.8)
    const small = [...document.querySelectorAll("a,button,summary")]
      .filter((el) => el.offsetParent && !el.closest("[aria-hidden='true']"))
      .map((el) => [el, el.getBoundingClientRect()])
      .filter(([el, b]) => b.width > 0 && (b.height < 24 || b.width < 24) && !(el.tagName === "A" && getComputedStyle(el).display === "inline"))
      .map(([el, b]) => `${el.textContent.trim().slice(0, 30) || el.getAttribute("aria-label")} ${Math.round(b.width)}x${Math.round(b.height)}`);
    // headline numbers must stay on one line ("TechWomen100" must not break)
    const wrapped = [...document.querySelectorAll("#results .stat")]
      .filter((el) => el.getBoundingClientRect().height > parseFloat(getComputedStyle(el).lineHeight) * 1.5)
      .map((el) => `stat wraps: ${el.textContent}`);
    spill.push(...wrapped);
    // the About photo must actually load once scrolled to
    const photo = document.querySelector("#about img");
    if (!photo.complete || photo.naturalWidth === 0 || photo.currentSrc.startsWith("data:")) spill.push("about photo not loaded");
    const burger = [...document.querySelectorAll("header button")][0];
    const menu = document.getElementById("menu");
    return {
      vw,
      docWidth: document.documentElement.scrollWidth,
      scrollX,
      spill,
      small,
      burgerVisible: !!burger && getComputedStyle(burger).display !== "none",
      menuVisible: getComputedStyle(menu).display !== "none",
      hiddenReveals: [...document.querySelectorAll(".rv")].filter((el) => getComputedStyle(el).opacity === "0").length,
      headerTop: Math.round(document.querySelector("header").getBoundingClientRect().top),
    };
  });

  // mobile menu opens and closes
  let menuOk = true;
  if (r.burgerVisible) {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.click("header button");
    menuOk = await page.isVisible("#menu a[href='#services']");
    await page.click("#menu a[href='#services']");
    await page.waitForTimeout(400);
    menuOk = menuOk && !(await page.isVisible("#menu a[href='#services']"));
  }

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${out}/${d.name}.png`, fullPage: true });

  const problems = [];
  if (r.docWidth > r.vw || r.scrollX !== 0) problems.push(`sideways scroll (page ${r.docWidth}px, viewport ${r.vw}px, scrollX ${r.scrollX})`);
  if (r.spill.length) problems.push(`text overflow: ${r.spill.join("; ")}`);
  if (r.small.length) problems.push(`small tap targets: ${r.small.join("; ")}`);
  if (d.width < 961 && !r.burgerVisible) problems.push("menu button missing");
  if (d.width >= 961 && (!r.menuVisible || r.burgerVisible)) problems.push("desktop menu not shown");
  if (!menuOk) problems.push("mobile menu did not open/close");
  if (r.headerTop !== 0) problems.push(`header not sticky (top ${r.headerTop})`);
  if (errors.length) problems.push(`console errors: ${errors.join(" | ")}`);
  failures += problems.length ? 1 : 0;
  console.log(`${problems.length ? "FAIL" : "PASS"}  ${d.name.padEnd(20)} ${problems.join("\n      ")}`);
  await ctx.close();
}

// reduced motion: nothing may stay hidden
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await page.goto(base, { waitUntil: "networkidle" });
  const hidden = await page.evaluate(() => [...document.querySelectorAll(".rv")].filter((el) => getComputedStyle(el).opacity === "0").length);
  console.log(`${hidden ? "FAIL" : "PASS"}  reduced-motion        ${hidden ? hidden + " elements hidden" : ""}`);
  failures += hidden ? 1 : 0;
  await ctx.close();
}

// no JavaScript: all content must still be visible
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto(base);
  const hidden = await page.evaluate(() => 0).catch(() => 0);
  const text = await page.textContent("body");
  const ok = text.includes("Good to know") && text.includes("Laura Barlow, founder") && hidden === 0;
  console.log(`${ok ? "PASS" : "FAIL"}  no-javascript`);
  failures += ok ? 0 : 1;
  await ctx.close();
}

await browser.close();
console.log(failures ? `\n${failures} check(s) failed` : "\nAll checks passed");
process.exit(failures ? 1 : 0);
