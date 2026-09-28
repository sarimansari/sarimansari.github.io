# sarimansari.github.io

Personal portfolio site for Sarim Ansari, built with [Astro](https://astro.build) and deployed to GitHub Pages.

**Live site:** https://sarimansari.github.io

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

No test suite or linter is configured.

## Structure

- `src/pages/index.astro` — assembles the page: Hero, Skills, Where I've Worked, Contact
- `src/components/` — one component per section/UI piece
- `src/data/*.json` — editable content (identity/links/email, work history) — edit these rather than component code
- `src/scripts/motion.js` — centralized GSAP/ScrollTrigger animation setup
- `src/styles/` — design tokens and base styles

See `CLAUDE.md` for a fuller architecture rundown, and `MASTER_BUILD_PLAN.md` for the original creative brief and design system rationale.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it via GitHub's Actions-based Pages deployment.

**Required one-time repo setting:** Settings → Pages → Build and deployment → Source must be set to **"GitHub Actions"**, not "Deploy from a branch." If it's left on the legacy branch setting, GitHub runs its own default Jekyll build instead of this workflow — and fails, since Jekyll misreads `.astro` files' `---` frontmatter as invalid YAML.
