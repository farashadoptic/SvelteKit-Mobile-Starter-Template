import { toastStore, type ToastOptions, type ToastType } from '$lib/stores/toast';

export function toast(options: ToastOptions) {
    return toastStore.add(options);
}

const createTypedToast = (type: ToastType) =>
    (message: string, extra?: Partial<ToastOptions>) =>
        toast({ ...extra, message, type });

export const toastUtils = {
    success: createTypedToast('success'),
    error: createTypedToast('error'),
    warning: createTypedToast('warning'),
    info: createTypedToast('info'),
    neutral: createTypedToast('neutral')
};
