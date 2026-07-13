# Հովո և Քրիստինա — Հարսանիքի հրավեր

Armenian-only wedding invitation website.

## Quick start

Open `index.html` in a browser, or run a local server:

```bash
npx serve .
```

Then visit http://localhost:3000

## Set wedding date

Edit `js/main.js` and change `WEDDING_DATE`:

```js
const WEDDING_DATE = new Date(2026, 8, 29, 0, 0, 0); // year, month (0-11), day, hour, minute
```

## Sections

- Hero with names and animated intro
- Countdown to wedding day
- Invitation details
- Schedule at «Հրաշք Այգի» ռեստորանային համալիր
- Venue map
- Contact phone numbers

## Deploy

This is a **static site** — no build step. Upload the folder as-is.

### GitHub Pages (recommended)

1. Push to GitHub (already done)
2. Repo → **Settings** → **Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. After the next push, the site will be at `https://tatevavalyan050.github.io/wedding-invitation-q-h/`

### Netlify

1. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
2. Connect the repo
3. Build command: **leave empty**
4. Publish directory: **`.`** (root)
5. Deploy

### Vercel

1. [vercel.com](https://vercel.com) → **Add New Project** → import the repo
2. Framework Preset: **Other**
3. Build Command: **leave empty**
4. Output Directory: **`.`**
5. Deploy

If deploy fails with `npm run build` error, clear the build command — this project has no build script.

# wedding-invitation-q-h
