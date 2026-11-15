# AEA Docs

Documentation for [AEA](https://github.com/AlphaSuckss/AEA-NeoForge), an addon for Overgrown's Origins on NeoForge 1.21.1.

Read it at https://alphasuckss.github.io/AEA-Docs/.

The site is a static [SvelteKit](https://svelte.dev/) app. It is built to plain HTML and published to GitHub Pages, so nothing runs on a server.

## Develop

Requires Node 18 or newer.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

`npm run build` writes the site to `build/`.

## Deploy

A push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

## Writing pages

Pages are the Markdown files in `src/content/`. The sidebar, the "On this page" list and the previous and next links are built from them.

A page needs this at the top:

```yaml
---
title: "Mob AI"
description: "One sentence on what the page covers."
order: 2
---
```

- `order` sets the position in the sidebar.
- `nav_title` gives the sidebar a shorter name than the title.
- `type_id`, for example `"aea:mob_ai"`, adds the type ID box under the title.

Files in `src/content/powers/` appear under "Power types". To add another section, create a folder and list it in `src/lib/site.js`.

## License

MIT, see `LICENSE`.
