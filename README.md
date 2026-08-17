# PrinceFirms Web

The public-facing website for PrinceFirms — a hyperlocal commerce platform where
every store feed, listing and delivery is ranked by distance from the customer.

This repo is the **visitor site** today. The admin portal will be added here once
the Go backend exposes its admin APIs.

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router, React 19) |
| Styling | Tailwind CSS v4 (CSS-first config in `src/app/globals.css`) |
| Language | TypeScript, strict mode |
| Lint | ESLint 9 flat config + `eslint-config-next` |

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

## Scripts

- `npm run dev` — dev server
- `npm run build` — static export into `out/`
- `npm run preview` — build, then serve `out/` through the Workers runtime locally
- `npm run deploy` — build, then publish to Cloudflare Workers
- `npm run lint` — ESLint

## Deployment

The site is a **static export** (`output: "export"` in `next.config.ts`). Every
route is prerendered at build time, so there is no Node server to run — `npm run
build` produces a plain `out/` directory of HTML, CSS, JS and fonts.

It is hosted on **Cloudflare Workers** as an assets-only Worker (no `main` script
in `wrangler.jsonc`), on the `princefirms.com` domain that already sits in the
Cloudflare account.

Because the export has no server runtime, these Next.js features are unavailable
until the site moves to a server target: Server Actions, Route Handlers that read
the request, `cookies()`, middleware/proxy, ISR, redirects/rewrites/headers in
`next.config.ts`, and `next/image` with the default loader. Client-side calls to
the Go backend are unaffected and work fine.

Metadata routes (`robots.ts`, `sitemap.ts`) carry `export const dynamic =
"force-static"`, which static export requires.

## Layout

```
src/
  app/
    layout.tsx     Root layout: fonts, metadata, viewport
    page.tsx       Landing page
    globals.css    Tailwind import + design tokens
    icon.svg       Favicon (Next.js app-icon convention)
    robots.ts      Generated /robots.txt
    sitemap.ts     Generated /sitemap.xml
  components/      Presentational components (server components by default)
  lib/site.ts      Site name, tagline, description, canonical URL, nav
```

Anything that appears in both the UI and in metadata lives in `src/lib/site.ts` —
edit it there rather than in individual components.

## Configuration

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://princefirms.com` | Canonical origin used for `metadataBase`, Open Graph URLs, `robots.txt` and the sitemap. Set this on preview deployments. |

## Conventions

Next.js 16 differs from older App Router releases in places. Before writing code,
read the relevant guide in `node_modules/next/dist/docs/` rather than relying on
memory — see `AGENTS.md`.
