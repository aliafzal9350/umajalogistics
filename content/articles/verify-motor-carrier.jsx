import Link from 'next/link';

export const meta = {
    slug: 'verify-motor-carrier',
    title: 'How to Verify a Motor Carrier Before You Tender a Load',
    description:
        'A step-by-step check of a trucking company’s FMCSA authority, insurance, contact details and safety record, plus the red flags that point to freight fraud.',
    published: '2026-10-30',
    readingMinutes: 7,
    category: 'Compliance',
};

export default function Article() {
    return (
        <>
            <p>
                Freight fraud and cargo theft have grown sharply in recent years. Common schemes include criminals posing as
                legitimate carriers, “double brokering” loads to unknown trucks, and hijacking a real company’s identity with a
                look-alike email address. The good news is that most of these schemes fail against a few minutes of
                verification. Here is the process we recommend to shippers and brokers, and the one you can use to check us.
            </p>

            <div className="callout">
                <p className="callout-title">In short</p>
                <ul>
                    <li>Look up the carrier’s USDOT or MC number on FMCSA’s public systems.</li>
                    <li>Confirm the authority is active and liability insurance is on file.</li>
                    <li>Get a certificate of insurance from the agent, and verify it with the agent directly.</li>
                    <li>Call back on a phone number you found independently, not one from the email.</li>
                </ul>
            </div>

            <h2>Step 1: Look the carrier up on FMCSA</h2>
            <p>
                The Federal Motor Carrier Safety Administration (FMCSA) publishes carrier records through its SAFER Company
                Snapshot. Search by USDOT number, MC (docket) number or company name. Check:
            </p>
            <ul>
                <li>
                    <strong>Legal name and DBA</strong> match the company you are dealing with.
                </li>
                <li>
                    <strong>Operating status</strong> shows the carrier is authorized for property and is not out of service.
                </li>
                <li>
                    <strong>Carrier operation</strong> is interstate, and the entity type is “Carrier” (a broker-only
                    authority cannot haul your freight with its own trucks).
                </li>
                <li>
                    <strong>Physical address, phone and email</strong> on file, which you will use in Step 3.
                </li>
                <li>
                    <strong>Power units and drivers</strong> are consistent with what the company claims to operate.
                </li>
            </ul>
            <p>
                A note on numbers: the USDOT number identifies the company for safety purposes, while the MC number has
                historically identified its for-hire operating authority. FMCSA has been moving toward using the USDOT number as
                the single identifier, so search with whichever number you have and confirm the two point to the same company.
            </p>

            <h2>Step 2: Confirm authority and insurance status</h2>
            <p>
                FMCSA’s Licensing and Insurance system shows the history of a carrier’s operating authority and whether its
                liability insurance filing is active. For-hire carriers of general freight in vehicles of 10,001 lbs or more
                must maintain at least $750,000 in public liability coverage; many shippers and brokers require $1,000,000.
                Look for:
            </p>
            <ul>
                <li>Authority status “Active,” and how long it has been active.</li>
                <li>Liability insurance on file and not pending cancellation.</li>
                <li>Recent changes of name, address or insurer, which are worth asking about.</li>
            </ul>

            <h2>Step 3: Verify contact details independently</h2>
            <p>
                Identity theft works because the fraudster’s email looks right. Do not rely on contact details that arrived
                with the load offer. Instead, call the phone number listed on the FMCSA record or on the company’s own website,
                and confirm that the person you are dealing with actually works there. Compare email domains character by
                character; look-alike domains often add, drop or swap a single letter.
            </p>

            <h2>Step 4: Get the carrier packet</h2>
            <p>A legitimate carrier can provide a standard packet quickly:</p>
            <ul>
                <li>
                    <strong>Certificate of insurance (COI)</strong> showing auto liability and cargo coverage, with you as
                    certificate holder. Cargo insurance is generally not filed with FMCSA for general freight carriers, so the
                    COI is how you confirm it.
                </li>
                <li>
                    <strong>Operating authority letter</strong> (the MC certificate).
                </li>
                <li>
                    <strong>IRS Form W-9</strong> with a name matching the FMCSA record.
                </li>
                <li>
                    <strong>Signed carrier agreement</strong> if you are a broker or a shipper with your own terms.
                </li>
            </ul>
            <p>
                Call the insurance agent listed on the COI, using a number you look up yourself, and confirm that the policy is
                active and that the truck you are using is covered.
            </p>

            <h2>Step 5: Review the safety record</h2>
            <p>
                FMCSA’s Safety Measurement System (SMS) shows roadside inspection results, out-of-service rates and crash
                history. A newer carrier may have few inspections, which is not a problem in itself; what matters is that the
                record is consistent with a real, operating company and does not show a pattern of serious violations.
            </p>

            <h2>Red flags that should stop the load</h2>
            <ul>
                <li>The email domain does not match the company’s website, or uses a free webmail address that does not appear on the FMCSA record.</li>
                <li>Contact details on FMCSA were changed very recently, especially just before your load.</li>
                <li>The carrier refuses to provide documents, or the documents do not match each other.</li>
                <li>Pressure to change payment details, pay a third party, or skip normal steps “just this once.”</li>
                <li>A newly activated authority claiming a large fleet.</li>
                <li>The truck or driver that arrives does not match the carrier you booked.</li>
            </ul>
            <p>
                If something does not add up, stop and verify by phone before releasing freight. A short delay is far cheaper
                than a stolen load.
            </p>

            <h2>Verify us</h2>
            <p>
                You can run every one of these checks on Umaja Logistics LLC. Our operating authority is MC# 1508261. Our
                published phone numbers and addresses are on our <Link href="/contact">contact page</Link>, and we will send our
                carrier packet, including our certificate of insurance, on request. Read more{' '}
                <Link href="/about">about our company</Link>.
            </p>
            <p className="text-sm text-slate-400">
                FMCSA systems and rules are updated periodically. Confirm current requirements on FMCSA’s website.
            </p>
        </>
    );
}
