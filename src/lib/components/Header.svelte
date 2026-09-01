<script>
	import EllipsisVertical from '@lucide/svelte/icons/ellipsis-vertical';
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import { page } from '$app/stores';

	const titles = {
		'/': 'My Android App',
		'/about': 'About',
		'/settings': 'Settings',
		'/info': 'Info'
	};
</script>

<div class="navbar fixed top-0 right-0 left-0 z-50 bg-base-100 shadow-sm">
	<div class="hidden flex-none">
		<button class="btn btn-square btn-ghost" title="">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
	<div class="flex-1">
		<h1 class="ms-2 text-xl font-bold">{titles[$page.url.pathname] || 'My Android App'}</h1>
	</div>
	<div class="flex-none">
		<div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="btn m-1 btn-square btn-ghost btn-sm">
				<EllipsisVertical size={20} />
			</div>
			<ul tabindex="-1" class="menu dropdown-content z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
				<li>
					<a href="https://yasinasasi.ir/" target="_blank">
						<ExternalLink size={14} class="-mt-0.5" />
						Developer Website
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>
