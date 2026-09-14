<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import ToastHost from '$lib/components/ToastHost.svelte';
	import ModalHost from '$lib/components/ModalHost.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<ToastHost />
<ModalHost />
