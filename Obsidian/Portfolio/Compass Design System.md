---
status: draft — content complete pending screenshots
source: restructured to match the Applicants Manager page layout (Title / Subtitle / Main metric / Meta row / Brief / KPIs / Steps)
---

## A note before you read this

This version is laid out to match your `/work/applicants-manager` page structure exactly — same section order, same shape — rather than the Header/Impact/Process template from before. I picked "Logistics & Freight Tech" for Industry and "40+ components shipped" as the headline metric, per your last answers.

**Update:** I got into the actual Figma file through your browser (Claude in Chrome) rather than the rate-limited Figma MCP, and pulled real, verified specifics that replace some of the earlier paraphrased content: the exact grid spec, the real spacing scale, the typography hierarchy rule, and — genuinely valuable — a dedicated Accessibility page with actual measured contrast ratios per component, not just a "100% WCAG AA" claim. The file also has a full page list: 10 foundation pages (Colors, Grid, Text styles, Elevations, Icons, Illustrations, Spacing, Accessibility, Sandbox Template, Xeneta Logo), 31 component pages, 2 pattern pages (Upsell modals, Custom notification), and a "🏗 In construction 🏗" section (RMS Table, Card, Saved views) showing the system is still actively growing. All of that is folded into the steps below.

Applicants Manager runs 4 numbered steps (Research → Ideation → Wireframing and Testing → Delivery) because that's the shape *its* process took. Compass DS's process took a different shape — audit, then build, then govern, then evolve — so I mapped it to 4 steps that fit this project's own story rather than forcing Applicants Manager's exact stages onto it, per your note that the structure should carry over but not necessarily the same steps. Swap the step count or labels freely if a different breakdown reads better once it's laid out.

Image slots are marked `[IMAGE: ...]` — drop screenshots in when ready.

---

# COMPASS

## Design System

**Subtitle:** Built from zero for a platform with no shared visual language, into the foundation every product team designs and ships on.

**Main metric:** +40 components shipped

**Meta row**
| Role | Timeline | Platform | Industry |
|---|---|---|---|
| Senior Product Designer | May 2024 – Jul 2024 (build), ongoing ownership after | Web App (Figma + Storybook, built on MUI/React) | Logistics & Freight Tech |

`[IMAGE: hero — the Compass cover/overview screen, or a component-library grid shot]`

---

## BRIEF

Xeneta had no design system when I joined. The same button showed up orange in one flow and blue in another, sometimes square-cornered and sometimes rounded — text styles, spacing, and grid had no shared source of truth anywhere in the product. Designers were copy-pasting old screens just to fake consistency; developers were rebuilding the same UI patterns from scratch every time a new screen shipped. Beyond the friction, it was a credibility problem: the inconsistency made the platform feel less serious and premium than "the leading ocean and air freight rate benchmarking platform" needed to feel.

> "How could I give every product team the same design language, without slowing any of them down?"

---

## KPIs

| +40 | 5/5 | 100% |
|---|---|---|
| Components shipped in Figma & Storybook | Product teams adopted (Ocean & Air) | Components passing WCAG AA |

---

## 01 — AUDIT & FOUNDATIONS

Before designing anything new, I audited every existing product screen to catalog inconsistencies and identify what could be salvaged and standardized rather than redesigned from scratch. That audit became the foundation for an atomic design approach: atoms first (grid, color, type), then molecules, then full patterns (upsell modals, notifications, entire page templates).

**Inconsistent CTAs** — Color and corner radius varied screen to screen, with no documented source of truth.

**Duplicated design work** — Designers were copy-pasting old screens to reuse "foundations" that didn't formally exist.

**Rebuilt dev patterns** — Developers recreated the same UI patterns from scratch on every new screen.

**Weaker brand perception** — Visual inconsistency made the platform read as less premium than its market position demanded.

`[IMAGE: before-state screens showing CTA/spacing inconsistency across Ocean and Air]`

---

## 02 — BUILDING THE SYSTEM

