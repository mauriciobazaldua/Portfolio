# Portfolio information architecture

Produced via `/organize`, building on [PROJECT-CONTEXT.md](./PROJECT-CONTEXT.md) (three audiences) and [PORTFOLIO-STRATEGY.md](./PORTFOLIO-STRATEGY.md) (locked scope: 4 case studies, three-layer structure per case study, anonymize-by-default). Structure only — no wireframes, layout, or copy yet. No visualization requested; structure below is markdown/tables.

**Revised 20 Aug 2026, then reverted 20–21 Aug 2026 — Home is the work index again.** A no-scroll "Title Screen" direction briefly moved the work grid to a separate `/work` page (see git history / prior revision of this file for that reasoning). That direction was rejected by the user as "empty and amateur" and replaced with a scrolling homepage (hero, then a "Selected work" list) built directly on the page — closer to the *original* IA decision than to the no-scroll one, just built with different visual mechanics (a sticky-pinned hero the work list scrolls up and covers, rather than a static grid). **`/work` as a standalone index page no longer exists.** The site map below reflects current reality, not the no-scroll revision.

**Revised again 21 Aug 2026 — scope grew from 4 to 6 case studies.** See [PORTFOLIO-STRATEGY.md](./PORTFOLIO-STRATEGY.md)'s 21 Aug decision: Datalink dropped, Applicants Manager and PickPal added from a pre-Xeneta portfolio, Compass Design System added as a new (not-yet-written) case study. Every count/list below is updated for 6, not 4 — the "6-7 cards before a taxonomy is needed" note from the original version of this doc is now the live number to watch, not a hypothetical.

## IA assessment

At this scale (4 case studies, 3 audiences, no user accounts or dynamic content) the risk isn't a missing taxonomy — it's over-building one. The real IA problem this project has is the one named in the strategy brief: the same content needs to serve a 15-second scan and a 15-minute read *without two separate structures*. That's solved by depth-layering within pages, not by adding more navigation.

Concretely: recruiters should never have to click past the home page to get their signal. Hiring managers should get what they need within one case-study page without scrolling to the bottom. Designer peers scroll all the way. One structure, three stopping points.

## Site map (current)

```
/ (Home)                              — hub AND work index. Scrolling hero, then the full "Selected work" list.
├── /work/ocean-homepage              — case study, full depth
├── /work/compass-design-system       — case study, full depth (once source material exists)
├── /work/carrier-scorecard           — case study, full depth
├── /work/eesea-migration             — case study, full depth (Schedules + Ports & Terminals as one story)
├── /work/applicants-manager          — case study, full depth (pre-Xeneta, OCC Mundial)
└── /work/pickpal                     — case study, lower priority (pre-Xeneta, IW)
```

