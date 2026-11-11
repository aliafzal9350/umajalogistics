# SEO growth plan — four sites (11 Nov 2026)

## Baseline (Semrush, US database)

| Site | Ranking keywords | Est. organic traffic | AdSense |
| --- | --- | --- | --- |
| umajalogistics.online | 5 | ~0 | approved |
| bigmacktrucking.com | 1 | ~0 | approved |
| cargokingsinc.com | 17 | ~0 | approved |
| veltexra.com (Shopify) | 8 | ~0 | not applicable (store) |

The technical base is already clean (see SEO-ADSENSE-AUDIT.md). The problem is **not enough pages matching what people search for**. AdSense pays per visit, so the plan below is about getting visits.

## Strategy: one topic per domain, no overlap

Google filters out near-duplicate pages across sites run by the same owner. Give each domain its own topic cluster:

| Site | Cluster | Top low-difficulty targets (volume/mo · KD) |
| --- | --- | --- |
| **Umaja** | Freight class, density, LTL pricing (**tools**) | freight density calculator 1,300 · 29; nmfc classification lookup 720 · 16; what is freight class 720 · 26; ltl density calculator 260 · 1; what is a freight class 320 · 3; class 50/70/85 freight 210 each · 19–26 |
| **Big Mack** | Box truck sizes and specs | box truck length 2,400 · 29; 16 ft box truck 1,300 · 20; box truck size 1,300 · 27; what is a box truck 1,300 · 16; cutaway truck 1,000 · 14 |
| **Cargo Kings** | Pallet shipping how-to and cost | how to ship a pallet 260 · 18; how much does it cost to ship a pallet 320 · 18; pallet delivery 480 · 9; cheapest way to ship a pallet 110 · 17; pack a pallet 140 · 14; palletize meaning 140–1,900 · 24 |
| **Veltexra** | Product + buying-guide pages (Shopify blog) | Run a keyword pass on the store's own product category before writing |

Calculators and reference pages beat blog posts for AdSense: people come back, stay longer, and they earn links naturally.

## Shipped in this change (Umaja)

- `/tools/freight-density-calculator` — multi-pallet density calculator, 2025 NMFC 13-tier class table, FAQ + WebApplication schema, linked from Resources and the sitemap.

## Next 30 days (in order)

1. **Umaja:** add "Freight class 50 → 400 explained" (one page, table + examples per class) and "NMFC code: what it is and how to find yours". Link both to the calculator.
2. **Big Mack:** "Box truck sizes: 10, 12, 16, 20, 24, 26 ft dimensions and capacity" (one big comparison page, real measurements from your fleet) plus "What is a box truck vs cutaway vs straight truck".
3. **Cargo Kings:** "How to ship a pallet: step by step" and "How much does it cost to ship a pallet (2026)" — use real quote ranges from your dispatch.
4. **Submit every new URL** in Google Search Console (URL Inspection → Request indexing).
5. **Backlinks (biggest lever after content):** claim Google Business Profiles for all three carriers, list on FMCSA-adjacent directories (DAT, Truckstop, Thomasnet, local chambers), and link the three sites to each other only from About/footer "our network" — not keyword-stuffed.

## AdSense revenue tips

- Turn on **Auto ads** with in-page + anchor formats only; keep ads off tool inputs and quote buttons.
- Freight keywords carry real CPC ($2–$15 on pallet/class terms), so informational pages in these clusters monetize better than generic trucking news.
- Review AdSense → Reports → Pages monthly; expand the pages with the highest RPM.

## What I need from you

- Real fleet measurements and photos (Big Mack, Cargo Kings) — original data is what makes these pages rank.
- Search Console access or exports so I can track impressions per page.
- For Veltexra: which products/categories matter most, so the store keyword pass targets money pages.
