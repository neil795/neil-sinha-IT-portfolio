# Container Pipeline

Workflow: `.github/workflows/container-image.yml`

## Behavior
- Pull requests: validate image build only (no push)
- Main branch: build and push to GHCR
- Manual dispatch: build and push to GHCR

## Registry
- Image: `ghcr.io/neil795/neil-sinha-it-portfolio`
- Tags:
  - `sha-<fullsha>`
  - `latest` (main only)

## Traceability
Each image tag includes commit SHA and workflow summary output for audit linkage.
