<script lang="ts">
	import type { PortfolioProject } from '$lib/content/portfolio-schema';

	let { project }: { project: PortfolioProject } = $props();
</script>

<article
	class="group rounded-[2rem] border border-[var(--color-border)] bg-white/88 p-7 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur"
>
	<div class="flex flex-wrap items-start justify-between gap-4">
		<div class="space-y-3">
			<p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
				Featured project
			</p>
			<h3 class="font-display text-2xl text-[var(--color-ink)]">{project.title}</h3>
			<p class="max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
				{project.summary}
			</p>
		</div>

		<p class="rounded-full border border-[var(--color-border)] px-4 py-2 text-xs font-medium text-[var(--color-muted)]">
			{project.role}
		</p>
	</div>

	<div class="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
		<div class="space-y-5">
			<div>
				<p class="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)]">
					Context
				</p>
				<p class="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
					{project.context}
				</p>
			</div>

			<div>
				<p class="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)]">
					What changed
				</p>
				<ul class="mt-3 space-y-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
					{#each project.impact as item}
						<li class="flex gap-3">
							<span class="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]"></span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="space-y-5 rounded-[1.5rem] bg-[var(--color-surface-soft)] p-5">
			<div>
				<p class="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)]">
					Stack
				</p>
				<div class="mt-3 flex flex-wrap gap-2">
					{#each project.stack as item}
						<span
							class="rounded-full bg-white px-3 py-2 text-xs font-medium text-[var(--color-ink)] shadow-[inset_0_0_0_1px_var(--color-border)]"
						>
							{item}
						</span>
					{/each}
				</div>
			</div>

			<div>
				<p class="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)]">
					Links
				</p>
				<div class="mt-3 flex flex-wrap gap-3">
					{#each project.links as link}
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
</article>
