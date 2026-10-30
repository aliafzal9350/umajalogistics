import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata = {
    title: 'Page Not Found',
    robots: { index: false },
};

const LINKS = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Freight services' },
    { href: '/resources', label: 'Shipping guides' },
    { href: '/contact', label: 'Contact dispatch' },
];

export default function NotFound() {
    return (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">Error 404</span>
            <h1 className="mt-2 text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">Wrong Turn</h1>
            <p className="mt-4 text-base text-slate-300">
                The page you were looking for does not exist or has moved. Try one of these instead, or call dispatch at{' '}
                <a href={SITE.phones.primary.href} className="text-sky-400 underline">
                    {SITE.phones.primary.display}
                </a>
                .
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
                {LINKS.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="px-4 py-2.5 rounded-xl text-sm font-bold bg-white/[0.04] border border-white/[0.1] text-slate-200 hover:border-sky-500/40 hover:text-white transition"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </section>
    );
}
