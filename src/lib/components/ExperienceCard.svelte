<script lang="ts">
	import type { PortfolioExperience } from '$lib/content/portfolio-schema';

	let { item }: { item: PortfolioExperience } = $props();
</script>

<article class="rounded-[1.75rem] border border-[var(--color-border)] bg-white/88 p-6 shadow-[0_16px_48px_rgba(15,23,42,0.06)]">
	<div class="flex flex-wrap items-start justify-between gap-3">
		<div>
			<h3 class="text-xl font-semibold text-[var(--color-ink)]">{item.title}</h3>
			<p class="mt-1 text-sm text-[var(--color-muted)]">{item.organization}</p>
		</div>
		<p class="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
			{item.period}
		</p>
	</div>

	<p class="mt-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">{item.summary}</p>

	<ul class="mt-5 space-y-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
		{#each item.bullets as bullet}
			<li class="flex gap-3">
				<span class="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]"></span>
				<span>{bullet}</span>
			</li>
		{/each}
	</ul>
</article>
