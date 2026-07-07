# Cohere Design System

A code-first recreation of Cohere's enterprise-AI web presence: an austere black-and-white interface punctuated by deep-green/navy product bands, warm-stone cards, coral editorial taxonomy, and blue research links. The UI shell stays restrained; color and energy arrive through media and product mockups.

> **Source of this system:** Built from a written brand/design brief for Cohere's public web presence (home, products, blog, research, contact surfaces). **No codebase or Figma file was provided** — there is no source repo or design URL to cite. Component structure, tokens, and copy are reconstructed from the brief and Cohere's documented patterns. If you have the real codebase/Figma, attach it and this system can be tightened against the source of truth.

---

## Context & products

Cohere is an enterprise AI company. The web presence spans several surfaces, all represented in the **Marketing Website UI kit** (`ui_kits/website/`):

- **Marketing / product pages** — monumental typographic hero over white canvas, two-card media compositions, trust-logo strips, capability rows, and full-width deep-green/navy product bands (Command, North, financial-services, security).
- **Blog** — editorial index with oversized coral taxonomy chips and a 3-column card grid.
- **Research** (Cohere For AI) — publishing-system clarity: search, compact outlined filter pills, and a rule-separated publication table.
- **Contact / sales** — rounded white form card on a dark product band.

Products referenced in copy: **Command** (generative), **Embed**, **Rerank**, **North** (secure AI workspace). These are used as realistic labels — no invented product data or dashboards.

---

## Content fundamentals

How Cohere writes, and how to write in-system:

- **Voice:** calm, technical, enterprise-credible. Confidence through restraint, not hype. Reads like a research lab that ships to the Fortune 500.
- **Person:** addresses the reader as **"you" / "your business"**; the company is **"we" / "our"**. Outcome-led ("Build AI that works for your business"), not feature-led.
- **Casing:** sentence case for headlines and buttons ("Request a demo", "Explore products"). **Uppercase only** for CohereMono system/category labels ("GENERATIVE AI", "RESEARCH").
- **Headlines:** short, declarative, often a full sentence at hero scale. One oversized claim per page, then it settles into 16–24px copy.
- **CTAs:** verb-first and specific — "Request a demo", "Explore products", "Try the Playground", "Request access", "Submit". Secondary actions are underlined text links, often with a trailing "→".
- **Body copy:** plain, concrete, jargon-aware but not jargon-heavy. Emphasizes security, privacy, grounding, and deployment ("deployed wherever your data lives", "Your data never trains our models").
- **Editorial:** taxonomy-forward. Posts are tagged (Generative AI, Research, Product, Enterprise, Company); research is dated and topic-tagged.
- **Emoji:** **none.** Never used. Iconography is thin-line geometric, not emoji or unicode glyphs.
- **Punctuation:** "→" as a directional affordance on links/CTAs; "·" as a metadata separator (author · date, name · version).

Example copy in the right register:
> "Build AI that works for your business"
> "Secure, private, and grounded models for enterprise search, agents, and automation — deployed wherever your data lives."
> "AI moves fast — stay in the loop."

---

## Visual foundations

