# Thoman Blog

Personal blog built with Astro, Tailwind CSS, and DaisyUI.

## Tech Stack

- **Framework**: Astro 5.x with MDX support
- **Styling**: Tailwind CSS 4.x + DaisyUI 5.x
- **Themes**: 8 DaisyUI themes (light, dark, cupcake, dracula, night, winter, nord, sunset)
- **Comments**: Giscus (GitHub Discussions) - needs configuration
- **RSS**: Built-in at /rss.xml

## Project Structure

```
src/
├── components/
│   ├── BaseHead.astro      # Meta tags, fonts, SEO
│   ├── SideBar.astro       # Main navigation sidebar
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
│   └── blog/               # Blog listing and posts
├── content/
│   └── blog/               # Markdown/MDX blog posts
├── styles/
│   └── global.css          # Tailwind + DaisyUI config
└── consts.ts               # Site title and description
```

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Customization Points

1. **Site info**: Edit `src/consts.ts` for title/description
2. **Profile image**: Replace in `src/components/SideBar.astro`
3. **Social links**: Edit `src/components/SideBarFooter.astro`
4. **Themes**: Modify theme list in `src/styles/global.css`
5. **Comments**: Configure Giscus in `src/components/Comments.astro`

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

## Pending Setup

- [ ] Configure Giscus comments (requires GitHub repo with Discussions enabled)
- [ ] Add custom profile image
- [ ] Update social media links
- [ ] Deploy (Vercel, Netlify, or Cloudflare Pages recommended)
