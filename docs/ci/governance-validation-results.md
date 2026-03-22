# Governance CI Validation Results (Issue #9)

This document records executed fail/pass scenarios for governance workflows.

## Scope
Validated checks:
- `require-issue-link`
- `area-label-scope-check`
- `proof-artifact-comment-check`

## Scenario Matrix

### 1) Missing/invalid proof bundle comment
- Expected: `proof-artifact-comment-check` fails
- Fail evidence:
  - Run: https://github.com/neil795/neil-sinha-IT-portfolio/actions/runs/23402024054
  - Failure: no issue comment matched PR URL + full SHA + validation summary
- Pass evidence (after proof bundle comment update + rerun):
  - Run: https://github.com/neil795/neil-sinha-IT-portfolio/actions/runs/23402024054
  - Status: pass

### 2) Missing strict issue-link phrasing
- Expected: `require-issue-link` fails
- Fail evidence:
  - Run: https://github.com/neil795/neil-sinha-IT-portfolio/actions/runs/23402854579
  - Failure: PR body did not match required issue-link pattern for check parser
- Pass evidence (after PR body update to include `Issue #9`):
  - Run: https://github.com/neil795/neil-sinha-IT-portfolio/actions/runs/23402880109
  - Status: pass

### 3) Area scope violation
- Expected: `area-label-scope-check` fails
- Fail evidence:
  - Run: https://github.com/neil795/neil-sinha-IT-portfolio/actions/runs/23403276905
  - Failure: `area:frontend` PR included disallowed file `.gitignore`
- Pass evidence (after removing disallowed path from PR):
  - Run: https://github.com/neil795/neil-sinha-IT-portfolio/actions/runs/23403298424
  - Status: pass

## Outcome
Governance checks were validated against real fail/pass transitions and are enforcing expected behavior on PR metadata, issue linkage, scope discipline, and proof evidence integrity.
