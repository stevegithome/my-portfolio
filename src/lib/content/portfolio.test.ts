import { describe, expect, it } from 'vitest';

import { getFeaturedProjects, portfolio } from './portfolio';
import { portfolioSchema } from './portfolio-schema';

describe('portfolio content', () => {
	it('matches the content schema', () => {
		expect(() => portfolioSchema.parse(portfolio)).not.toThrow();
	});

	it('keeps three featured projects for the homepage', () => {
		expect(getFeaturedProjects()).toHaveLength(3);
	});

	it('uses a canonical URL with https', () => {
		expect(new URL(portfolio.seo.canonicalUrl).protocol).toBe('https:');
	});
});
