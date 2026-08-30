# Portfolio strategy brief

Produced via `/strategize`, building on [PROJECT-CONTEXT.md](./PROJECT-CONTEXT.md) and the raw material in `portfolio-source-of-truth.md` / `portfolio-usage-facts.md`. Planning only — no wireframes, copy, or code yet.

## Context

Mauricio is a UX Designer at Xeneta (freight rate benchmarking / market intelligence platform) actively job hunting for Senior Product Designer roles. He has four fully-documented projects — Ocean Homepage, Carrier Scorecard, Ocean Schedules + Ports & Terminals (an acquired-company product migration), and Datalink — each with confirmed timelines, Pendo usage data, named research participants with verbatim quotes, documented design decisions with rationale, and located Figma source files. This is unusually complete raw material: most portfolios have polished screens and thin process; this has the opposite problem — the *evidence* is exhaustive and the *visual assets* haven't been exported yet.

Per [PROJECT-CONTEXT.md](./PROJECT-CONTEXT.md), three audiences need to read this without any one of them getting in the others' way: HR/recruiters (scan in seconds), non-design hiring managers (skim for business impact), and designer peers (read deeply for process rigor).

## Gap

Two gaps, not one:

1. **Structural gap.** The source material is organized as an internal reference document (facts → story → quotes → copy blocks → Figma assets → gaps, per project). That's the right shape for *writing* case studies, but it's not yet organized as something a recruiter can scan in 15 seconds *and* a designer can read in 15 minutes from the same page.
2. **Confidentiality gap.** The source-of-truth document's own "Sensitivity flags" table identifies real risk: named enterprise research participants (Walmart, Unilever, Mercedes-Benz, PepsiCo, Volvo, Syngenta, Kohler, Bekaert...), a specific customer's renewal commercial terms (Röhlig, +25%, EUR 60K→75K), and identifiable ARR figures ($2.40M). None of this is cleared for external publication yet. This is a **blocking constraint**, not a nice-to-have — publishing named research participants without consent is a professional and likely contractual problem, not just a design polish issue.

## Opportunity

Why this is worth doing well, not just doing: the material is genuinely rare. Three things in here don't show up in most Senior PD portfolios:

