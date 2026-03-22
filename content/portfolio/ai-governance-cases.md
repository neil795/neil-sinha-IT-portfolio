# AI Governance in Practice (Case Stubs)

> Internal working concept: "Rogue AI cases". Public copy should remain incident-report professional.

## Case 1 — Unsafe destructive action scope
- **Failure mode:** Automation path attempted high-risk repository mutation without sufficient scope constraints.
- **Potential blast radius:** Large-scale code deletion and production instability.
- **Guardrail added:** Explicit protected-branch constraints, approval gates, and proof-bundle checks before merge.
- **Risk reduction:** Prevented unreviewed destructive paths from reaching protected branches.

## Case 2 — Deployment workflow bypass risk
- **Failure mode:** Environment promotion attempted without complete governance metadata.
- **Potential blast radius:** Untraceable production deployment and rollback uncertainty.
- **Guardrail added:** Required PR evidence sections + issue linkage + proof artifact checks.
- **Risk reduction:** Promotion now blocked unless traceability and validation evidence exist.

## Case 3 — Financial arithmetic integrity drift
- **Failure mode:** Non-safe numeric handling in financial posting pathways.
- **Potential blast radius:** Ledger inconsistency and reconciliation failure.
- **Guardrail added:** Safe-integer minor-unit validation at API and domain layers + finance regression gates.
- **Risk reduction:** Invalid postings rejected before persistence; CI catches regression scenarios.
