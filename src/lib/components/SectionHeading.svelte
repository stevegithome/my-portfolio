<script lang="ts">
	let {
		eyebrow,
		title,
		copy
	}: {
		eyebrow: string;
		title: string;
		copy: string;
	} = $props();
</script>

<div class="max-w-2xl space-y-4">
	<p class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-strong)]">
		{eyebrow}
	</p>
	<h2 class="font-display text-3xl leading-tight text-balance text-[var(--color-ink)] sm:text-4xl">
		{title}
	</h2>
	<p class="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
		{copy}
	</p>
</div>
