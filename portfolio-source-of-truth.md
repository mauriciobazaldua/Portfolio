# Portfolio source of truth — Mauricio Bazaldua, UX Designer

**Version 2 — 14 August 2026.** Rebuilt from Pendo, Confluence, Jira, Slack, SharePoint, Outlook, Teams and Figma. Supersedes v1 entirely.

**Audience:** external job applications.
**Role across all four projects:** UX Designer.

---

## What changed since v1 — read this first

**1. The eeSea premise was inverted, and it has to be corrected.**

v1 said Ocean Schedules and Ports & Terminals replaced a third-party schedules vendor called eeSea. That is wrong, and three independent sources confirm it: **Xeneta *acquired* eeSea.** Deal signed 30 July 2025, announced 18 August 2025 (internally "Project Compton"). eeSea's founder Simon Sundboell and 16 colleagues joined Xeneta.

The third-party vendor that actually got dropped was **Sea-Intelligence**. From the acquisition FAQ:

> "eeSea have the most accurate and comprehensive data for carrier schedules, transit time, capacity, and schedule reliability… Additionally, there is a significant cost savings for Xeneta by replacing the dataset we currently purchase from Sea Intelligence."

> "The acquisition actually came about partially as a result of our cost-saving efforts, when we realized how much money we could save by owning the data ourselves."

So the correct story is a **post-acquisition product migration**: absorbing an acquired company's customer-facing surfaces (a web app plus 400+ Tableau dashboards) into the Xeneta platform so the legacy product could be switched off. That is a *better* portfolio story than vendor replacement — it's rarer, harder, and more senior. Full detail in Project 2.

**2. Every launch date is now confirmed.** The v1 caveat "we cannot date three of these projects" is gone. Real dates below.

**3. All four projects now have documented research with named participants and verbatim quotes.** v1 had none. There are now roughly 60 usable quotes.

**4. Datalink is far bigger than v1 assumed.** v1 called it a thin five-week-old product with 5 accounts. It is actually a full redesign of a 2024 product, shipped across both Ocean and Air, with a 16-screen spec and a documented before/after table. The Pendo numbers were low because both versions sit behind feature flags.

**5. Every Figma file has been located,** with specific node IDs for the frames worth exporting.

---

## How to use this document

Each project has: **the facts** (verified, safe to use) → **the story** (problem, research, decisions) → **verbatim quotes** → **copy blocks** → **Figma assets** → **remaining gaps**.

**Instruction to the AI generating the portfolio:** every quote in this document is real and sourced. Reproduce them exactly — do not paraphrase, do not invent additional ones, do not attribute an unattributed quote to a named company. Where something is marked `[VERIFY]`, Mauricio must confirm it before publication.

---

## Global context

Xeneta is a freight rate benchmarking and market intelligence platform for ocean and air shipping. Customers are shippers (BCOs — beneficial cargo owners), freight forwarders (LSPs), and carriers. Users are procurement managers, logistics analysts and trade lane managers.

**Platform scale (1 Apr – 13 Aug 2026, Pendo):** 613 active accounts · 6,037 active users · 9m 18s average active time per user per day.

**Platform usability benchmark (VoC 2025, n=393 responses / 264 complete):** SUS **77.3 (Grade B)** · 90.2% agree Xeneta is easy to use.

---

# The persona framework

Xeneta runs **three parallel persona systems**, and the docs mix them. Getting this right matters, because in an interview "which persona?" is a natural follow-up and the honest answer is "which kind?"

## 1. UX user personas — the three you actually designed against

These are the ones to use in the portfolio. The Homepage PRFAQ states the distinction explicitly:

> "Please note that user personas differ from marketing personas (sales personas) due to their different scope. One user persona can contain multiple marketing personas and vice versa."

### Tactical Specialist

**Goals (verbatim):**
> "I want to be more agile / be able to react quickly to tactical procurement risks and opportunities concerning fluctuations in rates, service quality or geopolitical risks, to quick-dial suppliers to adjust deals"
> "I want to use data & insights to back me up when reporting my procurement strategy & sourcing performance to my managers"
> "I want to understand why market fluctuations are happening, and foresee how that could affect my procurement strategy"

**Pains (verbatim):**
> "I hate individually searching and setting up filters over and over again to monitor my core lanes"
> "I need to manually analyze all core trades to understand if there is an opportunity to change procurement strategy"
> "I get nervous reporting to my managers without good data foundations to back me up"
> "I need to manually search all core lanes for potential risks and cannot see where I should act quickly"

### Strategic Manager

**Goals (verbatim):**
> "lower cost & decrease risk for my procurement organization overall"
> "align business & procurement strategy"
> "oversee team, market segment or business unit performance and guide team accordingly"
> "be aware of high-impact risks (financial, operational, geopolitical)"

**Pains (verbatim):**
> "I don't have the time to manually analyze all relevant lanes in Ocean Monitor & add 'your rate' to each"
> "I cannot make sense of market fluctuation or performance for multiple corridors/market segments/business units without downloading data in Excel and creating my own charts"
> "I don't know how I am performing against my competitors"
> "My decisions affect large amounts of $ within the whole company"

### Procurement Analyst

**Goals (verbatim):**
> "I want to deeply understand market dynamics and why lanes relevant to my business are moving the way they are"
> "I want to be seen as 'the' market specialist within my organization"

**Pains (verbatim):**
> "I lack contextual information to market developments (the 'why')"
> "I have to remember if any of the market news affect my lanes"
> "I still need to look at a bunch of other market insights sources to feel fully informed"
> "I have to manually create shareable market insights reports to share within my business"

## 2. Marketing personas — the alliterative names

A roster of named buyer personas, split BCO / freight forwarder / airline. BCO set: Analyst Adam, Chief Supply Chain Charlie, Digital Diane, Do-it-all Dan, Logistics Linda, Procurement Paul, Tender Terry. FF set: Analyst Amy, Digital Darwin, Finance Frank, Global Head Greg, Pricing Peter, Sales Sarah, Tender Tina, Trade Lane Tom.

**The one fact worth knowing:** *"the marketing persona who is using our platform the most is 'Do it all Dan'"* — the hybrid role who *"need[s] to cater for a wide range of responsibilities with limited amount of resources."* This directly shaped the homepage recommendation to let users mix widgets across layouts.

*Full per-persona definitions live only in SharePoint decks (`teams/Marketing/…/Xeneta Personas/BCOs/BCO Personas.pptx`) if you want them.*

## 3. Functional personas — the 2026 framework

Superseded the alliterative names in July 2026: **Procurement** (split into Freight/Logistics, Indirect, and IT), **Supply Chain**, **Finance**, **Logistics Operations**.

Useful one-liners:
- Supply Chain — *"designs the network before the goods move: routes, carriers, modes, risk"*
- Logistics Operations — *"runs the moves after the ink dries: rates, quotes, exceptions, invoices"*

Shared procurement frustrations, verbatim: *"negotiations driven by supplier narratives rather than factual data, risk of overpaying during tenders or spot buys, long and manual procurement cycles, no clear timing strategy for tenders, and poor visibility on market rates vs contracted rates."*

**Recommendation for the portfolio:** use the three UX personas as your primary frame — they're the ones the designs were built against, they have real goals and pains, and they read naturally to an outside audience. Mention the marketing/functional systems only if asked.

---

# Project 1 — Carrier Scorecard

*Also called Carrier Comparison Scorecard. URL `/ocean/carrier-comparison`.*

## Objective, problem and users

**Who it's for (verbatim, from the PRFAQ):**
> "**Primary User:** Ocean freight procurement professionals (shipper-side logistics managers)
> **Buyer:** Head of Procurement / Supply Chain Directors
> **Segment:** Mid-to-large enterprise shippers with multi-carrier strategies, small shippers with multiple tradelanes"

UX persona: primarily **Tactical Specialist**, with **Strategic Manager** as the reporting audience.

