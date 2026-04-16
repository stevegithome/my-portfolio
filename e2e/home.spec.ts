import { expect, test } from '@playwright/test';

test('homepage smoke test', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveTitle(/Your Name/);
	await expect(page.getByRole('heading', { name: /Selected Work/i })).toBeVisible();
	await expect(page.getByRole('heading', { name: /About/i })).toBeVisible();
	await expect(page.getByRole('heading', { name: /Experience/i })).toBeVisible();
	await expect(page.getByRole('heading', { name: /Contact/i })).toBeVisible();
	await expect(page.getByRole('link', { name: /View Projects/i })).toHaveAttribute(
		'href',
		'#projects'
	);
	await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
		'href',
		'https://your-domain.example/'
	);
});
