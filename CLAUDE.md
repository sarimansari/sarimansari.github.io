# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A GitHub Pages user site (`sarimansari.github.io`) built with Astro, deployed via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main` — not the legacy branch-based Pages deployment. `MASTER_BUILD_PLAN.md` documents the original creative direction and design system rationale (colors, typography, motion principles) and is still useful for that context, but the page **structure** has since diverged from it through direct implementation feedback (the Projects and Footer sections were removed, Hero was redesigned, etc.) — treat `src/pages/index.astro` as the current source of truth for what sections exist and in what order, not the plan document.

## Development

- `npm install` — install dependencies
- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally

No test suite or linter is configured.

## Architecture

- `src/pages/index.astro` — assembles the page sections in order: Hero, Skills, Where I've Worked, Contact.
- `src/layouts/BaseLayout.astro` — HTML shell, meta/SEO tags, font loading, and the persistent chrome (grain overlay, scroll-progress bar, nav). There is no footer.
- `src/components/` — one component per section/UI piece. `IconTech.astro` renders a technology's logo (self-hosted Simple Icons SVG from `src/assets/logos/`, or a generic fallback glyph for concepts/protocols with no established brand mark).
- `src/data/*.json` — the site's editable content (`site.json` for identity/links/email, `experience.json` for work history). Edit these rather than hardcoding copy into components. (Deliberately not under `src/content/` — that directory is reserved by Astro's Content Collections feature and warns if plain JSON lives there.)
- `src/scripts/motion.js` — the single centralized GSAP/ScrollTrigger module; every scroll-reveal or entrance animation is registered here, not per-component, so the `prefers-reduced-motion` fallback stays one code path.
- `src/styles/tokens.css` — all design tokens (color, type, spacing, easing) as CSS custom properties; `src/styles/base.css` holds resets and the reduced-motion / no-JS fallback rules.

## Notes

- `experience.json` has company + dates for all three roles (Morgan Stanley, Accolite, Infosys); `title` and `summary` per entry are still a real content gap, not a bug — they're optional fields and entries render cleanly without them. Don't fabricate a title/summary to fill them in.
- The animated avatar in `Hero.astro` is pending a Higgsfield-generated asset; it currently renders a placeholder box. Once `src/assets/avatar/avatar.mp4` (or `.webm`) exists, swap the placeholder `<div>` for a `<video>`.
- Fonts load from Google Fonts (see `BaseLayout.astro`) rather than self-hosted subsets as the original plan specified — a deliberate, flagged deviation for practicality.
- `IconTech.astro` reads logos from disk at build time (`node:fs`) — SVGs get `fill="currentColor"` injected (so they follow the site's grey palette); PNGs (used for brand marks that aren't monochrome-friendly, e.g. Accolite) are base64-inlined as-is, in their own colors. Add a new logo by dropping the file (`.svg` or `.png`) in `src/assets/logos/` and adding its filename (no extension) to `LOGO_MAP` in that component. `kind="company"` (used in `WhereIveWorked.astro`) sizes logos as wordmarks (height-constrained, auto width) and falls back to a 2-letter initials monogram, never a fabricated logo, when no real asset exists; `kind="tech"` (the default, used in `Skills.astro`) sizes them as small square icons and falls back to a generic node glyph.
