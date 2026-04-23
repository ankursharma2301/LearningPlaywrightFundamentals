import { chromium } from '@playwright/test';

async function run() {
    const browser = await chromium.launch({ headless: false });

    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto('https://google.com');

    const page2 = await context.newPage();
    await page2.goto('https://github.com');

    await browser.close();
}

run();