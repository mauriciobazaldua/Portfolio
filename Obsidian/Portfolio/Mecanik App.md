---
status: draft, content complete, image sourcing limited by design (see note)
source: laid out to match the /work/applicants-manager, /work/compass-design-system, /work/ocean-homepage, /work/carrier-scorecard, and /work/caja page structure (Title / Subtitle / Main metric / Meta row / Brief / KPIs / Steps)
---

## A note before you read this

Source material: your "Study Case #2: Mecanik App" deck (slides 69 to 108, with a gap in the middle covering slides you didn't include, so this draft skips straight from the design principles to the results without a documented ideation-exploration phase in between, flag if there's more you want folded in).

Same confidentiality treatment as your other pre-Xeneta projects: **Kavak** stays named, since it's a real former employer and not a research participant. The one inspector you interviewed for context is anonymized to a role and location descriptor rather than a name, same rule as every enterprise participant in the Xeneta case studies.

Image note, since you flagged it: the only visuals available for this one are the screenshot crops inside the deck itself, phone mockups with the Telcel status bar and Spanish UI text visible, not clean isolated exports. I've marked image slots against the specific before/after pairs the deck actually shows (Documentation upload, the Auto photo checklist, Estación 1 inspection questions) rather than inventing a hero shot that doesn't exist in your source material. Worth deciding before this goes live whether cropped screenshots read fine at portfolio scale or whether it's worth a quick reshoot in Figma first.

Timeline: Feb 2022 to Apr 2022, per your own recollection rather than something the deck confirms outright. Worth a quick gut check against LinkedIn or an old calendar before this ships, since you flagged it as "if I'm not mistaken."

Same treatment for Step 05: the "within the first month" framing on the inspection-time drop is your own recollection too, the deck's KPI slide just states the before and after numbers with no time window attached. Flagging it the same way in case it's worth double-checking before this ships.

The KPI row's "1000+ mechanics across all of Kavak" and the "10 usability tests" figure are also your own recollection, not something the deck states, the deck's validation section only documents the end to end developer prototype. Added a line into Step 03 so the copy matches the KPI instead of contradicting it. Same flag as the others, worth a gut check before this ships.

Same style rules as the rest: no em dashes, en dashes, or ampersands, bold marks feature and product names for scanning, `==this syntax==` marks extra emphasis matching the live highlight treatment. The deck's four named UX principles (Intuition, Visibility of system status, Simplicity, Filler content) are your own framing, kept as-is and bolded since they're effectively the feature set of this redesign.

Image slots are marked `[IMAGE: ...]`.

---

# MECANIK APP

## Rebuilding the tool Kavak's inspectors used to evaluate every car on the platform

**Subtitle:** Redesigned Kavak's inspector app around real-time feedback and clarity, cutting average inspection time by a fifth.

**Main metric:** Average inspection time cut from 30 to 24 minutes

**Meta row**
| Role | Timeline | Platform | Industry |
|---|---|---|---|
| Product Designer | Feb 2022 to Apr 2022 | Mobile App | Automotive Marketplace |

`[IMAGE: before and after, the Documentation upload screen next to its redesigned version]`

---

## BRIEF

**Kavak** is Latin America's largest platform for buying and selling pre-owned cars. I worked on the Operations vertical, building the internal tools Kavak's own staff use rather than the customer-facing product, and this was the first project where a Product Designer was embedded in that initiative at all. The tool in question, **Mecanik App**, is what inspectors use to evaluate a car before Kavak buys or resells it: photos, documentation, and a station-by-station mechanical checklist. Going in, the honest starting point was that the team did not know its users well. Nobody had sat with an inspector through a real inspection yet.

---

## KPIs

| 1000+ | 30 to 24 min | 10 |
|---|---|---|
| Mechanics using the app across all of Kavak | Average inspection time, before to after | Usability tests run on the redesigned flow |

---

## 01. RESEARCH

I sat down with an inspector at one of Kavak's hubs to walk through a real inspection rather than guess at the pain points from a distance. The flow they were using gave almost no feedback: uploads that didn't confirm they'd worked, a long uniform list of yes-or-no questions with no sense of progress, and a handful of documentation steps that existed on paper but that nobody downstream actually used.

`[IMAGE: the original Mecanik flow, the Documentos and Inspección screens as they existed before the redesign]`

---

## 02. DESIGN

I redesigned the flow around four principles, and treated them as the actual feature list for this project rather than a background methodology.

**Intuition**: the flow explains itself as the inspector moves through it, instead of assuming they already know what a field like "GPS" or "Consola" requires a photo of.

**Visibility of system status**: every upload now confirms itself, a photo that saved shows a green check, one that failed shows a clear retry state, so an inspector never has to wonder whether a step actually went through.

**Simplicity**: multi-part follow-up questions, like whether a fault has a witness light and what it says, moved out of a single cluttered screen and into a focused step of their own.

**Filler content removed**: photo requirements and questions that added no value downstream were cut outright, and a short pre-inspection screen was added so inspectors know what to expect before the flow starts rather than discovering it mid-task.

`[IMAGE: before and after, the Estación 1 inspection questions, cluttered single screen versus the simplified flow]`

---

## 03. VALIDATION

I ran 10 usability tests on the redesigned flow before it went to engineering. This was also the first time I'd worked this closely with engineering on a design system integration, and getting their buy-in mattered as much as getting the design right, so I built an end to end prototype of the full redesigned flow, not just key screens, so developers could see exactly how the pieces connected before a single line of it got built.

`[IMAGE: the end to end prototype, the full inspection flow in sequence]`

---

## 04. LAUNCH AND SCALE

The redesigned flow shipped as **Mecanik 2.0**, and the number that mattered followed directly from the fixes: within the first month, average inspection time dropped from 30 minutes to 24, a fifth faster, on a task inspectors run many times a day.

Being the first Product Designer this initiative had worked with, this project ended up mattering beyond its own scope. It's what convinced the team that a full UX methodology, not just a visual pass, was worth the time, and it's the reason later, larger projects gave me the room to run proper research and validation from the start instead of having to argue for it each time.

`[IMAGE: the shipped Mecanik 2.0 flow, Documentación and inspection screens]`

---

**Footer nav:** Previous case study, Next case study
