# Product usage facts — Mauricio Bazaldua

**Version 2 — 14 August 2026.** Data from Pendo, plus MBR/QBR reporting recovered from Confluence, SharePoint and Slack. Supersedes v1.

**What changed in v2:**

1. **Launch dates are now confirmed for every project.** v1 could not date three of the four. That restriction is lifted.
2. **Historical usage now extends back before Pendo's April 2026 cutoff**, via internal MBR/QBR reporting.
3. **The eeSea framing was wrong in v1.** Xeneta *acquired* eeSea (signed 30 Jul 2025); it was never a vendor Xeneta replaced. The vendor actually dropped was Sea-Intelligence.
4. Datalink is a redesign of a 2024 product across Ocean *and* Air, not a new five-week-old tool.

---

## Confirmed launch timeline

| Project | Internal | External / EAP | GA |
|---|---|---|---|
| **Ocean Homepage** | 7–8 Apr 2025 | 15–22 Apr 2025 (Preview) | May 2025 · legacy deprecated 17 Nov 2025 |
| **Carrier Scorecard** | 3 Sep 2025 | 12 Sep 2025 — EAP, 24 accounts (19 BCO + 5 FF) | **9–10 Oct 2025, Xeneta Summit** · FFs added 20 Nov 2025 |
| **Ocean Schedules** | 13 Feb 2026 | 18 Feb 2026 — EAP | 4–10 Mar 2026 |
| **Ports & Terminals** | 7 May 2026 | — | **30 Jul 2026** |
| **Air Datalink** | — | 29 Jul 2026 — Early Adopter MVP | gated by `releaseAirDatalink` |
| **Ocean Datalink** (redesign) | Spec v3.1 May 2026 | — | **14 Aug 2026** — operational datasets |

Two dates carry minor source conflicts: Ocean Schedules external (Confluence 4 Mar vs Slack announcement 10 Mar) and Homepage external (Confluence 15 Apr vs Slack 22 Apr). Either is defensible; pick one and stay consistent.

---

## Pendo — measurement window 1 Apr – 13 Aug 2026

**Platform denominator:** 613 active accounts · 6,037 active users.

| Project | Accounts | % of platform | Users | Views | Avg time on page |
|---|---|---|---|---|---|
| Ocean Homepage | **577** | 94% | **5,480** | 128,850 | 4m 56s – 7m 50s |
| Carrier Scorecard | **287** | 47% | **1,028** | 17,153 | ~6m 30s |
| Ocean Schedules | **268** | 44% | **1,003** | 25,370 | 7–8 min |
| Ports & Terminals | **21** | 3.4% | **59** | 740 | 3m 30s – 3m 58s |
| Air Datalink (landing) | 5 | — | 11 | 115 | 6–10 min |
| Air Datalink (create flow) | 5 | — | 8 | 109 | — |

Ports & Terminals covers 5 weeks; the others 19. Datalink's low numbers reflect **feature-flag gating**, not weak adoption — both Ocean and Air roll out per company via LaunchDarkly.

---

## Historical usage from internal reporting (pre-dates Pendo)

**Carrier Scorecard — customer adoption:**

| Point | Customers |
|---|---|
| At GA, Oct 2025 | ~40 weekly active users / 38 companies |
| End 2025 | 103 |
| Mid-Apr 2026 | 304 |
| End Q2 2026 | **333** (target 350) |
| Jul 2026 | 335 |

Usage −21% vs May baseline in July 2026.

**Ocean Schedules:**

- 423 users searched in the first month post-launch (to 31 Mar 2026), ~50:50 shippers / freight forwarders
- 409 active users, 1,636 trade lane searches, 141 companies in just over a month
- 183 webinar registrations
- 143 active customers (13 Apr 2026) → 197 (Q2) → 206 since launch, 66 in July
- May 2026 MBR: *"a 50% decline in MAU, in line with expected post-launch normalization trends… 157 active companies and 532 active users, with freight forwarders remaining the most active segment"*
- Usage −24% vs May baseline in July 2026

**Ocean Homepage:**

- Weekly users up **~23% to ~211** (Oct 2025)
- Most frequent action: **Watchlist Selected, 23,100 events** — *"users primarily come to the homepage to quickly access insights on specific tradelanes"*

**eeSea Tableau dashboards** (the migration target):

| Dashboard | Views | Companies |
|---|---|---|
| PORT | 738 | 29 |
| TRADE | 388 | 15 |
| Services-port | 231 | 27 |

231 users from 66 Xeneta customers were still on the eeSea web app as of Jan 2026. Deprecation target: 31 Aug 2026.

