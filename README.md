# Umaja Logistics website

Marketing site for Umaja Logistics LLC (MC# 1508261), built with Next.js 14 (App Router), Tailwind CSS and an
interactive three.js box truck. Deployed at <https://umajalogistics.online>.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

| Path | What it is |
| --- | --- |
| `lib/site.js` | Business details (name, phones, emails, address, MC#) and nav links. Edit contact info here. |
| `app/page.jsx` | Home page |
| `app/{services,about,faq,contact}` | Main pages |
| `app/resources` + `content/articles/` | Shipping guides. Add a file to `content/articles/` and register it in `content/articles/index.js`. |
| `app/{privacy-policy,terms,disclaimer}` | Legal pages. Update `SITE.policiesUpdated` in `lib/site.js` when they change. |
| `app/ads.txt`, `app/robots.js`, `app/sitemap.js` | Crawler files, generated at build time |
| `components/TruckCanvas.jsx` + `public/models/truck.glb` | Interactive 3D truck viewer. The model is "2003 GMC TopKick C6500" by Ddiaz Design (Sketchfab), licensed CC-BY-NC-SA-4.0. |

## Google AdSense setup

The AdSense script, the `google-adsense-account` meta tag and `/ads.txt` are generated from the publisher ID in
`lib/site.js` (`ca-pub-1895109224491741`). To use a different ID without editing code, set the
`NEXT_PUBLIC_ADSENSE_CLIENT` environment variable in Vercel (or `--build-arg` for Docker) and redeploy; it is read at
build time.

1. Deploy the site.
2. Check that <https://umajalogistics.online/ads.txt> shows
   `google.com, pub-1895109224491741, DIRECT, f08c47fec0942fa0`, and that the page source contains
   `adsbygoogle.js?client=ca-pub-1895109224491741`.
3. In AdSense → Sites, add `umajalogistics.online` and request review.
4. In AdSense → Privacy & messaging, publish the **European regulations** (GDPR consent) message and the
   **US state regulations** message. The privacy policy states that EEA/UK/Swiss visitors are asked for consent,
   so this step is required.
5. After approval, turn on **Auto ads** for the site. No ad units are hard-coded in the pages.
6. Submit `https://umajalogistics.online/sitemap.xml` in Google Search Console.

### Keep it compliant

- Do not click your own ads or ask anyone to click them.
- Keep adding original guides; review the existing ones and add first-hand details from your own runs.
- Keep every claim on the site (credentials, insurance, fleet size) accurate and current.
- Only use images, models and fonts you have the rights to use commercially.
