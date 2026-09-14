<script>
	import Card from '$lib/components/Card.svelte';
	import Accordion from '$lib/components/Accordion.svelte';

	const faqs = [
		{ title: 'Accordion Component: Question 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolores voluptatem similique dolorem delectus animi.' },
		{ title: 'Accordion Component: Question 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolores voluptatem similique dolorem delectus animi.' }
	];
</script>

<Card title="Card Component" width="" class="">
	<p>Card Content...</p>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolores voluptatem similique dolorem delectus animi. Quod iure perferendis possimus, saepe blanditiis provident animi facilis sunt pariatur velit eius nostrum aliquam nam deserunt similique optio libero ab ullam et inventore. In maxime cum velit impedit debitis voluptate reiciendis illum necessitatibus ratione.</p>

	{#snippet actions()}
		<button class="btn btn-sm">Cancel</button>
		<button class="btn btn-sm btn-success">Save</button>
		<button class="btn btn-accent btn-sm">Card Action Button</button>
	{/snippet}
</Card>

<Accordion name="faq-group-1" items={faqs} variant="arrow" containerClass="flex flex-col gap-2 mt-4" />

<Accordion name="settings-group" items={faqs} variant="plus" isJoined={true} containerClass="mt-4 w-full rounded-lg" />
