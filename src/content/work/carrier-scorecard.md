---
title: "Carrier Scorecard"
oneLiner: "Built a single scorecard that ranks ocean carriers across reliability, cost, and emissions, weighted the way each business prioritizes."
headlineStat: "1000+ SCORECARDS CREATED"
company: "Xeneta"
role: "Senior Product Designer"
timeline: "Jun 2025 to Oct 2025"
platform: "Web App"
industry: "Logistics and Freight Tech"
priority: 2
accentColor: "#6FBF8E"
problem: "Procurement teams were negotiating with carriers using only their own experience as evidence: fragmented data, spreadsheets stitched together by hand, and no way to see how a carrier performed against the wider market."
objective: "The objective was a single page that could hold every dataset Xeneta has, ranked and weighted the way each business actually prioritizes, and fast enough to use inside a live negotiation, not just a quarterly review."
outcome: "The scorecard reached 335 customers, with 80% of users reconfiguring the route on open and 60% loading a saved metric template, growing from 103 customers at the end of 2025 to 335 by July 2026."
metrics:
  - label: "Customers using Carrier Scorecard"
    value: "335"
  - label: "Of users who open it change the route to their own lane"
    value: "80%"
  - label: "Of users who load a saved metric template"
    value: "60%"
heroImage:
  src: "../../assets/work/carrier-scorecard/main-image.png"
  alt: "The shipped Carrier Comparison Scorecard, ranking CMA CGM, Maersk, and MSC with a detailed metric breakdown"
thumbnail:
  src: "../../assets/work/carrier-scorecard/thumbnail.png"
  alt: "Carrier Scorecard thumbnail"
quote:
  text: "Procurement decisions are often rate-driven and transactional due to the lack of comprehensive performance data."
interstitialAfterKPIs:
  src: "../../assets/work/carrier-scorecard/brief.png"
  alt: "Three views of the scorecard side by side: the ranked carrier list, the metric weighting sliders, and a radar chart comparison"
