# Neil Sinha — Platform + AI Engineering Portfolio

🔗 **Live site:** [neil.webfoundryprivatelimited.com](https://neil.webfoundryprivatelimited.com)

A scroll-driven engineering portfolio built with Astro, deployed on Cloudflare Pages, and maintained with governed AI-assisted delivery.

<img width="1612" height="889" alt="image" src="https://github.com/user-attachments/assets/e4b0c30d-becf-48bc-bf98-87a1ce171559" />

## What this repo shows

This is both a portfolio site and a working example of OpenClaw governance in practice.

- Issue-first workflow with proof-bundle delivery
- Playbook-routed execution by domain
- CI quality gates with merge discipline
- Human review on meaningful decisions

## Tech stack

- **Framework:** Astro 5 (static output)
- **Hosting:** Cloudflare Pages
- **Design:** Dark-mode SPA with scroll-driven narrative

## Repository layout

| Directory | Purpose |
|-----------|---------|
| `web/` | Astro portfolio site (source + build) |
| `docs/playbooks/` | Domain playbooks and task intake routing |
| `templates/` | PR/issue templates and workflow examples |
| `frameworks/` | Governance and delivery frameworks |
| `case-studies/` | Anonymized implementation examples |
| `content/portfolio/` | Structured content seed |

## OpenClaw Governance Framework

This repo follows a lightweight, evidence-first governance model so AI-assisted changes stay safe, reviewable, and reproducible.

### Governance principles
- **Issue-first delivery:** every meaningful change starts from a tracked issue.
- **Playbook-routed execution:** implementation follows domain playbooks before code changes.
- **Proof-bundle completion:** each PR includes validation evidence, risk notes, and rollback intent.
- **Merge discipline:** no direct merges; required checks and review gates must pass first.

### Core principles
- **Traceability:** issue ↔ PR ↔ commit ↔ validation artifacts are always linked.
- **Small, auditable changes:** prefer narrow PRs over broad refactors.
- **Safety by default:** call out security/data impact even for docs and infra updates.
- **Operational readiness:** release and monitoring posture are part of done, not afterthoughts.

### Getting started
1. Open or select a scoped issue with clear acceptance criteria.
2. Confirm area label and route through the relevant playbook in `docs/playbooks/`.
3. Implement in a focused branch with evidence-backed PR description sections.
4. Run required validation locally/CI and post proof artifacts on the linked issue.
5. Merge only after checks are green and governance gates are satisfied.

For the complete framework, see:
- `frameworks/proof-bundle.md`
- `docs/playbooks/00-task-intake-routing.md`
- `docs/ci/governance-quickstart.md`

## License

MIT
