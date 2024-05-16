import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle('Convertisseur de devise en ligne');
});

test('has heading', async ({ page }) => {
	await page.goto('/');

	// Expects page to have a heading with the name of Installation.
	await expect(page.getByRole('heading', { name: 'Hello World!' })).toBeVisible();
});
