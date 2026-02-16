# Research: Personal Blog Website

**Branch**: `001-personal-blog-site` | **Date**: 2026-02-15

## Overview

This document consolidates research findings for all technical decisions in the personal blog website. Since the project is already implemented, this captures the decisions that were made and their rationale.

## Decision 1: Static Site Generator

**Decision**: Astro 5.x

**Rationale**: Astro's islands architecture delivers zero JavaScript by default, with opt-in interactivity only where needed (theme picker, language switcher). Content collections provide type-safe Markdown/MDX handling. Built-in i18n routing eliminates the need for third-party routing libraries.

**Alternatives considered**:
- Next.js — Heavier runtime, SSR overhead unnecessary for a static blog
- Hugo — Fast builds but limited component model, no TypeScript-native support
- 11ty — Simpler but lacks built-in i18n routing and content collection type safety

## Decision 2: Styling Framework

**Decision**: Tailwind CSS 4.x + DaisyUI 5.x

**Rationale**: Tailwind provides utility-first CSS with no runtime overhead. DaisyUI adds semantic component classes (btn, card, drawer, menu) and a theming system with 30+ built-in themes. The combination enables 8 selectable themes with zero custom CSS for theme variants. DaisyUI's semantic tokens (bg-base-100, text-primary) ensure all themes work consistently.

**Alternatives considered**:
- Plain Tailwind — Would require building all component styles and a custom theme system
- CSS Modules — More boilerplate, no built-in theme switching
- Chakra UI / shadcn — React-specific, incompatible with Astro's multi-framework approach

## Decision 3: Internationalization Approach

**Decision**: URL-based locale routing (`/en/`, `/nl/`) with JSON translation files per namespace

**Rationale**: URL-based routing is the most SEO-friendly i18n approach — each language gets its own URLs, enabling proper hreflang tags and language-specific sitemaps. Astro's built-in `i18n` config handles routing automatically. JSON files organized by namespace (ui, home, about, cv, blog) keep translations manageable. Custom utility functions (`t()`, `tArray()`, `tObject()`) provide type-safe access to nested translation data.

**Alternatives considered**:
- Cookie/session-based language — Poor for SEO, search engines can't index both languages
- Subdomain-based (`en.thoman.dev`) — More DNS complexity for no benefit at this scale
- i18next library — Additional dependency; custom utils sufficient for 2 languages

## Decision 4: Theme Persistence

**Decision**: localStorage with inline script for flash prevention

**Rationale**: localStorage persists theme choice across browser sessions. An inline script in `BaseLayout.astro` reads the saved theme and applies it before the page renders, preventing a flash of the default theme. No server-side state needed.

**Alternatives considered**:
- Cookie-based — Would require server-side reading (adds complexity for a static site)
- CSS prefers-color-scheme only — Only supports light/dark, not 8 themes
- No persistence — Poor UX, theme resets on every page load

## Decision 5: Blog Content Management

**Decision**: Astro Content Collections with Markdown/MDX files and Zod schema validation

**Rationale**: Content Collections provide build-time type checking of frontmatter, automatic slug generation, and optimized image handling via the `image()` schema helper. MDX support allows embedding interactive components in posts when needed. Zod validation catches frontmatter errors at build time rather than runtime.

**Alternatives considered**:
- Headless CMS (Contentful, Sanity) — Over-engineered for a single-author blog, adds external dependency
- Plain Markdown without collections — No type safety, manual image handling
- Database-backed CMS — Requires server runtime, violates static-first constraint

## Decision 6: Deployment Platform

**Decision**: Cloudflare Pages with `@astrojs/cloudflare` adapter

**Rationale**: Cloudflare Pages provides free static hosting with global CDN, automatic HTTPS, and preview deployments from GitHub. The Cloudflare adapter enables Functions for the root language redirect. Auto-deploy from `main` branch eliminates manual deployment steps.

**Alternatives considered**:
- Vercel — Comparable features but Cloudflare's edge network is faster in Europe (relevant for Dutch audience)
- Netlify — Similar to Vercel; Cloudflare chosen for existing domain DNS management
- GitHub Pages — No serverless functions support for language detection redirect

## Decision 7: Comment System

**Decision**: Giscus (GitHub Discussions)

**Rationale**: Giscus leverages GitHub's existing infrastructure — no separate database or authentication needed. Comments are stored in GitHub Discussions, providing moderation tools and email notifications. Theme-aware integration syncs with DaisyUI theme selection. Language-aware via Giscus locale parameter.

**Alternatives considered**:
- Disqus — Privacy concerns, ads on free tier, heavy JavaScript
- Utterances — Similar to Giscus but uses Issues instead of Discussions (less organized)
- No comments — Viable but reduces engagement; Giscus cost is near-zero

## Decision 8: Blog Post i18n Strategy

**Decision**: Separate Markdown files per language with `lang` and `translationKey` frontmatter fields, English fallback for untranslated posts

**Rationale**: Each blog post can exist in one or both languages. The `translationKey` field links English and Dutch versions of the same post. When viewing in Dutch, if no Dutch version exists, the English version is shown with a fallback indicator. This allows gradual translation without blocking content publishing.

**Alternatives considered**:
- Single file with both languages — Unwieldy for long posts, hard to diff
- Mandatory translation — Would block publishing until both versions exist
- Machine translation at build time — Quality concerns for professional site

## Unresolved Items

None — all technical decisions have been made and implemented.
