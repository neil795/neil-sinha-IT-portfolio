# Release Validation Evidence

Issue: #11

## 1) Preview evidence on PR
- PR run (preview artifact + PR comment):
  - https://github.com/neil795/neil-sinha-IT-portfolio/actions/runs/23403960108
- Outcome:
  - `build-artifact` passed
  - `preview-pr-comment` posted preview evidence link and artifact name

## 2) Production promotion dry run
- Manual dispatch run (`target=production`):
  - https://github.com/neil795/neil-sinha-IT-portfolio/actions/runs/23403980634
- Outcome:
  - `build-artifact` passed
  - `promote-production` executed with immutable artifact metadata (`web-dist-<sha>`)

## 3) Rollback path verification
- Rollback instructions source:
  - `docs/release/rollback-playbook.md`
- Verified path includes:
  - last-known-good SHA recovery
  - artifact-based re-promotion
  - post-rollback verification checklist

## Notes
- Production environment approvals can be tightened further via repository environment protection rules.
