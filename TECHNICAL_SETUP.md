# Technical Setup

This repository is a static SvelteKit portfolio tuned for clear storytelling, GitHub Pages deployment, and reliable validation in CI.

## Stack

- Node 22
- SvelteKit 2
- Svelte 5
- `@sveltejs/adapter-static`
- Tailwind CSS 4
- GSAP
- Zod
- Vitest
- Playwright
- Vite
- npm
- VS Code Dev Containers
- GitHub Pages deployment through GitHub Actions

## What This Site Is Optimized For

- static portfolio delivery
- semantic, crawlable content for SEO and GEO
- lightweight motion with reduced-motion support
- strongly typed content updates
- CI that catches content, metadata, rendering, and build regressions before deploy

This repository is not intended for:

- server-side hosting
- backend APIs
- form processing on the server
- production Docker hosting

## Content Validation Design

Portfolio content is validated with Zod before it is rendered.

- [src/lib/content/portfolio.ts](/workspaces/my-portfolio/src/lib/content/portfolio.ts) is the editable source of truth.
- [src/lib/content/portfolio-schema.ts](/workspaces/my-portfolio/src/lib/content/portfolio-schema.ts) defines the required structure.
- SEO metadata, structured data, `robots.txt`, and `sitemap.xml` all depend on the validated content object.

This means missing fields, malformed URLs, or incomplete SEO settings fail during tests or builds instead of slipping into production.

## SEO And GEO Implementation Notes

- [src/lib/seo.ts](/workspaces/my-portfolio/src/lib/seo.ts) centralizes canonical URL handling, metadata, and JSON-LD generation.
- [src/routes/+layout.svelte](/workspaces/my-portfolio/src/routes/+layout.svelte) applies the global metadata tags.
- [src/routes/robots.txt/+server.ts](/workspaces/my-portfolio/src/routes/robots.txt/+server.ts) and [src/routes/sitemap.xml/+server.ts](/workspaces/my-portfolio/src/routes/sitemap.xml/+server.ts) generate crawl files at build time.
- GEO-oriented copy is intentionally placed in readable sections such as project summaries and FAQ content so both people and AI-assisted search systems can interpret the page reliably.

## GSAP Integration

GSAP is installed as a runtime dependency and wrapped in a small helper:

```ts
import { withGsapContext } from '$lib';
```

The helper:

- runs only in the browser
- respects `prefers-reduced-motion`
- scopes selectors to the current component root
- reverts the GSAP context automatically when the component unmounts

## Validation And Testing

Expected local validation flow:

```sh
npm run check
npm run test:unit
npm run build
```

Playwright smoke tests require Chromium:

```sh
npx playwright install chromium
npm run test:e2e
```

## Windows Host File Watching

When the Dev Container runs on a Windows host, the project files are bind-mounted from Windows into Linux. Linux does not receive the same file change notifications in that setup, so Vite may miss updates unless polling is enabled.

This repository detects a Windows host through `HOST_OS` and enables polling only when needed:

```ts
const usePolling = process.env.HOST_OS === 'Windows_NT';
watch: usePolling ? { usePolling: true, interval: 100 } : undefined;
```

## Dev Container Expectations

The Dev Container should:

- build from the root `Dockerfile`
- use the `dev` target
- run as the `node` user
- install dependencies with `npm install`
- start the local dev server automatically
- forward the SvelteKit development port in VS Code

VS Code Dev Containers already handle Git configuration reuse, so there is no need to mount `.gitconfig` manually.
