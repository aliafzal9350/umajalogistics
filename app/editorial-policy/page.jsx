import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { SITE } from '@/lib/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('About Our Freight Guides', 'Who publishes the Umaja Logistics freight guides, how sources are checked, how commercial interests are disclosed and how to request corrections.', '/editorial-policy');

export default function EditorialPolicy() {
  return <>
    <PageHeader title="About our freight guides" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Guide policy' }]} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
      <article className="prose-content max-w-3xl">
        <h2>Publisher and purpose</h2>
        <p>{SITE.legalName} publishes these resources to help shippers understand equipment, paperwork and receiving requirements. We also provide freight services and may benefit when a reader requests a quote. These guides are not independent carrier rankings.</p>
        <h2>Examples and equipment limits</h2>
        <p>Planning examples explain a decision; they are not completed shipment records or quotations unless explicitly identified as such. Confirm payload, door clearance, platform ratings and handling scope for the truck actually assigned. A calculator result does not confirm that a shipment has been accepted.</p>
        <h2>Checking sources</h2>
        <p>For agency requirements, follow the official references in each guide and confirm current facility instructions. Agency links do not imply endorsement or a review of this website. Equipment instructions and written shipment agreements take precedence over a general planning example.</p>
        <h2>Corrections</h2>
        <p>Send the guide address, the passage in question and supporting information to <a href={`mailto:${SITE.emails.dispatch}`}>{SITE.emails.dispatch}</a>. Published and updated dates identify the content version; they do not certify regulatory or equipment approval.</p>
        <h2>Advertising</h2>
        <p>Any advertising is separate from the guidance and is not a carrier recommendation. See our <Link href="/privacy-policy">privacy policy</Link> for advertising and website data practices. Browse the <Link href="/resources">freight guides</Link> or <Link href="/contact">contact dispatch</Link> about a specific shipment.</p>
      </article>
    </div>
  </>;
}
