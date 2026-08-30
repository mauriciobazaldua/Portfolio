---
status: draft, content complete pending screenshots
source: laid out to match the /work/applicants-manager, /work/compass-design-system, and /work/ocean-homepage page structure (Title / Subtitle / Main metric / Meta row / Brief / KPIs / Steps)
---

## A note before you read this

Same rules as the last two drafts: no em dashes, en dashes, or ampersands anywhere in the copy, bold marks feature and product names for scanning, research participants stay anonymized by company type per your locked confidentiality decision (this includes the named individuals quoted in the source doc, dropped entirely rather than just the company). One customer testimonial in Step 05 (the freight forwarder who renewed at a higher rate after the Xeneta Summit) keeps the quote but drops both the company name and the renewal figures, same treatment your strategy doc already specified for that exact quote.

I pulled the Figma file's Sandbox and Dev Handover pages to confirm structure. Two things worth flagging: the Dev Handover page shows the rollout was split into named phases (Phase 0, Phase 1) and Phase 1 included a dedicated upsell flow, real evidence of commercial thinking, but I don't have detail on what that flow actually did, so I left it out rather than guess. Also pulled the two Xeneta marketing pages you linked for framing language on what a carrier scorecard is and why it matters, used lightly for context, not copied.

Image slots are marked `[IMAGE: ...]`, including a slot for the user flow diagram you mentioned.

---

# CARRIER SCORECARD

## Where carrier decisions stopped being guesses

**Subtitle:** Built a single scorecard that ranks ocean carriers across reliability, cost, and emissions, weighted the way each business prioritizes.

**Main metric:** 1000+ scorecards created

**Meta row**
| Role | Timeline | Platform | Industry |
|---|---|---|---|
| Senior Product Designer | Jun 2025 to Oct 2025 | Web App | Logistics and Freight Tech |

`[IMAGE: hero, the shipped Carrier Comparison Scorecard]`

---

## BRIEF

Procurement teams were negotiating with carriers using only their own experience as evidence: fragmented data, spreadsheets stitched together by hand, and no way to see how a carrier performed against the wider market. The objective was a single page that could hold every dataset Xeneta has, ranked and weighted the way each business actually prioritizes, and fast enough to use inside a live negotiation, not just a quarterly review.

> "Procurement decisions are often rate-driven and transactional due to the lack of comprehensive performance data."

---

## KPIs

| 335 | 80% | 60% |
|---|---|---|
| Customers using Carrier Scorecard | Of users who open it change the route to their own lane | Of users who load a saved metric template |

---

## 01. RESEARCH

I wrote the brief as a formal user story before designing anything: as a Xeneta user, I want to run quick, flexible, and detailed carrier comparisons, so I can weigh multiple variables at once and make data-driven decisions, with eight acceptance criteria attached, from configurable datasets down to a 30-second response time. That structure came directly from what research kept surfacing: teams wanted to **evaluate carrier performance across key metrics**, **customize scoring criteria** to match business priorities, and **share and justify decisions** to internal stakeholders, not just see a ranking.

The pain was consistent across every account: manual comparisons were slow and error-prone, and the tools available did not let anyone set more than one or two variables at a time, so most teams defaulted to rates alone. One participant put it plainly: they lacked sufficient data to measure carrier performance effectively, so procurement decisions stayed rate-driven by default. Another described comparing carriers across 14 separate criteria at the lane level, weighted differently depending on who in the business was asking.

`[IMAGE: the user story and acceptance criteria, or the user goals and pains synthesis]`

---

## 02. IDEATION

The hard constraint was fitting every dataset Xeneta has onto a single page without it becoming unusable. A slider-based weighting system became the answer: instead of a fixed formula, each user sets how much a metric like rates, reliability, or emissions matters to them, and the **scorecard** recalculates live. It was the simplest interaction we could find for a genuinely complex decision.

I explored three table concepts before choosing one: a traditional table, a version with centered scores, and an interactive version where every cell linked into **Market Trends** and **Market Benchmarks** elsewhere in the platform. The third shipped, chosen specifically because it connected the page to the rest of Xeneta instead of being a dead end.

This was also the first project where I used AI as part of the design process itself. I built fully interactive prototypes with Claude rather than static Figma mockups, and tested those directly with customers, closer to how the real product would actually feel than a click-through prototype usually allows.

`[IMAGE: the three table concepts side by side, v1, v2, and the shipped v3]`

---

## 03. VALIDATION

Two rounds of testing, and the second one changed the design. Round 1, a small concept test, found users leaning toward a visual chart over a table. Round 2 ran with eight enterprise shippers against a working prototype, a bigger and more realistic sample, and it said the opposite.

> "The table view in the prototype is preferred over the chart view for clarity." (a global truck and equipment manufacturer)

> "The chart would become very convoluted" as more carriers were added. (a global retailer)

> "Table and chart views are both valuable: tables for summaries and sharing, charts for detailed analysis." (a global chemicals company)

Rather than pick a single winner, the shipped design kept both views, with the table as the default. Early concept tests measure appeal. Later prototype tests measure use. They do not always agree, and the second one is usually the one to trust.

`[IMAGE: the table view and chart view toggle]`

---

## 04. ITERATION

Feedback shaped the surface directly. An internal design critique flagged that badges and blue highlighting for the best-performing carrier read as noisy, I switched to plain text with a green highlight instead, and updated the whole file the same day. A styling pass simplified the interface further, cutting back on grey and badge clutter across the table.

I also contributed a **Table and Chart switcher** component back into the **Compass design system**, since this was the first place that pattern was needed, and later escalated a systemic table side-scroll issue to the Compass team once it became clear other pages had the same problem. To kill a blank first-time experience, I designed a smart default: a new user's scorecard fills automatically with their most searched route, a balanced scoring template, and their contracted carriers, and after that first visit, it remembers their last configuration instead of resetting.

`[IMAGE: before and after, the badge and blue highlight version next to the plain text and green version]`

---

## 05. LAUNCH AND SCALE

Early access opened to 24 accounts in September 2025, and the product went to general availability at the Xeneta Summit that October. It reached freight forwarders that November, and watchlist support followed the next spring. Growth has been the clearest signal in the whole project: 103 customers at the end of 2025 to 335 by July 2026, without a plateau.

**80% | 60% | 335**
Reconfigure the route on open | Load a saved metric template | Customers using the scorecard

The behavior matters more than the reach. Most users do not accept the default view, they change the lane, adjust the weights, and save their own template for next time, and adding carriers to a comparison, the final step of the flow, has happened over 1,400 times, more than a thousand finished scorecards. One freight forwarder's global director of ocean product told their account team the tool was one of the highlights of the Summit, and the relationship grew stronger shortly after.

`[IMAGE: the shipped scorecard, metrics and weights configuration, and the final results view]`

---

**Footer nav:** Previous case study, Next case study
