<script lang="ts">
	import type { PortfolioProject } from '$lib/content/portfolio-schema';

	let { project }: { project: PortfolioProject } = $props();
</script>

<article
	class="group rounded-lg border border-[var(--color-border)] bg-white p-6 shadow-[0_10px_32px_rgba(15,23,42,0.05)] transition hover:border-[rgba(10,102,194,0.28)] hover:shadow-[0_16px_44px_rgba(15,23,42,0.08)] sm:p-7"
>
	<div class="flex flex-wrap items-start justify-between gap-4">
		<div class="space-y-3">
			<p class="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-warm)]">
				Growth system
			</p>
			<h3 class="font-display text-2xl font-bold text-[var(--color-ink)]">{project.title}</h3>
			<p class="max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
				{project.summary}
			</p>
		</div>

		<p class="rounded-full bg-[var(--color-surface-soft)] px-4 py-2 text-xs font-semibold text-[var(--color-accent-strong)]">
			{project.role}
		</p>
	</div>

	<div class="mt-7 grid gap-7 border-t border-[var(--color-border)] pt-7 lg:grid-cols-[1.2fr_0.8fr]">
		<div class="space-y-5">
			<div>
				<p class="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-ink)]">
					Context
				</p>
				<p class="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
					{project.context}
				</p>
			</div>

			<div>
				<p class="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-ink)]">
					What changed
				</p>
				<ul class="mt-3 space-y-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
					{#each project.impact as item}
						<li class="flex gap-3">
							<span class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"></span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="space-y-5 rounded-lg bg-[var(--color-surface-soft)] p-5">
			<div>
				<p class="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-ink)]">
					Signals
				</p>
				<div class="mt-3 flex flex-wrap gap-2">
					{#each project.stack as item}
						<span
							class="rounded-full bg-white px-3 py-2 text-xs font-semibold text-[var(--color-ink)] shadow-[inset_0_0_0_1px_var(--color-border)]"
						>
							{item}
						</span>
					{/each}
				</div>
			</div>

			<div>
				<p class="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-ink)]">
					Links
				</p>
				<div class="mt-3 flex flex-wrap gap-3">
					{#each project.links as link}
						<a
							class="rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-accent)] transition hover:border-[var(--color-accent)]"
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
