# MASTER_BUILD_PLAN.md

Creative brief + implementation specification for the personal portfolio site at `sarimansari.github.io`, to be built by Claude Code against this document as the source of truth. Nothing in this plan has been built yet — see Section 31 for what's confirmed vs. still needed before implementation starts.

---

## 1. Website Overview

**Concept.** A dark, cinematic, engineering-led portfolio for Sarim Ansari, a senior software engineer working across distributed backend systems (Java/Spring Boot/Microservices/Kafka) and applied GenAI (agentic RAG, LLM applications, MCP tooling). The site should read like a technical essay with production values — not a resume, not a SaaS landing page, not an art-school experiment.

**Primary objective.** Get an engineering leader, recruiter, or technical founder to understand in under a minute *what Sarim builds, how he thinks, and why his work is technically interesting* — and leave with a clear path to his GitHub, LinkedIn, or inbox.

**Audience.** Engineering managers and technical recruiters doing a fast credibility scan; technical founders/collaborators evaluating depth; peer engineers checking out the work.

**User journey (revised).** Land on a hero that states identity (first name, greeting, avatar) at a glance → capability groups presented with real technology logos, not a badge wall → a visual career timeline → a plain, low-friction contact section with no footer beneath it. (Project case studies and a separate "Engineering Philosophy" beat were part of an earlier draft and have since been cut — see Section 5.)

**Creative concept.** Treat the page like a slow camera move through a well-lit technical studio: large type establishes scale and confidence, grain and low-contrast surfaces give it warmth and depth instead of flat "dashboard" darkness, and every section transition is a deliberate cut, not a generic fade.

**Emotional direction.** Calm confidence. The visitor should feel like they're looking at someone who ships production systems and can also communicate clearly — precise, unhurried, a little cinematic, never flashy for its own sake.

**Design & technical ambition.** Award-tier visual craft (typography, motion, pacing) built with a deliberately small technical footprint (static Astro site, minimal JS, no server) so it stays fast, accessible, and maintainable by one person on GitHub Pages indefinitely.

**Success criteria.**
- A recruiter can state Sarim's specialization and see two real projects within 30 seconds of landing.
- Lighthouse: Performance ≥95, Accessibility ≥100, Best Practices ≥95, SEO ≥100 on both mobile and desktop.
- Site is fully usable with JavaScript-driven motion disabled (`prefers-reduced-motion`) and with keyboard-only navigation.
- Every visual and motion decision in this plan has a stated reason (no decoration without purpose).

**Creative thesis:** *A senior engineer's portfolio should feel as considered as the systems he builds — spacious, precise, and quietly confident — proving technical craft through the making of the page itself, not just the words describing it.*

---

## 2. Core Positioning

**Professional positioning.** A senior software engineer (8+ years) who builds scalable backend systems and applies modern GenAI (agentic RAG, LLM tooling, MCP) to real engineering problems — equally comfortable in Java/Spring Boot production systems and in Python-based AI prototyping.

**Unique value proposition.** Most "AI engineers" are LLM-wrapper generalists; most "backend engineers" haven't touched agentic systems. Sarim sits at the intersection: production-grade distributed systems experience (Spring Boot, Kafka, microservices) *plus* hands-on agentic AI/RAG implementation — not just API calls to a hosted model, but local LLM orchestration, retrieval architecture, and protocol-level tooling (MCP servers).

**Primary message:** "I build backend systems that scale, and I build the AI layer on top of them."

**Supporting messages:**
- Real, running projects — not slideware. Every case study links to working code.
- Protocol-level fluency (gRPC vs REST, MCP) — depth, not keyword familiarity.
- Local-first AI experimentation (LLaMA 3 + FAISS, no vendor lock-in) alongside pragmatic cloud integration (Spring AI + OpenAI) — knows when to use which.

**Differentiation.** Avoids the two common failure modes of engineer portfolios: (a) resume-as-webpage with no craft, and (b) all craft/no substance "creative developer" sites with no real technical depth. This site is both.

**Perceived seniority:** Senior IC, systems-level thinker, comfortable owning architecture decisions.

**Personal brand narrative:** An engineer who treats infrastructure and AI as one discipline, not two — and who cares enough about craft to apply it to his own portfolio the same way he'd apply it to production code.

### One-line positioning
Senior Software Engineer building distributed systems and the agentic AI layered on top of them.

### Short positioning
Sarim Ansari is a senior software engineer specializing in scalable backend systems (Java, Spring Boot, Kafka, microservices) and applied GenAI (agentic RAG, LLM tooling, MCP). He builds production infrastructure and the intelligent systems that run on it.

### Extended positioning
Sarim Ansari is a senior software engineer with 8+ years building backend systems that scale — services, messaging pipelines, and data platforms built on Java, Spring Boot, Kafka, MongoDB, Redis, and Snowflake. Over the past few years his focus has extended into applied GenAI: agentic architectures with local LLMs and retrieval (LLaMA 3 + FAISS), Spring AI integrations that bring LLM features into existing Java stacks, and protocol-level tooling like MCP servers. His work sits at the boundary most portfolios avoid — someone who can design the distributed system *and* the AI layer running on top of it, and who ships both as working code, not concepts. *(Employment history, company names, and team scope are still needed to complete this narrative — see Section 31.)*

---

## 3. Brand Personality

| Attribute | Visual meaning | Writing meaning | Interaction meaning |
|---|---|---|---|
| **Precise** | Tight grid, consistent spacing scale, no arbitrary values | Short, declarative sentences; no filler adjectives | Motion has exact easing/duration, nothing "loose" or bouncy |
| **Confident** | Oversized display type used sparingly, generous negative space | States capability directly ("I build X"), no hedging | Deliberate, unhurried entrance animations — nothing rushed or attention-grabbing for its own sake |
| **Cinematic** | Low-contrast dark surfaces, subtle grain, considered lighting/gradient use | Scene-setting language in section transitions ("the problem," "the approach") | Section transitions read as cuts/dissolves, not default scroll-fades |
| **Technical** | Monospace used for labels, metadata, code snippets, architecture diagrams | Uses real technical vocabulary correctly (protocols, architecture terms) — never dumbed down | Code/diagram visuals are functionally accurate, not decorative |
| **Warm** | Warm near-black (not cold slate-blue-black), warm off-white text | Personable in first person ("I," not "the developer") | Hover states feel responsive and human, not mechanical |

### Brand should feel like
A well-shot technical documentary about someone's actual work — confident, unhurried, substantive.

### Brand should never feel like
A SaaS marketing site, a generic "hire me" template, an AI-generated gradient-blob hero, or a portfolio that oversells with adjectives instead of showing real systems.

---

## 4. Visual Direction

**Overall visual concept.** Near-black "studio" backgrounds with warm, low-contrast surfaces; large serif-display typography as the primary visual anchor; monospace used deliberately for anything technical (labels, code, metadata) to signal engineering precision; a single warm accent color used sparingly so it always means something (a link, an active state, a key number).

**Composition principles.** Strong left-aligned text blocks (editorial, not centered-hero-generic); asymmetric section layouts where content and visual/diagram trade sides down the page; generous whitespace as the default, density only inside code/diagram panels.

**Whitespace strategy.** Whitespace is the primary signal of confidence — sections get room to breathe (min. 120px vertical padding on desktop between major sections) rather than being packed to "prove" content density.

**Layout philosophy.** Content-first, single primary column (max ~760px reading width) for text, breaking to full-bleed only for project visuals and diagrams — this keeps the "editorial" read intact instead of turning into a grid-of-cards template.

**Image treatment.** No stock photography. The only photographic/portrait asset is the animated 3D avatar (Section 27); all other imagery is generated (architecture diagrams, SVG line art, code visualizations) so every visual is purpose-built and technically relevant.

**Shapes.** Rectilinear, grid-aligned. No blobs, no glassmorphic cards, no arbitrary rounded gradients — shape choices come from typography and layout, not decorative geometry.

**Borders.** Hairline (1px), low-opacity, used to separate content zones (e.g., case-study rows) rather than to box things in cards.

**Shadows.** Minimal. No drop-shadow-heavy "card" elevation. Where depth is needed, use a subtle background-color shift (surface vs. surface-raised) instead of shadow — this reads as more premium and avoids the generic-dashboard look.

**Textures / grain.** A fixed, low-opacity (~4–6%) film-grain overlay across the whole viewport (`mix-blend-mode: overlay`), static (not animated, to avoid GPU cost and motion-sensitivity issues) — the single biggest lever for "premium/cinematic" vs. "flat dark website."

**Gradients.** Used only as extremely subtle radial vignettes behind the hero (darkening toward the edges) — never as a visible rainbow/mesh gradient background. No gradient text.

**Lighting / depth / layering.** Depth implied through z-index layering (grain overlay → content → subtle vignette) and through typography scale, not through 3D transforms or parallax depth-of-field tricks.

**Contrast.** High contrast for headlines and primary content (WCAG AA minimum, targeting AAA for body text where feasible), lower contrast for muted/metadata text — contrast itself becomes a hierarchy tool.

