// Single source of truth for business details shown across the site.
// Update contact details here instead of editing individual pages.

export const SITE = {
    name: 'Umaja Logistics',
    legalName: 'Umaja Logistics LLC',
    url: 'https://umajalogistics.online',
    tagline: 'Driven By Honor. Delivered With Pride.',
    description:
        'Umaja Logistics LLC is a Delaware-based motor carrier (MC# 1508261) running 26ft dock-high box trucks with Maxon liftgates for expedited freight across the USA and daily JFK Airport cargo runs.',
    mcNumber: '1508261',
    phones: {
        primary: { display: '(646) 973-6672', href: 'tel:+16469736672' },
        alt: { display: '(917) 814-6278', href: 'tel:+19178146278' },
    },
    emails: {
        dispatch: 'transport@ajamuumajalogistics.com',
        alt: 'OSBORNEAUTOTRANSPORT@gmail.com',
    },
    address: {
        street: '3422 Old Capitol Trl, STE 4086',
        city: 'Wilmington',
        region: 'DE',
        postalCode: '19808',
        country: 'United States',
        countryCode: 'US',
    },
    // Last date the legal pages were reviewed. Update it whenever the policies change.
    policiesUpdated: 'October 30, 2026',
};

// Google AdSense publisher ID, e.g. "ca-pub-1234567890123456".
// Set NEXT_PUBLIC_ADSENSE_CLIENT in the hosting environment (Vercel → Settings → Environment Variables).
const adsenseClient = (process.env.NEXT_PUBLIC_ADSENSE_CLIENT || '').trim();
export const ADSENSE_CLIENT = /^ca-pub-\d{10,20}$/.test(adsenseClient) ? adsenseClient : null;

export const NAV_LINKS = [
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/resources', label: 'Resources' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
];

export const LEGAL_LINKS = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Use' },
    { href: '/disclaimer', label: 'Disclaimer' },
];

export function mailto(address, subject) {
    return subject ? `mailto:${address}?subject=${encodeURIComponent(subject)}` : `mailto:${address}`;
}
