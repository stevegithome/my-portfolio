<script lang="ts">
	import { onMount } from 'svelte';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { withGsapContext } from '$lib';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let page: HTMLElement | undefined;
	const portfolio = $derived.by(() => data.portfolio);
	const featuredProjects = $derived.by(() => portfolio.projects.filter((project) => project.featured));

	onMount(() => {
		if (!page) {
			return;
		}

		return withGsapContext(page, (gsap) => {
			gsap.set('[data-reveal]', { y: 28, opacity: 0 });

			gsap
				.timeline({ defaults: { ease: 'power2.out' } })
				.to('[data-reveal="eyebrow"]', { y: 0, opacity: 1, duration: 0.45 })
				.to('[data-reveal="title"]', { y: 0, opacity: 1, duration: 0.7 }, '-=0.15')
				.to('[data-reveal="copy"]', { y: 0, opacity: 1, duration: 0.55 }, '-=0.3')
				.to('[data-reveal="actions"]', { y: 0, opacity: 1, duration: 0.45 }, '-=0.25')
				.to('[data-reveal="panel"]', { y: 0, opacity: 1, duration: 0.55, stagger: 0.08 }, '-=0.25');

			gsap.to('.js-orbit', {
				y: -16,
				x: 12,
				duration: 5.4,
				ease: 'sine.inOut',
				repeat: -1,
				yoyo: true
			});

			gsap.to('.js-shimmer', {
				opacity: 0.45,
				scale: 1.08,
				duration: 2.2,
				ease: 'sine.inOut',
				repeat: -1,
				yoyo: true
			});
		});
	});
</script>

