// Uniform rectangular floor layouts only; no stacking or mixed orientations.
export function palletFit({ length, width, palletLength, palletWidth, count, weight, payload, palletHeight, doorHeight }) {
    const required = { length, width, palletLength, palletWidth, count, weight };
    if (Object.values(required).some(v => String(v).trim() === '' || !Number.isFinite(Number(v)) || Number(v) <= 0)) return { error: 'Enter a positive number in each required field.' };
    if (!Number.isInteger(Number(count))) return { error: 'Pallet count must be a whole number.' };
    for (const value of [payload, palletHeight, doorHeight]) {
        if (value !== '' && value != null && (!Number.isFinite(Number(value)) || Number(value) <= 0)) return { error: 'Optional measurements must be positive numbers or left blank.' };
    }
    const straight = { rows: Math.floor(length / palletLength), across: Math.floor(width / palletWidth), rotated: false };
    const rotated = { rows: Math.floor(length / palletWidth), across: Math.floor(width / palletLength), rotated: true };
    const best = rotated.rows * rotated.across > straight.rows * straight.across ? rotated : straight;
    const capacity = best.rows * best.across;
    const totalWeight = Number(count) * Number(weight);
    if (!Number.isSafeInteger(capacity) || !Number.isFinite(totalWeight)) return { error: 'Measurements are too large to calculate. Check the units and values.' };
    return { ...best, capacity, totalWeight, floorFits: Number(count) <= capacity,
        payloadFits: payload !== '' && payload != null ? totalWeight <= Number(payload) : null,
        heightFits: palletHeight && doorHeight ? Number(palletHeight) <= Number(doorHeight) : null,
    };
}
