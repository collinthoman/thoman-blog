# Implementation Plan: Personal Blog Website

**Branch**: `001-personal-blog-site` | **Date**: 2026-02-15 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-personal-blog-site/spec.md`

## Summary

Build a modern, professional personal blog/portfolio website targeting recruiters and employers. The site features four main pages (Home, Blog, CV, About), bilingual support (English/Dutch) with URL-based locale routing, and multiple color themes. Content is authored in Markdown/MDX and the site is statically generated for deployment on Cloudflare Pages.

**Current State**: The existing codebase already implements the majority of the spec requirements. This plan documents the existing architecture and identifies any remaining gaps.

## Technical Context

**Language/Version**: TypeScript/JavaScript via Astro 5.x (Node.js runtime for build)
**Primary Dependencies**: Astro 5.17, Tailwind CSS 4.1, DaisyUI 5.5, @astrojs/mdx, @astrojs/rss, @astrojs/sitemap, @astrojs/cloudflare, sharp
**Storage**: File-based (Markdown/MDX content collections, JSON translation files, static PDF)
**Testing**: Manual browser testing (no automated test framework configured)
**Target Platform**: Static site on Cloudflare Pages CDN (with Cloudflare Functions for root redirect)
**Project Type**: Single static website
**Performance Goals**: < 3s page load, minimal JavaScript, static-first delivery via CDN
**Constraints**: Static output only (no server-side runtime beyond Cloudflare Functions for language redirect), zero hosting cost beyond Cloudflare free tier
**Scale/Scope**: 4 pages, 2 languages, 8 themes, single-author blog

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

> Constitution v1.0.0 (ratified 2026-02-15). All gates validated against ratified principles.

| Gate | Rule | Status |
|------|------|--------|
| Content-First | Every feature prioritizes content readability and accessibility | PASS — Static HTML, semantic markup, typography plugin |
| Performance & Simplicity | Static-first, minimal JS, no unnecessary dependencies | PASS — Astro islands, only essential deps |
| Build Integrity | `npm run build` must succeed | PASS — Verified as part of workflow |
| Consistent Structure | All pages use BaseLayout, blog uses BlogPost layout, NAV_ITEMS for nav | PASS — All pages follow pattern |
| DaisyUI Theming | Semantic classes only, no hardcoded colors | PASS — All 8 themes use DaisyUI tokens |

No violations. No complexity tracking entries needed.

## Project Structure

### Documentation (this feature)

```text
specs/001-personal-blog-site/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (N/A — no API)
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
src/
├── assets/              # Images (profile photo, blog hero images)
├── components/          # Astro components
│   ├── BaseHead.astro        # SEO meta, hreflang, Open Graph
│   ├── Comments.astro        # Giscus GitHub Discussions integration
│   ├── FormattedDate.astro   # Locale-aware date formatting
│   ├── HorizontalCard.astro  # Blog post card component
│   ├── LanguageSwitcher.astro # EN/NL language toggle
│   ├── SideBar.astro         # Main sidebar with nav, theme picker, profile
│   ├── SideBarFooter.astro   # Social links, copyright
│   └── SideBarMenu.astro     # Navigation menu items
├── content/
│   └── blog/            # Markdown/MDX blog posts
├── i18n/
│   ├── config.ts        # Supported languages, default locale
│   ├── utils.ts         # Translation functions (t, tArray, tObject, etc.)
│   ├── en/              # English translations (ui, home, about, cv, blog)
│   └── nl/              # Dutch translations (ui, home, about, cv, blog)
├── layouts/
│   ├── BaseLayout.astro # Root layout with drawer sidebar
│   └── BlogPost.astro   # Blog post layout with comments
├── pages/
│   ├── index.astro      # Root redirect (language detection)
│   └── [lang]/          # Locale-prefixed routes
│       ├── index.astro       # Home page
│       ├── about.astro       # About page
│       ├── cv.astro          # CV/resume page
│       ├── rss.xml.js        # RSS feed per language
│       └── blog/
│           ├── index.astro   # Blog listing
│           └── [...slug].astro # Individual blog posts
├── styles/
│   └── global.css       # Tailwind + DaisyUI config, custom fonts
├── consts.ts            # Site title and description
└── content.config.ts    # Content collection schema (Zod)

public/
├── cv.pdf               # Downloadable resume PDF
└── favicon.svg          # Site favicon

functions/
└── index.js             # Cloudflare Function for Accept-Language redirect
```

**Structure Decision**: Single static website using Astro's file-based routing with `[lang]` dynamic segments for i18n. All content is file-based (Markdown, JSON, static assets). No backend API or database.

## Complexity Tracking

> No violations — no entries needed.
