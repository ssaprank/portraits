# Portraits — Photography Portfolio

A single static page showcasing portrait photography: a masonry gallery with a lightbox. Built with Vite and plain TypeScript/CSS — no framework. The gallery markup is generated into `index.html` at build time, so the page is fully readable without JavaScript.

**Live URL:** https://amelin-photography.vercel.app/

---

## Stack

| Layer | Choice |
|---|---|
| Build tool | Vite 4 (+ a small inline plugin in `vite.config.ts`) |
| Language | TypeScript, plain CSS |
| Lightbox | PhotoSwipe v5 (core lazy-loaded on first open) |
| Font | Italianno, self-hosted via `@fontsource/italianno` (latin subset) |
| Package manager | Yarn 1.22.22 |
| Node version | 22.16.0 (pinned in `.nvmrc`) |

---

## How the page is built

1. `src/photos.ts` holds the photo list (Cloudinary file, original height, alt text).
2. `src/render.ts` turns it into gallery HTML and JSON-LD structured data.
3. The `static-gallery` plugin in `vite.config.ts` replaces the `<!--gallery-->` and `<!--jsonld-->` placeholders in `index.html` (in dev and build).
4. `src/main.ts` is the only client JS: it fades lazy images in and wires up PhotoSwipe on the `#gallery` links.

`render.ts` and `photos.ts` run in Node at build time and are not part of the client bundle. Editing them restarts the dev server automatically.

---

## Data Source

All photos are served from **Cloudinary CDN** (account `dlhhw8bit`), from the `portraits-website-large` folder. Originals are 2048px wide.

Resizing and format selection happen through Cloudinary URL transformations — no SDK:

```
https://res.cloudinary.com/dlhhw8bit/image/upload/f_auto,q_auto,w_{W}/portraits-website-large/{file}.jpg
```

- Thumbnails: `srcset` with widths 400/600/800/1200/1600, `sizes` matched to the column layout.
- Lightbox / link target: `f_auto,q_auto` without width (full 2048px).
- `f_auto` serves AVIF/WebP; `q_auto` picks compression.

The old `portraits-website-small` and `portraits-website-medium` folders are no longer used.

**There is no CMS, database, or API — all data is hardcoded.**

---

## Project Structure

```
index.html            # Full page: head/meta, header + intro, placeholders for gallery and JSON-LD
vite.config.ts        # static-gallery plugin (injects generated HTML)
vercel.json           # Immutable caching for hashed /assets/*
src/
  photos.ts           # Photo data: { file, height, alt }
  render.ts           # Build-time: image URLs, gallery HTML, JSON-LD
  main.ts             # Client: fade-in + PhotoSwipe config
  style.css           # All styles (header, masonry columns, overlay)
public/
  favicon.svg
  robots.txt
  sitemap.xml
```

---

## Layout

Gallery is 90vw wide, masonry via CSS `column-count`, 20px gaps:

| Viewport | Columns |
|---|---|
| < 600px | 1 |
| ≥ 600px | 2 |
| ≥ 1200px | 3 |
| ≥ 1536px | 4 |

If you change these, update `THUMBNAIL_SIZES` in `src/render.ts` to match.

---

## Key Behaviors

- **Loading** — first image has `fetchpriority="high"`, first two are eager, the rest are `loading="lazy"`. Every `<img>` has `width`/`height`, so there is no layout shift.
- **Fade-in** — lazy images fade in over 0.7s once loaded. Only applies when JS runs (`html.js` class set by an inline script), so images stay visible without JS.
- **Lightbox** — each tile is a link to the full-size image; PhotoSwipe intercepts the click. No visible buttons/arrows; click or tap outside the photo (or Esc) closes it; clicking the photo zooms; wheel zooms (max 5×); 1000ms fade.
- **No routing** — single page.
- **No environment variables** — Cloudinary URLs are hardcoded.

---

## Commands

```bash
yarn dev       # Start dev server
yarn build     # tsc type-check + Vite production build → dist/
yarn lint      # ESLint
yarn preview   # Serve the dist/ build locally
```

---

## Deployment

Hosted on **Vercel**, deployed automatically via GitHub Actions on every push to `master`.

Workflow (`.github/workflows/build-deploy.yml`):
1. Setup Node 22.16.x
2. Install Vercel CLI
3. `vercel pull --yes` — fetch Vercel project config
4. `vercel build --prod`
5. `vercel deploy --prebuilt --prod`

Required GitHub secrets: `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`, `VERCEL_TOKEN`.

`vercel.json` only sets cache headers; the rest of the project config lives in the Vercel dashboard.

---

## SEO / Meta

- `index.html`: title, description, canonical, Open Graph (1200×630 `og:image` via Cloudinary `c_fill,g_auto`), Twitter card.
- JSON-LD (generated): `Person` (Kraków, Instagram `sameAs`) and an `ImageGallery` of `ImageObject`s with creator/credit/copyright.
- Every photo has its own descriptive `alt` text in `src/photos.ts` (also used as the ImageObject description).
- `public/robots.txt` and `public/sitemap.xml` — update `<lastmod>` in the sitemap when content changes meaningfully.

---

## Adding Photos

1. Upload the 2048px-wide photo to the Cloudinary `portraits-website-large` folder.
2. Add an entry to `src/photos.ts` with its public ID (`file`), original `height`, and a short descriptive `alt`.
3. Rebuild — gallery markup, srcset and structured data are generated automatically.
