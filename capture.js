#!/usr/bin/env node
/**
 * Captures full-page mobile screenshots of each portfolio URL.
 * Saves to assets/screenshots/<slug>.png
 */

const puppeteer = require('/Users/marcinmleczko/.claude/skills/page-reviewer/node_modules/puppeteer');
const path = require('path');
const fs = require('fs');

const PAGES = [
  { slug: 'forbes',         url: 'https://www.forbes.com/health/l/uniform-glp-1-meds-listicle/' },
  { slug: 'ella',           url: 'https://www.healthdailyreview.com/pages/ella-mock-up' },
  { slug: 'caraway',        url: 'https://www.healthdailyreview.com/pages/caraway-bakeware-v2?pb=0' },
  { slug: 'arq8-listicle',  url: 'https://www.healthdailyreview.com/pages/arq8_updated_listicle?pb=0' },
  { slug: 'arq8-longform',  url: 'https://www.healthdailyreview.com/pages/arq8_updated_longform' },
  { slug: 'audien',         url: 'https://www.healthdailyreview.com/pages/audien-v-5?pb=0' },
  { slug: 'nirapet',        url: 'https://nirapet.com/pages/6-reasons-why-the-only-itch-product' },
  { slug: 'longevity',      url: 'https://www.healthdailyreview.com/pages/longevity-review' },
];

const OUT_DIR = path.join(__dirname, 'assets', 'screenshots');
fs.mkdirSync(OUT_DIR, { recursive: true });

// Cap page height so we don't get absurdly tall images
const MAX_HEIGHT = 7000;

async function capture(browser, { slug, url }) {
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1');

  console.log(`[${slug}] loading ${url}`);
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 });
  } catch (e) {
    console.log(`[${slug}] nav timeout, continuing`);
  }

  // Trigger lazy load
  await page.evaluate(async () => {
    const step = 600;
    const total = Math.min(document.body.scrollHeight, 10000);
    for (let y = 0; y < total; y += step) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
    await new Promise(r => setTimeout(r, 500));
  });

  // Dismiss any overlays/cookie banners by pressing Escape
  await page.keyboard.press('Escape').catch(() => {});
  await new Promise(r => setTimeout(r, 500));

  const height = await page.evaluate(() => Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  ));

  const clipHeight = Math.min(height, MAX_HEIGHT);
  const outPath = path.join(OUT_DIR, `${slug}.png`);

  await page.screenshot({
    path: outPath,
    type: 'png',
    clip: { x: 0, y: 0, width: 390, height: clipHeight },
  });

  console.log(`[${slug}] saved ${outPath} (${clipHeight}px)`);
  await page.close();
}

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  for (const p of PAGES) {
    try {
      await capture(browser, p);
    } catch (e) {
      console.error(`[${p.slug}] FAILED:`, e.message);
    }
  }

  await browser.close();
  console.log('Done.');
})();
