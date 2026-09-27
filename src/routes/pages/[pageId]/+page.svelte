<script>
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import Card from '$lib/components/Card.svelte';
	let { data } = $props();
</script>

<Card title={data.content.title}>
	<article>
		{data.content.body}
	</article>
</Card>