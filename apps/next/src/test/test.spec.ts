import { test } from "@playwright/test";

test("Can run a test", async ({ page }) => {
  await page.goto("http://localhost:3000");
});
