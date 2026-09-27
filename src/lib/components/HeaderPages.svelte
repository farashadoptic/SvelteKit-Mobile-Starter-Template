<script>
	import EllipsisVertical from '@lucide/svelte/icons/ellipsis-vertical';
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import { page } from '$app/stores';
</script>

<div class="navbar fixed top-0 right-0 left-0 z-50 bg-base-100 shadow-sm">
	<div class="flex-none">
		<a href="/" class="btn btn-square btn-ghost btn-sm" title="">
			<ArrowLeft size={22} />
		</a>
	</div>
	<div class="flex-1">
		<h1 class="relative top-0.5 ms-3 text-xl font-bold">{'My Android App'}</h1>
	</div>
	<div class="hidden flex-none">
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
