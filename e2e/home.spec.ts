import { expect, test } from '@playwright/test';

test('homepage smoke test', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveTitle(/Steve Garza/);
	await expect(page.getByRole('heading', { name: /Selected Work/i })).toBeVisible();
	await expect(page.getByRole('heading', { name: /About/i })).toBeVisible();
	await expect(page.getByRole('heading', { name: /Experience/i })).toBeVisible();
	await expect(page.getByRole('heading', { name: /Contact/i })).toBeVisible();
	await expect(page.getByRole('link', { name: /View Growth Work/i })).toHaveAttribute(
		'href',
		'#projects'
	);
	await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
	await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
		'href',
		'https://stevegithome.github.io/my-portfolio/'
	);
});
