# Reliability Baseline

## SLO
- Availability target: **99.5%** monthly
- Error budget: **216 minutes / 30 days**

## Synthetic checks
- Scheduled uptime probe every 30 minutes (`.github/workflows/sre-monitoring.yml`)
- Manual on-demand probe via workflow_dispatch

## Monitoring baseline
- Uptime HTTP status check (>=200 and <400)
- Lighthouse accessibility gate in PR CI (`Web Quality Gates` workflow)

## Response policy
- One failed probe: investigate
- Two consecutive failures: declare incident and execute runbook
