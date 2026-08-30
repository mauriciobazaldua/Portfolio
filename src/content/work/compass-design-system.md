---
title: "Compass Design System"
oneLiner: "Built from zero for a platform with no shared visual language, into the foundation every product team designs and ships on."
headlineStat: "40+ COMPONENTS SHIPPED"
company: "Xeneta"
role: "Senior Product Designer"
timeline: "May 2024 – Ongoing"
platform: "Figma, Storybook, Claude"
industry: "Logistics and Freight Tech"
priority: 1
problem: "Xeneta had no design system when I joined. The same button showed up orange in one flow and blue in another, sometimes square-cornered and sometimes rounded. Text styles, spacing, and grid had no shared source of truth anywhere in the product. Designers were copy-pasting old screens just to fake consistency, and developers were rebuilding the same UI patterns from scratch every time a new screen shipped."
objective: "Beyond the friction, it was a credibility problem: the inconsistency made the platform feel less serious and premium than \"the leading ocean and air freight rate benchmarking platform\" needed to feel."
outcome: "The system shipped 40+ components across Figma and Storybook, was adopted by all 5 product teams across Ocean and Air, and reached 100% WCAG AA compliance."
metrics:
  - label: "Components shipped in Figma and Storybook"
    value: "40+"
  - label: "Product teams adopted (Ocean and Air)"
    value: "5/5"
  - label: "Components passing WCAG AA"
    value: "100%"
heroImage:
  src: "../../assets/work/compass-design-system/main-image.png"
  alt: "Compass Design System overview: 40+ components, 100% WCAG AA compliance, 5 initiatives on Ocean and Air, and a palette tailored for data visualization"
thumbnail:
  src: "../../assets/work/compass-design-system/thumbnail.png"
  alt: "Compass Design System thumbnail: a compass icon on a dark blue gradient"
quote:
  text: "How could I give every product team the same design language, without slowing any of them down?"
interstitialAfterKPIs:
  src: "../../assets/work/compass-design-system/brief.png"
  alt: "The Compass Design System library in Figma, showing the Dropdown component's variants and parts alongside its documented styles"
steps:
  - title: "Audit and foundations"
    label: "AUDIT AND FOUNDATIONS"
    body:
      - "Before designing anything new, I audited every existing product screen to catalog inconsistencies and identify what could be salvaged and standardized rather than redesigned from scratch. That audit became the foundation for an atomic design approach: atoms first (grid, color, type), then molecules, then full patterns (upsell modals, notifications, entire page templates)."
    items:
      - title: "Inconsistent CTAs"
        body: "Color and corner radius varied screen to screen, with no documented source of truth."
      - title: "Duplicated design work"
        body: "Designers were copy-pasting old screens to reuse \"foundations\" that didn't formally exist."
      - title: "Rebuilt dev patterns"
        body: "Developers recreated the same UI patterns from scratch on every new screen."
      - title: "Weaker brand perception"
        body: "Visual inconsistency made the platform read as less premium than its market position demanded."
    interstitialImage:
      src: "../../assets/work/compass-design-system/step-1.png"
      alt: "Two overlapping Xeneta product screens before Compass, showing inconsistent dashboard layouts across Ocean and Air"
  - title: "Building the system"
    label: "BUILDING THE SYSTEM"
    body:
      - "The first milestone was an Alpha Style Guide, built in lockstep with the frontend team so design and code never drifted apart."
    highlights:
      - "Foundational layer: grid, color, spacing, type, and iconography"
      - "~20 most-used components rebuilt: buttons, inputs, tables, alerts, tabs, and more"
      - "Hybrid grid, fluid on mobile and fixed-max on desktop, for chart and table legibility"
      - "Two brand color scales (Ocean blue, Air purple) plus a 20+ hue data-visualization palette"
      - "Ten text styles, chosen for clarity over scale completeness"
      - "Grew to 40+ components, each documented with correct and incorrect usage"
    interstitialImage:
      src: "../../assets/work/compass-design-system/step-2.png"
      alt: "Compass foundations documentation: the fluid grid system and breakpoints, elevation styles, spacing scale, and UI color palette"
  - title: "Governance and collaboration"
    label: "GOVERNANCE AND\nCOLLABORATION"
    body:
      - "A system only holds up if the people using it can trust it and help shape it. Every color, component, and pattern had to clear WCAG guidelines before shipping, accessibility built into the definition of \"done,\" not audited afterward."
      - "I set up a recurring biweekly sync between design and frontend from the very first components, not after the system existed, treating implementation fidelity as part of the design process rather than a handoff problem. And once the Alpha Style Guide shipped, I documented how any designer could propose new components or rule changes, choosing a system that could outgrow its original author over one that bottlenecked on me."
    interstitialImage:
      src: "../../assets/work/compass-design-system/step-3.png"
      alt: "The Compass component library in Storybook, showing the Ocean, Air, neutral, and semantic color palettes"
  - title: "Evolution"
    label: "EVOLUTION"
    body:
      - "One of my later initiatives was migrating the system's foundations into Claude Design, enabling the broader product team to generate artifacts, mockups, and wireframes that stayed consistent with Compass by default. I uploaded the full library and worked with the team to encode the documentation as reusable skills, so new AI-assisted design work inherited the system's rules and constraints automatically instead of needing manual QA against the system afterward."
    beforeAfter:
      before:
        src: "../../assets/work/compass-design-system/slider-before.png"
        alt: "Before: the Xeneta dashboard prior to Compass"
      after:
        src: "../../assets/work/compass-design-system/slider-after.png"
        alt: "After: the Xeneta dashboard rebuilt on Compass"
    images:
      - src: "../../assets/work/compass-design-system/step-4-1.png"
        alt: "Compass typography documentation: font selection rationale and the full text style scale"
    video:
      src: "/work/compass-design-system/design-system-interaction.mp4"
      caption: "The Compass Design System library and components in use"
---

Compass Design System: built from zero for a platform with no shared visual
language, into the foundation every product team designs and ships on.
Structured content lives in the frontmatter `steps` above; this body isn't
rendered while `steps` has entries (see CaseStudyLayout.astro).
