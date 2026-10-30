import Link from 'next/link';
import { ShieldCheck, Truck, FileCheck2, Phone } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { SITE, mailto } from '@/lib/site';

export const metadata = {
    title: 'About Us',
    description:
        'Umaja Logistics LLC is a small, direct motor carrier (MC# 1508261) running 26ft dock-high box trucks with Maxon liftgates for expedited freight and daily JFK air cargo runs.',
    alternates: { canonical: '/about' },
};

const VALUES = [
    {
        icon: Phone,
        title: 'Direct to the carrier',
        text: 'When you call dispatch, you reach the company that owns the trucks. No call centers, and no hand-offs to an unknown subcontractor.',
    },
    {
        icon: Truck,
        title: 'The right equipment',
        text: 'Dock-high 26ft boxes with hydraulic liftgates and pallet jacks, so one truck can serve a warehouse dock or a storefront curb.',
    },
    {
        icon: ShieldCheck,
        title: 'Security by habit',
        text: 'TSA-vetted and TWIC-approved operations for airport and port work, with sealed loads and documented chain of custody.',
    },
    {
        icon: FileCheck2,
        title: 'Paperwork you can rely on',
        text: 'Counts and condition are documented at pickup and delivery, and the signed proof of delivery is sent as soon as the load is complete.',
    },
];

export default function AboutPage() {
    return (
        <>
            <PageHeader
                eyebrow="About Umaja Logistics"
                title="Driven by Honor. Delivered with Pride."
                description="We are a focused, direct motor carrier built around one idea: a shipper should know exactly who has their freight, where it is, and when it will arrive."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                <article className="prose-content lg:col-span-7">
                    <h2>Who we are</h2>
                    <p>
                        {SITE.legalName} is a for-hire motor carrier operating under FMCSA authority MC# {SITE.mcNumber}, with
                        headquarters in Wilmington, Delaware. We run a dedicated fleet of two power units, each a 26-foot
                        dock-high straight box truck equipped with a Maxon hydraulic liftgate.
                    </p>
                    <p>
                        Our work centers on freight that cannot afford to wait or wander: expedited and dedicated runs across the
                        United States, and daily trips on the JFK Airport cargo corridor for freight forwarders, airlines’ ground
                        handlers and the businesses they serve.
                    </p>

                    <h2>What we haul</h2>
                    <p>
                        A 26ft box truck sits in a useful middle ground. It carries up to 12 standard pallets and more than 10,000
                        lbs, yet it can still reach city storefronts, office buildings and congested airport cargo areas where a
                        tractor-trailer struggles. Typical loads for us include:
                    </p>
                    <ul>
                        <li>Palletized freight that has to arrive by a specific appointment time.</li>
                        <li>Export cargo going to airline terminals at JFK, and import recoveries coming out of them.</li>
                        <li>Deliveries to businesses with no loading dock, using the liftgate and onboard pallet jack.</li>
                        <li>Dock-to-dock transfers between warehouses, distribution centers and forwarders.</li>
                        <li>Port and terminal moves that require TWIC-credentialed access.</li>
                    </ul>
                    <p>
                        See our <Link href="/services">services page</Link> for details on each, or our{' '}
                        <Link href="/resources/26ft-box-truck-capacity">capacity guide</Link> to check whether your shipment
                        fits.
                    </p>

                    <h2>Why a small, dedicated fleet</h2>
                    <p>
                        Large networks are built for volume. Ours is built for attention. With a small fleet, the person who
                        quotes your load is close to the person who dispatches it, and the driver who picks it up is the one who
                        delivers it. That means fewer hand-offs, faster answers and a clear line of responsibility from the
                        rate confirmation to the proof of delivery.
                    </p>

                    <h2>Insurance and compliance</h2>
                    <p>
                        We carry $1,000,000 in auto liability coverage and $100,000+ in cargo coverage, and our carrier packet,
                        including the certificate of insurance, is available on request. Our operations are vetted for TSA
                        air cargo work and our drivers are TWIC-approved for unescorted access to secure port areas.
                    </p>
                    <p>
                        We encourage every customer to verify us before tendering freight, the same way they should verify any
                        carrier. Our guide on <Link href="/resources/verify-motor-carrier">how to verify a motor carrier</Link>{' '}
                        explains the steps.
                    </p>

                    <h2>Our motto</h2>
                    <p>
                        “Driven by honor. Delivered with pride.” For us that means doing what we said we would do, telling you
                        early when something changes, and treating every load as if our name were on the box. It is.
                    </p>
                </article>

                <aside className="lg:col-span-5 space-y-5">
                    <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                        <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 mb-4">Company Details</h2>
                        <dl className="space-y-3 text-sm">
                            {[
                                ['Legal name', SITE.legalName],
                                ['Operating authority', `MC# ${SITE.mcNumber}`],
                                ['Headquarters', `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`],
                                ['Fleet', '2 power units: 26ft dock-high box trucks with Maxon liftgates'],
                                ['Service area', 'Nationwide (USA), with daily JFK Airport corridors'],
                                ['Insurance', '$1,000,000 auto liability • $100,000+ cargo'],
                            ].map(([label, value]) => (
                                <div key={label} className="grid grid-cols-3 gap-3 border-b border-white/[0.06] pb-3 last:border-0 last:pb-0">
                                    <dt className="text-slate-500">{label}</dt>
                                    <dd className="col-span-2 text-slate-200">{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        {VALUES.map(({ icon: Icon, title, text }) => (
                            <div key={title} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                                <div className="flex items-center gap-2.5 mb-2">
                                    <Icon className="w-5 h-5 text-sky-400" />
                                    <h3 className="text-sm font-bold text-white">{title}</h3>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-5 sm:p-6 rounded-2xl bg-sky-500/10 border border-sky-500/30">
                        <h2 className="text-base font-black text-white uppercase">Work with us</h2>
                        <p className="text-sm text-slate-300 mt-1 mb-4">Get a quote or request our carrier packet.</p>
                        <div className="flex flex-wrap gap-2.5">
                            <Link
                                href="/contact#quote"
                                className="bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-black uppercase tracking-wider px-5 py-3 rounded-xl transition"
                            >
                                Get a Quote
                            </Link>
                            <a
                                href={mailto(SITE.emails.dispatch, `Carrier Packet Request - MC ${SITE.mcNumber}`)}
                                className="bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-200 text-xs font-bold px-5 py-3 rounded-xl transition"
                            >
                                Request Carrier Packet
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
}
