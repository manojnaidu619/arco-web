# Arco Marketing Reference Document

A central reference for social media content creation. This document is ever-evolving — update it as you learn what works.

> **Principle:** This doc contains marketing-specific content (messaging, hooks, templates). For product details, reference the source files below to avoid maintaining duplicate info.

---

## Source Files Reference

Look here for accurate, up-to-date product information:

| What you need                               | Where to find it                                                                     |
| ------------------------------------------- | ------------------------------------------------------------------------------------ |
| Product overview, features, privacy details | [`public/llms.txt`](public/llms.txt)                                                 |
| SEO title, description, links               | [`config/site.ts`](config/site.ts)                                                   |
| Features list with descriptions             | [`config/landing.ts`](config/landing.ts) → `features`                                |
| Use cases with examples                     | [`config/landing.ts`](config/landing.ts) → `useCases`                                |
| Comparison table (Arco vs competitors)      | [`config/landing.ts`](config/landing.ts) → `comparisonRows`                          |
| Pricing tiers and benefits                  | [`config/subscriptions.ts`](config/subscriptions.ts)                                 |
| Full FAQ (17 questions)                     | [`components/pricing/pricing-faq.tsx`](components/pricing/pricing-faq.tsx)           |
| Founder story ("Why I built this")          | [`content/pages/about.mdx`](content/pages/about.mdx)                                 |
| Tour video embed                            | [`components/sections/preview-landing.tsx`](components/sections/preview-landing.tsx) |

### Quick Facts (for copy accuracy)

| Claim                    | Accurate?                     | Notes                       |
| ------------------------ | ----------------------------- | --------------------------- |
| 400+ models              | Yes                           | Via OpenRouter              |
| Compare X models at once | Up to 6                       | Not 400+ at once            |
| Free tier                | 3 saved conversations         | Full features otherwise     |
| Pro price                | $39 one-time                  | 1 year of updates, 1 device |
| Platform                 | macOS 13+, Apple Silicon only | No Windows/Linux            |

### Assets

| Asset              | Location                                                   |
| ------------------ | ---------------------------------------------------------- |
| Tour video (Tella) | `https://www.tella.tv/video/vid_cmqp4uixf00q604icfwcyf8ee` |
| OG image           | `public/_static/og.jpg`                                    |
| Homepage           | https://arco.chat                                          |
| Contact            | hello@arco.chat                                            |

---

## 1. The Problem (Why Arco Exists)

This section is unique to marketing — use it for hooks and differentiation.

### Core Purpose

**Ask multiple models the same question and compare responses to make better decisions.**

### Why This Matters

- Each AI model has its own strengths — one excels at code, another at writing, another at reasoning
- Comparing responses covers multiple angles and edge cases you might miss
- Better to synthesize from several answers than trust one model blindly
- No single model is best at everything

### Problems with Existing Solutions

Each problem = a potential post angle or ad hook.

#### 1. Limited Model Selection / No BYOK

- Platforms only offer models they've integrated
- Locked into their curated list
- Cannot use your own API keys
- Dependent on their pricing and availability decisions
- **Hook:** "Tired of being locked into whatever models they decide to support?"

#### 2. Monthly Subscription Fees

- Pay the same whether you use it daily or twice a month
- Cost doesn't match actual usage
- Subscription fatigue — yet another monthly charge
- **Hook:** "Why pay $20/month for something you use twice a week?"

#### 3. Data Stored on Their Servers

- Your conversations live on third-party infrastructure
- Privacy policies you have to trust
- No control over how data is used, stored, or retained
- Enterprise/security-conscious users often can't use these tools
- **Hook:** "Your prompts shouldn't live on someone else's server."

#### 4. Have to Wait for New Models

- When a new model drops (e.g., GPT-5, Claude 4), you wait for them to add it
- Could be days, weeks, or never
- You're at their roadmap's mercy
- **Hook:** "New model dropped? Use it today, not whenever they get around to it."

#### 5. Rate Limits on "Unlimited" Plans

- Marketing says "unlimited" but fine print has caps
- Throttling during peak usage
- Hit a wall when you need it most
- **Hook:** "Unlimited until you actually try to use it."

