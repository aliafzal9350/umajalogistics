import { SITE } from '@/lib/site';
import { ARTICLE_SEO } from '@/lib/metadata';
import { SERVICE_DETAILS } from '@/lib/service-details';

export const dynamic = 'force-static';

// llms.txt (https://llmstxt.org): a plain-markdown map of the site for AI assistants.
// Built from the same data as the pages, so new services and guides appear automatically.
export function GET() {
    const link = (title, path, note) => `- [${title}](${SITE.url}${path})${note ? `: ${note}` : ''}`;
    const body = [
        `# ${SITE.name}`,
        '',
        `> ${SITE.description}`,
        '',
        `Dispatch: ${SITE.phones.primary.display} · ${SITE.emails.dispatch} · MC# ${SITE.mcNumber}`,
        '',
        '## Services',
        ...SERVICE_DETAILS.map((s) => link(s.title, `/services/${s.slug}`, s.description)),
        '',
        '## Tools',
        link('Freight density & class calculator', '/tools/freight-density-calculator', 'Pounds per cubic foot and estimated LTL class on the 2025 NMFC density scale.'),
        link('Box truck pallet calculator', '/tools/pallet-calculator', 'Pallet floor positions, weight and door-height checks for a box truck.'),
        link('Shipment brief builder', '/tools/shipment-brief', 'Collect the details dispatch needs for a quote.'),
        '',
        '## Freight guides',
        ...Object.entries(ARTICLE_SEO).map(([slug, [title, description]]) => link(title, `/resources/${slug}`, description)),
        '',
        '## Company',
        link('About', '/about'),
        link('Contact and quotes', '/contact'),
        link('FAQ', '/faq'),
        link('Editorial policy', '/editorial-policy'),
        '',
    ].join('\n');
    return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
