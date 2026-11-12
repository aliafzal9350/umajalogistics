import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import DensityCalculator from '@/components/DensityCalculator';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/metadata';
import { DENSITY_TIERS } from '@/lib/freight-density';
import { SITE } from '@/lib/site';

export const metadata = pageMetadata('Freight Density & Class Calculator (LTL)', 'Free freight density calculator: enter pallet dimensions and weight to get pounds per cubic foot and an estimated LTL class on the 2025 NMFC scale.', '/tools/freight-density-calculator');

const faqs = [
    ['How do you calculate freight density?', 'Multiply length × width × height in inches, divide by 1,728 to get cubic feet, then divide the total weight in pounds by the total cubic feet. The result is pounds per cubic foot (PCF).'],
    ['What freight class is 10 lb per cubic foot?', 'On the 13-tier NMFC density scale, 10 up to 12 lb per cubic foot falls in class 92.5, provided the commodity is rated by density.'],
    ['Does density always decide freight class?', 'No. Many NMFC items are classed by density, but some are rated on handling, stowability or liability. Check the item number in the carrier’s tariff before booking.'],
];

const toolSchema = {
    '@context': 'https://schema.org',
    '@graph': [
        // WebApplication was dropped: Google requires aggregateRating or review for it, and we have neither.
        {
            '@type': 'WebPage', '@id': `${SITE.url}/tools/freight-density-calculator`, url: `${SITE.url}/tools/freight-density-calculator`,
            name: 'Freight density and class calculator', isAccessibleForFree: true,
            breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
                { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE.url}/resources` },
                { '@type': 'ListItem', position: 3, name: 'Freight density calculator' },
            ] },
        },
        { '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ],
};

export default function DensityPage() {
    const ranges = DENSITY_TIERS.map(([min, cls], i) => [i === 0 ? `${min}+` : `${min} – under ${DENSITY_TIERS[i - 1][0]}`, cls]);
    return <><JsonLd data={toolSchema} />
        <PageHeader title="Freight density & class calculator" uppercase={false} description="Get pounds per cubic foot and an estimated LTL class for one or more pallet sizes." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Freight density calculator' }]} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
            <div className="prose-content"><p>The example is two 48 × 40 × 50-inch pallets at 600 lb each: 1,200 lb in 111.11 cubic feet, or 10.8 lb per cubic foot — class 92.5. Replace it with your own measurements.</p></div>
            <DensityCalculator />
            <div className="prose-content">
                <h2>The formula</h2>
                <p><strong>Density (PCF) = total weight (lb) ÷ total cubic feet</strong>, where cubic feet = L × W × H (inches) ÷ 1,728. With mixed pallet sizes, add every unit’s weight and volume first, then divide once — averaging separate densities gives the wrong answer.</p>
                <h2>NMFC density scale (effective July 19, 2025)</h2>
                <p>The National Motor Freight Classification moved to a standard 13-tier density scale in 2025. Commodities rated by density use these breaks:</p>
                <table><thead><tr><th>Lb per cubic foot</th><th>Class</th></tr></thead><tbody>{ranges.map(([r, c]) => <tr key={c}><td>{r}</td><td>{c}</td></tr>)}</tbody></table>
                <p>Source: <a href="https://nmfta.org/" rel="noopener">National Motor Freight Traffic Association</a>. Confirm the current scale and your item number before tendering.</p>
                <h2>Why density moves your rate</h2>
                <p>Lower density means a higher class and a higher price per hundredweight. Common ways to lift density: build pallets tight to the footprint, cut unnecessary height, and avoid overhang that adds cube without weight. A shipment just under a tier break can often reach the next class by trimming a few inches of height.</p>
                <h2>Frequently asked questions</h2>
                {faqs.map(([q, a]) => <div key={q}><h3>{q}</h3><p>{a}</p></div>)}
                <p>Not sure LTL is the right fit? A dedicated box truck is billed by the move, not by class. Check floor space with the <Link href="/tools/pallet-calculator">pallet calculator</Link> or <Link href="/contact">ask dispatch for a rate</Link>.</p>
            </div>
        </div></>;
}