No `/about` page — removed sitewide 29 Aug 2026 (page deleted, both navs' link removed). This site map is otherwise stale against the current build (missing later additions like Mecanik, doesn't reflect eesea-migration's `draft` status) and due a full resync, not attempted here since only the About removal was in scope for this pass.

No `/work` index page and no `/contact` page. `Contact` is a header/footer link on every page (mailto/LinkedIn), not a destination page.

## Navigation pattern: hub-and-spoke, deliberately flat

**Home's own chrome:** a minimal floating nav (About · Contact) rather than the conventional header — Home is its own visual moment (see the direction-contract history in `src/layouts/BaseLayout.astro`). Once a visitor is inside About or a case study, the conventional header returns (`Home · About`, plus Résumé) — no "Work" nav item, since Home already is the work index; case studies are reached by scrolling Home's list or via case-study-to-case-study footer nav.

**Why Home carries the work list again, not a separate `/work` page:** this reverts the brief no-scroll experiment. Recruiters get the scan-in-seconds signal (name, then the project list) without an extra click, matching the very first IA decision this project made and the reasoning behind it (see PROJECT-CONTEXT.md's audience definitions) — the no-scroll launcher traded that away for a cleaner single-viewport moment, and the user's own reaction to seeing it live ("empty and amateur") settled which trade-off was actually right for this audience.

**Why still no `/contact` page:** Unchanged from the original reasoning — a dedicated contact page implies either a form (cuts against the "minimal/no visitor tracking" ethical stance in PROJECT-CONTEXT.md, no product need for it) or just repeats links that are cheaper to resolve directly.

**Within each case study — depth-layered, not URL-separated:**

```
/work/[case-study]
├── Header (scan layer)         — title, one-liner, headline stat, role, timeline
├── Impact section (impact layer) — problem, objective, outcome paragraph, key metrics
├── Process section (process layer) — research, decisions, verbatim quotes, before/after, Figma refs
└── Footer nav                  — ← Back to home · Next case study →
```

This is **one URL per case study**, not three. A hiring manager reads the header + impact section and stops — nothing forces them further. A designer peer keeps scrolling. Splitting these into separate pages (`/work/x/overview`, `/work/x/process`) would force every audience through a click they don't need; a single page with a clear visual/content break between layers serves progressive disclosure better than fragmenting the URL structure. (This in-page section order and scroll behavior is the boundary with `/journey` and `/wireframe` — IA says *what sections exist and in what order*; they decide the moment-to-moment experience of scrolling/expanding through them.)

**Sticky in-page jump nav** (Overview / Process / Outcome) is worth adding once a case study page is long enough that a designer peer scrolling through quotes and Figma references could lose track of where they are relative to the whole story — this is a `/wireframe` decision on when it's needed, but IA's wayfinding requirement is: **a reader should always be able to tell which layer they're in and jump back to the header.**

## Taxonomy

Flat, 6 items, still no categories or tags — but this is now the number the original doc's own threshold ("6-7 cards before a second organizing layer is needed") was watching for. Not crossed yet; don't build filtering/categorization pre-emptively, but the next addition should trigger revisiting this section rather than just appending a 7th card silently.

**Two explicit non-default decisions:**
- The eeSea migration is modeled as *one* case study even though the underlying source material describes two products (Ocean Schedules and Ports & Terminals) as separate PRDs with separate timelines — they share one strategic narrative and splitting them would dilute the strongest single story into two weaker ones.
- Applicants Manager and PickPal are pre-Xeneta work from a different employer (OCC Mundial) and an earlier startup (IW), mixed into the same flat list as the four Xeneta projects rather than grouped separately by employer. Deliberate — a recruiter scanning by *what the work demonstrates* (scale, systems thinking, craft, strategic complexity, cross-employer rigor, 0-to-1 breadth) is better served than one scanning by *which company paid for it*.

## Labeling guide

Case study titles (final copy is `/articulate`'s call, not IA's — these are working labels):

| URL slug | Working title | One-line label (for the grid card) | Priority |
|---|---|---|---|
| `ocean-homepage` | Ocean Homepage | From search-driven to recommendation-driven | 1 |
| `compass-design-system` | Compass Design System | TBD — no source material yet | 2 |
| `carrier-scorecard` | Carrier Scorecard | Negotiating with market data instead of memory | 3 |
| `eesea-migration` | Migrating an acquired product | Deciding what deserved to survive, not cloning it | 4 |
| `applicants-manager` | Applicants Manager | Redesigning applicant review around how recruiters actually triage, not how the database stored it | 5 |
| `pickpal` | PickPal | Three apps, one brief, three different people who all had to trust it at once | 6 |

**Naming rule for all six:** lead with what changed for the user, not the feature name — matches the "show reasoning, not inventory" guiding principle from the strategy brief. Avoid Xeneta-internal jargon (e.g., "PRFAQ," "MBR," persona-system names) anywhere outside the process layer, where a designer-peer audience can handle it. Same rule applies to OCC Mundial-internal terms.

**"eeSea migration" as a public label:** safe to use — the acquisition is public information (Aug 2025 press release). **"Applicants Manager" / "PickPal" real company/product names:** also safe — this content was already live on the user's own public portfolio before, unlike the Xeneta material's unresolved confidentiality question (see PORTFOLIO-STRATEGY.md's 21 Aug note).

## Search / browse strategy

Not needed yet. Six case studies on one scrolling list is still browsable at a glance; adding search would solve a problem this site doesn't have. Revisit if a 7th+ project pushes this further (see Taxonomy).

## Wayfinding

- **Where am I** — Home carries a minimal floating nav (About · Contact), not persistent chrome; every other page shows the conventional header (Home/About) globally. Case study header repeats the same one-liner and headline stat the reader saw on Home's list, confirming they landed in the right place.
- **Where can I go** — Home's own floating nav (About, Contact) plus the scrolling work list is the entire wayfinding surface on that page; the conventional header (Home, About, Résumé) returns on every other page. Footer nav on case study pages (← Back to home · Next case study →) keeps the six-item set easy to traverse without scrolling all the way back up Home's list every time.
- **Am I on track** — the impact-section heading should restate the outcome promised in the list's headline stat, so a hiring manager who came for "94% of active accounts" sees that number again before scrolling further.
- **Am I there** — no forms or multi-step flows in this scope, so this mostly reduces to: does the page the visitor lands on match what the label promised. Contact links (mailto/LinkedIn) are direct — no intermediate confirmation screen needed for an external link.

## Pending questions

1. **Grid/list order** — resolved. See PORTFOLIO-STRATEGY.md's priority list (Ocean Homepage → Compass Design System → Carrier Scorecard → eeSea Migration → Applicants Manager → PickPal), which the `priority` field in each project's content-collection frontmatter now encodes directly.
2. **Résumé as file download vs. page.** Still open. Assumed a downloadable PDF linked from the header. If a dedicated `/resume` page (web-formatted, not just a PDF) is wanted instead, that adds a spoke to the site map above.
3. **"About" scope.** Resolved by removal, not by answering the question — the user asked to delete the About page and both navs' link to it entirely (29 Aug 2026), rather than settle its scope. No `/about` route exists now.

## Handoffs

- `/journey` — the moment-to-moment experience of scrolling through a case study's three layers (what triggers the jump nav to appear, how "Next case study" transitions) is theirs, not IA's.
- `/wireframe` — where these sections sit on the actual screen, and at what visual prominence, including how the global header collapses on mobile (2 nav items is unlikely to need a hamburger menu, but that's a layout call).
- `/articulate` — the working titles/labels above are structural placeholders; final voice, tone, and copy for headlines and case study prose belong to content strategy.
