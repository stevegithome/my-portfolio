import { describe, expect, it } from 'vitest';

import { GET } from '../routes/robots.txt/+server';

describe('robots.txt', () => {
	it('includes the sitemap URL', async () => {
		const response = GET();
		const body = await response.text();

		expect(response.headers.get('content-type')).toContain('text/plain');
		expect(body).toContain('User-agent: *');
		expect(body).toContain('https://your-domain.example/sitemap.xml');
	});
});
