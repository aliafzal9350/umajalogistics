import { SITE } from './site';
export const ARTICLE_SEO = {
    '26ft-box-truck-capacity': ['26ft Box Truck Capacity & Pallet Count', 'Check pallet layouts, payload, door clearance and liftgate limits when planning freight for a 26ft box truck.'],
    'bol-rate-confirmation-pod': ['Freight Paperwork: BOL, Rate Con & POD', 'Understand rate confirmations, bills of lading and proof of delivery, and which shipment details to check before signing.'],
    'expedited-vs-ltl': ['Expedited Freight vs. LTL Shipping', 'Compare direct expedited trucking and LTL by handling, transit windows, equipment and shipment requirements.'],
    'jfk-air-cargo-trucking': ['JFK Air Cargo Trucking Guide', 'Prepare JFK cargo pickups and deliveries: release status, handler instructions, documents and receiving arrangements.'],
    'liftgate-delivery-guide': ['Liftgate Delivery & Site Preparation', 'Learn when liftgate delivery is needed and what to check about pallet weight, access and unloading surfaces.'],
    'prepare-palletized-freight': ['How to Prepare Palletized Freight', 'Check pallet construction, wrapping, labels, dimensions and paperwork before sending freight by truck.'],
    'twic-tsa-credentials-explained': ['TWIC & TSA Trucking Credentials', 'Understand the difference between port credentials, airport access and shipment-specific requirements before booking freight.'],
    'verify-motor-carrier': ['How to Verify a Motor Carrier', 'Check a carrier’s identity, authority, insurance documentation and contact details before tendering freight.'],
};
export function pageMetadata(title, description, path, type = 'website') {
    return { title, description, alternates: { canonical: path },
        openGraph: { title, description, url: path, siteName: SITE.name, locale: 'en_US', type, images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: SITE.legalName }] },
        twitter: { card: 'summary_large_image', title, description, images: ['/opengraph-image.png'] },
    };
}