### How Arco Solves Each

| Problem                  | Arco's Answer                                                                    |
| ------------------------ | -------------------------------------------------------------------------------- |
| Limited models / No BYOK | 400+ models via OpenRouter; bring your own key, full control                     |
| Monthly subscription     | Free to download with full features; Pro is $39 one-time, not recurring          |
| Privacy concerns         | Conversations stored locally on your Mac; Arco has no servers storing your chats |
| New model delays         | Add any new OpenRouter model instantly by pasting its model ID                   |
| Rate limits              | You control usage via your own API key; no artificial caps from Arco             |

---

### Migration Targets

Two groups already experiencing these pain points — target them with specific messaging.

#### Group 1: Tab-Switchers (ChatGPT, Claude, Gemini users)

People using individual AI services separately and manually comparing in browser tabs.

| Their current behavior                   | Their pain                    | Arco hook                               |
| ---------------------------------------- | ----------------------------- | --------------------------------------- |
| Open ChatGPT, paste prompt, wait         | Tedious, repetitive           | "Type once, every model answers"        |
| Open Claude in another tab, paste again  | Time wasted copying           | "Stop juggling AI tabs"                 |
| Open Gemini, repeat the process          | Context lost between tabs     | "Everything in one window"              |
| Manually read all responses and compare  | Mental overhead               | "Summarize does the comparison for you" |
| Pay $20/month ChatGPT + $20 Claude + ... | Multiple subscriptions add up | "One key, pay only for tokens you use"  |

**Post angles for tab-switchers:**

- "Still copying prompts between ChatGPT and Claude tabs?"
- "I was paying $40/month for ChatGPT Plus and Claude Pro just to compare them"
- "Open ChatGPT. Paste. Wait. Open Claude. Paste. Wait. Sound familiar?"
- "Your workflow: 5 tabs, 5 logins, 5 subscriptions. Mine: one app."

---

#### Group 2: Competitor Platform Users

People already using multi-model comparison tools (ChatHub, Poe, TypingMind, etc.) but experiencing limitations.

| Competitor limitation            | Arco advantage                          | Hook                                              |
| -------------------------------- | --------------------------------------- | ------------------------------------------------- |
| Limited model selection          | 400+ via BYOK                           | "Tired of waiting for them to add models?"        |
| Monthly subscription ($10-30/mo) | Free or $39 one-time                    | "Cancel your monthly subscription"                |
| Data stored on their servers     | Local on your Mac                       | "Your chats shouldn't live on their servers"      |
| Wait for new models to be added  | Add instantly via OpenRouter model ID   | "New model dropped? Use it today, not next month" |
| Rate limits / throttling         | Your key = your limits                  | "No more 'slow down' messages"                    |
| Their markup on API costs        | No Arco markup, pay OpenRouter directly | "Stop paying their token markup"                  |

**Post angles for competitor users:**

- "Switched from [competitor] to Arco because my data stays on my Mac"
- "If you're paying $20/month for [competitor], here's what you're missing"
- "Why I cancelled my [competitor] subscription"
- "[Competitor] told me to wait for the new model. I added it myself in 10 seconds."
- "Paying for 'unlimited' but hitting rate limits? There's a better way."

**Known competitors (add more as you research):**

- ChatHub
- Poe
- TypingMind
- ChatComparison.ai
- BoltAI
- MacGPT
- [Add others]

---

## 2. Key Messaging

### Hero Lines

- "Ask once, reach every model, all staying private."
- "One prompt. Every model. Side by side."
- "Compare AI models. Make better decisions."

### One-Liners (for posts)

- **Short:** Compare 400+ AI models side by side on your Mac
- **With privacy:** Chat & compare AI models on your Mac with your own key. Everything stays private.
- **Problem-first:** Stop switching between AI chat tabs. Ask once, compare answers from 400+ models.

### Taglines by Angle

