import { describe, expect, it } from 'vitest';

import { GET } from '../routes/sitemap.xml/+server';

describe('sitemap.xml', () => {
	it('renders the canonical site URL', async () => {
		const response = GET();
		const body = await response.text();

		expect(response.headers.get('content-type')).toContain('application/xml');
		expect(body).toContain('<loc>https://your-domain.example/</loc>');
	});
});
