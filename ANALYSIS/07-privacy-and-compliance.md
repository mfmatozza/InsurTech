# 07 — Privacy and compliance

> Not legal advice. BASELINE says every item here must be **verified with a privacy lawyer before the first real document**. Treat this file as a checklist of what to ask and what to build, not as a conclusion.

## Why this is the hardest non-technical constraint

Strongest architectural constraints come from **GDPR and insurance-distribution retention rules**, not from the AI Act. In an SME, company data is often personal data (the legal rep is the owner and the policyholder). A masked document is **not anonymous**: address, activity, CAP and sums isolate the record → treat as **pseudonymized = personal data** until a lawyer says otherwise (RNF06).

## Roles (GDPR)

- Data controller = broker (or client); we are likely **processor** (art. 28 DPA); AWS/OCR/LLM vendors are **sub-processors**.
- **Reuse trap**: deciding purposes/means of a *new* processing (e.g. building a dataset to improve the product) makes us a controller → needs its own legal basis. So "improve the model with client docs" is off by default. We don't train on client documents (brief) and the "learning archive" only gets anonymized outputs through a documented pipeline (RNF09).

## Must-do before real data

| # | Item | Notes |
|---|---|---|
| 1 | Written agreements with test clients/partner brokers | Without them TEST-R doesn't exist by March 2027 |
| 2 | Lawyer opinion: roles, anonymized vs pseudonymized (EDPB draft guidelines 02/2026, consultation to 30 Oct 2026), acceptable masking leak rate, health-data residue | Questions in BASELINE 4.11, ranked by urgency |
| 3 | **DPIA** (art. 35) | Probably required: innovative tech, possible special categories, worker data |
| 4 | Art. 30 record of processing | Applies (250-employee exemption doesn't cover non-occasional processing) |
| 5 | DPA with every vendor, signed *before* first document | EU processing, **no training**, zero/min retention in contract (not just marketing page), sub-processor list, incident notice compatible with 72h (art. 33) |
| 6 | Transfer assessment | Even with EU processing, check extra-EU group access |
| 7 | Retention policy per class | See below |
| 8 | AI Act internal system sheet | Why this is not high-risk; no scoring on life/health; no client chatbot without disclosure; documented AI literacy (art. 4) |
| 9 | Data custodian ≠ developer | Holds test docs and keys |
| 10 | Mandatory training logged for every operator/validator (RNF13) | |

Other regimes: DORA no (SME intermediaries); NIS2 probably no (verify D.Lgs. 138/2024).

## Masking (nine steps, RNF05)

1. OCR in EU with layout/coordinates.
2. Regex **with validity checks** for fiscal code, VAT no., IBAN, plates (checks outrank the NER model).
3. Two Italian NER recognizers combined for recall.
4. Per-document dictionary: names from the front page propagated to all variants ("Rossi S.p.A.", "ROSSI SPA", "la Contraente").
5. Detect/redact signatures, stamps, logos, images.
6. Strip PDF metadata, hidden text layers, annotations, embedded attachments; **rasterize and re-OCR** masked pages (text under a black rectangle is often still extractable).
7. Generalize quasi-identifiers: address→province, turnover/sums→bands or perturbed with known factor (record it in labels), ATECO→2 digits.
8. 100% human review of pages before TEST-R entry, signed checklist.
9. Re-identification test by an uninvolved person.

Tool caveats (BASELINE): Presidio's Italian fiscal-code recognizer is silently ignored with English settings and (per a public issue) doesn't reject wrong check characters; open-source Italian PII models (rizzo-pii-0.3B, Italian_NER_XXL_v2, GLiNER_PII_ITA) only have author-reported metrics → **measure leaks per category on DEV-R ourselves**. If using AWS Comprehend PII, verify Italian language support first (not assumed).

Excluded upstream: **health data** (art. 9) and **judicial data** (art. 10) — block at classification (RF06): accident/health policies, claims with injuries; **life/TCM policies** also out of scope (AML duties apply only to life). Example trap: an SME's executives' accident policy contains names, ages, possibly health → don't send to any model.

## Retention: three tracks (RNF14)

| Class | Contents | Duration |
|---|---|---|
| Distribution file | originals, disclosures, needs, signed report, validation log | Relationship + **≥5 years** after end (art. 67 Reg. IVASS 40/2018) |
| Technical intermediates | OCR text, unvalidated extractions, prompts, drafts | Short auto-delete (length with lawyer), except what proves validation |
| Market documents copies | public insurer conditions | "Only as long as necessary" (art. 70-quater L. 633/1941); keep derived data + source reference |

Open: which intermediates count as "documentation" under art. 67.
Third-party storage is allowed if orderly, secure, integral, confidential and promptly accessible (art. 67 c.5).

## IP / scraping caveats

- Insurers' legal notices may reserve text/data-mining; reports disagree on Allianz (A2 says prohibited w/o written authorization; A5 found none; A6 treats as excluded) → **follow the strictest**: study but don't reproduce; write synthetic wordings ourselves (own text + LMA clauses). Public tender specs (capitolati) are the best real wording but their "official acts" status is unverified.
- Verify terms of use before downloading public general conditions into the library.

## Regulatory boundary: product behaviour

Anything that looks like **advice or recommendation to clients** requires an enabled person (registered intermediary). Keep H4 closed, no client output, flag requests from brokers to "see the gaps" (risk 14). Get legal opinion on what the *pilot* with real brokers may show.

## Engineering rules that implement the above

- No real document text in tests, CI, tickets, chat, logs (RNF08) → periodic log scan for DEV-R/TEST-R strings.
- Tenant isolation test with two tenants; separate custody/derived stores; architecture test forbidding custody→learning writes.
- Access to plaintext documents requires a logged reason (RNF11).
- Deletion must be verifiable, including at vendors.
- Audit log stores references and hashes, not personal content.
- Keep masking→original map in EU, restricted, short-lived.
