# Production Promotion Checklist

## Preconditions
- [ ] PR governance checks green
- [ ] Web quality gates green (Lighthouse + accessibility)
- [ ] Release artifact built for commit SHA

## Approval gate
- [ ] Production environment approval granted
- [ ] Rollback SHA identified

## Promotion steps
- [ ] Trigger `Release Pipeline` with `target=production`
- [ ] Confirm artifact name `web-dist-<sha>` matches intended commit
- [ ] Validate homepage and CTA path post-promotion

## Post-release
- [ ] Record run URL in issue proof comment
- [ ] Record rollback-ready SHA in release notes
