import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { SITE } from '@/lib/site';

export const metadata = {
    title: 'Privacy Policy',
    description:
        'How Umaja Logistics LLC collects, uses and protects information on umajalogistics.online, including cookies, Google AdSense advertising, analytics and your privacy choices.',
    alternates: { canonical: '/privacy-policy' },
};

const ext = { target: '_blank', rel: 'noopener noreferrer' };

export default function PrivacyPolicyPage() {
    return (
        <>
            <PageHeader eyebrow="Legal" title="Privacy Policy" description={`Last updated: ${SITE.policiesUpdated}`} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
                <article className="prose-content max-w-3xl">
                    <p>
                        This Privacy Policy explains how {SITE.legalName} (“{SITE.name},” “we,” “us” or “our”) collects, uses,
                        shares and protects information when you visit {SITE.url.replace('https://', '')} (the “Site”) or contact
                        us through it. By using the Site, you agree to the practices described here. If you do not agree, please do
                        not use the Site.
                    </p>

                    <h2>1. Who we are</h2>
                    <p>
                        {SITE.legalName} is a motor carrier (MC# {SITE.mcNumber}) with headquarters at {SITE.address.street},{' '}
                        {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}, {SITE.address.country}. We are
                        responsible for the personal information described in this policy. You can reach us at{' '}
                        <a href={`mailto:${SITE.emails.dispatch}`}>{SITE.emails.dispatch}</a> or{' '}
                        <a href={SITE.phones.primary.href}>{SITE.phones.primary.display}</a>.
                    </p>

                    <h2>2. Information we collect</h2>
                    <h3>Information you give us</h3>
                    <p>
                        When you call us, email us, or use the quote request form, you may give us information such as your name,
                        company, phone number, email address, pickup and delivery locations, shipment details, and anything else you
                        choose to include.
                    </p>
                    <p>
                        The quote request form does not send your entries to our servers. When you press the submit button, it opens
                        your own email app with a pre-filled message addressed to us. We receive the information only if you choose
                        to send that email.
                    </p>

                    <h3>Information collected automatically</h3>
                    <ul>
                        <li>
                            <strong>Server and security logs.</strong> Our hosting provider, Vercel Inc., processes technical data
                            needed to deliver and protect the Site, such as IP address, browser type, the pages requested, referring
                            URL and the date and time of the request.
                        </li>
                        <li>
                            <strong>Analytics.</strong> We use Vercel Web Analytics to understand which pages are visited. It does not
                            use cookies, and it reports aggregated statistics such as page views, referrers, country, device type and
                            browser, rather than profiles of individual visitors.
                        </li>
                        <li>
                            <strong>Advertising cookies and identifiers.</strong> If advertising is shown on the Site, Google and its
                            partners may collect information through cookies, web beacons and similar technologies, as described in
                            Section 4.
                        </li>
                    </ul>
                    <p>
                        We do not use our own cookies to track you. The Site’s fonts are served from our own domain. The interactive
                        3D truck viewer on the home page loads font files for its lettering from the jsDelivr content delivery
                        network, which receives your IP address and browser information in order to deliver those files.
                    </p>

                    <h2>3. How we use information</h2>
                    <ul>
                        <li>To respond to inquiries, prepare quotes and provide transportation services you request.</li>
                        <li>To communicate about shipments, including rate confirmations, updates and proof of delivery.</li>
                        <li>To operate, maintain, secure and improve the Site, and to prevent fraud and abuse.</li>
                        <li>To understand how the Site is used through aggregated analytics.</li>
                        <li>To display advertising that helps support the Site, as described below.</li>
                        <li>To comply with legal, regulatory and recordkeeping obligations, and to enforce our terms.</li>
                    </ul>

                    <h2>4. Advertising and Google AdSense</h2>
                    <p>
                        We use Google AdSense, an advertising service provided by Google LLC, to display ads on the Site. In
                        connection with this:
                    </p>
                    <ul>
                        <li>
                            Third-party vendors, including Google, use cookies to serve ads based on a user’s prior visits to this
                            website or other websites.
                        </li>
                        <li>
                            Google’s use of advertising cookies enables it and its partners to serve ads to you based on your visit to
                            this Site and/or other sites on the Internet.
                        </li>
                        <li>
                            You may opt out of personalized advertising by visiting Google’s{' '}
                            <a href="https://adssettings.google.com" {...ext}>
                                Ads Settings
                            </a>
                            . Alternatively, you can opt out of a third-party vendor’s use of cookies for personalized advertising by
                            visiting{' '}
                            <a href="https://www.aboutads.info/choices" {...ext}>
                                www.aboutads.info/choices
                            </a>
                            {' '}or, in Europe,{' '}
                            <a href="https://www.youronlinechoices.eu" {...ext}>
                                www.youronlinechoices.eu
                            </a>
                            .
                        </li>
                        <li>
                            Ads may also be served by other Google-certified ad technology providers, which may set their own cookies.
                            The opt-out tools above cover many of these companies.
                        </li>
                        <li>
                            If you opt out, you will still see ads, but they will not be personalized based on your browsing activity.
                        </li>
                    </ul>
                    <p>
                        To learn how Google collects and uses data when you use sites that display its ads, see{' '}
                        <a href="https://policies.google.com/technologies/partner-sites" {...ext}>
                            How Google uses information from sites or apps that use our services
                        </a>
                        . Google’s own practices are described in the{' '}
                        <a href="https://policies.google.com/privacy" {...ext}>
                            Google Privacy Policy
                        </a>
                        .
                    </p>

                    <h3>Visitors in the EEA, the UK and Switzerland</h3>
                    <p>
                        Where the law requires consent before advertising cookies are used, you will be shown a consent message from a
                        Google-certified consent management platform when you visit the Site. You can accept or reject personalized
                        advertising, and you can change or withdraw your choice at any time through the same consent tool. If you do
                        not consent, Google may show non-personalized or limited ads, which still use cookies or identifiers for
                        purposes such as frequency capping, aggregated reporting and fraud prevention, where permitted by law.
                    </p>

                    <h2>5. Managing cookies</h2>
                    <p>
                        Most browsers let you view, block and delete cookies through their settings. Blocking all cookies may affect
                        how some websites work. Settings are usually under “Privacy” or “Security” in your browser’s preferences. You
                        can also use the advertising opt-outs in Section 4, and some browsers support the Global Privacy Control
                        signal.
                    </p>

                    <h2>6. How we share information</h2>
                    <p>We do not sell your personal information for money. We share information only as follows:</p>
                    <ul>
                        <li>
                            <strong>Service providers</strong> who host the Site, provide analytics, or provide our email and business
                            systems, under obligations to protect it.
                        </li>
                        <li>
                            <strong>Advertising partners</strong> such as Google, which collect information directly through cookies and
                            similar technologies as described in Section 4.
                        </li>
                        <li>
                            <strong>Shipment parties</strong> such as shippers, consignees, brokers, forwarders and facilities, when
                            needed to arrange and complete a shipment you requested.
                        </li>
                        <li>
                            <strong>Legal and safety reasons</strong>, when required by law, regulation, subpoena or court order, or to
                            protect our rights, our customers, the public or the security of the Site.
                        </li>
                        <li>
                            <strong>Business transfers</strong>, if our business is merged, acquired or reorganized, subject to this
                            policy.
                        </li>
                    </ul>

                    <h2>7. Your rights under U.S. state privacy laws</h2>
                    <p>
                        Depending on where you live, including California and other states with consumer privacy laws, you may have the
                        right to:
                    </p>
                    <ul>
                        <li>Know what categories and specific pieces of personal information we have collected about you.</li>
                        <li>Request deletion or correction of your personal information.</li>
                        <li>
                            Opt out of the “sale” or “sharing” of personal information, including for cross-context behavioral
                            advertising, and opt out of targeted advertising.
                        </li>
                        <li>Not be discriminated against for exercising these rights.</li>
                    </ul>
                    <p>
                        The use of advertising cookies by Google and its partners may be considered “sharing” or “targeted
                        advertising” under some state laws. You can opt out using the tools in Section 4, and you can submit any
                        request by emailing <a href={`mailto:${SITE.emails.dispatch}`}>{SITE.emails.dispatch}</a> with the subject
                        “Privacy Request.” We will verify your request using information you have already provided to us and respond
                        within the time required by law. You may use an authorized agent where the law allows.
                    </p>

                    <h2>8. Your rights in the EEA, the UK and Switzerland</h2>
                    <p>
                        If data protection laws such as the GDPR apply to you, you have the right to access, correct, delete, restrict
                        or object to our processing of your personal data, to data portability, and to withdraw consent at any time
                        without affecting earlier processing. We rely on these legal bases: your consent (advertising cookies), steps
                        taken at your request before entering a contract and performance of a contract (quotes and shipments), our
                        legitimate interests in operating and securing the Site (logs and aggregated analytics), and compliance with
                        legal obligations. You may also lodge a complaint with your local data protection authority.
                    </p>

                    <h2>9. International transfers</h2>
                    <p>
                        We are based in the United States, and our service providers may process information in the United States and
                        other countries. Where required, transfers are protected by appropriate safeguards such as standard contractual
                        clauses used by those providers.
                    </p>

                    <h2>10. Data retention</h2>
                    <p>
                        We keep inquiry and shipment communications for as long as needed to provide our services and to meet legal,
                        tax, insurance and regulatory recordkeeping requirements, then delete or anonymize them. Aggregated analytics
                        do not identify you. Advertising cookies are retained according to Google’s and its partners’ policies and your
                        browser settings.
                    </p>

                    <h2>11. Security</h2>
                    <p>
                        The Site is served over encrypted HTTPS, and we use reasonable administrative and technical measures to protect
                        information. No method of transmission or storage is completely secure, so we cannot guarantee absolute
                        security. Please do not send sensitive information such as payment card numbers by email.
                    </p>

                    <h2>12. Children’s privacy</h2>
                    <p>
                        The Site is a business-to-business service and is not directed to children under 13 (or under 16 in the EEA and
                        UK). We do not knowingly collect personal information from children. If you believe a child has provided us
                        with personal information, please contact us and we will delete it.
                    </p>

                    <h2>13. Links to other websites</h2>
                    <p>
                        The Site links to third-party websites, such as government agencies and the advertisers whose ads appear here.
                        We are not responsible for their privacy practices; please review their policies.
                    </p>

                    <h2>14. Changes to this policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. The “Last updated” date at the top shows when it was last
                        changed. Material changes will be highlighted on the Site.
                    </p>

                    <h2>15. Contact us</h2>
                    <p>
                        Questions or requests about privacy:
                        <br />
                        {SITE.legalName}
                        <br />
                        {SITE.address.street}, {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
                        <br />
                        Email: <a href={`mailto:${SITE.emails.dispatch}`}>{SITE.emails.dispatch}</a>
                        <br />
                        Phone: <a href={SITE.phones.primary.href}>{SITE.phones.primary.display}</a>
                    </p>
                    <p>
                        See also our <Link href="/terms">Terms of Use</Link> and <Link href="/disclaimer">Disclaimer</Link>.
                    </p>
                </article>
            </div>
        </>
    );
}
