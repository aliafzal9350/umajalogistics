export const SERVICE_DETAILS = [
    {
        slug: 'jfk-air-cargo-trucking',
        title: 'JFK Air Cargo Trucking',
        description: 'Plan a JFK cargo recovery, export tender or handler transfer with Umaja. Check release, terminal instructions and delivery timing before dispatch.',
        sections: [
            ['Import recovery', 'Confirm the airline or ground handler has the freight physically available and released before booking a pickup. Send the handler name and pickup address, shipment reference, pieces, pallet dimensions and the handler’s pickup instructions. An arrival notice alone cannot tell dispatch whether the freight can be collected.'],
            ['Export tender and transfers', 'Share the receiving handler, delivery address and cargo acceptance cutoff in local time. If your forwarder gives you a flight departure time, ask for the earlier cargo cutoff. For a transfer, share the pickup release and the receiving location’s hours so dispatch can check both ends of the move.'],
            ['A timing example', 'Say a handler expects release at 2 p.m. and the consignee closes at 4 p.m. Dispatch needs to check recovery time, travel and the consignee’s actual receiving cutoff before promising delivery. If the window is too tight, identify who can authorize a later appointment before the truck is sent.'],
        ],
        timing: [
            ['Import pickup', 'Handler confirms freight is available and released', 'Share the confirmed release time, last pickup time and any appointment.'],
            ['Export drop-off', 'Handler’s acceptance window and cutoff', 'Share the booked tender window in local time and the forwarder contact.'],
            ['Final delivery', 'Receiver’s last check-in or dock appointment', 'Share the cutoff, unloading setup and who can authorize a later delivery.'],
        ],
        checklist: [
            'Handler name, cargo building address and pickup or tender instructions',
            'Air waybill reference and the release or pickup authorization required by the handler',
            'Piece count, loaded dimensions and weights, plus any special handling instructions',
            'Receiving appointment, dock or liftgate needs and a reachable contact',
        ],
        questions: [
            ['Can I request a quote before the freight is released?', 'Yes. Tell dispatch the expected release and how you will confirm availability. Agree on a pickup time once the handler confirms release and dispatch checks the receiving window.'],
            ['What if the handler changes the cutoff?', 'Send the new cutoff to dispatch as soon as you have it. Dispatch can check whether the original truck and delivery appointment still work.'],
            ['Can I request liftgate delivery after recovery?', 'Include it in your quote request. Dispatch will check the heaviest loaded unit, platform fit, truck access and handoff surface before confirming.'],
        ],
        guide: ['Read the JFK trucking guide', '/resources/jfk-air-cargo-trucking'],
    },
    {
        slug: 'liftgate-delivery',
        title: 'Liftgate Delivery Service',
        description: 'Arrange palletized ground-level pickup or delivery. Share loaded pallet dimensions, the heaviest unit and receiving access for an equipment check.',
        sections: [
            ['Where the pallet needs to go', 'Tell dispatch which end lacks a dock or forklift and where the freight must be handed over. A curb, driveway and interior receiving room are different requests. Check for stairs, thresholds, soft ground, grade changes and any parking limits between the truck and the handoff point.'],
            ['What to measure', 'Report the total shipment weight and the heaviest individual handling unit, including its pallet or crate. Measure the loaded footprint including overhang. The assigned gate must accommodate the footprint and the combined load placed on it, including handling equipment. Dispatch also needs to confirm the truck can position on a firm, level surface.'],
            ['A receiving example', 'A store has no dock and a smooth delivery bay behind the building, but its front entrance has steps. Include the rear access instructions and a receiving contact. If the bay is blocked on certain days, share an alternate window so dispatch can check the handoff before pickup.'],
        ],
        checklist: ['Liftgate at pickup, delivery or both', 'Heaviest loaded unit and its dimensions', 'Surface, grade and truck access', 'Handoff location and on-site contact'],
        questions: [
            ['Does liftgate delivery include moving freight indoors?', 'Describe the exact handoff point when you request the quote. Share any thresholds, stairs or tight turns so dispatch can confirm what the driver can safely handle.'],
            ['What if I only know the total weight?', 'Ask the shipper for the heaviest loaded pallet or crate and its footprint. Dispatch needs both to check the assigned equipment.'],
        ],
        guide: ['Read the liftgate receiving guide', '/resources/liftgate-delivery-guide'],
    },
    {
        slug: 'box-truck-freight',
        title: 'Dedicated Box Truck Freight',
        description: 'Request dedicated box truck delivery for palletized freight. Check pickup and delivery windows, dock access and equipment fit with Umaja dispatch.',
        sections: [
            ['When dedicated service makes sense', 'An exclusive-use truck is worth quoting when you need a direct move, have a firm receiving appointment or want fewer handoffs. If your window is flexible, compare the dedicated quote with a shared freight option and check how each provider handles appointments and extra handling.'],
            ['Check equipment fit at both ends', 'Share the loaded length, width, height and weight of each pallet group. Door clearance, usable floor area and the assigned truck’s payload all matter. Tell dispatch whether the pallet can be turned or stacked, and whether both sites have docks. For a warehouse transfer, include dock hours and who will unload.'],
            ['A dispatch example', 'Eight pallets may fit the floor layout, but one tall crate may be too high for the rear door. Put the tallest loaded height and any overhang in your request. If the receiver also requires a booking number, include that detail with the delivery window so dispatch can check the appointment.'],
        ],
        checklist: ['Origin and destination ZIP codes', 'Ready time and delivery deadline, with time zones', 'Count, loaded dimensions and weight', 'Dock access and any appointment reference'],
        questions: [
            ['Can I request a dedicated truck for a partial load?', 'Share the dimensions, weight and delivery deadline. A partial load can be a fit when the appointment or direct routing matters, subject to equipment and dispatch availability.'],
            ['Can a truck make more than one stop?', 'Provide the stops in sequence, the freight to unload at each one and the local receiving windows. Dispatch can check the route and loading order before quoting.'],
        ],
        guide: ['Compare expedited and LTL service', '/resources/expedited-vs-ltl'],
    },
];
