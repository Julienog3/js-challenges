import { expect } from '@playwright/test';

import { test } from './fixtures';

test('has title', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByTestId('base-currency')).toBeVisible()
	// await page.waitForResponse('https://api.freecurrencyapi.com/v1/currencies*');
	await expect(page).toHaveTitle('Convertisseur de devise en ligne');
});