# Incident Runbook (Portfolio Site)

## Severity model
- **SEV-1**: Site unavailable or critical CTA broken
- **SEV-2**: Major degradation (latency, broken key sections)
- **SEV-3**: Minor defects with workaround

## First-response checklist
1. Confirm synthetic uptime failure (`SRE Monitoring Baseline` workflow).
2. Verify current deployment SHA and latest successful release run.
3. Assess blast radius (homepage, nav, CTA, accessibility).
4. If SEV-1/SEV-2: execute rollback from `docs/release/rollback-playbook.md`.

## Escalation
- Primary owner: Neil Sinha
- Secondary fallback: Web Foundry on-call rotation
- Communication channel: GitHub issue + release thread

## Recovery verification
- HTTP 200 on homepage
- Anchored navigation functional
- Lighthouse accessibility >= 0.90