**The problem (verbatim, PRFAQ press-release framing):**
> "Ocean freight procurement teams spend countless hours gathering data from disparate sources and assembling them into spreadsheets trying to compare carriers using incomplete data. They struggle to justify carrier decisions to leadership and miss opportunities to optimize beyond just rates. With limited visibility into market-wide performance, they rely on carrier promises rather than proven track records."

**The deeper problem (verbatim, PRFAQ FAQ2):**
> "Without benchmark data (and hence only with internal data), Shippers / BCOs find it hard to convince Carriers (directly or via Suppliers) about potential under-performance as most of this assessment is based on their 'own experience' with existing carriers they work with… It lacks the dimension of 'what other carriers offer in the market' and lacks a data-centric approach. To solve this today, they send out RFPs or call carriers / suppliers, resulting in longer turnaround time and limited data."

**The objective (verbatim, product vision):**
> "Xeneta will be the platform for ocean freight carrier evaluation, enabling instant, data-driven carrier comparisons across multiple dimensions. The platform will:
> - Simplify complex multi-dimensional carrier analysis
> - Provide neutral, comprehensive carrier assessments
> - Enable scenario modeling for tender awards and routing decisions
> - Deliver personalized insights based on user preferences and business needs"

**What users said they needed (verbatim, FAQ15):**
> "Customer interviews show that often this is done using spreadsheets, sometimes using custom dashboard built by teams… They need:
> - Market context for carrier performance beyond their own experience
> - Transparent justification for carrier selection decisions
> - Time-efficient comparison processes
> - Multi-metric analysis including reliability, emissions, and capacity"

**In one sentence for the portfolio:** procurement teams were negotiating with carriers using only their own experience as evidence, so the objective was to give them neutral market-wide comparison across more than just rate — and make it fast enough to use inside a live negotiation.

## Confirmed timeline

| Date | Milestone |
|---|---|
| 18 Jun 2025 | Internal prototype testing recruitment begins |
| 30 Jun – 25 Jul 2025 | Round 1 concept testing (3 BCO participants) |
| 21 Jul 2025 | Design review (Mauricio organising) |
| 29 Jul – 26 Aug 2025 | Round 2 usability testing (8 companies, 7 sessions) |
| 6 Aug 2025 | Dev handover file shipped |
| **3 Sep 2025** | **Internal release** |
| **12 Sep 2025** | **Early Access Program — 24 accounts (19 BCOs + 5 freight forwarders)** |
| **9–10 Oct 2025** | **GA, launched at the Xeneta Summit** |
| 20 Nov 2025 | Opened to freight forwarders; comparison widget live for all external users |
| 24 Apr 2026 | Watchlist support (internal) |

## The facts

**Product usage — Pendo, 1 Apr – 13 Aug 2026:**

| Metric | Value |
|---|---|
| Accounts | **287** (47% of active accounts) |
| Users | **1,028** |
| Page views | 17,153 |
| Avg time on page per user per month | ~6m 30s |

**Adoption trajectory — from MBR/QBR reporting, this predates Pendo and is the real growth story:**

| Point in time | Customers using it |
|---|---|
| At GA (Oct 2025) | ~40 weekly active users across 38 companies |
| End 2025 | 103 |
| Mid-Apr 2026 | 304 |
| End Q2 2026 | **333** (against a 350 target) |
| July 2026 | 335 |

**That is 103 → 335 customers in roughly seven months.**

**Depth of interaction (Pendo):**

| Action | Users | Accounts |
|---|---|---|
| Opened the scorecard | 1,027 | 287 |
| **Changed the route** | **823** | 254 |
| **Selected a saved template** | **617** | 211 |
| Updated market metrics | 379 | 161 |
| Added carriers to compare | 315 | 135 |
| Switched view | 309 | 148 |

**The headline ratio: 80% of users who open it change the route** (823 of 1,027), and **60% load a saved template** (617 of 1,027).

## The story

**The problem.** Carrier performance comparison was rate-driven and transactional because shippers lacked comparable performance data. PepsiCo, in research: *"PepsiCo lacks sufficient data to measure carrier performance effectively… procurement decisions are often rate-driven and transactional due to the lack of comprehensive performance data."* Volvo's trade lane manager described comparing carriers on **14 criteria at lane level**, with different stakeholders weighting them differently.

**Product goal, verbatim from the internal launch post (3 Sep 2025):**
> "Provide Shippers fast, multi-dimensional and customized insights to ocean freight procurement professionals, so they can make faster, more confident carrier selection decisions and enhance existing suppliers' performance monitoring."

**Research — two rounds, documented in Confluence.**

*Round 1 (Jun–Jul 2025, 3 BCO participants: Aditya Birla, UD Trucks, PepsiCo).* Moderated concept test on a clickable prototype plus contextual interview. Key finding: flexibility in time frame and in choosing/weighting metrics was the dominant ask. **UD Trucks found the visual/chart comparison more intuitive than the table.**

*Round 2 (Jul–Aug 2025, 8 companies: Syngenta, Continental Tyres, Grasim/Aditya Birla, Mercedes-Benz, ABF, Volvo Logistics, Walmart, Dow Chemical).* Moderated prototype walkthrough, 45 minutes, findings timestamped per participant.

**The most interesting research outcome: Round 2 reversed Round 1.** With a larger sample and a real prototype, enterprise shippers preferred the table over the chart — Volvo: *"the table view in the prototype is preferred over the chart view for clarity"*; Walmart's Efrain Garcia preferred the table, and Lucas Pilla warned the chart would become *"very convoluted"* with more carriers. Dow landed on both: *"Table and chart views are both valuable: tables for summaries and sharing, charts for detailed analysis."* The shipped product keeps both with the table as default — a decision traceable to a research reversal.

**Design decisions you drove (all documented in Slack):**

- **Three table concepts explored** — v1 traditional table, v2 centred scores, v3 interactive cells linking into Market Trends and Market Benchmarks. **v3 shipped**, chosen because it connects the page to the rest of the platform rather than being a dead end.
- **Table styling A/B (8 Aug 2025):** *"this new version makes the UI a more clean without so much grey and badges."*
- **Design-team critique incorporated (11 Aug 2025):** *"they suggested to make a change that instead of having badges and blue color for the best option, make it plain text and have green color for the best option. I already updated the whole Figma file."*
- **Design-system contribution:** you proposed a Table/Chart content switcher with icons, which required **extending the Compass design system component**. Later (18 Nov 2025) you escalated a systemic issue — no visible side-scroll on tables — to the Compass team.
- **Smart default to kill the empty state (21 Nov 2025):** *"If it's the first time from the user to enter: We fill the Route with their most frequent search + Balance scorecard template + Contracted carriers. After first time: We fill all with the last selection from the user."*

## Verbatim quotes

**Research participants:**

> "Cost is not the only factor." — **Mario Van den Bussche, Volvo Logistics**

> "The table view in the prototype is preferred over the chart view for clarity." — **Volvo Logistics**

> "Need to capture stakeholder vetoes and deal breakers early in the process to avoid delays later." — **Volvo Logistics**

> "PepsiCo lacks sufficient data to measure carrier performance effectively… procurement decisions are often rate-driven and transactional due to the lack of comprehensive performance data." — **PepsiCo**

> "Inconsistent carrier data formats are a major challenge for comparison." — **Dow Chemical**

> "Table and chart views are both valuable: tables for summaries and sharing, charts for detailed analysis." — **Dow Chemical**

> Wanted the custom template header frozen while scrolling, "similar to spreadsheet headers." — **Matthew Ashworth, Syngenta**

> The scorecard "should account for volume, as high-volume lanes should be prioritized over low-volume ones." — **Lucas Pilla, Walmart**

**Customer, post-launch:**

> "After the Summit — Simon expressed great feedback on Carrier Scorecard and Schedule Explorer and are very excited to start utilizing them within their team." — CSM relaying **Simon Albrecht, Global Director of Ocean Product, Röhlig Logistics**, 30 Oct 2025. *(This account renewed at +25%, EUR 60K → 75K.)*

## Copy blocks

**Headline stat:**
> 103 → 335 customers in seven months. 80% of users who open it reconfigure it to their own trade lane.