| Angle              | Tagline                                                       |
| ------------------ | ------------------------------------------------------------- |
| Core value         | Ask multiple models, compare responses, make better decisions |
| Privacy            | Your key. Your data. On your Mac.                             |
| Anti-subscription  | No monthly fee. Pay only for tokens you use.                  |
| Speed              | Type once, every model answers in parallel                    |
| BYOK               | Bring your own OpenRouter key. Full control.                  |
| Anti-tab-switching | Stop juggling ChatGPT, Claude, and Gemini in separate tabs    |
| New models         | New model dropped? Add it instantly.                          |

### Value Propositions (in order of importance)

1. **Compare to decide** — Ask multiple models, see all answers, make better decisions
2. **Privacy** — Conversations stay on your Mac, not on Arco's servers
3. **BYOK** — Use your own OpenRouter key, pay providers directly, no markup
4. **No subscription** — Free to download, Pro is one-time $39
5. **Summarize** — Pick a judge model to compare all replies and find the best answer
6. **400+ models** — Access everything on OpenRouter with one key
7. **Native Mac app** — Fast, simple, built for macOS

### What NOT to Say

| Don't say                     | Why                   | Say instead                                        |
| ----------------------------- | --------------------- | -------------------------------------------------- |
| "Compare 400+ models at once" | Only 6 at once        | "Choose from 400+ models, compare up to 6 at once" |
| "Works on Windows/Linux"      | Mac only              | "Native Mac app (Apple Silicon)"                   |
| "Free forever"                | Pro exists            | "Free to download" or "Free to start"              |
| "Unlimited" without context   | Free has 3-save limit | "Full features on free tier"                       |
| "Compare from 400+ models"    | Grammatically awkward | "Choose from 400+ models"                          |

---

## 3. Target Audiences

> **Full use cases with examples:** See [`config/landing.ts`](config/landing.ts) → `useCases`

### Primary Audiences & Hooks

| Audience              | Hook                                                             |
| --------------------- | ---------------------------------------------------------------- |
| **Developers**        | "One model nails Python, another gets React. Why not ask both?"  |
| **Writers**           | "Three models, three drafts. Pick the one that sounds like you." |
| **Researchers**       | "Don't trust one model's summary. Compare three."                |
| **Prompt Engineers**  | "Test your prompt on 6 models at once. See which one gets it."   |
| **Privacy-conscious** | "Your prompts stay on your Mac. Period."                         |
| **Tab-switchers**     | "Stop opening ChatGPT, Claude, and Gemini in separate tabs."     |

### Secondary Audiences

- Business teams (reports, exec summaries, strategy pressure-testing)
- Students (compare explanations of complex topics)
- Consultants (multiple perspectives before advising)

---

## 4. Tone & Voice Guidelines

### Overall Tone

- **Founder voice:** Personal, honest, not salesy
- **Direct:** Say what it does, not what it "empowers you to achieve"
- **Technical accuracy over hype:** Don't oversell; be precise about capabilities
- **Relatable:** Share the pain point, then the solution

### Platform-Specific Tone

| Platform     | Tone                                  | Avoid                          |
| ------------ | ------------------------------------- | ------------------------------ |
| X/Twitter    | Casual, punchy, emoji-friendly        | Walls of text, hashtag spam    |
| Reddit       | Honest, technical, community-oriented | Pure promo, marketing speak    |
| LinkedIn     | Professional, builder-story           | Overly casual, too many emojis |
| Product Hunt | Enthusiastic but grounded             | Hype without substance         |
| Hacker News  | Technical, understated, factual       | Any hint of marketing fluff    |
| Instagram    | Visual-first, accessible              | Jargon, long captions          |

### Words to Use

- Built, shipped, launched
- Compare, decide, choose
- Private, local, on your Mac
- One prompt, every model
- No subscription, pay what you use

### Words to Avoid

- Revolutionary, game-changing, cutting-edge
- Empower, leverage, synergy
- Best-in-class, world-class
- AI-powered (everything is AI-powered now)
- Seamless, frictionless (clichés)

### "I built" vs "Introducing"

