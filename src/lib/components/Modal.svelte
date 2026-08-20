<script>
	let { open = $bindable(false), title = '', children, actions, class: className = '', onClose = () => {}, onOpen = () => {}, preventClose = false } = $props();

	let modalEl = $state(null);

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

	function handleKeyDown(e) {
		if (preventClose && e.key === 'Escape') {
			e.preventDefault();
		}
	}

	function handleCancel(e) {
		if (preventClose) {
			e.preventDefault();
		}
	}

	function handleBackdrop(e) {
		if (preventClose) return;
		if (e.target === modalEl) open = false;
	}

	function handleClose(event) {
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

<dialog bind:this={modalEl} class="modal select-none" onkeydown={handleKeyDown} oncancel={handleCancel} onclick={handleBackdrop} onclose={handleClose}>
	<div class="modal-box {className}">
		{#if title}
			<h3 class="text-lg font-bold">{title}</h3>
		{/if}

		<div class="py-4">
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
