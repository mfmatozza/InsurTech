# Agent rules

Keep this repo small, clean and organized.

- Fewest files possible. Edit existing files before creating new ones; delete what you replace.
- Put things where `ANALYSIS/04-stack-and-repo.md` says. No stray files in the root; no scratch scripts or notes committed.
- One language per job: TypeScript for app and infra, Python only in `eval/`.
- No new dependency if stdlib/platform/existing deps do it.
- Never commit real documents or personal data. Only synthetic or public fixtures. Never put document text in logs, tests or tickets.
- `BASELINE/` is read-only source material. `ANALYSIS/` holds decisions: log real ones in `ANALYSIS/DECISIONS.md`.
- Don't add docs, abstractions or config "for later".
