# Aisha Awaisu — Portfolio

A single-page portfolio for copywriter Aisha Awaisu, inspired by the Esclat
Framer template's editorial dark aesthetic but built from scratch.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** — design tokens in `app/globals.css` (`@theme` block)
- **Framer Motion** — reveals, split-text hero, accordions, magnetic buttons
- **Lenis** — smooth scrolling (disabled automatically for reduced-motion users)

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where things live

| Path | Purpose |
|---|---|
| `lib/data.ts` | **All site copy and links** — edit content here only (incl. per-page case-study/service detail) |
| `lib/motion.ts` | Shared animation variants and easing |
| `app/globals.css` | Color palette (rust accent), fonts, marquee keyframes, utilities |
| `app/page.tsx` | Homepage (all sections) |
| `app/work/[slug]/page.tsx` | Individual case-study pages (SSG) |
| `app/services/[slug]/page.tsx` | Individual service pages (SSG) |
| `components/sections/` | One component per page section + shared `CTABand` |
| `components/ui/` | Reusable primitives (Reveal, MagneticButton, SectionHeading, Marquee) |
| `components/util/HashScroll.tsx` | Scrolls to `#section` when arriving on home from a detail page |
| `components/providers/SmoothScroll.tsx` | Lenis instance + `useScrollTo()` hook |

## Deploy to Vercel

The app is a standard Next.js project — Vercel auto-detects everything. From this
folder:

```powershell
npx vercel login      # one-time: pick a method, confirm in the browser
npx vercel --prod     # builds in the cloud and returns the live URL
```

On the first `--prod` run it links the project — accept the defaults:
set up & deploy **Y**, scope **your account**, link to existing **N**, project
name **aisha-awaisu-portfolio** (or Enter), directory **./**, modify settings **N**.
Re-running `npx vercel --prod` later redeploys. (node_modules/.next are ignored
automatically — no need to clean them.)

## Routing

- `/` — the full scrolling homepage.
- `/work/<slug>` — a dedicated page per case study (linked from the Work cards).
- `/services/<slug>` — a dedicated page per service (linked from the Services rows).

Nav and footer links are pathname-aware: on the homepage they smooth-scroll to
the section; from a detail page they route back to `/#section`.

## Before going live — fill these in (`lib/data.ts`)

1. **Testimonials** — current names are placeholders from the content doc; swap
   in real clients as they come in.
2. **Legal pages** — footer Privacy/Terms/Cookie links currently point to `#`.

> The Calendly link (`/30min`), education (B.Sc. Software Engineering), location
> (Abuja), and the hero portrait (`public/aisha.png`) are all set.

## Hero portrait

The hero uses `public/aisha.png` via `next/image`. To swap it, replace that file
(or update `hero.portrait` in `lib/data.ts`) and keep a portrait aspect ratio.
