# Escalation Map

## Ownership
- Service owner: Neil Sinha
- Operations owner: Web Foundry

## Escalation path
1. Alert detected by scheduled synthetic check.
2. Open incident issue with severity label.
3. Trigger rollback if customer-impacting.
4. Post-incident review within 24h for SEV-1/SEV-2.

## Alert policy
- Probe interval: 30 minutes
- Alert threshold: single failed check opens investigation; two consecutive failures = incident.
- Error budget target: 99.5% monthly availability.
