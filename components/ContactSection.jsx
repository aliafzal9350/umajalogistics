import { Phone, Mail, MapPin } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import { SITE } from '@/lib/site';

export default function ContactSection({ id = 'contact', headingLevel = 'h2' }) {
    const Heading = headingLevel;

    return (
        <section id={id} className="scroll-mt-24 py-14 sm:py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
                {/* Left Column: Direct Dispatch Contacts */}
                <div className="lg:col-span-5 space-y-6">
                    <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
                            24/7 DIRECT DISPATCH
                        </span>
                        <Heading className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1 mb-3">
                            Ready to Move Your Load?
                        </Heading>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                            Talk directly to the carrier: dedicated expedited runs and fast rate confirmations with no broker
                            in the middle.
                        </p>
                    </div>

                    <div className="space-y-3.5">
                        <a
                            href={SITE.phones.primary.href}
                            className="block p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-sky-500/40 transition group"
                        >
                            <div className="flex items-center gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-sky-500 text-slate-950 flex items-center justify-center shadow-lg shadow-sky-500/25 flex-shrink-0 group-hover:scale-105 transition-transform">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                                        Primary Dispatch Line
                                    </span>
                                    <span className="text-base sm:text-lg font-black text-white group-hover:text-sky-400 transition">
                                        {SITE.phones.primary.display}
                                    </span>
                                    <span className="text-xs text-slate-500 block">Alt: {SITE.phones.alt.display}</span>
                                </div>
                            </div>
                        </a>

                        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                            <div className="flex items-center gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/[0.08] text-sky-400 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                                        Rate Cons & Dispatch Emails
                                    </span>
                                    <a
                                        href={`mailto:${SITE.emails.dispatch}`}
                                        className="text-xs sm:text-sm font-bold text-slate-200 hover:text-sky-400 transition block truncate"
                                    >
                                        {SITE.emails.dispatch}
                                    </a>
                                    <a
                                        href={`mailto:${SITE.emails.alt}`}
                                        className="text-[11px] text-slate-400 hover:text-sky-400 transition block mt-0.5 truncate"
                                    >
                                        {SITE.emails.alt}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                            <div className="flex items-center gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/[0.08] text-slate-300 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="text-xs">
                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                                        Corporate Dispatch Office
                                    </span>
                                    <p className="font-bold text-slate-200 mt-0.5">{SITE.address.street}</p>
                                    <p className="text-slate-500">
                                        {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Rate Confirmation Form */}
                <div className="lg:col-span-7">
                    <QuoteForm />
                </div>
            </div>
        </section>
    );
}
