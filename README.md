# Persona Portfolio

My portfolio, split into the three hats I've worn: **developer**, **editor**, and **designer**. Each persona has its own route (`/developer`, `/editor`, `/designer`), career highlights, photos, and showcase work.

Built with Vue 3, TypeScript, Tailwind CSS v4, Pinia, Vue Router, and Vite.

## Design system

One system, three accents. Every colour token in `src/styles.css` derives from a single `--hue` in `oklch`, so the personas share lightness and chroma and only differ in hue (250 for developer, 28 for editor, 290 for designer). Switching persona sets `data-persona` on `<html>` and the whole page follows, with no colour values living in JavaScript.

Body copy is always [Instrument Sans](https://fontsource.org/fonts/instrument-sans). Each persona gets its own display face for headings:

- Developer: [IBM Plex Mono](https://fontsource.org/fonts/ibm-plex-mono)
- Editor: [Instrument Serif](https://fontsource.org/fonts/instrument-serif)
- Designer: [Bricolage Grotesque](https://fontsource.org/fonts/bricolage-grotesque)

Fonts are self-hosted through Fontsource, so they respect Vite's `base` path on GitHub Pages.

Components use the semantic utilities (`bg-canvas`, `bg-surface`, `border-line`, `text-ink`, `text-ink-muted`, `text-ink-subtle`, `text-accent`, `font-display`) rather than raw Tailwind palette colours.

## Development

Needs Node 22.12+ (CI runs 24, see `.nvmrc`).

```sh
npm install
npm run dev      # local dev server
npm test         # Vitest
npm run lint     # ESLint via @antfu/eslint-config (also handles formatting)
npm run build    # type-check, then production build
```

## Deployment

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`.

## Licence

Personal portfolio code. Feel free to use it as inspiration for your own.
