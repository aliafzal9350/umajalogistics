'use client';

import React, { useId, useState } from 'react';
import Link from 'next/link';
import { Send, Check, Phone } from 'lucide-react';
import { SITE } from '@/lib/site';

const INITIAL_FORM = {
    origin: '',
    destination: '',
    cargo: '',
    contact: '',
    liftgate: true,
    dimensions: '',
    windows: '',
    notes: '',
};

function buildBrief(form) {
    return [
        `Origin: ${form.origin}`,
        `Destination: ${form.destination}`,
        `Pallets / weight: ${form.cargo}`,
        form.dimensions ? `Loaded dimensions: ${form.dimensions}` : null,
        form.windows ? `Pickup / delivery windows: ${form.windows}` : null,
        `Liftgate & pallet jack required: ${form.liftgate ? 'Yes' : 'No'}`,
        form.contact ? `Contact: ${form.contact}` : null,
        form.notes ? `Notes: ${form.notes}` : null,
    ].filter(Boolean).join('\n');
}

function buildQuoteEmail(form) {
    const subject = `Freight Quote Request: ${form.origin} to ${form.destination}`;
    return `mailto:${SITE.emails.dispatch}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildBrief(form))}`;
}

function trackQuoteAction(event) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event });
}

const inputClass =
    'w-full bg-black/40 border border-white/[0.08] rounded-xl px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-white placeholder:text-slate-500 focus:border-sky-400 outline-none transition';

