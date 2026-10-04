# 05 — Data model

The brief calls this "the most expensive decision to change later". Full proposal = 31 entities across 5 areas (BASELINE Vol. 2 ch. 2.4). You may shrink it; an independent technician should review it. This file is the working summary.

## Six principles

1. **Bitemporal**: every fact has *valid time* (business: when an endorsement takes effect) and *record time* (when we learned it). Answers "what was valid on June 15" and "what did we know on June 15". An October endorsement effective July must not erase history.
2. **Provenance per field**: document, page, quoted extract, and the model/rule version that produced it.
3. **Immutable events**: a change is a new row/event, never an overwrite.
4. **Original + normalized value**: keep "€ 1.500.000,00" next to `1500000.00 EUR`. Absence is typed: *missing*, *not applicable*, *illegible*, *refers to external document*.
5. **`tenant_id` on every custody table** (tenant = broker). From day one.
6. **Custody vs derived** data separated in the schema: documents + client identifiers (legal basis, scheduled deletion) vs. taxonomies/anonymized stats. Shared public general conditions live in *derived*.

## MVP core (10 objects, from the brief)

| Object | Meaning |
|---|---|
| Broker (tenant) | Owner of all data; basis of separation |
| Client | Contracting/insured company |
| Contract (logical policy) | Stable internal ID + many external IDs (insurer, agency, gestionale) |
| Document | Immutable original: hash, origin, pages, OCR text |
| Evidence | Page + quote (+ bbox) a value came from |
| Coverage (Garanzia) | What's covered, per item/location |
| Limit | massimale, sublimit, franchigia, scoperto: type, amount, unit, basis, relation |
| Variation | Effect of an endorsement/adjustment on one or more fields |
| Title & receipt | The instalment due and proof of payment |
| Review | Who checked which field, decision, when, seeing what |

Field value = object: `value, original_text, evidence, confidence, review_state, valid_from, valid_to, recorded_at` (+ model/rule version).

## Full-model areas (for orientation)

- **Subjects**: Subject (+roles: policyholder/insured/beneficiary), Group, Counterparty (insurer, Lloyd's, agency; IVASS/RUI codes), CollectionAgreement (art. 118 yes/no — decides whether a payment to the broker discharges the client).
- **Contract**: InsuranceProgram → LogicalContract → ExternalIdentifier(1..n), Version (issue/renewal/endorsement; a single version chain), Split (coinsurance), RiskObject, Coverage → Limit, Clause (with cross-references graph).
- **Document & evidence**: Document → Extraction → Evidence → Validation.
- **Money**: Title, Collection, Remittance, Commission, BankMovement, StatementLine, E-invoice (SDI), Reconciliation (n:m).
- **Claims**: Claim, ClaimMovement (post-MVP).
- **Cross-cutting**: Event (immutable log), Source (adapter + version).

## Eight critical cardinalities (check these first with the reviewer)

| # | Relation | Card. | Trap |
|---|---|---|---|
| 1 | Version → previous Version | 1:1 chain, state per field | An endorsement changes only some fields; the rest stay from the parent |
| 2 | LogicalContract → ExternalIdentifier | 1:n | Coinsurance: several policy numbers; policy number isn't stable ("n. …" until issued) |
| 3 | Document ↔ LogicalContract | n:m | Same general conditions (code+edition) serve many contracts of many clients → live in *derived*, not custody |
| 4 | Clause → Clause (cross-ref) | n:m graph | "In partial derogation of art. 1.4" |
| 5 | Limit ↔ Coverage | n:m via SharedLimit | Aggregate limits across coverages/contracts |
| 6 | Title ↔ BankMovement | n:m | One transfer pays many instalments; one instalment paid in tranches |
| 7 | Program → LogicalContract | 1:n master/local | Intl programs; **not verified**, not needed for SME MVP |
| 8 | Tenant → all custody entities | 1:n, no exceptions | GDPR separation |

## Limit object (the finest part)

`type` ∈ {massimale, sottolimite, limite di indennizzo, franchigia fissa, franchigia temporale, scoperto %, minimo, massimo, aggregato} · `value+unit` (€, %, ‰, days, hours) · `basis` (per claim / year / series / location / person) · `relation` ("part of" | "in addition to" | **undeclared → human**) · `evidence`.

Example: multirisk "capannone sum insured €1.0M" + "scoperto 10% min €2,500" = two Limit rows on the same Coverage, never a €2,500 franchigia.

## What to decide (and who)

- Granularity of the coverage taxonomy, extensible per line **without free-text fields** (if it degenerates into free text, structuring loses its value).
- Bitemporal implementation: plain tables with `valid_from/valid_to/recorded_at/superseded_at` vs event store with projections. **[PROPOSAL]** start with plain tables + append-only event log; a bitemporal extension is overkill.
- Intl programs (DIC/DIL, master/local): defer.
- Minimum: write the SME-relevant subset first (CollectionAgreement and ExternalIdentifier from day one — three insurers have three regimes, agency policies have two numbers; skip UMR/international).

## SME-specific notes

Vehicle fleet ("libro matricola") = RiskObject table with inclusion/exclusion dates, premium pro-rata 1/360 per day. Goods-in-transit (ramo 7) is "large risk" by definition → compute the large-risk flag per line. Employees' accident policies contain names/ages/maybe health data → block or mask upstream.