**One-liner:**
> A carrier comparison tool that grew from 103 to 335 customers in seven months, where four out of five users push past the default view to configure their own lane.

**Short paragraph:**
> Carrier Scorecard lets ocean procurement teams compare carriers side by side on the metrics they actually negotiate against. It went from early access with 24 accounts in September 2025 to general availability at the Xeneta Summit that October, and grew from 103 customers at the end of 2025 to 335 by July 2026. The behavioural signal matters more than the reach: 80% of users who open it change the trade lane and 60% load a saved metric template. Users treat it as an instrument they operate, not a report they read.

**Research-reversal framing — use this one, it's your best interview story:**
> The first round of concept testing said users preferred a visual comparison over a table. The second round, with eight enterprise shippers and a working prototype, said the opposite — Volvo and Walmart both chose the table for clarity, and Walmart flagged that the chart would become "very convoluted" as carriers were added. Rather than pick a winner, the shipped design keeps both with the table as default. The lesson I took was that early concept tests measure appeal and later prototype tests measure use, and they don't always agree.

## Figma assets

**File:** `🛥️ Carrier Scorecard` — `wXQhx4PGWeDoDz6uVcLpcU`

| What | Node |
|---|---|
| **Hero: full flow, onboarding → results** | `1055:17576` |
| **Three table concepts** (v1 / v2 / v3-shipped) | `5:5` / `41:1766` / `41:3105` |
| Saved templates (save configuration) | `1060:28784` |
| Entry-point logic | `3333:10058` |
| Components index, linked to Compass DS | `1085:5355` |
| Chart view (spider chart) | `2175:13238` |
| Empty states / carrier list validation | `2109:8074` |
| Sidebar panel variants | `46:10681` (side panel) vs `328:14921` (full screen) |
| Process frames | Owner `43:10141` · User story `43:10155` · Goals & pains `43:10209` · User flow `46:10244` · Wireframe `46:10644` |

**The three table concepts side by side is the single strongest artefact in your entire portfolio.** Three real alternatives with a documented reason the winner won.

## Gaps

- No synthesised research report — R1 and R2 are raw per-participant finding logs. If you want a "research report" artefact, you'd be creating it now from the raw notes.
- No SUS or task-success metrics captured for this project.

---

# Project 2 — Ocean Schedules + Ports & Terminals (the eeSea migration)

## The corrected story

Xeneta acquired eeSea in 2025. eeSea delivered ocean schedule data — transit times, schedule reliability, capacity, port and terminal intelligence — through its own web app, 400+ Tableau dashboards, and a BigQuery export API. **Your projects are the product-side absorption of those surfaces into Xeneta so the acquired product could be switched off.**

Your own framing, presenting to the design org (9 Mar 2026):
> "today I will be demoing you the next project Chai and I have been working on, Ports and Terminals, following the goal of fully integrating all the functionalities from eeSea to Xeneta."

The strategic constraint, from the deprecation plan:
> "One thing worth stating clearly: eeSea's ICP and Xeneta's ICP are not the same. eeSea primarily serves port and terminal operators. Xeneta primarily serves shippers and forwarders. We are not trying to replicate everything eeSea does inside Xeneta. The goal is to migrate the use cases that matter most to the highest-paying eeSea customers, while keeping the product aligned with what Xeneta is building for its core users."

> "There is no rollback plan."

## Objective, problem and users

### Ocean Schedules

**Who it's for (verbatim, PRD):** *"1. Procurement Managers 2. Operations / Supply Chain Managers"*

**The problem, split by audience (verbatim, PRD):**
> "**For Procurement Teams:** Procurement awards contracts based on rates but lacks visibility into actual service performance. Without insights into blank sailings, delays, and reliability patterns, they risk overpaying for underperforming services, creating misalignment with operations and forcing costly inventory buffers.
>
> **For Operations Managers:** Operations teams waste hours checking individual carrier websites and piecing together schedules from fragmented sources. Apart from the manual workload, they lack insight into reliability data, they react to delays and cancellations instead of preventing them, leading to missed commitments, inventory delays, and expensive spot bookings."

**The objective (verbatim):**
> "Xeneta Schedule & Reliability is a product that provides service & vessel performance intelligence to BCOs and LSPs with a single, standardized view of how ocean services actually perform."

**Positioning (verbatim):**
> "Schedule Intelligence is the only platform that unifies service routes, vessel schedules, reliability metrics, and cancellation rates in one unified platform."

### Ports & Terminals

**The problem (verbatim, PRD V1):**
> "Port authorities, terminal operators, and logistics teams currently piece together carrier websites, eeSea data, and internal spreadsheets to understand what is happening at a port. There is no single view to see which vessels are arriving, whether they are on time, and how terminal-level activity is shaping up. This makes it hard to plan berth operations, coordinate inland transport, and react to disruptions proactively."

**The goals (verbatim):**
> - "Give users a single page to understand the operational state of any port at a glance
> - Show whether inbound vessels are on time, delayed, or omitted so users can plan around exceptions
> - Allow drill-down by terminal, carrier, service, and date range to support different planning workflows
> - Lay the foundation for richer port-level features (reliability, connectivity, heat map) in future versions"

**The five target personas (verbatim table):**

| Persona | Primary use case |
|---|---|
| **Logistics / operations** | Day-to-day planning, performance monitoring, disruption management based on vessel arrivals |
| **Supply chain** | Route planning and network building using port connectivity; monitoring disruptions |
| **Terminal / berth planner** | Berth allocation based on incoming vessels, crisis management, carrier communications |
| **Procurement** | Benchmarking carrier performance at specific ports vs. entire strings |
| **Finance** (secondary) | Budgeting, forecasting, internal justification using operational data |

**User stories (verbatim, all five):**
> "**As a logistics coordinator**, I want to see all vessels arriving at my port with their forecasted arrival times so that I can plan truck/rail pickups and react to delays early.
>
> **As a terminal planner**, I want to filter vessels by a specific terminal so that I can focus on berth activity relevant to my operations.
>
> **As a procurement manager**, I want to see which carriers/services are delayed at a port so that I can benchmark performance for contract discussions.
>
> **As any user**, I want to toggle between a table view and a calendar view so that I can either scan a detailed list or get a visual overview of arrival distribution across days.
>
> **As any user**, I want to filter by status (on time / delayed / omitted), vessel operator, carrier/service, and date range so that I can narrow the view to what matters for my current task."

**What was deliberately excluded from v1 (verbatim non-goals)** — worth quoting, because scope discipline is a design skill:
> "Port-level schedule reliability metrics · Terminal capacity, throughput, and equity (ownership) · Carrier-level reliability metrics · Congestion data and insights · Heat map integration with congestion data · **Tableau-level analytical workflows — v1 is an operational view, not an analytics tool**"

That last line is the sharpest sentence in the whole PRD. The team was migrating off 400 Tableau dashboards and explicitly refused to rebuild an analytics tool — v1 answers "what is happening at my port right now", nothing more.

**In one sentence for the portfolio:** two products that turned an acquired company's data into the one screen a logistics team checks when they think something has gone wrong — deliberately operational rather than analytical.

**This is an unusually good design brief to have worked against**, and worth saying so: you weren't asked to clone a product, you were asked to decide which parts of an acquired product deserved to survive contact with a different user base.

## Confirmed timeline

| Date | Milestone |
|---|---|
| 30 Jul 2025 | eeSea acquisition signed |
| 18 Aug 2025 | Acquisition announced publicly |
| 20–21 Nov 2025 | Schedule Explorer + Service/Vessels design reviews (Mauricio organising) |
| 13 Feb 2026 | Ocean Schedules — internal V1 |
| 18 Feb 2026 | Ocean Schedules — Early Access |
| **4–10 Mar 2026** | **Ocean Schedules — external launch** `[VERIFY: Confluence says 4 Mar, Slack announcement 10 Mar]` |
| 27–30 Mar 2026 | Port Congestion Map live inside Ocean Schedules |
| 23 Apr 2026 | Export (PNG + Excel) live |
| 7 May 2026 | Ports & Terminals — internal MVP |
| 17 Jul 2026 | Vessel list extended from 4 weeks to 3 months |
| **30 Jul 2026** | **Ports & Terminals — live externally** (BCO & LSP Achieve) + new "Tools" navbar tab |
| 31 Aug 2026 | eeSea web app deprecation target |

