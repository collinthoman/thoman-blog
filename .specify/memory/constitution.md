<!--
  Sync Impact Report
  ==================
  Version change: 0.0.0 (unratified template) → 1.0.0
  Modified principles: N/A (initial ratification)
  Added sections:
    - Core Principles: 4 principles (Content-First, Performance & Simplicity,
      Build Integrity, Consistent Structure & Theming)
    - Technology Constraints
    - Development Workflow
    - Governance (with amendment procedure and versioning policy)
  Removed sections:
    - Template placeholder Principle 5 (consolidated into 4 principles)
  Templates requiring updates:
    - .specify/templates/plan-template.md — ✅ no changes needed
      (Constitution Check section is generic; populated at plan time)
    - .specify/templates/spec-template.md — ✅ no changes needed
      (structure is generic and compatible)
    - .specify/templates/tasks-template.md — ✅ no changes needed
      (task phases and structure are generic)
  Follow-up TODOs: None
-->

# Thoman Blog Constitution

## Core Principles

### I. Content-First Design

Every feature and design decision MUST prioritize content
readability and accessibility. Blog posts, CV content, and
portfolio items are the primary deliverables. UI chrome,
animations, and interactive elements MUST NOT detract from
content consumption. Pages MUST render meaningful content
without JavaScript where possible (static HTML output).

**Rationale**: This is a recruiter-facing portfolio. If the
content is hard to read or buried under UI complexity, the
site fails its core purpose.

### II. Performance & Simplicity

The site MUST remain a static-first build with minimal client
JavaScript. New dependencies MUST be justified against the
existing stack. Features MUST NOT introduce server-side runtime
requirements beyond what the hosting platform provides. Build
output MUST stay deployable via `npm run build` with no
additional infrastructure.

**Rationale**: A personal blog has no budget for complex
infrastructure. Static output ensures fast loads, zero hosting
cost surprises, and reliable deployments.

### III. Build Integrity

Every change MUST pass `npm run build` before being considered
complete. Broken builds MUST NOT be committed to `main`. Type
errors, missing imports, and invalid frontmatter MUST be
resolved before marking work as done.

**Rationale**: The site auto-deploys from `main`. A broken
build means the live site goes down or fails to update.

### IV. Consistent Structure & Theming

All pages MUST use the designated root layout. Blog posts MUST
use the blog post layout. Navigation changes MUST go through
the centralized navigation configuration. Theme support MUST
be preserved — new components MUST use semantic color classes
(e.g., `bg-base-100`, `text-primary`) rather than hardcoded
color values.

**Rationale**: Consistent structure prevents layout drift and
ensures all themes render correctly across every page.

## Technology Constraints

- **Framework**: Astro 5.x with MDX support — do not migrate
  without explicit decision
- **Styling**: Tailwind CSS 4.x + DaisyUI 5.x — use component
  classes before writing custom CSS
- **Deployment**: Cloudflare Pages — build output to `dist/`
- **Content**: Markdown/MDX in content collections with required
  frontmatter (title, description, pubDate)
- **Images**: Processed via sharp — use optimized image
  components for all visual assets
- **i18n**: URL-based locale routing (English and Dutch) with
  JSON translation files per namespace

## Development Workflow

- Run `npm run build` after changes to verify build succeeds
- Do not commit unless explicitly asked
- Blog post frontmatter supports `tags` (string array) in
  addition to title, description, pubDate, heroImage
- New pages MUST follow the established layout template pattern
- Prefer editing existing files over creating new ones
- Keep solutions minimal — no over-engineering for a personal
  site

## Governance

This constitution defines non-negotiable standards for the
Thoman Blog project. All feature specifications and
implementation plans MUST be validated against these principles
via the Constitution Check section in plan documents.

**Amendment procedure**: Changes to this constitution require:
1. Clear rationale for the change
2. Impact assessment on existing content and components
3. Version bump following semantic versioning (see below)
4. Update to the Sync Impact Report at the top of this file

**Versioning policy**:
- MAJOR: Principle removal, redefinition, or framework migration
- MINOR: New principle added or existing principle materially
  expanded
- PATCH: Wording clarifications, typo fixes, non-semantic
  refinements

**Compliance**: The Constitution Check section in plan documents
MUST verify alignment with these principles before
implementation begins. Use CLAUDE.md for runtime development
guidance.

**Version**: 1.0.0 | **Ratified**: 2026-02-15 | **Last Amended**: 2026-02-15
