<script>
	import Card from '$lib/components/Card.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { modal } from '$lib/stores/modalStore.svelte';

	let isModal1Open = $state(false);
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

<Card title="Modal Component">
	{#snippet actions()}
		<button class="btn btn-block btn-primary" onclick={() => (isModal1Open = true)}>Open Modal</button>
		<button class="btn btn-block btn-primary" onclick={() => (isModal2Open = true)}>Open Non-dismissible/Persistent Modal</button>
		<button class="btn btn-block btn-primary" onclick={handleDelete}>Open Dynamic Modal (no &lt;Modal/&gt; tag needed)</button>
	{/snippet}
</Card>

<Modal bind:open={isModal1Open} title="Modal Title" onOpen={() => console.log('Modal Opened!')} onClose={() => runOnModalClose()} preventClose={false}>
	<p>Modal Content...</p>

	{#snippet actions()}
		<button class="btn btn-ghost" onclick={() => (isModal1Open = false)}>Cancel</button>
		<button class="btn btn-primary" onclick={() => (isModal1Open = false)}>OK</button>
	{/snippet}
</Modal>

<Modal bind:open={isModal2Open} title="Modal Title" onOpen={() => console.log('Modal Opened!')} onClose={() => runOnModalClose()} preventClose={true}>
	<p>This modal cannot be closed by clicking outside it or pressing ESC.</p>

	{#snippet actions()}
		<button class="btn btn-ghost" onclick={() => (isModal2Open = false)}>Cancel</button>
		<button class="btn btn-primary" onclick={() => (isModal2Open = false)}>OK</button>
	{/snippet}
</Modal>
