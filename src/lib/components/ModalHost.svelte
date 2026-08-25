<script lang="ts">
	import { modal } from '$lib/stores/modalStore.svelte';
	import Modal from '$lib/components/Modal.svelte';
</script>

{#each modal.all as item (item.id)}
	<Modal bind:open={item.open} title={item.options.title} class={item.options.className} onOpen={item.options.onOpen} onClose={item.options.onClose} preventClose={item.options.preventClose}>
		<!-- رندر محتوا -->
		{#if typeof item.options.content === 'string'}
			<p>{item.options.content}</p>
		{:else}
			<!-- اگر محتوا یک کامپوننت یا Snippet باشد -->
			{@render item.options.content()}
		{/if}

		<!-- رندر اکشن‌ها -->
		{#snippet actions()}
			{#if item.options.actions}
				{#each item.options.actions as action}
					<button class="btn {action.className ?? ''}" onclick={() => action.onClick(() => modal.close(item.id))}>
						{action.label}
					</button>
				{/each}
			{/if}
		{/snippet}
	</Modal>
{/each}
