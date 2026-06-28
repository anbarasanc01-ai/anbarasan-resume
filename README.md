# Anbarasan C — Interactive Resume Site

Dynamic resume site with case studies, recruiter mode, light/dark theme, and deploy configs.

## Features

- **Case studies** — Rails 2→8, Sidekiq consolidation, AI-operable platform (with architecture diagrams)
- **Recruiter mode** — one-click clean linear layout
- **Light / dark theme** — persists to localStorage, respects system preference
- **Reduced motion** — honors `prefers-reduced-motion`
- **GitHub + LinkedIn** — prominent in hero and contact
- **OG image** — `/og-image.svg` for LinkedIn/Twitter previews
- **PDF download** — `public/Anbarasan_Resume_FInal.pdf`

## Local dev

```bash
cd site
npm install
npm run dev
```

## Deploy

### Vercel (recommended)

```bash
cd site
npx vercel
```

Then set custom domain (e.g. `anbarasan.dev`) in Vercel dashboard.

Update `siteUrl` in `src/data/profile.ts` and `og:image` URLs in `index.html` to match your live domain.

### Netlify

Connect repo, set build command `npm run build`, publish directory `dist`, base directory `site`.

### GitHub Pages

Push `site/` as its own repo (or set root to `site`). Workflow included at `.github/workflows/deploy.yml`.

## Customize

| File | What to edit |
|------|----------------|
| `src/data/profile.ts` | All content, GitHub URL, site URL |
| `public/Anbarasan_Resume_FInal.pdf` | Replace when resume updates |
| `public/og-image.svg` | Social preview image |
| `index.html` | Update `og:url` and `og:image` after deploy |

## Before going live

1. Confirm GitHub username in `profile.ts` (`github.com/anbarasanc`)
2. Replace `https://anbarasan.dev` with your actual domain in `index.html` and `profile.ts`
3. Run `npm run build` and test recruiter mode + case studies
