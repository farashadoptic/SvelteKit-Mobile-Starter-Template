<script>
	/** @type {import('svelte/elements').Snippet} */
	let { title, children, actions, class: className = '', width = 'w-full' } = $props();
</script>

<div class="card bg-base-100 {width} {className}">
	<div class="card-body">
		{#if title}
			<h2 class="card-title font-bold mb-3">{title}</h2>
		{/if}

		<div class="card-content">
			{@render children?.()}
		</div>

		{#if actions}
			<div class="card-actions justify-end">
				{@render actions()}
			</div>
		{/if}
	</div>
</div>

<!-- Example
<script>
	import Card from '$lib/components/Card.svelte';
</script>
<Card title="Card Component" width="" class="">
	<p>Card Content...</p>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolores voluptatem similique dolorem delectus animi. Quod iure perferendis possimus, saepe blanditiis provident animi facilis sunt pariatur velit eius nostrum aliquam nam deserunt similique optio libero ab ullam et inventore. In maxime cum velit impedit debitis voluptate reiciendis illum necessitatibus ratione.</p>

	{#snippet actions()}
		<button class="btn btn-sm">Cancel</button>
		<button class="btn btn-sm btn-success">Save</button>
		<button class="btn btn-accent btn-sm">Card Action Button</button>
	{/snippet}
</Card> -->