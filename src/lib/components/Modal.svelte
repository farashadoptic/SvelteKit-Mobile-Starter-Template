<script lang="ts">
	let { open = $bindable(false), title = '', children, variant = 'center', actions = null, class: className = '', onClose = () => {}, onOpen = () => {}, preventClose = false } = $props();

    let modalClass = $derived(variant === 'bottom' ? 'modal modal-bottom' : 'modal modal-middle');
	let modalEl = $state<HTMLDialogElement | null>(null);

	$effect(() => {
		const el = modalEl;
		if (!el) return;

		if (open) {
			if (!el.open) {
				el.showModal();
				onOpen();
			}
		} else if (el.open) {
			el.close();
		}
	});

	function handleKeyDown(e: KeyboardEvent) {
		if (preventClose && e.key === 'Escape') {
			e.preventDefault();
		}
	}

	function handleCancel(e: Event) {
		if (preventClose) {
			e.preventDefault();
		}
	}

	function handleBackdrop(e: MouseEvent) {
		if (preventClose) return;
		if (e.target === modalEl) open = false;
	}

	function handleClose(event: Event) {
		if (preventClose && open) {
			setTimeout(() => {
				if (open && modalEl && !modalEl.open) {
					modalEl.showModal();
				}
			}, 0);
			return;
		}

		open = false;
		onClose(event);
	}
</script>

<dialog bind:this={modalEl} class="{modalClass} select-none" onkeydown={handleKeyDown} oncancel={handleCancel} onclick={handleBackdrop} onclose={handleClose}>
	<div class="modal-box {className}">
		{#if title}
			<h3 class="text-lg font-bold">{title}</h3>
		{/if}

		<div class="my-2 max-h-96 overflow-y-auto">
			{@render children?.()}
		</div>

		{#if actions}
			<div class="modal-action">
				{@render actions()}
			</div>
		{/if}
	</div>

	{#if !preventClose}
		<form method="dialog" class="modal-backdrop">
			<button>close</button>
		</form>
	{/if}
</dialog>

<!-- Example
<script>
	import Modal from '$lib/components/Modal.svelte';
	import ModalHost from '$lib/components/ModalHost.svelte';
	import { modal } from '$lib/stores/modalStore.svelte';

	let isModal2Open = $state(false);

	function runOnModalClose() {
		console.log('Modal Closed!');
	}

	function handleDelete() {
		modal.show({
			title: 'Delete',
			content: 'Are you sure you want to delete this file?',
			preventClose: true,
			actions: [
				{ label: 'Cancel', onClick: (close) => close() },
				{
					label: 'Delete',
					className: 'btn-error',
					onClick: async (close) => {
						// await someApiCall();
						console.log("Delete button clicked!");
						close();
					}
				}
			]
		});
	}
</script>

<button class="btn btn-block btn-primary" onclick={() => (isModal2Open = true)}>Open Non-dismissible/Persistent Modal</button>
<button class="btn btn-block btn-primary" onclick={handleDelete}>Open Dynamic Modal (no &lt;Modal/&gt; tag needed)</button>

<Modal bind:open={isModal2Open} title="Modal Title" onOpen={() => console.log('Modal Opened!')} onClose={() => runOnModalClose()} preventClose={true}>
	<p>This modal cannot be closed by clicking outside it or pressing ESC.</p>

	{#snippet actions()}
		<button class="btn btn-ghost" onclick={() => (isModal2Open = false)}>Cancel</button>
		<button class="btn btn-primary" onclick={() => (isModal2Open = false)}>OK</button>
	{/snippet}
</Modal> -->