steps:
  - title: "Research"
    label: "RESEARCH"
    body:
      - "I wrote the brief as a formal user story before designing anything: as a Xeneta user, I want to run quick, flexible, and detailed carrier comparisons, so I can weigh multiple variables at once and make data-driven decisions, with eight acceptance criteria attached, from configurable datasets down to a 30-second response time. That structure came directly from what research kept surfacing: teams wanted to **evaluate carrier performance across key metrics**, **customize scoring criteria** to match business priorities, and **share and justify decisions** to internal stakeholders, not just see a ranking."
      - "The pain was consistent across every account: manual comparisons were slow and error-prone, and the tools available did not let anyone set more than one or two variables at a time, so most teams defaulted to rates alone. One participant put it plainly: they lacked sufficient data to measure carrier performance effectively, so procurement decisions stayed rate-driven by default. Another described comparing carriers across 14 separate criteria at the lane level, weighted differently depending on who in the business was asking."
    interstitialImage:
      src: "../../assets/work/carrier-scorecard/step-1-interstitial.png"
      alt: "The Carrier Comparison Scorecard user flow, mapped from login through metric setup to the shared results view"
  - title: "Ideation"
    label: "IDEATION"
    body:
      - "The hard constraint was fitting every dataset Xeneta has onto a single page without it becoming unusable. A slider-based weighting system became the answer: instead of a fixed formula, each user sets how much a metric like rates, reliability, or emissions matters to them, and the **scorecard** recalculates live. It was the simplest interaction we could find for a genuinely complex decision."
      - "I explored three table concepts before choosing one: a traditional table, a version with centered scores, and an interactive version where every cell linked into **Market Trends** and **Market Benchmarks** elsewhere in the platform. The third shipped, chosen specifically because it connected the page to the rest of Xeneta instead of being a dead end."
      - "This was also the first project where I used AI as part of the design process itself. I built fully interactive prototypes with Claude rather than static Figma mockups, and tested those directly with customers, closer to how the real product would actually feel than a click-through prototype usually allows."
    images:
      - src: "../../assets/work/carrier-scorecard/step-2-image-1.png"
        alt: "An early scorecard concept: metric weighting sliders alongside the ranked carrier results panel"
      - src: "../../assets/work/carrier-scorecard/step-2-image-2.png"
        alt: "A second concept, exploring a more gamified scorecard layout with numbered rank cards"
  - title: "Validation"
    label: "VALIDATION"
    body:
      - "Two rounds of testing, and the second one changed the design. Round 1, a small concept test, found users leaning toward a visual chart over a table. Round 2 ran with eight enterprise shippers against a working prototype, a bigger and more realistic sample, and it said the opposite, feedback on the chart concept splitting hard as more carriers were added to a comparison."
      - "Rather than pick a single winner, the shipped design kept both views, with the table as the default. Early concept tests measure appeal. Later prototype tests measure use. They do not always agree, and the second one is usually the one to trust."
    quotes:
      - text: "The table view in the prototype is preferred over the chart view for clarity."
        attribution: "a global truck and equipment manufacturer"
      - text: "The chart would become very convoluted."
        attribution: "a global retailer"
      - text: "Table and chart views are both valuable: tables for summaries and sharing, charts for detailed analysis."
        attribution: "a global chemicals company"
    interstitialImage:
      src: "../../assets/work/carrier-scorecard/step-3-interstitial.png"
      alt: "The tested prototype, with the Table and Chart toggle in the detailed scorecard section"
  - title: "Iteration"
    label: "ITERATION"
    body:
      - "Feedback shaped the surface directly. An internal design critique flagged that badges and blue highlighting for the best-performing carrier read as noisy, I switched to plain text with a green highlight instead, and updated the whole file the same day. A styling pass simplified the interface further, cutting back on grey and badge clutter across the table."
      - "I also contributed a **Table and Chart switcher** component back into the **Compass design system**, since this was the first place that pattern was needed, and later escalated a systemic table side-scroll issue to the Compass team once it became clear other pages had the same problem. To kill a blank first-time experience, I designed a smart default: a new user's scorecard fills automatically with their most searched route, a balanced scoring template, and their contracted carriers, and after that first visit, it remembers their last configuration instead of resetting."
    beforeAfter:
      before:
        src: "../../assets/work/carrier-scorecard/step-4-before.png"
        alt: "Before: numbered rank badges and blue highlighting on the best-performing carrier"
      after:
        src: "../../assets/work/carrier-scorecard/step-4-after.png"
        alt: "After: plain text ranking with a green highlight on the best-performing carrier"
  - title: "Launch and scale"
    label: "LAUNCH AND SCALE"
    body:
      - "Early access opened to 24 accounts in September 2025, and the product went to general availability at the Xeneta Summit that October. It reached freight forwarders that November, and watchlist support followed the next spring. Growth has been the clearest signal in the whole project: 103 customers at the end of 2025 to 335 by July 2026, without a plateau."
      - "The behavior matters more than the reach. Most users do not accept the default view, they change the lane, adjust the weights, and save their own template for next time, and adding carriers to a comparison, the final step of the flow, has happened over 1,400 times, more than a thousand finished scorecards. One freight forwarder's global director of ocean product told their account team the tool was one of the highlights of the Summit, and the relationship grew stronger shortly after."
    stats:
      - value: "80%"
        label: "Reconfigure the route on open"
      - value: "60%"
        label: "Load a saved metric template"
      - value: "335"
        label: "Customers using the scorecard"
    gif:
      src: "/work/carrier-scorecard/step-5-demo.gif"
      alt: "The shipped Carrier Comparison Scorecard, configuring metrics and viewing results in motion"
    carousel:
      - src: "../../assets/work/carrier-scorecard/step-5-slide-1.png"
        alt: "The shipped scorecard's table view, ranking CMA CGM, Maersk, and MSC with a full metric breakdown"
      - src: "../../assets/work/carrier-scorecard/step-5-slide-2.png"
        alt: "The shipped scorecard's chart view, a radar comparison of the same carriers across every metric"
---

Carrier Scorecard: turned rate-driven, memory-based carrier negotiations
into a scorecard weighted the way each business actually prioritizes.
Structured content lives in the frontmatter `steps` above; this body isn't
rendered while `steps` has entries (see CaseStudyLayout.astro).