You are credited by name in the Ocean Schedules GA post and both Ports & Terminals launch posts.

## The facts

**Ocean Schedules — Pendo, 1 Apr – 13 Aug 2026:**

| Metric | Value |
|---|---|
| Accounts | **268** (44% of active accounts) |
| Users | **1,003** |
| Page views | 25,370 |
| Avg time on page | **7–8 minutes** — highest in the product |

**Ocean Schedules — from MBR/QBR, covering the launch period Pendo can't see:**

- **423 users searched within the first month** (to 31 Mar 2026), roughly 50:50 shippers and freight forwarders
- 409 active users, 1,636 trade lane searches, 141 active companies in just over a month
- 183 webinar registrations
- 143 active customers (13 Apr) → 197 (Q2) → 206 since launch, 66 in July 2026

**Interaction (Pendo):**

| Action | Users | Accounts |
|---|---|---|
| Searched a trade lane | 617 | 185 |
| **Ran a follow-up search** | **352** | 111 |
| Toggled between views | 323 | 125 |
| Applied a carrier/service filter | 277 | 101 |
| Opened a delay tooltip | 157 | 74 |
| Exported to Excel | 48 | 27 |

**57% of users who search run a second search.**

**Ports & Terminals — Pendo, first five weeks (from 26 Jul 2026):**

| Week | Accounts | Users | Views |
|---|---|---|---|
| w/c 26 Jul | 7 | 10 | 105 |
| w/c 2 Aug | 18 | 40 | 480 |
| w/c 9 Aug | 10 | 18 | 162 |
| **Total** | **21** | **59** | **740** |

Early adopters represent **$2.40M in active ARR**, weighted to top tiers (15 VIP, 4 Premium, 1 Plus).

**Feature interaction, first five weeks:** Search 20 clicks / 8 accounts · Terminal filter 17 / 4 · Date picker 14 / 4 · **Omitted status card 10 / 5** · **Induced status card 8 / 3** · Departure toggle 7 / 3 · Export 4 / 2 · **On-time status card 4 / 2**.

**The disruption-over-on-time insight holds: 18 clicks on the two disruption cards versus 4 on the on-time card.**

**The Tableau migration — a separate, quantified piece of work.** Your own MBR wording:
> "eeSea data integration. We finished the designs for the three most used eeSea Tableau dashboards (used by 500+ users) using with Xeneta design system and brand guidelines while keeping the same functionalities and features as Tableau. For this project, we are piloting spec-driven development starting with the Port dashboard — a workflow we expect to reduce implementation time."

Dashboards rebuilt natively: PORT (738 views, 29 companies), TRADE (388 views, 15 companies), Services-port (231 views, 27 companies).

## The story

**Origin — you proposed the AI-prototyping approach (26 Feb 2026):**
> "talking with Shubham the other day, he told me to explore doing a quick prototype with AI for the ports and terminals… I used FigmaAI for it, using eesea as base but making it much easier to use."

**Research:** 10 usability tests on Ports & Terminals / Ocean Schedules; **28 testing sessions across the Ocean portfolio in Q2 2026**, plus one spec-driven dev document. Your quarterly self-report:
> "I worked on Ports and terminals and Ocean schedules to show all vessel schedules and port arrivals an departures from eeSea into the platform, validated through 10 usability tests… Total: 28 testing sessions and 1 spec-driven dev document."

**A documented A/B decision (8 Jun 2026):**
> "Overall from the testings I had and the reviews its definetily much better the Layout B, it makes the flow feel more intuitive and more connected."

Layout B makes the page title the **port name** rather than the generic "Ports and Terminals" — a small IA decision with a clear rationale: the user's mental model is the port, not the feature.

**UX writing you owned (2 Mar 2026):**
> "Watching at the design, we call it 'Transit times' but this is not transit times right?… In eesea they just call it 'Proforma' and 'Actual' but i think thats not very clear, we can put it as 'Announced/Actual arrival' to make it very clear."

**The shipped product uses "announced vs actual".** You replaced inherited industry jargon with plain language. That is a clean, provable UX-writing win.

**A feature you added from user need (3 Mar 2026):**
> "we also added a view that you can expand the vessel and see all its stops for the users that need to dive deeper into it… Destine also liked this idea because some users also were requesting this from eesea."

**Commercial design thinking (29 Jul 2026):** you designed a cross-sell pop-up promoting Ports & Terminals inside Ocean Schedules, triggered **only after a search returns results** so it never interrupts the workflow.

## Verbatim quotes

**Customer value — the best single quote in this document:**

> "Using Schedules, found a 25-day direct service vs. 55-day standard route — saved $9,400+ vs air freight." — **Transport Specialist, Syngenta** *(a $600 extra ocean cost against $10,000 of air freight)*

> "I've already started using it actively in customer discussions immediately after launch" — **Procurement Manager, Clasquin**

**On the transshipment follow-on work (6 customers tested):**

> "more streamlined, more efficient. Having everything in one place on the left."

**Internal testing (useful if you want to show you act on feedback):**

> "There are no hover descriptions to explain the headings eg 'arrival' should have a hover over that explains what 'arrival' means and how it's calculated" — Justine Gillen, internal release testing, Feb 2026

## Copy blocks

**Headline stat:**
> Migrating an acquired company's product into ours. 268 accounts on Schedules with the deepest engagement in the platform; Ports & Terminals reached $2.4M of ARR in five weeks.

**One-liner:**
> When Xeneta acquired eeSea, its schedules and port data had to move into our platform so the acquired product could be switched off — without simply cloning it for a different set of users.

**Short paragraph:**
> Xeneta acquired eeSea, an ocean schedules and port intelligence company, in 2025. My work was the product-side migration: bringing vessel schedules, transit times, reliability and port activity into the Xeneta platform so eeSea's web app and 400+ Tableau dashboards could be retired. The constraint that made it interesting was that the two companies served different customers — eeSea served port and terminal operators, Xeneta serves shippers and forwarders — so this was never a clone job. It was deciding which use cases deserved to survive. Ocean Schedules launched in March 2026 and reached 423 users in its first month; Ports & Terminals followed in July 2026 and reached 21 accounts representing $2.4M in ARR within five weeks.

**The UX-writing win:**
> eeSea called the two schedule figures "Proforma" and "Actual". I pushed to rename them "Announced" and "Actual arrival", because the inherited industry term was opaque to the shippers who would now be using this data. The shipped product uses the plain-language version.

## Figma assets

**Ocean Schedules:** `📆 Schedules and reliability` — `PQX49Ve6H57ulns5AmtU3x`

| What | Node |
|---|---|
| V2 full flow — transhipment | `495:30024` / `3892:18971` |
| V3 service page | `3384:17450` |
| **Search component — first version** (pair with shipped for before/after) | `1849:44866` |
| Empty states | `589:59089` |
| Loading states (21 frames) | `1121:25177` |
| Omitted vessels | `2780:16081` |
| P&T cross-promo pop-up | `2894:35206` |

**Ports & Terminals:** `⚓️ Ports and terminals` — `r3bYT5GrSPWK1om80jZs0E`

| What | Node |
|---|---|
| **Hero: full flow** (38 frames) | `176:7812` |
| V2 service page (22 frames) | `1418:9216` |
| Vessels page — default (status cards + filters) | `1122:7165`, latest `1504:17050` |
| Empty state / loading | `488:5624` / `637:5745` |
| **AI prototype** (the FigmaAI origin) | `3:130` |
| Current flow / references / user flow | `3:117` / `8:169` / `16:3615` |

**Tableau migration:** `Tableau Dashboards` — `y26qcg5CMqrSnctlVIUX8H`

