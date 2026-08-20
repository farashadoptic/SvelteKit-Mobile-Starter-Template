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