**Visual rhythm — eyebrow labels removed.** Sections originally opened with a small monospace `// 0N — section` label (a pattern borrowed from code comments). Removed sitewide per direct instruction (Section 5) — sections now open straight with their heading; rhythm/orientation comes from consistent heading treatment and spacing instead.

Why this direction: it's chosen specifically to avoid the "dark hero + floating card" default called out as off-limits, while staying buildable by one engineer — the craft comes from typography, spacing, and grain discipline rather than heavy effects.

---

## 5. Website Structure

**Revised repeatedly after hands-on implementation feedback.** Projects, Footer, and Nav/header have all been cut, and the site's eyebrow-label pattern (`// 0N — section`) has been removed sitewide. The avatar moved into Hero, and Hero's tagline/bio were later split out into their own "About" section once Hero started feeling cluttered carrying identity + narrative + avatar all at once. The site is now five sections, no header/nav, no footer:

1. **Hero** — identity only: first name (as "Hi, I'm Sarim"), an animated multi-language greeting, waving-hand emoji, subtitle + location, and the avatar. No CTA links (View work / GitHub were removed), no scroll cue (removed), no tagline/bio (moved to About).
2. **About** — the tagline and bio that used to live in Hero, now their own section so Hero stays lean. Plain `<h2>About</h2>` heading, no eyebrow (see below).
3. **Skills** — capability groups, not a badge wall (Section 17); Frontend merged into Backend & Systems, Tooling & Practices dropped, and every individual technology tag now carries a small logo (real brand mark where one exists, a generic glyph otherwise) — all rendered monochrome via `currentColor`/`mask-image`, including the one PNG-sourced logo, so nothing stands out in its own brand colors (Section 16 has the detail).
4. **Where I've Worked** — a visual vertical timeline, not a plain list (pending role/summary content, Section 16).
5. **Contact** — direct, low-friction (email + links). No longer carries the avatar (moved to Hero) or a footer beneath it — Contact is the last thing on the page.

Projects (the 4 GitHub case studies), the Footer, Nav, the extended positioning statement, and "Engineering Philosophy" have all been cut through iteration.

**Eyebrow labels removed sitewide.** Every section originally opened with a small monospace `// 0N — section name` line above its heading (a recurring stylistic device, Section 14). Removed entirely per direct instruction — sections now open straight with their `<h2>`. The `.eyebrow` CSS class was unused after this and was deleted from `base.css`.

Each section below specifies purpose, the visitor's implicit question, content, visual treatment, interaction, animation, and the transition into the next section.

| # | Section | Visitor's question | Transition out |
|---|---|---|---|
| 1 | Hero | "Who is this and what do they do?" | Content fades, About settles in below |
| 2 | About | "What do they actually do, in their own words?" | Tagline/bio settle, Skills heading appears |
| 3 | Skills | "What exactly can they do?" | Groups settle, timeline appears |
| 4 | Where I've Worked | "What's the career trajectory?" | Timeline ends, contact CTA begins entrance |
| 5 | Contact | "How do I reach them?" | — end of experience, no footer beneath it |

---

## 6. Hero Section

**Revised.** The hero now leads with a first name, a rotating multi-language greeting, and the animated avatar, and drops its two CTA links entirely.

**Content hierarchy (top to bottom) — trimmed down after the tagline/bio moved out to About and the scroll cue was removed:**
1. Waving-hand emoji (👋, animates on load, 3 cycles, then settles) + a rotating greeting word cycling through 5 languages — English, French, Spanish, German, Arabic ("Hello" / "Bonjour" / "Hola" / "Hallo" / "مرحباً") on a continuous loop, one word visible at a time.
2. Massive display headline: **"Hi, I'm Sarim"** (word-staggered, Fraunces, largest type on the page) — not the bare first name from an earlier draft, and not the full "Sarim Ansari."
3. Subtitle line (JetBrains Mono): "Software Engineer — Agentic AI & Distributed Systems · Mumbai, India" — role and location combined on one line, dropped "Senior" from the title per the updated copy.
4. The animated avatar (Section 27), placed beside the text content in a two-column layout on desktop (text left, avatar right), stacked on mobile.

Removed from Hero along the way: the "View work ↓" / "GitHub ↗" CTA links (GitHub/LinkedIn access lives in Contact instead), the punchy tagline and extended bio (moved to their own About section, below — Hero carrying identity + full narrative + avatar all at once started feeling cluttered), and the scroll cue (small vertical line + "scroll" label at the bottom edge — removed outright, not moved).

**Headline strategy.** The first name is the headline — even more minimal than a full-name treatment, reads as more personal/direct.

**Multi-language rotator.** Pure CSS keyframe animation (5 stacked spans, each visible for a ~20% slot of a 10s loop) — no JS interval needed, so it degrades gracefully. The Arabic word carries `lang="ar" dir="rtl"` for correct semantics. Under `prefers-reduced-motion`, the rotation stops and only "Hello" (English) stays visible — a looping, involuntary animation is exactly the kind of motion the reduced-motion contract exists to remove.

**Waving hand.** CSS `@keyframes` rotation (0° → 14° → -8° → 14° → -4° → 10° → 0°), 3 iterations on load then stops — deliberately not an infinite loop, matching the "restrained and premium" motion brief. Static (no animation) under reduced-motion.

**Navigation — removed.** The fixed nav bar (monogram + section links, `Nav.astro`) originally specified here has been removed entirely per direct instruction — there is no header/nav chrome anywhere on the page now. Section `id`s (`#top`, `#about`, `#skills`, `#experience`, `#contact`) remain in the markup, so direct/deep links still work; there's just no visible in-page menu to click them from anymore.

**Typography scale (desktop):** Headline at `clamp(4.5rem, 10vw, 9rem)`, subtitle at `clamp(1.1rem, 2vw, 1.5rem)` in JetBrains Mono.

**Motion.** On load: greeting/wave fades up first, headline words split and rise with a short stagger, subtitle follows. Total entrance sequence ≤ 1s — shorter than earlier drafts now that it's not also sequencing a tagline, bio, and scroll cue.

**Cursor interaction.** None (confirmed choice — standard cursor).

**Background treatment.** Solid near-black background with the fixed grain overlay and an extremely subtle radial vignette — no gradient blobs, no animated background.

**Scroll cue — removed.** Originally a thin vertical line + "scroll" label at the bottom edge; removed per direct instruction, not replaced.

**Transition into About:** as the hero scrolls out of view, the content's opacity/scale eases down (not a hard cut) while the About section's heading and tagline ease in via the generic scroll-reveal system (Section 10) — reads as a continuous scroll, not two sections stitched together.

---

## 6a. About Section (new)

Not in the original plan — split out of Hero once Hero started carrying too much (identity, full narrative, and the avatar all at once felt cluttered). Sits second in page order, right after Hero.