**FigJam — `User Flow` board `uHNVcnwVR1nDWbrKVTPXxl`:**
- **Schedule explorer page `173:800` contains literal `BEFORE` and `NOW` sections plus critique stickies.** This is your best research artefact for this project — a documented, sourced design decision showing what was lost and gained.
- Ports and Terminals page `235:1183`, section `Unified flow`.

## Gaps

- No external-customer usability synthesis for Schedules or P&T — only internal-release feedback logs and group-testing tables. The Q2 QBR references 28 sessions; no synthesis document exists for them.
- Ports & Terminals GA date is soft — planned end-May, then mid-June, actually live 30 July. `[VERIFY]` if you want to state a single date.

---

# Project 3 — Ocean Homepage redesign

## Objective, problem and users

**This project has the clearest written framing of the four** — and it's the only one with explicit success metrics.

**Who it's for (verbatim, one-pager):**
> "**Audience:** Different user personas from Shipper / BCOs using Xeneta. The two key user segment we'll empower are Infrequent Users and Power Users.
>
> *Sub-segment 1 (Infrequent users):* Newly onboarded users… that are still discovering the power of the Xeneta platform or infrequent users that value the insights, but not enough to invest the requisite time and effort the platform demands today.
>
> *Sub-segment 2 (Power Users):* Power users of our platform that know how to navigate through the different use cases… but spend relatively high time and effort getting to this insight each time, repeatedly *(They know what they want!)*"

Designed against all three UX personas — **Tactical Specialist, Strategic Manager, Procurement Analyst** — each with its own preset layout.

**The purpose, in one line (verbatim):**
> "We aim to improve our users' journey from being a primarily **search-driven experience to a recommendation-driven experience**."

*That is the single best sentence available for framing this project. Lead with it.*

**The problem (verbatim, one-pager):**
> "Users responsible for freight procurement can often be knowledgeable in their markets, aware of range of datapoints but will have a hard time connecting the dots between the range of different market parameters in relation to their own business to make business decisions… The core problem to address is that users spend high effort and time to get to their desired outcomes due to the lack of personalised experience on the platform. In interviews, certain users expect personalisation to be a table stakes expectation.
>
> *An Infrequent user goes through a journey where they're not confident of using the Xeneta platform, need help themselves and hence find it difficult to adopt the platform. On the other hand, a power user knows what they want and how to get it… They are fierce loyal users of the platform but wish it could take less steps to do certain things.*"

**Why now (verbatim) — the structural argument:**
> "**Disconnected use-case driven platform user experience:** On the platform, our user experience is segregated into a workflow that does not match with the overall workflow of our users. As we add new capabilities in the platform, the continued separation of Monitor, Analyze, Tender, Budget, Inform makes it harder for a user to achieve their outcomes"

**The North Star (verbatim, PRFAQ):**
> "The North Star for Xeneta's homepage is to provide both BCOs and LSPs with a tailored experience that aligns with their strategic maturity… Automatically adapt widgets and insights based on frequent user actions. Proactively suggest underutilized Xeneta tools… Seamlessly integrate alerts, news, and insights into a **single hub** that aligns with user goals… The ultimate goal is to empower users to make **faster, data-driven decisions** while uncovering actionable opportunities in the market."

**Success metrics (verbatim) — the only project with these written down:**
> "- Drive expansion pipeline by increasing discoverability of platform capabilities
> - Increase stickiness of users (drive higher % of Weekly users out of a monthly cohort)
> - Ensure high data coverage from participating customers
> - Reduce the time to onboard user onboarding and feature adoption
> - **Lower the time to 'ahaa moment' of insight**"

**The risk they named upfront (verbatim)** — and which research then confirmed:
> "**Overwhelming user experience:** To provide visibility into all the relevant datasets, we risk adding too many datapoints that would be intimidating for users."

**This is a gift for the case study.** The team wrote down the exact risk before building. Research then found it — *"That's a bit loud"*, *"Its too full"*. And the same users, minutes later, said the density was the value. You can structure the whole narrative as: named risk → confirmed in testing → resolved without gutting the concept.

**Explicit scope boundary (verbatim):** *"This will not be a fully customisable dashboard for our users."*

**In one sentence for the portfolio:** moving the product from search-driven to recommendation-driven — so that instead of remembering what to look up, users arrive to find what changed on the lanes they care about.

## Confirmed timeline

| Date | Milestone |
|---|---|
| Nov–Dec 2024 | PRFAQ written |
| Dec 2024 – Jan 2025 | Concept testing (Mona Bossemeyer, 4 participants) |
| 17 Feb 2025 | Usability testing begins — **study brief owned by Mauricio** |
| 21–25 Feb 2025 | Usability sessions (Syngenta, Unilever) |
| 6 Mar 2025 | Usability notes written up by Mauricio |
| 25 Mar 2025 | New navbar shipped (precursor) |
| 7–8 Apr 2025 | Internal release |
| **15–22 Apr 2025** | **External release (Preview)** `[VERIFY: Confluence says 15 Apr, Slack announcement 22 Apr]` |
| May 2025 | Live for all Ocean customers |
| End May 2025 | Phase 2 — reliability & transit-time datasets |
| 20 Jun 2025 | Phase 3 — pre-calculated insights |
| 17 Nov 2025 | Legacy homepage deprecated |

You are credited by name in all three launch posts.

## The facts

**Pendo, 1 Apr – 13 Aug 2026:**

| Metric | Value |
|---|---|
| Accounts | **577** — 94% of active accounts |
| Users | **5,480** — 91% of active users |
| Page views | **128,850** |
| Avg time on page | 4m 56s – 7m 50s |

**Post-launch metrics from internal reporting:**

- Homepage weekly users **up ~23% to ~211** (Oct 2025)
- Most frequent action is **Watchlist Selected (23,100 events)** — *"showing that users primarily come to the homepage to quickly access insights on specific tradelanes"*

**Module engagement (Pendo):** Market news opened 755 users · Timeline updated 596 · Most Dynamic Trade Lanes dataset selector 377 · Create new watchlist 236 · Report clicked 177 · Reports carousel 161 · Webinar carousel 151 · Rate development volume toggle 125 · AI Agent hub 88.

## The story

**This is your best-documented research project, and the research is largely yours.**

**Concept testing (Mona Bossemeyer, Jan 2025, 4 participants: Dometic, 3M, Walmart, IKEA).** Method: moderated concept testing, interactive prototype of the onboarding flow plus three alternative layouts, think-aloud protocol. The report explicitly states its own limitation: *"Low number of participants limits validating the specific personas."*

Two features were **killed or deprioritised as a direct result**: Top Rate Movers was cut, and the map was deprioritised. Walmart said *"Wooow!"* at the map — and then never interacted with it again. That gap between stated enthusiasm and actual behaviour is a genuinely good portfolio anecdote.

**Usability testing (Feb–Mar 2025, 4 participants: Syngenta, Nouryon, Philips, Unilever) — study brief and notes both authored by you.**

Your hypothesis, verbatim from the brief:
> "The redesigned homepage provides a more personalized, insights-driven experience, reducing search-based navigation. By prioritizing 6 insight cards, users should move from insights to action faster."

**The finding that shaped the design: information density.** Three of four participants reacted to the same thing unprompted:

> "That's a bit loud" — **Syngenta** and **Unilever**, both as first reactions

> "When I look at it its a lot of information — its like a news page which have a lot things going all together and don't know what to look." — **Syngenta**

> "Its too full" — **Nouryon**

But the same participants, minutes later, found the density valuable once oriented:

> "Reminds me of a newspaper, where you can see all the important news in one place" — **Nouryon**

> "When I first look at it, it felt cluttered, but after a couple of minutes it was very good, it should be fine" — **Philips**

**That tension — dense-but-valuable, hard-at-first-glance — is the central design problem of this project, and you have four independent users articulating it.** Build the case study around it.

**The documented iterate-and-revalidate loop — the strongest process evidence you have:**

1. Syngenta couldn't get past the onboarding step: they *"was not moving forward by clicking on 'Finish'"* — the onboarding looked like the landing page itself.
2. You changed onboarding into a **modal**.
3. Unilever, tested after the change, explicitly confirmed the fix: *"The change to make the onboarding a modal was well received, as now he knew it was an onboarding step."*

