---
status: draft, content complete pending screenshots
source: laid out to match the /work/applicants-manager and /work/compass-design-system page structure (Title / Subtitle / Main metric / Meta row / Brief / KPIs / Steps)
---

## A note before you read this

Corrected Step 04: the earlier draft invented a guided onboarding tutorial, and later an onboarding-modal fix, as part of the resolution to the density complaint. Neither happened, both are removed. The real fix was subtraction, cutting the **Top 3 suppliers** panel (replaced with **Most dynamic trade lanes**), the mini charts inside insight cards, the top search bar, and making the sidebar hidden by default instead of always open. Step 05 now says **Most dynamic trade lanes** instead of the earlier, incorrect **Top rate movers**, matching the actual shipped screenshot.

Synced this file against what's actually live in the codebase (`src/content/work/ocean-homepage.md`), since you'd made a couple of changes directly in code. Two things carried back into this draft: the subtitle's emphasis now uses `==this syntax==` inline (matching how you implemented it) instead of a bracketed note, and the main metric is simplified to just "94% of active accounts," you'd dropped the "+23% weekly users" half when you built it, so this file now matches. Everything else, body text, quotes, stats, images, matched what's live exactly.

Two style fixes applied throughout: no em dashes or en dashes anywhere in the copy (replaced with commas, periods, or "to" in date ranges), and no ampersands (spelled out as "and"). Also swapped the arrow in the ideation stat to a plain "->" and made the subtitle punchier and more marketing-forward, per your note.

Added bold throughout for feature and product names (Rate development chart, Most dynamic trade lanes, Data to Insights, and so on) so a reader can scan the page quickly and land on the actual things you built, not just the sentences around them. Marked with **bold** in this draft. Extra emphasis beyond bold, a color or highlight treatment, is marked with `==this syntax==`, matching the live implementation.

Research participants stay anonymized by company type per your locked confidentiality decision. One open item: "Adidas" and "Achieve bundle" is the standing placeholder account across every mockup in the Figma sandbox, flag if that needs swapping before screenshots go in.

Steps follow Research, Ideation, Validation, Iteration, Launch. Numbers get their own stat callout where there's a real figure behind them.

Image slots are marked `[IMAGE: ...]`.

---

# OCEAN HOMEPAGE

## From search first to insight first

**Subtitle:** The homepage that used to make you go looking for answers now ==hands you the ones that matter== before you ask.

**Main metric:** 94% of active accounts, +23% weekly users

**Meta row**
| Role | Timeline | Platform | Industry |
|---|---|---|---|
| Senior Product Designer | Jan 2025 to May 2025 | Web App | Logistics and Freight Tech |

`[IMAGE: hero, the shipped homepage, or the three stage before/middle/after strip]`

---

## BRIEF

Xeneta's homepage was built around search: users had to remember what to look up rather than arriving to find out what had changed. My initiative, **Data to Insights**, set out to personalize that experience from the first screen, not just a dashboard, but a different relationship with the data.

> "We aim to improve our users' journey from being a primarily search-driven experience to a recommendation-driven experience."

---

## KPIs

| 94% | +23% | 23,100 |
|---|---|---|
| Of active accounts reached | Weekly users, post launch | Watchlist selections, the top user action |

---

## 01. RESEARCH

Before building anything, the team named the risk that would define the project: *"we risk adding too many datapoints that would be intimidating for users."* Everything after this point tested for that risk.

I started against three UX personas, **Tactical Specialist**, **Strategic Manager**, and **Procurement Analyst**, each with its own preset layout. The Tactical Specialist's pain was concrete: re-searching the same lanes manually, no quick read on where to act. Concept testing validated the direction, though not everything held up: a global retailer's *"Wooow!"* at a proposed map view didn't survive the rest of the session, they never touched it again.

`[IMAGE: the three persona concept, or the Tactical Specialist persona pains and gains]`

---

## 02. IDEATION

Three full persona-specific layouts was the plan I designed toward first. Then I weighed what maintaining three parallel layouts would cost against what they'd buy, and cut it to one adaptive layout built around personalized **insight cards**, each surfacing a specific lane or action and linking straight into the platform.

**3 personas → 1 personalized layout**

The same instinct killed things that explored well but didn't earn their place: an early concept led with three status widgets that all said "how are you doing" in different words, replaced with one clear pairing, a rate chart plus a ranked movers table. A **Total Savings Achieved** widget I'd pitched didn't survive testing either. The first question back was *"Savings achieved... what does that mean?"*

`[IMAGE: the Options wall, a cropped strip showing 6 to 8 of the 26 explored solutions]`

---

## 03. VALIDATION

Usability testing confirmed the risk exactly as named. Three of four participants called the first screen "loud" or "too full," unprompted, in their opening seconds, right where I expected the hypothesis to land.

> "That's a bit loud." (a global agrochemical company, and separately, a global FMCG manufacturer)

What mattered more came next: within minutes, the same participants reframed that density as the value.

> "Reminds me of a newspaper, where you can see all the important news in one place." (a specialty chemicals manufacturer)

> "When I first look at it, it felt cluttered, but after a couple of minutes it was very good." (a global health technology company)

The real problem wasn't the density, it was the first fifteen seconds before someone got oriented. That's what Step 04 solved.

`[IMAGE: the tested homepage layout, the version with a suppliers panel, mini charts, a search bar, and an always-open sidebar]`

---

## 04. ITERATION

The fix was not a tutorial, it was subtraction. Four things were competing for attention at once: a **Top 3 suppliers** panel, small charts inside every insight card, a search bar above the fold, and a sidebar that stayed open by default whether it had anything new to say or not. None of it was wrong on its own. Together, it was the loud.

I cut all four. **Top 3 suppliers** became **Most dynamic trade lanes**, sharper and faster to read. The mini charts came out, leaving just the number and the label. The search bar was removed entirely, it also worked against the whole point of moving from search to insight. The sidebar now opens on its own, either by the user or automatically when there's something new, instead of sitting open by default.

Smaller fixes followed the same instinct: fewer badges, fewer competing colors, a watchlist name that had been colliding with an existing chart label.

`[IMAGE: before and after, the tested layout with the noisy elements circled, next to the shipped, simplified version]`

---

## 05. LAUNCH AND SCALE

The shipped homepage opens personalized, name, company, and metrics already set. It leads with a **Rate development chart** against the market and **Most dynamic trade lanes**, both linking into deeper benchmarks. Below that, watchlist-filtered insight cards, a news feed, and market reports, webinars, and **alerts** tucked into a sidebar that stays out of the way until there's something worth opening it for.

**577 | 5,480 | 4 to 8 min**
Companies on the page | Users reached | Average time spent per visit

The single most common action is selecting a watchlist item, over 23,000 times in the measurement window, exactly the recommendation-driven behavior the redesign was built to produce.

`[IMAGE: the shipped homepage, personalized greeting, rate development chart, most dynamic trade lanes, and market movements cards, sidebar hidden by default]`

---

**Footer nav:** Previous case study, Next case study
