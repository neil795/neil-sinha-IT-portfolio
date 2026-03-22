# Governance Quickstart

This repo enforces Chat-ERP style governance checks on every pull request.

## Checks enforced
1. **Issue link required** (`pr-issue-link.yml`)
   - PR must include an issue reference (e.g. `Closes #123`)
   - PR body must include sections: Summary, Why, Tests, Risk & Rollback, Security & Data

2. **Area scope guardrails** (`ci-guardrails.yml`)
   - Linked issue must have exactly one `area:*` label
   - Changed files must remain inside allowlisted prefixes for that area

3. **Proof-bundle comment check** (`ci-guardrails.yml`)
   - Linked issue must contain a comment with:
     - PR URL
     - 40-char commit SHA
     - validation summary

## Contributor workflow example
1. Create issue with exactly one area label.
2. Open branch: `feat/<issue>-<slug>`.
3. Open PR and include `Closes #<issue>`.
4. Add issue proof comment with PR URL + full SHA + validation.
5. Merge only after all checks pass.

## Evidence references
- Validation plan: `docs/ci/governance-validation-plan.md`
- Executed fail/pass runs: `docs/ci/governance-validation-results.md`
