# OpenClaw Agentic AI Engineering Best Practices

A practical, reusable engineering operating system for agent-assisted software delivery.

This repository distills battle-tested patterns from real-world execution into portable templates and playbooks you can apply to any product team.

## What you'll find here

- **Issue → PR governance** with enforceable quality gates
- **Playbook-first execution** routing by domain (frontend/backend/sre/release/security)
- **Proof-bundle delivery discipline** (PR URL + SHA + validation evidence)
- **Staged release management** (build once, promote many, rollback-ready)
- **Refactor slicing strategy** for large/high-risk changes
- **Operational health check patterns** for ongoing reliability

## Repository layout

- `docs/playbooks/` — domain playbooks and task intake routing
- `templates/` — PR/issue templates and workflow examples
- `frameworks/` — governance and delivery frameworks
- `case-studies/` — anonymized implementation examples
- `content/portfolio/` — structured content seed (About, Experience, Projects, Web Foundry, AI governance, CTA)

## Core principles

1. **Plan before code** for non-trivial tasks.
2. **Proof over claims** — never mark done without evidence.
3. **Small safe slices** for large refactors.
4. **Automate governance** so quality doesn’t depend on memory.
5. **Keep rollback paths explicit** on every meaningful change.

## Getting started

1. Copy the templates you need into your repo.
2. Adopt the `docs/playbooks/00-task-intake-routing.md` workflow.
3. Wire CI checks from `.github/workflows/` examples.
4. Require proof-bundle comments for issue-linked PRs.

## License

MIT
