import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import { pageMetadata } from '@/lib/metadata';
import { SERVICE_DETAILS } from '@/lib/service-details';

export function generateStaticParams() {
    return SERVICE_DETAILS.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
    const service = SERVICE_DETAILS.find(({ slug }) => slug === params.slug);
    if (!service) notFound();
    return pageMetadata(service.title, service.description, `/services/${service.slug}`);
}

export default function ServicePage({ params }) {
    const service = SERVICE_DETAILS.find(({ slug }) => slug === params.slug);
    if (!service) notFound();

    return (
        <>
            <PageHeader
                eyebrow="Freight services"
                title={service.title}
                description={service.description}
                breadcrumbs={[{ href: '/', label: 'Home' }, { href: '/services', label: 'Services' }, { label: service.title }]}
            />
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-10">
                <div className="space-y-7 lg:col-span-2">
                    {service.sections.map(([heading, body]) => (
                        <section key={heading}>
                            <h2 className="mb-2 text-xl font-bold text-white">{heading}</h2>
                            <p className="leading-relaxed text-slate-300">{body}</p>
                        </section>
                    ))}
                    {service.timing && (
                        <section>
                            <h2 className="mb-2 text-xl font-bold text-white">Which cutoff applies?</h2>
                            <p className="mb-3 text-slate-300">Confirm these times for your shipment with the handler and receiver.</p>
                            <table className="w-full table-fixed border-collapse text-left text-sm text-slate-300">
                                <thead className="text-white">
                                    <tr>
                                        <th scope="col" className="w-1/4 p-2">Move</th>
                                        <th scope="col" className="p-2">Time to confirm</th>
                                        <th scope="col" className="p-2">What to share</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {service.timing.map(([move, time, details]) => (
                                        <tr key={move} className="border-t border-white/10 align-top">
                                            <th scope="row" className="p-2 font-semibold text-white">{move}</th>
                                            <td className="p-2">{time}</td>
                                            <td className="p-2">{details}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    )}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">Booking questions</h2>
                        {service.questions.map(([question, answer]) => (
                            <details key={question} className="rounded-xl border border-white/10 p-4">
                                <summary className="cursor-pointer font-semibold text-white">{question}</summary>
                                <p className="mt-2 leading-relaxed text-slate-300">{answer}</p>
                            </details>
                        ))}
                    </section>
                    <div className="flex flex-wrap gap-x-5 gap-y-3 text-sky-400 underline">
                        <Link href={service.guide[1]}>{service.guide[0]}</Link>
                        <Link href="/tools/pallet-calculator">Check pallet fit</Link>
                    </div>
                </div>
                <aside className="self-start rounded-2xl border border-sky-400/25 bg-sky-400/5 p-6">
                    <h2 className="text-xl font-bold text-white">Quote checklist</h2>
                    <ul className="my-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                        {service.checklist.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <Link href="/tools/shipment-brief" className="inline-block rounded-xl bg-sky-500 px-4 py-3 text-sm font-bold text-slate-950 hover:bg-sky-400">
                        Build a shipment brief
                    </Link>
                    <Link href="/contact#quote" className="mt-4 block text-sm text-sky-400 underline">Contact dispatch directly</Link>
                </aside>
            </div>
        </>
    );
}
