---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

## Scope & mode
Homepage only (`src/pages/index.astro`). Mode: Persuade — a recruiter/hiring-manager/designer-peer scanning quickly must know what this is and act within seconds.

## Audience, job, action
Three audiences (see PRODUCT.md): HR/recruiters (scan for seniority signal), non-design hiring managers (skim for impact), designer peers (read deep). On the homepage specifically, the job is identical for all three: land, register "Senior Product Designer, credible," and choose one of two actions — view the work, or reach out directly.

## Proof / content
Name, one-line subtitle, primary CTA (view work), secondary CTA (contact — direct mailto/LinkedIn link, no form/page per PORTFOLIO-IA.md). No headline stat in the header (decided: clean, proof deferred to case study pages). Project grid below the hero pulls from the `work` content collection (scan-layer cards only).

## Constraints
- Blue + white/black palette, pinned by the user.
- Hover-reactive background microinteraction in the header, abstract/geometric (not literally shipping/freight-themed), pinned by the user.
- No contact form, no visitor tracking beyond necessity (PROJECT-CONTEXT.md ethical stance).
- Must not read as generic/AI-templated (PRODUCT.md Product Principle 5).
- WCAG AA baseline.

## Chosen direction & memorable moment
**Blueprint** — the homepage hero renders as an architect's cyanotype drafting sheet: deep Prussian-blue ground, white linework, dimension lines, registration marks, titleblock-style name/subtitle placement (asymmetric, not centered). Space Grotesk for display, IBM Plex Mono for measurement-style labels/CTAs. Signature interaction: the cursor acts like a drafting light — idle grid and a few pre-drawn annotations sit quietly; on movement, nearby dimension lines animate into being near the cursor with real eased/damped motion (not an instant snap), as if the sheet is being measured live. Full direction reasoning and the concept-seed roll (seed key `380cf7f6`, user locked their own top-ranked pick over the assigned "Mission Control" direction) are in this build's direction-contract comment in `src/layouts/BaseLayout.astro`.

Hero background is a fixed cyanotype blue regardless of system light/dark preference (a deliberate brand choice, not a token that flips with `prefers-color-scheme`); content sections below the hero use the sitewide light/dark tokens.

## Unresolved decisions
- Grid order, résumé file vs. page, and About page scope are still open per PORTFOLIO-IA.md's Pending Questions — none of them block this build.
- The rest of the site (About, work pages) has not been designed yet; this brief and DESIGN.md (written at finish) will need revisiting when that work starts — the Blueprint drafting-sheet motif is a strong candidate to extend, not yet a locked sitewide commitment beyond the homepage hero.
