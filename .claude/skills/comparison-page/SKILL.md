---
name: comparison-page
description: Author a competitor comparison page at /alternatives/{competitor} for Arco. Use when the user asks to create an alternatives page, compare Arco to a competitor (e.g. "arco vs typingmind"), build a /alternatives page for X, or write a head-to-head comparison. Takes competitor name + URL + user context, researches collaboratively with the user, and writes a TSX page at app/(marketing)/alternatives/{slug}/page.tsx.
---

# Comparison Page skill

Given a competitor, research and author a `/alternatives/{competitor}` page that ranks for comparison SEO queries and helps on-the-fence buyers decide. Fully collaborative — never dump a finished page in one shot.

## When to invoke

Yes:
- The user asks for an "alternatives" or "vs" page (e.g. "create an alternatives page for TypingMind", "compare Arco to Poe").
- The request is about creating or updating a page under `/alternatives/*`.

No:
- Feature pages, landing-page edits, blog posts, docs, or any other marketing surface.

## Inputs the skill expects

- Competitor name (e.g. `TypingMind`)
- Competitor homepage URL
- Any user context: positioning angle to lead with, specific claims to verify, known pain points, target-audience notes, etc.

If any of these are missing, ask the user before starting research.

## Sources of truth

Do not duplicate product, pricing, or brand data in this skill. Read these files at runtime:

- Arco features, use cases, comparison rows, how-it-works steps: `config/landing.ts`
- Arco pricing tiers, benefits, licensing model: `config/subscriptions.ts`
- Site metadata + URL: `config/site.ts`
- Brand voice, positioning, do/don'ts, taglines: `MARKETING.md` — canonical. Always read this before drafting copy.
- SEO helper: `lib/utils.ts` → `constructMetadata`

For components, compose from what already exists — do not create new components unless a section genuinely can't be assembled from existing pieces:

- Reusable page sections: `components/sections/`
- shadcn/ui primitives: `components/ui/`
- Shared layout helpers (`MaxWidthWrapper`, `HeaderSection`, `Icons`, `BlurImage`): `components/shared/`
- Pricing-specific components: `components/pricing/`

Route destination: `app/(marketing)/alternatives/{slug}/page.tsx`
Assets root: `public/_static/`
Competitor banner convention: `public/_static/competitors/arco-vs-{slug}.webp` is the final path served by the page. The user uploads a PNG at `arco-vs-{slug}.png`; the skill converts it to WebP and removes the PNG (see "Banner image workflow"). `{slug}.png` for bare logos.
Placeholder image pool (for pre-banner state): `public/_static/illustrations/`, `public/_static/landing/`

## Workflow (collaborative)

Never dump a finished page. Work with the user step by step.

1. **Ingest** — parse the user's initial message (name, URL, context notes). If anything required is missing, ask.
2. **Read source-of-truth files** listed above so you know Arco's canonical positioning before drafting anything.
3. **Research the competitor** — `WebFetch` the provided URL first (homepage, then pricing and docs pages if reachable). Fill gaps with `WebSearch` on:
   - `"{competitor} pricing"`
   - `"{competitor} review reddit"`
   - `"{competitor} hidden fees"`
   - `"{competitor} vs [known rival]"`
   - `"best {competitor} alternatives"`
4. **Present findings early** — summarize what you learned. Flag anything low-confidence or contradictory. Call out gaps.
5. **Ask, don't assume** — use `AskUserQuestion` liberally for:
   - Ambiguous competitor facts (pricing edge cases, feature specifics, platform coverage)
   - Arco-side calls: which angle leads the hero, which 3 differentiators to spotlight, what verdict language to use, which FAQ variants to include
