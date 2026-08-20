<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import BottomDock from '$lib/components/BottomDock.svelte';
	import ToastHost from '$lib/components/ToastHost.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<Header />

<div class="p-5">
	{@render children()}
</div>

<ToastHost />
<BottomDock />
