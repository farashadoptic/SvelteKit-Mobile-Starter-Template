<script lang="ts">
	import Info from '@lucide/svelte/icons/info';
	import CircleCheck from '@lucide/svelte/icons/circle-check';
	import CircleX from '@lucide/svelte/icons/circle-x';
	import Bell from '@lucide/svelte/icons/bell';
	import TriangleAlert from '@lucide/svelte/icons/triangle-alert';
	import X from '@lucide/svelte/icons/x';
	import { slide, blur } from 'svelte/transition';
	import type { ToastItem, ToastAction  } from '$lib/stores/toast';

	let { toast, onClose }: { toast: ToastItem; onClose: (id: string) => void } = $props();
	
	async function handleActionClick(action: ToastAction) {
		await action.onClick(() => onClose(toast.id));
	}

	let progress = $state(100);
	let interval: ReturnType<typeof setInterval>;

	const iconMap: Record<string, any> = {
		success: CircleCheck,
		error: CircleX,
		warning: TriangleAlert,
		info: Info,
		neutral: Bell
	};

	const alertClassMap: Record<string, string> = {
		success: 'alert-success',
		error: 'alert-error',
		warning: 'alert-warning',
		info: 'alert-info',
		neutral: 'alert-neutral'
	};

	$effect(() => {
		if (toast.duration > 0) {
			const step = 100;
			const decrement = (step / toast.duration) * 100;

			interval = setInterval(() => {
				progress -= decrement;
				if (progress <= 0) {
					clearInterval(interval);
					onClose(toast.id);
				}
			}, step);
		}
		return () => clearInterval(interval);
	});
</script>

<div transition:blur={{ duration: 300 }} class="alert {alertClassMap[toast.type]} relative min-w-75 overflow-hidden shadow-xl">
	{#if toast.duration > 0}
		<div class="absolute bottom-0 left-0 h-0.5 bg-current opacity-30 transition-all duration-100 ease-linear" style="width: {progress}%"></div>
	{/if}

    {const Icon = iconMap[toast.type];}
	{#if toast.showIcon && Icon}
	    {@const Component = Icon}
		<Component size={20} class="shrink-0" />
	{/if}

	<span class="flex-1 text-sm font-medium">{toast.message}</span>

	{#if toast.actions.length > 0}
		<div class="flex gap-1">
			{#each toast.actions as action}
				<button class="btn btn-xs {action.class ?? 'btn-ghost'}" onclick={() => handleActionClick(action)}>
					{action.label}
				</button>
			{/each}
		</div>
	{/if}

	{#if toast.closable}
		<button class="btn btn-square h-6 w-6 btn-ghost btn-sm hover:bg-gray-900/10 border-0" onclick={() => onClose(toast.id)}>
			<X size={16} />
		</button>
	{/if}
</div>
