import { ADSENSE_CLIENT } from '@/lib/site';

export const dynamic = 'force-static';

// Authorized Digital Sellers file for Google AdSense, built from NEXT_PUBLIC_ADSENSE_CLIENT.
// f08c47fec0942fa0 is Google's published certification authority ID.
export function GET() {
    const headers = { 'Content-Type': 'text/plain; charset=utf-8' };
    if (!ADSENSE_CLIENT) {
        return new Response('ads.txt is not configured\n', { status: 404, headers });
    }
    const publisherId = ADSENSE_CLIENT.replace(/^ca-/, '');
    return new Response(`google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`, { headers });
}
