# Tasks: Personal Blog Website

**Input**: Design documents from `/specs/001-personal-blog-site/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: Not requested in the feature specification. No test tasks included.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/` at repository root
- Astro file-based routing with `src/pages/[lang]/` for i18n
- Translation files in `src/i18n/{en,nl}/`
- Blog content in `src/content/blog/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization, Astro scaffolding, and core dependencies

- [x] T001 Initialize Astro project with TypeScript and install dependencies (astro, tailwindcss, daisyui, @astrojs/mdx, @astrojs/rss, @astrojs/sitemap, @astrojs/cloudflare, @tailwindcss/typography, @tailwindcss/vite, sharp) in package.json
- [x] T002 Configure Astro with static output, Cloudflare adapter, MDX integration, sitemap with i18n locales, and Tailwind CSS Vite plugin in astro.config.mjs
- [x] T003 [P] Configure Tailwind CSS 4.x with DaisyUI plugin and 8 themes (light, dark, cupcake, dracula, night, winter, nord, sunset) in src/styles/global.css
- [x] T004 [P] Define site title and description constants in src/consts.ts
- [x] T005 [P] Add custom Atkinson font with @font-face declarations in src/styles/global.css

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core layout, navigation, SEO, and i18n infrastructure that ALL user stories depend on

**CRITICAL**: No user story work can begin until this phase is complete

- [x] T006 Create BaseHead component with meta tags, Open Graph, Twitter Cards, hreflang alternates, favicon, font preloads, and RSS link in src/components/BaseHead.astro
- [x] T007 Create BaseLayout component with DaisyUI drawer, mobile navbar with hamburger toggle, sidebar slot, main content area, and inline theme-restore script in src/layouts/BaseLayout.astro
- [x] T008 Create SideBar component with profile avatar (src/assets/profile.png), navigation menu, theme selector dropdown, and language switcher slot in src/components/SideBar.astro
- [x] T009 [P] Create SideBarMenu component rendering NAV_ITEMS (Home, Blog, CV, About) with active page highlighting in src/components/SideBarMenu.astro
- [x] T010 [P] Create SideBarFooter component with GitHub, LinkedIn, and RSS social links and copyright notice in src/components/SideBarFooter.astro
- [x] T011 Create i18n configuration defining supported languages (en, nl) and default locale (en) in src/i18n/config.ts
- [x] T012 Create i18n utility functions (t, tArray, tRawArray, tObject, getLangFromUrl, getLocalizedPath) for accessing JSON translation data in src/i18n/utils.ts
- [x] T013 [P] Create English UI translation file with navigation labels, button text, theme labels, and common strings in src/i18n/en/ui.json
- [x] T014 [P] Create Dutch UI translation file with navigation labels, button text, theme labels, and common strings in src/i18n/nl/ui.json
- [x] T015 Configure Astro i18n routing with prefixDefaultLocale: true for en and nl locales in astro.config.mjs
- [x] T016 Create root index page with client-side language redirect based on navigator.language in src/pages/index.astro
- [x] T017 Create Cloudflare Function for server-side Accept-Language header detection and redirect in functions/index.js
- [x] T018 Create blog post content collection schema with Zod validation (title, description, pubDate, updatedDate, heroImage, tags, lang, translationKey) in src/content.config.ts
- [x] T019 [P] Create FormattedDate component with locale-aware date formatting (en-US, nl-NL) in src/components/FormattedDate.astro

**Checkpoint**: Foundation ready — layout, navigation, i18n infrastructure, and content schema all in place. User story implementation can now begin.

---

## Phase 3: User Story 1 — Recruiter Views Professional Profile (Priority: P1) MVP

**Goal**: Deliver the home page with professional introduction and the CV page with structured experience, education, skills, and PDF download.

**Independent Test**: Visit `/en/`, verify professional landing page with name and intro. Navigate to `/en/cv`, verify all CV sections render. Click download button, verify PDF downloads.

### Implementation for User Story 1

- [x] T020 [P] [US1] Create English home page translation file with title, introduction text, and section content in src/i18n/en/home.json
- [x] T021 [P] [US1] Create Dutch home page translation file with title, introduction text, and section content in src/i18n/nl/home.json
- [x] T022 [US1] Create Home page displaying site owner name, professional introduction, profile image, and recent blog posts using BaseLayout in src/pages/[lang]/index.astro
- [x] T023 [P] [US1] Create English CV translation file with structured data for experience, education, skills, certifications, and community sections in src/i18n/en/cv.json
- [x] T024 [P] [US1] Create Dutch CV translation file with structured data for experience, education, skills, certifications, and community sections in src/i18n/nl/cv.json
- [x] T025 [US1] Create CV page rendering all sections (At a Glance stats, About, Experience, Skills, Education, Certifications, Community) with PDF download button using BaseLayout in src/pages/[lang]/cv.astro
- [x] T026 [US1] Add CV PDF file for download in public/cv.pdf
- [x] T027 [US1] Add profile photo asset in src/assets/profile.png
- [x] T028 [US1] Run `npm run build` to verify Home and CV pages build successfully

**Checkpoint**: User Story 1 complete — recruiters can view professional profile and download CV.

---

## Phase 4: User Story 2 — Visitor Reads Blog Posts (Priority: P2)

**Goal**: Deliver the blog listing page showing all posts in reverse chronological order, individual blog post pages with formatted content, and an RSS feed.

**Independent Test**: Navigate to `/en/blog`, verify post listing with titles/dates/descriptions. Click a post, verify full content renders with proper typography. Verify `/en/rss.xml` returns valid RSS.

### Implementation for User Story 2

- [x] T029 [P] [US2] Create English blog translation file with tag translations and section headings in src/i18n/en/blog.json
- [x] T030 [P] [US2] Create Dutch blog translation file with tag translations and section headings in src/i18n/nl/blog.json
- [x] T031 [P] [US2] Create HorizontalCard component displaying blog post preview with hero image, title, description, date, and tags in src/components/HorizontalCard.astro
- [x] T032 [US2] Create Blog listing page querying content collection, filtering by language, sorting by pubDate descending, and rendering HorizontalCard for each post using BaseLayout in src/pages/[lang]/blog/index.astro
- [x] T033 [US2] Create BlogPost layout with title, dates, hero image, translated tag badges, prose typography for content, and Giscus comments in src/layouts/BlogPost.astro
- [x] T034 [US2] Create dynamic blog post route with getStaticPaths generating paths for all posts, rendering content with BlogPost layout in src/pages/[lang]/blog/[...slug].astro
- [x] T035 [P] [US2] Create Comments component with Giscus integration, theme-aware mapping (DaisyUI to Giscus themes), and MutationObserver for theme changes in src/components/Comments.astro
- [x] T036 [US2] Create RSS feed endpoint generating per-language XML feed from blog content collection in src/pages/[lang]/rss.xml.js
- [x] T037 [P] [US2] Create at least one sample blog post with complete frontmatter (title, description, pubDate, heroImage, tags, lang) in src/content/blog/
- [x] T038 [US2] Run `npm run build` to verify blog listing, individual posts, and RSS feed build successfully

**Checkpoint**: User Story 2 complete — visitors can browse and read blog posts.

---

## Phase 5: User Story 3 — Visitor Switches Language (Priority: P3)

**Goal**: Deliver the language switcher component enabling visitors to toggle between English and Dutch, with all content updating to the selected language and the choice persisting across navigation.

**Independent Test**: On `/en/`, click NL language button, verify redirect to `/nl/` with Dutch navigation and content. Navigate to `/nl/cv`, verify Dutch CV content. Switch back to EN, verify English content restores.

### Implementation for User Story 3

- [x] T039 [US3] Create LanguageSwitcher component with EN/NL toggle buttons, current language highlighting, and URL path localization via getLocalizedPath in src/components/LanguageSwitcher.astro
- [x] T040 [US3] Integrate LanguageSwitcher into SideBar component in src/components/SideBar.astro
- [x] T041 [US3] Verify all page components pass `lang` prop from URL to translation functions and child components in src/pages/[lang]/*.astro
- [x] T042 [US3] Verify hreflang alternate links are correctly generated for both locales in src/components/BaseHead.astro
- [x] T043 [US3] Implement blog post language filtering with English fallback for untranslated Dutch posts in src/pages/[lang]/blog/index.astro and src/pages/[lang]/index.astro
- [x] T044 [US3] Run `npm run build` to verify both language versions of all pages build successfully

**Checkpoint**: User Story 3 complete — visitors can switch between English and Dutch on all pages.

---

## Phase 6: User Story 4 — Visitor Customizes Theme (Priority: P4)

**Goal**: Deliver the theme selector with 8 DaisyUI themes, localStorage persistence, and flash-free theme application on page load.

**Independent Test**: Open theme selector, choose "dracula" theme, verify dark theme applies to all elements. Navigate to another page, verify theme persists. Refresh the page, verify no flash of default theme.

### Implementation for User Story 4

- [x] T045 [US4] Implement theme selector dropdown in SideBar with all 8 theme options and localStorage save on selection in src/components/SideBar.astro
- [x] T046 [US4] Add inline theme-restore script in BaseLayout that reads localStorage and sets data-theme attribute before page render to prevent flash in src/layouts/BaseLayout.astro
- [x] T047 [US4] Implement Giscus theme synchronization in Comments component — map DaisyUI dark themes to Giscus dark theme and update iframe on theme change in src/components/Comments.astro
- [x] T048 [US4] Verify all components use DaisyUI semantic color classes (bg-base-100, text-base-content, etc.) with no hardcoded colors across src/components/*.astro and src/pages/[lang]/*.astro
- [x] T049 [US4] Run `npm run build` to verify all themes build successfully

**Checkpoint**: User Story 4 complete — visitors can select and persist any of 8 color themes.

---

## Phase 7: User Story 5 — Visitor Reads About Page (Priority: P5)

**Goal**: Deliver the About page with personal content about hobbies, interests, and life outside of work in a friendly, approachable tone.

**Independent Test**: Navigate to `/en/about`, verify personal content loads with hobby cards, contact links, and "What's Next" section. Switch to `/nl/about`, verify Dutch translation.

### Implementation for User Story 5

- [x] T050 [P] [US5] Create English about page translation file with bio, hobby cards, contact links, and section content in src/i18n/en/about.json
- [x] T051 [P] [US5] Create Dutch about page translation file with bio, hobby cards, contact links, and section content in src/i18n/nl/about.json
- [x] T052 [US5] Create About page rendering personal bio, grid of hobby/interest cards, contact links, and "What's Next" section using BaseLayout in src/pages/[lang]/about.astro
- [x] T053 [US5] Run `npm run build` to verify About page builds successfully in both languages

**Checkpoint**: User Story 5 complete — visitors can learn about the site owner's personal life.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Site-wide improvements affecting multiple user stories

- [x] T054 [P] Add favicon.svg to public/favicon.svg
- [x] T055 Verify responsive layout renders correctly on mobile (320px), tablet (768px), and desktop (1280px+) across all pages
- [x] T056 Verify default theme (light) meets WCAG AA contrast requirements (4.5:1 minimum ratio for normal text)
- [x] T057 Create custom 404 error page with navigation back to home in src/pages/404.astro
- [x] T058 Verify blog posts render correctly when heroImage is omitted (no broken image placeholder)
- [x] T059 Verify sitemap generation includes both language versions of all pages via `npm run build` output
- [x] T060 Run final `npm run build` to verify complete site builds with zero errors

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational (Phase 2) — delivers MVP
- **User Story 2 (Phase 4)**: Depends on Foundational (Phase 2) — can start in parallel with US1
- **User Story 3 (Phase 5)**: Depends on Foundational (Phase 2) + at least US1 content to verify switching
- **User Story 4 (Phase 6)**: Depends on Foundational (Phase 2) — can start in parallel with US1/US2
- **User Story 5 (Phase 7)**: Depends on Foundational (Phase 2) — can start in parallel with others
- **Polish (Phase 8)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Phase 2 — no dependencies on other stories
- **User Story 2 (P2)**: Can start after Phase 2 — no dependencies on other stories
- **User Story 3 (P3)**: Best after US1 + US2 have content pages to verify language switching on
- **User Story 4 (P4)**: Can start after Phase 2 — no dependencies on other stories
- **User Story 5 (P5)**: Can start after Phase 2 — no dependencies on other stories

### Within Each User Story

- Translation JSON files before page components (pages depend on translations)
- Shared components (HorizontalCard, Comments) before pages that use them
- Page implementation before build verification
- Build verification as final task in each phase

### Parallel Opportunities

- T003, T004, T005 can run in parallel (different files in Phase 1)
- T009, T010 can run in parallel (independent sidebar components)
- T013, T014 can run in parallel (different language files)
- T020, T021, T023, T024 can run in parallel (independent translation files)
- T029, T030, T031 can run in parallel (blog translations + card component)
- T050, T051 can run in parallel (about page translations)
- User Stories 1, 2, 4, 5 can run in parallel after Phase 2

---

## Parallel Example: User Story 1

```bash
# Launch translation files in parallel:
Task: "Create English home translation in src/i18n/en/home.json"
Task: "Create Dutch home translation in src/i18n/nl/home.json"
Task: "Create English CV translation in src/i18n/en/cv.json"
Task: "Create Dutch CV translation in src/i18n/nl/cv.json"

# Then build pages sequentially (depend on translations):
Task: "Create Home page in src/pages/[lang]/index.astro"
Task: "Create CV page in src/pages/[lang]/cv.astro"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL — blocks all stories)
3. Complete Phase 3: User Story 1 (Home + CV)
4. **STOP and VALIDATE**: Visit home page, navigate to CV, download PDF
5. Deploy to Cloudflare Pages if ready

### Incremental Delivery

1. Complete Setup + Foundational -> Foundation ready
2. Add User Story 1 -> Test independently -> Deploy (MVP!)
3. Add User Story 2 -> Test independently -> Deploy (Blog)
4. Add User Story 3 -> Test independently -> Deploy (i18n)
5. Add User Story 4 -> Test independently -> Deploy (Themes)
6. Add User Story 5 -> Test independently -> Deploy (About)
7. Polish phase -> Final deploy

### Solo Developer Strategy (Recommended)

Since this is a single-author project:

1. Complete Setup + Foundational sequentially
2. Work through user stories in priority order: P1 -> P2 -> P3 -> P4 -> P5
3. Build-verify after each story completes
4. Polish phase last

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story is independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Run `npm run build` after each phase to catch issues early
