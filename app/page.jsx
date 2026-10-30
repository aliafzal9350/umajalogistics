import Link from 'next/link';
import {
    ShieldCheck,
    Truck,
    Layers,
    Plane,
    Anchor,
    ArrowUpRight,
    CheckCircle2,
    Clock,
    Warehouse,
    FileCheck2,
    MessageSquare,
    ChevronRight,
} from 'lucide-react';
import HomeHero from '@/components/HomeHero';
import ContactSection from '@/components/ContactSection';
import ArticleCard from '@/components/ArticleCard';
import JsonLd from '@/components/JsonLd';
import { ARTICLES } from '@/content/articles';
import { SITE, mailto } from '@/lib/site';

export const metadata = {
    alternates: { canonical: '/' },
};

const SPEC_CARDS = [
    {
        icon: Truck,
        title: '26ft Straight Box',
        text: '10-12 standard pallet capacity with hardwood floors, scuff liners, and air-ride cargo protection.',
        rows: [
            ['Dimensions', '26ft × 95" × 95"'],
            ['Volume', '~1,630 cu. ft'],
            ['Payload', '10,000+ lbs'],
        ],
    },
    {
        icon: Layers,
        title: 'Maxon Liftgate',
        text: 'Commercial heavy-duty hydraulic platform enabling ground-level delivery without a loading dock.',
        rows: [
            ['Lift Rating', '3,300+ lbs Hydraulic'],
            ['Equipment', 'Pallet Jack Onboard'],
            ['Securing', 'E-Tracks & Straps'],
        ],
    },
    {
        icon: ShieldCheck,
        title: 'TSA & Port TWIC',
        text: 'Vetted for air cargo transfers, IAC air freight, and unescorted maritime container seaport access.',
        rows: [
            ['Aviation', 'TSA Change 10'],
            ['Maritime', 'TWIC Card Approved'],
            ['Access', 'Port & Airport Ramps'],
        ],
    },
    {
        icon: CheckCircle2,
        title: '2 Power Units',
        text: 'Dedicated power units with 24/7 telematics, live GPS status, and instant digital POD delivery.',
        rows: [
            ['Authority', `MC# ${SITE.mcNumber}`],
            ['Cargo Coverage', '$100K+ Insured'],
            ['Liability', '$1,000,000 Auto'],
        ],
    },
];

const SERVICES = [
    {
        icon: Clock,
        title: 'Expedited & Dedicated Runs',
        text: 'Your freight is the only freight on the truck, moving straight from pickup to delivery with no terminal transfers.',
        href: '/services#expedited',
    },
    {
        icon: Plane,
        title: 'JFK Air Cargo Trucking',
        text: 'Daily runs to airline and handler terminals for export tenders, import recoveries and forwarder transfers.',
        href: '/services#air-cargo',
    },
    {
        icon: Layers,
        title: 'Liftgate Deliveries',
        text: 'Ground-level pickups and deliveries for storefronts, offices and job sites without a loading dock.',
        href: '/services#liftgate',
    },
    {
        icon: Warehouse,
        title: 'Dock-to-Dock Freight',
        text: 'Dock-high box trucks that line up with warehouse doors for quick, clean pallet loading and unloading.',
        href: '/services#dock',
    },
];

const STEPS = [
    {
        icon: MessageSquare,
        title: 'Send your lane',
        text: 'Origin, destination, pallet count, weights, ready time, and whether each end has a dock.',
    },
    {
        icon: FileCheck2,
        title: 'Confirm the rate',
        text: 'We confirm price, equipment and appointment times in a written rate confirmation.',
    },
    {
        icon: Truck,
        title: 'Pickup to POD',
        text: 'The driver counts and documents at both ends, and you receive the signed proof of delivery.',
    },
];

