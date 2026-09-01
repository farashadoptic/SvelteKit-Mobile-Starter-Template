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

<!-- Example
<script>
	import Accordion from '$lib/components/Accordion.svelte';
	const faqs = [
		{ title: 'Accordion Component: Question 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolores voluptatem similique dolorem delectus animi.' },
		{ title: 'Accordion Component: Question 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolores voluptatem similique dolorem delectus animi.' }
	];
</script>
<Accordion name="faq-group-1" items={faqs} variant="arrow" containerClass="flex flex-col gap-2 mt-4" />
<Accordion name="settings-group" items={faqs} variant="plus" isJoined={true} containerClass="mt-4 w-full rounded-lg" />
-->