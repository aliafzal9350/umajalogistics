import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { SITE, ADSENSE_CLIENT, ADSENSE_ADS_ENABLED } from '@/lib/site';

// Self-hosted at build time by next/font, so visitors' browsers never request Google Fonts.
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Umaja Logistics | Box Truck & Expedited Freight',
    template: `%s | ${SITE.name}`,
  },
  description:
    '26ft dock-high box truck freight with liftgate service. Nationwide expedited runs and JFK air cargo trucking. Call (646) 973-6672 for a quote.',
  applicationName: SITE.name,
  openGraph: {
    title: SITE.legalName,
    description: SITE.tagline,
    url: SITE.url,
    siteName: SITE.name,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.legalName,
    description: SITE.tagline,
  },
  robots: { index: true, follow: true },
  ...(ADSENSE_CLIENT && { other: { 'google-adsense-account': ADSENSE_CLIENT } }),
};

export const viewport = {
  themeColor: '#080C10',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        {ADSENSE_CLIENT && ADSENSE_ADS_ENABLED && (
          // Plain <script> (not next/script) so the AdSense site-verification crawler sees it in the server HTML.
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-sky-500 focus:text-slate-950 focus:font-bold"
        >
          Skip to content
        </a>
        <div className="min-h-screen flex flex-col bg-[#080C10] text-slate-100 font-sans antialiased selection:bg-sky-400 selection:text-slate-950">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