6. **Draft in checkpoints** — work section by section, running each past the user before moving on. No monolithic dumps.
7. **Emit the TSX** at `app/(marketing)/alternatives/{slug}/page.tsx` with a placeholder banner image from `public/_static/illustrations/` or `public/_static/landing/`.
8. **Hand off the banner prompt** — print the canonical prompt (below) with `{competitor-name}` filled in, plus instructions for the user to generate the image externally.
9. **Install the returned banner** — the user saves the generated image as a PNG at `public/_static/competitors/arco-vs-{slug}.png`. When they reply "added": (a) verify the PNG exists at that path, (b) convert it to WebP at quality 95 (`cwebp -q 95 -m 6 arco-vs-{slug}.png -o arco-vs-{slug}.webp`), (c) delete the PNG. The TSX already references the `.webp` path, so no TSX edit is needed. Tell the user to reload `/alternatives/{slug}`.
10. **Append the page to the site footer** — see the "Footer registration" section below. This step is required, not optional. Confirm the addition to the user in the emit summary.
11. **Register the page in `public/llms.txt`** — see the "llms.txt registration" section below. This step is required, not optional. Confirm in the emit summary.

Guiding principle: **never invent, always ask.** Comparison pages carry legal and SEO risk if they misstate a competitor.

## Research schema

Before drafting, make sure you have (or have explicitly asked about):

- Competitor one-liner (what does it do in one sentence)
- Target audience (who buys it)
- Platforms supported (web / desktop / mobile / mac / windows / linux)
- Pricing model (subscription / one-time / free tier)
- Pricing tiers with exact numbers and what each includes
- Hidden fees (SSO tier, seat minimums, API add-ons, overages, per-message caps)
- Feature list — especially overlap with Arco's canonical features in `config/landing.ts`
- Model access mechanism (BYOK / included / curated catalog / capped)
- Data-storage location (local / cloud / hybrid)
- Stated privacy posture
- Public weaknesses cited in reviews (G2, Reddit, ProductHunt, HN)
- What the competitor is objectively better at than Arco (needed for the honest "what you lose" FAQ)

If any field is uncertain, ASK. Do not invent.

## Page blueprint (7 sections)

Each section documents purpose, structure, and rules. Copy is authored during the collaborative drafting phase — it is not templated here.

### 1. Hero
- Purpose: land the positioning in one screen. Kill the "why should I read further?" doubt.
- Structure: opinionated headline, 1–2 sentence subhead, primary CTA ("Download Arco free"), secondary CTA ("See how it compares", anchor to the comparison table), banner image slot.
- **Headline rule (SEO): the H1 must contain both product names ("Arco" and the competitor), then the value line.** Ranks for `arco vs {competitor}` and reinforces `{competitor} alternative` intent. Never ship a headline without both names.
- **Default headline shape: Shape 2** (see Headline Shapes below). Always draft the hero headline in Shape 2. Then present all shapes to the user for review before writing the page — see "Headline shape picker" workflow below.
- Banner: placeholder from `public/_static/` on first emit. The real banner arrives via the banner-image workflow.

#### Headline shapes

Seven shapes are available. **Shape 2 is the default.** Each shape must include both product names in the H1 to satisfy the SEO rule above.

**Shape 1 — Head-to-head**
`Arco vs {Competitor}: {value line}`
> Arco vs ChatHub: multi-model AI without the monthly bill.
Adversarial framing. Good for highly competitive, well-known rivals where buyers are already comparison-shopping.

**Shape 2 — Alternative positioning (default)**
`Arco: the {Competitor} alternative {for X / without Y / that Z}`
> Arco: the ChatHub alternative without the monthly bill.
Frames Arco as the answer to a search the buyer is already doing. Conversion-oriented, less adversarial. **Use this unless the user picks something else.**

**Shape 3 — Honest contrast**
`{Competitor} and Arco both {shared thing}. Here's where they split.`
> Poe and Arco both give you access to multiple AI models. Here's where they split.
Feels fair and builds trust. Best when the competitor has real strengths worth acknowledging before the pitch lands.

**Shape 4 — For X, there's Arco pivot**
`{Competitor} is good for {thing it does well}. For {Arco's thing}, there's Arco.`
> ChatHub is good for quick multi-model chats. For comparing answers side by side, there's Arco.
Honest framing that earns credibility. Works when there is a clear, genuine gap between what the competitor does and what Arco does.

