import Link from 'next/link';

export const meta = {
    slug: 'twic-tsa-credentials-explained',
    title: 'TWIC and TSA Credentials in Trucking: What They Mean for Your Freight',
    description:
        'A plain-English explanation of the TWIC card for port access and TSA security requirements for air cargo drivers, and why they matter when you choose a carrier.',
    published: '2026-10-30',
    readingMinutes: 6,
    category: 'Compliance',
};

export default function Article() {
    return (
        <>
            <p>
                Seaports and airports are secure facilities. A truck that shows up without the right credentials can be turned
                away at the gate, held for an escort, or simply unable to touch the freight. For shippers and forwarders
                moving cargo through these facilities, the carrier’s credentials are as practical a consideration as the size
                of the truck. This article explains the two you will hear about most: the TWIC card and TSA air cargo security
                requirements.
            </p>
            <p className="text-sm text-slate-400">
                This is general information, not legal advice. Security rules change, so confirm current requirements with the
                facility, your forwarder or the Transportation Security Administration.
            </p>

            <h2>The TWIC card: access to secure port areas</h2>
            <p>
                The <strong>Transportation Worker Identification Credential (TWIC)</strong> is a federal identity credential
                issued by the TSA. Under the Maritime Transportation Security Act (MTSA), workers who need unescorted access to
                secure areas of regulated maritime facilities and vessels, including container terminals, generally must hold
                a valid TWIC. The U.S. Coast Guard oversees security at those facilities.
            </p>
            <p>To get a TWIC, an applicant:</p>
            <ul>
                <li>Enrolls in person, providing identity documents, fingerprints and a photo.</li>
                <li>Passes a TSA security threat assessment, which includes criminal history and immigration checks.</li>
                <li>Receives a card that is typically valid for five years before renewal.</li>
            </ul>

            <h3>What TWIC means for a delivery</h3>
            <p>
                A driver without a TWIC can only enter secure areas if a TWIC holder escorts them, and many terminals do not
                provide escorts for truck drivers at all. In practice, a driver without a card often cannot complete a
                terminal pickup or delivery. A TWIC-holding driver can process through the gate like any other credentialed
                worker, provided the trucking company also meets the terminal’s own registration and appointment
                requirements.
            </p>

            <h2>TSA requirements for air cargo</h2>
            <p>
                Air cargo security works differently. Rather than a single card, it relies on security programs that companies
                in the supply chain follow, and on vetting the people who handle cargo.
            </p>
            <ul>
                <li>
                    <strong>Screening.</strong> Cargo carried on passenger aircraft must be screened before it is loaded. It
                    can be screened by the airline or earlier in the chain by a facility certified by TSA.
                </li>
                <li>
                    <strong>Indirect air carriers (IACs).</strong> Freight forwarders that tender cargo to airlines operate
                    under a TSA-approved security program and must follow its rules for accepting, securing and transporting
                    cargo, including the use of authorized representatives such as trucking companies.
                </li>
                <li>
                    <strong>Security threat assessments.</strong> Individuals with unescorted access to air cargo, including
                    drivers acting on behalf of an IAC, are generally required to pass a TSA security threat assessment.
                </li>
                <li>
                    <strong>Chain of custody.</strong> Once cargo has been screened or secured, it must be protected from
                    tampering until it reaches the airline. That means sealed vehicles, recorded seal numbers, direct routing
                    and controlled handoffs.
                </li>
            </ul>
            <p>
                For the forwarder, using a carrier whose drivers are vetted and who understands these procedures is part of
                meeting their own security program obligations. For the shipper, it means the freight is less likely to be
                rejected or held for re-screening when it reaches the airport.
            </p>

            <h2>Why credentials matter when choosing a carrier</h2>
            <ul>
                <li>
                    <strong>Fewer failed trips.</strong> A driver turned away at a port gate or an air cargo dock costs a day
                    and often a missed vessel or flight.
                </li>
                <li>
                    <strong>Compliance for your partners.</strong> Forwarders and terminals have their own obligations; a
                    credentialed carrier makes their audits simpler.
                </li>
                <li>
                    <strong>Security for your freight.</strong> Vetting and chain-of-custody habits reduce the risk of theft
                    and tampering, which matters for high-value shipments.
                </li>
            </ul>

            <h2>How to check a carrier’s credentials</h2>
            <ol>
                <li>
                    Ask which credentials the assigned driver holds and request supporting documentation consistent with your
                    compliance policy.
                </li>
                <li>
                    For port work, confirm that the trucking company is registered with the specific terminal’s gate or
                    appointment system, if the terminal requires it.
                </li>
                <li>
                    For air cargo, confirm with your forwarder that the carrier meets their security program requirements
                    before you tender freight.
                </li>
                <li>
                    Verify the carrier’s operating authority and insurance as you would for any load. Our guide to{' '}
                    <Link href="/resources/verify-motor-carrier">verifying a motor carrier</Link> walks through it step by step.
                </li>
            </ol>

            <h2>Other credentials you may encounter</h2>
            <ul>
                <li>
                    <strong>Hazardous materials endorsement (HME).</strong> Required on a commercial driver’s license to haul
                    placarded quantities of hazardous materials. It also involves a TSA security threat assessment.
                </li>
                <li>
                    <strong>FAST card.</strong> A U.S. Customs and Border Protection program for commercial drivers crossing the
                    Canadian and Mexican borders.
                </li>
            </ul>
            <p>
                Umaja Logistics runs TSA-vetted and TWIC-approved operations for airport and port work around the New York
                region. Learn more on our <Link href="/services#port">services page</Link> or{' '}
                <Link href="/contact">request our carrier packet</Link>.
            </p>
        </>
    );
}