export default function HomePage() {
    return (
        <>
            <JsonLd
                data={{
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    name: SITE.legalName,
                    alternateName: SITE.name,
                    url: SITE.url,
                    description: SITE.description,
                    email: SITE.emails.dispatch,
                    telephone: '+1-646-973-6672',
                    address: {
                        '@type': 'PostalAddress',
                        streetAddress: SITE.address.street,
                        addressLocality: SITE.address.city,
                        addressRegion: SITE.address.region,
                        postalCode: SITE.address.postalCode,
                        addressCountry: SITE.address.countryCode,
                    },
                    areaServed: 'US',
                }}
            />

            <HomeHero />

            {/* STRUCTURED FLEET SPECIFICATIONS STRIP */}
            <section id="specs" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-white/[0.06]">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
                    <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 block mb-1">
                            ENGINEERING & CAPACITY
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                            Commercial Fleet Specifications
                        </h2>
                    </div>
                    <p className="text-sm text-slate-400 max-w-md font-medium">
                        Configured for rapid warehouse dock loading, ground-level liftgate operations, and restricted airport/port
                        facilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    {SPEC_CARDS.map(({ icon: Icon, title, text, rows }) => (
                        <div
                            key={title}
                            className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-sky-500/40 transition-all group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                                <Icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-bold text-white mb-1">{title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed mb-4">{text}</p>
                            <dl className="space-y-2 text-xs border-t border-white/[0.06] pt-3 text-slate-300">
                                {rows.map(([label, value]) => (
                                    <div key={label} className="flex justify-between gap-3">
                                        <dt className="text-slate-500">{label}</dt>
                                        <dd className="font-semibold text-slate-200 text-right">{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-sm text-slate-400">
                    Not sure your freight fits? Read our guide to{' '}
                    <Link href="/resources/26ft-box-truck-capacity" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">
                        26ft box truck capacity
                    </Link>
                    .
                </p>
            </section>

            {/* SERVICES OVERVIEW */}
            <section className="py-14 sm:py-16 bg-[#06090D] border-y border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                        <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 block mb-1">
                                WHAT WE DO
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                                Freight Services
                            </h2>
                        </div>
                        <Link
                            href="/services"
                            className="text-sm font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition"
                        >
                            All services <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                        {SERVICES.map(({ icon: Icon, title, text, href }) => (
                            <Link
                                key={title}
                                href={href}
                                className="group p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-sky-500/40 transition-all"
                            >
                                <Icon className="w-6 h-6 text-sky-400 mb-4" />
                                <h3 className="text-base font-bold text-white mb-1 group-hover:text-sky-400 transition">{title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECURITY & COMPLIANCE SECTION */}
            <section id="compliance" className="py-14 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
                        <div className="lg:col-span-6 space-y-4">
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
                                SECURITY & COMPLIANCE
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                                High-Security Port & Airport Clearances
                            </h2>
                            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                                Complete federal compliance and authorization for secure aviation ramps, maritime marine terminals,
                                and bonded transport corridors.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <Plane className="w-4 h-4 text-sky-400" />
                                        <h3 className="text-xs font-bold text-white uppercase">TSA Certified Change 10</h3>
                                    </div>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        Authorized for indirect air carrier (IAC) freight, airport transfer ramps, and strict custody
                                        protocols.
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <Anchor className="w-4 h-4 text-sky-400" />
                                        <h3 className="text-xs font-bold text-white uppercase">TWIC Card Approved</h3>
                                    </div>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        Unescorted access to maritime container ports, marine terminals, and restricted corridors.
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-400">
                                What do these credentials mean for your freight?{' '}
                                <Link
                                    href="/resources/twic-tsa-credentials-explained"
                                    className="text-sky-400 hover:text-sky-300 underline underline-offset-2"
                                >
                                    TWIC and TSA explained
                                </Link>
                                .
                            </p>
                        </div>

                        {/* Right: Carrier Verification Summary */}
                        <div className="lg:col-span-6 p-5 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-5 gap-3">
                                <div>
                                    <span className="text-[10px] font-mono uppercase font-bold text-sky-400 tracking-wider">
                                        CARRIER VERIFICATION FILE
                                    </span>
                                    <h3 className="text-base sm:text-lg font-black text-white mt-0.5 uppercase">{SITE.legalName}</h3>
                                </div>
                                <span className="text-[10px] sm:text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-md flex-shrink-0">
                                    ACTIVE & INSURED
                                </span>
                            </div>

                            <dl className="grid grid-cols-2 gap-3 text-xs">
                                {[
                                    ['Motor Carrier', `MC# ${SITE.mcNumber}`],
                                    ['Cargo Insurance', '$100,000+ Active'],
                                    ['Power Units', '2 Dedicated Units'],
                                    ['Auto Liability', '$1,000,000'],
                                ].map(([label, value]) => (
                                    <div key={label} className="p-3 sm:p-3.5 rounded-xl bg-black/40 border border-white/[0.04]">
                                        <dt className="text-slate-500 text-[11px]">{label}</dt>
                                        <dd className="text-white font-mono font-bold mt-0.5">{value}</dd>
                                    </div>
                                ))}
                            </dl>

                            <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                                <span className="text-xs text-slate-400">Carrier Packet & COI ready for dispatch</span>
                                <a
                                    href={mailto(SITE.emails.dispatch, `Carrier Packet Request - MC ${SITE.mcNumber}`)}
                                    className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition flex-shrink-0"
                                >
                                    <span>Request Packet</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-14 sm:py-16 bg-[#06090D] border-y border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 block mb-1">
                        HOW BOOKING WORKS
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-10">
                        From Quote to Proof of Delivery
                    </h2>
                    <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                        {STEPS.map(({ icon: Icon, title, text }, i) => (
                            <li key={title} className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="w-8 h-8 rounded-lg bg-sky-500 text-slate-950 font-black text-sm flex items-center justify-center">
                                        {i + 1}
                                    </span>
                                    <Icon className="w-5 h-5 text-sky-400" />
                                </div>
                                <h3 className="text-base font-bold text-white mb-1">{title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* LATEST RESOURCES */}
            <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 block mb-1">
                            SHIPPER RESOURCES
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">Latest Guides</h2>
                    </div>
                    <Link
                        href="/resources"
                        className="text-sm font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition"
                    >
                        All guides <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                    {ARTICLES.slice(0, 3).map((article) => (
                        <ArticleCard key={article.slug} article={article} />
                    ))}
                </div>
            </section>

            {/* DISPATCH & RATE CONFIRMATION SECTION */}
            <div className="border-t border-white/[0.06]">
                <ContactSection />
            </div>
        </>
    );
}
