'use client';
import { useId, useState } from 'react';
import { palletFit } from '@/lib/pallet-fit';
const initial = { length: '312', width: '95', palletLength: '48', palletWidth: '40', count: '12', weight: '500', payload: '', palletHeight: '', doorHeight: '' };
const fields = [['length', 'Usable floor length (in)', true], ['width', 'Usable floor width (in)', true], ['palletLength', 'Loaded pallet length (in)', true], ['palletWidth', 'Loaded pallet width (in)', true], ['count', 'Number of identical pallets', true], ['weight', 'Gross weight per pallet (lb)', true], ['payload', 'Confirmed available payload (lb)', false], ['palletHeight', 'Loaded pallet height (in)', false], ['doorHeight', 'Confirmed clear door height (in)', false]];
export default function PalletCalculator() {
    const id = useId();
    const [values, setValues] = useState(initial);
    const result = palletFit(values);
    return <div className="rounded-2xl border border-sky-400/25 bg-sky-400/5 p-5 sm:p-8 my-8">
        <div className="grid sm:grid-cols-2 gap-5">{fields.map(([key, label, required]) => <label key={key} htmlFor={`${id}-${key}`} className="text-sm text-slate-300">{label}{required ? ' *' : ' (optional)'}<input id={`${id}-${key}`} type="number" min={key === 'count' ? '1' : '0.01'} step={key === 'count' ? '1' : 'any'} required={required} value={values[key]} onChange={e => setValues(v => ({ ...v, [key]: e.target.value }))} className="mt-2 block w-full rounded-lg border border-white/15 bg-[#080C10] px-3 py-3 text-base text-white focus:outline-sky-400" /></label>)}</div>
        <div role="status" aria-live="polite" aria-atomic="true" className="mt-6 rounded-xl bg-black/25 p-5 text-slate-200">{result.error ? <p>{result.error}</p> : <>
            <p className="text-xl font-bold text-white">{result.capacity} floor positions in a uniform grid</p><p className="mt-2">{result.rows} rows × {result.across} across{result.rotated ? ', pallet orientation rotated' : ''}. Requested pallets {result.floorFits ? 'fit this floor-space estimate' : 'exceed this layout'}.</p><p className="mt-2">Total pallet weight: {result.totalWeight.toLocaleString('en-US')} lb.</p>
            <p className="mt-2">{result.payloadFits === null ? 'Payload is unverified. Enter the available payload confirmed for the assigned truck.' : result.payloadFits ? 'Within the entered payload limit.' : 'Exceeds the entered payload limit.'}</p><p className="mt-2">{result.heightFits === null ? 'Door clearance is unverified. Enter both loaded pallet height and clear door height to compare them.' : result.heightFits ? 'Does not exceed the entered door height; allow handling clearance.' : 'Exceeds the entered door height.'}</p>
        </>}</div>
        <p className="text-sm text-slate-400 mt-4">Planning estimate only. No stacking or mixed-orientation optimization. It does not check axle loads, door width, turning room, securement or liftgate suitability. Dispatch must approve the actual load.</p><button type="button" onClick={() => setValues(initial)} className="text-sky-400 underline mt-4">Reset example</button>
    </div>;
}
