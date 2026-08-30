---
title: "Applicants Manager"
oneLiner: "Rebuilt around how recruiters actually review candidates, not how the database stored them."
headlineStat: "+60% INCREASE IN CV INTERACTIONS"
company: "OCC Mundial"
role: "Senior Product Designer"
timeline: "Mar 2021 – Jan 2022"
platform: "Web App"
industry: "Recruitment · HR Tech"
priority: 5
accentColor: "#8DB0F4"
problem: "OCC Mundial's core applicant-review tool had run since 2010 and accumulated real usability debt: it was impossible for recruiters to efficiently review all their CVs. Recruiters could only review one CV at a time, and Work Experience, the field 79% of users ranked most important, was buried fourth in the layout."
objective: "Rebuild applicant review around a model recruiters already understood: a split-pane list-plus-preview, closer to an email client than a database view, built to support fast, high-volume triage."
outcome: "It shipped to every OCC recruiter and drove a 60% increase in CV opens and status changes, the team's core engagement metric."
metrics:
  - label: "CV opens and page interactions"
    value: "+60%"
  - label: "Client interviews and usability tests"
    value: "20+"
  - label: "Status"
    value: "Live"
heroImage:
  src: "../../assets/work/applicants-manager/main-image.png"
  alt: "Applicants Manager final product: the redesigned split-pane list and CV preview interface"
thumbnail:
  src: "../../assets/work/applicants-manager/thumbnail.png"
  alt: "Applicants Manager thumbnail: the OCC Mundial logo on a light blue background"
quote:
  text: "How could we help our recruiters find their ideal candidate faster and more efficiently?"
interstitialAfterKPIs:
  src: "../../assets/work/applicants-manager/interstitial-1.png"
  alt: "Applicants Manager, full product view of the redesigned interface"
steps:
  - title: "Key problems"
    label: "RESEARCH"
    body: []
    items:
      - title: "Slowness"
        body: "Reviewing CVs required opening each one individually and returning to the list every time, a slow, repetitive loop worsened by long loading times."
      - title: "Information architecture"
        body: "79% of recruiters ranked Work Experience as the most important field, yet it appeared 4th in the CV layout. The information hierarchy didn't match real evaluation behavior."
      - title: "Broken filters"
        body: "Filters were unreliable, often returning no results or needing a page refresh, and displayed every possible option regardless of context, adding noise."
      - title: "Lack of status options"
        body: "Only 3 candidate status options were available, far fewer than competitors, limiting recruiters' ability to track progress through the hiring pipeline."
    images: []
    interstitialImage:
      src: "../../assets/work/applicants-manager/old-applicants.png"
      alt: "The redesigned Applicants Manager showing an individual CV in the split-pane preview"
  - title: "Design direction"
    label: "IDEATION"
    body:
      - "The key insight from research was that recruiters needed to review many CVs quickly without feeling overwhelmed. The solution came from an unexpected source: email clients."
      - "Even with 100 unread emails, reviewing them isn't tedious. The split-pane structure, list plus preview, is perfectly suited for high-volume review. This became the structural foundation of the redesign."
    images: []
    interstitialImage:
      src: "../../assets/work/applicants-manager/ideation-collage.png"
      alt: "Ideation references: email-client interfaces that shaped the split-pane list-and-preview structure"
  - title: "Wireframing and testing"
    label: "WIREFRAMING AND TESTING"
    body:
      - "With wireframes approved by both the dev team and PMs, 20 usability tests were run with a full prototype. Results were strong, with only minor adjustments needed."
      - "One unexpected but highly requested feature emerged: multi-selection, allowing recruiters to batch-move or batch-download candidates."
    images: []
    interstitialImage:
      src: "../../assets/work/applicants-manager/testing-results.png"
      alt: "Usability testing results: 8 Super Promoters, 12 Promoters, and 1 Detractor, against the tested CV screen"
  - title: "Reflection"
    label: "DELIVERY"
    body:
      - "This was the most challenging project of my career to date: the longest in development, the most research-intensive, and the one where the stakes were highest. OCC trusted me, a relatively new team member, to redesign one of the company's core products."
      - "Every design decision had to be backed by evidence. Even the smallest changes required testing before implementation. That discipline, research first and design second, became a permanent part of my design process."
    images: []
    beforeAfter:
      before:
        src: "../../assets/work/applicants-manager/slider-before.png"
        alt: "Before: the old Applicants Manager, a flat table listing every applicant with no CV preview"
      after:
        src: "../../assets/work/applicants-manager/slider-after.png"
        alt: "After: the redesigned Applicants Manager, a split-pane list with the CV preview open alongside it"
    video:
      src: "/work/applicants-manager/interaction-demo.mp4"
      caption: "The redesigned Applicants Manager's split-pane interaction, browsing the applicant list and previewing a CV"
      loop: true
---

Pre-Xeneta work, OCC Mundial (Mexico's largest job board). Applicants
Manager is the tool recruiters used every day to review candidates against
an open job posting, and by 2021 it was over a decade old, built for a
database's shape, not a recruiter's workflow.

Four research tracks ran in parallel rather than sequentially, because the
team needed both the "what" and the "why" before committing to a
direction: 100+ Hotjar session recordings, NPS and in-product surveys, a
full product/UX audit, and 20+ direct client interviews.
