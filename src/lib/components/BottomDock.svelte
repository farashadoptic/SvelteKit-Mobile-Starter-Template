<script>
	import House from '@lucide/svelte/icons/house';
	import Search from '@lucide/svelte/icons/search';
	import Info from '@lucide/svelte/icons/info';
	import Settings from '@lucide/svelte/icons/settings';
	import { page } from '$app/stores';

	const items = [
		{ routeId: '/', label: 'Home', icon: House },
		{ routeId: '/search', label: 'search', icon: Search },
		{ routeId: '/about', label: 'about', icon: Info },
		{ routeId: '/settings', label: 'settings', icon: Settings }
	];
</script>

<div class="dock border-0 shadow-sm [&>*::after]:h-[0.1rem] [&>*::after]:text-neutral" style="--tw-shadow: 0 -1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));">
	{#each items as item}
	{@const Component = item.icon}
		<a href={item.routeId === '/' ? '/' : item.routeId} class="{$page.route.id === item.routeId ? 'dock-active' : ''}">
			<Component class="w-5 mb-0.5" />
			<span class="dock-label">{item.label}</span>
		</a>
	{/each}
</div>