export default function QuoteForm({ prepareOnly = false }) {
    const id = useId();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({ ...INITIAL_FORM, liftgate: !prepareOnly });
    const [copyMessage, setCopyMessage] = useState('');

    const update = (field) => (e) =>
        setFormData({ ...formData, [field]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

    const openEmailDraft = () => {
        trackQuoteAction('quote_email_clicked');
        window.location.href = buildQuoteEmail(formData);
    };

    // This site has no backend: submitting opens the visitor's email app with the request pre-filled.
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!prepareOnly) openEmailDraft();
        setCopyMessage('');
        setIsSubmitted(true);
    };

    const copyBrief = async () => {
        try {
            await navigator.clipboard.writeText(buildBrief(formData));
            setCopyMessage('Brief copied.');
        } catch {
            setCopyMessage('Select and copy the text in the brief below.');
            return;
        }
        trackQuoteAction('quote_brief_copied');
    };

    return (
        <div id="quote" className="scroll-mt-28 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] shadow-2xl">
            <div className="flex items-center justify-between mb-5 gap-3">
                <div>
                    <h3 className="text-lg sm:text-xl font-black text-white uppercase">{prepareOnly ? 'Shipment details' : 'Rapid Rate Confirmation'}</h3>
                    <p className="text-sm text-slate-400 mt-0.5">{prepareOnly ? 'Create a brief you can share with your team or email to dispatch.' : 'Send your shipment details for an availability and rate check.'}</p>
                </div>
                {!prepareOnly && <span className="bg-sky-500/10 border border-sky-500/20 text-sky-400 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold flex-shrink-0">
                    24/7 STATUS
                </span>}
            </div>

            {isSubmitted ? (
                <div className="p-4 sm:p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto">
                        <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white" role="status">{prepareOnly ? 'Your shipment brief is ready' : 'Your email draft is ready'}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Copy the brief or open an email draft. Press <strong>Send</strong> in your email app to deliver it to
                        dispatch. You can also paste the brief into an email to{' '}
                        <a href={`mailto:${SITE.emails.dispatch}`} className="text-sky-400 font-bold underline break-all">
                            {SITE.emails.dispatch}
                        </a>{' '}
                        or call{' '}
                        <a href={SITE.phones.primary.href} onClick={() => trackQuoteAction('quote_call_clicked')} className="text-sky-400 font-bold underline">
                            {SITE.phones.primary.display}
                        </a>
                        .
                    </p>
                    <p role="status" className="text-sm text-slate-300">{copyMessage}</p>
                    <textarea aria-label="Shipment brief" readOnly rows={7} value={buildBrief(formData)} className={inputClass} />
                    <div className="flex flex-wrap gap-3">
                        <button type="button" onClick={copyBrief} className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-bold text-slate-950">Copy brief</button>
                        <button type="button" onClick={openEmailDraft} className="rounded-lg border border-white/20 px-4 py-2 text-sm font-bold text-sky-300">Open email draft</button>
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="text-sm font-semibold text-slate-400 hover:text-white underline pt-1"
                    >
                        Edit or send another request
                    </button>
                </div>
            ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label htmlFor={`${id}-origin`} className="text-xs font-semibold text-slate-300 block mb-1">
                                Origin (City or Zip) *
                            </label>
                            <input
                                id={`${id}-origin`}
                                type="text"
                                required
                                autoComplete="off"
                                placeholder="Wilmington, DE"
                                value={formData.origin}
                                onChange={update('origin')}
                                className={inputClass}
                            />
                        </div>
                        <div>
                            <label htmlFor={`${id}-destination`} className="text-xs font-semibold text-slate-300 block mb-1">
                                Destination (City or Zip) *
                            </label>
                            <input
                                id={`${id}-destination`}
                                type="text"
                                required
                                autoComplete="off"
                                placeholder="Newark, NJ"
                                value={formData.destination}
                                onChange={update('destination')}
                                className={inputClass}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label htmlFor={`${id}-cargo`} className="text-xs font-semibold text-slate-300 block mb-1">
                                Pallet Count & Weight *
                            </label>
                            <input
                                id={`${id}-cargo`}
                                type="text"
                                required
                                placeholder="8 Pallets / 6,500 lbs"
                                value={formData.cargo}
                                onChange={update('cargo')}
                                className={inputClass}
                            />
                        </div>
                        <div>
                            <label htmlFor={`${id}-contact`} className="text-xs font-semibold text-slate-300 block mb-1">
                                Your Phone / Email {prepareOnly ? '(optional)' : '*'}
                            </label>
                            <input
                                id={`${id}-contact`}
                                type="text"
                                required={!prepareOnly}
                                autoComplete="email"
                                placeholder="Phone or rate con email"
                                value={formData.contact}
                                onChange={update('contact')}
                                className={inputClass}
                            />
                        </div>
                    </div>

                    {prepareOnly && <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label htmlFor={`${id}-dimensions`} className="text-xs font-semibold text-slate-300 block mb-1">Loaded dimensions</label>
                            <input id={`${id}-dimensions`} type="text" placeholder="48 × 40 × 52 in each" value={formData.dimensions} onChange={update('dimensions')} className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor={`${id}-windows`} className="text-xs font-semibold text-slate-300 block mb-1">Pickup and delivery windows</label>
                            <input id={`${id}-windows`} type="text" placeholder="Dates, local times and time zones" value={formData.windows} onChange={update('windows')} className={inputClass} />
                        </div>
                    </div>}

                    <div>
                        <label htmlFor={`${id}-notes`} className="text-xs font-semibold text-slate-300 block mb-1">
                            {prepareOnly ? 'Access, handling and shipment notes' : 'Pickup Date, Times & Notes'}
                        </label>
                        <textarea
                            id={`${id}-notes`}
                            rows={3}
                            placeholder={prepareOnly ? 'Heaviest unit, liftgate location, surface, JFK release or other instructions…' : 'Ready date, appointment windows, dims, special handling…'}
                            value={formData.notes}
                            onChange={update('notes')}
                            className={`${inputClass} resize-y`}
                        />
                    </div>

                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/30 border border-white/[0.06]">
                        <input
                            type="checkbox"
                            id={`${id}-liftgate`}
                            checked={formData.liftgate}
                            onChange={update('liftgate')}
                            className="w-4 h-4 rounded text-sky-500 bg-slate-900 border-white/20 focus:ring-0 cursor-pointer"
                        />
                        <label htmlFor={`${id}-liftgate`} className="text-sm text-slate-300 font-medium cursor-pointer">
                            Maxon Hydraulic Liftgate & Pallet Jack Required
                        </label>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                        <button
                            type="submit"
                            className="flex-1 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black py-3.5 px-5 rounded-xl text-xs uppercase tracking-wider transition shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2"
                        >
                            <Send className="w-3.5 h-3.5" />
                            <span>{prepareOnly ? 'Build shipment brief' : 'Email Freight Request'}</span>
                        </button>
                        <a
                            href={SITE.phones.primary.href}
                            onClick={() => trackQuoteAction('quote_call_clicked')}
                            className="bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] text-slate-200 text-xs font-semibold px-4 py-3.5 rounded-xl transition flex items-center justify-center gap-1.5"
                        >
                            <Phone className="w-3.5 h-3.5 text-sky-400" />
                            <span>Call Dispatch</span>
                        </a>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed">
                        {prepareOnly ? 'The brief is created in this browser. Emailing it is optional.' : `Submitting opens your email app with these details addressed to ${SITE.emails.dispatch}.`} Nothing is
                        stored on this website. See our{' '}
                        <Link href="/privacy-policy" className="underline hover:text-slate-300">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </form>
            )}
        </div>
    );
}