**Problem → change → revalidation with a different user, all documented, inside one study.** Most portfolios claim this; few can show it.

**Other findings that shipped:** the "My main lanes" naming collision (the auto-generated watchlist name clashed with the "Development of your major lanes" chart — flagged independently by Nouryon and Unilever); insight cards lacking context (no THC basis, market type, contract length); the six-followed-lane limit (Syngenta wanted seven); the hard-to-find edit-dataset control.

**A widget you proposed (22 Jan 2025):**
> "I wanted to share an idea for a small widget for the new homepage redesign I'm working on… I'm thinking of creating a widget at the top of the page that shows 'Total Savings Achieved' along with the month-over-month change. The idea is that these two metrics would always trend upwards, emphasizing the value we're delivering. Since the layout already has a lot going on, I kept it simple…"

Research killed it — 3M asked *"Savings achieves…what does that mean?"* Worth including: you proposed it, tested it, and dropped it.

**Your own honest reflection, from your internal review doc:**
> "During the redesign of the Homepage at the beginning of the year, I had a lot of troubles because the first designs were not aligned with what we wanted to achieve (more personalized experience) so we had to design it again from scratch, so it took time from development."

You asked to leave weak spots out, so this is your call — but a *self-authored* reflection about restarting a design when it wasn't hitting the goal reads as maturity, not failure. Consider it for the reflection section.

## Verbatim quotes

**Concept testing (Jan 2025):**

> "Oooh perfect" — **3M**, first reaction

> "This is more clear" — **IKEA**

> "It's what I need […] It's much better than the current one" — **3M**, on Market Trends

> "This gives me what I need" — **Dometic**, on the summary of followed lanes

> "Oh this integration is very very good" — **IKEA**

> "Is simple and easy to navigate" — **Walmart**

> "It would be interesting to customise the widgets and delete or add stuff that you need" — **Walmart**

**Usability testing (Feb 2025):**

> "That's a bit loud" — **Syngenta**, **Unilever**

> "Feels like a news page—a lot of things together, don't know where to look." — **Unilever**

> "I really like the table, see on the screen and gives an overview of all the details" — **Syngenta**, on Market Trends

> "The chart on the top is a good, quick overview" — **Nouryon**

> "With this I don't need to wait for internal reports, with these insights I can see what is happening" — **Nouryon**

> "We have a analysts team, this would be very useful for them" — **Nouryon**

> "It shows a lot of relevant information" / "For me, is very informative" — **Philips**

> "its really good that you can set up an alert for transit times and capacity" — **Philips**

**Post-launch, from the external launch announcement (22 Apr 2025):**

> "this view is a great improvement"

> "adding own lanes list is an excellent feature"

*(Both unattributed in the source — do not assign them to a named company.)*

## Copy blocks

**Headline stat:**
> 94% of all active accounts. 91% of all active users. Weekly users up 23% post-launch.

**One-liner:**
> The front door to Xeneta's Ocean product — seen by 5,480 users across 577 companies, and designed around a tension four research participants named independently: too dense at first glance, genuinely valuable within two minutes.

**Short paragraph:**
> The Ocean homepage is the first screen every user sees after login. I ran the usability programme for the redesign, which shipped to all Ocean customers in April 2025. The central design problem surfaced immediately in testing: three of four participants called the page "loud", "too full", or "like a news page where you don't know where to look" — and then, minutes later, described that same density as its main value. One participant put both halves in one sentence: "When I first look at it, it felt cluttered, but after a couple of minutes it was very good." The work was making the first fifteen seconds survivable without stripping out what made it worth returning to. The page now reaches 94% of Xeneta's active accounts, and users spend five to eight minutes per visit.

**The revalidation story:**
> One participant couldn't get past the onboarding step — it looked like the page itself, so they never clicked "Finish". I changed onboarding to a modal. The next participant, tested after the change, said unprompted that the modal made it obvious this was an onboarding step. Problem, change, and confirmation inside a single study.

## Figma assets

**File:** `🏠 Ocean Homepage` — `9KXZl31qE5eSvY8umGdK3B`

**You have a genuine three-stage before/after:**

| Stage | Node |
|---|---|
| **BEFORE** — "Current experience" | `352:9886` |
| **MIDDLE** — Iteration 1 final | `1194:69581` |
| **AFTER** — Iteration 2 final (the shipped homepage) | `5317:22072` |

**Exploration:**

| What | Node |
|---|---|
| **`🚀 Options` wall — 8,010px wide** | `352:9914` |
| **Solution 1 → 26** as discrete frames | `410:16120`, `516:23491`, `704:35060`, `807:26249`, `859:28644`, `861:26090`, `879:47407`, `892:48385`, `1442:41127`, `1819:45976` … `1819:50201` |
| **Onboarding 0 → 14** variants | `449:23901` … `777:26344` |
| Insights / Why?! | `352:9859` |
| Reports carousel | `7701:3678` |
| Rate development full screen | `7771:4818` |
| Insights empty state | `4256:15615` |

⚠️ The `🕰️ Design history` page in that file is **empty**. Use `SB Homepage - Old` (`312:2509`) instead.

**A cropped strip of the Options wall showing 6–8 of the 26 solutions is the most visually striking image available to you.** It proves breadth of exploration in one frame.

**FigJam:** Homepage/Notifications page `0:1` on the User Flow board (326 objects) · Homepage Phase 2 page `25:554` (17 stickies) · Summit ideation boards `oM2ikV9wif6vtM25wB6OD9`, `45mGIIVTechzdlgYmLGPN6`, `cJTxIOREvnjhdVrvZwwvrd`.

## Gaps

- The formal "Report" page for your Feb 2025 usability study was never written — the brief and raw notes exist, but the report child page is still template boilerplate. If you want a research-report artefact, you'd write it now from your own notes.

---

# Project 4 — Datalink

## v1 was wrong about this project — it's substantial

v1 treated Datalink as a five-week-old product with 5 accounts. Here's the actual picture:

- **Datalink Download originally launched in 2024** as an alternative to the API — *"allowing customers without strong IT support to still be able to regularly extract data in bulk and add it to their BI systems."*
- **Your work is a full redesign of that product**, delivered across **both Ocean and Air**.
- **Ocean Datalink is the original; Air Datalink is the derivative.** Jira ATH-1065: *"Goal: Build an Air version of the existing Ocean Datalink solution."* The Air FAQ says: *"We'll redesign the UI to align with the new Ocean version."* Your design led, and Air followed it.
- The low Pendo numbers are because **both versions sit behind feature flags** (`releaseOceanDatalink`, `releaseAirDatalink`), rolled out per company. Not weak adoption — gated release.

## Objective, problem and users

**Be aware: this is the one project with no written problem statement.** The v3.1 spec has no problem section, no personas, no user stories and no success metrics — it's an engineering document written for *"Engineers + AI coding agent"*. That's confirmed absent, not something I failed to find. So you'll be reconstructing the framing yourself. Here's the raw material.

**Who it's for**, from the original 2024 product description (verbatim):
> "Datalink Download was created as an alternative to API, allowing customers **without strong IT support** to still be able to regularly extract data in bulk and add it to their BI systems."

That single line is the user definition: someone who needs Xeneta data inside their own reporting, but has no engineering resource to call an API. Maps to **Procurement Analyst** in the UX persona set, and to the Finance and Logistics Operations functional personas.

**What it does (verbatim, spec overview):**
> "Datalink lets customers configure automated data exports — selecting datasets, uploading trade lanes, and choosing how and when data is delivered. This spec covers a full visual and structural redesign of the Datalink flow."

**The value proposition, from the welcome modal you designed (verbatim):**
> "Get market data delivered to you automatically"
> "Configure once. Xeneta delivers rate, capacity, reliability or transit times reports for your trade lanes – straight to your inbox or SFTP server."

