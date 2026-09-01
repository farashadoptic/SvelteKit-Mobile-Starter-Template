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

<!-- Example
<script>
	import ToastHost from '$lib/components/ToastHost.svelte';
	import { toast, toastUtils } from '$lib/utils/toast';
	
	const showSuccess = () => toastUtils.success('Success! Your changes have been saved.');
	const showError = () => toastUtils.error('Unable to establish a connection. Please try again.');
	const showComplex = () => {
		toast({
			message: 'Are you sure you want to delete this file?',
			type: 'warning',
			position: 'top-center',
			duration: 0,
			closable: false,
			actions: [
				{
					label: 'Delete',
					onClick: async (close) => {
						console.log('Deleting...');
						await new Promise((r) => setTimeout(r, 500));
						console.log('Deleted!');

						close();
					},
					class: 'btn-error btn-sm'
				},
				{
					label: 'Cancel',
					onClick: (close) => {
						console.log('Canceled!');
						close();
					},
					class: 'btn-warning btn-sm'
				}
			]
		});
	};	
	const showPermanent = () => {
		toast({
			message: 'This toast will not auto-dismiss — you’ll have to close it manually.',
			type: 'info',
			position: 'top-center',
			duration: 0
		});
	};
</script>
<button class="btn btn-block btn-success" onclick={showSuccess}>Success Toast</button>
<button class="btn btn-block btn-error" onclick={showError}>Error Toast</button>
<button class="btn btn-block btn-warning" onclick={showComplex}>With Actions</button>
<button class="btn btn-block btn-info" onclick={showPermanent}>Permanent</button> -->
