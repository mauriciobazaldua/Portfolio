import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Schema mirrors the three-layer structure from PORTFOLIO-STRATEGY.md:
// scan (title/oneLiner/headlineStat), impact (problem/objective/outcome/metrics),
// process (the markdown body — research, decisions, quotes, before/after — plus
// the optional `steps`/image fields below for case studies with real visuals).
//
// The image-bearing fields (heroImage, briefImages, steps[].images) are all
// optional/defaulted so case studies without real screenshots yet (still-TODO
// stubs) keep validating and rendering exactly as before — CaseStudyLayout.astro
// must render each of these sections conditionally, not assume they exist.
const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      oneLiner: z.string(),
      headlineStat: z.string(),
      // Excludes this project from the Home work list, the case-study
      // route (getStaticPaths won't build it — the URL 404s until
      // un-hidden), and the prev/next chain, without deleting the file.
      // For a project you want to pull back before shipping, not for
      // TODO stubs (those still render as visible TODO placeholders).
      draft: z.boolean().optional(),
      // Where the work was done — shown on the Home work-list row
      // (Company · Role · Timeline). Optional: case-study pages themselves
      // never render it (company context lives in the Brief prose instead,
      // per DESIGN.md), so a still-TODO stub can omit it.
      company: z.string().optional(),
      role: z.string(),
      timeline: z.string(),
      platform: z.string().optional(),
      industry: z.string().optional(),
      // Grid/footer-nav order — lower shows first. See PORTFOLIO-IA.md "Grid order".
      priority: z.number(),
      problem: z.string(),
      objective: z.string(),
      outcome: z.string(),
      metrics: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      // Per-project TEXT accent (title/headline stat/BRIEF label/step numbers/
      // KPI values) — defaults to the sitewide orange when absent. Interactive
      // elements always keep the sitewide accent; see tokens.css's --case-accent.
      accentColor: z.string().optional(),
      heroImage: z.object({ src: image(), alt: z.string() }).optional(),
      // Home work-list row thumbnail — a dedicated crop/illustration for
      // the small 240px list slot, distinct from heroImage (the
      // case-study page's full-width hero shot, and what the Home
      // Featured spotlight still uses). Falls back to heroImage on Home
      // when not set, so a still-TODO project keeps rendering.
      thumbnail: z.object({ src: image(), alt: z.string() }).optional(),
      quote: z.object({ text: z.string(), attribution: z.string().optional() }).optional(),
      briefImages: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      // Full-bleed image between the brief/KPI layer and the first step —
      // added 25 Aug 2026 for the Applicants Manager Figma rebuild. Optional
      // so other case studies keep rendering without it.
      interstitialAfterKPIs: z.object({ src: image(), alt: z.string() }).optional(),
      steps: z
        .array(
          z.object({
            title: z.string(),
            // Secondary sub-heading under the step number (e.g. "RESEARCH").
            label: z.string().optional(),
            body: z.array(z.string()).default([]),
            // For grid-style steps (e.g. a "Key problems" 2x2 grid) instead of prose.
            items: z.array(z.object({ title: z.string(), body: z.string() })).optional(),
            // Short scannable takeaways, rendered as a left-accent-bar list
            // below `body` — for a step whose facts are naturally a list
            // (a set of features, decisions, principles) rather than a
            // second dense paragraph. Pair with a short `body` (1 sentence
            // of context) rather than replacing it.
            highlights: z.array(z.string()).optional(),
            images: z.array(z.object({ src: image(), alt: z.string() })).default([]),
            // Full-bleed image directly after this step, before the next one
            // starts — Figma renders each step's supporting visual (a
            // collage, a results panel, etc.) as its own standalone
            // full-width block, not as an image embedded in the step's own
            // content column. Use this instead of `images` when that's the
            // shape of the source design.
            interstitialImage: z.object({ src: image(), alt: z.string() }).optional(),
            // Full-width image rendered *inside* the step, before
            // beforeAfter/images/video — unlike `interstitialImage` (a
            // sibling panel that always renders after the whole step
            // closes), this exists specifically so a step can show an
            // image first, then a beforeAfter slider under it, in that
            // order (e.g. Ocean Homepage's Launch step: the shipped
            // homepage, then a before/after against the legacy one).
            leadImage: z.object({ src: image(), alt: z.string() }).optional(),
            // A smaller, inset image within the content column (not
            // full-bleed like `images`/`interstitialImage`) — for a
            // process artifact that shouldn't read as a polished product
            // shot at full width, e.g. a photo of a whiteboard sketch.
            // Renders after body/quotes/highlights/stats, at a
            // constrained width with its own caption.
            inlineImage: z.object({ src: image(), alt: z.string(), caption: z.string().optional() }).optional(),
            // Interactive before/after comparison slider for this step.
            beforeAfter: z
              .object({
                before: z.object({ src: image(), alt: z.string() }),
                after: z.object({ src: image(), alt: z.string() }),
              })
              .optional(),
            // A demo/walkthrough video for this step — click-to-play by
            // default, not autoplay (respects both bandwidth and the
            // visitor's choice to watch). `src` is a plain string path
            // into public/, not `image()` — video isn't part of Astro's
            // image pipeline. Set `loop: true` for the opposite case — a
            // short interaction clip meant to read as a moving image, not
            // a video: renders autoplay/muted/loop with no controls, no
            // click required (e.g. Applicants Manager's split-pane demo).
            video: z
              .object({ src: z.string(), caption: z.string().optional(), loop: z.boolean().optional() })
              .optional(),
            // A full-width animated GIF — `src` is a plain string path
            // into public/, not `image()` (Astro's image pipeline would
            // flatten it to a static first frame) and not `video` (a
            // `<video>` element can't play a .gif source). Renders as a
            // plain `<img>`, which autoplays/loops natively in every
            // browser with no JS.
            gif: z.object({ src: z.string(), alt: z.string() }).optional(),
            // A set of alternate views of the same thing (e.g. a table
            // view and a chart view of the same result) — shown one at a
            // time, auto-advancing every 5s with manual prev/next arrows
            // and dots (StepCarousel.astro). Distinct from `images`
            // (every entry stacks full-width, all shown at once).
            carousel: z.array(z.object({ src: image(), alt: z.string() })).optional(),
            // Small inline stat callout, distinct from the top-level KPI
            // row — for a step where a real number is worth visually
            // punctuating mid-narrative (e.g. "3 personas planned -> 1
            // layout shipped"), not a full metrics grid.
            stats: z.array(z.object({ value: z.string(), label: z.string().optional() })).optional(),
            // Attributed verbatim quotes within a step (usability-testing
            // reactions, etc.) — distinct from the top-level `quote`
            // (Brief pull-quote, no attribution). Company names stay
            // anonymized by type per PORTFOLIO-STRATEGY.md until Xeneta
            // clears real names.
            quotes: z.array(z.object({ text: z.string(), attribution: z.string().optional() })).optional(),
          }),
        )
        .default([]),
    }),
});

export const collections = { work };
