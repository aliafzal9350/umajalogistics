# Umaja Logistics — SEO fixes (12 Nov 2026)

Repo: `aliafzal9350/umajalogistics` · Next.js 14 App Router (also has a Dockerfile; production served by Vercel per response headers) · canonical host `https://umajalogistics.online`

Ahrefs API returned "Insufficient plan"; URLs come from an independent crawl of the live site (24 sitemap URLs).

| # | Issue (Ahrefs) | Affected URLs | Root cause | File changed | Solution | Validation | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Meta descriptions too short (2) | /privacy-policy (99), /editorial-policy (97); also under 110: /contact, /terms, /resources/expedited-vs-ltl, /verify-motor-carrier, /prepare-palletized-freight | Short summaries | `app/*/page.jsx`, `lib/metadata.js` | Rewritten at 137–147 chars | Local crawl 100–165 | Fixed (Ahrefs' 2 + 5 more) |
| 2 | Description too long | /tools/freight-density-calculator (163) | New page from 11 Nov | `app/tools/freight-density-calculator/page.jsx` | 150 chars | — | Fixed |
| 3 | Titles too long (7, Nov 4) | Now only /resources/liftgate-delivery-guide (61) and /twic-tsa-credentials-explained (68) | Long article titles | `lib/metadata.js` | "What Is Liftgate Delivery?", "What Is a TWIC Card? A Trucker’s Guide" | All titles ≤60 | Fixed (the other 5 were fixed by earlier work) |
| 4 | Open Graph URL not matching canonical (8) / incomplete OG (8), Nov 4 | none now | Fixed in an earlier release (`pageMetadata` sets og:url = canonical) | — | — | All 24 pages: og:url = canonical, all 5 OG tags present; regression assert covers it | Already correct |
| 5 | Pages linking to redirected URLs (2) / external 3XX (3) | /privacy-policy → `www.aboutads.info/choices` (redirects to `optout.aboutads.info`) | Old link | `app/privacy-policy/page.jsx` | Linked to the final URL | — | Fixed. No internal links to redirects found. |
| 6 | Broken external link | Footer → `sketchfab.com/ddiaz-design` (HTTP 500, confirmed in a real browser) | Author profile gone | `components/SiteFooter.jsx` | Author credit kept as text (CC BY-NC-SA needs the name); model link (200) kept | — | Fixed |
| 7 | Redirect chain (1) / 3XX (3) / HTTP→HTTPS (2) | `http://www.umajalogistics.online/` → `https://www.…/` → `https://umajalogistics.online/` | Vercel HTTPS upgrade, then www→apex | — | Kept; all internal references use the apex | Crawl | Intentionally unchanged |
| 8 | Changed pages not submitted to IndexNow (24) | all | No integration | `scripts/indexnow.mjs`, `public/a3a4d79fb1deda30370c01ca9590ff67.txt` | Same workflow as the other sites | Key file 200 locally | Requires manual action: run after deploy |
| 9 | External 403 | /tools/freight-density-calculator → `nmfta.org` | NMFTA blocks bot user agents (browser UA = 200) | — | Kept: authoritative source | — | Intentionally unchanged |
| 10 | Meta descriptions changed (17), titles changed (11), H1 changed (3), word count changed (1), redirect target changed (1) | various | Intentional edits from the 4–11 Nov SEO work | — | Reviewed: each page has one H1, server-rendered text, no empty sections | `check-site.mjs` | Informational |
| 11 | Pages with no JSON-LD (services, tools, about, faq) | 13 URLs | Never added | — | Not reported by Ahrefs; adding schema is optional | — | Left for later (P2) |
