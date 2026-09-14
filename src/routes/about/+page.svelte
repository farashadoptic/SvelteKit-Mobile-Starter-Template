<script>
	import Card from '$lib/components/Card.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { modal } from '$lib/stores/modalStore.svelte';

	let isModal1Open = $state(false);
	let isModal2Open = $state(false);
	let isModal3Open = $state(false);

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
						console.log('Delete button clicked!');
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
		<button class="btn btn-block btn-primary" onclick={() => (isModal3Open = true)}>Open BottomSheet-like Modal</button>
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

<Modal bind:open={isModal3Open} title="Modal Title" onOpen={() => console.log('Modal Opened!')} onClose={() => runOnModalClose()} preventClose={false} variant="bottom">
	<p class="text-justify">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis
		ultricies lacus sed turpis tincidunt id aliquet.
	</p>

	{#snippet actions()}
		<button class="btn btn-ghost" onclick={() => (isModal3Open = false)}>Cancel</button>
		<button class="btn btn-primary" onclick={() => (isModal3Open = false)}>OK</button>
	{/snippet}
</Modal>