- **Surfaces:** white canvas is the default. Warm **Soft Stone** (`#eeece7`) for product/model cards. Full-width **Deep Green** (`#003c33`) and **Dark Navy** (`#071829`) bands carry product capability and security sections (text turns white). Pale **green/blue washes** sit behind CTA imagery. Never use mid-tone page backgrounds.
- **Color discipline:** UI is monochrome by default. Coral is editorial taxonomy + small warm accents only — never a broad surface fill. Blue is editorial/research links and pagination. Color otherwise comes from photography, abstract 3D media, and dark product environments.
- **Type:** display/body split. **CohereText** (→ Space Grotesk) for monumental, carved hero headlines with tight line-height (1.0) and negative tracking (down to −1.92px). **Unica77** (→ Inter) for restrained 16–48px UI copy. **CohereMono** (→ Space Mono) for uppercase technical labels (14px, +0.28px tracking). Avoid heavy bold weights — size, spacing, and surface contrast do the hierarchy work (400 weight dominates, 500 for buttons).
- **Spacing:** 8px base with dramatic vertical breathing room. Sections run 64–110px of vertical padding; whitespace is used as a trust signal, separating brand claim → customer proof → product proof → CTA.
- **Backgrounds & imagery:** flat UI surfaces. **Gradients are media-led only** — abstract 3D hero renders, product video posters, dark green-to-black product environments. Never a saturated gradient as normal UI fill. Imagery sits as **rounded media cards** with visible corners (dominant radii 8px and 22px), warm or deep-cool in tone.
- **Cards:** rounded but not cute. White cards use a softest `#f2f2f2` containment line; stone cards are borderless; dark bands are borderless with pale translucent inner rules. **No heavy drop shadows** — at most a soft "media lift" under rounded photo/video cards.
- **Borders & rules:** depth-by-rule. Hairline `#d9d9dd` for list rules and dividers; `#e5e7eb` utility rule; top-rule-only cards on light backgrounds (capability rows) instead of full boxing.
- **Corner radii:** xs 4 (search/thumbnails) · sm 8 (chips, product cards, dialogs) · md 16 (grouped blocks) · lg 22 (signature media cards) · xl 30 (filter pills) · pill 32 (primary CTAs).
- **Buttons:** primary = near-black (or white on dark) **32px pill**, 12×24 padding. Secondary = underlined text link, no fill. Outline = transparent 30px pill with a thin dark border (taxonomy/research filters).
- **Animation:** minimal and quiet. Short color/opacity transitions on hover (~0.15–0.18s ease). No bounces, no decorative looping motion, no parallax. Respect reduced-motion.
- **Hover states:** subtle background tint on nav items (5% near-black), slight opacity/darken on pills, underline persists on text links. **Press:** color shift, not scale/shrink.
- **Focus:** blue focus ring (`#4c6ee6`) for keyboard nav; text inputs use a violet focus border (`#9b60aa`) with a soft 3px violet shadow.
- **Transparency & blur:** used sparingly — the sticky nav uses a translucent white with backdrop blur; dark bands use white-at-low-alpha for inner surfaces and rules. Not a general decorative effect.

---

## Iconography

- **Brand approach:** Cohere uses a **custom thin-line geometric icon set** and thin-line illustrations for capability/research markers. Icons are stroke-based, low weight, and unfilled — geometric rather than rounded-friendly.
- **In this system:** the proprietary icon font is not bundled. We substitute **[Lucide](https://lucide.dev)** (thin-line, geometric, 1.5 stroke) loaded from CDN — the closest open match for stroke weight and style. ⚠️ **Substitution flagged** — swap for the real Cohere icon set when available.
- **Usage:** render at 16–28px, `stroke-width` 1.25–1.5, `currentColor`. Used on CTAs (`arrow-right`), capability rows (`layers`, `shield`, `workflow`), agent console (`bot`, `check`, `more-horizontal`), and search (`search`).
- **Logos/marks:** `assets/logo-wordmark.svg`, `assets/logo-wordmark-white.svg`, `assets/mark.svg` are **placeholder** text wordmarks — **not** the official Cohere logo. Replace with real brand files.
- **Emoji / unicode icons:** never used.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (`@import` lines only); consumers link this one file.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible entry for downloaded use.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`.
- `assets/` — placeholder logo wordmarks + mark (SVG).

**Components** (`components/`) — React primitives, each with `.jsx` + `.d.ts` + `.prompt.md` + a `@dsCard` HTML:
- `buttons/Button` — primary pill / secondary text link / outline filter.
- `chips/Chip` — coral blog taxonomy chip + neutral label.
- `badges/Badge` — status chip + uppercase mono label.
- `forms/Input` — text field / textarea with violet focus + error state.
- `cards/Card` — flat surface container (white / stone / dark / green / navy).

**Foundation cards** (`guidelines/`) — specimen HTML rendered in the Design System tab: colors (brand, surface, text, semantic), type (display, body, mono), spacing, radius, elevation, brand logo & dark bands.

**UI kits** (`ui_kits/`)
- `website/` — interactive marketing site: Home, Blog, Research, Contact. See its `README.md`.

---

## Known gaps / to replace

- **Fonts:** proprietary CohereText / Unica77 Cohere Web / CohereMono are not bundled. Google Fonts substitutes (Space Grotesk / Inter / Space Mono) are loaded via `tokens/fonts.css`. Swap when real font files arrive.
- **Logo & mark:** placeholders only.
- **Icons:** Lucide substituted for the custom Cohere icon set.
- **Imagery:** media is represented with labeled gradient placeholders + the agent-console mockup, not real photography or product screenshots.
