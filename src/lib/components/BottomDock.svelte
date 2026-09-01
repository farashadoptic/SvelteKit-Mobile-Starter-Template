<script>
	import House from '@lucide/svelte/icons/house';
	import ScanEye from '@lucide/svelte/icons/scan-eye';
	import Users from '@lucide/svelte/icons/users-round';
	import Info from '@lucide/svelte/icons/info';
	import Settings from '@lucide/svelte/icons/settings';
	import { page } from '$app/stores';

	const items = [
		{ routeId: '/', label: 'Home', icon: House },
		{ routeId: '/settings', label: 'Settings', icon: Settings },
		{ routeId: '/info', label: 'Info', icon: Info },
		{ routeId: '/about', label: 'About', icon: Users }
	];
</script>

<div class="dock border-0 shadow-sm [&>*::after]:h-[0.1rem] [&>*::after]:border-t-2" style="--tw-shadow: 0 -1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));">
	{#each items as item}
		{@const Component = item.icon}
		<a href={item.routeId === '/' ? '/' : item.routeId} class={$page.route.id === item.routeId ? 'dock-active' : ''}>
			<Component class="mb-0.5 w-5" />
			<span class="dock-label font-medium">{item.label}</span>
		</a>
	{/each}
</div>
