import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import QuoteForm from '@/components/QuoteForm';
import { pageMetadata } from '@/lib/metadata';

const description = 'Create a copyable freight brief with your route, pallet details, liftgate needs and appointment notes. Email it to Umaja dispatch when you are ready.';
export const metadata = pageMetadata('Freight Shipment Brief Builder', description, '/tools/shipment-brief');

export default function ShipmentBriefPage() {
    return (
        <>
            <PageHeader
                title="Freight Shipment Brief Builder"
                eyebrow="Shipping tools"
                description={description}
                breadcrumbs={[{ href: '/', label: 'Home' }, { href: '/resources', label: 'Resources' }, { label: 'Shipment brief' }]}
            />
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-10">
                <div className="lg:col-span-2"><QuoteForm prepareOnly /></div>
                <aside className="self-start space-y-4 rounded-2xl border border-white/10 p-6 text-slate-300">
                    <h2 className="text-xl font-bold text-white">Before you share the brief</h2>
                    <ul className="list-disc space-y-2 pl-5 text-sm">
                        <li>Give the pickup and delivery windows in local time.</li>
                        <li>Include loaded dimensions, total weight and the heaviest individual unit.</li>
                        <li>Say which location needs a liftgate and describe the handoff surface.</li>
                        <li>For JFK freight, include the handler and release status or tender cutoff.</li>
                    </ul>
                    <p className="text-sm">Dispatch confirms availability, equipment and price after reviewing the shipment.</p>
                    <Link href="/tools/pallet-calculator" className="inline-block text-sm text-sky-400 underline">Check pallet fit first</Link>
                </aside>
            </div>
        </>
    );
}
