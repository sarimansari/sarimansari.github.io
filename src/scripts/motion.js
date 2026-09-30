// Centralized motion module (Section 26). Every scroll-triggered/entrance
// animation on the site is registered from here so the reduced-motion
// fallback is a single code path, not one per component.

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Inertial smooth scroll (Lenis), synced to GSAP's ticker so ScrollTrigger
// stays in lockstep with it — the standard Lenis+GSAP integration. Skipped
// entirely under reduced motion: the whole point of Lenis is added motion
// (scroll momentum/easing), which is exactly what that preference asks to
// avoid, so native instant scroll is the correct fallback, not a bug.
export function initSmoothScroll() {
  if (prefersReducedMotion()) return;

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}

// Hero entrance sequence (Section 6/10): greeting/wave -> name (word stagger)
// -> subtitle. Total <= ~1s. (Tagline/bio moved to AboutMe.astro, which uses
// the generic data-reveal scroll-reveal system below instead of this
// hero-specific timeline; the scroll cue was removed entirely.)
export function heroEntrance(heroSection) {
  if (!heroSection) return;
  const content = heroSection.querySelector("[data-hero-content]");
  if (!content) return;

  if (prefersReducedMotion()) {
    content.classList.add("is-visible");
    return;
  }

  const eyebrow = content.querySelector("[data-hero-eyebrow]");
  const words = content.querySelectorAll("[data-hero-word]");
  const subtitle = content.querySelector("[data-hero-subtitle]");

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.5 })
    .to(words, { opacity: 1, y: 0, duration: 0.7, stagger: 0.05 }, "-=0.2")
    .to(subtitle, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");

  content.classList.add("is-visible");
}

// Hero -> Skills scroll transition: hero recedes (scale/opacity) as the
// viewport scrolls past it (Section 6, Section 12's single permitted
// parallax layer lives here too, on the grain vignette).
export function heroRecede(heroEl) {
  if (!heroEl || prefersReducedMotion()) return;

  const content = heroEl.querySelector("[data-hero-content]");
  if (!content) return;

  gsap.to(content, {
    opacity: 0.2,
    scale: 0.96,
    ease: "none",
    scrollTrigger: {
      trigger: heroEl,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

// Depth-on-scroll for every content section (About/Skills/Experience/
// Contact) — extends the same recede-as-you-scroll-past treatment Hero
// already applies to itself (heroRecede, below) to the rest of the page,
// via a shared `data-recede` attribute on each <section>, so section
// transitions read as one continuous layered motion instead of Hero being
// the only part of the page with any scroll-scrubbed depth.
export function initSectionRecede() {
  if (prefersReducedMotion()) return;

  const sections = document.querySelectorAll("[data-recede]");
  sections.forEach((section) => {
    const inner = section.firstElementChild;
    if (!inner) return;

    gsap.to(inner, {
      opacity: 0.35,
      scale: 0.97,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}

// Signature word-mask reveal for section headings (SplitHeading.astro),
// extending the exact technique Hero's name already uses so every heading
// on the site shares that same "words rise out of a hidden mask" motion
// instead of the flat fade the rest of the page content uses. CSS hides
// the words synchronously (see base.css) so this only needs to animate
// them back in, not set up the hidden state itself.
export function initHeadingReveals() {
  if (prefersReducedMotion()) return;

  const headings = document.querySelectorAll("[data-reveal-heading]");
  headings.forEach((heading) => {
    const words = heading.querySelectorAll(".split-heading__word");
    if (!words.length) return;

    ScrollTrigger.create({
      trigger: heading,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(words, {
          opacity: 1,
          y: "0%",
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.06,
        });
      },
    });
  });
}

// Generic scroll-reveal: fade + rise once per element, threshold ~20%
// into viewport (Section 10). Applied via `data-reveal` attribute.
export function initScrollReveals() {
  const elements = document.querySelectorAll("[data-reveal]");
  if (!elements.length) return;

  if (prefersReducedMotion()) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  elements.forEach((el, i) => {
    const group = el.getAttribute("data-reveal-group");
    const groupSiblings = group
      ? document.querySelectorAll(`[data-reveal-group="${group}"]`)
      : [el];
    const indexInGroup = Array.from(groupSiblings).indexOf(el);

    gsap.set(el, { opacity: 0, y: 20 });

    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: group ? indexInGroup * 0.09 : 0,
        });
      },
    });
  });
}
