<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import HeaderPages from '$lib/components/HeaderPages.svelte';
	import BottomDock from '$lib/components/BottomDock.svelte';
	import ToastHost from '$lib/components/ToastHost.svelte';
	import ModalHost from '$lib/components/ModalHost.svelte';

	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';

	let { children } = $props();

	let currentPath = $derived($page.url.pathname);
	let isMainRoute = $derived($page.route.id?.includes('(main)'));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if isMainRoute}
	<Header />
{:else}
	<HeaderPages />
{/if}

<main class="main-container mt-16 overflow-y-auto p-4">
	{#key currentPath}
		<div in:fade={{ duration: 100, opacity: 50 }} class="page-container">
			{@render children()}
		</div>
	{/key}
</main>

{#if isMainRoute}
	<BottomDock />
{/if}

<ToastHost />
<ModalHost />
