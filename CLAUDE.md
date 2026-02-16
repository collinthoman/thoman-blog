# Thoman Blog

Personal blog/portfolio built with Astro, Tailwind CSS, and DaisyUI. Designed to help with recruiter visibility.

## Tech Stack

- **Framework**: Astro 5.x with MDX support
- **Styling**: Tailwind CSS 4.x + DaisyUI 5.x
- **Themes**: 8 DaisyUI themes (light, dark, cupcake, dracula, night, winter, nord, sunset)
- **Comments**: Giscus (GitHub Discussions) - fully configured in `src/components/Comments.astro`
- **RSS**: Built-in at /rss.xml
- **Deployment**: Cloudflare Pages (adapter installed)

## GitHub Repository

- **Repo**: https://github.com/collinthoman/thoman-blog
- **Owner**: Collin Thoman (coolcolly)

## Key Paths

- `src/components/` — Astro components (sidebar, blog cards, comments, etc.)
- `src/layouts/` — `BaseLayout.astro` (sidebar drawer) and `BlogPost.astro`
- `src/pages/` — `index`, `404`, `[lang]/` routes (about, cv, blog)
- `src/content/blog/` — Markdown/MDX blog posts
- `src/i18n/` — i18n config, utils, and JSON translations (`en/`, `nl/`)
- `src/styles/global.css` — Tailwind + DaisyUI theme config
- `src/consts.ts` — Site title and description
- `public/cv.pdf` — Resume PDF download

## Navigation

Edit `src/components/SideBar.astro` to add/remove pages:

```js
const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'CV', href: '/cv' },
  { name: 'About', href: '/about' },
];
```

## Commands

```bash
npm run dev      # Start dev server (usually http://localhost:4321)
npm run build    # Build for production
npm run preview  # Preview production build
```

## Adding New Pages

1. Create file in `src/pages/` (e.g., `projects.astro`)
2. Use this template:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import { SITE_TITLE } from '../consts';
---

<BaseLayout title={`Page Title | ${SITE_TITLE}`} description="Description" sideBarActiveItem="PageName">
  <!-- Content here -->
</BaseLayout>
```
3. Add to NAV_ITEMS in `src/components/SideBar.astro`

## Adding Blog Posts

Create `.md` or `.mdx` files in `src/content/blog/` with frontmatter:

```md
---
title: "Post Title"
description: "Post description"
pubDate: "Jan 24 2025"
heroImage: "../assets/image.jpg"
tags: ["tag1", "tag2"]
lang: "en"
translationKey: "my-post"
---

Post content here...
```

- `tags`, `heroImage`, `lang`, `translationKey` are optional
- `lang` defaults to `"en"`; use `"nl"` for Dutch posts
- `translationKey` links English and Dutch versions of the same post

## Customization Points

1. **Site info**: Edit `src/consts.ts` for title/description
2. **Profile image**: Replace `src/assets/profile.png` (referenced in `src/components/SideBar.astro`)
3. **Social links**: Edit `src/components/SideBarFooter.astro`
4. **Themes**: Modify theme list in `src/styles/global.css`
5. **Comments**: Edit Giscus config in `src/components/Comments.astro`
6. **CV content**: Edit `src/pages/cv.astro`

## Deployment (Cloudflare Pages)

- **Live at**: https://thoman.dev
- **Auto-deploy**: Connected to GitHub repo `collinthoman/thoman-blog` — pushes to `main` trigger builds automatically
- **Build command**: `npm run build`
- **Build output**: `dist`

## SpecKit

This project uses SpecKit for feature specification and planning:

- **Constitution**: `.specify/memory/constitution.md` (v1.0.0) — project principles and constraints
- **Specs**: `specs/` — feature specifications, plans, tasks, and checklists
- **Templates**: `.specify/templates/` — SpecKit document templates
- **Commands**: `/speckit.specify`, `/speckit.plan`, `/speckit.tasks`, `/speckit.implement`, `/speckit.analyze`, `/speckit.constitution`

All feature work MUST align with the constitution principles (Content-First, Performance & Simplicity, Build Integrity, Consistent Structure & Theming).

## Workflow

- Run `npm run build` after making changes to verify the build succeeds
- Do not commit unless explicitly asked
- All feature work should follow the SpecKit workflow: specify → plan → tasks → implement → analyze

## TODO

- [ ] Create Projects page
