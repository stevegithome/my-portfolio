import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

describe('portfolio homepage route', () => {
	it('includes the required sections and anchor targets', () => {
		const testDir = dirname(fileURLToPath(import.meta.url));
		const source = readFileSync(resolve(testDir, '../routes/+page.svelte'), 'utf8');

		expect(source).toContain('id="snapshot"');
		expect(source).toContain('id="projects"');
		expect(source).toContain('id="principles"');
		expect(source).toContain('id="experience"');
		expect(source).toContain('id="contact"');
		expect(source).toContain('{portfolio.site.primaryCtas.work}');
		expect(source).toContain('{portfolio.site.primaryCtas.contact}');
	});
});
