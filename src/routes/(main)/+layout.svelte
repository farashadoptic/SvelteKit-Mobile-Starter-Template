<script>
	import Header from '$lib/components/Header.svelte';
	import BottomDock from '$lib/components/BottomDock.svelte';
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';

	let { children } = $props();
	let currentPath = $derived($page.url.pathname);
</script>

<Header />

<main class="main-container mt-16 overflow-y-auto p-4">
	{#key currentPath}
		<div in:fly={{ duration: 85, y: 50, opacity: 100 }} class="page-container">
			<div in:fade={{ duration: 85, opacity: 10 }} class="page-container">
				{@render children()}
			</div>
		</div>
	{/key}
</main>

<BottomDock />