**Shape 5 — Why-switch**
`Why {Competitor} users switch to Arco`
> Why MultiLLM users switch to Arco
Dead simple. Captures active switcher intent. Trusts the page content to carry the headline. Works best when the page is strong.

**Shape 6 — Pain stated, solution named**
`{Pain felt using Competitor}. Arco fixes that.`
> Paid for a month, ran out of credits in a week. Arco fixes that.
Very punchy. Best for competitors with a specific, widely-felt pain point (e.g. AI Fiesta credit drain). Risks feeling dismissive for competitors with diffuse pain.

**Shape 7 — Feature swap**
`{Competitor} gives you {what they offer}. Arco gives you {what Arco does instead}.`
> Poe gives you AI access. Arco gives you model comparison.
Forces a clear stance. Works when the two products have genuinely different jobs. Gets flat if the distinction is too subtle.

#### Headline shape picker (required before drafting the hero)

After you have researched the competitor but before you write the hero section, present the user with all seven shapes. Show the Shape 2 example first and mark it as the default. Show one tailored example per shape using the actual competitor name and a value line derived from your research. Then ask the user which shape they want to go with.

Format the picker like this (fill in the competitor name and tailor the value lines to your research findings):

---
Here are the seven headline shapes for the **{Competitor}** page. **Shape 2 is the default** — it's been validated across the existing pages. Let me know which one you want, or say "default" to go with Shape 2.

**Shape 2 (default):** `Arco: the {Competitor} alternative {value tail}`
**Shape 1:** `Arco vs {Competitor}: {value tail}`
**Shape 3:** `{Competitor} and Arco both {X}. Here's where they split.`
**Shape 4:** `{Competitor} is good for {X}. For {Y}, there's Arco.`
**Shape 5:** `Why {Competitor} users switch to Arco`
**Shape 6:** `{Pain}. Arco fixes that.`
**Shape 7:** `{Competitor} gives you {X}. Arco gives you {Y}.`
---

If the user says "default" or doesn't engage, proceed with Shape 2. If they pick a different shape, use that and note the choice in your drafting.

### 2. TL;DR quick comparison
- Purpose: give scanners the verdict without scrolling further.
- Structure: **two rows.** Row 1 splits equally between "Where Arco wins" and "Where {Competitor} falls short" (2 columns). Row 2 is a full-width "The verdict" card underneath. This gives the verdict the visual weight it deserves and keeps the two product-side lists balanced.
- Rules: verdict must be honest. If {Competitor} is a genuinely better fit for a segment (e.g. Windows-only users, teams that need SSO today), say so.

### 3. Core feature comparison grid
- Purpose: proof, at a glance.
- Structure: table with 8–12 rows. Columns: Arco vs {Competitor}. Use ✅ / ❌ / "Varies".
- Reuse or mirror the visual and data pattern in `components/sections/comparison-table.tsx` — do not reinvent.
- Feature rows draw from Arco's canonical features (`config/landing.ts`) plus competitor-specific features surfaced during research.

### 4. Three key differentiators
- Purpose: prove *why* the wins in section 3 matter.
- Structure: 3 blocks. Each has a bold headline + a 2–3 sentence contrast that names {Competitor}'s specific weakness.
- Rules: pick differentiators from Arco's canonical list (read `MARKETING.md` + `config/landing.ts`) that expose *this competitor's* specific gap — not a generic top-3.

### 5. Transparent pricing comparison
- Purpose: kill hidden-cost fear.
- Structure: static grid. Compare at 1 user / 1 year and 3 users / 1 year. (Interactive calculator is deferred.)
- Rules: explicitly call out any hidden fees surfaced during research (SSO tier, seat minimums, API add-ons, overages). Frame Arco as "$49 one-time + your OpenRouter tokens".
- Source of truth for Arco pricing: `config/subscriptions.ts` — read exact copy from there.

### 6. Getting started with Arco
- Purpose: replace the reference material's "migration guide" section. Arco has no data to migrate from a competitor, so this section kills the "switching cost" fear differently.
- Structure: 3 steps — Download Arco → Add your OpenRouter key → Ask everything at once. Read `howItWorksSteps` in `config/landing.ts` for canonical wording.
- Include one line addressing "what about my {competitor} history?" — usually: chat history isn't portable, but the user can keep both tools during transition.

