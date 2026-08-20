<script lang="ts">
	import { toastStore, positionClasses, type ToastPosition } from '$lib/stores/toast';
	import ToastItem from './ToastItem.svelte';
	import { fade } from 'svelte/transition';

	const positions = Object.keys(positionClasses) as ToastPosition[];
</script>

{#each positions as pos}
	<div class="toast {positionClasses[pos]} pointer-events-none z-9999 flex-col gap-2">
		{#each $toastStore.filter((t) => t.position === pos) as toast (toast.id)}
			<div class="pointer-events-auto" transition:fade={{ duration: 200 }}>
				<ToastItem {toast} onClose={(id) => toastStore.remove(id)} />
			</div>
		{/each}
	</div>
{/each}
