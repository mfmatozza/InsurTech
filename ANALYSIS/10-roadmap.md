# 10 — Roadmap

Brief timeline: plan → end Oct 2026; MVP end Jan 2027; field trial Feb–Mar 2027. Stage advance = **criterion met, not calendar**. Dates below are orientation.

| Stage | Deliver | Done when | When |
|---|---|---|---|
| **A. Plan** | Work plan, effort/team estimate, justified tech choices, comments on data model | Approved by the domain owner | End Oct |
| **B. Foundations** | Data model, archive, masking, review log, bench on synthetic + public docs | Bench runs on every change and produces metrics | Mid Nov |
| **C. First full path** | Policy schedules + receipts, intake → test gestionale, review UI | First numbers on real dev docs | Mid Dec |
| **D. Full MVP** | Endorsements + linking, conditions, money prototype, first measurement on the test set | Measurement report vs thresholds | End Jan |
| **E. Broker trial** | Engine used by 2 brokers for 4–6 weeks; hours measured | Final report | Feb–Mar |

## What the domain owner provides (and when)

Now: library, synthetic docs, public general conditions (after terms check). End Oct: real masked docs from two partner brokers under written agreements. Nov: their presence in a broker to time manual work. Also: an insurance expert to label test docs, and a **data custodian ≠ developer**.

Documents needed: now 300–1,000 synthetic + 20–30 public conditions · end Oct 10 packages + 20–30 receipts + 5–10 statements (real formats) · mid Nov 20–30 packages (DEV-R) · mid Dec 60–100 packages (TEST-R, sealed). Total ≈ 110–140 real packages from 10–20 clients, ≥5 insurers, ≥1/3 scans, ≥1/3 with endorsements. If real docs arrive after mid-Nov, C and D slip and we say so.

## Suggested sequencing for two developers **[PROPOSAL]**

**Week 0–2 (Stage A/B start)** — prerequisites in parallel with code:
- Dev 1: repo skeleton, CI, infra (CDK) for 03 minimal set, Postgres schema v0 (tenant, document, event log w/ hash chain, field value bitemporal), S3/KMS, Cognito.
- Dev 2: `core` package: Zod schema for MVP fields, Italian normalizers + tests, consistency rules, citation checker, `ModelGateway` interface + fake implementation; start synthetic generator.
- Both: send written requests to 2–3 gestionale vendors (import specs, test env); line up legal opinion & DPAs; draft DPIA input; start the document partner agreements.

**Stage B–C**: ingestion (upload + IMAP poller), hash/dedupe, classification, masking (regex/checksum first, NER after leak measurement), OCR vendor A and B behind the same interface, extraction for policy schedules, review UI (PDF + highlight, per-field confirm, log), CSV export to test gestionale. Eval harness in Python reading exported results; first metrics.

**Stage D**: receipts (deterministic first), endorsements + versions + precedence engine + H2 queue, long conditions, money prototype, report generator, review-time instrumentation.

**Stage E**: trial support, incident runbook, final measurement.

## Gates in the BASELINE sequence (Vol. 4.7, abbreviated)

G0 (prereqs, legal/DPA, schema review) → G1 (foundations, SYN executable in CI, masking measured) → G2 (two vendors measured on DEV-R; review UI tested) → G3 (leverage measurement; **stop rule**: leverage <30% on both branches ⇒ stop & rethink) → G4 (import succeeded in a gestionale test environment).

## Checkpoints to hit

- Mid-Nov: any signed data agreement? any senior developer secured? (BASELINE risks 1–2)
- Every release auto-produces the metrics report.
- Bi-weekly demo (real or synthetic), 30-min weekly sync, decisions in DECISIONS.md.
- Put confidentiality and IP ownership **in writing before code**, including the collaboration terms.