### 7. Strategic FAQ + Final CTA
- Purpose: handle objections, then close.
- FAQ: 5–7 Q&As. **Required questions**:
  - "Is my data safe?"
  - "What if I'm on Windows?"
  - "What does {Competitor} do better than Arco?" (answered honestly — this question builds trust)
  - "Do I need an OpenRouter account?"
  - "Can I switch back?"
  - "Is $49 really forever?"
- Final CTA: headline must lead with the main benefit Arco has over this specific competitor. Each page gets a unique headline and a matching 1–2 sentence description tailored to that competitor's pain point. Do not reuse the same CTA across pages. Secondary link back to `/` labeled "See the full feature list".

## TSX authoring rules

- **Reuse existing shadcn/ui components as-is.** For every card-shaped block use `<Card>` + `<CardHeader>` + `<CardTitle>` + `<CardContent>` from `components/ui/card.tsx`. For callouts and inline advisories use `<Alert>` + `<AlertTitle>` + `<AlertDescription>` from `components/ui/alert.tsx`. For labels use `<Badge>`. For expand/collapse use `<Accordion>`. Do not hand-roll equivalents.
- **Do not introduce custom border, radius, or color styling on containers.** No `rounded-2xl`, no `rounded-3xl`, no `border-l-4`, no `border-primary/30`, no `bg-primary/5` on generic wrappers. These read as AI-generated. The one exception: mirroring the existing landing `comparison-table.tsx` pattern (which uses `bg-primary/5` on the Arco column of comparison grids) is fine because that is an established codebase pattern. When unsure, use the plain shadcn component and let its default styling speak.
- Import the SEO helper: `import { constructMetadata } from "@/lib/utils";` and export a `metadata` const on every page.
- Keep JSX inline in the page file for maximum per-page flexibility. Each page can adjust anything without touching a shared template.
- Placeholder banner on first emit: pick a suitable image from `public/_static/illustrations/` or `public/_static/landing/`.
- No new component files created by this skill.

## Footer registration

Every comparison page must be linked from the site footer for SEO crawlability. The footer is data-driven from `config/site.ts` → `footerLinks`.

- After emitting the TSX, add an entry to the `Alternatives` section: `{ title: "vs {Competitor}", href: "/alternatives/{slug}" }`.
- If the `Alternatives` section does not exist yet, create it between the `Product` and `Legal` sections. Also bump the grid column count in `components/layout/site-footer.tsx` (`md:grid-cols-{n}`) by one to make room.
- Link label convention: `vs {Competitor}` (e.g. `vs ChatHub`, `vs MultiLLM`). Column heading is always `Alternatives`.
- Read the current `footerLinks` before editing so you preserve existing entries and ordering. Do not reorder unrelated sections.

## llms.txt registration

Every comparison page must also be registered in `public/llms.txt` so LLM crawlers can discover it. Two edits per new page:

1. **Add a bullet to the "Comparisons with Similar Tools" section.** Format:
   `- **Arco vs {Competitor}** (https://arco.chat/alternatives/{slug}): {1-2 line summary of the key differences between Arco and the competitor. No pricing numbers, no page-structure descriptions ("this page includes...").}`
   Keep it tight: only the key qualitative differences (e.g. BYOK vs subscription, local vs cloud, model breadth). Do **not** include specific prices, quotas, or a description of the page's sections — LLMs should read the actual page for the details.
   If the "Comparisons with Similar Tools" section does not exist yet, create it between "Pricing & Licensing" and "Data Privacy & Security" with this intro paragraph:
   > "Head-to-head comparison pages between Arco and other multi-model AI chat tools. Visit each page for the full breakdown."
   Do not describe what each page contains (feature grid, cost breakdown, etc.) — the intro just points readers to the pages.

2. **Add a link to the "Links" section.** Format:
   `- [Arco vs {Competitor}](https://arco.chat/alternatives/{slug}): Head-to-head comparison with {Competitor}`
   Insert before the Privacy/Terms links so all product-related links stay grouped together.

