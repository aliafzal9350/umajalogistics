'use client';
import { useId, useState } from 'react';
import { freightDensity } from '@/lib/freight-density';

const blank = { length: '', width: '', height: '', weight: '', count: '1' };
const example = [{ length: '48', width: '40', height: '50', weight: '600', count: '2' }];
const cols = [['length', 'L (in)'], ['width', 'W (in)'], ['height', 'H (in)'], ['weight', 'Lb each'], ['count', 'Qty']];
const fmt = (n, d = 2) => n.toLocaleString('en-US', { maximumFractionDigits: d });

export default function DensityCalculator() {
    const id = useId();
    const [rows, setRows] = useState(example);
    const result = freightDensity(rows);
    const set = (i, key, value) => setRows((r) => r.map((row, j) => (j === i ? { ...row, [key]: value } : row)));
    return <div className="rounded-2xl border border-sky-400/25 bg-sky-400/5 p-5 sm:p-8 my-8">
        {rows.map((row, i) => <fieldset key={i} className="grid grid-cols-5 gap-2 sm:gap-4 mb-4">
            <legend className="sr-only">Handling unit {i + 1}</legend>
            {cols.map(([key, label]) => <label key={key} htmlFor={`${id}-${i}-${key}`} className="text-xs sm:text-sm text-slate-300">{label}
                <input id={`${id}-${i}-${key}`} type="number" inputMode="decimal" min="0" step="any" value={row[key]} onChange={(e) => set(i, key, e.target.value)} className="mt-1 block w-full rounded-lg border border-white/15 bg-[#080C10] px-2 py-3 text-base text-white focus:outline-sky-400" />
            </label>)}
        </fieldset>)}
        <div className="flex gap-4 text-sm">
            <button type="button" onClick={() => setRows((r) => [...r, blank])} className="text-sky-400 underline">Add another unit size</button>
            {rows.length > 1 && <button type="button" onClick={() => setRows((r) => r.slice(0, -1))} className="text-slate-400 underline">Remove last</button>}
            <button type="button" onClick={() => setRows(example)} className="text-slate-400 underline">Reset example</button>
        </div>
        <div role="status" aria-live="polite" aria-atomic="true" className="mt-6 rounded-xl bg-black/25 p-5 text-slate-200">{result.error ? <p>{result.error}</p> : <>
            <p className="text-xl font-bold text-white">{fmt(result.pcf)} lb per cubic foot → estimated class {result.freightClass}</p>
            <p className="mt-2">Total: {fmt(result.weight, 0)} lb across {fmt(result.cubicFeet)} cubic feet.</p>
        </>}</div>
        <p className="text-sm text-slate-400 mt-4">Measure the outside of each loaded unit, including pallet and overhang, and round up to the next inch. The class shown applies only to commodities rated by density; your NMFC item and carrier tariff decide the billed class.</p>
    </div>;
}
