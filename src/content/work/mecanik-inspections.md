---
title: "Redesigning car inspections"
oneLiner: "Redesigned Kavak's inspector app around real-time feedback and clarity, cutting average inspection time by a fifth."
headlineStat: "20% FASTER INSPECTIONS"
company: "Kavak"
role: "Product Designer"
timeline: "Feb 2022 to Apr 2022"
platform: "Mobile App"
industry: "Automotive Marketplace"
priority: 4
accentColor: "#4DBFA8"
problem: "Kavak's inspectors used Mecanik App, a photo, documentation, and station-by-station mechanical checklist, to evaluate every car before Kavak bought or resold it. The flow gave almost no feedback, and going in, the team did not know its users well: nobody had sat with an inspector through a real inspection yet."
objective: "I was the first Product Designer embedded in Kavak's Operations vertical, the team building internal tools for Kavak's own staff, and set out to rebuild Mecanik App around what inspectors actually needed to see mid-inspection."
outcome: "Average inspection time dropped from 30 to 24 minutes, a fifth faster, within the first month of Mecanik 2.0 shipping."
metrics:
  - label: "Mechanics using the app across all of Kavak"
    value: "1000+"
  - label: "Average inspection time, down from 30 minutes"
    value: "24 min"
  - label: "Usability tests run on the redesigned flow"
    value: "10"
heroImage:
  src: "../../assets/work/mecanik-inspections/main-image.png"
  alt: "The redesigned Mecanik App: the Documentacion checklist and inspection flow"
thumbnail:
  src: "../../assets/work/mecanik-inspections/thumbnail.png"
  alt: "Redesigning car inspections thumbnail: the Mecanik App icon on a teal background"
steps:
  - title: "Research"
    label: "RESEARCH"
    body:
      - "I sat down with an inspector at one of Kavak's hubs to walk through a real inspection rather than guess at the pain points from a distance. The flow they were using gave almost no feedback: uploads that didn't confirm they'd worked, a long uniform list of yes-or-no questions with no sense of progress, and a handful of documentation steps that existed on paper but that nobody downstream actually used."
    interstitialImage:
      src: "../../assets/work/mecanik-inspections/step-1-interstitial.png"
      alt: "The original Mecanik flow: the Inspeccion and Resumen screens as they existed before the redesign"
  - title: "Design"
    label: "DESIGN"
    body:
      - "I redesigned the flow around four principles, and treated them as the actual feature list for this project rather than a background methodology."
    items:
      - title: "Intuition"
        body: "The flow explains itself as the inspector moves through it, instead of assuming they already know what a field like GPS or Consola requires a photo of."
      - title: "Visibility of system status"
        body: "Every upload now confirms itself, a photo that saved shows a green check, one that failed shows a clear retry state, so an inspector never has to wonder whether a step actually went through."
      - title: "Simplicity"
        body: "Multi-part follow-up questions, like whether a fault has a witness light and what it says, moved out of a single cluttered screen and into a focused step of their own."
      - title: "Filler content removed"
        body: "Photo requirements and questions that added no value downstream were cut outright, and a short pre-inspection screen was added so inspectors know what to expect before the flow starts rather than discovering it mid-task."
    interstitialImage:
      src: "../../assets/work/mecanik-inspections/step-2-interstitial.png"
      alt: "The Documentos, Fecha, and Estacion 1 inspection screens before the redesign, the cluttered starting point these four principles fixed"
  - title: "Validation"
    label: "VALIDATION"
    body:
      - "I ran 10 usability tests on the redesigned flow before it went to engineering. This was also the first time I'd worked this closely with engineering on a design system integration, and getting their buy-in mattered as much as getting the design right, so I built an end to end prototype of the full redesigned flow, not just key screens, so developers could see exactly how the pieces connected before a single line of it got built."
    interstitialImage:
      src: "../../assets/work/mecanik-inspections/step-3-interstitial.png"
      alt: "The end to end prototype: Estacion 3 inspection questions and the Resumen offer screen in sequence"
  - title: "Launch and scale"
    label: "LAUNCH AND SCALE"
    body:
      - "The redesigned flow shipped as **Mecanik 2.0**, and the number that mattered followed directly from the fixes: within the first month, average inspection time dropped from 30 minutes to 24, a fifth faster, on a task inspectors run many times a day."
      - "Being the first Product Designer this initiative had worked with, this project ended up mattering beyond its own scope. It's what convinced the team that a full UX methodology, not just a visual pass, was worth the time, and it's the reason later, larger projects gave me the room to run proper research and validation from the start instead of having to argue for it each time."
    beforeAfter:
      before:
        src: "../../assets/work/mecanik-inspections/step-4-before.png"
        alt: "Before: the original Mecanik flow, dense screens with no upload feedback or progress"
      after:
        src: "../../assets/work/mecanik-inspections/step-4-after.png"
        alt: "After: the shipped Mecanik 2.0 flow, Documentacion, Agenda de inspeccion, and Estacion 1 redesigned for clarity and feedback"
---

Redesigning car inspections: rebuilding Mecanik App, the tool Kavak's
inspectors used to evaluate every car on the platform, around what they
actually needed to see mid-inspection. Structured content lives in the
frontmatter `steps` above; this body isn't rendered while `steps` has
entries (see CaseStudyLayout.astro).
