// import { SvelteBindable } from 'svelte'; // اگر در محیط خاصی هستی، وگرنه از $state استفاده می‌کنیم

// تعریف تایپ‌ها
type ModalAction = {
    label: string;
    onClick: (close: () => void) => void | Promise<void>;
    className?: string;
};

interface ModalOptions {
    title?: string;
    content?: any; // می‌تواند رشته باشد یا یک Svelte Component
    actions?: ModalAction[];
    className?: string;
    onOpen?: () => void;
    onClose?: () => void;
    preventClose?: boolean;
}

interface ModalInstance {
    id: string;
    options: ModalOptions;
    open: boolean;
}

// ایجاد یک وضعیت سراسری برای مودال‌ها
// در Svelte 5 از $state در خارج از کامپوننت استفاده می‌کنیم
let modals = $state<ModalInstance[]>([]);

export const modal = {
    /**
     * نمایش یک مودال جدید
     * @param options تنظیمات مودال
     * @returns یک تابع برای بستن مودال (اگر نیاز بود)
     */
    show(options: ModalOptions) {
        const id = Math.random().toString(36).substring(2, 9);
        const newModal: ModalInstance = {
            id,
            options,
            open: true
        };
        modals.push(newModal);

        // بازگرداندن تابعی برای بستن دستی اگر لازم بود
        return () => this.close(id);
    },

    /**
     * بستن یک مودال خاص بر اساس ID
     */
    close(id: string) {
        const index = modals.findIndex((m) => m.id === id);
        if (index !== -1) {
            modals[index].open = false;
            // صبر می‌کنیم تا انیمیشن بسته شدن تمام شود، سپس از DOM پاک می‌کنیم
            setTimeout(() => {
                modals.splice(index, 1);
            }, 300);
        }
    },

    // دسترسی به لیست مودال‌ها برای رندر کردن در ModalHost
    get all() {
        return modals;
    }
};