Read the current file before editing to preserve existing entries. Do not duplicate — if a comparison entry for that competitor already exists, update it instead of appending.

## SEO & metadata rules

- URL: `/alternatives/{slug}` — slug is lowercased and hyphenated.
- `<title>`: `{Competitor} Alternative {specific pain or differentiator} | Arco` — every page title must be unique. Lead with the one thing that makes this competitor frustrating or limited for this specific audience. Do not use a generic template like "Why Teams Switch to Arco" across pages. Examples: `ChatHub Alternative Without the Monthly Bill | Arco`, `Poe Alternative Without Compute Points | Arco`, `MultiLLM Alternative with 400+ Models, Not Just Three | Arco`.
- Meta description: 150–160 characters. Must include the competitor's name, the word "alternative", and one Arco differentiator (privacy / BYOK / no subscription / 400+ models). Like the title, make it specific to this competitor — do not reuse the same description shape across pages.
- OG image: reuse `siteConfig.ogImage` until per-competitor OG images are designed.
- Use `constructMetadata()` from `lib/utils.ts` — do not build a `Metadata` object by hand.

## Banner image workflow

1. On first page emit, reference the **final WebP banner path** in the TSX hero directly: `/_static/competitors/arco-vs-{slug}.webp`. The image will 404 until the user saves a PNG and the skill converts it, but this means no TSX edit is needed later. Image models output PNG, so the handoff asks the user to save PNG; the skill converts to WebP on "added" so the reference resolves without any further code change.

2. After the page is emitted, print the canonical banner prompt (below) with `{competitor-name}` filled in, plus explicit handoff instructions that include the **exact filename and folder** the user should save the generated image as. Never leave the user guessing what to name the file.

3. The handoff message must literally include this filename block:
   > "Paste this prompt into your image model of choice (Midjourney, DALL·E, Nano Banana, Flux, etc.). Attach the Arco logo from `public/_static/logos/arco.png` and the {competitor-name} logo.
   >
   > **When the image is ready, save it as exactly this file:**
   > `public/_static/competitors/arco-vs-{slug}.png`
   >
   > Then reply with 'added' and I'll convert it to WebP and wire it in."

4. When the user replies "added":
   1. Verify the PNG exists at `public/_static/competitors/arco-vs-{slug}.png`.
   2. Convert it to WebP at quality 95: `cwebp -q 95 -m 6 public/_static/competitors/arco-vs-{slug}.png -o public/_static/competitors/arco-vs-{slug}.webp`. Quality 95 is visually indistinguishable from the source and yields ~95% file-size reduction on typical logo-and-text banners (~1MB → ~60KB).
   3. Delete the source PNG: `rm public/_static/competitors/arco-vs-{slug}.png`.
   4. Confirm the WebP is in place and tell the user to reload `/alternatives/{slug}`. No TSX edit needed because the hero already references the `.webp` path.

   If `cwebp` is missing on the machine, install it (`brew install webp` on macOS) rather than falling back to PNG. WebP is the standard for these banners.

### Canonical banner-image prompt (verbatim, do not rewrite)

Use this exact prompt every time so every comparison banner shares a consistent style. Fill only the `{competitor-name}` placeholder.

