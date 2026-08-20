import { writable } from 'svelte/store';

export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'neutral';
export type ToastPosition = 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';

export const positionClasses: Record<ToastPosition, string> = {
    'top-start': 'toast-top toast-start top-20',
    'top-center': 'toast-top toast-center top-20',
    'top-end': 'toast-top toast-end top-20',
    'bottom-start': 'toast-bottom toast-start bottom-20',
    'bottom-center': 'toast-bottom toast-center bottom-20',
    'bottom-end': 'toast-bottom toast-end bottom-20'
};

export type ToastAction = {
    label: string;
    onClick: (close: () => void) => void | Promise<void>;
    class?: string;
};

export interface ToastOptions {
    message: string;
    type?: ToastType;
    showIcon?: boolean;
    duration?: number; // ms, 0 = permanent
    closable?: boolean;
    actions?: ToastAction[];
    position?: ToastPosition;
}

export interface ToastItem extends Required<Pick<ToastOptions, 'message' | 'type' | 'showIcon' | 'duration' | 'closable' | 'actions' | 'position'>> {
    id: string;
}

function createId() {
    return `toast_${crypto.randomUUID()}`;
}

function createToastStore() {
    const { subscribe, update } = writable<ToastItem[]>([]);
    const MAX_TOASTS = 5;

    function add(options: ToastOptions): string {
        const id = createId();
        const toast: ToastItem = {
            id,
            message: options.message,
            type: options.type ?? 'neutral',
            showIcon: options.showIcon ?? true,
            duration: options.duration ?? 3000,
            closable: options.closable ?? true,
            actions: options.actions ?? [],
            position: options.position ?? 'bottom-center'
        };

        update((items) => {
            const newItems = [...items, toast];
            if (newItems.length > MAX_TOASTS) return newItems.slice(1);
            return newItems;
        });

        return id;
    }

    function remove(id: string) {
        update((items) => items.filter((item) => item.id !== id));
    }

    return { subscribe, add, remove };
}

export const toastStore = createToastStore();
