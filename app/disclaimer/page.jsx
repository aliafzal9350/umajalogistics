import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { SITE } from '@/lib/site';

export const metadata = {
    title: 'Disclaimer',
    description:
        'General information, advertising and external link disclaimers for the Umaja Logistics website and its shipping guides.',
    alternates: { canonical: '/disclaimer' },
};

export default function DisclaimerPage() {
    return (
        <>
            <PageHeader eyebrow="Legal" title="Disclaimer" description={`Last updated: ${SITE.policiesUpdated}`} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
                <article className="prose-content max-w-3xl">
                    <h2>General information only</h2>
                    <p>
                        The guides, FAQs and other content on this website are published by {SITE.legalName} for general
                        informational purposes. They reflect our practical experience as a motor carrier, but they are not legal,
                        regulatory, customs, tax or insurance advice, and they do not create any professional relationship. For
                        decisions about a specific shipment, contract, claim or compliance obligation, consult the relevant
                        documents, government agency or a qualified professional.
                    </p>

                    <h2>Regulations change</h2>
                    <p>
                        Transportation and security rules, including those administered by the Federal Motor Carrier Safety
                        Administration (FMCSA), the Transportation Security Administration (TSA), U.S. Customs and Border Protection
                        and individual airports, ports and terminals, change over time. We work to keep our content accurate and
                        current, but we do not guarantee that every statement reflects the latest requirements. Always confirm with
                        the official source.
                    </p>

                    <h2>Service information</h2>
                    <p>
                        Equipment specifications such as dimensions, payload and liftgate ratings are approximate and provided for
                        planning. Availability, transit times and pricing are confirmed only in a written rate confirmation. Our
                        operating authority, insurance and credentials can be verified through public FMCSA records and through our
                        carrier packet, which we provide on request.
                    </p>

                    <h2>Advertising disclosure</h2>
                    <p>
                        This website may display advertisements served by Google AdSense and its partners. Ads are selected
                        automatically by the ad network, not by us, and are shown separately from our own content. The appearance of
                        an advertisement does not mean that we endorse or recommend the advertiser or its products. Revenue from
                        advertising helps support the free guides on this site. For information about how advertising cookies are
                        used and how to opt out, see our <Link href="/privacy-policy">Privacy Policy</Link>.
                    </p>

                    <h2>External links</h2>
                    <p>
                        We link to external websites, such as government resources, when they are useful to readers. We do not control
                        those sites and are not responsible for their content, availability or privacy practices.
                    </p>

                    <h2>Limitation of liability</h2>
                    <p>
                        To the extent permitted by law, {SITE.legalName} is not liable for any loss or damage arising from reliance on
                        the general information published on this website. Our liability for transportation services is governed by
                        the applicable shipment documents and law, as described in our <Link href="/terms">Terms of Use</Link>.
                    </p>

                    <h2>Questions</h2>
                    <p>
                        If you notice an error in any of our content, please tell us at{' '}
                        <a href={`mailto:${SITE.emails.dispatch}`}>{SITE.emails.dispatch}</a> so we can correct it.
                    </p>
                </article>
            </div>
        </>
    );
}
