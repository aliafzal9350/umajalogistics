import { SITE } from '@/lib/site';
import { ARTICLES } from '@/content/articles';

const PAGES = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/resources', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/disclaimer', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap() {
    const now = new Date();
    return [
        ...PAGES.map(({ path, priority, changeFrequency }) => ({
            url: `${SITE.url}${path}`,
            lastModified: now,
            changeFrequency,
            priority,
        })),
        ...ARTICLES.map((article) => ({
            url: `${SITE.url}/resources/${article.slug}`,
            lastModified: new Date(article.updated ?? article.published),
            changeFrequency: 'monthly',
            priority: 0.6,
        })),
    ];
}
