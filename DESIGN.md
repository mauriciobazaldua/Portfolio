---
name: Mauricio Bazaldua — Portfolio
description: An elegant, restrained hero over a warm ambient glow, then a numbered list of real work — built from two named references, not an open exploration.
colors:
  home-bg: "#131313"
  home-bg-deep: "#050504"
  home-fg: "#dcdcdc"
  home-fg-muted: "#928c80"
  home-accent: "#e0a458"
  home-glow-1: "#e0a458"
  home-glow-2: "#7a3d1e"
  color-fg-bright: "#f9f9f9"
  color-caption: "#999999"
  color-surface-card: "#1c1c1c"
  color-border: "#282828"
  color-scrim: "rgba(19, 19, 19, 0.72)"
  case-accent-occ: "#8db0f4"
typography:
  display:
    fontFamily: "Space Grotesk, Manrope, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw + 1rem, 6rem)"
    fontWeight: 500
    lineHeight: 1.1
    textTransform: uppercase
  headline:
    fontFamily: "Space Grotesk, Manrope, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw + 1rem, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.1
    textTransform: uppercase
  title:
    fontFamily: "Space Grotesk, Manrope, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 500
    lineHeight: 1.1
    textTransform: uppercase
  body:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
  case-caption:
    fontFamily: "Space Grotesk"
    fontSize: "0.75rem"
    lineHeight: "1rem"
  case-body-sm:
    fontFamily: "Manrope"
    fontSize: "0.875rem"
    lineHeight: "1.25rem"
  case-label:
    fontFamily: "Space Grotesk"
    fontSize: "0.875rem"
    lineHeight: "1.25rem"
  case-body-lg:
    fontFamily: "Manrope"
    fontWeight: 600
    fontSize: "1rem"
    lineHeight: "1.5rem"
  case-body:
    fontFamily: "Manrope"
    fontSize: "1.125rem"
    lineHeight: "1.875rem"
  case-subtitle:
    fontFamily: "Manrope"
    fontSize: "1.5rem"
    lineHeight: "2rem"
  case-title:
    fontFamily: "Space Grotesk"
    fontWeight: 500
    fontSize: "clamp(2.5rem, 5vw + 1rem, 6rem)"
    lineHeight: 1.2917
rounded:
  xs: "2px"
  sm: "6px"
  md: "12px"
  full: "999px"
  case: "8px"
spacing:
  1: "0.25rem"
  2: "0.5rem"
  3: "0.75rem"
  4: "1rem"
  5: "1.5rem"
  6: "2rem"
  7: "3rem"
  8: "4rem"
  9: "6rem"
  10: "9rem"
components:
  floating-nav-link:
    textColor: "{colors.home-fg-muted}"
    typography: "{typography.body}"
  floating-nav-link-hover:
    textColor: "{colors.home-fg}"
  work-item:
    textColor: "{colors.home-fg}"
    typography: "{typography.body}"
  work-item-hover:
    textColor: "{colors.home-accent}"
---

# Design System: Mauricio Bazaldua — Portfolio

## Overview

**Creative North Star: "Arrival, then evidence."**

<!-- REDESIGN NOTE: this is the THIRD full homepage world in this project's
history, replacing the second ("Title Screen" — a no-scroll white/black page
with a game-menu-style sliding selector between About/Work/Contact) just as
completely as that one replaced the first ("Blueprint" — a dark cyanotype
instrument-panel drafting sheet). Title Screen shipped, was reviewed and
fixed, then the user called it "very empty and extremely amateur." This
round was NOT another open exploration: the user supplied two concrete
references (karanthakur.online's structure; Destiny 2's title-screen
restraint) and answered every open question directly, so it was built
directly from that brief rather than rolled against a catalog. If future
work finds a three-item sliding-selector menu, `--blueprint-*` tokens, DM
Sans as the display voice, or a no-scroll single-viewport homepage, that's
drift back toward a world this project deliberately left twice over — not
a variant to preserve. -->

The homepage scrolls, deliberately — unlike both retired directions. It opens on a full-height, adaptive (`100dvh`, not a fixed pixel height) hero: name and one line of positioning, the name set in an uppercase geometric-sans display face at real scale, centered over a near-black ground with one slow-drifting warm amber glow low in the frame. Nothing else. The name and subtitle fade in on load and **replay every time a visitor scrolls away and back** — a repeatable arrival, not a one-shot intro. Below, a "Selected work" section lists every project as a numbered row — title, one-line description, a small caption, a placeholder image — the way a portfolio built around real output should read: evidence, not a pitch deck.

Personality is still expressed the way both prior rounds tried to (subtly, without literal costume), but this round leans on **restraint itself** as the personality signal — the Destiny reference's whole lesson — rather than a borrowed interaction pattern. There's still no illustrated avatar or character, consistent with every round so far; the user has explicitly declined that each time it's come up, even when their own reference sites use one.

