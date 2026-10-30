import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ContactSection from '@/components/ContactSection';
import { SITE, mailto } from '@/lib/site';

export const metadata = {
    title: 'Contact & Get a Quote',
    description: `Call ${SITE.phones.primary.display} or email ${SITE.emails.dispatch} for box truck quotes, JFK air cargo runs, carrier packets and rate confirmations. MC# ${SITE.mcNumber}.`,
    alternates: { canonical: '/contact' },
};

export default function ContactPage() {
    return (
        <>
            <PageHeader
                eyebrow="Contact"
                title="Contact Dispatch"
                description="Quotes, bookings, carrier packets and shipment updates all go to the same team. Call for anything urgent; email for rate confirmations and documents."
            />

            <ContactSection id="dispatch" />

            <section className="border-t border-white/[0.06] bg-[#06090D]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                        <h2 className="text-base font-black text-white uppercase mb-3">What to include in a quote</h2>
                        <ul className="space-y-2 text-sm text-slate-400 list-disc pl-5 marker:text-sky-400">
                            <li>Pickup and delivery addresses</li>
                            <li>Ready time and required delivery time</li>
                            <li>Pallet count, dimensions and weight per pallet</li>
                            <li>Stackable or not</li>
                            <li>Dock or liftgate at each end</li>
                            <li>Air waybill numbers for airport freight</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                        <h2 className="text-base font-black text-white uppercase mb-3">Brokers & forwarders</h2>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Send rate confirmations and load tenders to{' '}
                            <a href={`mailto:${SITE.emails.dispatch}`} className="text-sky-400 underline break-all">
                                {SITE.emails.dispatch}
                            </a>
                            . For our authority, certificate of insurance and W-9,{' '}
                            <a
                                href={mailto(SITE.emails.dispatch, `Carrier Packet Request - MC ${SITE.mcNumber}`)}
                                className="text-sky-400 underline"
                            >
                                request the carrier packet
                            </a>
                            .
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                        <h2 className="text-base font-black text-white uppercase mb-3">Before you book</h2>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Check that your freight fits with our{' '}
                            <Link href="/resources/26ft-box-truck-capacity" className="text-sky-400 underline">
                                capacity guide
                            </Link>
                            , and see the <Link href="/faq" className="text-sky-400 underline">FAQ</Link> for insurance, credentials
                            and tracking. Mailing address: {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{' '}
                            {SITE.address.postalCode}.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
