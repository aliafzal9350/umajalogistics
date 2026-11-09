import Link from 'next/link';

export const meta = {
    slug: 'jfk-air-cargo-trucking',
    title: 'Trucking Air Cargo To and From JFK: A Practical Guide for Shippers',
    description:
        'How export deliveries, import recoveries and transfers work at JFK Airport cargo terminals, what paperwork and security steps apply, and how to avoid delays.',
    published: '2026-10-30',
    updated: '2026-11-06',
    readingMinutes: 10,
    category: 'Air Cargo',
};

export default function Article() {
    return (
        <>
            <p>
                John F. Kennedy International Airport is one of the busiest international air cargo gateways in North
                America. Operated by the Port Authority of New York and New Jersey, it moves everything from pharmaceuticals
                and electronics to fashion, perishables and machinery parts. Almost all of that freight starts or finishes
                its journey on a truck, and the trucking leg is where many avoidable delays happen.
            </p>
            <p>
                We run daily routes into JFK’s cargo areas. This guide explains how the ground side works so your shipments
                move without surprises.
            </p>

            <div className="callout">
                <p className="callout-title">In short</p>
                <ul>
                    <li>Know your air waybill number, the exact handler or terminal, and the cutoff or release time.</li>
                    <li>Exports must reach the handler before cutoff; imports cannot be recovered until they are released.</li>
                    <li>Air cargo security rules mean chain of custody and driver vetting matter.</li>
                    <li>Count and inspect at the dock and note any exceptions before signing.</li>
                </ul>
            </div>

            <h2>Who handles freight at the airport</h2>
            <p>
                Air cargo at JFK is received, stored and released by airline cargo operations and third-party ground handlers
                working from warehouses in the airport’s cargo areas. Freight forwarders, who arrange the air shipment for the
                shipper, often operate their own warehouses near the airport where cargo is consolidated before tender to the
                airline. A truck may therefore be going to an airline terminal, a handler working for several airlines, or a
                forwarder’s facility. Getting the destination exactly right is the first step.
            </p>

            <h2>The three common trucking moves</h2>
            <h3>1. Export delivery (tender to the airline)</h3>
            <p>
                The truck picks up freight from the shipper or the forwarder’s warehouse and delivers it to the airline or
                handler for an outbound flight. The key constraint is the <strong>cargo cutoff</strong>, the latest time the
                handler will accept freight for a given flight. Miss it and the shipment rolls to a later flight, which can
                mean a day or more of delay.
            </p>
            <h3>2. Import recovery</h3>
            <p>
                After an inbound flight lands, freight is broken down and checked in by the handler. It can only be picked up
                once it has been released, both by the airline (charges paid, paperwork complete) and, for international
                shipments, by U.S. Customs and Border Protection. The truck then recovers the freight and delivers it to the
                consignee or the forwarder’s warehouse.
            </p>
            <h3>3. Transfers</h3>
            <p>
                Freight sometimes moves between handlers, between a handler and a forwarder, or between JFK and another airport
                in the region. These short moves are often time-critical because they connect to a specific flight.
            </p>

            <h2>Paperwork the driver needs</h2>
            <ul>
                <li>
                    <strong>Air waybill numbers.</strong> The master air waybill (MAWB) issued by the airline, and often a house
                    air waybill (HAWB) from the forwarder. The handler finds freight by these numbers.
                </li>
                <li>
                    <strong>Pickup authorization for imports.</strong> Handlers release freight to the trucker named by the
                    consignee, forwarder or customs broker, typically through a delivery order or release message. If the
                    authorization is missing or names a different carrier, the driver waits or leaves empty.
                </li>
                <li>
                    <strong>Shipment details for exports.</strong> Piece count, weight, dimensions and any special handling
                    (dangerous goods, perishables, temperature control, high value) should match the booking.
                </li>
                <li>
                    <strong>Driver identification.</strong> Handlers check the driver’s ID and company details against the
                    release.
                </li>
            </ul>

            <h2>Security and chain of custody</h2>
            <p>
                Air cargo is subject to Transportation Security Administration (TSA) security requirements. Cargo flown on
                passenger aircraft must be screened, and companies in the air cargo supply chain, such as indirect air
                carriers (forwarders) and certified screening facilities, operate under TSA security programs. Individuals
                with unescorted access to cargo in that chain are generally required to pass a TSA security threat assessment.
            </p>
            <p>For the trucking leg, that translates into practical habits:</p>
            <ul>
                <li>Screened or secured cargo stays sealed and is not left unattended.</li>
                <li>Seal numbers are recorded at pickup and checked at delivery.</li>
                <li>The truck goes directly to the handler, without unplanned stops or transfers.</li>
                <li>Only vetted drivers handle the freight, and their details match the paperwork.</li>
            </ul>
            <p>
                Our <Link href="/resources/twic-tsa-credentials-explained">guide to TSA and TWIC credentials</Link> covers
                what these requirements mean when you choose a carrier.
            </p>

            <h2>Why the dock wait is often longer than the drive</h2>
            <p>
                Cargo handlers serve many trucks, and peak periods around flight banks can create long queues at the dock.
                Imports can be held for documentation, customs exams or unpaid charges. Exports may need to be re-weighed,
                re-measured or re-screened. None of this is unusual, but it means a JFK run should be planned around the dock
                schedule rather than the mileage.
            </p>

            <h2>How to avoid delays</h2>
            <ol>
                <li>
                    <strong>Send air waybill numbers early</strong> along with the handler name and address, so dispatch can
                    route to the right building.
                </li>
                <li>
                    <strong>Confirm the cutoff or release time</strong> with your forwarder and build in a buffer for traffic on
                    the Van Wyck, Belt Parkway and other approaches.
                </li>
                <li>
                    <strong>Make sure the release names your carrier</strong> before the truck is dispatched on an import.
                </li>
                <li>
                    <strong>Share accurate dimensions.</strong> Oversized or tall pieces can affect both the truck plan and the
                    aircraft build-up.
                </li>
                <li>
                    <strong>Flag special cargo up front.</strong> Dangerous goods, perishables and high-value freight have extra
                    rules at the handler.
                </li>
                <li>
                    <strong>Plan the delivery end.</strong> If an import is going to a business without a dock, request
                    liftgate service when you book. See our{' '}
                    <Link href="/resources/liftgate-delivery-guide">liftgate delivery guide</Link>.
                </li>
            </ol>

            <h2>Build a dispatch packet before requesting airport recovery</h2>
            <p>
                A flight arrival notice is a starting point, not a complete pickup instruction. Put the details for one
                recovery into one message so the forwarder, dispatcher and driver are working from the same version.
                Identify the airline, the ground handler, the cargo building and the air waybill reference. If a master
                and house air waybill are both relevant, explain which reference the handler uses. Keep a person available
                to answer questions while the truck is being planned.
            </p>
            <p>
                Separate the questions “has the flight arrived?”, “has the handler made the freight available?” and “is the
                shipment authorized for collection?” Ask the responsible forwarder or handler to confirm the applicable
                release conditions and any outstanding charges or holds. A driver cannot remove a hold simply by arriving
                at the building. Avoid sending sensitive commercial documents through a public form; agree a suitable
                method directly with dispatch when documentation is needed.
            </p>
            <ul>
                <li>Airline, handler, building, pickup reference and shipment contact.</li>
                <li>Current availability and release confirmation, including who supplied it and when.</li>
                <li>Piece count, loaded dimensions and gross weight of each pallet or crate.</li>
                <li>Pickup authorization details and the receiving facility’s instructions.</li>
                <li>Delivery address, appointment window, unloading equipment and a reachable receiver.</li>
                <li>Who can approve a revised plan if the cargo, timing or delivery conditions change.</li>
            </ul>
            <h2>Check the exact facility rather than the airport name</h2>
            <p>
                JFK has multiple cargo facilities. An airline’s general address, passenger terminal and freight pickup
                point are not interchangeable. For example, the official <a href="https://www.aacargo.com/AACargo/ua/facilities/JFK" target="_blank" rel="noopener noreferrer">American Airlines Cargo JFK facility page</a> separates
                cargo and parcel facilities and distinguishes pickup from drop-off information. Use the handler’s current
                instructions for the service being booked. Do not reuse a saved building number or opening time without
                checking it for the actual shipment.
            </p>
            <p>
                Share the location of the truck entrance, the check-in procedure and any appointment reference with the
                carrier. A receiving window should include a time zone and the contact who confirmed it. Terminal operating
                hours alone do not guarantee that a particular shipment is ready or that a truck will finish loading before
                closing. Dispatch needs both the facility constraints and a realistic delivery plan before accepting a run.
            </p>
            <h2>A release-delay example</h2>
            <p>
                Imagine three wrapped pallets arriving in the morning for delivery to a storefront that closes at 4 p.m.
                The flight lands on time, but the handler has not confirmed availability. Booking the truck against the
                flight time alone creates an uncertain collection and a receiving deadline that may no longer work.
                Ask for confirmation of availability first, then have dispatch check the recovery window, the trip and the
                receiver’s unloading arrangements together. This is an illustrative planning scenario, not a shipment record.
            </p>
            <p>
                If availability changes after a truck has been accepted, notify dispatch immediately. Ask what waiting,
                rescheduling or return charges would apply under the written agreement, and confirm who can authorize them.
                Contact the receiver before promising a new arrival time. A revised delivery window, another collection
                slot or a different unloading arrangement may be needed; none should be assumed from the original quote.
            </p>
            <h2>At the dock: count, inspect, document</h2>
            <p>
                When freight is recovered, the driver counts pieces against the paperwork and inspects them for visible damage.
                Shortages, damaged cartons or broken wrap should be noted on the handler’s release documents before the driver
                signs. The same applies at final delivery. Clear exceptions and photos at each handoff make it possible to
                tell where a problem happened, which is the basis for any claim.
            </p>

            <h2>Why a dock-high box truck suits JFK work</h2>
            <p>
                Many airport cargo shipments are a handful of pallets or skids rather than a full trailer. A 26ft dock-high box
                truck lines up with handler docks, carries up to 12 standard pallets and is easier to place in congested cargo
                areas than a tractor-trailer. With a liftgate, the same truck can deliver to consignees who have no dock.
            </p>
            <p>
                Moving freight to or from JFK? <Link href="/contact">Send us your air waybill details</Link> or read more about
                our <Link href="/services/jfk-air-cargo-trucking">JFK airport cargo service</Link>.
            </p>
        </>
    );
}
