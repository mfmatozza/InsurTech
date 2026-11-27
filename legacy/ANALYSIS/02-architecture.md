# 02 — Architecture

## Shape: one modular monolith, one database

BASELINE: "one platform around one data model, not apps swapping files." Every step writes to the same Postgres; only the *read* step calls external vendors, always after masking and always through our interface.

```
 upload / email poller
        │
        ▼
 [Ingest] → hash, dedupe, store original (immutable) ─────────┐
        │                                                     │
 [Classify] (rules on headers + LLM)          H1 sample/low-confidence review
        │
 [Mask PII] → masked text only ──► [Read] OCR + LLM (EU, via our interface)
        │                                   │
        │                      [Verify citations] string-match vs OCR text
        │                                   │
 [Normalize] (code)  →  [Consistency checks] (code)
        │
 [Link + Precedence engine] ─────────────────  H2 ambiguous links → human
        │
 [Review UI]  PDF + highlighted quote, per-field confirm ──── H4 (closed)
        │
 [Export] CSV/XLS in broker's import layout + write log
        └── everything appends to the immutable event log
```

Four layers (BASELINE 2.13): ingestion & persistence · intelligence (only layer that talks to models) · orchestration (state machines, precedence, reconciliation, gate queues) · interface. Cross-cutting: masking, encryption/keys in EU, tenant/role access, retention, test bench.

## Components and ownership

| Component | Buy / Build | Notes |
|---|---|---|
| OCR + layout | Buy (or OSS Docling) | Pick by measurement on our docs, ≥2 vendors |
| LLM extraction | Buy via API | Behind `ModelGateway` interface; JSON-schema-constrained output; ≥2 vendors wired |
| Data model | **Build** | Core value. Section 05 |
| Citation verification | **Build** | Deterministic; nobody guarantees it (word-level grounding ≤46% in public benchmark) |
| Normalizers (IT number/date formats) | **Build** | Pure functions + unit tests |
| Consistency rules | **Build** | sublimit ≤ limit; gross = net + tax; digits = words; dates coherent |
| Precedence/linking engine | **Build** | 10 rules + 11 always-to-human cases (BASELINE 2.5) |
| Review UI + audit log | **Build** | Where the human control is proven |
| PII masking | Build thin layer over OSS | regex+checksum win over NER |
| Export adapters | **Build** | CSV/XLS per gestionale |
| Job queue | Use Postgres | No orchestrator in MVP |
| Auth, storage, hosting | Buy (AWS) | Section 03 |

## Gates as *states*, not warnings

H1 classification (sample + low confidence) · H2 non-unique links/ambiguous precedence · H3 accounting exceptions · H4 anything client-facing (closed). Implement as a document/field **state machine**: code paths that would advance past an open gate must not exist. Add a regression test that asserts this (RNF02).

## Cross-requirement traps (design these together)

1. **Masking × citation check.** The LLM sees masked text, so the quote it returns contains placeholders. Keep a per-document substitution map and map quotes back to original OCR text before string-matching, or checks fail on every name.
2. **Anonymization perturbation × golden set.** If we generalize/perturb amounts for test docs, the ground-truth label must be perturbed identically and record it.
3. **Immutable log × deletion rights.** The log stores references and hashes, not personal content, so it can prove a check happened while content is deleted on schedule.

## Principles → code rules

- Prompts, schemas, rules, model IDs/params = versioned code; store exact model id + params + raw OCR text per run (reproducibility, RNF04).
- Pin vendor model versions; weekly job reruns the synthetic set to catch silent drift (RNF15).
- Never send a structured file (CSV/Excel/FatturaPA/CBI) to an LLM: parse deterministically.
- Prefer a deterministic pipeline over "agentic" loops; agentic coding agents cost 2–3× per page in the public benchmark and aren't needed.
- A document is `classified` while its fields may be `validated`: state is **per document and per field**; time-in-state is the measurement input for the leverage study.

## What to keep out (YAGNI list)

Kubernetes, Kafka/Airflow/Temporal, vector DB, microservices, multi-cloud, own OCR, GraphQL, event-sourcing framework, CRM, client portal. Revisit only with a measured reason, recorded in DECISIONS.md.
