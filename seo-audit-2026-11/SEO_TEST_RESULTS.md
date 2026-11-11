# Umaja Logistics — test results (12 Nov 2026, local production build)

| Check | Result |
| --- | --- |
| `npm run build` | PASS (after fixing a quote character introduced in a title edit) |
| `scripts/check-site.mjs` (extended) | PASS: 24 pages, 24 internal paths, 0 warnings |
| `test-pallet-fit.mjs` | PASS |
| `check-google-tag.mjs GTM-MG3HSSFH` / `check-publisher.mjs` | PASS / PASS |
| `check-guide-content.mjs` | Fails on live and locally, before and after this work: it hard-codes `dateModified 2026-11-06`. Guides were later updated legitimately. Update the script's expected date, or have it read the date from the article. |
| Open Graph | All 24 pages: 5 OG tags present, og:url = canonical, absolute og:image |
| JSON-LD | Valid where present (home Organization, 8 Articles, calculator WebApplication + FAQPage) |
| Redirects | Intentional host/protocol 308s; privacy opt-out link now goes straight to the final URL |
| Broken links | Sketchfab author link (500) removed; NMFTA 403 to bots only |
| IndexNow key file | 200 locally |
| Lighthouse / validator | Not run |
