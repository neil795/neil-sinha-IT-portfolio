# Projects

## Chat-ERP (AI-Powered ERP)
**Role:** Founder & Engineer

### Problem
SMBs need ERP capability without heavyweight enterprise software overhead.

### Intervention
Designed a chat-first ERP model with deterministic command execution and governance-first engineering.

### Architecture highlights
- Idempotent command layer + state-machine-driven workflows
- Postgres with row-level security (RLS)
- Outbox pattern for reliable event publication
- Feature flags and staged delivery discipline
- Merge-only-on-green CI with issue/PR proof governance

### Impact themes
- Faster delivery through agent-assisted implementation
- Lower regression risk via strict governance and test gates
- Clear auditability and safer operational behavior

## Platform Acceleration Program (ANZ)

### Problem
Slow pipelines, high manual validation, and production defects in multi-service delivery.

### Intervention
Built context-aware CI optimization, mock API validation layers, and Kafka automation.

### Measured impact
- Build duration: 18m -> 3m
- Production bugs: -37%
- Manual validation: -60%

## CI Reliability Program (Humanforce)

### Problem
Legacy CI instability and long automated test cycles.

### Intervention
Migrated CI stack, re-architected test infrastructure, and hardened DR workflows.

### Measured impact
- Build failures: -40%
- Test runtime: 1 day -> 1 hour
- DR objective: RTO 8h -> 4h