<div bind:this={page} class="min-h-screen text-[var(--color-ink)]">
	<header class="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[color:var(--color-bg)/0.78] backdrop-blur">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
			<a href="#top" class="text-sm font-semibold uppercase tracking-[0.18em]">
				{portfolio.site.name}
			</a>

			<nav aria-label="Primary" class="hidden gap-6 text-sm text-[var(--color-muted)] md:flex">
				<a class="transition hover:text-[var(--color-ink)]" href="#projects">Projects</a>
				<a class="transition hover:text-[var(--color-ink)]" href="#about">About</a>
				<a class="transition hover:text-[var(--color-ink)]" href="#experience">Experience</a>
				<a class="transition hover:text-[var(--color-ink)]" href="#contact">Contact</a>
			</nav>
		</div>
	</header>

	<main id="top" class="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-18">
		<section class="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:items-end">
			<div class="space-y-8">
				<div class="space-y-5">
					<p
						data-reveal="eyebrow"
						class="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-strong)]"
					>
						{portfolio.site.roleLabel}
					</p>
					<h1
						data-reveal="title"
						class="font-display max-w-4xl text-5xl leading-[0.95] text-balance sm:text-6xl lg:text-7xl"
					>
						{portfolio.site.intro}
					</h1>
					<p
						data-reveal="copy"
						class="max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl"
					>
						{portfolio.site.tagline}
					</p>
				</div>

				<div data-reveal="actions" class="flex flex-wrap gap-4">
					<a
						class="rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
						href="#projects"
					>
						{portfolio.site.primaryCtas.work}
					</a>
					<a
						class="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
						href="#contact"
					>
						{portfolio.site.primaryCtas.contact}
					</a>
				</div>

				<div class="grid gap-4 sm:grid-cols-3">
					<div data-reveal="panel" class="rounded-[1.5rem] border border-[var(--color-border)] bg-white/80 p-5">
						<p class="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
							Audience
						</p>
						<p class="mt-3 text-sm leading-7 text-[var(--color-muted)]">
							Built to help hiring teams understand what I do and how I think within minutes.
						</p>
					</div>
					<div data-reveal="panel" class="rounded-[1.5rem] border border-[var(--color-border)] bg-white/80 p-5">
						<p class="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
							Location
						</p>
						<p class="mt-3 text-sm leading-7 text-[var(--color-muted)]">{portfolio.site.location}</p>
					</div>
					<div data-reveal="panel" class="rounded-[1.5rem] border border-[var(--color-border)] bg-white/80 p-5">
						<p class="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
							Availability
						</p>
						<p class="mt-3 text-sm leading-7 text-[var(--color-muted)]">
							{portfolio.site.availability}
						</p>
					</div>
				</div>
			</div>

			<div
				data-reveal="panel"
				class="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(236,228,219,0.88))] p-7 shadow-[0_30px_100px_rgba(15,23,42,0.08)]"
			>
				<div class="js-shimmer absolute right-6 top-6 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(209,123,68,0.34),transparent_70%)]"></div>
				<div class="js-orbit absolute -right-8 bottom-6 h-36 w-36 rounded-full border border-white/70 bg-[radial-gradient(circle,rgba(255,255,255,0.92),rgba(255,255,255,0.2))] blur-[1px]"></div>

				<div class="relative space-y-8">
					<div>
						<p class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
							What I bring
						</p>
						<p class="mt-4 max-w-sm text-base leading-8 text-[var(--color-muted)]">
							{portfolio.geo.summaryVariants[0]}
						</p>
					</div>

					<div class="grid gap-4 sm:grid-cols-2">
						{#each portfolio.geo.expertiseLabels as label}
							<div class="rounded-[1.25rem] bg-white/80 px-4 py-4 shadow-[inset_0_0_0_1px_var(--color-border)]">
								<p class="text-sm font-medium text-[var(--color-ink)]">{label}</p>
							</div>
						{/each}
					</div>

					<div class="border-t border-[var(--color-border)] pt-6">
						<p class="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)]">
							Find me on
						</p>
						<div class="mt-4 flex flex-wrap gap-3">
							{#each portfolio.site.socialLinks as link}
								<a
									class="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
									href={link.url}
									target="_blank"
									rel="noreferrer"
								>
									{link.label}
								</a>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="projects" class="space-y-10">
			<SectionHeading
				eyebrow="Selected Work"
				title="A few examples of how I turn growth work into clearer operating systems."
				copy="Each project is written at a deliberately high level: the problem pattern, the role I played, and the kind of decision system the team could build on."
			/>

			<div class="space-y-8">
				{#each featuredProjects as project}
					<ProjectCard {project} />
				{/each}
			</div>
		</section>

		<section id="about" class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)] lg:items-start">
			<SectionHeading
				eyebrow="About"
				title="I like making complex growth work easier to understand and easier to act on."
				copy={portfolio.about.narrative}
			/>

			<div class="space-y-5">
				<div class="rounded-[1.75rem] border border-[var(--color-border)] bg-white/88 p-6 shadow-[0_16px_48px_rgba(15,23,42,0.06)]">
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
						Principles
					</p>
					<ul class="mt-5 space-y-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
						{#each portfolio.about.principles as principle}
							<li class="flex gap-3">
								<span class="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]"></span>
								<span>{principle}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div class="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-6">
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
						Personality
					</p>
					<div class="mt-5 space-y-4">
						{#each portfolio.about.personality as item}
							<div>
								<p class="text-sm font-semibold text-[var(--color-ink)]">{item.label}</p>
								<p class="mt-1 text-sm leading-7 text-[var(--color-muted)]">{item.detail}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</section>

		<section id="experience" class="space-y-10">
			<SectionHeading
				eyebrow="Experience"
				title="The through-line in my work is creating confidence for teams making growth decisions."
				copy={portfolio.geo.summaryVariants[1]}
			/>

			<div class="grid gap-6 lg:grid-cols-2">
				{#each portfolio.experience as item}
					<ExperienceCard {item} />
				{/each}
			</div>
		</section>

		<section id="faq" class="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
			<SectionHeading
				eyebrow="Working With Me"
				title="Direct answers to the kinds of questions recruiters and AI search tools tend to look for."
				copy="This section is intentionally plain-language. It gives both people and search systems a clear read on how I work, what I build, and where I add value."
			/>

			<div class="space-y-4">
				{#each portfolio.geo.faq as item}
					<details class="group rounded-[1.5rem] border border-[var(--color-border)] bg-white/88 p-5">
						<summary class="cursor-pointer list-none text-base font-semibold text-[var(--color-ink)]">
							{item.question}
						</summary>
						<p class="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
							{item.answer}
						</p>
					</details>
				{/each}
			</div>
		</section>

		<section id="contact" class="rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(232,222,212,0.95))] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-10">
			<div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)] lg:items-end">
				<div class="space-y-5">
					<p class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-strong)]">
						Contact
					</p>
					<h2 class="font-display max-w-2xl text-4xl leading-tight text-balance sm:text-5xl">
						If your team needs clearer growth decisions and stronger lifecycle systems, let’s talk.
					</h2>
					<p class="max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
						{portfolio.contact.availabilityNote}
					</p>
				</div>

				<div class="space-y-4">
					{#each portfolio.contact.links as link}
						<a
							class={`flex items-center justify-between rounded-[1.25rem] px-5 py-4 text-sm font-semibold transition ${
								link.emphasis === 'primary'
									? 'bg-[var(--color-ink)] text-white hover:bg-[var(--color-accent-strong)]'
									: 'border border-[var(--color-border)] bg-white/86 text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]'
							}`}
							href={link.url}
							target="_blank"
							rel="noreferrer"
						>
							<span>{link.label}</span>
							<span aria-hidden="true">→</span>
						</a>
					{/each}
				</div>
			</div>
		</section>
	</main>
</div>