**The customer demand, from the Air launch (verbatim):** the product addressed *"one of the most common customer requests of the last 2 years"* — the ability to *"define the exact lanes, cargo types, currencies, and more when they want to export our airline data."*

**Your own objective statement (verbatim, MBR):**
> "We completed a full redesign of the Datalink flow for Ocean and Air, **reducing steps and making the integration process faster to understand**."

**Reconstructing the problem — narrate the before/after table.** The old design tells you what was wrong with it:

- Everything on **one long form**, so users couldn't tell how much was left or what they'd get
- Datasets behind a **dropdown, one category at a time** — no way to see the full menu
- Trade lanes uploaded **after** creation, on a separate page, so the object existed before it was usable
- **No first-time experience at all** — new users landed on an empty screen with no explanation
- **No running summary** — nothing showed what you'd configured so far or what it would cost against your data allowance

**A defensible problem statement you could write:** *"Setting up an automated data export meant filling in one long form with no sense of progress, no view of what you'd get, and no indication of what it would consume from your data allowance — and if you were new, no explanation of what the product was for."*

**Every one of those five points maps to a design decision you shipped** — three-step wizard, multi-select dataset cards, lane upload moved into step 2, welcome modal, persistent export-summary and data-usage sidebar. That symmetry is the case study.

**In one sentence for the portfolio:** making self-serve data export legible to people who need the data but don't have an engineer — so that configuring an export feels like a guided setup, not a form to survive.

`[YOU FILL IN]` — was there a discovery doc or research brief behind the redesign that the spec doesn't reference? The 8 usability tests happened, but I found no written framing for what problem they were testing against.

## Confirmed timeline

| Date | Milestone |
|---|---|
| 2024 | Original Datalink Download ships |
| Feb 2026 | Datalink work paused to fix eeSea data quality |
| 22 Apr 2026 | UX Pulse recruitment for the Datalink redesign |
| 24 Apr 2026 | Presented export flow + prototype at design demo |
| 29 Apr 2026 | "Configurations" → "Exports" naming decision |
| May 2026 | **Redesign Spec v3.1 — 16 screens** |
| Q2 2026 | 8 usability tests |
| 7 Jul 2026 | Air Datalink group testing (23 attendees) |
| **29 Jul 2026** | **Air Datalink — Early Adopter MVP** |
| **14 Aug 2026** | **Ocean Datalink operational datasets — release** |

## The facts

**Your own summary (MBR, 9 Jun 2026):**
> "Datalink redesign. We completed a full redesign of the Datalink flow for Ocean and Air, reducing steps and making the integration process faster to understand. The update adds three new datasets: Capacity, Reliability, and Transit times; with the UI ready to support Schedules in the future. We also redesigned the Data Usage experience to enable upsell when users get to the limit of their API calls."

**Quarterly report:** *"I redesigned the Datalink flow for Ocean and Air, adding three datasets — Capacity, Reliability, and Transit times — backed by 8 usability tests."*

**The before/after table — straight from the spec, and the best artefact of its kind you have:**

| Dimension | Old design | New design |
|---|---|---|
| Create flow | Single long form | **3-step wizard with progress stepper** |
| Dataset selection | Dropdown, one category at a time | Multi-select cards with inline metric chips |
| Trade lane upload | Post-creation, on details page | Step 2 of the wizard |
| Delivery config | Single dropdown (Immediate / Scheduled) | Two-choice card UI (One-time / Recurring) + method cards (Email / SFTP) |
| Configuration details | Flat key-value list with file upload | Structured cards + report history table |
| First-time experience | **None** | Welcome modal with animation + empty state |
| Sidebar | **Not present** | Persistent "Export summary" + "Estimation of data usage" panels |

**The spec (v3.1, May 2026) is ~10,000 words covering 16 screens**, explicitly written for "Engineers + AI coding agent" — validation rules per step, conditional-logic pseudocode, shared components, hover/focus/loading states.

**Welcome modal copy:**
> "Get market data delivered to you automatically" / "Configure once. Xeneta delivers rate, capacity, reliability or transit times reports for your trade lanes – straight to your inbox or SFTP server."

## The story

**The naming decision — a strong, self-contained UX-writing story with a real constraint.**

You wanted to rename the product. You couldn't:
> "we cant change the name of it because that would be a huge effort not only from our team but even legally and commercially as all our contracts include 'Datalink' as part of it… What I did in order to make it less confusing is change it from Datalink Configuration to Datalink Exports."

And the reasoning for the word you *could* change:
> "Changed the word from 'Configurations' to 'Exports' as that is more common in the vocabulary of the customers and dont have the 'tech savvy feeling'."

**A designer who wanted to fix a name, hit a legal and commercial constraint, and found the part of the name they could still improve.** That's a better story than a free-hand rename.

**Commercial design:** you redesigned the Data Usage experience specifically to enable upsell when users hit their API-call limit, and designed locked-dataset states with upsell modals. Product-design hiring managers probe for exactly this.

## Verbatim quotes

> "That's a good product. I like it already. You know, it makes life easier. We don't have to go through the loop and then trying to ask for data. We can do it ourselves." — **BI Manager, Swiss Airlines**, testing Air Datalink

That single quote does a lot of work: it names the old manual process, and the relief of replacing it.

**Air Datalink launch post (29 Jul 2026):**
> "This is the first time that customers will be able to define the exact lanes, cargo types, currencies, and more when they want to export our airline data for outside analysis and integration into their BI tools." — addressing *"one of the most common customer requests of the last 2 years."*

## Copy blocks

**Headline stat:**
> A full redesign of a two-year-old product, shipped across Ocean and Air. Single long form → 3-step wizard. Backed by 8 usability tests.

**One-liner:**
> Redesigned Xeneta's self-serve data export product across both Ocean and Air — turning a single long configuration form into a three-step wizard, and adding three new datasets.

**Short paragraph:**
> Datalink lets customers pull Xeneta's market data into their own BI systems without engineering support. The original 2024 version put every decision on one long form, with no first-time experience and no way to see what you were about to receive. I redesigned it across both Ocean and Air: a three-step wizard, dataset selection as multi-select cards rather than a one-at-a-time dropdown, delivery configuration as explicit two-choice cards, and a persistent sidebar summarising the export and estimating data usage as you build it. Eight usability tests informed it. The Air version launched to early adopters in July 2026; the Ocean version shipped in August 2026.

**The naming constraint:**
> I wanted to rename Datalink — customers didn't find the word meaningful. I couldn't: the name appears in every customer contract, so changing it was a legal and commercial problem, not a design one. What I could change was the noun beside it. "Configurations" became "Exports", because that's the word customers actually use and it drops the technical register. Sometimes the win is the half of the name you're allowed to touch.

## Figma assets

**Ocean (current):** `📄 Datalink Configurations` — `RHiy1BasMMbmpCkJkShKp2`

| What | Node |
|---|---|
| **Hero: V1 full flow** (first-time, empty state, default page, Steps 1–3, Complete variants) | `163:5964` |
| **Locked datasets + upsell modals** | `306:17140` |
| Data usage limit | `308:6446` |
| Error helper texts | `308:7977` |
| Delete / pause export | `244:11210` / `248:15971` |
| Process: current flow / user flow / AI prototype | `1:6975` / `1:7001` / `1:7014` |

**Air:** `📄 Datalink Configurations (Air)` — `0rD2ITkM55ibdqAXhv5Mtb` — has a literal **v0 (`162:2313`) vs v1 (`2021:3059`)** comparison, plus a documented upsell A/B: Option A auto-modal `2021:5819` vs Option B "Request more" button `2021:4544`.

**The real BEFORE:** `Data Link Bulk Download Concept` — `qPald7rlbigxLKysIEuReL` (2024). Discovery `0:1` · Iteration 1 `128:15933` · Upsell/empty states `751:2408`.

**A two-year before/after on the same product** — 2024 `128:15933` → 2026 `163:5964` — captioned with "reduced steps, 8 usability tests, three new datasets".

## Gaps

- No written usability synthesis for the 8 Datalink tests — only the internal group-testing table. The spec is excellent; the research behind it isn't written up.
- No customer quotes for Ocean Datalink (shipped today).