The first milestone was an Alpha Style Guide: the foundational layer (grid, color, spacing, type, iconography) plus the ~20 most-used components rebuilt properly — buttons, inputs, tables, alerts, tabs, content switcher, date picker, radio buttons, checkboxes, dropdowns. Every component shipped with matching design tokens, built in lockstep with the frontend team so Figma and Storybook stayed in sync from day one instead of drifting apart the way most systems do.

The grid runs a hybrid model with a 1600px max container width: fluid from 1024–1600px (12 columns, 24px gutter, 32px margin), fluid from 600–1023px (8 columns, 16px gutter, 24px margin), and fluid from 329–599px on the smallest screens (4 columns, 16px gutter, 16px margin). That fixed 1600px ceiling was a deliberate trade-off — a fully fluid grid made charts and tables balloon to unreadable sizes on wide monitors, undermining the data legibility the product depends on. Spacing runs on an 8px base unit (0, 2, 4, 8px for small gaps; 12–24px for medium; 32–80px for large; 96–128px for extra-large), with a documented rule to default to multiples of 8px and only drop to smaller increments when a layout genuinely needs it.

Color split into two brand scales (Ocean blue, Air purple) plus shared neutrals and semantic states, layered with a 20+ hue data-visualization palette carrying its own documented usage rules — distinct hues per series, a reserved tint for showing spread, red locked to error states only. Typography stayed deliberately small at ten text styles across an H1–H4 hierarchy, with a documented sequencing rule: you can only use a heading level after the one above it has been used on that page (skip from H1 straight to H3, and you're using it wrong) — a small rule that keeps page structure from getting arbitrary. The library grew to 40+ components — each with its own set of variants for theme, style, icon placement, and state, easily 100+ variants for a component like Button alone — across 31 dedicated component pages (from Alert and Badge through Dropdown, Navigation bar, Table, and Toast, to less obvious ones like Watchlist dropdown and Status page), each documented with correct and incorrect usage examples, plus 2 higher-level patterns (upsell modals, custom notifications).

One decision shaped how fast any of this could actually ship: whether to build the component library from scratch in code, or base it on an existing one. I chose to base it on MUI (Material UI) rather than starting from zero — it was open enough underneath to still build fully custom, Xeneta-specific components (our tables, our date pickers) without fighting the library's opinions, while keeping the implementation side simpler and faster for the frontend team than a from-scratch build would have been. MUI became the code foundation, not the source of truth — Figma and the documented system stayed that.

`[IMAGE: Alpha Style Guide foundations — grid, color scales, type scale — or the Figma component library overview]`

---

## 03 — GOVERNANCE & COLLABORATION

A system only holds up if the people using it can trust it and help shape it. Every color, component, and pattern had to clear WCAG guidelines before shipping — accessibility built into the definition of "done," not audited afterward. That's not just a claim: there's a dedicated Accessibility page in the system documenting measured contrast ratios component by component — alerts, badges, and banners at 4.38:1, breadcrumbs at 3.69:1, buttons and text links at 3.14:1, toast notifications at 6.81:1 — so accessibility compliance is something anyone on the team can verify against the documentation, not just trust.

I set up a recurring biweekly sync between design and frontend from the very first components, not after the system existed, treating implementation fidelity as part of the design process rather than a handoff problem. And once the Alpha Style Guide shipped, I documented how any designer could propose new components or rule changes — choosing a system that could outgrow its original author over one that bottlenecked on me.

`[IMAGE: the Accessibility page's contrast-ratio documentation, or the design-frontend sync in practice]`

---

## 04 — EVOLUTION

The system never stopped growing after the Alpha Style Guide shipped — the file still has an active "in construction" section today, with new components (an RMS table, a card pattern, saved views) being built as the product needs them, governed by the same contribution model rather than as one-off exceptions.

One of my later initiatives was migrating the system's foundations into Claude Design, enabling the broader product team to generate artifacts, mockups, and wireframes that stayed consistent with Compass by default. I uploaded the full library and worked with the team to encode the documentation as reusable skills, so new AI-assisted design work inherited the system's rules and constraints automatically instead of needing manual QA against the system afterward.

`[IMAGE: before/after — a screen built pre-Compass next to the same flow rebuilt on the system, or the Claude Design integration in use]`

---

**Footer nav:** ← Previous case study · Next case study →