> A modern, clean SaaS comparison hero banner. 16:9 aspect ratio, roughly 1600×900 pixels.
>
> Layout: a two-column split.
> - Left column: the Arco logo (attached), centered horizontally, on a dark, minimalist background in the #0a0a0a to #111111 range. Directly beneath the logo, render the product name "Arco" in **Urbanist Bold** (the sans-serif Google font used throughout the Arco app), light color (#F5F5F5 or similar), letter-spacing slightly tight, size proportional to the logo. Ample negative space around the group.
> - Right column: the {competitor-name} logo (attached), centered horizontally, styled with the competitor's own brand feel but muted to match the overall composition. Directly beneath the logo, render the competitor's product name "{competitor-name}" in the **same Urbanist Bold** font and the same size and color treatment as the Arco name, so the two sides look typographically consistent (even though the logos differ).
> - Center: a thin vertical divider with a small, subtle lowercase "vs" mark in Urbanist Regular, low contrast against the background.
>
> Typography rule: every text element in the image (both product names and the "vs" mark) must use **Urbanist** from Google Fonts. Do not fall back to a generic sans-serif. This keeps every banner consistent with the Arco site's hero typography.
>
> Style: flat, modern developer-tool aesthetic (Vercel, Linear, Stripe territory). Generous negative space. No stock photos. No aggressive glow, sparkle, motion blur, gradients that look AI-generated, or "battle" imagery. This is an informative comparison, not adversarial.
>
> Constraints:
> - Do not alter either logo's colors, shapes, or proportions.
> - Do not add product screenshots, additional icons, or any marketing copy beyond the two product-name labels and the "vs" mark.
> - Do not include comparative language ("better", "versus", "win") anywhere. The only text is: "Arco", "{competitor-name}", and "vs".
> - If the competitor's brand is light-themed and Arco's is dark-themed, bridge the two sides with a subtle horizontal gradient.
>
> Output: PNG. Also export a 1200×630 crop for social/OG use if the model supports multi-output.

## Rules (user-owned, append here as they come up)

This section is where the user drops very specific do/don't rules. The agent must apply everything here, in addition to the canonical rules in `MARKETING.md`.

- **No em dashes anywhere.** Em dashes read as AI-generated. Use commas, semicolons, or two sentences instead.
- **Always include both product names in the H1.** For SEO. The headline must name Arco and the competitor. Never ship a headline that leaves either name out.
- **Default headline shape is Shape 2.** Always draft the hero in Shape 2 (`Arco: the {Competitor} alternative {for X / without Y / that Z}`). Before writing the page, present all seven shapes to the user with tailored examples and ask them to pick. If they say "default" or don't engage, proceed with Shape 2. See "Headline shape picker" in the Hero section.
- **Always use existing shadcn/ui components (`Card`, `Alert`, `Badge`, `Accordion`, etc.) as-is.** Do not hand-craft "card-like" divs with custom `rounded-*`, `border-*`, `border-l-*`, or tinted `bg-*` styling. Those custom flourishes are a giveaway that the page was AI-generated. Let the components' defaults do the work.
- **TL;DR layout is two rows.** Row 1: two equal columns for the Arco-wins card and the competitor-falls-short card. Row 2: a full-width verdict card. Never put all three side by side.
- **Competitor banners live at `public/_static/competitors/arco-vs-{slug}.webp`** (not under a `logos/` subfolder). The user delivers a PNG at `arco-vs-{slug}.png`; the skill converts it to WebP and removes the PNG in step 9. The TSX always references the `.webp` path from first emit.
- **Do not start the dev server or run automated verification.** The user runs their own dev server externally and tests the page manually. After emitting the TSX and updating the footer, do not call `preview_start`, do not run `pnpm dev`, do not launch browser-testing tools, do not screenshot the rendered page. Just tell the user the URL to check (e.g. `http://localhost:3000/alternatives/{slug}`) and wait for their feedback.
- Read `MARKETING.md` for the canonical brand and voice rules. They are not duplicated in this skill.

## Reference paths (quick index)

- `config/landing.ts` — Arco features, use cases, comparison rows, how-it-works steps
- `config/subscriptions.ts` — pricing tiers, benefits, licensing
- `config/site.ts` — site metadata, OG image, URL
- `MARKETING.md` — brand voice, positioning, do/don'ts, taglines
- `lib/utils.ts` — `constructMetadata` SEO helper
- `components/sections/` — reusable landing sections
- `components/ui/` — shadcn primitives
- `components/shared/` — MaxWidthWrapper, HeaderSection, Icons, BlurImage
- `components/pricing/` — pricing cards, FAQ, billing helpers
- `app/(marketing)/alternatives/` — destination directory for generated pages
- `public/_static/logos/arco.png` — Arco logo for banner generation
- `public/_static/competitors/arco-vs-{slug}.webp` — final hero banner path served by each competitor page (converted from the PNG the user uploads)
