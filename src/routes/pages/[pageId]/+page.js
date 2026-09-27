import { error } from '@sveltejs/kit';
import pageData from '$lib/data/pages.json';

export function load({ params }) {
    const pageId = Number(params.pageId);
    const pageContent = pageData.find(p => p.id === pageId);

    if (!pageContent) {
        throw error(404, 'صفحه مورد نظر یافت نشد');
    }

    return {
        content: pageContent
    };
}
