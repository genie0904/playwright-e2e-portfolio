import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('buy milk');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('study playwright');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByText('study playwright').click();
  await page.getByText('study playwright').click();
  await page.getByText('study playwright').click();
  await page.getByRole('listitem').filter({ hasText: 'study playwright' }).getByLabel('Toggle Todo').check();
  await page.getByRole('listitem').filter({ hasText: 'study playwright' }).getByLabel('Toggle Todo').uncheck();
  await page.getByRole('listitem').filter({ hasText: 'buy milk' }).getByLabel('Toggle Todo').check();
});