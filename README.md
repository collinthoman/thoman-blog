# Thoman Blog

Personal blog and portfolio site built with Astro, Tailwind CSS, and DaisyUI.

**Live at**: [thoman.dev](https://thoman.dev)

## Tech Stack

- **Framework**: Astro 5.x with MDX support
- **Styling**: Tailwind CSS 4.x + DaisyUI 5.x
- **Themes**: 8 DaisyUI themes (light, dark, cupcake, dracula, night, winter, nord, sunset)
- **Comments**: Giscus (GitHub Discussions)
- **RSS**: Built-in at `/rss.xml`
- **Deployment**: Cloudflare Pages

## Project Structure

```text
├── public/
│   └── cv.pdf
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/blog/
│   ├── layouts/
│   ├── pages/
│   └── styles/global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`    |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview production build locally             |

## Deployment

Connected to GitHub — pushes to `main` trigger automatic builds on Cloudflare Pages.
