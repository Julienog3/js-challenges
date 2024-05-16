import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle('Note-taking App');
});

test('has text', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('coucou les gens', { exact: true })).toBeVisible();
});
