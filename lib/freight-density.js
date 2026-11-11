// Density tiers from the NMFC 13-subprovision density scale (effective July 19, 2025).
// Lower bound in lb per cubic foot -> estimated class. Ordered high density first.
export const DENSITY_TIERS = [
    [50, '50'], [35, '55'], [30, '60'], [22.5, '65'], [15, '70'], [12, '85'],
    [10, '92.5'], [8, '100'], [6, '125'], [4, '175'], [2, '250'], [1, '300'], [0, '400'],
];

export function estimateClass(pcf) {
    return DENSITY_TIERS.find(([min]) => pcf >= min)[1];
}

// pieces: [{ length, width, height, weight, count }] in inches and pounds per piece.
export function freightDensity(pieces) {
    let cubicFeet = 0;
    let weight = 0;
    for (const p of pieces) {
        const [l, w, h, wt, n] = [p.length, p.width, p.height, p.weight, p.count].map(Number);
        if (![l, w, h, wt, n].every((v) => Number.isFinite(v) && v > 0)) {
            return { error: 'Enter a positive length, width, height, weight and count for every line.' };
        }
        cubicFeet += (l * w * h / 1728) * n;
        weight += wt * n;
    }
    const pcf = weight / cubicFeet;
    return { cubicFeet, weight, pcf, freightClass: estimateClass(pcf) };
}
