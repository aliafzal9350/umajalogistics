import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { SITE } from '@/lib/site';

export const metadata = {
    title: 'Terms of Use',
    description: 'The terms that govern use of the Umaja Logistics LLC website, including quotes, content, advertising and limitations of liability.',
    alternates: { canonical: '/terms' },
};

export default function TermsPage() {
    return (
        <>
            <PageHeader eyebrow="Legal" title="Terms of Use" description={`Last updated: ${SITE.policiesUpdated}`} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
                <article className="prose-content max-w-3xl">
                    <p>
                        These Terms of Use (“Terms”) govern your access to and use of {SITE.url.replace('https://', '')} (the
                        “Site”), operated by {SITE.legalName} (“{SITE.name},” “we,” “us” or “our”). By using the Site you agree to
                        these Terms and to our <Link href="/privacy-policy">Privacy Policy</Link>. If you do not agree, do not use
                        the Site.
                    </p>

                    <h2>1. Purpose of the Site</h2>
                    <p>
                        The Site provides information about our freight transportation services and general educational content for
                        shippers. It is intended for business users in the United States.
                    </p>

                    <h2>2. Quotes and transportation services</h2>
                    <ul>
                        <li>
                            Information on the Site, including equipment specifications, service descriptions and response times, is
                            provided for general information and may change without notice.
                        </li>
                        <li>
                            A quote request sent through the Site is not a booking. No contract for transportation exists until we
                            confirm the shipment in writing, normally through a rate confirmation.
                        </li>
                        <li>
                            Transportation services are governed by the applicable rate confirmation, bill of lading, any written
                            agreement between the parties, and applicable law, including federal law governing carrier liability for
                            interstate shipments. Those documents control over anything stated on the Site.
                        </li>
                    </ul>

                    <h2>3. Acceptable use</h2>
                    <p>You agree not to:</p>
                    <ul>
                        <li>Use the Site for any unlawful, fraudulent or misleading purpose, or impersonate any person or company.</li>
                        <li>Submit false shipment information or use our name, MC number or documents to misrepresent a load.</li>
                        <li>
                            Attempt to gain unauthorized access to the Site or its systems, introduce malware, or interfere with the
                            Site’s operation.
                        </li>
                        <li>Scrape, copy or harvest content or contact details by automated means for unsolicited marketing.</li>
                        <li>
                            Click on, or encourage others to click on, advertisements on the Site in order to generate impressions or
                            clicks artificially.
                        </li>
                    </ul>

                    <h2>4. Intellectual property</h2>
                    <p>
                        The Site and its content, including text, guides, graphics, logos and the “Umaja Logistics” name, are owned
                        by or licensed to {SITE.legalName} and are protected by intellectual property laws. Third-party materials
                        remain the property of their respective owners.
                        You may view, print and share pages for your personal or internal business use with attribution. You may not
                        republish, sell or create derivative works from Site content without our written permission.
                    </p>

                    <h2>5. Advertising and third-party links</h2>
                    <p>
                        The Site may display advertisements served by Google and its partners, and it links to third-party websites
                        such as government agencies. Advertisements and third-party sites are not under our control. Their appearance
                        on the Site is not an endorsement, and we are not responsible for their content, products, services or
                        privacy practices. Your dealings with advertisers are solely between you and them.
                    </p>

                    <h2>6. Disclaimer of warranties</h2>
                    <p>
                        The Site and its content are provided “as is” and “as available,” without warranties of any kind, express or
                        implied, including warranties of accuracy, merchantability, fitness for a particular purpose and
                        non-infringement. We do not warrant that the Site will be uninterrupted or error-free. Educational content is
                        general information, not legal, regulatory or insurance advice. See our{' '}
                        <Link href="/disclaimer">Disclaimer</Link>.
                    </p>

                    <h2>7. Limitation of liability</h2>
                    <p>
                        To the fullest extent permitted by law, {SITE.legalName} and its members, employees and agents will not be
                        liable for any indirect, incidental, special, consequential or punitive damages, or for lost profits, data or
                        business opportunities, arising from your use of, or inability to use, the Site or its content. This section
                        does not limit any liability that cannot be limited by law, and it does not change carrier liability for
                        shipments, which is governed by the shipment documents and applicable law.
                    </p>

                    <h2>8. Indemnification</h2>
                    <p>
                        You agree to indemnify and hold harmless {SITE.legalName} from claims, losses and expenses, including
                        reasonable attorneys’ fees, arising from your violation of these Terms or misuse of the Site.
                    </p>

                    <h2>9. Governing law</h2>
                    <p>
                        These Terms are governed by the laws of the State of Delaware, without regard to its conflict-of-law rules,
                        except where federal law applies. Any dispute about these Terms or the Site will be brought in the state or
                        federal courts located in Delaware, and you consent to their jurisdiction.
                    </p>

                    <h2>10. Changes to these Terms</h2>
                    <p>
                        We may update these Terms from time to time. The “Last updated” date shows when they last changed. Continued
                        use of the Site after a change means you accept the updated Terms.
                    </p>

                    <h2>11. Contact</h2>
                    <p>
                        {SITE.legalName}, {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{' '}
                        {SITE.address.postalCode}. Email: <a href={`mailto:${SITE.emails.dispatch}`}>{SITE.emails.dispatch}</a>.
                        Phone: <a href={SITE.phones.primary.href}>{SITE.phones.primary.display}</a>.
                    </p>
                </article>
            </div>
        </>
    );
}
