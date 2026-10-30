'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, ChevronRight, Menu, X, Truck, Info, BookOpen, HelpCircle, Send } from 'lucide-react';
import { SITE, NAV_LINKS } from '@/lib/site';

const NAV_ICONS = {
    '/services': Truck,
    '/about': Info,
    '/resources': BookOpen,
    '/faq': HelpCircle,
    '/contact': Send,
};

export default function SiteHeader() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Close the drawer whenever the route changes.
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

    return (
        <>
            {/* 1. TOP UTILITY STATUS BAR */}
            <div className="bg-[#05080C] text-slate-400 text-xs py-2 px-4 sm:px-6 lg:px-10 border-b border-white/[0.06]">
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
                    <div className="flex items-center gap-4 sm:gap-6">
                        <a
                            href={SITE.phones.primary.href}
                            className="flex items-center gap-2 hover:text-white transition font-medium"
                        >
                            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse flex-shrink-0" />
                            <span className="text-slate-200 font-semibold text-xs">{SITE.phones.primary.display}</span>
                            <span className="text-slate-600 hidden sm:inline">•</span>
                            <span className="text-slate-400 hidden sm:inline">{SITE.phones.alt.display}</span>
                        </a>

                        <a
                            href={`mailto:${SITE.emails.dispatch}`}
                            className="hidden md:flex items-center gap-1.5 hover:text-slate-200 transition text-slate-400"
                        >
                            <Mail className="w-3.5 h-3.5 text-sky-400" />
                            <span>{SITE.emails.dispatch}</span>
                        </a>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4 text-xs font-mono">
                        <span className="hidden lg:inline text-slate-400 font-sans">
                            Wilmington, DE • Operating All Over USA • JFK Corridors
                        </span>
                        <span className="text-sky-400 font-bold bg-sky-400/10 px-2 py-0.5 rounded border border-sky-400/20 sm:bg-transparent sm:p-0 sm:border-0">
                            MC# {SITE.mcNumber}
                        </span>
                        <span className="text-slate-500 hidden sm:inline">•</span>
                        <span className="text-slate-300 hidden sm:inline">2 Dedicated Power Units</span>
                    </div>
                </div>
            </div>

            {/* 2. FROSTED MINIMAL NAVBAR & MOBILE DRAWER */}
            <header className="bg-[#080C10]/85 backdrop-blur-xl sticky top-0 z-50 border-b border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between">
                    {/* Typographic Wordmark */}
                    <Link href="/" className="flex flex-col group" aria-label={`${SITE.name} home`}>
                        <span className="text-lg sm:text-2xl font-black tracking-tight text-white leading-none uppercase group-hover:text-sky-400 transition-colors">
                            UMAJA LOGISTICS
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-sky-400 mt-1 uppercase">
                            LLC • MC# {SITE.mcNumber}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav aria-label="Main" className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-400">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={isActive(link.href) ? 'page' : undefined}
                                className={isActive(link.href) ? 'text-white hover:text-sky-400 transition' : 'hover:text-white transition'}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Hand Actions */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <a
                            href={SITE.phones.primary.href}
                            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition"
                        >
                            <Phone className="w-3.5 h-3.5 text-sky-400" />
                            <span>{SITE.phones.primary.display}</span>
                        </a>
                        <Link
                            href="/contact#quote"
                            className="bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-black uppercase tracking-wider px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl transition shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 flex items-center gap-1.5"
                        >
                            <span>Get a Quote</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                        </Link>

                        {/* Mobile Menu Toggle Button */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-nav"
                            className="lg:hidden p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5 text-sky-400" /> : <Menu className="w-5 h-5 text-slate-200" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Drawer */}
                {mobileMenuOpen && (
                    <div id="mobile-nav" className="lg:hidden bg-[#080C10]/98 border-b border-white/[0.1] px-4 py-5 shadow-2xl backdrop-blur-2xl">
                        <nav aria-label="Mobile" className="max-w-7xl mx-auto space-y-4">
                            <div className="grid grid-cols-2 gap-2">
                                {NAV_LINKS.map((link) => {
                                    const Icon = NAV_ICONS[link.href] ?? ChevronRight;
                                    const highlight = link.href === '/contact';
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            aria-current={isActive(link.href) ? 'page' : undefined}
                                            className={`flex items-center gap-2.5 p-3 rounded-xl text-xs font-bold uppercase tracking-wide transition border ${
                                                highlight
                                                    ? 'bg-sky-500/10 hover:bg-sky-500/20 border-sky-500/30 text-sky-400'
                                                    : 'bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.06] text-slate-200'
                                            }`}
                                        >
                                            <Icon className="w-4 h-4 text-sky-400" />
                                            <span>{link.label}</span>
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* Direct Call & Dispatch Details in Drawer */}
                            <div className="pt-3 border-t border-white/[0.06] space-y-2">
                                <span className="text-[10px] font-mono uppercase font-bold text-slate-500 tracking-wider block">
                                    24/7 Direct Carrier Dispatch
                                </span>
                                <div className="flex flex-col gap-2">
                                    <a
                                        href={SITE.phones.primary.href}
                                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-bold text-white hover:border-sky-500/40 transition"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-sky-400" />
                                            <span>{SITE.phones.primary.display}</span>
                                        </div>
                                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">PRIMARY</span>
                                    </a>
                                    <a
                                        href={SITE.phones.alt.href}
                                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-bold text-slate-300 hover:border-sky-500/40 transition"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-slate-400" />
                                            <span>{SITE.phones.alt.display}</span>
                                        </div>
                                        <span className="text-[10px] font-mono text-slate-400">ALT</span>
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
}
