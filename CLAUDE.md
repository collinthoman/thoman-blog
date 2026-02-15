# Thoman Blog

Personal blog/portfolio built with Astro, Tailwind CSS, and DaisyUI. Designed to help with recruiter visibility.

## Tech Stack

- **Framework**: Astro 5.x with MDX support
- **Styling**: Tailwind CSS 4.x + DaisyUI 5.x
- **Themes**: 8 DaisyUI themes (light, dark, cupcake, dracula, night, winter, nord, sunset)
- **Comments**: Giscus (GitHub Discussions) - component ready, needs repo credentials
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
│   ├── Comments.astro      # Giscus comments (GitHub Discussions)
│   └── FormattedDate.astro # Date formatting
├── layouts/
│   ├── BaseLayout.astro    # Main layout with sidebar drawer
│   └── BlogPost.astro      # Individual blog post layout
├── pages/
│   ├── index.astro         # Home page (Dutch intro: "Ik ben Collin Thoman")
│   ├── about.astro         # About page
│   ├── cv.astro            # CV/Resume page (fully populated)
│   └── blog/               # Blog listing and posts
├── content/
│   └── blog/               # Markdown/MDX blog posts
├── styles/
│   └── global.css          # Tailwind + DaisyUI config
├── assets/
│   └── profile.png         # Profile image for sidebar
└── consts.ts               # Site title and description
public/
└── cv.pdf                  # Resume PDF (download button on CV page)
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
2. **Profile image**: Replace `src/assets/profile.png` (referenced in `src/components/SideBar.astro`)
3. **Social links**: Edit `src/components/SideBarFooter.astro`
4. **Themes**: Modify theme list in `src/styles/global.css`
5. **Comments**: Configure Giscus in `src/components/Comments.astro`
6. **CV content**: Edit `src/pages/cv.astro`

## Deployment (Cloudflare Pages)

- **Live at**: https://thoman.dev
- **Auto-deploy**: Connected to GitHub repo `collinthoman/thoman-blog` — pushes to `main` trigger builds automatically
- **Build command**: `npm run build`
- **Build output**: `dist`

## Pending Setup

- [x] Push code to GitHub
- [x] Add custom profile image to sidebar
- [x] Update social media links
- [x] Fill in CV with real information
- [x] Add cv.pdf to public/ folder
- [x] Deploy to Cloudflare Pages (live at https://thoman.dev)
- [x] Configure Giscus comments (component exists but has placeholder credentials in `src/components/Comments.astro`)
- [ ] Create Projects page
- [x] Remove unused legacy components (`Header.astro`, `HeaderLink.astro`, `ThemeToggle.astro`, `Footer.astro`)