**Platform-wide (VoC 2025, n=393 / 264 complete):** SUS **77.3 (Grade B)** · 90.2% agree Xeneta is easy to use · "Confidence in taking action from data" 3.68/5.

---

## Depth-of-interaction detail

**Carrier Scorecard:**

| Action | Users | Accounts | Events |
|---|---|---|---|
| Opened | 1,027 | 287 | 2,358 |
| Changed route | 823 | 254 | 4,758 |
| Selected saved template | 617 | 211 | 1,314 |
| Updated market metrics | 379 | 161 | 1,951 |
| Added carriers | 315 | 135 | 1,428 |
| Switched view | 309 | 148 | 1,183 |
| Export report | 56 | 35 | 485 |
| Template created | 13 | 13 | 13 |

Corroborated independently by Insight Library entry **IL-52: "14 template creators vs 581 carrier-selection users"** — the same template-authoring gap, found by a separate team through a different method.

**Ocean Schedules:**

| Action | Users | Accounts | Events |
|---|---|---|---|
| Searched a trade lane | 617 | 185 | 3,798 |
| Follow-up search | 352 | 111 | 2,069 |
| Toggled view | 323 | 125 | 1,296 |
| Applied carrier/service filter | 277 | 101 | 2,779 |
| Opened delay tooltip | 157 | 74 | 1,269 |
| No results found | 365 | 125 | 1,641 |
| Export to Excel | 48 | 27 | 222 |
| Export to PNG | 27 | 13 | 52 |

**Ocean Homepage modules:**

| Module | Users | Accounts |
|---|---|---|
| Market news opened | 755 | 273 |
| Timeline updated | 596 | 225 |
| Most Dynamic Trade Lanes — dataset selector | 377 | 175 |
| Create new watchlist | 236 | 128 |
| Report clicked | 177 | 119 |
| Reports carousel scrolled | 161 | 117 |
| Webinar carousel scrolled | 151 | 108 |
| Rate development volume toggle | 125 | 93 |
| AI Agent hub | 88 | 66 |

**Ports & Terminals, first 5 weeks:**

| Element | Clicks | Accounts |
|---|---|---|
| Search | 20 | 8 |
| Terminal filter | 17 | 4 |
| Date picker | 14 | 4 |
| Omitted status card | 10 | 5 |
| Induced status card | 8 | 3 |
| Departure toggle | 7 | 3 |
| Export | 4 | 2 |
| On-time status card | 4 | 2 |
| Arrival toggle | 3 | 2 |
| Date presets (5 of 7) | 0–2 | 0–2 |

Early adopters: 21 accounts, **$2.40M active ARR**, 15 VIP / 4 Premium / 1 Plus / 1 unclassified.

---

## Research volume

| Project | Sessions | Participants |
|---|---|---|
| Ocean Homepage | 2 studies | 8 (Dometic, 3M, Walmart, IKEA / Syngenta, Nouryon, Philips, Unilever) |
| Carrier Scorecard | 2 rounds, 7+ calendar sessions | 11 companies (Aditya Birla, UD Trucks, PepsiCo / Syngenta, Continental, Grasim, Mercedes-Benz, ABF, Volvo, Walmart, Dow) |
| Schedules + P&T | 10 usability tests | part of 28 Q2 2026 Ocean sessions |
| Datalink | 8 usability tests | + group testing 7 & 29 Jul 2026 |
| Navigation IA (cross-product) | card sort n=22–31 · tree test n=42 · 8–12 moderated | Arlanxeo, Unilever, Bekaert, Volvo, PVH, Kohler |

---

## Caveats that still apply

1. **Do not trend raw Pendo page views across June 2026.** Counting changed (~8× jump, flat unique users, uTurnCount 4 → 300). Totals are usable; trend lines are not.
2. **August 2026 is partial** — 13 of 31 days.
3. **Internal Xeneta users are not excluded** from Pendo counts.
4. Account `5969` is an outlier on Carrier Scorecard: 250 of 485 exports and 49 of 190 rage clicks, from 1 user in 5 days. Exclude or call out.
5. Ports & Terminals GA is soft-dated — planned end-May, then mid-June, actually live 30 July 2026.

---

## Still unavailable

| Source | Status |
|---|---|
| **Power BI usage dashboard** | `app.powerbi.com` blocked by Xeneta's Chrome policy. Export to PDF/PPTX and it can be read. |
| Gong call transcripts | Gong-via-Snowflake connector not attached to this session |
| Mixpanel | Production project is EU-hosted; connector points at the US region |
| Snowflake `PRODUCT_ANALYTICS` tables | Connector not attached |

The MBR/QBR figures above cover much of what the Power BI dashboard would likely show — customer counts, MAU, and adoption curves against target — so the gap is smaller than it was in v1.