- **A documented research reversal handled correctly** (Carrier Scorecard: round 1 said charts, round 2 with a bigger sample said tables — shipped both, table as default). Most designers can't show they changed their mind based on evidence.
- **Problem → design change → revalidation inside a single study** (Homepage onboarding modal). This is the single strongest piece of process evidence in the set — most portfolios *claim* iteration; this one can *show* it with two participants and a timestamp.
- **A structurally unusual project** (absorbing an acquired company's product — eeSea into Xeneta — with an explicit, quoted strategic constraint: "eeSea's ICP and Xeneta's ICP are not the same... there is no rollback plan"). This is rarer and more senior than a typical greenfield or redesign story.

If the portfolio just lists these projects, that opportunity is wasted. If it's structured so a hiring manager can find "research reversal handled correctly" in one skim, it's a differentiator.

## Goals

- Primary: recruiter/HR screens convert into interviews at target companies (per PROJECT-CONTEXT.md).
- Secondary, now sharpened by the source material: substantiate the *Senior* claim specifically through evidence already in hand — ownership of ambiguity (the eeSea migration's scope decisions), cross-functional/business impact (revenue and adoption numbers, commercial design thinking on Datalink upsell), and research rigor (60+ verbatim quotes, documented reversals) — not just "did the work."

## Constraints

- **Confidentiality clearance is unresolved and blocking.** See Key Assumptions below — this needs an answer before any real case study copy gets written, let alone published.
- Visual assets (Figma frame exports) don't exist yet — noted as future work, not a blocker for strategy.
- Build platform and firm timeline remain open (per PROJECT-CONTEXT.md) — don't block strategic framing, but will gate `/wireframe` and `/specify` later.
- Datalink has no written problem statement in the source material (confirmed absent, not a research gap) — its case study will need Mauricio to reconstruct the framing from the before/after table, which the source doc already scaffolds well.

## Guiding principles

1. **One structure, three depths — not three portfolios.** Every case study carries a scan layer (one-liner + headline stat), an impact layer (short paragraph, business outcome), and a process layer (research, quotes, decisions, Figma). Audiences self-select depth by how far they read, not by which page they're on.
2. **Evidence over assertion.** Every claim traces to a real quote or number already in the source document. This project's raw material makes this easy to honor — the risk is diluting it with generic portfolio-speak, not lacking evidence.
3. **Confidentiality before compellingness.** Where a real name or figure isn't cleared, use the anonymized version from the sensitivity table (e.g., "a global FMCG manufacturer" instead of "Unilever"). Never let narrative force override a consent question that hasn't been asked.
4. **Show reasoning, not inventory.** This is Intent's "Real Estate Tour" anti-pattern (Category 9) — describing what's on screen instead of why it exists. The source material already resists this well (e.g., the three-table-concepts story, the Datalink naming constraint); the case study writing should preserve that, not flatten it into feature lists.

## Decisions (resolved 20 Aug 2026)

1. **Confidentiality: anonymize by default.** Not yet cleared by Xeneta. Every named research participant and specific commercial figure gets the anonymized treatment from the source document's own sensitivity table until Xeneta explicitly signs off — e.g. "a global FMCG manufacturer" not "Unilever", "several million dollars of ARR" not "$2.40M ARR", the Röhlig renewal drops its figures and keeps the quote. This applies to all four featured projects; **before actual publication**, Mauricio still needs to resolve clearance with Xeneta directly — this default doesn't replace that conversation, it just means nothing blocks on it yet.
2. **Project selection: 3 core + Datalink as 4th**, per the source document's own recommendation — Ocean Homepage (scale), Carrier Scorecard (craft/research rigor), the eeSea migration (strategic complexity), Datalink (breadth across products, lower priority than the other three). Navigation IA research stays an interview talking point, not a built case study.
3. **Timeline: open-ended.** No hard deadline — plan without artificial time pressure. Revisit phasing if a real deadline emerges later.

## Open question still outstanding

**Competitive framing.** No primary research exists yet on how competing Senior PD portfolios are structured — the layered scan/impact/process approach in Guiding Principle 1 is a reasoned hypothesis from the audience definition, not evidence from comparable portfolios. Worth testing later (e.g. via `/investigate` or informal review of a handful of real Senior PD portfolios) rather than treating as settled.

## Decisions (resolved 21 Aug 2026) — scope reopened and expanded

The user added a folder of pre-Xeneta portfolio material (`Old portfolio/` — 3 case studies from OCC Mundial and an earlier startup, IW) and asked for a recruiter-lens read on what to keep, plus confirmed they want a **Compass Design System** case study — a story that doesn't exist yet in the source material and needs its own extraction pass, same as the original four did.

Evaluated against the same "quality over quantity" discipline this project has held since the original scope decision:

- **Applicants Manager** (OCC Mundial, 2021) — **in.** Same shape as the strongest Xeneta stories (core B2B SaaS workflow tool, heavy quantitative research — 100+ session recordings, 20+ interviews, a distinctive reframe modeling the redesign on email-client UX, a hard outcome number: +60% CV opens). Proves the research rigor predates Xeneta, not a one-employer fluke.
- **"Caja" / Create Your First Job Opening** (OCC Mundial, 2021) — **out.** Same company, same year, same research method as Applicants Manager, and honestly weaker on outcome (the case study itself notes there's no post-launch KPI — the author left before it shipped long enough to measure). Redundant alongside Applicants Manager, not additive.
- **PickPal** (2018/19, IW) — **in, but explicitly lowest priority.** The only 0-to-1, multi-app, consumer-facing, brand-from-scratch project in the set — real breadth nothing else shows. Also the oldest project by 5+ years and the weakest on research rigor (stakeholder-driven, not direct — the case study says so itself). Kept deliberately for breadth, not parity with the rest.
- **Datalink — dropped from the core set**, replaced by Applicants Manager. This isn't a quality judgment against Datalink itself; it's a scope-discipline call given the count was already growing (see below), and Applicants Manager tells a more distinctive story (email-client reframe, cross-employer rigor) than Datalink's wizard-flow redesign does.
- **Compass Design System — in, high priority.** The user's own stated top priority, and independently the strongest gap in the existing set: right now "ownership of design systems" only shows up as incidental mentions inside Carrier Scorecard (extending a table/chart component, escalating a Compass scroll bug). A dedicated systems-thinking case study is exactly what a Senior/Staff-track recruiter is trained to look for, and nothing else in the portfolio makes that case directly.

## Scope (Phase 2) — locked, 6 case studies

Tiered by priority (grid/list order matches this ranking, adjustable if it doesn't read right once built):

1. **Ocean Homepage** — full depth. Strongest scale story (94% of active accounts), clearest iterate → revalidate evidence in the whole set.
2. **Compass Design System** — full depth once source material exists. The user's top personal priority and the sharpest systems-thinking signal available.
3. **Carrier Scorecard** — full depth. Strongest craft/research-rigor story (three table concepts with a documented winner, a research reversal handled correctly).
4. **eeSea migration** (Ocean Schedules + Ports & Terminals as one story) — full depth. Strategically the most senior story: absorbing an acquired company's product with an explicit, quoted strategic constraint.
5. **Applicants Manager** (OCC Mundial, pre-Xeneta) — full depth; real content already extracted from the old portfolio export, unlike the still-TODO Xeneta stubs.
6. **PickPal** (IW, pre-Xeneta) — lower priority by explicit decision. Real content already extracted.

**Navigation IA research** and **"Caja"** — not case studies. Both live as "also worked on" / interview-prep material only, same treatment.

**Confidentiality note for the two new pre-Xeneta projects:** unlike the Xeneta material, Applicants Manager and PickPal's source content was already live on the user's own public Squarespace portfolio before this — real company names, real metrics, no anonymization concerns raised at the time. Reused as-is on that basis; this is a different situation from the Xeneta enterprise-client research-participant confidentiality question, not an exception to it.

**Still open:** Compass Design System needs the same kind of source-material extraction pass the original four Xeneta projects got (via `portfolio-source-of-truth.md`) before its case study can move past a placeholder — nothing to reconstruct it from yet.

This scope is locked for planning purposes — next steps (`/organize` revisiting the site map for 6 projects instead of 4, content extraction for Compass DS, or visual work on the new case study pages) can proceed from it.
