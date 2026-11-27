# ANALYSIS — technical guide for the two devs

Derived from `BASELINE/` (Volumes 0, 1, 2, 4 + the MVP brief "Incarico MVP"). The BASELINE is in Italian and is the source of truth for domain questions; this folder is the engineering translation of it: what to build, what to worry about, what to decide.

Labels used in the BASELINE and kept here: **FACT** (sourced), **OPINION** (author's proposal), **ESTIMATE** (unverified number). Anything in this folder marked **[PROPOSAL]** is *our* suggestion, not from BASELINE, and is open to challenge.

## One-paragraph product

A document→data engine for Italian insurance brokers. Receive broker documents (policy schedules, receipts/"quietanze", endorsements/"appendici", conditions, commission statements), classify them, extract critical fields **with a verified page+quote citation for each**, link endorsements to the right policy and decide which value is currently valid, have a human confirm every critical field, then export to the broker's management system (gestionale) as an import file. The machine proposes; a person decides. Deadline for the MVP: end of January 2027, field trial Feb–Mar 2027.

## Reading order

| # | File | Read when |
|---|------|-----------|
| 01 | [product-and-scope.md](01-product-and-scope.md) | First. What is in/out, acceptance thresholds |
| 02 | [architecture.md](02-architecture.md) | Before writing any code |
| 03 | [aws-infra.md](03-aws-infra.md) | Before touching cloud. Minimal-infra plan |
| 04 | [stack-and-repo.md](04-stack-and-repo.md) | Before `git init`-ing the real app. TS/React/Tailwind/Python split |
| 05 | [data-model.md](05-data-model.md) | The most expensive thing to change later |
| 06 | [pipeline-and-extraction.md](06-pipeline-and-extraction.md) | Building the engine |
| 07 | [privacy-and-compliance.md](07-privacy-and-compliance.md) | **Before the first real document** |
| 08 | [security-and-audit.md](08-security-and-audit.md) | Alongside 03 |
| 09 | [vendors-and-evaluation.md](09-vendors-and-evaluation.md) | Choosing OCR/LLM; golden set; metrics |
| 10 | [roadmap.md](10-roadmap.md) | Planning |
| 11 | [risks-and-open-questions.md](11-risks-and-open-questions.md) | Weekly review |
| 12 | [glossary.md](12-glossary.md) | When an Italian term doesn't land |
| — | [DECISIONS.md](DECISIONS.md) | Log every real decision here |

## The ten sentences to remember

1. One canonical policy schema shared by all processes; every value is an object (value, original text, evidence, confidence, review state, valid-from/to, recorded-at), not a column.
2. No value without a citation that string-matches the OCR text of that page. Otherwise discard.
3. Critical fields (sums insured, limits, deductibles, dates, premiums) are always confirmed by a human, one by one. Confidence orders the queue; it never auto-accepts.
4. Deterministic code does normalization, arithmetic, and consistency checks. Never the LLM.
5. LLMs and OCR sit behind our own interface; vendors swappable in days.
6. Masked text only leaves our perimeter. A masked document is still personal data.
7. Everything is EU-hosted; vendors sign a DPA and don't train on our data.
8. Tenant (broker) id on every table from day one.
9. Append-only audit log of who checked what, seeing what.
10. We feed the broker's gestionale (file import); we don't replace it, and no output reaches end clients in this phase.
