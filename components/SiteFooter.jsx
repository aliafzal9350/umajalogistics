import Link from 'next/link';
import { SITE, NAV_LINKS, LEGAL_LINKS } from '@/lib/site';

export default function SiteFooter() {
    return (
        <footer className="bg-[#04070A] text-slate-400 py-12 sm:py-14 px-4 sm:px-6 lg:px-10 border-t border-white/[0.06]">
            <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                    {/* Legal Entity & Authority */}
                    <div className="col-span-2 space-y-3">
                        <div className="flex flex-col">
                            <span className="text-xl font-black text-white tracking-tight uppercase">{SITE.legalName}</span>
                            <span className="text-xs font-mono font-bold text-sky-400 mt-0.5">MC# {SITE.mcNumber}</span>
                        </div>
                        <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                            Commercial freight transportation specializing in 26ft dock-high straight box truck operations,
                            Maxon liftgate deliveries, and TSA / TWIC credentialed airport and port runs.
                        </p>
                        <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono">
                            <span className="bg-sky-500/10 text-sky-400 px-2.5 py-0.5 rounded font-bold">2 Power Units</span>
                            <span className="text-slate-500">•</span>
                            <span className="text-slate-300">$100K+ Cargo • $1M Liability</span>
                        </div>
                    </div>

                    {/* Site Navigation */}
                    <div className="space-y-3 text-sm">
                        <h2 className="text-xs font-black text-white uppercase tracking-widest">Company</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-sky-400 transition">
                                    Home
                                </Link>
                            </li>
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-sky-400 transition">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-3 text-sm">
                        <h2 className="text-xs font-black text-white uppercase tracking-widest">Legal</h2>
                        <ul className="space-y-2">
                            {LEGAL_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-sky-400 transition">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Direct Contact & Headquarters */}
                    <div className="col-span-2 space-y-3 text-sm">
                        <h2 className="text-xs font-black text-white uppercase tracking-widest">Dispatch & Headquarters</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href={SITE.phones.primary.href} className="hover:text-sky-400 transition font-bold text-white">
                                    {SITE.phones.primary.display}
                                </a>
                                <span className="text-slate-600"> • </span>
                                <a href={SITE.phones.alt.href} className="hover:text-sky-400 transition">
                                    {SITE.phones.alt.display}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${SITE.emails.dispatch}`} className="hover:text-sky-400 transition break-all">
                                    {SITE.emails.dispatch}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${SITE.emails.alt}`} className="hover:text-sky-400 transition break-all">
                                    {SITE.emails.alt}
                                </a>
                            </li>
                        </ul>
                        <address className="not-italic text-slate-400 leading-relaxed">
                            {SITE.address.street}
                            <br />
                            {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
                            <br />
                            {SITE.address.country}
                        </address>
                    </div>
                </div>

                <div className="pt-6 sm:pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 text-center sm:text-left">
                    <p>
                        © {new Date().getFullYear()} {SITE.legalName}. All rights reserved. FMCSA operating authority MC#{' '}
                        {SITE.mcNumber}.
                    </p>
                    <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6 font-mono text-[10px] sm:text-[11px]">
                        <span>TSA CHANGE 10</span>
                        <span>TWIC CARD APPROVED</span>
                        <span>DOCK HIGH & LIFTGATE</span>
                    </div>
                </div>

                {/* Attribution required by the 3D model's Creative Commons licence */}
                <p className="text-[11px] text-slate-500 text-center sm:text-left">
                    3D truck model:{' '}
                    <a
                        href="https://sketchfab.com/3d-models/2003-gmc-topkick-c6500-9fcaf568e14f4921a85be14caf8dc98a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-slate-300"
                    >
                        “2003 GMC TopKick C6500”
                    </a>{' '}
                    by{' '}
                    <a
                        href="https://sketchfab.com/ddiaz-design"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-slate-300"
                    >
                        Ddiaz Design
                    </a>
                    , licensed under{' '}
                    <a
                        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-slate-300"
                    >
                        CC BY-NC-SA 4.0
                    </a>
                    . Modified with Umaja Logistics lettering and artwork.
                </p>
            </div>
        </footer>
    );
}
