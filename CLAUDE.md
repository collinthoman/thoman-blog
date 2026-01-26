# Thoman Blog

Personal blog/portfolio built with Astro, Tailwind CSS, and DaisyUI. Designed to help with recruiter visibility.

## Tech Stack

- **Framework**: Astro 5.x with MDX support
- **Styling**: Tailwind CSS 4.x + DaisyUI 5.x
- **Themes**: 8 DaisyUI themes (light, dark, cupcake, dracula, night, winter, nord, sunset)
- **Comments**: Giscus (GitHub Discussions) - needs configuration
- **RSS**: Built-in at /rss.xml
- **Deployment**: Cloudflare Pages (adapter installed)

## GitHub Repository

- **Repo**: https://github.com/collinthoman/thoman-blog
- **Owner**: Collin Thoman (coolcolly)

## Project Structure

```
src/
├── components/
│   ├── BaseHead.astro      # Meta tags, fonts, SEO
│   ├── SideBar.astro       # Main navigation sidebar (edit NAV_ITEMS to add pages)
│   ├── SideBarMenu.astro   # Navigation menu items
│   ├── SideBarFooter.astro # Social links, copyright
│   ├── HorizontalCard.astro # Blog post cards
│   ├── Comments.astro      # Giscus comments (needs setup)
│   └── FormattedDate.astro # Date formatting
├── layouts/
│   ├── BaseLayout.astro    # Main layout with sidebar drawer
│   └── BlogPost.astro      # Individual blog post layout
├── pages/
│   ├── index.astro         # Home page
│   ├── about.astro         # About page
│   ├── cv.astro            # CV/Resume page
│   └── blog/               # Blog listing and posts
├── content/
│   └── blog/               # Markdown/MDX blog posts
├── styles/
│   └── global.css          # Tailwind + DaisyUI config
└── consts.ts               # Site title and description
public/
└── cv.pdf                  # (Add your PDF resume here for download button)
```

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
---

Post content here...
```

## Customization Points

1. **Site info**: Edit `src/consts.ts` for title/description
2. **Profile image**: Replace in `src/components/SideBar.astro`
3. **Social links**: Edit `src/components/SideBarFooter.astro`
4. **Themes**: Modify theme list in `src/styles/global.css`
5. **Comments**: Configure Giscus in `src/components/Comments.astro`
6. **CV content**: Edit `src/pages/cv.astro`

## Deployment (Cloudflare Pages)

1. Push to GitHub: `git push origin main`
2. Go to Cloudflare Dashboard → Workers & Pages → Create
3. Connect to GitHub repo `collinthoman/thoman-blog`
4. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
5. After deploy, update `site` in `astro.config.mjs` to your URL

## Pending Setup

- [ ] Push code to GitHub (credentials issue with pup-kin account resolved by clearing Windows Credential Manager)
- [ ] Deploy to Cloudflare Pages
- [ ] Configure Giscus comments (requires GitHub repo with Discussions enabled)
- [ ] Add custom profile image to sidebar
- [ ] Update social media links
- [ ] Fill in CV with real information
- [ ] Add cv.pdf to public/ folder
- [ ] Create Projects page
