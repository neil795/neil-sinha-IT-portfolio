# Rollback Playbook

## Trigger conditions
- Failed production smoke checks
- Material regression in Lighthouse/a11y baseline
- Broken critical navigation or CTA path

## Rollback procedure
1. Identify last known-good SHA from successful release workflow run.
2. Re-run `Release Pipeline` using workflow_dispatch with that SHA checked out.
3. Promote previous immutable artifact (`web-dist-<sha>`) to production.
4. Post incident note and follow-up issue with root-cause summary.

## Verification
- Homepage loads (HTTP 200)
- Primary anchors navigate correctly
- Lighthouse accessibility score >= 0.90

## Communication template
- Impact window
- User-facing symptoms
- Mitigation applied (rollback SHA)
- Next preventive action
