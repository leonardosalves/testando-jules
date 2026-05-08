import { test, expect } from '@playwright/test';
import path from 'path';

test('check logo size', async ({ page }) => {
  const filePath = `file://${path.resolve('index.html')}`;
  await page.goto(filePath);

  const logo = page.locator('.logo-image');
  await expect(logo).toBeVisible();

  const box = await logo.boundingBox();
  console.log('Logo dimensions:', box);

  await page.screenshot({ path: 'screenshot_desktop.png' });

  await page.setViewportSize({ width: 375, height: 667 });
  await page.screenshot({ path: 'screenshot_mobile.png' });

  const boxMobile = await logo.boundingBox();
  console.log('Logo dimensions mobile:', boxMobile);
});
