# Contributing

This repo follows playbook-first delivery and proof-based completion.

## Required workflow
1. Open or pick an issue with exactly one `area:*` label.
2. Read `docs/playbooks/00-task-intake-routing.md` and routed playbook before coding.
3. Work in a feature branch (`feat/<issue>-<slug>`).
4. Open PR with required sections:
   - Summary
   - Why
   - Tests
   - Risk & Rollback
   - Security & Data
5. Add `Closes #<issue>` in PR body.
6. Post issue proof-bundle comment containing:
   - PR URL
   - full 40-char commit SHA
   - validation summary

## Quality rule
Do not mark done without evidence.

## Governance quick references
- `docs/ci/governance-quickstart.md`
- `docs/ci/governance-validation-plan.md`
- `docs/ci/governance-validation-results.md`
