<script>
	import Card from '$lib/components/Card.svelte';
	import Modal from '$lib/components/Modal.svelte';

	let isModal1Open = $state(false);
	let isModal2Open = $state(false);

	function runOnModalClose() {
		console.log('Modal Closed!');
	}
</script>

<Card title="Modal Component">
	{#snippet actions()}
		<button class="btn btn-primary btn-block" onclick={() => (isModal1Open = true)}>Open Modal</button>
		<button class="btn btn-primary btn-block" onclick={() => (isModal2Open = true)}>Open Non-dismissible/Persistent Modal</button>
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
