# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A GitHub Pages user site (`sarimansari.github.io`) built with Astro, deployed via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main` — not the legacy branch-based Pages deployment. `MASTER_BUILD_PLAN.md` documents the original creative direction and design system rationale (colors, typography, motion principles) and is still useful for that context, but the page **structure** has since diverged from it through direct implementation feedback (the Projects, Footer, and Nav/header sections were all removed, Hero was redesigned, etc.) — treat `src/pages/index.astro` as the current source of truth for what sections exist and in what order, not the plan document.

## Development

- `npm install` — install dependencies
- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally

No test suite or linter is configured.

## Architecture

- `src/pages/index.astro` — assembles the page sections in order: Hero, About, Skills, Where I've Worked, Contact.
- `src/layouts/BaseLayout.astro` — HTML shell, meta/SEO tags, font loading, and the persistent chrome (grain overlay, scroll-progress bar). There is no header/nav bar and no footer — the page is content sections only, top to bottom.
- `src/components/` — one component per section/UI piece. `IconTech.astro` renders a technology's logo (self-hosted Simple Icons SVG from `src/assets/logos/`, or a generic fallback glyph for concepts/protocols with no established brand mark).
- `src/data/*.json` — the site's editable content (`site.json` for identity/links/email, `experience.json` for work history). Edit these rather than hardcoding copy into components. (Deliberately not under `src/content/` — that directory is reserved by Astro's Content Collections feature and warns if plain JSON lives there.)
- `src/scripts/motion.js` — the single centralized GSAP/ScrollTrigger module; every scroll-reveal or entrance animation is registered here, not per-component, so the `prefers-reduced-motion` fallback stays one code path.
- `src/styles/tokens.css` — all design tokens (color, type, spacing, easing) as CSS custom properties; `src/styles/base.css` holds resets and the reduced-motion / no-JS fallback rules.

## Notes

- `experience.json` has company + dates for all three roles (Morgan Stanley, Accolite, Infosys); `title` and `summary` per entry are still a real content gap, not a bug — they're optional fields and entries render cleanly without them. Don't fabricate a title/summary to fill them in. Note the timeline shows **only the logo** for each entry (no visible name/dates/title, per direct feedback) — that data still exists and reaches screen readers via the logo's `aria-label`, it's just not visible text.
- Hero was originally one big section (identity + tagline + bio + avatar) but that felt cluttered, so the tagline/bio now live in their own `AboutMe.astro` section (`#about`, right after Hero). Hero itself is identity-only: greeting, name, subtitle+location, avatar — no CTA links, no scroll cue (both removed).
- Every section used to open with a small `// 0N — section` monospace label above its heading (the `.eyebrow` class). Removed sitewide per direct instruction — sections open straight with their `<h2>` now, and `.eyebrow` was deleted from `base.css` since nothing referenced it anymore.
- Hero's avatar is a real photo (`src/assets/avatar/sarim-source2.png`), not an AI-generated character — the Higgsfield AI-avatar pipeline hit a hard paywall (the workspace has no free credits and no one-time top-up, only paid subscriptions), so per direct instruction it uses the actual photo instead. It's a background-removed cutout (real alpha transparency). Two effects are layered on it in `Hero.astro`: an SVG duotone filter (`#hero-duotone`, defined inline) mapping shadows to near-black and highlights to the accent grey — which also incidentally fixes the source photo's blown-out studio-lit highlights, since duotone clamps the whole luminance range through a 2-color lookup — and a `mask-image` on `.hero__avatar-image` that feathers the cutout's own alpha for a gradual fade into `--color-bg`. That mask went through several iterations (see `MASTER_BUILD_PLAN.md` Section 27 for the full history) and ended up as a deliberately asymmetric, oversized ellipse centered above the box — read the inline CSS comment in `Hero.astro` before changing the numbers, the shape isn't arbitrary. If the AI-generated version is wanted later, replace `avatarSource` in `Hero.astro`'s frontmatter — the duotone filter would likely want dropping too, since it's compensating for real-photo quirks an illustration wouldn't have.
- Fonts load from Google Fonts (see `BaseLayout.astro`) rather than self-hosted subsets as the original plan specified — a deliberate, flagged deviation for practicality.
- `IconTech.astro` reads logos from disk at build time (`node:fs`) and renders every one of them monochrome via `currentColor`, so a PNG source (e.g. Accolite, which has no clean SVG) never stands out in its own brand colors next to the SVG ones: SVGs get `fill="currentColor"` injected directly; PNGs are rendered as a `mask-image` over a `background-color: currentColor` span (`.icon-tech--masked`) instead of a plain `<img>` — this uses only the PNG's alpha/shape and discards its raster colors. Add a new logo by dropping the file (`.svg` or `.png`) in `src/assets/logos/` and adding its filename (no extension) to `LOGO_MAP` in that component. `kind="company"` (used in `WhereIveWorked.astro`) sizes logos as wordmarks (height-constrained, auto width) and falls back to a 2-letter initials monogram, never a fabricated logo, when no real asset exists; `kind="tech"` (the default, used in `Skills.astro`) sizes them as small square icons and falls back to a generic node glyph.
