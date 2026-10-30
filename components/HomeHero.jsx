'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Phone, ChevronRight, RotateCcw } from 'lucide-react';
import { SITE } from '@/lib/site';

const TruckCanvas = dynamic(() => import('@/components/TruckCanvas'), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#080C10] text-slate-400">
            <div className="w-10 h-10 border-2 border-sky-400 border-t-transparent rounded-full animate-spin mb-3" />
            <p className="text-xs font-mono tracking-widest text-slate-400 uppercase">INITIALIZING 3D FLEET ENGINE</p>
        </div>
    ),
});

const PRESETS = [
    { id: 'front', label: 'Front 3/4', tag: 'Dock High' },
    { id: 'side', label: 'Side Profile', tag: 'TSA & TWIC' },
    { id: 'rear', label: 'Rear Liftgate', tag: 'Maxon 3.3K lbs' },
];

// Mount a single WebGL canvas: the full-bleed desktop stage or the mobile card, never both.
function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(null);

    useEffect(() => {
        const query = window.matchMedia('(min-width: 1024px)');
        const update = () => setIsDesktop(query.matches);
        update();
        query.addEventListener('change', update);
        return () => query.removeEventListener('change', update);
    }, []);

    return isDesktop;
}

export default function HomeHero() {
    const [activePreset, setActivePreset] = useState('front');
    const isDesktop = useIsDesktop();

    return (
        <section
            id="hero"
            className="relative w-full overflow-hidden lg:flex lg:flex-col lg:justify-between lg:h-[calc(100vh-104px)] lg:min-h-[520px] lg:max-h-[840px] lg:py-3"
        >
            {/* Desktop 3D viewport, to the right of the headline */}
            <div className="hidden lg:block absolute inset-y-0 right-0 left-[36%] z-0">
                {isDesktop && <TruckCanvas activePreset={activePreset} />}
            </div>

            {/* Hero Editorial Copy */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-4 lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:pointer-events-none">
                <div className="max-w-xl space-y-3.5">
                    <div className="lg:hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[11px] font-mono font-bold tracking-wider uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                        <span>ALL OVER USA & JFK CORRIDORS</span>
                    </div>

                    <h1 className="text-white font-black tracking-tight uppercase leading-[0.95] lg:leading-[0.92] text-3xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                        <span className="block">DRIVEN BY</span>
                        <span className="block">HONOR.</span>
                        <span className="block">DELIVERED WITH</span>
                        <span className="block bg-gradient-to-r from-sky-400 to-cyan-200 bg-clip-text text-transparent">PRIDE.</span>
                    </h1>

                    <p className="text-slate-300 text-sm sm:text-base lg:text-sm xl:text-base leading-relaxed max-w-lg lg:max-w-md font-medium">
                        Commercial 26ft dock-high freight with heavy-duty Maxon liftgate. Expedited operations all over USA, with
                        dedicated daily JFK Airport corridors.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2.5 lg:gap-3 pt-1 lg:pointer-events-auto">
                        <a
                            href="#contact"
                            className="bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-black uppercase tracking-wider px-6 py-3.5 lg:py-3 rounded-xl transition shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 flex items-center justify-center gap-2"
                        >
                            <span>Book Dedicated Run</span>
                            <ChevronRight className="w-4 h-4 lg:w-3.5 lg:h-3.5" />
                        </a>
                        <a
                            href={SITE.phones.primary.href}
                            className="bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md border border-white/[0.1] text-slate-200 text-xs font-bold px-4 py-3.5 lg:py-3 rounded-xl transition flex items-center justify-center gap-2"
                        >
                            <Phone className="w-4 h-4 lg:w-3.5 lg:h-3.5 text-sky-400" />
                            <span>Direct Dispatch: {SITE.phones.primary.display}</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile & Tablet Dedicated 3D Interactive Stage */}
            <div className="lg:hidden relative z-10 px-4 sm:px-6 max-w-7xl mx-auto pt-5 pb-8 sm:pb-12">
                <div className="relative w-full rounded-2xl sm:rounded-3xl bg-[#05080C] border border-white/[0.08] overflow-hidden shadow-2xl p-2 sm:p-3">
                    <div className="relative w-full h-[320px] sm:h-[380px] rounded-xl sm:rounded-2xl overflow-hidden bg-radial-grid">
                        {isDesktop === false && <TruckCanvas activePreset={activePreset} />}

                        {/* Top Badge Overlay */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/[0.08] text-[10px] font-mono text-sky-400 pointer-events-none">
                            <RotateCcw className="w-3 h-3 text-sky-400" />
                            <span>DRAG TRUCK TO ROTATE</span>
                        </div>
                    </div>

                    {/* Mobile Preset Dock */}
                    <div className="mt-2.5 p-1 rounded-xl bg-slate-950/90 border border-white/[0.08] flex items-center justify-between gap-1">
                        {PRESETS.map((preset) => (
                            <button
                                key={preset.id}
                                type="button"
                                aria-pressed={activePreset === preset.id}
                                onClick={() => setActivePreset(preset.id)}
                                className={`flex-1 py-2 px-1 rounded-lg text-[11px] font-bold transition-all text-center ${
                                    activePreset === preset.id
                                        ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                                        : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                                }`}
                            >
                                <span>{preset.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop Floating View Controller Dock (Bottom) */}
            <div className="hidden lg:flex relative z-10 w-full max-w-7xl mx-auto px-10 pb-2 pointer-events-none items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pointer-events-auto">
                    <RotateCcw className="w-3.5 h-3.5 text-sky-400" />
                    <span>INTERACTIVE 3D • DRAG TO ROTATE</span>
                </div>

                <div className="p-1 rounded-full bg-slate-950/80 backdrop-blur-xl border border-white/[0.1] shadow-2xl flex items-center gap-1 pointer-events-auto">
                    {PRESETS.map((preset) => (
                        <button
                            key={preset.id}
                            type="button"
                            aria-pressed={activePreset === preset.id}
                            onClick={() => setActivePreset(preset.id)}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                                activePreset === preset.id
                                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30'
                                    : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                            }`}
                        >
                            <span>{preset.label}</span>
                            <span className="text-[10px] opacity-70 font-mono">({preset.tag})</span>
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span>MC# {SITE.mcNumber}</span>
                </div>
            </div>
        </section>
    );
}
