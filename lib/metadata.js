import { SITE } from './site';
export const ARTICLE_SEO = {
    '26ft-box-truck-capacity': ['How Many Pallets Fit in a 26ft Box Truck?', 'See how 12 standard 48 × 40-inch pallets fit in an example 26ft box truck. Check your layout, load weight and door clearance with the calculator.'],
    'bol-rate-confirmation-pod': ['Freight Paperwork: BOL, Rate Con & POD', 'Understand rate confirmations, bills of lading and proof of delivery, and which shipment details to check before signing.'],
    'expedited-vs-ltl': ['Expedited LTL vs. Dedicated Freight', 'Compare standard LTL, expedited LTL and a dedicated truck by delivery commitment, handling and equipment.'],
    'jfk-air-cargo-trucking': ['JFK Air Cargo Trucking Guide', 'Prepare JFK cargo pickups and deliveries: release status, handler instructions, documents and receiving arrangements.'],
    'liftgate-delivery-guide': ['Liftgate Delivery & Site Preparation', 'Learn when liftgate delivery is needed and what to check about pallet weight, access and unloading surfaces.'],
    'prepare-palletized-freight': ['How to Prepare Palletized Freight', 'Check pallet construction, wrapping, labels, dimensions and paperwork before sending freight by truck.'],
    'twic-tsa-credentials-explained': ['What Is a TWIC Card? Port Access for Truck Drivers', 'Learn what a TWIC card is used for, which terminal requirements to confirm, and how port access differs from airport cargo clearance.'],
    'verify-motor-carrier': ['How to Verify a Motor Carrier', 'Check a carrier’s identity, authority, insurance documentation and contact details before tendering freight.'],
};
export function pageMetadata(title, description, path, type = 'website') {
    return { title, description, alternates: { canonical: path },
        openGraph: { title, description, url: path, siteName: SITE.name, locale: 'en_US', type, images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: SITE.legalName }] },
        twitter: { card: 'summary_large_image', title, description, images: ['/opengraph-image.png'] },
    };
}
