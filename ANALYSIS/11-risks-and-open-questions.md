# 11 — Risks and open questions

## Risks (BASELINE 4.11, condensed)

| # | Risk | Type | Mitigation | Watch |
|---|---|---|---|---|
| 1 | Test-client agreements signed after Nov | Data | Look for 3–6 clients in parallel; declare quality on DEV-R only if needed | No signed agreement mid-Nov |
| 2 | No senior dev from Dec | Team | Bridge architecture meanwhile | — |
| 3 | No broker available for pilot | Market | Free pilot; service agreement | <2 written commitments |
| 4 | Leverage <30% on both branches | Thesis | Stop rule | Few hours in automated processes |
| 5 | Review time drops via over-trust | Measure | Injected errors, composite outcome, 10% threshold | Corrected fields fall without errors falling |
| 6 | Leverage overstated by partial coverage | Measure | Full baseline incl. P08 | High share of hours out of scope |
| 7 | Poor extraction on limit tables and scans | Tech | `Limit` object, table review, upload QC | Limit F1 below threshold on DEV-R |
| 8 | Endorsement↔policy matching has no benchmark | Tech | H2, orphan list, dedicated metric | Orphans rising |
| 9 | Masking leaks personal data | Legal+Tech | 9-step procedure; measure | Leaks above lawyer's threshold |
| 10 | Contamination (models saw public texts) | Measure | Test on non-public docs; compare public vs private | Large gap |
| 11 | Silent vendor drift | Tech | Pinned versions; weekly SYN rerun | SYN changes with no code change |
| 12 | Gestionale format dependency | Tech/market | Written specs at step 0; Data Act leverage | No spec by G2 |
| 13 | Unwritten internship terms | Legal | Nothing from that into the MVP | — |
| 14 | Audit read as wider distribution than planned | Legal | Opinion before pilot | Brokers asking to "see the gaps" |
| 15 | Advantage buyable by competitors | Strategy | Schema, rules, golden set, measured quality | Gestionali announcing similar features |

Most probable *real-world* failure (BASELINE): not a spectacular error but a **silent** one: a scanned endorsement without a clear policy number is attached to the wrong policy or left orphaned, and the sum insured never changes. Put it first in the synthetic bench.

## Open technical questions (for the independent technician)

1. Does the canonical model hold on 30–50 real packages without free text? Are the 8 cardinalities right?
2. Are the RF acceptance criteria verifiable and not gameable?
3. Are set sizes/statistics adequate; can the time study reuse TEST-R?
4. Are timelines realistic for one senior dev + a part-time expert?
5. Do masking and citation verification coexist (see 02)?
6. How transferable is ExtractBench to Italian policies?

## Open questions for the lawyer (in urgency order)

1. What can be done/shown before the enablement (distribution registration), incl. the pilot with real brokers?
2. Privacy roles vs test clients/brokers; DPAs; DPIA.
3. Masked policies: anonymous or pseudonymized (EDPB 02/2026 draft)?
4. Acceptable masking leak threshold; residual health data.
5. Which technical artifacts are "documentation" under art. 67 Reg. IVASS 40/2018 and for how long.
6. Format of the validation log to count as proof of diligence.
7. Binding interval for the 10-day rule.
8. Insurers' extraction reservations, status of tender specs, copy retention.
9. May time studies and injected errors be run at real brokers, with what reviewer consent?

## Open dev decisions (10, from BASELINE 4.9; record answers in DECISIONS.md)

1. Canonical schema & taxonomy (start from 31 entities, reduce). 2. Bitemporal persistence. 3. Cloud provider. 4. OCR/extraction vendors (≥2 measured). 5. LLM strategy & routing (generator ≠ extractor family). 6. Double extraction (Should for MVP; **mandatory before any H4 output**). 7. Immutable log mechanism. 8. Masking toolkit. 9. Review UI (own build vs low-code like Streamlit/Appsmith; BASELINE leans own because the log must be provable). 10. Export channel/format.

Not ours to decide silently: **which use-case to consolidate first** and **the product form** (e.g. becoming the title register for brokers with minimal gestionali). Only guarantee: the canonical model must stand alone as a register.

## Unknowns that bound every number

Real accuracy on Italian SME policies · hours per policy at a real SME broker · share of scans · which gestionale SME brokers actually use · whether brokers will pay.