**Content:** A plain `<h2>About</h2>` heading (no eyebrow — see Section 5's sitewide eyebrow removal), then the punchy tagline ("Crafting AI-powered platforms that think, scale, and evolve.", Fraunces italic, same treatment the tagline had in Hero) and the extended bio ("Senior Software Engineer with 8+ years of experience building scalable systems, now focused on GenAI and intelligent platforms.", Inter, muted).

**Motion.** Unlike Hero, this uses the generic `data-reveal` scroll-reveal system (Section 10) shared with Skills/Where I've Worked/Contact, not a bespoke entrance timeline — it's a standalone section now, not part of the above-the-fold hero sequence.

**Layout.** Same centered `container-max` (1200px) block as every other section (Section 8/23).

---

## 7. Footer — removed

**The footer has been removed entirely**, per direct implementation feedback. There is no closing section beneath Contact; Contact is now the last thing on the page. GitHub/LinkedIn links live in Contact instead of a footer link row. This section is kept only so the document's numbering stays stable against cross-references elsewhere in this file.

---

## 8. Complete Visual Style Guide

### Color System

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#0B0C0E` | Page background (warm near-black) |
| `--color-surface` | `#16181B` | Section backgrounds that need slight separation |
| `--color-surface-raised` | `#1E2124` | Hover/active surface state, code panels |
| `--color-text` | `#F3F1EC` | Primary text (warm off-white, not pure white) |
| `--color-text-muted` | `#9A9C9F` | Secondary/metadata text |
| `--color-accent` | `#B0B4BA` | Primary accent — links, active states, mailto/CTA text. **Changed from the original amber (`#D4A24C`) to a cool grey** per direct feedback — reads even more restrained/monochrome, at the cost of standing out slightly less against `--color-text-muted` (`#9A9C9F`); contrast against the near-black background is still very high either way. |
| `--color-accent-secondary` | `#6E8CA0` | Secondary accent — reserved for any future code/diagram highlight use; not currently used anywhere live (the diagrams that used it were removed with Projects) |
| `--color-border` | `#2A2D31` | Hairline dividers |
| `--color-success` | `#6FCF97` | Reserved, not currently used |
| `--color-warning` | `#E0B341` | `[CONTENT NEEDED]` placeholder text color (e.g. Where I've Worked's empty state) |
| `--color-error` | `#E0645A` | Form validation only |

Usage rule: `--color-accent` is reserved — if everything is accented, nothing is. It appears on: text links, the current nav section indicator, and the Contact email. It never fills large background areas.

### Spacing

Base unit: `4px`. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.
- Section spacing (desktop): 160px vertical padding between major sections.
- Section spacing (mobile): 80px.
- Container spacing: 24px horizontal gutter on mobile, 64px on desktop.
- Component spacing: 16–32px internal padding depending on component density.

### Layout

- Max content width: 1200px outer container; 760px for reading-width text blocks.
- Grid: 12-column on desktop (≥1024px), 4-column on tablet, single column on mobile.
- Gutters: 24px mobile, 32px desktop.
- Alignment: left-aligned by default (editorial).
- Breakpoints: `480px` (small phone), `768px` (tablet), `1024px` (desktop), `1440px` (large desktop).

### Borders

- Radius: `0px` on structural elements (rectilinear brand direction); `4px` only on small interactive chips/tags in Skills.
- Thickness: `1px` hairline, `rgba` of `--color-border`.
- Usage: horizontal dividers between Where I've Worked timeline entries only — never as a "card" outline around every component.

### Shadows

- Elevation strategy: prefer background-color shift (`surface` → `surface-raised`) over shadows.
- Glow: a very subtle (`0 0 24px`) low-opacity accent glow permitted only on the mailto link hover state — nowhere else.
- Never use shadows on: nav bar, section containers, body text blocks.

### Texture

- Grain: fixed full-viewport `<div>` with a tiled noise PNG/SVG, `opacity: 0.05`, `mix-blend-mode: overlay`, `pointer-events: none`, `position: fixed`.
- No other overlays or blend-mode effects.

### Visual Effects

- Gradients: one radial vignette behind the hero only (see Section 6).
- Blur: `backdrop-filter: blur(12px)` on the nav bar once scrolled, nowhere else.
- Light/distortion/masking/clipping: none by default — reserved only if a specific case-study diagram needs a clipped reveal animation (evaluated case-by-case in Phase 6/7, not applied globally).

---

## 9. Typography

**Primary (display) font:** Fraunces (variable) — used for the hero name, section headlines, and large statement text. Chosen because a soft-serif display face is uncommon in developer portfolios (avoids the generic-sans-hero look) while still reading as sophisticated rather than "creative-agency."

**Secondary (body/UI) font:** Inter — used for body copy, navigation, buttons, form fields. Chosen for its exceptional legibility at small sizes and full weight range.

**Monospace font:** JetBrains Mono — used for metadata, code-style labels, and technical annotations throughout. This is a deliberate brand element, not just a code-block font — it's the visual signal of "engineer."

**Fallback stack:** `Fraunces, Georgia, serif` / `Inter, -apple-system, "Segoe UI", sans-serif` / `"JetBrains Mono", "SF Mono", Consolas, monospace`.

**Display font strategy:** Fraunces at optical size `72–144` with slight negative letter-spacing for headline weight; italic variant reserved for a single emphasized word per section, used sparingly (e.g., italicizing "agentic" once in the positioning statement) as a rhetorical device, not decoration.

| Role | Font | Desktop size | Mobile size | Weight | Line height | Letter spacing |
|---|---|---|---|---|---|---|
| Hero name (H1) | Fraunces | `clamp(4.5rem,10vw,9rem)` | `clamp(2.75rem,12vw,3.5rem)` | 500 | 0.95 | -0.02em |
| Section headline (H2) | Fraunces | `clamp(2.5rem,5vw,4rem)` | `clamp(1.75rem,6vw,2.25rem)` | 500 | 1.0 | -0.01em |
| Case-study title (H3) | Fraunces | `1.75rem` | `1.375rem` | 500 | 1.1 | normal |
| Body / paragraph | Inter | `1.125rem` | `1rem` | 400 | 1.6 | normal |
| Hero tagline | Fraunces | `clamp(1.5rem,3vw,2rem)` | `1.25rem` | 400 italic | 1.4 | normal |
| Eyebrow label | JetBrains Mono | `0.8125rem` | `0.75rem` | 500 | 1.0 | 0.08em, uppercase |
| Metadata / caption | JetBrains Mono | `0.8125rem` | `0.75rem` | 400 | 1.4 | 0.02em |
| Nav links | Inter | `0.9375rem` | n/a (menu) | 500 | 1.0 | normal |
| Buttons / links | Inter | `1rem` | `1rem` | 500 | 1.0 | normal |

Typography is treated as the site's primary visual system — the Fraunces/JetBrains Mono pairing does most of the "premium" work, deliberately reducing reliance on imagery or effects.

---

## 10. Animation Direction

**Principles.** Motion must always do one of three jobs: establish hierarchy (what to look at first), tell a story (reveal information progressively), or confirm an interaction (hover/click feedback). Nothing animates purely for visual interest.

**Easing.** Primary ease: `cubic-bezier(0.22, 1, 0.36, 1)` (a confident "ease-out-expo"-family curve) for entrances; `cubic-bezier(0.65, 0, 0.35, 1)` for section-to-section transitions; linear only for the scroll-progress indicator.

**Duration ranges.** Micro-interactions: 120–200ms. Component entrances: 400–700ms. Section transitions / hero sequence: 800–1400ms. Nothing on the site exceeds ~1.5s for a single animation.

**Stagger rules.** Word-level stagger (not letter-level) for headline entrances, 40–60ms between words. Card/row reveals in Projects stagger at 80–100ms between items, capped at 4 items so it never feels sluggish.

**Entrance rules.** Content enters from a small vertical offset (16–24px) with a simultaneous opacity fade — no scale-bounce, no rotation, no letter-scramble effects.

**Exit rules.** Where content needs to exit (e.g., hero receding into Skills), mirror the entrance curve in reverse at 70% of the entrance duration — exits should feel quicker than entrances.

**Hover rules.** Links: underline reveals left-to-right, 200ms. Buttons/CTAs: background/border color shift, 150ms, no transform/scale on hover (scale-on-hover is exactly the kind of generic template pattern this brief avoids).

**Scroll-triggered rules.** Each major section's content reveals once it's ~20% into the viewport, using `IntersectionObserver` — never re-triggers on scroll-up/scroll-down repeatedly (reveal once per element, respecting that this is a portfolio to be read, not a toy to be scrolled back and forth).

**Text animation rules.** Reserved for the hero name (word-stagger) and section headlines (simple fade/rise) only — body paragraphs never animate word-by-word (a common but usability-harming trope this brief explicitly avoids).

**Image/diagram animation rules.** Architecture diagrams (SVG) animate their line-art in on scroll-into-view (stroke-dashoffset draw-on technique), a single 800–1200ms draw, not looping.

**Page transitions.** Since this is a single-page scroll site (see Section 18), there are no route-level page transitions to design — internal anchor navigation (e.g., clicking "Work" in the nav) uses smooth scroll with the same primary easing curve.

### Major cinematic animations
Hero entrance sequence; hero → Skills scroll transition; SVG architecture-diagram draw-on reveals in Projects.

### Medium interaction animations
Section reveal-on-scroll (fade + rise) for Skills, Where I've Worked, Projects, Contact (including avatar entrance); nav bar background/blur transition on scroll.

### Micro-interactions
Link underline reveals, button color shifts, mailto "copy" confirmation, scroll-cue fade.

---

## 11. Interaction Design

| Element | Trigger | Response | Feedback | Purpose |
|---|---|---|---|---|
| "Email" / "GitHub ↗" / "LinkedIn ↗" links (Contact) | Click | Opens mail client / new tab | Standard link affordance | Never navigate the visitor away from the portfolio unexpectedly |
| Mailto link | Click | Opens mail client | Standard mailto affordance | Removes friction for visitors who don't use a local mail client — the "copy email" affordance from the original draft was never built; not currently planned |
| Skills group | Hover | Group's items brighten from muted to full text color | Immediate, no delay | Signals grouping/categorization without extra chrome |
| Scroll cue (hero) | Scroll | Fades out | — | Gets out of the way once its job is done |

No cursor-following, magnetic, or drag interactions — deliberately excluded given the "standard cursor" and "restrained and premium" decisions; every interaction above is a conventional, accessible pattern executed with unusually careful timing/easing rather than an unconventional interaction model.

---

## 12. Scroll Behavior

**Smooth scrolling.** Native smooth-scroll behavior (CSS `scroll-behavior: smooth` + JS-assisted easing for anchor nav clicks), not a hijacked/virtual-scroll library — keeps trackpad/wheel/touch scrolling feeling native, which matters more for usability than a fully custom scroll engine.

**Section transitions.** Handled via scroll-triggered reveal animations (Section 10), not scroll-jacking — the user is always in control of scroll position and speed.

**Parallax.** A single, subtle parallax on the hero's grain/vignette layer only (moves at ~0.9x scroll speed) — everywhere else, parallax is avoided as it frequently hurts both performance and accessibility.

**Scroll velocity effects.** None — content reveal is threshold-based (IntersectionObserver), not velocity-based, to keep behavior predictable and reduced-motion-friendly.

**Pinned elements.** None. Pinned/sticky scroll sections are explicitly avoided — they're a common source of janky mobile behavior and aren't necessary for a "moderately cinematic" (not "highly cinematic") brief.

**Horizontal scrolling.** None — the site is a single vertical scroll; horizontal scroll patterns are avoided as an accessibility and mobile-usability risk not justified by this brief's content.

**Reveal animations.** As specified in Section 10 — fade + rise, threshold-based, once per element.

**Text transformations.** None beyond the hero word-stagger and headline fades — no scroll-scrubbed text-scramble or color-cycling effects.

**Progress indicators.** A thin (2px) horizontal progress bar fixed to the very top of the viewport, filled in `--color-accent`, reflecting overall page scroll position — subtle wayfinding for a longer single-page site.

**Section-to-section transitions.** Handled by the reveal timing/easing in Section 10; no full-viewport "wipe" transitions between sections (too heavy for a "restrained and premium" brief).

**Where scroll effects should NOT be used:** inside case-study body text, inside the Experience timeline's text content, and anywhere navigation/contact information appears — these must be instantly readable, not gated behind an animation.

**Accessibility/performance:** every scroll-triggered animation must have a `prefers-reduced-motion` fallback that shows content in its final state with no motion (see Section 21); parallax and progress-bar effects are disabled entirely under reduced-motion.

---

## 13. Mobile Behavior

Mobile is not a shrunk desktop layout — it's designed as its own experience with the same visual language.

**Mobile navigation.** N/A — no nav bar exists at any breakpoint (removed, Section 6).

**Hero adaptation.** Name drops to `clamp(2.75rem,12vw,3.5rem)`; subtitle and positioning line stack tightly beneath; the two hero links stack vertically instead of side-by-side; scroll cue remains but shrinks.

**Typography changes.** Body text holds at `1rem` (never shrinks below for readability); headline sizes drop per the scale in Section 9; line-length is naturally shorter due to viewport width, which is fine for the editorial style.

**Spacing.** Section vertical padding drops to 80px (from 160px desktop); container horizontal gutter drops to 24px.

**Project layout.** Case-study rows go from a two-column (text + diagram) layout to a stacked single column — diagram appears below the text, both full-width within the container.

**Interaction simplification.** No hover-dependent functionality anywhere — every hover effect in Section 11 has a tap-equivalent (e.g., case-study rows are tappable/expandable, not hover-reveal-only).

**Animation reductions.** Stagger delays shorten by ~30% (mobile scroll tends to be faster/flickier); SVG diagram draw-on animations shorten to 500–700ms; parallax on the hero grain layer is disabled on mobile (touch scroll + parallax is a common jank source).

**Cursor removal.** N/A — no custom cursor exists at any breakpoint (confirmed decision).

**Touch interactions.** Standard tap; no swipe-gesture requirements anywhere (avoids hidden/undiscoverable functionality).

**Horizontal content handling.** None needed — no horizontal-scroll patterns exist at any breakpoint.

**Image behavior.** The animated avatar (Contact section) serves a smaller/optimized asset variant on mobile and pauses any looping animation when off-screen (`IntersectionObserver`) to save battery/CPU.

**Sticky elements.** Only the top scroll-progress bar is sticky/fixed — nothing else, at any breakpoint (the nav bar this originally referred to was removed, Section 6).

**Accessibility considerations.** Tap targets ≥48×48px; no functionality that requires hover to discover; text reflows without horizontal scrolling at all supported widths down to 320px.

**Device tiers:**
- Small phones (< 480px): tightest spacing scale, single-column everything, largest relative type scaling.
- Normal phones (480–767px): as above with slightly more breathing room.
- Tablets (768–1023px): case-study layout may reintroduce a light two-column treatment for diagrams if space allows; nav remains the mobile collapsed pattern until 1024px.
- Desktop (1024–1439px): full design as specified in Sections 6–12.
- Large desktop (≥1440px): content max-width caps prevent line-length/scale from growing unbounded; extra space becomes additional side margin, not larger content.

---

## 14. Content Strategy

**Writing tone.** First-person, plain, confident, technically precise. Sentences are short and declarative. No marketing adjectives ("cutting-edge," "passionate," "innovative") — let the specificity of the work carry the impression.

**Headline style.** States a fact or a capability directly (e.g., "Senior Software Engineer — Agentic AI & Distributed Systems," not "Crafting Digital Experiences").

**Paragraph style.** 2–4 sentences max per block; one idea per paragraph; technical terms used correctly and without over-explaining (the audience is technical).

**Case-study storytelling.** Follows Problem → Thinking → Technical approach → Result strictly (Section 15) — no "growth-hacky" framing, no invented outcomes.

**Project descriptions.** One clear sentence stating what the project does before any elaboration — matches how the GitHub READMEs themselves are written, which is a good sign the existing voice is already close to right.

**CTA language.** Plain verbs: "View work," "GitHub," "Email me" — no "Let's build something amazing together" style copy.

**Microcopy.** Eyebrow labels use code-comment syntax (`// 03 — projects`) consistently as the site's one recurring stylistic device.

**Navigation labels.** Skills, Experience, Projects, Contact — plain nouns, no cleverness.

---

## 15. Projects — removed

**The Projects section (4 GitHub case studies) has been removed entirely**, per direct implementation feedback, along with its supporting components (`CaseStudyRow`, `Diagram`) and `projects.json` data file. The site no longer links out to individual repos section-by-section — `github.com/sarimansari` is still reachable via the Contact section's GitHub link. This section is kept only so the document's numbering stays stable against cross-references elsewhere in this file. If project case studies are wanted back later, the original case-study content (problem/architecture/challenge per project, sourced from each repo's real README) is preserved in this file's git history.

---

## 16. Where I've Worked (Experience)

On the live site this section is labeled **"Where I've Worked"** and sits third in page order — right after Skills, right before Contact (Section 5).

**Status:** **READY** — company names and dates provided directly; populated in `src/data/experience.json`:
- Morgan Stanley — Sep 2022 – Present
- Accolite — Feb 2020 – Sep 2022
- Infosys — Jun 2018 – Feb 2020

`title` and `summary` (role/what-changed-technically) were not provided and are **`[CONTENT NEEDED]`** — the fields are optional in the schema and simply don't render when absent, rather than fabricating a title or description. Add them any time and each entry picks them up automatically.

**Presentation (built).** A vertical timeline: a thin spine line down the left edge with a small accent-colored circular marker per entry; each entry shows **only the company logo** — no visible company name, dates, or title (both removed per direct feedback; the logo alone is the entry). That information isn't lost, just moved off-screen: since the logo is the only content in the entry (nothing else names the company for a screen reader), it carries an `aria-label` combining company + dates + title (e.g. `"Morgan Stanley — Sep 2022 – Present"`), making the logo the entry's accessible name via `role="img"`. An optional summary/tech-tag row can still render below the logo when `summary`/`tech` are present in the data (none currently are).

All three logos are real, sourced from official brand assets rather than Simple Icons (which doesn't cover any of the three): Morgan Stanley's current wordmark and Infosys's mark from Wikimedia Commons; Accolite's from an archived (Wayback Machine) snapshot of accolite.com from its Feb 2020–Sep 2022 employment window — accolite.com now redirects to bounteous.com since Accolite was absorbed into Bounteous, so no *current* Accolite-branded asset exists, but the period-accurate logo does. **All three render fully monochrome now**, matching each other exactly: the two SVGs get `fill="currentColor"` injected directly; Accolite's source is a multi-color PNG (its own orange/grey brand colors) with no clean SVG equivalent, so rather than showing it in its original colors (which stood out next to the other two), it's rendered as a `mask-image` over a `background-color: currentColor` element — this uses only the PNG's alpha/shape and discards its raster colors entirely, producing the same grey silhouette treatment as the SVGs (`IconTech.astro`'s `.icon-tech--masked` class). If a company has neither an SVG nor a PNG, `IconTech kind="company"` falls back to a 2-letter initials monogram rather than a fabricated logo — not currently needed for any of these three. Driven entirely by `src/data/experience.json`:
```json
{ "company": "...", "dates": "...", "title"?: "...", "summary"?: "...", "tech"?: ["..."] }
```

---

## 17. Skills (Technical Expertise)

On the live site this section is labeled **"Skills"** and sits second in page order — right after Hero (Section 5).

**Revised.** Frontend was merged into Backend & Systems and Tooling & Practices was dropped, per direct feedback — three groups now, not five:

- **Backend, Systems & Frontend** — Java, Spring Boot, Microservices, gRPC, REST, Angular. *"Designing services that hold up under real traffic, not just demos."*
- **AI & GenAI** — Agentic Architectures, RAG (FAISS), LLaMA 3, Spring AI, MCP. *"Building the AI layer as an engineer, not just calling an API."*
- **Data & Messaging** — MongoDB, Redis, Snowflake, Kafka. *"Choosing the right store and the right pipe for the job."*

Each group renders as a short text block (group name in Fraunces, one-line statement in Inter, technology list in JetBrains Mono chips with `4px` radius per Section 8). **Each tag now carries a small logo** (added per feedback, superseding the original "no icons" rule): a real brand mark — self-hosted Simple Icons SVGs (CC0-licensed) — for technologies that have an established public logo (Java, Spring, Angular, MongoDB, Redis, Snowflake, Kafka), and a shared generic node/bracket glyph for concepts and protocols with no real brand mark (Microservices, gRPC, REST, Agentic Architectures, RAG/FAISS, LLaMA 3, MCP) rather than a fabricated logo. No skill-level bars/percentages.

---

## 18. Technical Implementation

**Recommended stack: Astro + vanilla JS/GSAP** (confirmed choice).

**Why Astro:** Astro ships zero JavaScript by default and only hydrates the specific interactive components that need it (islands architecture) — ideal for a content-heavy, mostly-static portfolio where the "app" is really a handful of scroll-triggered animations, not a client-rendered application. It builds to plain static HTML/CSS/JS, which maps directly onto GitHub Pages with no server-side requirements.

**Why GSAP (+ ScrollTrigger) for motion, over Framer Motion/Motion:** GSAP's ScrollTrigger plugin is the most mature, best-documented tool for the specific patterns this brief needs (threshold-based reveals, SVG stroke draw-on, scroll-progress tracking) without pulling in a React-oriented animation library into a framework-light Astro site. CSS transitions/animations handle all simple hover/micro-interactions (Section 10's micro-interaction tier) — GSAP is reserved for the entrance sequence, scroll-triggered reveals, and SVG diagram animation only, per Rule 9 (avoid overengineering).

**GitHub Pages considerations:**
- **Static deployment:** Astro's `astro build` output (`dist/`) is pure static files — deploys as-is.
- **SPA routing:** Not applicable — this is a single-page scroll site with anchor-based in-page navigation, so there's no client-side router and no GitHub Pages 404/redirect workaround needed.
- **Asset paths:** Since this repo deploys as a user site (`sarimansari.github.io`, not a project page), the site is served from the domain root — `astro.config.mjs` should set `site: 'https://sarimansari.github.io'` with no `base` path needed (unlike project-page repos that require a `/repo-name/` base).
- **Build configuration:** `astro.config.mjs` targets static output (Astro's default `output: 'static'`).
- **Deployment workflow:** GitHub Actions workflow (`.github/workflows/deploy.yml`) using `withastro/action` (or a plain `npm run build` + `actions/upload-pages-artifact` + `actions/deploy-pages`) triggered on push to `main`, publishing `dist/` to GitHub Pages.
- **Caching:** Static assets (fonts, grain texture, avatar media) get long `Cache-Control` via GitHub Pages' default asset hashing (Astro fingerprints build output filenames automatically).
- **SEO / metadata / Open Graph:** Handled per Section 22.
- **Sitemap / robots.txt:** `@astrojs/sitemap` integration generates `sitemap.xml`; a static `robots.txt` at `public/robots.txt` allows all crawling and references the sitemap.
- **Favicon:** Generated from the "SA" monogram mark used in the nav (see Section 27).
- **Custom domain compatibility:** The repo is already a `.github.io` user site; if a custom domain is added later, a `public/CNAME` file is the only additional requirement — noted here so the architecture doesn't need to change if that happens.

---

## 19. Architecture

**As actually built** (superseding the original plan — no `content/` collection dir, no Footer, no Projects, real logo assets added):

```
/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── robots.txt
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro    (html shell, meta tags, grain overlay — no nav/header, no footer)
│   ├── pages/
│   │   └── index.astro         (Hero, Skills, WhereIveWorked, Contact — in that order)
│   ├── components/
│   │   ├── Hero.astro          (includes the greeting rotator, waving hand, and avatar slot)
│   │   ├── Skills.astro
│   │   ├── WhereIveWorked.astro (renders the timeline, or the [CONTENT NEEDED] empty state)
│   │   ├── Contact.astro
│   │   ├── IconTech.astro      (per-technology logo: real Simple Icons SVG or generic fallback)
│   │   ├── ScrollProgress.astro
│   │   └── GrainOverlay.astro
│   ├── data/
│   │   ├── site.json           (name, subtitle, location, tagline, bio, email, github, linkedin, availability)
│   │   └── experience.json     (Where I've Worked entries — company + dates ready, title/summary still gaps, see Section 16)
│   ├── scripts/
│   │   └── motion.js           (GSAP entrance + ScrollTrigger setup, respects prefers-reduced-motion)
│   ├── styles/
│   │   ├── tokens.css          (all design tokens from Section 8/9/24 as CSS variables)
│   │   └── base.css            (resets, typography defaults, site-wide user-select:none, no-JS/reduced-motion fallback rules)
│   └── assets/
│       ├── logos/              (self-hosted brand marks: java, spring, apachekafka, angular, mongodb, redis, snowflake, morganstanley, infosys — mostly Simple Icons SVGs; accolite is a PNG, see Section 16)
│       └── avatar/              (sarim-source2.png — real photo, background-removed cutout, see Section 27; not an AI-generated character)
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── .github/workflows/deploy.yml
```

**Why `src/data/` instead of `src/content/`:** Astro reserves `src/content/` for its Content Collections feature and warns on any file there that isn't part of a defined collection — plain JSON data files live in `src/data/` instead to avoid that warning entirely.

**Design-system organization:** All tokens live in `tokens.css` as CSS custom properties — no CSS-in-JS, no Tailwind dependency.

**Animation architecture:** `motion.js` is the single entry point for all GSAP/ScrollTrigger registration, imported once in `BaseLayout.astro` (for `initScrollReveals`) and once in `Hero.astro` (for the hero-specific entrance/recede functions); every component that needs scroll-triggered reveal simply adds a `data-reveal` attribute rather than each component wiring its own GSAP instance.

**Content architecture:** Site identity/links and work-history entries live in `src/data/*.json` as structured data, not hardcoded in components.

**Configuration/environment variables:** None required — this is a fully static site with no API keys or secrets at build or runtime.

**Deployment structure:** GitHub Actions builds `dist/` and publishes via GitHub Pages' native Actions deployment (not the legacy `gh-pages` branch approach) — see Section 28.

---

## 20. Performance Strategy

**Core Web Vitals targets:** LCP < 1.8s, INP < 200ms, CLS < 0.05 — realistic given a static Astro build with minimal JS.

**Image optimization:** Astro's built-in `<Image />` component for the avatar and any diagram rasters, serving WebP/AVIF with explicit width/height to prevent layout shift; SVG diagrams are hand-optimized (SVGO) since they're vector and cheap.

**Lazy loading:** All below-the-fold imagery (diagrams, avatar) uses native `loading="lazy"`; GSAP ScrollTrigger instances are only created for sections, not for every individual animated element, to keep observer overhead low.

**Font loading:** Self-hosted variable fonts (Fraunces, Inter subset to Latin, JetBrains Mono subset to used characters) with `font-display: swap` and `<link rel="preload">` for the above-the-fold hero fonts only.

**Animation optimization:** All animations use `transform`/`opacity` only (GPU-composited), never animate `width`/`height`/`top`/`left` directly; GSAP's `will-change` applied only during active animation, removed after, to avoid unnecessary compositing layers persisting.

**GPU usage:** No WebGL/3D on the page itself (the avatar is a pre-rendered video/Lottie asset from Higgsfield, not a live 3D scene — see Section 27) — keeps GPU load minimal and consistent across devices.

**JavaScript minimization:** Astro ships zero JS for any non-interactive section by default; GSAP + ScrollTrigger (the only JS dependency of real size) is the single largest script and is loaded once, deferred.

**Code splitting:** Not heavily relevant given the minimal-JS approach, but GSAP is loaded as a single deferred bundle rather than per-component imports.

**Preloading:** Hero fonts and the grain texture (used immediately on load) are preloaded; everything else loads on demand/lazily.

**Caching:** Static asset fingerprinting via Astro's build process + GitHub Pages' default long-cache headers on hashed filenames.

**Asset compression:** Brotli/gzip is handled automatically by GitHub Pages' CDN; images are pre-compressed at build time (WebP/AVIF + SVGO).

---

## 21. Accessibility

**Semantic HTML:** Proper landmark elements (`<main>`, `<section>` per content block with `aria-label`s — no `<header>`/`<nav>` or `<footer>`, since both were removed) — real heading levels (`<h2>` etc.) throughout, not styled `<div>`s.

**Keyboard navigation:** All interactive elements (nav links, case-study expand triggers, mailto copy button) are real `<a>`/`<button>` elements, fully tabbable in logical document order; no keyboard traps in any expand/collapse interaction.

**Focus states:** A visible, high-contrast focus ring (`--color-accent` outline, 2px, with offset) on every interactive element — never `outline: none` without a replacement.

**Contrast:** Body text (`--color-text` on `--color-bg`) exceeds WCAG AAA (>7:1); muted text (`--color-text-muted` on `--color-bg`) meets AA (>4.5:1) at the sizes used.

**Alt text:** All diagram SVGs include descriptive `aria-label`/`<title>` content describing what the diagram shows (not just "diagram"); the avatar media includes appropriate alt/description text.

**Reduced motion:** A single `prefers-reduced-motion: reduce` media query disables: hero word-stagger (name appears instantly, fully formed), all ScrollTrigger-based reveals (content renders in its final visible state with no transition), the hero parallax layer, and the SVG diagram draw-on (diagrams render fully drawn). The scroll-progress bar and nav scroll-transition remain (they're wayfinding, not decorative motion) but lose their transition easing (instant state change instead).

**Screen-reader considerations:** Grain overlay and purely decorative SVG flourishes are `aria-hidden="true"`; the scroll-progress bar is `aria-hidden` (redundant with native scrollbar for AT users); live regions are not needed anywhere on this static content site.

**Touch target sizes:** Minimum 48×48px for all tap targets on mobile (Section 13).

**Navigation accessibility:** Skip-to-content link as the first focusable element on the page (visually hidden until focused), landing directly in `<main>`.

---

## 22. SEO

- **Page title:** `Sarim Ansari — Senior Software Engineer, Agentic AI & Distributed Systems`
- **Meta description:** `Senior software engineer building scalable backend systems (Java, Spring Boot, Kafka) and applied GenAI — agentic RAG, LLM tooling, and MCP. Selected work and case studies.`
- **Canonical URL:** `https://sarimansari.github.io/`
- **Open Graph:** `og:title`, `og:description` mirroring the above; `og:image` = a generated 1200×630 card using the hero typography treatment (name + subtitle on the grain/near-black background) — `[CONTENT NEEDED: generate this as part of asset production, Section 27]`; `og:type: website`.
- **Twitter/X metadata:** `twitter:card: summary_large_image` using the same OG image; `twitter:creator` — `[CONTENT NEEDED: X/Twitter handle, if any]`.
- **Structured data:** JSON-LD `Person` schema with `name`, `jobTitle`, `url`, `sameAs` (GitHub + LinkedIn URLs).
- **Sitemap:** Auto-generated via `@astrojs/sitemap`.
- **Robots:** `public/robots.txt` allowing all, referencing the sitemap.
- **Semantic headings:** Single `<h1>` (the hero name), `<h2>` per major section, `<h3>` per case study — strict hierarchy, no skipped levels.

---

## 23. Responsive Design System

Breakpoints (from Section 8/13): `480px`, `768px`, `1024px`, `1440px`.

- **Typography:** Scales via `clamp()` continuously rather than jumping only at breakpoints (Section 9's scale values), so type feels considered at in-between widths too, not just at the four named tiers.
- **Layout:** Single column below `768px`; content + diagram two-column reintroduces at `1024px` for case studies; nav collapses to menu icon below `1024px`.
- **Spacing:** Section padding steps from 80px (mobile) → 120px (tablet) → 160px (desktop) rather than a hard binary switch.
- **Imagery:** Avatar and diagrams swap to smaller/optimized source sizes below `768px` via `<Image />`'s responsive `srcset` generation.
- **Navigation:** Fixed minimal bar at all sizes; menu content changes from inline links (desktop) to a slide-down list (mobile), per Section 13.
- **Motion:** Stagger/duration values shorten by ~30% below `768px` (Section 13); parallax disabled below `768px`.
- **Interaction:** All hover-dependent affordances have tap-equivalents below `1024px` (touch-capable range), per Section 13.

---

## 24. Design Tokens

```css
:root {
  /* Color */
  --color-bg: #0B0C0E;
  --color-surface: #16181B;
  --color-surface-raised: #1E2124;
  --color-text: #F3F1EC;
  --color-text-muted: #9A9C9F;
  --color-accent: #D4A24C;
  --color-accent-secondary: #6E8CA0;
  --color-border: #2A2D31;
  --color-success: #6FCF97;
  --color-warning: #E0B341;
  --color-error: #E0645A;

  /* Typography */
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Inter", -apple-system, "Segoe UI", sans-serif;
  --font-mono: "JetBrains Mono", "SF Mono", Consolas, monospace;

  /* Spacing (base unit 4px) */
  --space-1: 4px;  --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
  --space-6: 24px; --space-8: 32px;  --space-12: 48px; --space-16: 64px;
  --space-24: 96px; --space-32: 128px; --space-40: 160px;

  /* Radius */
  --radius-none: 0px;
  --radius-sm: 4px;

  /* Shadows */
  --glow-accent: 0 0 24px rgba(212, 162, 76, 0.25);

  /* Transitions */
  --ease-entrance: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-section: cubic-bezier(0.65, 0, 0.35, 1);
  --duration-micro: 150ms;
  --duration-component: 550ms;
  --duration-section: 1100ms;

  /* Z-index */
  --z-base: 0;
  --z-content: 10;
  --z-nav: 100;
  --z-grain: 200;
  --z-progress: 300;

  /* Breakpoints (reference values, used in media queries) */
  --bp-sm: 480px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1440px;

  /* Container widths */
  --container-max: 1200px;
  --container-reading: 760px;
}
```

---

## 25. Component Inventory

| Component | Purpose | Variants | Data | Interaction | Animation | Responsive behavior |
|---|---|---|---|---|---|---|
| `Hero` | Identity statement + avatar | — | greeting/name/subtitle/location/tagline/bio, 5-language greeting rotator, avatar media | none (CTA links removed) | greeting fade-in, wave (3 cycles), word-stagger name entrance, scroll-recede | avatar stacks below text < 1024px |
| `Skills` | Capability groups | — | 3 groups (Section 17), each tag rendering via `IconTech` | hover brightens group | fade + rise, staggered per group | groups stack single-column < 768px |
| `IconTech` | Per-technology logo | real logo / generic fallback | technology name → logo lookup | — (decorative, `aria-hidden`) | none | — |
| `WhereIveWorked` | Career timeline | timeline / `[CONTENT NEEDED]` empty state | `experience.json` entries | — | staggered entrance per entry | spine + markers remain single-column at all sizes (already narrow) |
| `Contact` | Direct contact CTA | — | email, links, availability | mailto click | fade + rise | full width on mobile |
| `ScrollProgress` | Top progress bar | — | — | — | width tracks scroll position (disabled under reduced-motion) | present at all sizes |
| `GrainOverlay` | Fixed texture layer | — | — | — | static (no animation) | present at all sizes, `aria-hidden` |

`CaseStudyRow`, `Diagram`, `Projects`, `Footer`, and `Nav` from the original plan have all been removed along with their sections (Section 5/15/7/6) — the page now has no header/nav chrome and no footer, content sections only. No speculative `Marquee`, `MagneticButton`, or custom `Cursor` components — none of those were selected in the interaction/tone decisions above.

---

## 26. Motion & Interaction Technical Specification

**Libraries:** GSAP core + ScrollTrigger plugin (the only animation JS dependency). Plain CSS transitions/animations for all hover/micro-interaction tier effects (Section 10) — no separate library needed for those.

**Scroll library:** Native scroll + GSAP ScrollTrigger for threshold detection (no Lenis/virtual-scroll — deliberately avoided per Section 12's "no scroll-jacking" principle, and it removes a dependency + a common source of scroll-jank bug reports).

**Observers:** `ScrollTrigger`'s built-in `IntersectionObserver`-based triggers for all reveal animations; a plain native `IntersectionObserver` (no GSAP) for the avatar's play/pause-when-offscreen behavior (Section 13), to avoid pulling ScrollTrigger overhead into a component that just needs visibility detection.

**Timelines:** A single GSAP timeline for the hero entrance sequence (Section 6) so its stagger/sequencing stays easy to tune as one unit; each section's scroll-reveal is its own small, independent ScrollTrigger instance (not chained into one giant timeline) so sections remain independently maintainable.

**Spring configuration:** Not used — this brief's "restrained and premium" direction calls for `cubic-bezier` eased motion (Section 10), not spring physics, which tends to read as bouncier/more playful than the brand personality wants.

**Easing values:** As defined in Section 24 tokens (`--ease-entrance`, `--ease-section`).

**Interaction priorities:** Hero entrance > section scroll-reveals > hover/micro-interactions, in terms of animation polish investment — if time is constrained during implementation, hover states can ship simpler before the hero sequence is simplified.

**Mobile fallbacks:** Shortened durations/staggers and disabled parallax, per Section 13 — implemented as a `matchMedia('(max-width: 767px)')` branch in `motion.js`, not a separate mobile animation system.

**Reduced-motion fallbacks:** A single `matchMedia('(prefers-reduced-motion: reduce)')` check at the top of `motion.js` that, if true, skips GSAP/ScrollTrigger registration entirely and adds a `reduced-motion` class to `<html>` that CSS uses to show all content in its final state — one code path to maintain, not two parallel animation systems.

**What uses what:**
- CSS only: all hover states, nav background transition, link underlines, focus rings.
- GSAP timeline: hero entrance sequence.
- GSAP + ScrollTrigger: all section reveal-on-scroll, SVG diagram draw-on, scroll-progress bar fill, hero parallax layer.
- Native IntersectionObserver (no GSAP): avatar play/pause when off-screen.

No WebGL, no Three.js, no Framer Motion/Motion — a single, focused animation dependency (GSAP), consistent with Rule 9 (avoid overengineering) and the confirmed "no 3D/WebGL" visual-effects decision.

---

## 27. Asset Strategy

**Image formats:** WebP/AVIF for any raster imagery (avatar poster frame, OG image), SVG for all diagrams and the favicon/monogram mark.

**Compression:** Astro's `<Image />` pipeline handles raster compression at build time; SVGs run through SVGO.

**Responsive images:** `<Image />`'s automatic `srcset` generation for the avatar asset across breakpoints.

**SVG rules:** All diagrams hand-built (not auto-traced from screenshots) so stroke paths animate cleanly with `stroke-dashoffset`; kept under ~15KB each.

**Video rules:** If the Higgsfield avatar output is delivered as video rather than a static/Lottie asset, it's served as an optimized, muted, looping `<video>` (H.264/WebM) with `preload="none"` and the IntersectionObserver play/pause behavior from Section 13/26 — never autoplaying with sound, never blocking page load.

**Fonts:** Loaded from Google Fonts (Fraunces, Inter, JetBrains Mono) with `preconnect` + `font-display: swap`, not self-hosted subsets as originally specified here — a pragmatic implementation call, see `CLAUDE.md`.

**Favicons:** Generated from the "SA" monogram (JetBrains Mono, set in `--color-accent` on transparent/`--color-bg`), exported as `favicon.svg` plus standard PNG fallbacks.

**Social preview image:** Built (Section 29/Phase 11) — `public/og-image.png`, 1200×630. Uses system-font substitutes (Georgia, Courier New) for the brand fonts (Fraunces, JetBrains Mono) rather than the hero's exact typographic treatment, since server-side image generation in this environment doesn't have access to those web fonts. Close enough to on-brand for a link-preview thumbnail; revisit with the real fonts if a browser-based screenshot/render path becomes available.

**Background textures:** A single tileable grain PNG (Section 8), generated once and reused as the fixed overlay.

### The avatar — status: shipped, real photo instead of an AI character

The original ask was to use Higgsfield to turn a photo into an animated, techy 3D character (glasses + hoodie). That pipeline hit a real wall: the connected Higgsfield workspace has **no free credits and no one-time credit top-up** — only paid monthly/annual subscriptions ($39–129), for what would have been a ~2-credit generation. Rather than commit to a subscription for one image, the decision (per direct instruction) was to use the real uploaded photo instead of an AI-illustrated character.

**What's built:** `Hero.astro` renders the actual photo (`src/assets/avatar/sarim-source2.png`, optimized to WebP via Astro's `<Image>`), styled with two layered effects:
1. An SVG duotone filter (`#hero-duotone`, defined inline in `Hero.astro`) — remaps shadows to near-black (`--color-bg`) and highlights to the accent grey (`--color-accent`). This was removed for a stretch in favor of the photo's natural color, then reinstated per direct instruction — reinstating it turned out to also fix a problem the natural-color version had: the source photo's studio lighting blew out the highlights on his face into an unnatural "glow," and duotone's 2-color luminance clamp eliminates that as a side effect (a brightness/contrast filter had been used to patch the glow in the interim; removed since duotone makes it redundant).
2. A `mask-image` radial gradient on `.hero__avatar-image` feathering the cutout's own alpha — a gradual dissolve into `--color-bg` rather than a hard cutout edge, tuned through several iterations per direct feedback. Issues fixed along the way: a `circle` shape (corner-relative by default) never fully faded at the box's straight edges, worst at the bottom, fixed by sizing to the sides instead; a shape symmetric top-to-bottom faded the hair as aggressively as the bottom, fixed with a deliberately asymmetric ellipse — oversized and centered above the box, so the top edge sits inside the fully-opaque inner stop (hair stays intact) while the bottom edge lands past the outer stop; and that fix then faded the bottom too gradually, erasing most of the hoodie, fixed by narrowing the fade band (inner 45%, outer 75%) so the hoodie stays visible with only a short, late fade right at the edge. Sides stay symmetric throughout.

The source image itself is a background-removed cutout with real alpha transparency (replacing an earlier flat-studio-backdrop version, `sarim-source.jpg`, which needed a CSS radial-gradient vignette to fake the same blend — dropped once the cutout image made it unnecessary).

The photo already has him in a dark hoodie, so half of the original "glasses + hoodie" brief is satisfied incidentally; no glasses.

**If the AI-generated 3D character is wanted later:** the Higgsfield workspace needs a paid plan first (see the checkout links surfaced when this was attempted). At that point, swap `avatarSource` in `Hero.astro` for the generated asset and drop the duotone filter (it's compensating for real-photo quirks, not wanted on an already-stylized illustration).

---

## 28. GitHub Pages Deployment

**Repository structure:** This repo (`sarimansari/sarimansari.github.io`) is a **user site**, so it deploys from `main` at the domain root — no `/repo-name/` path prefix, unlike project-page repos.

**Build command:** `npm run build` (runs `astro build`, output to `dist/`).

**Output directory:** `dist/`.

**GitHub Actions workflow (`.github/workflows/deploy.yml`):** Triggered on push to `main`; steps: checkout → setup Node → `npm ci` → `npm run build` → upload `dist/` as a Pages artifact via `actions/upload-pages-artifact` → deploy via `actions/deploy-pages`. Uses GitHub's native Pages deployment (Settings → Pages → Source: GitHub Actions), not the legacy `gh-pages` branch/`peaceiris/actions-gh-pages` approach — simpler and avoids an extra branch to manage.

**Branch strategy:** `main` is both the source branch and the trigger for deployment; no separate `gh-pages` branch needed with the Actions-based deployment method.

**Static asset paths:** All asset references use root-relative paths (`/fonts/...`, `/assets/...`) since there's no base-path prefix to account for on a user site.

**Custom domain support:** Not currently applicable (no custom domain requested); if added later, only requires a `public/CNAME` file — no architecture change.

**HTTPS:** Enforced by default on GitHub Pages for `.github.io` domains.

**SPA fallback considerations:** Not applicable — single-page scroll site with no client-side routing, so there's no 404/deep-link fallback concern to design around.

**Clean-clone requirement:** `npm ci && npm run build` must work with zero manual setup steps beyond `npm install` — no environment variables, no external service credentials required at build time (per Section 19).

---

## 29. Development Workflow

**Status: Phases 1–5 and 7 are built** (Foundation through Motion System, skipping the now-removed Phase 6). **Phases 8, 9, 10, and 11 have now had a dedicated audit pass** (code-based — no browser/Lighthouse access in this environment, so nothing here substitutes for an actual visual/device check):

- **Phase 8 (Responsive):** Breakpoints are used consistently (mobile-default, single `1024px` desktop tier, matching how the site actually shipped rather than the four-tier 480/768/1024/1440 originally specified); no fixed-width elements or `nowrap` usage found that would risk horizontal overflow on narrow viewports.
- **Phase 9 (Accessibility):** Landmarks, heading order, alt text, `aria-hidden` usage, and focus-visible coverage all checked clean. Color contrast computed directly (WCAG formula) for every text/background pair in use — all comfortably exceed AAA (7:1); worst case is muted text on background at 7.11:1. Two real gaps found and fixed: the mobile nav menu-toggle button was ~33px tall (under the 48px touch-target guideline) — fixed with explicit `min-height`/`min-width: 48px`; the "SA" monogram logo link had an unpadded, very small hit area — fixed by extending its tap target via padding + compensating negative margin (visual size unchanged).
- **Phase 10 (Performance):** Total page weight ~260KB uncompressed across HTML/CSS/JS/image (GSAP, the one animation dependency, is the largest single asset at ~46KB gzipped). Avatar image optimized to WebP (1.2MB source → tens of KB). Fonts load with `preconnect` + `font-display: swap`.
- **Phase 11 (SEO):** Title, meta description, canonical, JSON-LD Person schema, sitemap, and robots.txt all present and correctly reflecting current content. One real gap found and fixed: **no OG/Twitter share image existed** (Section 27 had called for one but it was never produced) — generated a 1200×630 `public/og-image.png` (name, subtitle, domain, on-brand near-black/grey palette — built with system-font substitutes for Fraunces/JetBrains Mono, since those aren't available for server-side rendering here) and wired it into `og:image`/`twitter:image` in `BaseLayout.astro`.

Phase 12 (Final Polish) has not had a dedicated pass — the items above cover most of its checklist already, but it hasn't been run as its own explicit step.

### Phase 1 — Foundation
**Objective:** Astro project scaffolding, GitHub Actions deploy pipeline working end-to-end with a placeholder page.
**Files:** `astro.config.mjs`, `package.json`, `.github/workflows/deploy.yml`, `src/pages/index.astro` (placeholder), `src/layouts/BaseLayout.astro`.
**Notes:** Confirm the Pages deployment pipeline works *before* investing in design — de-risks the one part of this stack (GitHub Pages + Astro) that's new to this repo.
**Acceptance:** A pushed commit to `main` results in a live, correctly-routed page at `sarimansari.github.io` within a few minutes.

### Phase 2 — Design System
**Objective:** All tokens, fonts, and base styles in place.
**Files:** `src/styles/tokens.css`, `src/styles/base.css`.
**Acceptance:** A token/typography test page renders every color, type scale, and spacing value correctly at all four breakpoints.

### Phase 3 — Core Layout
**Objective:** `GrainOverlay`, `ScrollProgress`, and the base page shell.
**Files:** `GrainOverlay.astro`, `ScrollProgress.astro`, `BaseLayout.astro`.
**Acceptance:** Shell renders correctly with placeholder section content. No nav/header chrome and no footer — both removed per direct instruction (Section 6/7).

### Phase 4 — Hero
**Objective:** Full hero implementation including the entrance animation sequence, greeting rotator, waving hand, and avatar slot.
**Files:** `Hero.astro`, `motion.js` (hero timeline).
**Acceptance:** Hero matches Section 6 exactly at all breakpoints; entrance sequence runs once, respects reduced-motion; greeting rotator cycles 5 languages and stops at "Hello" under reduced-motion.

### Phase 5 — Skills, Where I've Worked & Contact
**Objective:** `Skills.astro` (with `IconTech` logos), `WhereIveWorked.astro` (timeline), and `Contact.astro`.
**Files:** `Skills.astro`, `IconTech.astro`, `WhereIveWorked.astro`, `Contact.astro`.
**Acceptance:** All three read correctly against Section 14's writing rules; Skills tags each render a logo; the avatar lives in Hero, not here (moved per feedback).

### Phase 6 — Projects — removed
Cut entirely along with the Projects section (Section 5/15). This phase number is retired.

### Phase 7 — Motion System
**Objective:** Full ScrollTrigger reveal system wired across every section, centralized in `motion.js`.
**Files:** `motion.js`.
**Acceptance:** Every section from Section 10's "medium interaction animations" list reveals correctly once, in the right order, with correct easing/duration.

### Phase 8 — Responsive Design
**Objective:** Full audit against Section 13/23 at all five device tiers.
**Files:** All components (CSS review pass).
**Acceptance:** No horizontal scroll, no broken layout, correct spacing/type scaling at 320px, 480px, 768px, 1024px, 1440px, 1920px.

### Phase 9 — Accessibility
**Objective:** Full audit against Section 21.
**Files:** All components.
**Acceptance:** Full keyboard-only pass works end-to-end; `prefers-reduced-motion` verified to remove all non-essential motion; automated audit (axe or Lighthouse) shows zero critical issues.

### Phase 10 — Performance
**Objective:** Full audit against Section 20.
**Files:** Asset pipeline, font loading, `astro.config.mjs`.
**Acceptance:** Lighthouse Performance ≥95 mobile and desktop; Core Web Vitals targets from Section 20 met.

### Phase 11 — SEO
**Objective:** Full implementation of Section 22.
**Files:** `BaseLayout.astro` (meta tags), `public/robots.txt`, sitemap integration, OG image asset.
**Acceptance:** Lighthouse SEO = 100; social share preview (OG image) verified via a link-preview debugger.

### Phase 12 — Final Polish
**Objective:** Rule 10's full checklist pass (typography, spacing, animation timing, responsive behavior, hover states, keyboard nav, loading, mobile layout, visual consistency, performance, accessibility, SEO) across the entire site.
**Files:** All.
**Acceptance:** Sign-off against this plan section-by-section before considering the site launch-ready.

---

## 30. Claude Code Implementation Rules

1. **Design before code.** Don't start building a section's markup/styles until this plan's relevant section is understood — refer back to it, don't reinterpret the creative direction ad hoc.
2. **No generic templates.** Every section must reflect Sarim's real positioning and real projects — no placeholder Lorem-ipsum-style content in the final build.
3. **Motion with purpose.** Every animation traces back to Section 10/11/12 — if an animation isn't specified there, don't add it.
4. **Performance first.** No new library/effect gets added without checking it against Section 20's budget — GSAP is the one animation dependency; don't quietly add a second.
5. **Responsive by design.** Build and check each component at mobile width *as it's built*, not as a separate pass at the end (Phase 8 is an audit, not the first time mobile is considered).
6. **Accessibility is mandatory.** Every interactive element ships with keyboard support and a reduced-motion fallback in the same commit that introduces it, not deferred to Phase 9.
7. **Real information only.** Never fabricate employers, metrics, project results, or achievements. Every `[CONTENT NEEDED]` marker in this plan must be resolved with real information from Sarim before that content ships — placeholder/invented text is not an acceptable substitute.
8. **Maintainable code.** Components stay small and composable; case-study content lives in `projects.json`, not hardcoded per-component.
9. **Avoid overengineering.** No WebGL, no custom cursor, no scroll-jacking library, no CSS framework — this plan deliberately scoped the stack down; don't add complexity back in during implementation.
10. **Polish everything.** Before declaring any phase complete, run it against Rule 10's checklist (Section 29, Phase 12) at least at a lightweight level, not only in the final phase.

---

## 31. Content Requirements

| Item | Status |
|---|---|
| Name | **READY** — Sarim Ansari (Hero shows first name only, "Sarim") |
| Title / subtitle / tagline / bio | **READY** — explicit content provided directly for all four Hero lines (Section 6) |
| Location | **READY** — Mumbai, India, appended to the Hero subtitle line |
| GitHub URL | **READY** — `github.com/sarimansari` |
| LinkedIn URL | **READY** — `linkedin.com/in/sarimansari` (link only; profile content itself is auth-walled and unreadable) |
| Featured projects | **REMOVED** — the Projects section was cut entirely; no longer needed |
| Employment history — companies & dates | **READY** — Morgan Stanley, Accolite, Infosys with real dates, provided directly (Section 16) |
| Employment history — titles & role summaries | **DEPRIORITIZED** — explicitly told to ignore this gap for now; entries render without them (company + dates only) rather than fabricating a role |
| Achievements (certifications, talks, OSS, scale numbers) | **CONTENT NEEDED** |
| Resume file | **CONTENT NEEDED** — not provided; useful to cross-check Where I've Worked facts |
| Contact email | **READY** — `ansarisarim55@gmail.com` (your account email, used as the public contact address at your request — confirm this is the one you want public, or provide a different one) |
| Other links (blog, X/Twitter, etc.) | **CONTENT NEEDED** — none provided; skip if none exist |
| Availability statement | **CONTENT NEEDED** — confirm whether/how to state current availability in Contact |
| Profile photo / avatar | **READY** — real photo, duotone + vignette treated, live in Hero (Section 27). Higgsfield AI-character generation was attempted but blocked by a credit paywall; not pursued further |
| Color preference | **READY** — accent changed from amber to a cool grey (`#B0B4BA`) per direct feedback, Section 8 |
| Colors to avoid | **READY** — none specified |
| Inspiration references | **READY** — none specified; direction defined independently in Sections 4/8/9/10 |
| Technical-expertise grouping | **READY** — revised per feedback: Frontend merged into Backend & Systems, Tooling & Practices dropped (Section 17) |
| 30-second takeaway | **READY** (proposed, unchanged): *"A senior engineer who builds both the backend systems and the AI running on top of them — and ships real, working code, not slideware."* |

---

## 32. Final Creative Direction Summary

### Creative Concept
A dark, editorial, cinematically-lit technical portfolio where large serif typography carries the visual weight, monospace details signal engineering precision, and every project is presented as a real case study — problem, architecture, challenge — rather than a decorated résumé entry.

### Design Principle
Confidence through restraint: spacious layout, a single disciplined accent color, and motion that only ever clarifies or confirms — never decorates for its own sake.

### Brand Statement
A senior software engineer who builds the distributed systems and the AI layer running on top of them, and proves it with real, working code rather than claims.

### Experience Statement
The visitor should feel like they're moving through a calm, well-paced technical documentary — never rushed, never overwhelmed, always clear on what they're looking at and why it matters.

### Technical Statement
A lightweight Astro build with a single focused animation dependency (GSAP/ScrollTrigger) keeps the cinematic ambition compatible with GitHub Pages' static hosting, sub-2-second load times, full keyboard/reduced-motion accessibility, and long-term solo maintainability.
