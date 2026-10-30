import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { formatDate } from '@/content/articles';

export default function ArticleCard({ article }) {
    return (
        <article className="group relative flex flex-col p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-sky-500/40 transition-all">
            <div className="flex items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-wider">
                <span className="text-sky-400 font-bold">{article.category}</span>
                <span className="text-slate-500">{article.readingMinutes} min read</span>
            </div>
            <h3 className="mt-3 text-base sm:text-lg font-bold text-white leading-snug">
                <Link href={`/resources/${article.slug}`} className="after:absolute after:inset-0 group-hover:text-sky-400 transition">
                    {article.title}
                </Link>
            </h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-1">{article.description}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <time dateTime={article.published}>{formatDate(article.published)}</time>
                <span className="flex items-center gap-1 font-bold text-sky-400">
                    Read <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
            </div>
        </article>
    );
}
