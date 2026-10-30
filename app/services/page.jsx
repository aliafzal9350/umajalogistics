import Link from 'next/link';
import { Clock, Plane, Layers, Warehouse, Anchor, CheckCircle2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata = {
    title: 'Freight Services',
    description:
        'Expedited and dedicated box truck runs, JFK air cargo trucking, liftgate deliveries, dock-to-dock freight and TWIC port moves from Umaja Logistics.',
    alternates: { canonical: '/services' },
};

const SERVICES = [
    {
        id: 'expedited',
        icon: Clock,
        title: 'Expedited & Dedicated Runs',
        intro:
            'An exclusive-use truck for your shipment only. We load at your dock and drive directly to the consignee, with no terminal transfers and no other customers’ freight on board.',
        body: [
            'Dedicated service is the right choice when the deadline matters more than the lowest possible rate: replacement parts for a stopped line, inventory for a store opening, trade-show freight, or anything that must make an appointment time. Because the freight is loaded once and unloaded once, it is also the safer choice for fragile and high-value goods.',
            'We operate nationwide. Regional runs are often completed the same day or overnight; longer lanes are planned around legal driving hours with realistic delivery times stated up front.',
        ],
        idealFor: ['4 to 12 pallets', 'Appointment and deadline deliveries', 'Fragile or high-value freight', 'Loads that should not sit in a terminal'],
        guide: { href: '/resources/expedited-vs-ltl', label: 'Expedited freight vs. LTL' },
    },
    {
        id: 'air-cargo',
        icon: Plane,
        title: 'JFK Air Cargo Trucking',
        intro:
            'Daily runs on the JFK Airport cargo corridor, connecting shippers and freight forwarders with airline and ground-handler terminals.',
        body: [
            'We deliver export freight to the airline or handler ahead of the cargo cutoff, recover released import shipments, and move freight between handlers and forwarder warehouses. Our operations are vetted for TSA air cargo work, and we follow chain-of-custody practices: sealed loads, recorded seal numbers and direct routing.',
            'A dock-high box truck lines up with terminal docks and is easier to place in busy cargo areas than a full tractor-trailer, while the liftgate covers final delivery to consignees without a dock.',
        ],
        idealFor: ['Export tenders before flight cutoffs', 'Import recoveries after release', 'Handler-to-forwarder transfers', 'Time-critical airport freight'],
        guide: { href: '/resources/jfk-air-cargo-trucking', label: 'Trucking air cargo to and from JFK' },
    },
    {
        id: 'liftgate',
        icon: Layers,
        title: 'Liftgate & Ground-Level Delivery',
        intro:
            'Pickups and deliveries where there is no loading dock or forklift. Every truck carries a Maxon hydraulic liftgate rated at 3,300+ lbs and a pallet jack.',
        body: [
            'Storefronts, offices, schools, construction sites and small workshops receive freight at street level. Our driver lowers each pallet to the ground and moves it off the truck with the onboard pallet jack, so the site does not need equipment of its own.',
            'Tell us at quote time which ends need the liftgate. We will confirm the pallet weights are within the gate’s rating and that the drop location suits a pallet jack.',
        ],
        idealFor: ['No dock or forklift on site', 'Retail and office deliveries', 'Job sites and grade-level doors', 'Pallets up to the liftgate rating'],
        guide: { href: '/resources/liftgate-delivery-guide', label: 'Liftgate delivery explained' },
    },
    {
        id: 'dock',
        icon: Warehouse,
        title: 'Dock-to-Dock Freight',
        intro:
            'Warehouse, distribution center and forwarder transfers using dock-high trucks that line up with standard loading docks.',
        body: [
            'With the box floor at dock height, pallets roll straight on and off by forklift or pallet jack, which keeps loading fast and reduces handling damage. Inside the box, hardwood floors, scuff liners and e-track with straps keep freight secured on the road.',
        ],
        idealFor: ['Warehouse and DC transfers', 'Cross-dock and forwarder moves', 'Recurring scheduled runs'],
        guide: { href: '/resources/prepare-palletized-freight', label: 'How to prepare palletized freight' },
    },
    {
        id: 'port',
        icon: Anchor,
        title: 'Port & Terminal Deliveries',
        intro:
            'TWIC-approved drivers for pickups and deliveries that require unescorted access to secure areas of maritime facilities.',
        body: [
            'Marine terminals and other regulated facilities restrict who may enter secure areas. Our TWIC-credentialed operations avoid the escort delays and refused entries that can stall a delivery. Let us know the facility and any appointment or registration requirements when you request a quote.',
        ],
        idealFor: ['Palletized freight to and from terminals', 'Facilities requiring TWIC access', 'Bonded and high-security corridors'],
        guide: { href: '/resources/twic-tsa-credentials-explained', label: 'TWIC and TSA credentials explained' },
    },
];

const EQUIPMENT = [
    ['Truck type', '26ft dock-high straight box truck'],
    ['Interior', 'Approx. 26 ft × 95″ × 95″ (about 1,630 cu ft)'],
    ['Pallet capacity', 'Up to 12 standard 48″ × 40″ pallets'],
    ['Payload', '10,000+ lbs'],
    ['Liftgate', 'Maxon hydraulic, 3,300+ lbs rating'],
    ['Onboard equipment', 'Pallet jack, e-track, straps, scuff liners'],
    ['Visibility', 'Telematics with live GPS status; digital proof of delivery'],
    ['Fleet', '2 dedicated power units'],
];

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                eyebrow="Services"
                title="Freight Services"
                description="One versatile truck type, run by a direct carrier: dock-high 26ft box trucks with liftgates, for expedited, airport, port and ground-level deliveries."
            >
                <nav aria-label="Services on this page" className="mt-6 flex flex-wrap gap-2">
                    {SERVICES.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-slate-300 hover:text-white hover:border-sky-500/40 transition"
                        >
                            {s.title}
                        </a>
                    ))}
                </nav>
            </PageHeader>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 space-y-6">
                {SERVICES.map(({ id, icon: Icon, title, intro, body, idealFor, guide }) => (
                    <section
                        key={id}
                        id={id}
                        className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08]"
                    >
                        <div className="lg:col-span-8">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">{title}</h2>
                            </div>
                            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">{intro}</p>
                            {body.map((paragraph) => (
                                <p key={paragraph.slice(0, 24)} className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                            <p className="mt-4 text-sm">
                                <span className="text-slate-500">Read the guide: </span>
                                <Link href={guide.href} className="text-sky-400 hover:text-sky-300 underline underline-offset-2">
                                    {guide.label}
                                </Link>
                            </p>
                        </div>
                        <div className="lg:col-span-4">
                            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 mb-3">Ideal for</h3>
                            <ul className="space-y-2">
                                {idealFor.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                ))}
            </div>

            <section className="border-t border-white/[0.06] bg-[#06090D]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-5">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 block mb-1">Equipment</span>
                        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">Every Truck, Same Spec</h2>
                        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                            Both of our power units are configured the same way, so the truck we quote is the truck that shows up.
                            Service area: the continental United States, with daily runs on the JFK Airport corridor.
                        </p>
                        <Link
                            href="/contact#quote"
                            className="mt-6 inline-flex bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-xl transition shadow-lg shadow-sky-500/25"
                        >
                            Request a Quote
                        </Link>
                    </div>
                    <dl className="lg:col-span-7 rounded-2xl border border-white/[0.08] divide-y divide-white/[0.06]">
                        {EQUIPMENT.map(([label, value]) => (
                            <div key={label} className="grid grid-cols-5 gap-4 px-5 py-3.5 text-sm">
                                <dt className="col-span-2 text-slate-500">{label}</dt>
                                <dd className="col-span-3 text-slate-200 font-medium">{value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>
        </>
    );
}