**Key Characteristics:**
- A committed dark, warm-toned world for the entire homepage (hero and work list both) — not just the hero, avoiding the seam a partial-dark treatment would create
- One uppercase, tracked geometric-sans display face (Space Grotesk) at real scale for the name and section headline; body text stays in a separate, quieter sans (Manrope) — a deliberate pairing, unlike the previous round's single-typeface rule
- Exactly one accent color (warm amber), reserved for glow, hover states, and the numbered list's active index — chosen specifically to avoid the generic "purple/blue AI gradient" look
- The signature motion is ambient and structural, not a UI gimmick: a slow (36s) drifting gradient behind the hero, and a scroll-position-driven, repeatable entrance fade — both respect `prefers-reduced-motion`
- The full project list lives on the homepage itself; there is no separate `/work` index page (a second reversal of that decision within this project's history — see PORTFOLIO-IA.md)

## Colors

**One fixed world, sitewide, as of 25 Aug 2026.** Until this pass, Home ran a fixed dark/warm palette while every other page (About, case studies) ran a separate light/dark-adaptive "Paper" palette with a blue accent — deliberately, under a documented "Two-Worlds Rule." That rule is retired. The user reviewed the first real case-study build and said it read as a different site from Home ("the background is not the same," "accent colors are blue") and asked to unify everything under Home's palette — confirmed directly, twice: sitewide (not just case studies — About too), and fully fixed (not adaptive to system light/dark, matching Home exactly, the same trade-off Home itself already made). This is the second time this project tried reconciling the two worlds (the first, in the retired "Blueprint" round, was abandoned) — this time it's the user's own explicit, confirmed direction, not a design experiment, so treat it as settled.

### The palette (fixed everywhere — not affected by `prefers-color-scheme`)
- **Home Ground** (`#0a0908`): background, every page.
- **Home Ground, Deep** (`#050504`): used within the hero glow gradient's darker stop, and as `--color-surface`'s value (currently has no other live usage sitewide — inherited from the alias, not yet consumed by a component that needs a distinct surface tone).
- **Home Ink** (`#f5f2ea`): primary text, every page. Warm off-white, not pure white — keeps the whole site in one temperature.
- **Home Ink, Muted** (`#928c80`): subtitles, captions, meta labels, muted nav states.
- **Home Accent** (`#e0a458`): the one accent — glow, hover states, focus rings, KPI numbers, headline stats, footer-nav hover. Warm amber, chosen specifically to sidestep the generic "AI gradient" blue/purple default. There is no more separate "Signal Blue" — it's retired, not just unused.
- **Home Glow 1 / Glow 2** (`#e0a458` / `#7a3d1e`): the two stops blended in the hero's ambient radial gradient. Home-only; nothing else in the site uses a gradient.

### How it's wired (`src/styles/tokens.css`)
`--home-*` is the source of truth. `--color-bg/--color-surface/--color-fg/--color-fg-muted/--color-border/--color-accent` are aliases (`--color-bg: var(--home-bg);` etc.) — every non-Home component (`Header.astro`, `Footer.astro`, `CaseStudyLayout.astro`, `CaseStudyKPIs.astro`, `CaseStudyStep.astro`, `about.astro` via `global.css`) already read `--color-*`, so aliasing let this ship as a token-file change plus one deletion (the `@media (prefers-color-scheme: dark)` override block, now gone — there's only one mode) rather than a find-and-replace across every component. If a future pass wants Home and "everything else" to genuinely diverge again, this is the one place to touch.

### Named Rules
**No light mode, sitewide, on purpose.** Removing the adaptive Paper system means non-Home pages lost the one light-background option the site had — worth knowing if this ever gets revisited for a user who specifically needs a light background (photophobia, some low-vision conditions). The user confirmed this trade-off knowingly, the same one Home's own fixed-dark choice already made — this isn't an oversight, but it's also not free, and it's the reason to think twice before adding a third context where "just make it dark" gets reached for reflexively.

### 25 Aug 2026 — softer contrast, plus a real case-study palette from the user's own Figma

Two separate changes landed together, both from the user directly:

**1. Background/foreground softened sitewide.** `#0a0908` → `#131313` and the primary text `#f5f2ea` → `#dcdcdc`, applied everywhere including Home — "too extremely contrasting for the eyes." `--home-accent` and `--home-fg-muted` were deliberately **not** touched, a literal reading of "background and the white texts" — the amber accent and Home's warm muted tone stay exactly as they were.

**2. A pixel-exact case-study palette, extracted from the user's own Figma mockup of the Applicants Manager page** (not style inspiration this time — an exact spec the user asked to be implemented "no changes, this exact same one"):
- `--color-fg-bright` (`#f9f9f9`) — a second, brighter white the Figma calls "Text," used for headings/emphasis/KPI labels/meta values. Distinct from `--color-fg`/`#dcdcdc` ("Light text" — subtitle, general body). Two whites, not one, on case-study pages.
- `--color-caption` (`#999999`) — neutral muted label/caption color. Used by case-study captions/labels **and** by `Header.astro`'s nav links (Home/About) — the header is shared chrome, so it adopted the new neutral tone too, replacing the old alias to Home's warm `--home-fg-muted`. Home itself still reads `--home-fg-muted` directly and is unaffected.
- `--color-surface-card` (`#1c1c1c`) — KPI card fill.
- `--color-border` (`#282828`) — replaced the old translucent-white border value sitewide (Header/Footer dividers included) with this solid neutral tone, matching the Figma's meta-box/card/button borders exactly.
- `--color-scrim` (`rgba(19, 19, 19, 0.72)`) — translucent bg-toned backdrop for text overlaid on photography (before/after pills, testing badges). Same hue as the new bg, not an arbitrary black.
- `--radius-case` (`8px`) — a fourth radius value, between `--radius-sm` and `--radius-md`, used wherever the Figma specifically calls for 8px (meta boxes, KPI cards, key-problem cards, the header's Contact button).

**Per-project TEXT accent — `--case-accent`.** Each case study can carry its own accent color (OCC/Applicants Manager uses blue, `#8db0f4`) via an optional `accentColor` frontmatter field, applied as an inline `--case-accent` custom-property override on `CaseStudyLayout.astro`'s root element; it defaults to `var(--color-accent)` (sitewide orange) when a project doesn't set one. **The split is deliberate and explicit, per the user's own instruction:** `--case-accent` is for *text only* — title accent word, headline stat, the "BRIEF" label, step numbers, KPI values. Anything *interactive* (links, hover states, focus rings) always uses `--color-accent` (orange), never the per-project color, even on a page whose text accent is blue. Don't let a project's accent color leak into hover/focus states — that's the one hard line in this system.

## Typography

**Updated 24 Aug 2026 — now a sitewide system, not a Home-only one.** Every page (Home, About, the six case studies) shares the same six-role scale and the same heading treatment below. Previously this section only described Home; the gap ("about.astro and CaseStudyLayout.astro still render with only base tokens") is closed as of this pass — see Layout below for the matching container system.

**Display Font:** Space Grotesk (with Manrope, system-ui fallback) — self-hosted via `@fontsource/space-grotesk` at 400/500/600. Replaced Fraunces (a serif) on 22 Aug 2026 — the user asked for the titles to move to an elegant uppercase sans, closer to Destiny 2's title-screen typography and the tracked-uppercase headline style on karanthakur.online, rather than the serif flourish the second redesign round introduced.
**Body Font:** Manrope (with system-ui fallback) — self-hosted via `@fontsource/manrope` at 400/500/600. Replaced Instrument Sans on 24 Aug 2026 — the user didn't like the paragraph font and asked for a legible alternative that suits the page's style; Manrope was picked over Hanken Grotesk and Public Sans (also considered) for its warm, slightly rounded terminals, which pair with Space Grotesk's geometric character better than a fully neutral grotesk while staying quiet at body-text sizes.
**Label/Mono Font:** IBM Plex Mono — scoped to case-study measured data only, same as previous rounds.

**Character:** Space Grotesk, set in uppercase with light positive tracking at display/headline/title sizes, is the one deliberate flourish in an otherwise restrained system — a geometric, instrument-panel voice that echoes the star-map/compass motif elsewhere in the hero, rather than the softer serif flourish it replaced. It never appears at body-text sizes or in sentence case. Manrope handles everything that needs to be read quickly and cleanly: subtitles, list descriptions, captions, nav.

### The scale — six roles, not a raw pixel ladder

Simplified 24 Aug 2026 from an 8-value `xs/sm/base/lg/xl/2xl/display/headline` ladder to six named roles, each with one job. `--text-lg` was dropped outright (zero live usages after the hero subtitle moved to `--text-small`); `--text-xs` and `--text-sm` were merged into `--text-small` (0.875rem) since both served the same "caption/label" role at nearly the same size.

| Token | Value | Role |
|---|---|---|
| `--text-small` | 0.875rem | Captions, labels, nav links, meta lines — anything secondary. |
| `--text-body` | 1rem | Paragraph copy, sitewide. |
| `--text-title` | 1.75rem | h2-level headers (case-study "Impact"/"Process", list-item titles). |
| `--text-numeral` | 2.5rem | Large tabular figures — the work-list index digits; reserved for genuinely numeral content, not prose. |
| `--text-headline` | `clamp(2rem, 4vw + 1rem, 3.5rem)` | h1-level headers sitewide (page titles, the "Selected work" headline) and Home's own section headline. |
| `--text-display` | `clamp(3rem, 6vw + 1rem, 6rem)` | The one hero-scale size — Home's name only. |

### Sitewide heading rule

Every `h1`/`h2` on every page — not just Home's own hand-styled elements — gets Space Grotesk, uppercase, tracked, via `global.css`'s element rules (`h1` → `--text-headline`, tracked `0.01em`; `h2` → `--text-title`, tracked `0.02em`). Home's own `.hero__name` and `.work__headline` set their own `font-size` on top of this (they're display-scale, one step above a page's `h1`), so this doesn't change Home's approved look — it extends the *voice* to About's `<h1>About</h1>` and each case study's `<h1>{title}</h1>` / `<h2>Impact</h2>` / `<h2>Process</h2>`, which previously rendered in whatever the browser default happened to be. This is the concrete answer to "design foundations that apply to the whole site": one heading identity, not a Home-only flourish with generic headers everywhere else.

### Hierarchy
- **Display** (`--text-display`, Space Grotesk 700, uppercase, tracked `0.03em`): the hero name only. Bumped from weight 500/no tracking to 700/`0.03em` on 24 Aug 2026 — the user asked for it "bolder, with letter spacing, similar to Destiny," staying at the same size (not bigger). Needed the real self-hosted 700 weight file added (`@fontsource/space-grotesk/700.css`), not a browser-synthesized fake bold.
- **Headline** (`--text-headline`, Space Grotesk, uppercase, tracked `0.01em`): every page's `h1`. Extended 25 Aug 2026 to three more spots that previously used `--text-title` — the case-study KPI grid's stat values, each process step's `h3` title, and the footer prev/next project names — all bumped up a size for more of the dramatic type-scale play the karanthakur.online reference uses. Reusing the existing token rather than adding a seventh: the "six roles, not a bunch of sizes" discipline holds, it's the same size playing a bigger role in more places, not a new size.
- Home's `.work__headline` and `ContactSection.astro`'s `.contact__headline` moved up a further step, to `--text-display`/700 weight (28 Aug 2026, explicit "even bigger... even bolder" request) — matching the hero name's own scale/weight rather than `--text-headline`. Both are now the two loudest headlines on Home after the hero itself; don't reflexively reuse `--text-headline` for a Home section header without checking whether this precedent applies.
- **Title** (`--text-title`, 1.75rem): two different treatments share this one size, not the same style — (a) Space Grotesk, uppercase, tracked `0.02em`: every page's `h2`, plus each work-item row's project title; (b) Manrope, sentence case, no tracking: the hero subtitle, which borrows the *size* only (bumped up from `--text-body` on 24 Aug 2026 per explicit user request — "still small, make bigger" — after two smaller bumps), not the Space Grotesk treatment. Don't assume every `--text-title` usage is uppercase Space Grotesk; check the component.
- **Numeral** (`--text-numeral`, tabular figures, sentence case since digits have no case): the numbered list's index digits.
- **Body** (`--text-body`, Manrope 400, 1.6 line-height): paragraph copy sitewide, and the hero eyebrow ("Senior Product Designer" — uppercase/tracked/muted on top of this size, added 24 Aug 2026 after the eyebrow cycled through `--text-small` → `--text-title` → settling here; `--text-title` read as too dominant next to the name, `--text-small` read as too small once the subtitle grew).
- **Small** (`--text-small`, Manrope, tracked uppercase where used as a label): list captions, nav links, the scroll-cue pill — except when the underlying content is still a `TODO` placeholder, in which case the uppercase transform is suppressed (see `WorkListItem.astro`'s `isPlaceholder` check) so the placeholder text stays legible as an obvious placeholder rather than reading like corrupted real data. The work-section's own "N projects · years" meta line was removed entirely 28 Aug 2026 (explicit request) — don't re-add it as a "missing" piece.

### Named Rules
**The One-Flourish Rule.** Space Grotesk is reserved for display/headline/title scale only, always uppercase. If a component wants a "premium" feel by switching its body text to Space Grotesk or dropping it to sentence case, that's diluting the one place scale actually earns attention.

### A second, parallel type system — case-study pages only (25 Aug 2026)

The user supplied an exact 7-style type system (with a reference image of size/line-height pairs, later fully disambiguated against real usage in their Figma file) and asked for it to become the site's type system. It's wired under a **separate `--type-*` token prefix**, not merged into the six roles above, and only `CaseStudyLayout.astro`/`CaseStudyStep.astro`/`CaseStudyKPIs.astro`/`Header.astro`'s nav consume it so far — Home and `global.css`'s sitewide `h1`/`h2` rule still read the original `--text-*` scale untouched. Reason: "Title" in the new system (96/124) is a different role than the existing `--text-title` (28px, sitewide `h2`) — reusing the name for a different value would have silently changed every `h2` on the site, including Home's already-shipped, approved one. A parallel prefix was the safe path; unifying the two systems fully (including remapping Home) is a future decision to make with the user, not one made here.

| Token | Value | Figma name | Role |
|---|---|---|---|
| `--type-caption-size/-line` | 12/16, tracked 0.1em | Caption | Meta-row labels (ROLE/TIMELINE/…) |
| `--type-body-sm-size/-line` | 14/20 | Paragraph regular | Meta-row values |
| `--type-label-size/-line` | 14/20, tracked 0.1em | Subtitle big | Key-problem item labels, BEFORE/AFTER pills — **smaller** than plain "Subtitle" despite the name, confirmed against real Figma usage, not just the reference image |
| `--type-body-lg-size/-line` | 16/24, SemiBold | Paragraph large | Headline stat |
| `--type-body-size/-line` | 18/30 | Paragraph normal | Brief/step body, KPI labels, header nav links |
| `--type-subtitle-size/-line` | 24/32 | Subtitle | Page subtitle, step secondary label |
| `--type-title-size/-line` | clamp to 96px / 124 | Title | Page title, "BRIEF" label, step numbers |
| `--type-quote-size/-line` | 32/48, SemiBold | *(bespoke)* | Pull-quote only — not part of the named 7 |
| `--type-stat-size/-line` | 64/64 | *(bespoke)* | KPI stat value only — not part of the named 7 |

## Layout

**Updated 24 Aug 2026 — a sitewide container system, where there was previously only Home's own ad hoc `max-width` values. Extended 25 Aug 2026 (twice) with a third, wider tier, first for imagery, then for full page-width layouts (nav chrome, the case-study header, and the two-column grids below).**

Three container widths, one shared gutter, all tokens: `--container-max` (720px, reading-width — the fallback `.container` for prose-only content like the no-`steps` case-study fallback), `--container-max-wide` (68rem/1088px, hub-width — Home's work list), `--container-max-full` (100rem/1600px, wide-width — now scoped to the site's `Header`/`Footer` chrome only; case-study sections moved off it entirely to `.grid-12` on 25 Aug 2026, see below). `--container-padding` (`--space-5`) is the shared edge gutter across all three. `global.css` exposes `.container`, `.container--wide`, `.container--full`. **The rule that keeps this from turning into "everything is full-width now":** the *wrapping container* can be full-width, but individual text elements still cap their own reading measure regardless — a wide container gives a two-column grid or a spread-out meta row room to breathe; it was never meant to let a paragraph stretch edge to edge (case-study prose now gets its measure from its actual grid-column span — 7 of 12 — rather than a `ch` cap layered on top; see the Case-study template section). Home's own `.work__intro`/`.work__list` reference `--container-max-wide` directly rather than the utility class, since Home's layout is already bespoke; the token is what's shared, not the class.

**A structural note worth remembering if a section ever needs to mix narrow text with wide imagery again:** a child's `max-width` cannot exceed what its parent actually allows — setting `.brief__images { max-width: var(--container-max-full) }` while it was nested inside a `<div class="container">` (720px) silently did nothing, because the parent was already clipping it to 720px minus padding. The fix was structural, not a bigger number: `CaseStudyLayout.astro`'s brief section now has its own `.container` for text and a **sibling** `.container--full` for `briefImages`, both direct children of the `<section>`, mirroring how the hero image already worked. If images ever look narrower than their own CSS says they should, check what they're nested inside before changing the number.

**12-column grid, case-study pages — the standard for all six, not just Applicants Manager (25 Aug 2026, capped 25 Aug 2026).** `.grid-12` (`global.css`): `display: grid; grid-template-columns: repeat(12, 1fr); gap: var(--grid-gap) /* 24px */; max-width: var(--grid-max-width) /* 1280px, the user's explicit value */; margin-inline: auto; padding-inline: var(--grid-margin) /* 60px */`, collapsing to a 4-column grid with the standard container gutter under 640px. Went through two revisions: first shipped with no max-width (pure margin-driven, unbounded on a wide monitor); the user asked for a cap, first tried at `--container-max-wide` (1088px), then explicitly replaced with a fixed 1280px — `--grid-max-width` is that literal value, not derived from another token. This fully replaced `--container-max-full`/`--container-max-wide` as the layout mechanism for every case-study section — see the Case-study template section below for the exact column-span convention (label columns span 4, content spans 8 or 7). `CaseStudyLayout.astro`'s top-level sections literally use `class="grid-12"` with `grid-column: 1 / -1` on their direct children (single-column content spanning the full width); `CaseStudyStep.astro`'s own `.step__grid` duplicates the same `display:grid; grid-template-columns: repeat(12,1fr); gap: var(--grid-gap); max-width: var(--grid-max-width); padding-inline: var(--grid-margin);` declaration rather than importing the class, since it needs the two real column spans (number/label + content) rather than a single full-width child.

**Case-study vertical rhythm: 80px, everywhere (26 Aug 2026).** `--case-section-gap` (80px, confirmed against a labeled measurement in the user's Figma) is the gap between every top-level section/image on a case-study page, and between a step's own text and its inline image(s). Wired as one small set of CSS rules in `global.css` rather than a margin hardcoded per component:
```css
.case-study > * + *,
.brief > * + *,
.case-process > * + *,
.step > * + * {
  margin-top: var(--case-section-gap);
}
```
Each selector targets a scope where these "sections" are actual DOM siblings (`CaseStudyLayout.astro`'s top level; inside `.brief`; inside the `.case-process` "Process" section; inside a single `CaseStudyStep`'s root) — `> * + *` skips the first child in each scope, since the gap belongs to the boundary between two things, not to one thing alone. **This replaced several inconsistent, uncoordinated values that had accumulated piecemeal** (`.hero-image`/`.interstitial-image` each had their own `margin: var(--space-8) 0` /64px both sides; `.brief` had an unrelated 8px `padding-top`; `.step` had a 64px `padding-block` plus a `border-top` divider; `.case-nav` had a 48px `margin-top` *and* a 48px `padding-top` *and* its own divider) — several real boundaries measured 72px, 128px, or 160px depending on which components happened to be adjacent, not the intended 80px anywhere. **Divider lines were removed, not just the spacing** — `.step`'s and `.case-nav`'s `border-top` rules are gone; nothing in the real Figma extraction for this page showed hairline dividers between sections, only whitespace, so a divider uniquely on those two boundaries was already inconsistent with the rest of the page before the spacing fix even started. If a component needs its own top margin/padding for an unrelated reason (e.g. `.case-nav`'s `padding-bottom` toward `Footer.astro`, a distinct, deliberately-tightened boundary — see the Case-study template section), make sure it isn't ALSO a `> * + *` sibling under one of the four scopes above, or the two will stack instead of one winning. When adding a new top-level section to the template, no new margin rule is needed as long as it's a normal sibling within one of those four containers — the existing rule already covers it.

**All spacing sitewide is already multiples of 4.** Audited 25 Aug 2026 per the user's request — `--space-1`…`--space-10` (4/8/12/16/24/32/48/64/96/144px) was already 100% compliant. No token changed; noted here as confirmed, not as a gap that was fixed.

Home specifically: single scrolling column, no `max-width` container on the hero itself (full-bleed dark field — this is deliberately Home's one exception, not the sitewide default). Hero: `min-height: 100dvh` — deliberately `dvh` not `vh`, so mobile browser chrome doesn't cause layout jumps, and deliberately not a fixed pixel height so it adapts to every screen size as asked. Work list: each row is a 3-column grid (index / text / image) collapsing to 2 columns (image hidden) under 640px. Spacing rhythm extends the existing 8-step rem scale with two more steps (`--space-9` 6rem, `--space-10` 9rem) for the section-level padding this layout needed that earlier, denser rounds didn't.

## Elevation & Depth

Still flat — no shadow vocabulary, continuing the rule from the previous round. Depth on Home reads through the ambient glow (a soft, blurred radial gradient, not a shadow) and through a small `scale(1.03)` lift on list-item image hover.

## Shapes

Soft, small radius (`--radius-sm` 6px, `--radius-md` 12px) on the work-list image placeholders — continuing the previous round's move away from Blueprint's sharp corners. No new shape motif this round; the numbered list itself (tabular index digits, dividers) is the structural signature, not a recurring decorative shape.

## Components

### Hero (Home — signature component)
Full-height (`100dvh`), centered composition: name (Fraunces display) + one-line subtitle, over an absolutely-positioned ambient glow layer (`.hero__glow`) — two blended radial gradients (Home Glow 1/2), blurred, drifting slowly via a `transform`-based `@keyframes` animation (36s, ease-in-out, alternate) with a second, concurrent `beacon` `@keyframes` (7s, opacity only, 0.4–0.68) layered on the same element via one comma-separated `animation` shorthand — both disabled together under `prefers-reduced-motion`. The name/subtitle wrapper starts at `opacity: 0` and fades in — driven by an `IntersectionObserver` on the hero section (threshold 0.35) that toggles an `is-visible` class on every intersection change, not just once. This means the fade **reverses** when the hero scrolls out of view and **replays** when it scrolls back in — a deliberate, explicit requirement, not an accident of a one-shot library default. The first name ("Mau") is a separate `<span>` in Home Accent; the surname inherits Home Ink normally — the only place Home Accent is used as display-text color rather than a state/glow color.

**REDESIGN NOTE:** an earlier round of this hero added two motion easter eggs (a recurring shooting star, a very rare abstract "passing ship" silhouette). The user saw them live and rejected both as reading "amateur" — they were removed entirely, code and all. Do not reintroduce spawned/timed decorative sprites in the hero; that path has been tried and explicitly declined.

**Star-map texture:** a deterministic (seeded, build-time — same output every build, no client JS) scatter of 55 small dots plus 4 faint concentric rings, rendered as one inline `<svg class="hero__starmap">`, rotating very slowly (`map-rotate`, 240s linear infinite, disabled under `prefers-reduced-motion` the same way `drift`/`beacon` are) — referencing Destiny 2's title screen background. **Calibration history, worth knowing before touching these values again:** the first pass was tuned far too visible (large high-contrast dots, a legible bullseye ring pattern) and was cut ~3–4x. The next pass, cut correctly for restraint, went too far the other way — stars sat at the edge of perceptibility even after one rebalancing attempt. The user asked for "a little bit more visible" a second time; the current values (star radius 0.08–0.22, opacity 0.25–0.6, layer opacity 0.6) are the result of that second bump and are confirmed genuinely visible in review screenshots, not just numerically higher. This has now been tuned in both directions — treat the current values as calibrated, not a placeholder.

**Star-map position (24 Aug 2026):** the concentric rings were originally centered near the hero's vertical middle (`cx="50" cy="44"` in the 0–100 viewBox); the user asked to match Destiny 2's actual compass placement, which sits bottom-center. Moved the ring center to `cy="75"` and the layer's `transform-origin` from `50% 50%` to `50% 85%` so the slow rotation pivots near that same point instead of orbiting the screen's true center (which would have made the compass visibly drift up through the middle of the frame over each 240s cycle instead of staying anchored low). The star scatter itself (the 55 dots) was left untouched — it still spans the full 0–100 canvas as ambient sky texture; only the ring/compass motif's anchor moved. Note `.hero__starmap` is deliberately oversized (`inset: -25%`, `width`/`height: 150%`) to avoid corner gaps during rotation, which means the viewBox-to-screen mapping isn't 1:1 — these coordinates were arrived at empirically via screenshot at both a desktop (1440×900) and mobile (390×844) viewport, not derived from exact aspect-ratio math. If this needs recalibrating, verify both breakpoints again rather than trusting the coordinate math alone.

**Sticky "parallax cover" scroll effect:** `.hero` is `position: sticky; top: 0; z-index: 0;` with no extra wrapper — it pins in place for a scroll distance equal to its own height while `.work` (which follows immediately in normal flow, `position: relative; z-index: 1;`, opaque background) scrolls up and visually covers it. This is the standard, robust technique for a "next section slides over a pinned hero" effect — sound specifically because sticky positioning is computed from genuine document scroll position, not a transform, so it composes correctly with the Lenis smooth-scroll below (which also drives real scroll position, not a virtualized one). `.work::before` is a decorative gradient overlay (`z-index: -1`, scoped to `.work`'s own stacking context) that softens the seam where the two sections meet — without it, the boundary reads as a hard color-cutoff line during the cover transition; don't remove it as "unnecessary" without checking that seam again first.

**Scroll-cue pill:** `<a href="#work" class="hero__scroll-cue">`, bottom-center, bordered pill with a small inline-SVG chevron (never a Unicode arrow glyph — see `craft-floor.md`'s icon rule). Fades in with the hero content (shares the same `IntersectionObserver`/`is-visible` toggle). Fades out via a *separate* mechanism — a `scroll` listener checking `window.scrollY > 24` — because tying it to the same intersection state wouldn't work once the hero became sticky (it stays "intersecting" for the whole cover transition, geometrically, even once visually covered). The `.is-scrolled` state sets `opacity: 0`, `visibility: hidden` (delay-matched to the opacity transition so it doesn't vanish from tab order mid-fade), and `pointer-events: none` — all three are needed; pointer-events alone blocks clicks but not keyboard tab order. Clicking it is intercepted in JS when Lenis is active (`event.preventDefault()` + `lenis.scrollTo(target)`) so it doesn't fight the native `scroll-behavior: smooth` fallback that governs when Lenis is off (reduced motion).

**Inertial/eased scroll (Lenis):** the whole page's scroll feel is smoothed via the `lenis` package, initialized only when `!prefers-reduced-motion`. Deliberately using its default mode (no custom `wrapper`/`content`) — that's the one configuration that drives the *real* window scroll position each frame rather than virtualizing scroll on a transformed container, which is what keeps it compatible with the sticky-hero cover effect above. If this is ever reconfigured, re-verify the sticky parallax still works — a wrapper-based/virtualized Lenis setup would likely break it.

**Name structure (added 24 Aug 2026):** the hero content is now three stacked beats, not two — a small uppercase eyebrow reading "Senior Product Designer," then the display-scale name, then the subtitle. This is a direct, explicit exception to the eyebrow ban below — see "The brief wins" in this skill's own operating principles; it's not an oversight. **Sizing settled after several rounds, worth knowing before changing it again:** eyebrow and subtitle started matched at `--text-small`, then both got bumped together to `--text-title` (28px) when the user said the match still read too small — but the eyebrow at 28px then read as *too dominant* next to the name, so they're now deliberately unmatched: eyebrow at `--text-body` (16px), subtitle staying at `--text-title` (28px). Don't re-match them without being asked; the current split is the resolved state, not a regression from an earlier "same size" request.

### Floating nav (Home only) / Header nav (non-Home) — kept in sync, 25 Aug 2026
`FloatingNav.astro` (Home) and `Header.astro`'s `.site-header__nav` (every other page) must carry **the same items, at the same size** — this was broken (Header had an extra "Home" item and rendered nav links at 18px vs Home's 14px) and the user asked for parity directly. Current shared item set: **Works, Contact** — no separate "Home" link anywhere; the brand mark (linked to `/`) and the Works item both already lead back to the homepage, so a third redundant link was cut rather than added to Home's side. **About was removed sitewide 29 Aug 2026** (the page itself deleted, `/about` now 404s, both navs' About item removed) — the shared item set was previously About/Works/Contact; do not re-add an About link on one side without the other, and don't recreate `src/pages/about.astro` as a "fix" for a stale reference elsewhere (PORTFOLIO-IA.md still describes the old About-inclusive site map as of this writing and needs a pass).
- **Floating nav** (Home): plain-text links, fixed top-right, muted at rest (`--home-fg-muted`) → Home Ink on hover/focus, themed focus ring, `--text-small` (14px). No button chrome — the minimal treatment the user asked for in place of a conventional header bar.
- **Header nav** (case-study pages): `Works` at `--text-small` (matched to Home 25 Aug 2026, was `--type-body-size`/18px), `--color-caption` → `--color-accent` on hover, `gap: var(--space-5)` (also matched to Home's gap) — currently a single-item `<nav>` now that About is gone, not yet reconsidered as a layout. A bordered **Contact** button sits outside `.site-header__nav` as its own element — that's a deliberate Figma-sourced exception, not a plain nav item, and stays a button even though Home's own Contact is plain text; the user's parity ask was about the plain nav items specifically.
- **Works** resolves differently per surface since the target section only exists on Home: on Home it's `href="#work"`, click-intercepted in `index.astro`'s script and routed through Lenis (same handler as the hero's scroll-cue) for an eased jump; on every other page it's `href="/#work"`, a full navigation that lands on Home already scrolled to the anchor (native browser behavior, Lenis isn't running yet at that point).

### Work list item (Home — signature component)
One row per project: a large tabular-figure index number (01, 02…) in Space Grotesk (`--text-numeral`) at 50% opacity, a text block (title / one-liner / caption), and a 240px/4:3 image (bumped from 192px 28 Aug 2026, "make the thumbnails a bit bigger" — bumped `widths`/`sizes` on the `<Image>` to match), or a gradient-filled placeholder box (hidden below 640px) for a still-TODO project. Caption reads `Company · Role · Timeline` (added `company` 28 Aug 2026 — Space Grotesk, uppercase, `--home-fg-tertiary`, a dimmer/more-neutral grey than the one-liner's `--home-fg-muted`, since this is one step further back in the hierarchy). Divider lines (`--home-border`, a low-alpha warm white, never an accent color) between rows. On hover/focus: index and title shift to Home Accent, image scales up slightly. The whole row is one link; its accessible name is the project title alone (`aria-label`) rather than the full concatenated row text.

**Compass Design System is excluded from this list** (28 Aug 2026) — it gets its own spotlight above instead (see Featured work spotlight, below) and would otherwise show twice. `index.astro` filters it out by slug before mapping the rest through `WorkListItem`; the remaining rows renumber cleanly from 01, they don't keep Compass's old priority-1 gap.

**`draft: true`** (content schema field, added 28 Aug 2026 to pull "Migrating an acquired product" back before shipping): excludes a project from both `getCollection("work")` call sites (`index.astro`'s work list and `[slug].astro`'s `getStaticPaths`), so it's gone from the Home list, the prev/next chain, *and* its own route stops building — the URL 404s rather than staying live-but-unlisted. The file and its content aren't touched; flip `draft` back off to bring it back exactly as it was. Distinct from a still-`TODO` stub (Carrier Scorecard before it was built, etc.), which stays visible with placeholder copy — `draft` is for a project you want fully pulled, not one that's still being written.

### Featured work spotlight (Home — `FeaturedWork.astro`, added 28 Aug 2026)
A single, bigger, editorial-scale treatment for the one project the user most wants to lead with (design systems, "something I really enjoy doing") — sits between the hero and the "More work." list, its own section with `id="work"` (the hero's scroll-cue and the nav's "Works" link both target `#work`; moved here from the list section since this is now the first work content after the hero). Two-column grid on desktop (text ~43% / image ~57%, image right — same side as the list's thumbnail, for consistency), stacks image-on-top on mobile (`≤900px`). Deliberately not just a bigger `WorkListItem`: no number badge, the project's real `metrics` render as stat tiles (value in `--text-numeral`, label in `--home-fg-tertiary`) instead of being buried in a caption, and the image runs at its own 5:4 ratio (`≤900px`: 4:3) rather than the list's 4:3/240px thumbnail. Image, title, and the "View case study" text-link are each their own `<a>` to the same slug (not one giant wrapping link, since the block has multiple distinct interactive targets) — the image link carries `tabindex="-1" aria-hidden="true"` so it doesn't announce as a redundant link to screen readers. Which project is featured is a single `featuredSlug` constant in `index.astro`, not a schema field — swapping the spotlight to a different project later is a one-line change there plus pulling that project (not Compass) out of the list.

### Contact section (Home — `ContactSection.astro`, added 28 Aug 2026)
Reference: a Karan Thakur-style row list (circled icon, bold label, muted detail line, external-link arrow, full-width border-separated rows) — replaces the plain FloatingNav-only contact affordance as the page's closing section, not a new route. `PORTFOLIO-IA.md`'s "mailto/LinkedIn on every page, not a destination page" decision still holds — this is a same-page section, not a `/contact` route. Headline "Contact **me.**" at the same `--text-display`/700 treatment as `.work__headline` (see Hierarchy, above), with "me." in Home Accent. Three rows, each reading from `src/lib/site.ts`'s `contact`/`resumeHref`: Email (`mailto:`), Resume (`resumeHref`, a `download` attribute — the file itself is still pending, per `PORTFOLIO-IA.md`'s open pending-question #2), LinkedIn (`target="_blank" rel="noopener"`, detail text strips the `linkedin.com/in/` prefix down to just the handle). Icons are hand-authored inline SVGs at the sitewide icon convention (`viewBox="0 0 16 16"` or `24 24`, `stroke="currentColor"`, `stroke-width="1.5"`, round caps/joins — matches the case-study footer nav chevrons), not an icon library.

**`src/lib/site.ts`'s `contact.email`/`contact.linkedin` are real values now** (28 Aug 2026 — `erick.mauricio.gf@gmail.com` / the real LinkedIn URL), replacing the long-standing `TODO@example.com` / `.../in/TODO` placeholders. Since FloatingNav's Contact link and the non-Home Footer both already read from this same file, fixing it here also fixed those two — no component edit needed for either. `resumeHref` (`/resume.pdf`) is unchanged; the file itself still doesn't exist in `public/` (a real pending gap, not an oversight — see `PORTFOLIO-IA.md`).

**Brand mark (Header only):** two `<span>`s — "MAU" in `--color-accent` (sitewide orange) + "BAZALDUA" in `--color-fg-bright`, with a literal space between them in the markup (fixed 25 Aug 2026 — the two spans had no whitespace node between them and rendered as "MAUBAZALDUA"). The orange stays even on a page whose text accent is blue (Applicants Manager) — the brand mark is sitewide identity, never per-project. The Résumé link became a **Contact** button (`mailto:` via `src/lib/site.ts`'s `contact.email`) — a real `/contact` page is still TODO (see PORTFOLIO-IA.md), so this points somewhere real rather than a dead `#`/`/resume.pdf` placeholder.

### Footer (non-Home pages only)
Two plain-text contact links (`mailto:` + LinkedIn). Same container width as Header.

### Case study template (`CaseStudyLayout.astro` — the canonical structure for all six case studies, 25 Aug 2026)

**This is the sitewide template contract, not an Applicants-Manager-specific build.** The user reviewed the fully-built page against their own Figma and confirmed directly: every remaining case study (still-TODO stubs today) follows this exact same layout, grid, and foundations when its content gets written. What varies per project:
- **Step count** — more or fewer than Applicants Manager's four.
- **Images** — more, fewer, or none at a given slot (every image-bearing field is optional; a case study with no `interstitialImage` on a step, or no `beforeAfter`, just renders without that block).
- **`accentColor`** — the per-project text accent (`--case-accent`); defaults to sitewide orange when a project doesn't set one.
- **Copy**, obviously.

What does **not** vary: the 12-column grid (`.grid-12`, 60px margins, 24px gutter, 1280px cap — see Layout), the `--type-*` type scale, the color mechanism (`--case-accent` for text, `--color-accent` always for interactive elements), the section order below, the component set (`CaseStudyLayout` / `CaseStudyStep` / `CaseStudyKPIs` / `BeforeAfterSlider`), and the motion system (see below). Treat any of those as a bug to fix, not a per-project style choice, if a future case study's build seems to drift from them.

Read via the Figma MCP against the user's own pixel-detailed mockup (`get_design_context`, file `futW2UQlb5NEqw4aeSRIaV`) — "implement this exact same figma design, no changes" — then corrected across several follow-up rounds where the live build had drifted from that source (wrong grid margins/max-width, extra chrome Figma doesn't have, wrong copy, wrong images). Re-fetching the real Figma node when something looks off is more reliable than trusting an earlier build pass or a compacted-context memory of it. Section order, top to bottom:

1. **Header** (scan layer), in `.grid-12`: title (`h1.case-study__title`, `--type-title-size/-line`, Space Grotesk 500, `text-transform: uppercase` — the underlying `title` content stays sentence case since it's reused elsewhere, e.g. Home's work-list item; the CSS transform is what makes it read uppercase here, not literal-uppercase content) split into two `<span>`s — the first word in `var(--case-accent)`, the rest in `--color-fg-bright`. Subtitle (`--type-subtitle-size/-line`, `--color-fg`) breaks onto two lines at the *first comma* in `oneLiner`, via a template-level split (`CaseStudyLayout.astro`, not baked into the content field) — mirrors how Figma hard-breaks its own subtitle, and doesn't cap the line width with a `ch` value the way the second build pass did (that silently fought the real column width once the grid changed). `headlineStat` at `--type-body-lg-size` uppercase in `var(--case-accent)`. Meta row: `Role · Timeline · Platform?/Industry?` as bordered cards (`--color-border`, `--radius-case`, `flex: 1 0 200px` so they stretch to fill the row, `gap: var(--space-7)`/48px, `padding: var(--space-3)`/12px uniform — all exact Figma values, confirmed via the raw `flex-[1_0_0]`/`p-[12px]`/`gap-[48px]` Tailwind in the fetched design context). **No "Back to home" link** — Figma has none; the gap between the nav bar and the title is a dedicated `--case-title-gap` token (80px).
2. **Main image** (`heroImage`, optional): full-width, via `astro:assets`' `<Image>`.
3. **Brief** (impact layer) — a two-column `.grid-12` row: label spans **4** columns, reads **"BRIEF"** (literal Figma copy) at `--type-title-size` in `var(--case-accent)`; content spans **7** columns (not 8 — see the column-span convention below), holding `problem` → `objective` at `--type-body-size` and the optional pull-quote at its own bespoke `--type-quote-size/-line` (32/48 SemiBold) in `--color-fg-bright`, filling the full 7-column width (no `ch` cap). **`outcome` is not rendered here** — Figma's brief is two paragraphs, not three; the field stays in the schema (all six case studies' frontmatter already has it, and it may find another use later) but this section only renders `problem`/`objective`. The quote has no attribution line — Figma doesn't show one, so `quote.attribution` should stay unset for case studies matching this structure even though the schema still supports it.
4. **KPI grid** (`CaseStudyKPIs.astro`) — bordered/filled cards (`--color-surface-card` fill, `--color-border`, `--radius-case`). Values at `--type-stat-size` (64px) in `var(--case-accent)`, **animated with a one-shot count-up** (0 → target over 1.2s, cubic ease-out, triggered by `IntersectionObserver` at 40% visibility) when the metric's `value` string contains a number — `+60%` counts up with its `+`/`%` preserved, `20+` counts up with its `+` preserved, a non-numeric value like `Live` is left static. Labels at `--type-body-size` in `--color-fg-bright` (bright, not muted).
5. **Interstitial images** — full-bleed panels between sections, matching a pattern Figma uses repeatedly: a standalone image block after the KPI row (`interstitialAfterKPIs`, top-level field) and optionally one after *any* step (`interstitialImage`, a field on each step object, not a separate named top-level field per index). **This was gotten wrong in an earlier pass** — images that are actually their own full-width panel between two steps had been modeled as content embedded inside a step's own column (a 2×2 grid of separate cards, a hand-composed badge overlay on the step's own image). Re-confirmed against the Figma structure: these are siblings of the step content, not children of it. If a future case study's Figma shows a similar full-bleed panel after a step, model it as that step's `interstitialImage`, not as an item in `images`.
6. **Process** (`CaseStudyStep.astro`, one per `steps` entry) — a `.grid-12`-shaped row: number+label column spans **4** columns (the numeral at `--type-title-size` in `var(--case-accent)`, a `label` field beneath it at `--type-subtitle-size`/`--color-caption`, e.g. "RESEARCH"/"IDEATION"/"WIREFRAMING AND TESTING"/"DELIVERY"). **No big step-title heading** — Figma has none; the step's `title` field is used only for the section's `aria-label` (accessibility/document-outline, not visual). Content column spans **8** columns by default (a `step.items` grid — bordered key-problem cards, `--color-border`/`--radius-case`) or **7** columns when the step is plain prose (`step.body`, no `items`) — see the column-span convention below for why 7 not 8 in that case. `step.images` (when a step has its own inline images rather than an `interstitialImage`) render full-width, one per row (`.step__images`, `gap: var(--case-section-gap)`) — same treatment as an `interstitialImage`, not a side-by-side thumbnail grid. Was a 2-up grid for `images.length > 1` until 28 Aug 2026 (PickPal's 3-image step 3 exposed it: 2 images per row wrapped the 3rd awkwardly and rendered every image half-size); removed the pair layout entirely rather than special-casing 3+.
   - **`step.highlights`** (added 26 Aug 2026, Compass Design System's step 2): an optional list of short, scannable takeaways rendered below `body`, each as a single line with a left `border-left: 2px solid var(--case-accent)` bar — for a step whose facts are naturally a list (a set of decisions, features, principles) rather than a second dense paragraph. Added specifically to fix a "wall of text" step: two long paragraphs became one short lead sentence (`body`, kept for context) plus 6 short highlight lines. Pair a short `body` with `highlights`, don't use `highlights` alone — the lead sentence still frames what the list is a list *of*. Available to any step on any case study, not just this one.
   - **`step.video`** (added 26 Aug 2026, Compass Design System's step 4): an optional click-to-play demo/walkthrough clip rendered after a step's images, full-width at `--grid-max-width` like the image figures. `src` is a plain string path into `public/` (e.g. `/work/compass-design-system/clip.mp4`), not the schema's `image()` helper — video isn't part of Astro's image pipeline, so it bypasses `astro:assets` entirely. Renders as a native `<video controls preload="metadata">` — no autoplay, respects the visitor's choice to watch and their bandwidth. `beforeAfter`, `images`, and `video` are **not mutually exclusive** — `CaseStudyStep.astro` renders any/all of them present, in that fixed order (slider, then image grid, then video), since a single step (Compass's "Evolution") can need all three in sequence.
   - **`step.video.loop`** (added 28 Aug 2026, Applicants Manager's Reflection step): the opposite default, for a short interaction clip meant to read as a moving image rather than a video a visitor chooses to play — `autoplay muted loop playsinline`, no `controls`, `preload="auto"`. Explicit per-video opt-in (`loop: true`), not a sitewide switch — the click-to-play default from Compass stays correct for a longer walkthrough clip; this is for a GIF-shaped demo (a few seconds, silent, loops immediately) like the split-pane list-and-preview interaction. `muted` is required for autoplay to actually work in every browser, not just a nicety here.
   - **`step.quotes`** and **`step.stats`** (added 27 Aug 2026, Ocean Homepage's Validation and Ideation/Launch steps): two more optional prose-branch fields, rendered inside `.step__text` only (so they respect the 7/8-col prose-vs-items width), in fixed order after `body`: `body` → `quotes` → `highlights` → `stats`. `step.quotes` is a list of attributed verbatim quotes (`{ text, attribution? }`), each a `<blockquote>` with the same left `border-left: 2px solid var(--case-accent)` treatment as `highlights` but with its own `.step__quote-attribution` caption line — distinct from the top-level `quote` (Brief pull-quote, no attribution, one only). Added for Validation's usability-testing reactions, each needing its own anonymized-by-type source. `step.stats` is a small inline stat callout (`{ value, label? }[]`), value in `var(--case-accent)` at `--type-quote-size` (32px) — deliberately smaller than the KPI row's 64px `--type-stat-size`, since this punctuates a narrative beat mid-step rather than anchoring the page's primary metrics. Works with a single label-less entry for a phrase-stat (Ideation's `3 personas -> 1 personalized layout`) or a full number+label row (Launch's `577 | 5,480 | 4 to 8 min`). First pass used `--type-title-size` for the value and it rendered a full sentence at up to 96px — wrong instinct, corrected before shipping: size the value to the shape of the content (a phrase needs to still read as one line at a sane size), not to "biggest available token."
   - **`formatInline` / inline markup** (`src/utils/formatInline.ts`, added 27 Aug 2026, Ocean Homepage's content refresh): body paragraphs, `highlights`, `quotes`, and `items[].body` are still authored as plain strings in the content collection, but are rendered through this helper via `set:html` instead of raw text interpolation, so a short custom markup can land inside them: `**bold**` for feature/product names (lets a reader scan a dense paragraph and land on what was actually built, not just the sentences around it), `*italic*` for an inline quoted reaction set apart from surrounding prose, and `==text==` for one accent-colored emphasis phrase per field (`.text-emphasis`, global.css) — reserved for the single punchiest clause in a line (e.g. the header subtitle), not a general-purpose highlight tool. Same helper wired into `CaseStudyLayout.astro` for the header subtitle (`oneLiner`), `problem`/`objective`, and the Brief pull-quote. Content is author-controlled (this repo's own copy), not user input, so `set:html`-ing the escaped-then-marked-up result is safe — `formatInline` escapes `&`/`<`/`>` before applying any marker so literal angle brackets in prose can't break the page. Order matters inside the function: `==` before `**` before single `*`, so a bold pair is never partially eaten by the italic pass.
   - **`step.leadImage`** (added 28 Aug 2026, Ocean Homepage's Launch step): a full-width image rendered *inside* the step — after `.step__grid`, before `beforeAfter`/`images`/`video` — solving an ordering problem `interstitialImage` can't: `interstitialImage` always renders as a sibling *after* the whole `<CaseStudyStep>` closes, so it can never appear before a `beforeAfter` slider that's a prop of that same step. `leadImage` exists for exactly the case where a step needs "full design image, then a before/after comparison under it," in that order (the shipped homepage, then legacy-vs-shipped). Same visual treatment as `interstitialImage`/a single `images` entry, just positioned earlier in the render order.
   - **`step.inlineImage`** (added 28 Aug 2026, Ocean Homepage's Ideation step): the opposite of every other step image field — renders *inside* `.step__text` (the content column, so it inherits the 7/8-col width), constrained to `max-width: 22rem` rather than full-bleed, with its own caption. For a process artifact that shouldn't read as a polished product shot at full width — the one case so far is a photo of a physical whiteboard sketch. `margin-top: var(--space-6)` (matches `highlights`/`quotes`/`stats`' own top spacing inside the column), not `--case-section-gap` — it's a paragraph-level element within the column, not a section boundary.
7. **Footer nav**: Previous/Next, project name at `--type-subtitle-size` (was `--text-headline` — far too large next to a "PREVIOUS"/"NEXT" label, fixed 25 Aug 2026 to read as a subtitle, not a second page title). Spacing to the sitewide `Footer.astro` (Email/LinkedIn) was tightened 25 Aug 2026 — two stacked bottom paddings (the page's own `--space-9` trailing padding plus the nav's own `--space-8` bottom padding) were compounding into ~190px of dead space; both are now `--space-6`, landing the footer close behind the nav instead of stranded below it.

**The 4/8/7 column-span convention, confirmed against real Figma pixel math (not eyeballed):** every two-column row in this template (Brief, each Process step) gives its label/number column exactly **4 of 12** columns (423px at this grid's 87.9px column width). The content column takes **8 of 12** (872px) by default — used for anything that isn't plain running prose: image grids, the key-problem items grid. When the content is plain prose (the Brief's paragraphs, a step's `body`-only text), it takes **7 of 12** (760px) instead, deliberately leaving the 12th column empty — Figma does this consistently for reading-line-length, not by accident. Get this wrong (e.g. prose at 8 columns, or a non-prose block at 7) and the page will still look "fine" at a glance but won't match the source pixel-for-pixel.

**Scroll motion (25 Aug 2026), part of the sitewide contract, not a one-off:**
- **Smooth scroll** — the same plain-default Lenis setup as Home (`src/pages/index.astro`; no sticky/pin trickery, that's Home's hero-cover effect specifically), initialized in `CaseStudyLayout.astro`'s own script, guarded against double-init (`document.documentElement.dataset.lenisInit`) since — unlike this page's other init-twice-safe scripts (KPI counters, the before/after slider) — two live Lenis instances would actually fight over scroll control, not just do harmless duplicate work.
- **Scroll-reveal** — any element marked `[data-reveal]` (utility in `global.css`) fades in and rises ~20px the first time it crosses into the viewport, via a single shared `IntersectionObserver` in `CaseStudyLayout.astro`. **One-shot, not a replay** — deliberately unlike Home's hero, which replays every time it's scrolled past and back; a long page read top-to-bottom once shouldn't re-animate content the reader scrolls back over. Marked on: the hero image, brief content, the pull-quote (slightly delayed after the brief text via `--reveal-delay`), meta cards, KPI cards, interstitial images, each step's number/label and text, key-problem item cards, step images, the before/after slider wrapper, and the footer nav — i.e., essentially every image and text block on the page. Grouped items (meta cards, KPI cards, key-problem cards) stagger via `--reveal-delay: {index * 80ms}` rather than popping in together.
- **Reduced-motion and no-JS are both handled without relying on the observer running at all**: `[data-reveal]`'s hidden/offset state only exists inside `@media (prefers-reduced-motion: no-preference)` in `global.css`, so reduced-motion visitors see full content immediately, no JS dependency. `BaseLayout.astro` has a `<noscript>` block forcing `[data-reveal]` back to visible for JS-disabled visitors, since without JS nothing would ever add the `.is-visible` class.
- **Hover lift** — `hero-image`/`interstitial-image`/`brief__image`/`step__image` scale up subtly (1.01–1.02) on hover. Where an image also carries `[data-reveal]` directly (hero/interstitial images), the hover scale and the reveal's rise-transform are combined through shared CSS custom properties (`--hover-scale`, `--reveal-y`) into one `transform` declaration, rather than each trying to set `transform` independently — two separate rules writing to the same property on the same element is a real bug (last one wins/flickers), not just untidy. Images that carry the hover instead on a *child* of the `[data-reveal]` element (`brief__image`, `step__image`, whose parent `<figure>` is what's marked `[data-reveal]`) don't need this — they use a plain `transform: scale()` since there's no second rule competing for the same element's `transform`.

**Real assets, not approximations.** Per the design-to-code skill's explicit rule, every icon/image is either downloaded from its real Figma asset URL or, for images the user re-exported and supplied directly (the before/after pair, and later the three step interstitials for steps 1–3), copied from the user's own files into `src/assets/work/[slug]/` — never hand-drawn. This was violated once and corrected: an early pass hand-composed a "testing results" badge overlay (`TestingBadge.astro`, using 4 separate SVG face fragments positioned with hand-tuned offsets since the exact Figma transform values weren't retained through a context compaction) instead of using the flattened result image Figma actually shows. The user later supplied the real exported image directly; `TestingBadge.astro` was deleted along with the `testingBreakdown` schema field entirely, not just unused — a hand-approximated composite is worse than a real flattened image whenever the design already provides one, and shouldn't be recreated for a future case study's testing/results section just because it existed once for this one.

**Icon rule, reiterated:** every directional/interactive glyph on this page is inline SVG — never a Unicode arrow character.

**Copy rules, sitewide, not just this template (25 Aug/26 Aug 2026):** no em dashes, and no ampersands, anywhere in real content — problem/objective, step body/item text, titles, labels, metric labels, industry/platform meta values, image `alt` text, markdown-body prose in the still-TODO stubs, everything. The user flagged both directly as reading as AI-written. Write "and" instead of "&", and use a comma, period, or colon instead of an em dash, depending on what the sentence needs. Both rules are sitewide, not case-study-specific — the eeSea stub's own TODO note had one too, and that got fixed in the same pass. Write copy for the still-unwritten case studies with this in mind from the start rather than fixing it after. **Exception:** `&&`/`&` as a genuine code operator (JS logical AND, a bitwise mask, a URL query separator) is not content and is unaffected — this only applies to text a visitor reads.

## Do's and Don'ts

### Do:
- **Do** keep the whole site on one fixed dark/warm palette regardless of system color scheme — see Colors. This now includes About and every case study, not just Home.
- **Do** give any repeatable entrance animation real enter/exit logic (a class toggled by an observer, not a one-shot "animate once" pattern) when the brief calls for a replay — that was this round's explicit, binding requirement.
- **Do** keep the amber/warm accent instead of drifting back toward blue/purple — it's a deliberate choice against the most common generic-AI-design fingerprint, not an arbitrary one, and as of 25 Aug 2026 it's the *only* accent anywhere on the site — Signal Blue is fully retired, not just unused.
- **Do** treat suppressing a text-transform on placeholder content as the right fix when real content isn't authored yet, rather than leaving mangled-looking placeholder text in front of a reviewer or a recruiter.
- **Do** use `.grid-12` (1280px cap) for every case-study section, on every case study — not `--container-max-full`/`--container-max-wide`, which the case-study template moved off of entirely on 25 Aug 2026. See Layout and the Case study template section.
- **Do** treat the case-study template (grid, type scale, color mechanism, section order, motion) as fixed across all six projects — only step count, images, `accentColor`, and copy vary. See the Case study template section's opening statement.
- **Do** prefer a real, designer-exported flattened image over hand-composing an overlay/badge/graphic in code when Figma already shows one — see the `TestingBadge.astro` removal in the Case study template section.
- **Do** write case-study copy without em dashes — commas, periods, or colons instead. A direct, standing content rule, not a one-time cleanup.

### Don't:
- **Don't** reintroduce a no-scroll single-viewport homepage, a sliding menu-selector, or DM Sans as the display voice — all explicitly retired from the second round.
- **Don't** reintroduce Blueprint's sharp corner-tick motif, mono/uppercase nav labels, or a fixed-palette header/footer — retired from the first round.
- **Don't** add a kicker/eyebrow label above a heading as a default move — `craft-floor.md` bans it as a category default. The Home hero's "Senior Product Designer" eyebrow is the one standing exception, added 24 Aug 2026 on the user's explicit, direct request (see the Hero component's "Name structure" note) — a pinned brief overrides the general ban for that one instance; it doesn't reopen the door for eyebrows elsewhere. The work section's "N projects · Xeneta · 2024–2026" meta line still sits *below* its headline, not above.
- **Don't** add an illustrated avatar, character, or portrait — declined by the user in every round so far, including this one, despite both of their reference sites using one.
- **Don't** reintroduce the adaptive light/dark "Paper" palette or a separate blue accent for non-Home pages — retired 25 Aug 2026, on the user's own direct, twice-confirmed instruction (sitewide, fully fixed). If a future request wants light mode back for accessibility reasons, that's a real, legitimate reason to revisit this — but it's a new decision to make with the user, not a default to quietly restore.
- **Don't** assume the case-study template is still narrow, unstyled, or running the Karan Thakur–reference visual — it's had several passes now, the last few specifically correcting drift from the user's real Figma (grid margins/max-width, extra chrome like a "Process" heading and per-step titles Figma doesn't have, wrong images, wrong copy). `about.astro` no longer exists — the About page and both navs' link to it were removed sitewide 29 Aug 2026; don't recreate it as a fix for a stale reference elsewhere in this doc. And only Applicants Manager has real `heroImage`/`steps`/etc. content; the other five case studies still render via the plain markdown-body fallback until someone writes their content in the same shape — every field on a step (`interstitialImage`, `beforeAfter`, `label`, `items`) is optional, so those five keep rendering exactly as before until they get real content in this same shape (see the Case study template section's opening statement).
- **Don't** let a project's `--case-accent` leak into interactive elements — hover states, focus rings, links stay `--color-accent` (sitewide orange) always, even on a page whose text accent is a different color. This is a direct, explicit user instruction, not a default worth relaxing for consistency's sake.
- **Don't** merge the new `--type-*` case-study type scale into the original `--text-*` scale without deliberately deciding to also remap Home — they currently coexist on purpose (see Typography's 25 Aug entry); Home was left untouched specifically to avoid regressing already-shipped, approved work.
- **Don't** add a visible "Process" section heading or a big per-step title above a step's content — Figma's canonical structure has neither; a step's only heading treatment is its number + `label` in the left column, and the section's accessible name comes from `aria-label`, not a visible `<h2>`/`<h3>`.
- **Don't** recreate `TestingBadge.astro` or a `testingBreakdown`-style structured-data-to-visual-overlay field for a future case study — it was deleted specifically because hand-composing a result visual in code is worse than using the real flattened image the design already provides.
