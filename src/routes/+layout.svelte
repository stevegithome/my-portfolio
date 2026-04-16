<script lang="ts">
	import { base } from '$app/paths';
	import './layout.css';
	import { portfolio } from '$lib/content/portfolio';
	import { buildSiteMetadata, buildStructuredData } from '$lib/seo';

	let { children } = $props();
	const metadata = buildSiteMetadata(portfolio);
	const structuredData = JSON.stringify(buildStructuredData(portfolio));
	const faviconHref = `${base}/favicon.svg`;
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta name="description" content={metadata.description} />
	<meta name="keywords" content={metadata.keywords} />
	<meta name="robots" content={metadata.robots} />
	<meta name="author" content={portfolio.site.name} />
	<meta name="theme-color" content="#f3ede5" />
	<link rel="canonical" href={metadata.canonical} />
	<link rel="icon" href={faviconHref} />
	<meta property="og:title" content={metadata.title} />
	<meta property="og:description" content={metadata.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={metadata.canonical} />
	<meta property="og:image" content={metadata.imageUrl} />
	<meta property="og:site_name" content={portfolio.site.name} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={metadata.title} />
	<meta name="twitter:description" content={metadata.description} />
	<meta name="twitter:image" content={metadata.imageUrl} />
	<script type="application/ld+json">{structuredData}</script>
</svelte:head>

{@render children()}
