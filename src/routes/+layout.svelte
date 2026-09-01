<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import BottomDock from '$lib/components/BottomDock.svelte';
	import ToastHost from '$lib/components/ToastHost.svelte';
	import ModalHost from '$lib/components/ModalHost.svelte';

	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';

	let { children } = $props();

	let currentPath = $derived($page.url.pathname);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

<main class="main-container mt-16 overflow-y-auto p-4">
	{#key currentPath}
		<div in:fly={{ duration: 85, y: 10, opacity: 100 }} class="page-container">
			{@render children()}
		</div>
	{/key}
</main>

<ToastHost />
<ModalHost />
<BottomDock />
