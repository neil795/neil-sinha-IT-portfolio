# Portfolio Content Model (Issue #4)

## Source inputs
- `content/portfolio/*.md` narrative seed files
- Resume inputs (AI/ML + Senior Platform)
- LinkedIn public profile snapshot

## Canonical web schema location
- `web/src/content/config.ts`

## Collections
- `case-studies`
- `experience`
- `ai-governance`
- `meta`

## Normalization rules
1. Prefer quantified achievements when duplicate statements exist.
2. Keep one canonical role entry per company/time period.
3. Use confidence tags for metrics:
   - `exact`
   - `approx`
   - `directional`
4. Keep AI governance cards in incident-report tone.

## Rendering target
- `web/src/pages/index.astro` consumes all collections and renders placeholder v1 sections ready for design enhancement.
