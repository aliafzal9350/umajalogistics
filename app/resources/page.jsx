import { pageMetadata } from '@/lib/metadata';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import { ARTICLES } from '@/content/articles';

export const metadata = pageMetadata('Freight Shipping Guides', 'Plan freight shipments with guides to box truck capacity, liftgate delivery, JFK air cargo, paperwork and carrier checks.', '/resources');

export default function ResourcesPage() {
    return (
        <>
            <PageHeader
                eyebrow="Resources"
                title="Freight Shipping Guides"
                description="Straightforward answers to the questions shippers, forwarders and brokers ask us every week, written by the team that runs the trucks."
            />
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
                <aside className="mb-8 rounded-2xl border border-sky-400/25 bg-sky-400/5 p-6"><h2 className="text-xl font-bold text-white">Plan your pallet layout</h2><p className="text-slate-300 mt-2">Estimate floor positions and compare weight and height with confirmed truck limits.</p><Link href="/tools/pallet-calculator" className="inline-block mt-4 text-sky-400 underline">Open the pallet calculator →</Link></aside>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {ARTICLES.map((article) => (
                        <ArticleCard key={article.slug} article={article} />
                    ))}
                </div>
            </section>
        </>
    );
}
