import Link from 'next/link';

export default function PageHeader({ eyebrow, title, description, breadcrumbs, uppercase = true, children }) {
    return (
        <section className="border-b border-white/[0.06] bg-radial-grid">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
                {breadcrumbs && (
                    <nav aria-label="Breadcrumb" className="mb-4 text-xs text-slate-400">
                        <ol className="flex flex-wrap items-center gap-1.5">
                            {breadcrumbs.map((crumb, i) => (
                                <li key={crumb.href ?? crumb.label} className="flex items-center gap-1.5">
                                    {i > 0 && <span className="text-slate-600">/</span>}
                                    {crumb.href ? (
                                        <Link href={crumb.href} className="hover:text-sky-400 transition">
                                            {crumb.label}
                                        </Link>
                                    ) : (
                                        <span aria-current="page" className="text-slate-300">
                                            {crumb.label}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                )}
                {eyebrow && (
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 block mb-2">{eyebrow}</span>
                )}
                <h1
                    className={`text-3xl sm:text-5xl font-black text-white tracking-tight max-w-4xl leading-tight ${
                        uppercase ? 'uppercase' : ''
                    }`}
                >
                    {title}
                </h1>
                {description && <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">{description}</p>}
                {children}
            </div>
        </section>
    );
}
