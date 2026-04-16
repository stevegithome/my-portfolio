import type { PortfolioContent } from '$lib/content/portfolio-schema';

export function resolveSiteUrl(canonicalUrl: string, path = '') {
	if (!path) {
		return canonicalUrl;
	}

	const site = new URL(canonicalUrl);
	const normalizedBase = site.pathname.endsWith('/') ? site.pathname : `${site.pathname}/`;
	const normalizedPath = path.replace(/^\/+/, '');

	return new URL(normalizedPath, `${site.origin}${normalizedBase}`).toString();
}

export function buildSiteMetadata(content: PortfolioContent) {
	return {
		title: content.seo.title,
		description: content.seo.description,
		canonical: content.seo.canonicalUrl,
		robots: content.seo.robots,
		keywords: [...content.geo.topicPhrases, ...content.geo.expertiseLabels].join(', '),
		imageUrl: resolveSiteUrl(content.seo.canonicalUrl, content.seo.socialImage)
	};
}

export function buildStructuredData(content: PortfolioContent) {
	const websiteUrl = content.seo.canonicalUrl;

	return [
		{
			'@context': 'https://schema.org',
			'@type': 'Person',
			name: content.site.name,
			jobTitle: content.site.roleLabel,
			description: content.seo.description,
			url: websiteUrl,
			email: content.contact.email,
			address: {
				'@type': 'PostalAddress',
				addressCountry: 'US'
			},
			knowsAbout: content.geo.topicPhrases,
			sameAs: content.site.socialLinks.map((link) => link.url)
		},
		{
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			name: `${content.site.name} Portfolio`,
			url: websiteUrl,
			description: content.seo.description,
			keywords: content.geo.expertiseLabels.join(', ')
		},
		{
			'@context': 'https://schema.org',
			'@type': 'ItemList',
			name: 'Selected projects',
			itemListElement: content.projects.map((project, index) => ({
				'@type': 'CreativeWork',
				position: index + 1,
				name: project.title,
				description: project.summary,
				about: project.stack,
				url: project.links[0]?.url
			}))
		}
	];
}
