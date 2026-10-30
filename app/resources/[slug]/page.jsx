import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import ArticleCard from '@/components/ArticleCard';
import JsonLd from '@/components/JsonLd';
import { ARTICLES, getArticle, formatDate } from '@/content/articles';
import { SITE } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
    return ARTICLES.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }) {
    const article = getArticle(params.slug);
    if (!article) return {};
    const url = `/resources/${article.slug}`;
    return {
        title: article.title,
        description: article.description,
        alternates: { canonical: url },
        openGraph: {
            type: 'article',
            title: article.title,
            description: article.description,
            url,
            publishedTime: article.published,
            modifiedTime: article.updated ?? article.published,
        },
    };
}

export default function ArticlePage({ params }) {
    const article = getArticle(params.slug);
    if (!article) notFound();

    const { Body } = article;
    const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

    return (
        <>
            <JsonLd
                data={{
                    '@context': 'https://schema.org',
                    '@type': 'Article',
                    headline: article.title,
                    description: article.description,
                    datePublished: article.published,
                    dateModified: article.updated ?? article.published,
                    mainEntityOfPage: `${SITE.url}/resources/${article.slug}`,
                    author: { '@type': 'Organization', name: SITE.legalName, url: SITE.url },
                    publisher: { '@type': 'Organization', name: SITE.legalName, url: SITE.url },
                }}
            />
            <PageHeader
                uppercase={false}
                title={article.title}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Resources', href: '/resources' },
                    { label: article.category },
                ]}
            >
                <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-400">
                    <span>By the {SITE.name} dispatch team</span>
                    <span className="text-slate-600">•</span>
                    <time dateTime={article.published}>{formatDate(article.published)}</time>
                    <span className="text-slate-600">•</span>
                    <span>{article.readingMinutes} min read</span>
                </p>
            </PageHeader>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
                <article className="prose-content max-w-3xl">
                    <Body />
                    <hr />
                    <p className="text-sm text-slate-400">
                        This guide is general information for shippers and is not legal, regulatory or insurance advice.
                        Requirements change; confirm details with the relevant agency, facility or your own advisors. See our{' '}
                        <Link href="/disclaimer">disclaimer</Link>.
                    </p>
                </article>
            </div>

            <section className="border-t border-white/[0.06] bg-[#06090D]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
                    <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-6">Keep Reading</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                        {related.map((a) => (
                            <ArticleCard key={a.slug} article={a} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
