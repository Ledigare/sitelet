import { chromium, type Page } from "playwright";
import path from "path";
import sharp from "sharp";
import fs from "fs";

const SITES = [
  {
    name: "rbv-bilvard",
    url: "https://rbv-bilvard.vercel.app/",
    localStorage: { "rbv-cookie-consent": "accepted" },
  },
  {
    name: "mastercuts",
    url: "https://mastercuts.se/",
    localStorage: { mc_hours_v1: "dismissed" },
  },
  {
    name: "mustasch",
    url: "https://mustasch.salon/",
  },
  {
    name: "ledigare",
    url: "https://www.ledigare.se/",
  },
];

const VIEWPORTS = [
  { name: "desktop-hero", width: 1440, height: 900, fullPage: false },
  { name: "desktop-full", width: 1440, height: 900, fullPage: true },
  { name: "tablet-hero", width: 768, height: 1024, fullPage: false },
  { name: "mobile-hero", width: 375, height: 812, fullPage: false },
];

const OUT_DIR = path.join(process.cwd(), "public", "projects");
const ORIG_DIR = path.join(OUT_DIR, "originals");

async function setLocalStorage(page: Page, items: Record<string, string>) {
  await page.evaluate((entries) => {
    for (const [key, value] of Object.entries(entries)) {
      localStorage.setItem(key, value);
    }
  }, items);
}

async function capture() {
  const browser = await chromium.launch({ headless: true });

  for (const site of SITES) {
    console.log(`\n📸 ${site.name}`);

    for (const vp of VIEWPORTS) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: 2,
      });
      const page = await context.newPage();

      try {
        // Navigate and set localStorage
        await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 30000 });
        if (site.localStorage) {
          await setLocalStorage(page, site.localStorage);
          await page.reload({ waitUntil: "networkidle", timeout: 30000 });
        } else {
          await page.waitForLoadState("networkidle").catch(() => {});
        }
        await page.waitForTimeout(3000);

        const filename = `${site.name}-${vp.name}.png`;
        const pngPath = path.join(ORIG_DIR, filename);

        await page.screenshot({
          path: pngPath,
          type: "png",
          fullPage: vp.fullPage,
        });

        // Convert to WebP
        const webpPath = path.join(OUT_DIR, filename.replace(".png", ".webp"));
        await sharp(pngPath)
          .webp({ quality: 90 })
          .toFile(webpPath);

        // Generate thumbnail (400px wide) for hero shots
        if (vp.name.includes("hero")) {
          const thumbPath = path.join(OUT_DIR, filename.replace(".png", "-thumb.webp"));
          await sharp(pngPath)
            .resize(400)
            .webp({ quality: 60 })
            .toFile(thumbPath);
        }

        const webpSize = fs.statSync(webpPath).size;
        const pngSize = fs.statSync(pngPath).size;
        const saved = Math.round((1 - webpSize / pngSize) * 100);
        console.log(`  ✓ ${vp.name} — ${(webpSize / 1024).toFixed(0)}KB (${saved}% smaller than PNG)`);
      } catch (err) {
        console.error(`  ✗ ${site.name}-${vp.name} failed:`, err);
      } finally {
        await context.close();
      }
    }
  }

  await browser.close();
  console.log("\n✅ All screenshots captured and optimized!");
}

capture();
