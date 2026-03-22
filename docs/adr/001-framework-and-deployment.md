# ADR-001: Portfolio Framework, Motion, and Deployment Strategy

- Status: Accepted
- Date: 2026-03-22
- Issue: #2

## Context
We are building a premium, narrative-first engineering portfolio site that must:

- feel high-end and credible for enterprise technical audiences,
- prioritize measurable outcomes over visual gimmicks,
- remain highly performant and accessible,
- stay maintainable by a small team,
- demonstrate governance discipline similar to Chat-ERP.

## Decision

### Framework/runtime
- **Primary:** Astro + TypeScript + Content Collections + selective React islands
- **Fallback:** Next.js App Router (only if strong application-style requirements emerge)

### Motion stack
- **Default:** CSS transitions + WAAPI for standard reveal interactions
- **Escalation:** GSAP ScrollTrigger for a maximum of 2 flagship scroll sequences

### Deployment
- **Primary:** Cloudflare Pages static deployment
- **Fallback:** Vercel static deployment
- **Nginx container:** deferred (non-MVP; only for self-hosting/policy-specific requirements)

### Content model
- Typed content collections (MDX/JSON/YAML) with schema validation
- Metric confidence tags (`exact`, `approx`, `directional`)

## Decision matrix (weighted)

| Criterion | Weight | Astro | Next.js | Remix |
|---|---:|---:|---:|---:|
| Performance for content site | 0.25 | 5 | 4 | 3 |
| Narrative motion capability | 0.25 | 5 | 5 | 4 |
| Maintainability (small team) | 0.20 | 5 | 4 | 3 |
| Deploy simplicity | 0.15 | 5 | 4 | 3 |
| Cost predictability | 0.15 | 5 | 4 | 4 |
| **Weighted score** | 1.00 | **5.0** | **4.25** | **3.4** |

## Consequences

### Positive
- Smaller JS payload and better default performance posture.
- Content-first workflow with schema-validated source files in Git.
- Strong compatibility with narrative sections and selective motion.

### Negative
- Smaller ecosystem than Next.js for edge cases.
- If app-like features grow, we may need Astro SSR or migration planning.

## Risk controls
- Keep advanced motion limited to 2 sections.
- Define and enforce CWV and accessibility thresholds in CI.
- Maintain reduced-motion and keyboard-first interaction support.

## Launch guardrails (go/no-go)
- LCP <= 2.5s
- INP <= 200ms
- CLS <= 0.1
- Accessibility baseline >= agreed CI threshold
- Reduced-motion mode preserves complete information flow

## Rollback / escape hatch
- If Astro implementation complexity exceeds threshold for required interactivity:
  1. Freeze feature additions,
  2. evaluate migration to Next.js App Router fallback,
  3. port content schema first, then section-by-section UI.

## References
- Issue #2 (architecture decision)
- Parent epic #1
- Related planning: #3, #4, #5
