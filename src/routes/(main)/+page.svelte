<script>
	import { onMount } from 'svelte';
	import Card from '$lib/components/Card.svelte';
	import Pages from '$lib/data/pages.json';

	onMount(() => {
		// console.log(Pages);
	});
</script>

<div class="space-y-3">
	<Card title="Components">
		<div class="flex flex-wrap gap-2">
			<a href="/settings" class="btn btn-block">Card Component Example</a>
			<a href="/settings" class="btn btn-block">Accordion Component Example</a>
			<a href="/info" class="btn btn-block">Toast Component Example</a>
			<a href="/about" class="btn btn-block">Modal Component Example</a>
		</div>
	</Card>

	<div class="list rounded-box bg-base-100">
		{#each Pages as page}
			<a href="/pages/{page.id}" class="list-row focus:bg-base-200/40">
				<div>
					<div class="font-semibold">{page.title}</div>
					<div class="text-xs opacity-60">{page.body?.substring(0, 50)}</div>
				</div>
			</a>
		{/each}
	</div>
</div>