| Context                   | Use                                                                 |
| ------------------------- | ------------------------------------------------------------------- |
| Reddit, indie communities | "I built..." (personal, authentic)                                  |
| Product Hunt              | "Introducing..." or "Meet..."                                       |
| X/Twitter                 | Either works; "I built" for founder accounts                        |
| LinkedIn                  | "I built..." for personal posts; "Introducing..." for company posts |
| Hacker News               | "Show HN: [Name] – [description]"                                   |

---

## 5. Platform-Specific Templates

### X/Twitter

#### Single Post (Piqo-style)

```
[Personal hook or launch announcement]

[One-liner description of what it does]

[emoji] Feature 1
[emoji] Feature 2
[emoji] Feature 3
[emoji] Feature 4
[emoji] Feature 5
[emoji] Feature 6

[CTA] → [link]
```

#### Thread Format

**Tweet 1 (Hook):** Problem statement or personal story ending with ":" or "👇"  
**Tweet 2 (Payoff):** What you built + why + attach video  
**Tweet 3 (CTA):** Platform requirements + link

#### Tips

- Video performs better than images
- Upload video natively (don't embed Tella link)
- Keep under 60 seconds
- Show the app in the first 3 seconds
- Pin your launch tweet

---

### Reddit

#### Title Format

```
Arco - [what it does] on your Mac ([key differentiator])
```

#### Body Structure

```
[Disclosure: Hi, I'm [Name] — I built Arco.]

[One-liner description]

What you get:
- [Feature 1]
- [Feature 2]
- [Feature 3]
- [Feature 4]
- [Feature 5]

[Requirements: macOS 13+, Apple Silicon]

[Personal note: First Mac app I've shipped. Would love feedback.]

[Link: https://arco.chat]
```

#### First Comment

```
Disclosure: I'm the developer. Happy to answer questions about OpenRouter setup, privacy, or pricing.
```

#### What to Avoid

- Pure promotional language
- Cross-posting identical content
- Not engaging with comments
- Fresh accounts with no history

#### Best Subreddits

r/macapps, r/macOSApps, r/SideProject, r/IndieHackers

---

### LinkedIn

#### Builder Story Format

```
[Personal hook about the problem you faced]

[What you built to solve it]

[3-4 key features as bullets]

[What's next / ask for feedback]

[Link]
```

---

### Product Hunt

#### Tagline (60 chars max)

```
Compare 400+ AI models side by side on your Mac
```

#### First Maker Comment

```
Hi PH! 👋

I'm Manoj, and I built Arco because I was tired of switching between ChatGPT, Claude, and Gemini tabs just to compare answers.

The core idea: ask once, see every model's response side by side, and use Summarize to quickly find the best answer.

A few things that make Arco different:
- BYOK: Bring your own OpenRouter key, pay providers directly
- Privacy: Conversations stay on your Mac
- No subscription: Free to download, Pro is one-time $39

Would love your feedback! What features would make this more useful for you?
```

---

### Hacker News

#### Show HN Format

**Title:**

```
Show HN: Arco – Compare AI models side by side on Mac (BYOK, local storage)
```

**Body:**

```
I built a native Mac app for comparing AI model responses.

The problem: I kept opening ChatGPT, Claude, and Gemini in separate tabs, pasting the same prompt, then manually comparing answers.

Arco lets you:
- Send one prompt to up to 6 models simultaneously
- See all responses side by side
- Use Summarize to compare and find the best answer
- Keep everything local on your Mac

It uses OpenRouter (BYOK), so you're not locked into a specific set of models and you pay only for tokens used.

Free to download. Pro ($39 one-time) adds unlimited saved conversations.

https://arco.chat

Happy to answer technical questions.
```

#### What Works: Technical detail, honest trade-offs, understated tone

#### What Gets Flagged: Marketing speak, not engaging with comments

---

### Instagram

#### Carousel Ideas

1. Problem → Solution (Slide 1: "Tired of switching AI tabs?" → Features → CTA)
2. Feature Showcase (each slide = one feature)
3. Before/After (tab chaos vs. Arco)
4. How It Works (3-step flow)

#### Caption Template

```
[Hook question or statement]

[What Arco does in 1-2 sentences]

[3-4 features as line breaks]

[CTA: Link in bio or arco.chat]
```

#### Hashtags (use sparingly)

#macOS #macapp #AI #productivity #devtools

---

## 6. FAQ for Comments

> **Full FAQ (17 questions):** See [`components/pricing/pricing-faq.tsx`](components/pricing/pricing-faq.tsx)

Quick answers for common social media questions:

| Question                 | Quick Answer                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------- |
| What is OpenRouter?      | Unified API for 400+ AI models. Sign up at openrouter.ai — free to create an account. |
| Intel Mac support?       | Apple Silicon only. No Intel support planned.                                         |
| Windows/Linux?           | Mac only. No timeline for other platforms.                                            |
| Where's my data stored?  | Locally on your Mac. Arco has no servers storing your chats.                          |
| Is it really free?       | Yes — full features, 3 saved conversations limit.                                     |
| What does Pro get me?    | Unlimited saves + updates for 1 year. $39 one-time.                                   |
| How many models at once? | Up to 6.                                                                              |
| What's Summarize?        | Pick a judge model to compare all replies and show which is strongest.                |
| Different from ChatGPT?  | ChatGPT = OpenAI only. Arco = 400+ models via OpenRouter, compare side by side.       |

---

## 7. Validated Copy (Posted & Live)

Reference examples — don't just copy these every time. Use for consistency and to avoid repeating hooks.

### X/Twitter Launch Post (Jun 27, 2026)

```
Launching my first macOS app: Arco 🎉

Chat & compare from 400+ AI models side by side on your Mac. Use your own OpenRouter key and keep everything private.

⚡ Ask once, every model answers in parallel
🧩 Choose from 400+ models in one window
✨ Summarize all replies into the best answer
🔑 One OpenRouter key for everything
🍎 Native Mac app. Fast and simple
🔒 All your chats stay on your Mac
💸 No monthly subscription. Pay only for tokens you use

Download for free → arco.chat
```

**Format:** Single tweet + video  
**Performance:** [Add metrics]

---

### Reddit r/MacOSApps Launch Post (Jun 27, 2026)

**Title:**

```
Arco - chat & compare AI models side by side on your Mac (choose from 400+)
```

**Body:**

```
Arco is a native Mac app that lets you chat with multiple AI models at once and compare responses side by side.

What you get:
- Choose from 400+ models through OpenRouter (BYOK)
- Compare up to 6 models in one window
- Summarize: pick a judge model and get a structured comparison of all replies
- Conversations stored locally on your Mac
- No monthly subscription. Pay only for tokens you use

First Mac app I've shipped. Would appreciate honest feedback from this community.

Download for free: https://arco.chat
```

**Format:** Text + video, tagged "Productivity"  
**Performance:** [Add metrics]

---

## 8. Changelog

| Date         | Change                                                              |
| ------------ | ------------------------------------------------------------------- |
| Jun 27, 2026 | Initial version                                                     |
| Jun 27, 2026 | Refactored to reference source files instead of duplicating content |
| Jun 27, 2026 | Added Migration Targets section (tab-switchers + competitor users)  |

---

## How to Use This Document

1. **Starting a new post:** Read Section 1 (Problem) and Section 2 (Messaging)
2. **Need product details:** Check Source Files Reference at the top
3. **Platform-specific:** Jump to Section 5
4. **Answering comments:** Use Section 6 (FAQ) or full FAQ in codebase
5. **After posting:** Add to Section 7 with performance notes

---

## Living Document Guidelines

| When this happens                  | Update this                       |
| ---------------------------------- | --------------------------------- |
| Notice competitor problem          | Section 1 (Problems)              |
| Find tagline that resonates        | Section 2 (Messaging)             |
| Discover new audience/use case     | Section 3 (Audiences)             |
| Learn what tone works              | Section 4 (Tone)                  |
| Create post format that works      | Section 5 (Templates)             |
| Get asked same question repeatedly | Section 6 (FAQ)                   |
| Post gets good engagement          | Section 7 (Validated Copy)        |
| Ship new feature / change pricing  | Update source files, not this doc |
