import Link from 'next/link';

export const meta = {
    slug: 'prepare-palletized-freight',
    title: 'How to Prepare Palletized Freight for Truck Shipping',
    description:
        'A practical checklist for building, wrapping, labeling and documenting pallets so they load quickly, ride safely and arrive without damage or disputes.',
    published: '2026-10-30',
    readingMinutes: 7,
    category: 'Shipping Tips',
};

export default function Article() {
    return (
        <>
            <p>
                Most freight damage is decided before the truck arrives. A pallet that is well built, tightly wrapped and
                clearly labeled loads quickly, rides securely and is easy to check at delivery. A pallet with overhanging
                cartons, loose wrap and no labels invites shifting, crushed corners and arguments over who is responsible.
                This checklist covers what we look for at pickup.
            </p>

            <div className="callout">
                <p className="callout-title">In short</p>
                <ul>
                    <li>Start with a sound pallet and keep every carton inside its footprint.</li>
                    <li>Stack heavy to light in a stable pattern, then wrap the load to the pallet itself.</li>
                    <li>Label at least two sides with the shipment details and piece count.</li>
                    <li>Make the bill of lading match the freight: count, weight and description.</li>
                </ul>
            </div>

            <h2>1. Choose the right pallet</h2>
            <ul>
                <li>
                    <strong>Use a standard size where possible.</strong> The 48″ × 40″ pallet fits truck widths, liftgates and
                    warehouse racking. Oversized or odd pallets are fine, but tell the carrier the footprint in advance.
                </li>
                <li>
                    <strong>Inspect it.</strong> Broken or missing deck boards, protruding nails and cracked stringers can fail
                    under load or when lifted by a pallet jack.
                </li>
                <li>
                    <strong>Match the pallet to the weight.</strong> Lightweight or single-use pallets are not designed for
                    dense freight.
                </li>
                <li>
                    <strong>Think about the final destination.</strong> Freight going to the airport for an international flight
                    usually needs wood packaging that is heat-treated and marked under the ISPM 15 standard, or a plastic or
                    composite pallet. Check with your forwarder before you build the load.
                </li>
            </ul>

            <h2>2. Stack for strength and stability</h2>
            <ul>
                <li>
                    <strong>Heaviest on the bottom.</strong> Put dense cartons on the lower layers and lighter ones on top to
                    keep the center of gravity low.
                </li>
                <li>
                    <strong>No overhang.</strong> Cartons hanging over the pallet edge lose much of their stacking strength and
                    are the first thing to be crushed or snagged. Keep everything inside the footprint.
                </li>
                <li>
                    <strong>Pick a pattern.</strong> Column stacking (corners aligned) gets the most compression strength out of
                    boxes; interlocking layers improve stability. Many shippers use columns with a tie sheet between layers.
                </li>
                <li>
                    <strong>Build a flat top.</strong> A flat, level top is easier to protect, and if the freight is stackable,
                    it allows another pallet to sit on it safely.
                </li>
                <li>
                    <strong>Keep it to a sensible height.</strong> Very tall pallets are unstable on a pallet jack and liftgate,
                    and they must clear the truck’s door opening, which is lower than the interior ceiling.
                </li>
            </ul>

            <h2>3. Wrap and secure the load</h2>
            <p>
                Stretch wrap holds the load together as a single unit. The most common mistake is wrapping only the cartons
                and not the pallet, so the whole stack slides off the deck as one block.
            </p>
            <ul>
                <li>Start at the base and wrap several turns around the pallet deck to anchor the film.</li>
                <li>Work upward with overlapping passes, then back down, keeping tension firm.</li>
                <li>Add corner boards (edge protectors) on tall or heavy loads to spread strap and wrap pressure.</li>
                <li>Use plastic or steel strapping for very heavy, dense or irregular items.</li>
                <li>A top sheet or cap keeps dust and moisture off the top layer.</li>
            </ul>
            <p>
                Inside the truck, the driver secures pallets with straps, load bars or e-track so they do not shift during
                braking and turns. Our trucks are fitted with e-track and straps for exactly this, but any securement works
                best on a pallet that is already a solid unit.
            </p>

            <h2>4. Label every pallet</h2>
            <p>Put a label on at least two adjacent sides, so it is visible no matter how the pallet is loaded:</p>
            <ul>
                <li>Shipper and consignee names and addresses.</li>
                <li>Bill of lading, purchase order or reference number.</li>
                <li>Piece count on the pallet, and the pallet’s number in the shipment (“Pallet 2 of 5”).</li>
                <li>
                    Handling marks where they apply: “This Side Up,” “Do Not Stack,” “Fragile,” or temperature notes.
                </li>
            </ul>
            <p>Remove or cover old labels and barcodes from reused cartons and pallets so they cannot be misread.</p>

            <h2>5. Measure and weigh accurately</h2>
            <p>
                Dimensions and weights drive the quote, the equipment choice, the load plan and, for some services, the freight
                class. Measure length, width and height at the widest points, including the pallet. Weigh each pallet if you
                can; estimates tend to run low. Wrong numbers lead to re-quotes, refused freight or a truck that cannot take
                the load. Our article on <Link href="/resources/26ft-box-truck-capacity">26ft box truck capacity</Link>{' '}
                explains why weight per pallet matters as much as total weight.
            </p>

            <h2>6. Get the paperwork right</h2>
            <p>
                The bill of lading (BOL) should match what is on the dock: total pieces, total weight, a clear description of
                the goods, special handling instructions and the delivery contact. If the truck must arrive by an appointment
                time, put the appointment number on the BOL and share it with dispatch. See{' '}
                <Link href="/resources/bol-rate-confirmation-pod">our guide to freight paperwork</Link> for what each document
                does.
            </p>

            <h2>7. At pickup: count, check and document</h2>
            <ul>
                <li>Count pallets and pieces together with the driver before loading.</li>
                <li>Note any visible damage or shortages on the BOL before anyone signs.</li>
                <li>Take photos of each pallet, especially high-value or fragile freight.</li>
                <li>Record trailer or door seal numbers on the BOL when a seal is applied.</li>
            </ul>
            <p>
                These steps take a few minutes and protect everyone. If something arrives damaged, clear records of the
                freight’s condition at pickup make the claim straightforward.
            </p>

            <h2>Quick pre-pickup checklist</h2>
            <ol>
                <li>Pallet is sound and the right size for the load.</li>
                <li>Heavy items low, nothing overhanging the edges.</li>
                <li>Load is wrapped to the pallet deck; corners protected if needed.</li>
                <li>Labels on two sides, with piece counts.</li>
                <li>Accurate dimensions and weight sent to the carrier.</li>
                <li>BOL prepared and matching the freight.</li>
                <li>Dock, liftgate and appointment details confirmed.</li>
            </ol>
            <p>
                Questions about a specific load? <Link href="/contact">Contact our dispatch team</Link> and we will tell you
                what we need before pickup.
            </p>
        </>
    );
}
