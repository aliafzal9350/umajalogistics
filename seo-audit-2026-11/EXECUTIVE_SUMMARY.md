# Ahrefs remediation — executive summary (12 Nov 2026)

Covers Big Mack Trucking, Cargo Kings Inc and Umaja Logistics. The same file is in all three repos under `seo-audit-2026-11/`.

**Data limits.** The Ahrefs API returned "Insufficient plan", so exact affected URLs came from an independent crawl of each live site. No new Ahrefs health score is claimed; re-run Site Audit after deploy.

| | Big Mack | Cargo Kings | Umaja |
| --- | --- | --- | --- |
| Pages crawled | 21 | 10 | 24 |
| Issues confirmed | Schema error (sitewide), 5 short + 5 long descriptions, 2 long titles, no IndexNow, redirect chain | 5 short descriptions, 2 long titles, external 403s, no IndexNow, redirect chain | 2 (+5) short and 1 long description, 2 long titles, broken Sketchfab link, redirecting opt-out link, no IndexNow, redirect chain |
| Resolved in code | Schema root cause, all 10 descriptions, both titles, /about title, duplicate /resources description | All 5 descriptions, both titles, duplicate description, FMCSA link points to own snapshot | All descriptions and titles, Sketchfab link, aboutads link |
| Not reproducible | "Article page missing Article schema" (all guides have it) | "Page vs SERP title" URL unknown | 8 og:url/canonical mismatches (already fixed earlier) |
| Intentionally unchanged | http→https and apex→www redirects; homepage title; trailing-slash canonical on / | Same host redirects; OSHA link | Same host redirects; NMFTA link |
| Needs manual action | Run IndexNow after deploy; validate schema in schema.org Validator | Run IndexNow; Ahrefs will likely keep flagging the government 403s | Run IndexNow; fix the stale date in `check-guide-content.mjs` |

## Files modified
- **Big Mack:** `lib/seo.js`, `lib/company-pages.js`, `lib/resources.js`, `app/resources/page.jsx`, `app/fleet/page.jsx`, `scripts/check-site.mjs`, new `scripts/indexnow.mjs`, `public/<key>.txt`
- **Cargo Kings:** `lib/company-pages.js`, `lib/resources.js`, `app/resources/page.jsx`, `app/fleet/page.jsx`, `scripts/check-site.mjs`, new `scripts/indexnow.mjs`, `public/<key>.txt`
- **Umaja:** `lib/metadata.js`, `app/contact|privacy-policy|terms|editorial-policy/page.jsx`, `app/tools/freight-density-calculator/page.jsx`, `components/SiteFooter.jsx`, `scripts/check-site.mjs`, new `scripts/indexnow.mjs`, `public/<key>.txt`

No layout, styling, tracking, form or 3D-scene code changed. Every edit is a metadata string, a JSON-LD property, a link URL, or a test/script.

## Requires your approval / access
1. **Deploy:** these commits are on the `claude/seo-strategy-four-sites-*` branches and are **not** on main. Pushing to main deploys to production on Vercel.
2. **After deploy:** `INDEXNOW_ENABLED=1 node scripts/indexnow.mjs https://<site>` in each repo (Bing and partner engines; Google does not use IndexNow). Submit the sitemaps in Google Search Console.
3. **Ahrefs:** re-crawl all three projects to get verified counts. API access to Site Audit needs a higher Ahrefs plan.
4. **Vercel (optional):** the http→https→canonical-host chain is Vercel's edge behaviour and harmless. It can't be collapsed from app code.