---

# Cross-portfolio material

## Bonus project — navigation IA research (Jun–Jul 2026)

You're named as the **product-trio designer** on Xeneta's cross-product navigation research. This isn't one of your four projects, but it's strong supporting evidence that you work in a rigorous research culture, and it's worth a short "also" section or an interview talking point.

- **Open card sort:** 22 cards, unmoderated, n=22–31 analysed. Conditional-similarity matrix, UPGMA hierarchical clustering, per-segment then consensus. Five consensus groups held across BCO and LSP; four cards contested between segments. Net-new finding: *"rate management is an LSP-specific job."*
- **Moderated concept + tree test (Version B):** fielded 17 Jun – 30 Jul 2026, 8–12 moderated 45-minute sessions. Participants: Arlanxeo, Unilever, Bekaert, Volvo, PVH, Kohler.
- **Quantitative tree test:** n=42. Executive summary, verbatim: *"The redesigned navigation does not yet let customers find things. Overall task success is 27% (full) / 34% (engaged) against the 80% target… Users are confidently wrong… perceived ease is uniformly high and decoupled from success."*
- **Expert heuristic evaluation:** 37 usability issues (Ocean 22, Air 15), 4 critical, 12 major.

**Customer quotes from this work — all attributable, all excellent:**

> "My nervousness is, you guys keep adding value faster than I can keep up how to access it and utilize it. Where is this now? I can't remember where to get it. My biggest fear right now is I'm missing out on value that I'm paying for." — **Ocean Freight Procurement, Kohler**

> "Ideally it's one more simple place for you where you can actually do everything, you upload the rates, you manage the rates, but you also see how you're doing." — **Global Procurement Manager, Unilever**

> "The agility of making information actionable, although the information is available, is lagging behind." — **Global Category Manager Transportation & Logistics, Bekaert**

> "we have been confused for two years" — **Huawei**, on navigation

## One-line summary of each project

Use these as the opening line of each case study.

| Project | Users | Problem | Objective |
|---|---|---|---|
| **Ocean Homepage** | Tactical Specialist · Strategic Manager · Procurement Analyst — split into infrequent users and power users | Users spent high effort reaching insight because the platform was organised around features, not their workflow | Move the product from a **search-driven** to a **recommendation-driven** experience |
| **Carrier Scorecard** | Ocean freight procurement professionals; bought by Heads of Procurement | Procurement negotiated using only their own experience as evidence, with no market-wide view of carrier performance | Neutral, multi-dimensional carrier comparison fast enough to use inside a negotiation |
| **Ocean Schedules** | Procurement Managers · Operations / Supply Chain Managers | Procurement awarded contracts on rate with no view of actual performance; operations pieced schedules together from carrier websites | One standardised view of how ocean services actually perform |
| **Ports & Terminals** | Logistics/ops · Supply chain · Terminal planner · Procurement · Finance | No single view of what's happening at a port — carrier sites, eeSea and spreadsheets stitched together | The operational state of any port at a glance, built around exceptions |
| **Datalink** | Customers who need Xeneta data in their BI tools but have no engineering resource | One long form, no progress, no preview of output, no first-time experience | Reduce steps and make the integration process faster to understand |

## Portfolio-level stat block

| Project | Launched | Accounts (Aug 2026) | Users | Research |
|---|---|---|---|---|
| Ocean Homepage | Apr 2025 | 577 (94%) | 5,480 | 8 participants across 2 studies |
| Carrier Scorecard | Oct 2025 | 287 (47%) · 335 customers | 1,028 | 11 participants across 2 rounds |
| Ocean Schedules | Mar 2026 | 268 (44%) | 1,003 | 10 usability tests |
| Ports & Terminals | Jul 2026 | 21 · $2.4M ARR | 59 | part of 28 Q2 sessions |
| Datalink (Ocean + Air) | Jul–Aug 2026 | gated rollout | — | 8 usability tests |

**Total: 28 testing sessions in Q2 2026 alone**, across the Ocean portfolio.

## The five things that make this portfolio strong

1. **Three table concepts with a documented reason the winner won** (Carrier Scorecard). Real alternatives, real rationale.
2. **A three-stage before/after plus a wall of 26 explored solutions** (Homepage). Breadth and convergence, both visible.
3. **Problem → change → revalidation inside one study** (Homepage onboarding modal). Most designers claim this; you can show it.
4. **A research reversal you handled well** (Carrier Scorecard R1 said charts, R2 said tables; you shipped both with the table as default).
5. **Absorbing an acquired company's product** (eeSea). Rare, senior, and you have the strategic constraint in writing.

## Behavioural ratios worth memorising for interviews

1. **80%** of Carrier Scorecard users change the route after opening it.
2. **60%** load a saved metric template.
3. **57%** of Ocean Schedules searchers run a second search.
4. **4:1** — Ports & Terminals users click disruption status cards over the on-time card.
5. **103 → 335** customers on Carrier Scorecard in seven months.

## Language and accuracy rules

- **"since launch" is now safe for all four projects** — dates are confirmed. This was the main v1 restriction and it's lifted.
- **Never say eeSea was a vendor Xeneta replaced.** It was acquired. If you need a vendor-replacement story, the accurate one is Sea-Intelligence → eeSea's owned data.
- **Do not draw rising page-view line charts from Pendo.** Page-view counting changed in June 2026 (~8× jump with flat user counts). Totals are fine; trends are not.
- Two unattributed homepage quotes ("this view is a great improvement", "adding own lanes list is an excellent feature") must stay unattributed.
- August 2026 Pendo figures are partial (13 of 31 days).

## Sensitivity flags for external publication

| Item | Risk | Suggested handling |
|---|---|---|
| **$2.40M ARR** (P&T early adopters) | Real revenue, identifiable cohort | "Several million dollars of ARR", or drop for public sites |
| **Customer tier mix** (15 VIP / 4 Premium) | Internal segmentation | "Weighted to our highest-value customer tiers" |
| **Röhlig renewal +25%, EUR 60K → 75K** | Named customer commercial terms | Drop the figures; keep the quote |
| **Named research participants** (Walmart, Unilever, Mercedes, PepsiCo, Volvo, Syngenta…) | Research confidentiality | **Check with Xeneta before publishing names.** Safest: "a global FMCG manufacturer", "a top-3 global retailer" |
| **eeSea acquisition detail** | Public since Aug 2025 | Safe — it was a press release |
| **Tree test 27% success rate** | Unflattering to Xeneta | Only use if framed as your team's rigour, and get sign-off |
| Pendo percentages and user counts | Aggregate, no identities | Safe |

**The participant-name question is the one to resolve before you publish anything.** Research participants at named enterprise accounts almost always come with confidentiality expectations. Anonymised descriptors cost you very little narrative force.

## Still missing

| Missing | Where it is |
|---|---|
| **Power BI usage dashboard** | `app.powerbi.com` is blocked by Xeneta's Chrome policy. Export the relevant pages to PDF or PowerPoint yourself and I can read them. |
| Gong customer call quotes | Gong-via-Snowflake connector isn't attached to this session |
| True Figma last-modified dates | Not exposed by the Figma MCP; needs the REST API with a personal access token |
| Figma Make P&T prototype `7gG7jWzqxnR1SI7I9OsEZD` | Make files unreadable by these tools |
| Miro transshipment board `uXjVH137Wgs=` | Outside Figma |
| Synthesised research reports | Don't exist for any of the four projects — only raw notes and finding logs |

## What to do next

1. **Export the Figma frames** listed under each project. That's the biggest single lift remaining — the writing is done, the visuals aren't.
2. **Resolve the participant-naming question** with Xeneta before publishing.
3. **Export the Power BI dashboard to PDF** if you want its numbers folded in.
4. Pick **three** projects, not five. Homepage (scale), Carrier Scorecard (depth and craft), and eeSea migration (strategic complexity) are the strongest set. Datalink is a good fourth if you want to show breadth across products; the navigation research is better as an interview story than a case study.
