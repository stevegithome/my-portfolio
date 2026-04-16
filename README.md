# Portfolio Site

This repository contains a static portfolio built with SvelteKit, TypeScript, Tailwind CSS 4, and GSAP. It is designed for GitHub Pages deployment and centers on one editable content source so site copy, SEO metadata, structured data, sitemap output, and UI sections stay aligned.

## Stack

- SvelteKit 2 with `@sveltejs/adapter-static`
- Svelte 5 and TypeScript
- Tailwind CSS 4
- GSAP for restrained motion
- Zod for content validation
- Vitest + Testing Library for unit and component tests
- Playwright for end-to-end smoke coverage
- GitHub Actions for CI and GitHub Pages deployment

## Where To Edit Content

The main portfolio content lives in [src/lib/content/portfolio.ts](/workspaces/my-portfolio/src/lib/content/portfolio.ts). Update that file to change:

- your name, intro, and positioning
- featured projects and experience
- contact links
- SEO fields like title, description, canonical URL, and social image
- GEO-focused content such as expertise labels, summary variants, and FAQ copy

The schema that validates this content lives in [src/lib/content/portfolio-schema.ts](/workspaces/my-portfolio/src/lib/content/portfolio-schema.ts).

## Local Development

```sh
npm install
npm run dev
```

Default validation flow:

```sh
npm run check
npm run test:unit
npm run build
```

End-to-end smoke test:

```sh
npx playwright install chromium
npm run test:e2e
```

## SEO And GEO Notes

- Global metadata and JSON-LD are generated in [src/routes/+layout.svelte](/workspaces/my-portfolio/src/routes/+layout.svelte) with helpers from [src/lib/seo.ts](/workspaces/my-portfolio/src/lib/seo.ts).
- `robots.txt` and `sitemap.xml` are generated from portfolio content so they stay consistent with the canonical URL.
- GEO support is handled through clear, structured copy in the hero, projects, and FAQ-style section so both people and AI-assisted search tools can extract the right information quickly.

Before launch, replace placeholder values in `portfolio.ts`, especially:

- `seo.canonicalUrl`
- social and resume links
- email address
- any assumed project content

## Deployment

The site is configured for static deployment on GitHub Pages.

- CI runs type checks, unit tests, build validation, and Playwright smoke tests.
- The deploy workflow rebuilds the site after validation-oriented checks and publishes the `build` directory to GitHub Pages.
- `BASE_PATH` is still handled automatically for project pages versus user pages.

## Docker And Dev Container Helpers

If you want to use the existing container helpers directly:

```sh
npm run docker:dev:build
npm run docker:dev:run
```

## Troubleshooting

- If Playwright tests fail locally, install Chromium with `npx playwright install chromium`.
- If hot reload stops working inside a Dev Container on Windows, rebuild the container so the Vite polling configuration is reapplied.
- If content validation fails, start with `src/lib/content/portfolio.ts` and make sure every required field matches the schema.

More environment details are in [TECHNICAL_SETUP.md](./TECHNICAL_SETUP.md).
