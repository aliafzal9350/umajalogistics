import PageHeader from '@/components/PageHeader';
import ArticleCard from '@/components/ArticleCard';
import { ARTICLES } from '@/content/articles';

export const metadata = {
    title: 'Freight Shipping Resources & Guides',
    description:
        'Practical guides from a working carrier: box truck capacity, liftgate deliveries, JFK air cargo trucking, freight paperwork, carrier verification and more.',
    alternates: { canonical: '/resources' },
};

export default function ResourcesPage() {
    return (
        <>
            <PageHeader
                eyebrow="Resources"
                title="Freight Shipping Guides"
                description="Straightforward answers to the questions shippers, forwarders and brokers ask us every week, written by the team that runs the trucks."
            />
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {ARTICLES.map((article) => (
                        <ArticleCard key={article.slug} article={article} />
                    ))}
                </div>
            </section>
        </>
    );
}
