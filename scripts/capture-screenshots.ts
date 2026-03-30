import { chromium, type Page } from "playwright";
import path from "path";

// Pre-set localStorage values to prevent modals/banners from appearing
const LOCAL_STORAGE: Record<string, Record<string, string>> = {
  "rbv-bilvard": { "rbv-cookie-consent": "accepted" },
  "mastercuts": { mc_hours_v1: "dismissed" },
};

const SITES = [
  { name: "rbv-bilvard", url: "https://rbv-bilvard.vercel.app/" },
  { name: "mastercuts", url: "https://mastercuts.se/" },
  { name: "mustasch", url: "https://mustasch.salon/" },
  { name: "ledigare", url: "https://www.ledigare.se/" },
];

const OUTPUT_DIR = path.join(process.cwd(), "public", "screenshots");
const VIEWPORT = { width: 1280, height: 800 };

async function setLocalStorage(page: Page, name: string) {
  const entries = LOCAL_STORAGE[name];
  if (!entries) return;

  await page.evaluate((items) => {
    for (const [key, value] of Object.entries(items)) {
      localStorage.setItem(key, value);
    }
  }, entries);
}

async function capture() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
  });

  for (const site of SITES) {
    console.log(`Capturing ${site.name}...`);
    const page = await context.newPage();

    try {
      // Navigate first to set origin, then inject localStorage, then reload
      await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 30000 });
      await setLocalStorage(page, site.name);
      await page.reload({ waitUntil: "networkidle", timeout: 30000 });
      await page.waitForTimeout(3000);

      await page.screenshot({
        path: path.join(OUTPUT_DIR, `${site.name}.png`),
        type: "png",
        clip: { x: 0, y: 0, width: VIEWPORT.width, height: VIEWPORT.height },
      });

      console.log(`  ✓ ${site.name} saved`);
    } catch (err) {
      console.error(`  ✗ ${site.name} failed:`, err);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("\nDone!");
}

capture();
