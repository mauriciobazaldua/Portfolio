---
status: draft, content complete pending screenshots
source: laid out to match the /work/applicants-manager, /work/compass-design-system, /work/ocean-homepage, and /work/carrier-scorecard page structure (Title / Subtitle / Main metric / Meta row / Brief / KPIs / Steps)
---

## A note before you read this

Added as a seventh case study, overriding the scope call your strategy doc had made earlier: `PORTFOLIO-STRATEGY.md`'s 21 Aug 2026 decision had marked this project **out** of the locked six, as redundant alongside **Applicants Manager** and weaker on outcome. You've now confirmed you want it in anyway, so it's built here to the same standard as the rest rather than left as an interview-prep note. Flagging it so the choice is visible, not silently reversed.

Source material: the 16 slides from your final walkthrough deck (internally called "Caja," officially "Creation of 1st Job Opening"), plus the copy already live on your old portfolio at maubazaldua.netlify.app/caja, which I used to cross-check facts and figures.

Same confidentiality treatment as **Applicants Manager** and **PickPal**: this project predates Xeneta, its content was already public on your old Squarespace portfolio with real names attached, and no enterprise research participants are involved, only internal team credits and usability test segments. So real names stay real: **OCC Mundial**, and your teammates Gerardo (Tech Lead), Lorena (Project Manager), Fernanda (Backend Developer), Daniel (Frontend Developer), and Paul Farley (fellow Product Designer).

One honest caveat, carried over from the old portfolio's own framing rather than smoothed over: the headline improvement number, job opening abandonment cut by almost 60 percent, comes from the project's own reported KPI change at the time, not a longer post-launch measurement window like the Xeneta projects have. The "next steps" slide in the deck was still proposing to make the flow permanent for all job openings, not just the first one, so treat this as a strong ship-and-measure result, not a matured, multi-year metric.

Same style rules as the rest: no em dashes, en dashes, or ampersands, bold marks feature and product names for scanning, `==this syntax==` marks extra emphasis matching the live highlight treatment.

Image slots are marked `[IMAGE: ...]`.

---

# CREATE YOUR FIRST JOB OPENING

## Turning the longest signup form in the market into one people actually finished

**Subtitle:** Recruiters had to build a company profile and their first job posting in the same flow, one of the slowest, flattest forms on the site. ==A live preview turned it into something they wanted to finish.==

**Main metric:** Job opening abandonment cut by almost 60%

**Meta row**
| Role | Timeline | Platform | Industry |
|---|---|---|---|
| Product Designer, Interaction Designer | Oct 2021 to Dec 2021 | Web App | Recruitment and HR Tech |

`[IMAGE: hero, the final live-preview job opening flow]`

---

## BRIEF

OCC Mundial, one of the largest job boards in Mexico with more than 20 years in the market, had a product question in 2021: how could it engage more with new recruiters? I'd spent two and a half years on the Recruitment team by then, and the account creation flow, the very first thing a new recruiter touched, was also the longest job opening process in the market: a flat, form-heavy flow that asked recruiters to set up a full company profile and post their first job at the same time.

---

## KPIs

| 73% | 100% | ~60% |
|---|---|---|
| Abandonment in the job opening description step | Task completion in usability testing | Reduction in job opening abandonment after launch |

---

## 01. RESEARCH

A competitive analysis and heuristic evaluation of the existing flow surfaced the shape of the problem fast: OCC's account and job opening creation was the longest in the market, split across more screens than competitors needed, and asking for fields recruiters rarely used. The sharpest number was **73% abandonment** in the job opening description step specifically, alongside a smaller signal worth keeping: 90% of users who got that far still clicked the **Preview** button, even though the flow gave them nothing to preview yet.

`[IMAGE: the research affinity map, insights and pain points from the recruiter audit]`

---

## 02. IDEATION

The first pass was straightforward: work with engineering to cut every field that wasn't essential, then rebuild the rest as clean low-fi wireframes borrowed from best practices for long forms elsewhere on the web. It solved the length problem on paper. It still felt like filling out a form.

**Fewer fields alone wasn't the fix.**

The gap was the 90% of users clicking a Preview button with nothing behind it: recruiters wanted to see the job posting come together, not just get through the fields faster. That pointed toward interaction design, an area I'd been studying on my own time but hadn't had a real product to apply it to, and it lined up with the Product team's separate goal of moving OCC's website toward a full WebApp experience. The fix became a **live preview panel**: as a recruiter typed a job title, a location, a salary range, the job posting itself assembled in real time next to the form, so the form stopped feeling like data entry and started feeling like building the thing they'd actually publish.

`[IMAGE: the live preview panel next to the form fields, showing a job opening assembling in real time]`

---

## 03. VALIDATION

With an end to end prototype built, I ran 10 usability tests through Maze across three different recruiter segments on purpose: enterprise accounts, small businesses, and people who had never used OCC at all, to make sure the fix worked whether or not someone already knew the old flow.

**100%** of participants completed the task. Scored as promoters and detractors, the read was as clean as usability testing gets: **7 super promoters** who said outright they preferred the new flow, **3 promoters** who liked it with room for polish, and **0 detractors**. Several asked why the live preview experience wasn't just how job openings worked all the time, not only the first one.

`[IMAGE: the usability testing results, promoter and detractor breakdown]`

---

## 04. LAUNCH AND SCALE

This was the first project where interactive, real-time behavior shipped on OCC's site, so development stayed tightly coupled with design through build, not handed off at the end. It shipped, and the number that mattered followed directly from the research: job opening description abandonment dropped by **almost 60%**, taking real conversion with it.

The obvious next step was to stop treating this as a first-time-only experience and roll the live preview into job opening creation generally, which was still on the roadmap as of the final walkthrough. For me personally, it was the first time I got to bring interaction and motion into a live product rather than a side project, and it set the direction I kept building on for the rest of my career.

`[IMAGE: the final shipped flow, form and live preview side by side]`

---

**Footer nav:** Previous case study, Next case study
