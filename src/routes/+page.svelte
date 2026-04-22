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
		});
	});
</script>

<div bind:this={page} class="min-h-screen text-[var(--color-ink)]">
	<header class="sticky top-0 z-20 border-b border-[var(--color-border)] bg-white/88 backdrop-blur-xl">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
			<a href="#top" class="text-sm font-bold text-[var(--color-ink)]">
				{portfolio.site.name}
			</a>

			<nav aria-label="Primary" class="hidden gap-6 text-sm font-medium text-[var(--color-muted)] md:flex">
				<a class="transition hover:text-[var(--color-accent)]" href="#snapshot">Snapshot</a>
				<a class="transition hover:text-[var(--color-accent)]" href="#projects">Systems</a>
				<a class="transition hover:text-[var(--color-accent)]" href="#principles">Principles</a>
				<a class="transition hover:text-[var(--color-accent)]" href="#experience">Experience</a>
				<a class="transition hover:text-[var(--color-accent)]" href="#contact">Contact</a>
			</nav>
		</div>
	</header>

	<main id="top" class="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-14">
		<section class="rounded-lg border border-[var(--color-border)] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
			<div class="relative z-0 h-40 overflow-hidden rounded-t-lg bg-[var(--color-deep)] sm:h-52">
				<div class="absolute inset-0 grid grid-cols-[1.1fr_0.7fr_1fr] grid-rows-2 opacity-95">
					<div class="border-b border-r border-[#4d70d9]/70 bg-[#071b22]"></div>
					<div class="border-b border-r border-[#4d70d9]/70 bg-[#09252b]"></div>
					<div class="border-b border-[#4d70d9]/70 bg-[#071b22]"></div>
					<div class="border-r border-[#4d70d9]/70 bg-[#cf7e3e]"></div>
					<div class="border-r border-[#4d70d9]/70 bg-[#0b302d]"></div>
					<div class="bg-[#f7f0da]"></div>
				</div>
				<div class="absolute left-8 top-6 h-16 w-20 rounded-t-full border border-[#74b3a5]/70"></div>
				<div class="absolute left-[22%] top-8 h-20 w-20 rounded-full bg-[#f4c6dc]"></div>
				<div class="absolute left-[31%] top-10 h-16 w-28 rounded-full bg-[#f2d36f]"></div>
				<div class="absolute left-[43%] top-8 h-24 w-10 rounded-t-full bg-[#2f8fac]"></div>
				<div class="absolute left-[53%] top-7 h-24 w-40 rounded-b-full bg-[#f6d37a]"></div>
				<div class="absolute right-[22%] top-5 h-28 w-20 rounded-b-full bg-[#24845f]"></div>
				<div class="absolute right-10 top-7 h-24 w-16 rounded-full bg-white"></div>
			</div>

			<div class="relative z-10 px-6 pb-7 sm:px-9 sm:pb-9">
				<div class="-mt-14 flex flex-col gap-6 sm:-mt-16 lg:flex-row lg:items-end lg:justify-between">
					<div class="space-y-5">
						<div class="relative z-20 flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-[var(--color-surface-soft)] shadow-[0_8px_28px_rgba(15,23,42,0.18)] sm:h-32 sm:w-32">
							<span class="text-3xl font-bold text-[var(--color-accent-strong)] sm:text-4xl">SG</span>
						</div>

						<div class="space-y-3">
							<p
								data-reveal="eyebrow"
								class="text-sm font-semibold text-[var(--color-accent)]"
							>
								{portfolio.site.roleLabel}
							</p>
							<h1
								data-reveal="title"
								class="font-display max-w-4xl text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl"
							>
								{portfolio.site.intro}
							</h1>
							<p
								data-reveal="copy"
								class="max-w-3xl text-lg leading-8 text-[var(--color-ink)] sm:text-xl"
							>
								{portfolio.site.tagline}
							</p>
							<p class="text-sm font-medium text-[var(--color-muted)]">{portfolio.site.location}</p>
						</div>
					</div>

					<div data-reveal="actions" class="flex flex-wrap gap-3 lg:justify-end">
						<a
							class="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(10,102,194,0.22)] transition hover:bg-[var(--color-accent-strong)]"
							href="#projects"
						>
							{portfolio.site.primaryCtas.work}
						</a>
						<a
							class="rounded-full border border-[var(--color-accent)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-accent)] transition hover:bg-[var(--color-surface-soft)]"
							href="#contact"
						>
							{portfolio.site.primaryCtas.contact}
						</a>
					</div>
				</div>

				<div class="mt-8 flex flex-wrap gap-2">
					{#each portfolio.geo.expertiseLabels as label}
						<span
							data-reveal="panel"
							class="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)]"
						>
							{label}
						</span>
					{/each}
				</div>
			</div>
		</section>

		<section id="snapshot" class="grid gap-6 lg:grid-cols-3">
			<div data-reveal="panel" class="rounded-lg border border-[var(--color-border)] bg-white p-6 shadow-[0_10px_32px_rgba(15,23,42,0.05)]">
				<p class="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-warm)]">
					Profile Snapshot
				</p>
				<p class="mt-4 text-base leading-8 text-[var(--color-muted)]">
					{portfolio.geo.summaryVariants[0]}
				</p>
			</div>
			<div data-reveal="panel" class="rounded-lg border border-[var(--color-border)] bg-white p-6 shadow-[0_10px_32px_rgba(15,23,42,0.05)]">
				<p class="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-warm)]">
					Best Fit
				</p>
				<p class="mt-4 text-base leading-8 text-[var(--color-muted)]">
					{portfolio.site.availability}
				</p>
			</div>
			<div data-reveal="panel" class="rounded-lg border border-[var(--color-border)] bg-white p-6 shadow-[0_10px_32px_rgba(15,23,42,0.05)]">
				<p class="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-warm)]">
					Find Me On
				</p>
				<div class="mt-5 flex flex-wrap gap-3">
					{#each portfolio.site.socialLinks as link}
						<a
							class="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-accent)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-soft)]"
							href={link.url}
							target="_blank"
							rel="noreferrer"
						>
							{link.label}
						</a>
					{/each}
				</div>
			</div>
		</section>

		<section id="projects" class="space-y-8">
			<SectionHeading
				eyebrow="Selected Growth Systems"
				title="Operating systems for monetization, lifecycle, experimentation, and GTM decisions."
				copy="A concise view of the problems I help teams structure, measure, and move through with confidence."
			/>

			<div class="space-y-5">
				{#each featuredProjects as project}
					<ProjectCard {project} />
				{/each}
			</div>
		</section>

		<section id="principles" class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)] lg:items-start">
			<SectionHeading
				eyebrow="Operating Principles"
				title="Clearer decisions, stronger systems, and growth that keeps customer trust in view."
				copy={portfolio.about.narrative}
			/>

			<div class="space-y-5">
				<div class="rounded-lg border border-[var(--color-border)] bg-white p-6 shadow-[0_10px_32px_rgba(15,23,42,0.05)]">
					<p class="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-warm)]">
						Principles
					</p>
					<ul class="mt-5 space-y-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
						{#each portfolio.about.principles as principle}
							<li class="flex gap-3">
								<span class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"></span>
								<span>{principle}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div class="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-6">
					<p class="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-warm)]">
						Working Style
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

		<section id="experience" class="space-y-8">
			<SectionHeading
				eyebrow="Experience"
				title="A career through-line of growth, product marketing, lifecycle systems, and executive-ready communication."
				copy={portfolio.geo.summaryVariants[1]}
			/>

			<div class="grid gap-6 lg:grid-cols-2">
				{#each portfolio.experience as item}
					<ExperienceCard {item} />
				{/each}
			</div>
		</section>

		<section id="faq" class="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
			<SectionHeading
				eyebrow="Working With Me"
				title="Direct answers for hiring teams, collaborators, and search systems."
				copy="Plain-language signals for how I work, what I build, and where I add value."
			/>

			<div class="space-y-4">
				{#each portfolio.geo.faq as item}
					<details class="group rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
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

		<section id="contact" class="rounded-lg border border-[var(--color-border)] bg-white p-8 shadow-[0_18px_54px_rgba(15,23,42,0.07)] sm:p-10">
			<div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)] lg:items-end">
				<div class="space-y-5">
					<p class="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-warm)]">
						Contact
					</p>
					<h2 class="font-display max-w-2xl text-3xl font-bold leading-tight text-balance sm:text-4xl">
						If your team needs clearer growth decisions and stronger lifecycle systems, let’s talk.
					</h2>
					<p class="max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
						{portfolio.contact.availabilityNote}
					</p>
				</div>

				<div class="space-y-4">
					{#each portfolio.contact.links as link}
						<a
							class={`flex items-center justify-between rounded-full px-5 py-4 text-sm font-semibold transition ${
								link.emphasis === 'primary'
									? 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-strong)]'
									: 'border border-[var(--color-border)] bg-white text-[var(--color-accent)] hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-soft)]'
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
