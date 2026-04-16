import { portfolio } from '$lib/content/portfolio';
import { resolveSiteUrl } from '$lib/seo';

export const prerender = true;

export function GET() {
	const body = [
		'User-agent: *',
		'Allow: /',
		`Sitemap: ${resolveSiteUrl(portfolio.seo.canonicalUrl, 'sitemap.xml')}`
	].join('\n');

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	});
}
