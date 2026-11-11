# Umaja Logistics — baseline SEO audit (live crawl 12 Nov 2026)

- Site: https://umajalogistics.online (www 308 → apex) · Repo: aliafzal9350/umajalogistics
- Stack: Next.js 14 App Router; `lib/metadata.js` `pageMetadata()`; articles in `content/articles`; `app/sitemap.js`, `app/robots.js`; Vercel (a Dockerfile also exists). No IndexNow.
- Baseline build and `check-site.mjs`: pass. `check-guide-content.mjs` already **fails on live** (hard-coded date 2026-11-06 no longer matches the guides). Not caused by this work.
- Ahrefs (4 and 11 Nov): health 100, 0 errors, 6 warnings, 26 notices. API: *Insufficient plan*.

## Verified defects (priority)
- **P1** Broken external attribution link (Sketchfab author profile, HTTP 500).
- **P2** 7 descriptions under 110 chars (2 under 100, matching Ahrefs), 1 over 160; 2 titles over 60.
- **P2** Privacy page links to a redirecting URL (aboutads.info).
- **P2** No IndexNow.
- **Not reproduced** The 8 og:url/canonical mismatches from 4 Nov: all 24 pages now match.
- **P3** Hosting redirect chain for http://www (2 hops).

## Live crawl inventory

| URL | Status | Hops | Title (len) | Description len | Canonical | og:url = canonical | In sitemap | JSON-LD types |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| https://umajalogistics.online/ | 200 | 0 | Umaja Logistics \| Box Truck & Expedited Freight (47) | 142 | https://umajalogistics.online | yes | yes | Organization, PostalAddress |
| https://umajalogistics.online/services | 200 | 0 | Freight Services \| Umaja Logistics (34) | 132 | https://umajalogistics.online/services | yes | yes |  |
| https://umajalogistics.online/resources | 200 | 0 | Freight Shipping Guides \| Umaja Logistics (41) | 121 | https://umajalogistics.online/resources | yes | yes |  |
| https://umajalogistics.online/tools/pallet-calculator | 200 | 0 | Box Truck Pallet Calculator \| Umaja Logistics (45) | 137 | https://umajalogistics.online/tools/pallet-calculator | yes | yes |  |
| https://umajalogistics.online/tools/freight-density-calculator | 200 | 0 | Freight Density & Class Calculator (LTL) \| Umaja Logistics (58) | 163 | https://umajalogistics.online/tools/freight-density-calculator | yes | yes | WebApplication, Offer, FAQPage, Question, Answer |
| https://umajalogistics.online/tools/shipment-brief | 200 | 0 | Freight Shipment Brief Builder \| Umaja Logistics (48) | 149 | https://umajalogistics.online/tools/shipment-brief | yes | yes |  |
| https://umajalogistics.online/about | 200 | 0 | About Us \| Umaja Logistics (26) | 124 | https://umajalogistics.online/about | yes | yes |  |
| https://umajalogistics.online/faq | 200 | 0 | Freight Shipping FAQ \| Umaja Logistics (38) | 113 | https://umajalogistics.online/faq | yes | yes |  |
| https://umajalogistics.online/contact | 200 | 0 | Contact & Get a Quote \| Umaja Logistics (39) | 106 | https://umajalogistics.online/contact | yes | yes |  |
| https://umajalogistics.online/privacy-policy | 200 | 0 | Privacy Policy \| Umaja Logistics (32) | 99 | https://umajalogistics.online/privacy-policy | yes | yes |  |
| https://umajalogistics.online/terms | 200 | 0 | Terms of Use \| Umaja Logistics (30) | 106 | https://umajalogistics.online/terms | yes | yes |  |
| https://umajalogistics.online/disclaimer | 200 | 0 | Disclaimer \| Umaja Logistics (28) | 118 | https://umajalogistics.online/disclaimer | yes | yes |  |
| https://umajalogistics.online/editorial-policy | 200 | 0 | About Our Freight Guides \| Umaja Logistics (42) | 97 | https://umajalogistics.online/editorial-policy | yes | yes |  |
| https://umajalogistics.online/services/jfk-air-cargo-trucking | 200 | 0 | JFK Air Cargo Trucking \| Umaja Logistics (40) | 146 | https://umajalogistics.online/services/jfk-air-cargo-trucking | yes | yes |  |
| https://umajalogistics.online/services/liftgate-delivery | 200 | 0 | Liftgate Delivery Service \| Umaja Logistics (43) | 160 | https://umajalogistics.online/services/liftgate-delivery | yes | yes |  |
| https://umajalogistics.online/services/box-truck-freight | 200 | 0 | Dedicated Box Truck Freight \| Umaja Logistics (45) | 146 | https://umajalogistics.online/services/box-truck-freight | yes | yes |  |
| https://umajalogistics.online/resources/jfk-air-cargo-trucking | 200 | 0 | JFK Airport Cargo Pickup Guide \| Umaja Logistics (48) | 126 | https://umajalogistics.online/resources/jfk-air-cargo-trucking | yes | yes | Article, Organization |
| https://umajalogistics.online/resources/26ft-box-truck-capacity | 200 | 0 | How Many Pallets Fit in a 26ft Box Truck? \| Umaja Logistics (59) | 145 | https://umajalogistics.online/resources/26ft-box-truck-capacity | yes | yes | Article, Organization |
| https://umajalogistics.online/resources/liftgate-delivery-guide | 200 | 0 | What Is Liftgate Delivery? When You Need It \| Umaja Logistics (61) | 138 | https://umajalogistics.online/resources/liftgate-delivery-guide | yes | yes | Article, Organization |
| https://umajalogistics.online/resources/expedited-vs-ltl | 200 | 0 | Expedited LTL vs. Dedicated Freight \| Umaja Logistics (53) | 105 | https://umajalogistics.online/resources/expedited-vs-ltl | yes | yes | Article, Organization |
| https://umajalogistics.online/resources/verify-motor-carrier | 200 | 0 | How to Verify a Motor Carrier \| Umaja Logistics (47) | 108 | https://umajalogistics.online/resources/verify-motor-carrier | yes | yes | Article, Organization |
| https://umajalogistics.online/resources/twic-tsa-credentials-explained | 200 | 0 | What Is a TWIC Card? Port Access for Truck Drivers \| Umaja Logistics (68) | 133 | https://umajalogistics.online/resources/twic-tsa-credentials-explained | yes | yes | Article, Organization |
| https://umajalogistics.online/resources/prepare-palletized-freight | 200 | 0 | How to Prepare Palletized Freight \| Umaja Logistics (51) | 102 | https://umajalogistics.online/resources/prepare-palletized-freight | yes | yes | Article, Organization |
| https://umajalogistics.online/resources/bol-rate-confirmation-pod | 200 | 0 | Freight Paperwork: BOL, Rate Con & POD \| Umaja Logistics (56) | 121 | https://umajalogistics.online/resources/bol-rate-confirmation-pod | yes | yes | Article, Organization |

**Host / protocol variants**

- 308 http://umajalogistics.online/ → 200 https://umajalogistics.online/
- 308 http://www.umajalogistics.online/ → 308 https://www.umajalogistics.online/ → 200 https://umajalogistics.online/
- 308 https://www.umajalogistics.online/ → 200 https://umajalogistics.online/

**External links (non-200 to an automated client)**

- 500 https://sketchfab.com/ddiaz-design
- 403 https://nmfta.org/
- 429 https://www.aboutads.info/choices

**robots.txt**

```
User-Agent: *
Allow: /

Host: https://umajalogistics.online
Sitemap: https://umajalogistics.online/sitemap.xml
```
