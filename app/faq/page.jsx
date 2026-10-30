import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { SITE } from '@/lib/site';

export const metadata = {
    title: 'Frequently Asked Questions',
    description:
        'Answers about Umaja Logistics box truck capacity, liftgate service, JFK air cargo runs, insurance, credentials, quotes, tracking and proof of delivery.',
    alternates: { canonical: '/faq' },
};

const FAQ_GROUPS = [
    {
        heading: 'Equipment & capacity',
        items: [
            {
                q: 'How many pallets fit in your trucks?',
                a: (
                    <>
                        Up to 12 standard 48″ × 40″ pallets on the floor, loaded two across. The interior is about 26 ft long and
                        95″ wide and tall. Odd-sized pallets or crates may change the count, so send dimensions when you request a
                        quote. Our <Link href="/resources/26ft-box-truck-capacity">capacity guide</Link> explains the math.
                    </>
                ),
            },
            {
                q: 'What is the maximum weight you can carry?',
                a: (
                    <>
                        Our trucks are planned around a payload of 10,000+ lbs. Heavy freight often reaches the weight limit before
                        it fills the floor, so please give us weights per pallet, not just a total.
                    </>
                ),
            },
            {
                q: 'Do your trucks have liftgates?',
                a: (
                    <>
                        Yes. Every truck has a Maxon hydraulic liftgate rated at 3,300+ lbs and carries a pallet jack, so we can
                        pick up and deliver where there is no loading dock. Each pallet must be within the liftgate rating. See our{' '}
                        <Link href="/resources/liftgate-delivery-guide">liftgate delivery guide</Link>.
                    </>
                ),
            },
            {
                q: 'Can you deliver to a loading dock?',
                a: 'Yes. Our trucks are dock-high, so the box floor lines up with standard warehouse docks for forklift or pallet-jack loading.',
            },
        ],
    },
    {
        heading: 'Service & coverage',
        items: [
            {
                q: 'Where do you operate?',
                a: (
                    <>
                        We run expedited and dedicated loads across the United States, and we run daily on the JFK Airport cargo
                        corridor. Tell us the lane and we will confirm availability.
                    </>
                ),
            },
            {
                q: 'Do you combine my freight with other customers’ freight?',
                a: (
                    <>
                        Not on dedicated runs. Your shipment is the only freight on the truck and goes directly from pickup to
                        delivery. Read <Link href="/resources/expedited-vs-ltl">expedited freight vs. LTL</Link> for when that
                        matters.
                    </>
                ),
            },
            {
                q: 'Can you pick up from or deliver to JFK Airport cargo terminals?',
                a: (
                    <>
                        Yes. We deliver export freight to airline and handler terminals and recover released import freight. Send
                        the air waybill numbers and handler details with your request. Our{' '}
                        <Link href="/resources/jfk-air-cargo-trucking">JFK air cargo guide</Link> covers the process.
                    </>
                ),
            },
            {
                q: 'Do you haul hazardous materials?',
                a: 'Tell dispatch about any hazardous materials before you book, including the UN number, class and quantity. We will confirm whether we can carry the shipment under the applicable rules before accepting it.',
            },
        ],
    },
    {
        heading: 'Credentials, insurance & compliance',
        items: [
            {
                q: 'What is your MC number?',
                a: (
                    <>
                        Our FMCSA operating authority is MC# {SITE.mcNumber}. You can look us up on FMCSA’s public systems; our guide on{' '}
                        <Link href="/resources/verify-motor-carrier">verifying a motor carrier</Link> shows how.
                    </>
                ),
            },
            {
                q: 'What insurance do you carry?',
                a: '$1,000,000 auto liability and $100,000+ cargo coverage. We send a certificate of insurance naming you as certificate holder on request.',
            },
            {
                q: 'Are your drivers TSA and TWIC credentialed?',
                a: (
                    <>
                        Our operations are vetted for TSA air cargo work, and our drivers are TWIC-approved for unescorted access to
                        secure port areas. Learn what that means in{' '}
                        <Link href="/resources/twic-tsa-credentials-explained">TWIC and TSA credentials explained</Link>.
                    </>
                ),
            },
            {
                q: 'How do I get your carrier packet?',
                a: (
                    <>
                        Email <a href={`mailto:${SITE.emails.dispatch}`}>{SITE.emails.dispatch}</a> with the subject “Carrier
                        Packet Request” and we will send our authority, certificate of insurance and W-9.
                    </>
                ),
            },
        ],
    },
    {
        heading: 'Quotes, tracking & paperwork',
        items: [
            {
                q: 'What information do you need for a quote?',
                a: 'Pickup and delivery locations, ready and delivery times, pallet count with dimensions and weights, whether freight is stackable, and whether each end has a dock or needs the liftgate.',
            },
            {
                q: 'How do I book a load?',
                a: (
                    <>
                        Call dispatch at <a href={SITE.phones.primary.href}>{SITE.phones.primary.display}</a> or use the{' '}
                        <Link href="/contact#quote">quote request form</Link>. Once the rate is agreed, we confirm everything in a
                        written rate confirmation.
                    </>
                ),
            },
            {
                q: 'Can I track my shipment?',
                a: 'Our trucks have telematics with live GPS status, and dispatch provides updates by phone or email throughout the run.',
            },
            {
                q: 'How do I get proof of delivery?',
                a: (
                    <>
                        The receiver signs the delivery receipt, and we send the signed POD as soon as the delivery is complete. See{' '}
                        <Link href="/resources/bol-rate-confirmation-pod">our guide to freight paperwork</Link>.
                    </>
                ),
            },
        ],
    },
];

export default function FaqPage() {
    return (
        <>
            <PageHeader
                eyebrow="FAQ"
                title="Frequently Asked Questions"
                description="Quick answers about our trucks, service area, credentials and how booking works. Don't see your question? Call dispatch."
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 space-y-12">
                {FAQ_GROUPS.map((group) => (
                    <section key={group.heading}>
                        <h2 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight mb-4">{group.heading}</h2>
                        <div className="space-y-3">
                            {group.items.map(({ q, a }) => (
                                <details
                                    key={q}
                                    className="group rounded-2xl bg-white/[0.02] border border-white/[0.08] open:border-sky-500/30 transition"
                                >
                                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-4 sm:p-5 text-sm sm:text-base font-bold text-slate-100 [&::-webkit-details-marker]:hidden">
                                        <span>{q}</span>
                                        <ChevronDown className="w-4 h-4 text-sky-400 flex-shrink-0 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <div className="prose-content px-4 sm:px-5 pb-5 text-sm sm:text-base">
                                        <p>{a}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>
                ))}
                <p className="text-sm text-slate-400">
                    Still have a question? <Link href="/contact" className="text-sky-400 underline underline-offset-2">Contact us</Link>{' '}
                    or call {SITE.phones.primary.display}.
                </p>
            </div>
        </>
    );
}
