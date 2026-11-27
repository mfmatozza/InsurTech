# 08 — Security and audit

BASELINE refs: Vol. 4 RNF01–RNF17; Vol. 2 ch. 2.11 ("checklist for the CTO").

## Requirements as an engineering checklist

| Req | Do |
|---|---|
| RNF01 immutable log | Append-only `events` table; DB trigger rejects UPDATE/DELETE (and logs the attempt); each row stores `prev_hash` + `hash`; `verify-chain` CLI; periodically export chain heads to S3 Object Lock. Content = references + hashes, never personal text |
| RNF02 gates as states | State machine; regression test: no code path moves data past an open gate |
| RNF03 bitemporal | Two time axes on every fact; test with a retroactive endorsement |
| RNF04 reproducible | Version prompts/schemas/rules in git; store raw OCR text, exact model id and params per run; rerun a release on the same dataset and get the same metrics within measured variance |
| RNF05–06 masking | See 07; "masked" event required before any external call (100%) |
| RNF07 vendors | Contract + DPA + verified endpoint region **before activation** |
| RNF08 no real docs outside custody | Log/ticket scans, CI fixtures only synthetic |
| RNF09 learning archive | Test: no path writes custody data to the derived/learning store |
| RNF10 tenant isolation | `tenant_id` everywhere; Postgres RLS; two-tenant isolation test; public general conditions only in derived area |
| RNF11 access | Cognito groups for roles with least privilege; MFA; every plaintext access logged with a reason |
| RNF12 encryption | At rest + in transit, KMS keys in EU, no copies on personal devices |
| RNF13 training | No operator/validator permission without logged training |
| RNF14 retention | Per-class policies configured; deletion verified incl. at vendors |
| RNF15 model abstraction | Swap a vendor for a task without touching domain code; weekly synthetic rerun detects silent drift |
| RNF16 | Header/signature per tenant in config (don't hard-code who the distributor is) — should |
| RNF17 | Report cost per page/package per release — should |

Latency/availability SLOs: not specified in BASELINE; the MVP constraint is **human review time**, not machine speed.

## Review log (what "controlled" must mean)

Per field: field + version, machine proposal, **evidence shown**, decision (verified/modified/rejected), final value, mandatory reason if modified/rejected, control actions (e.g. opened citation, active time), author, role, time. "Approved" flag per document is **not** acceptable (interview question 5). No bulk-confirm for critical fields (RF25). Instrument: active time (pauses >60s excluded), citations opened, fields changed, PDF scroll (RF27). Measurement mode: same UI without proposals; and with 5–10% deliberately wrong proposals logged (RF28) to detect over-trust (automation bias).

## Threats worth a thought

- **Prompt injection through documents** (a PDF containing instructions). Mitigation: constrained JSON schema output, no tool use in extraction, human review of critical fields, citation verification, no model access to anything but the masked text.
- Leaking real docs via debugging: scrub logs; no document text in error messages/Sentry.
- Vendor drift/silent upgrades → pinned versions.
- Over-trust: injected-error metric + composite outcome (time + final accuracy).
- Key/custody: separate custodian role; break-glass access logged.
- Backups hold personal data too → same retention and encryption story.
- Dev laptops: real data never on them.

## Incident readiness

Be able to notify the controller within time that allows their 72h notification (art. 33): have a one-page runbook (who, what logs, how to scope a tenant's exposure) before pilot.
