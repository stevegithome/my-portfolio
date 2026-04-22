import { expect, test } from '@playwright/test';

test('homepage smoke test', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveTitle(/Steve Garza/);
	await expect(page.getByRole('heading', { name: /Operating systems for monetization/i })).toBeVisible();
	await expect(page.getByRole('heading', { name: /Clearer decisions, stronger systems/i })).toBeVisible();
	await expect(
		page.getByRole('heading', { name: /career through-line of growth/i })
	).toBeVisible();
	await expect(page.getByRole('heading', { name: /Direct answers for hiring teams/i })).toBeVisible();
	await expect(page.getByRole('link', { name: /View Work/i })).toHaveAttribute(
		'href',
		'#projects'
	);
	await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
	await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
		'href',
		'https://stevegithome.github.io/my-portfolio/'
	);
});
