import Link from 'next/link';

export const meta = {
    slug: 'bol-rate-confirmation-pod',
    title: 'Freight Paperwork Explained: Rate Confirmation, Bill of Lading and Proof of Delivery',
    description:
        'What a rate confirmation, bill of lading and proof of delivery each do, what should be on them, how accessorial charges work, and how paperwork protects a damage claim.',
    published: '2026-10-30',
    readingMinutes: 7,
    category: 'Shipping Tips',
};

export default function Article() {
    return (
        <>
            <p>
                Every load we run produces the same three core documents: a rate confirmation before the truck is dispatched,
                a bill of lading at pickup, and a proof of delivery at the end. They are easy to treat as formalities, but each
                one answers a question that matters when something goes wrong: what was agreed, what was handed over, and what
                arrived.
            </p>

            <h2>The rate confirmation: what was agreed</h2>
            <p>
                A rate confirmation (often called a “rate con”) is the agreement between the carrier and whoever is booking the
                truck, usually a freight broker or the shipper directly, for one specific load. It typically lists:
            </p>
            <ul>
                <li>Pickup and delivery locations, dates, times and appointment numbers.</li>
                <li>Equipment required, for example a 26ft box truck with liftgate.</li>
                <li>Commodity, piece count and weight.</li>
                <li>The agreed rate and any pre-approved accessorial charges.</li>
                <li>Special requirements: driver assist, seals, temperature, tracking or communication rules.</li>
                <li>Billing instructions and payment terms.</li>
            </ul>
            <p>
                Read it before signing. If the load changes, such as an extra stop, a different pickup time or added pallets,
                get the change confirmed in writing. Most billing disputes come from changes that were agreed by phone and never
                written down.
            </p>

            <h2>The bill of lading: what was handed over</h2>
            <p>
                The bill of lading (BOL) is created by the shipper and signed by the driver at pickup. It serves as a receipt for
                the goods, evidence of the contract of carriage, and the document that tells the driver where the freight is
                going. A complete BOL includes:
            </p>
            <ul>
                <li>Shipper and consignee names, addresses and contacts.</li>
                <li>BOL number and any purchase order or reference numbers.</li>
                <li>Number of handling units (pallets) and pieces.</li>
                <li>Description of the goods and total weight.</li>
                <li>Special handling instructions and hazardous materials information, if applicable.</li>
                <li>Freight charge terms: prepaid, collect or third-party billing.</li>
                <li>Seal numbers, if the truck is sealed at pickup.</li>
            </ul>

            <h3>Exceptions and “shipper load and count”</h3>
            <p>
                Before signing, the driver counts the freight and looks for visible damage. If the count is short or a pallet is
                damaged, the driver notes it on the BOL. That note, called an exception, records the condition of the freight
                when the carrier took it.
            </p>
            <p>
                Sometimes the driver cannot verify the count, for example when the shipper loads and seals the truck. In that
                case the BOL is marked “shipper load and count” (SLC), which shows the carrier could not confirm what was
                loaded. If you are the shipper, expect this notation when the driver is not allowed to watch loading.
            </p>

            <h2>The proof of delivery: what arrived</h2>
            <p>
                At delivery, the receiver counts and inspects the freight, then signs the delivery receipt, usually a copy of
                the BOL. That signed document is the proof of delivery (POD). It confirms the freight arrived, when, and in what
                condition, and it is normally what triggers the carrier’s invoice.
            </p>
            <p>Receivers should:</p>
            <ul>
                <li>Count the pallets and pieces before signing.</li>
                <li>Inspect for visible damage: crushed corners, torn wrap, wet or stained cartons.</li>
                <li>Write any shortages or damage on the delivery receipt, specifically: “1 pallet crushed corner,” not just “damaged.”</li>
                <li>Take photos before the truck leaves.</li>
                <li>Print their name clearly next to the signature, with date and time.</li>
            </ul>
            <p>
                Signing a delivery receipt “clean” (no exceptions) and then reporting damage later makes a claim much harder.
                Concealed damage, found only after unpacking, should be reported to the carrier as soon as it is discovered.
            </p>

            <h2>Accessorial charges</h2>
            <p>
                Accessorials are charges for services beyond the basic move from A to B. They should be listed on the rate
                confirmation when they are expected, or approved in writing when they arise. Common ones include:
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Accessorial</th>
                        <th>What it covers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Liftgate</td>
                        <td>Loading or unloading with the truck’s liftgate where there is no dock.</td>
                    </tr>
                    <tr>
                        <td>Detention</td>
                        <td>Waiting time at pickup or delivery beyond the agreed free time.</td>
                    </tr>
                    <tr>
                        <td>Layover</td>
                        <td>The truck is held overnight because the load cannot be picked up or delivered as scheduled.</td>
                    </tr>
                    <tr>
                        <td>Truck ordered, not used (TONU)</td>
                        <td>The truck was dispatched but the load was cancelled or not ready.</td>
                    </tr>
                    <tr>
                        <td>Driver assist / lumper</td>
                        <td>Labor to load or unload, by the driver or a third-party lumper service.</td>
                    </tr>
                    <tr>
                        <td>Inside delivery</td>
                        <td>Moving freight past the back of the truck into the building.</td>
                    </tr>
                    <tr>
                        <td>Redelivery</td>
                        <td>A second delivery attempt after the first could not be completed.</td>
                    </tr>
                </tbody>
            </table>
            <p>
                The best way to avoid accessorial surprises is to describe both ends of the move accurately when you request a
                quote: dock or no dock, appointment times, expected wait, and who will load and unload. Our{' '}
                <Link href="/resources/liftgate-delivery-guide">liftgate guide</Link> covers the most common one.
            </p>

            <h2>When something goes wrong: claims</h2>
            <p>
                For interstate shipments, carrier liability for loss and damage is governed by federal law (the Carmack
                Amendment), together with the terms in the bill of lading and rate confirmation. Federal rules set minimum time
                limits for filing a claim, generally no shorter than nine months from delivery, but there is no reason to wait.
                Report the problem promptly and gather:
            </p>
            <ul>
                <li>The BOL with any pickup exceptions, and the POD with delivery exceptions.</li>
                <li>Photos of the freight at pickup and delivery.</li>
                <li>Commercial invoice or proof of the value of the goods.</li>
                <li>Repair estimates or salvage information for damaged items.</li>
            </ul>
            <p>
                Clean, consistent paperwork is what turns a claim from an argument into a routine process. That is why our
                drivers count and document at both ends of every load and send the signed POD as soon as delivery is complete.
            </p>
            <p className="text-sm text-slate-400">
                This article is general information, not legal advice. For a specific dispute, consult the shipment documents
                and a qualified advisor.
            </p>
            <p>
                Questions about documentation for your shipment? <Link href="/contact">Contact dispatch</Link>.
            </p>
        </>
    );
}
