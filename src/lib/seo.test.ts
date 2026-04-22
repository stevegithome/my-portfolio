import { describe, expect, it } from 'vitest';

import { portfolio } from '$lib/content/portfolio';

import { buildSiteMetadata, buildStructuredData, resolveSiteUrl } from './seo';

describe('seo helpers', () => {
	it('builds metadata from portfolio content', () => {
		const metadata = buildSiteMetadata(portfolio);

		expect(metadata.title).toContain(portfolio.site.name);
		expect(metadata.imageUrl).toBe('https://stevegithome.github.io/my-portfolio/social-card.svg');
	});

	it('resolves asset URLs relative to the canonical site root', () => {
		expect(resolveSiteUrl('https://example.com/work/', '/social-card.svg')).toBe(
			'https://example.com/work/social-card.svg'
		);
	});

	it('includes person and project structured data', () => {
		const data = buildStructuredData(portfolio);

		expect(data[0]).toMatchObject({
			'@type': 'Person',
			name: portfolio.site.name
		});
		expect(data[0]).not.toHaveProperty('email');
		expect(data[2]).toMatchObject({
			'@type': 'ItemList'
		});
	});
});
