# Quickstart: Personal Blog Website

**Branch**: `001-personal-blog-site` | **Date**: 2026-02-15

## Prerequisites

- Node.js 18+ installed
- npm installed
- Git installed

## Setup

```bash
git clone https://github.com/collinthoman/thoman-blog.git
cd thoman-blog
npm install
```

## Development

```bash
npm run dev
```

Opens at `http://localhost:4321`. The root URL (`/`) redirects to `/en/` by default in development.

## Build

```bash
npm run build
```

Outputs static files to `dist/`. This MUST succeed before any changes are considered complete.

## Preview Production Build

```bash
npm run preview
```

## Common Tasks

### Add a Blog Post

1. Create a `.md` or `.mdx` file in `src/content/blog/`:

```markdown
---
title: "Post Title"
description: "Short description"
pubDate: "Feb 15 2026"
heroImage: "../assets/your-image.jpg"
tags: ["Tag1", "Tag2"]
lang: "en"
---

Post content here...
```

2. For a Dutch version, create another file with the same `translationKey`:

```markdown
---
title: "Titel van het artikel"
description: "Korte beschrijving"
pubDate: "Feb 15 2026"
heroImage: "../assets/your-image.jpg"
tags: ["Tag1", "Tag2"]
lang: "nl"
translationKey: "same-key-as-english-post"
---
```

3. Run `npm run build` to verify.

### Add a New Page

1. Create file in `src/pages/[lang]/` (e.g., `projects.astro`)
2. Use `BaseLayout` as the root layout
3. Add translations to `src/i18n/en/` and `src/i18n/nl/` as needed
4. Add entry to `NAV_ITEMS` in `src/components/SideBar.astro`

### Add/Modify Translations

1. Edit the relevant JSON file in `src/i18n/en/` and `src/i18n/nl/`
2. Access translations in components via `t(lang, 'namespace', 'key')`
3. Ensure both language files have matching keys

### Update CV Content

1. Edit `src/i18n/en/cv.json` and `src/i18n/nl/cv.json`
2. Update `public/cv.pdf` with the new PDF version
3. Run `npm run build` to verify

### Change Themes

Edit `src/styles/global.css` to modify the DaisyUI theme list:

```css
@plugin "daisyui" {
  themes: light --default, dark --prefersdark, cupcake, dracula, night, winter, nord, sunset;
}
```

## Deployment

The site auto-deploys to https://thoman.dev when changes are pushed to the `main` branch on GitHub. Cloudflare Pages handles the build and CDN distribution.

## Key Files Reference

| Purpose | File |
|---------|------|
| Site config | `src/consts.ts` |
| Astro config | `astro.config.mjs` |
| Content schema | `src/content.config.ts` |
| i18n config | `src/i18n/config.ts` |
| Translation utils | `src/i18n/utils.ts` |
| Root layout | `src/layouts/BaseLayout.astro` |
| Blog layout | `src/layouts/BlogPost.astro` |
| Global styles | `src/styles/global.css` |
| Navigation | `src/components/SideBar.astro` |
