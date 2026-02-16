# Data Model: Personal Blog Website

**Branch**: `001-personal-blog-site` | **Date**: 2026-02-15

## Overview

This site uses a file-based data model with no database. All data is stored as files in the repository and processed at build time.

## Entity: Blog Post

**Source**: Markdown/MDX files in `src/content/blog/`
**Schema**: Defined in `src/content.config.ts` using Zod

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| title | string | Yes | — | Post title displayed in listings and detail view |
| description | string | Yes | — | Short summary for listings, meta description, RSS |
| pubDate | Date | Yes | — | Publication date, used for sorting (newest first) |
| updatedDate | Date | No | — | Last update date, shown if present |
| heroImage | Image | No | — | Hero/banner image, optimized at build time via sharp |
| tags | string[] | No | [] | Categorization tags, translatable via blog.json |
| lang | 'en' \| 'nl' | No | 'en' | Content language of this post |
| translationKey | string | No | — | Links translated versions of the same post |

**Validation Rules**:
- `title` and `description` must be non-empty strings
- `pubDate` must be a valid date
- `heroImage` must reference an existing image file in `src/assets/`
- `lang` must be one of the supported locales
- `translationKey` is used to pair English and Dutch versions

**State Transitions**: None — blog posts are static content with no lifecycle states.

## Entity: Translation Namespace

**Source**: JSON files in `src/i18n/{locale}/`
**Namespaces**: ui, home, about, cv, blog

| Namespace | Purpose | Key Structure |
|-----------|---------|---------------|
| ui | Navigation, buttons, common labels | Flat keys: `nav.home`, `nav.blog`, `theme.label` |
| home | Home page content | `title`, `intro`, section headings |
| about | About page content | `title`, `bio`, hobby cards, contact info |
| cv | CV structured data | Nested: `experience[]`, `education[]`, `skills[]`, `certifications[]` |
| blog | Blog-specific strings | `tags.*` (tag translations), section headings |

**Validation Rules**:
- Every key in `en/*.json` MUST have a corresponding key in `nl/*.json`
- CV namespace uses arrays of objects for structured data (jobs, education entries)

## Entity: Theme

**Source**: Configured in `src/styles/global.css` via DaisyUI plugin

| Theme | Type | Default |
|-------|------|---------|
| light | Light | Yes (default) |
| dark | Dark | Yes (prefers-dark) |
| cupcake | Light | No |
| dracula | Dark | No |
| night | Dark | No |
| winter | Light | No |
| nord | Light | No |
| sunset | Dark | No |

**Persistence**: Theme name stored in `localStorage` under key `theme`. Applied via `data-theme` attribute on `<html>`.

## Entity: Page

**Source**: Astro page files in `src/pages/[lang]/`

| Page | Route | Layout | Content Source |
|------|-------|--------|---------------|
| Home | `/[lang]/` | BaseLayout | i18n/home.json |
| Blog Listing | `/[lang]/blog` | BaseLayout | Content collection query |
| Blog Post | `/[lang]/blog/[slug]` | BlogPost | Markdown/MDX file |
| CV | `/[lang]/cv` | BaseLayout | i18n/cv.json |
| About | `/[lang]/about` | BaseLayout | i18n/about.json |

## Entity: Navigation Item

**Source**: Defined inline in `src/components/SideBar.astro`

| Field | Type | Description |
|-------|------|-------------|
| name | string | Translated display label from ui.json |
| href | string | Locale-prefixed URL path |

**Items**: Home, Blog, CV, About (order fixed)

## Relationships

```text
Page ──uses──> Translation Namespace (for content)
Page ──uses──> Theme (for styling)
Blog Post ──listed on──> Blog Listing Page
Blog Post ──paired via translationKey──> Blog Post (other language)
Navigation Item ──links to──> Page
```

## Static Assets

| Asset | Location | Purpose |
|-------|----------|---------|
| Profile photo | `src/assets/profile.png` | Sidebar avatar |
| Blog hero images | `src/assets/blog-hero-*.jpg` | Blog post banners |
| CV PDF | `public/cv.pdf` | Downloadable resume |
| Favicon | `public/favicon.svg` | Browser tab icon |
