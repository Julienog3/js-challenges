import { expect } from '@playwright/test';

import { test } from './fixtures';

test('convert EUR to USD', async ({ page }) => {
	await page.goto('/');
	await page.getByTestId('value').fill('5')
	await expect(page.getByTestId('base-currency')).toBeVisible()
	await page.getByTestId('base-currency').selectOption('EUR');
	await page.getByTestId('target-currency').selectOption('USD');
	await page.getByTestId('submit-btn').click()
	await expect(page.getByTestId('result-label')).toHaveText('Le résultat est de 5.34 $')
});