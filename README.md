# Browner Designs — new site

## What changed
- **No more inline styles.** Everything now lives in `/css/style.css`, one stylesheet shared across all pages.
- **One JS file**, `/js/main.js`, handles the mobile menu and the contact form.
- **Content now centers on your three services** — website design, app design, e-learning design — instead of the Etsy t-shirt shop, which has been removed per your instructions.
- **Portfolio folded into the Services page** (`designs.html`) instead of a separate page, per your instructions. It currently features:
  - This website itself, as a live web-design example
  - The sample acknowledgement e-learning module
  - An honest "currently taking app design projects" placeholder (since there's no app case study yet)
- **Contact page** now has a real working form (Website field: project type, budget, message) wired up for **Netlify Forms** — free, no backend needed since you're already on Netlify.
- **SEO basics added to every page:** unique title + meta description, canonical URL, Open Graph/Twitter tags, semantic HTML (`header`/`main`/`section`/`footer`, one `h1` per page), alt text on every image, `sitemap.xml`, `robots.txt`, and structured data (JSON-LD) describing the business and services.
- Same file names as before — `index.html`, `about.html`, `contact.html`, `designs.html`, `resume.html` — nothing renamed.

## Before you deploy — please check these

1. **Email address:** set to `contactbrownerdesigns@gmail.com` on the Contact page.
2. **Netlify Forms setup:** the form will start working automatically on your next deploy — Netlify scans the built HTML for `data-netlify="true"` forms. After deploying, go to your Netlify site dashboard → **Forms** to see submissions, and turn on email notifications under **Forms → Settings → Form notifications** so you don't have to check the dashboard manually.
3. **Image with spaces in the filename:** `Images/Ryan Brown 2019-6158re.jpg` and `Documents/Ryan Brown's Resume 032422.pdf` have spaces (and an apostrophe) in their names. Browsers generally handle this fine, but if you ever run into a broken link/image, the safest fix is renaming the files to remove spaces/apostrophes (e.g. `ryan-brown-2019.jpg`, `ryan-brown-resume.pdf`) and updating the two `src`/`href` references in `about.html` and `resume.html` to match.
4. **`Sample_Acknowledgement` link casing:** your folder is named `Sample_Acknowledgement`, but the old live link used lowercase `sample_acknowledgement`. I linked to `/Sample_Acknowledgement/story` (matching your actual folder name) in `designs.html` — double check that resolves correctly after deploy; if not, switch it to lowercase to match whatever your old link used.
5. **Address for local SEO:** I left the business address general (South Carolina, no city) since I don't have your exact city. If you want stronger local search results, consider adding a city/zip to the structured data in `index.html` and setting up a free Google Business Profile.

## How to deploy
1. Drop these files into your existing GitHub repo, replacing the old `about.html`, `contact.html`, `designs.html`, `index.html`, `resume.html`, and adding the new `css/`, `js/`, `sitemap.xml`, `robots.txt`.
2. Keep your existing `Documents/`, `Images/`, and `Sample_Acknowledgement/` folders exactly where they are — nothing needs to move.
3. Commit and push — Netlify will auto-deploy like before.
4. After it's live, submit `https://www.brownerdesigns.com/sitemap.xml` to Google Search Console for faster indexing.
