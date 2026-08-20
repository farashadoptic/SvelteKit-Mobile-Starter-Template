<script lang="ts">
	interface AccordionItem {
		title: string;
		content: string;
	}

	interface Props {
		items: AccordionItem[];
		name: string;
		variant?: 'none' | 'arrow' | 'plus';
		isJoined?: boolean;
		itemClass?: string;
		containerClass?: string;
	}

	let { items, name, variant = 'none', isJoined = false, itemClass = '', containerClass = '' }: Props = $props();

	const variantClass = $derived(variant === 'arrow' ? 'collapse-arrow' : variant === 'plus' ? 'collapse-plus' : '');

	const joinContainerClass = $derived(isJoined ? 'join join-vertical bg-base-100' : '');

	const finalItemClass = $derived(`collapse ${variantClass} ${isJoined ? 'join-item border border-base-200' : 'bg-base-100'} ${itemClass}`);
</script>

<div class="{joinContainerClass} {containerClass}" style="--radius-field: var(--radius-box);">
	{#each items as item}
		<details class={finalItemClass} {name}>
			<summary class="collapse-title font-semibold">{item.title}</summary>
			<div class="collapse-content text-sm">
				{item.content}
			</div>
		</details>
	{/each}
</div>
