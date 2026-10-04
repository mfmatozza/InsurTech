# 01 — Product and scope

## The problem in one example ("Alfa Meccanica")

SME manufacturer, 7 policies with 4 insurers, ~30 documents/year arriving as portal flows, email PDFs, Excel, stamped scans, 40–150 page conditions. Operators retype into the gestionale and make silent errors:

- a stamp covers a figure: 850,000 read as 650,000
- *scoperto* 10% min €2,500 recorded as a €2,500 *franchigia* (different thing)
- an endorsement adding a warehouse is never applied → warehouse looks uninsured
- the same limit appears in 3 documents and only one is valid

The engine removes reading/transcription and leaves **review**, with proof of what was reviewed.

## Six steps (user's view)

1. **Receive** — manual upload + a test mailbox (email/PEC); dedupe by hash; remember origin and time.
2. **Recognize** type: schedule, conditions, endorsement, receipt, commission statement, other.
3. **Read** fields; each with page + quote. Quote not found in the doc → value discarded.
4. **Link** endorsements/receipts to the right policy; for values appearing in several documents say which is valid today and by which rule.
5. **Review** by a person: proposed value next to the page with the quote highlighted. Critical fields confirmed individually; every decision logged.
6. **Deliver** validated data to the gestionale via import file; log what was written.

## Fields (MVP)

Bold = critical = always human-confirmed.

| Document | Fields |
|---|---|
| Policy schedule | insurer & agency; policy number(s) (several possible); line of business; policyholder & insured; locations; **start/end dates**; instalment frequency; tacit renewal & cancellation notice; **net premium, taxes, gross per instalment**; **sums insured per item**; **limits (massimali)**; **deductibles/excess (franchigie, scoperti) with min/max** |
| Receipt (quietanza) | number; policy ref; period; **amount**; payment date; instalment. Often Excel/flow → parse with code, AI only for PDFs |
| Endorsement (appendice) | number; policy; **effective date**; change type; **modified fields with new value**; premium delta. Each modified field = new *version* of that field with its own date |
| Conditions | covers; **exclusions**; **sub-limits**; precedence clause. Last stage; exclusions always decided by a person |
| Commission statement | insurer; period; policy; premium; rate; commission; withholding. Fake data only, for the money prototype |

Per field the engine returns: normalized value, original text, page + quote, confidence, review state.

Limits are **structured objects** (type, amount, basis per-claim/per-year, relation "part of"/"in addition to" the main limit), never text.

## Build order (each stage crosses all six steps)

1. Policy schedules → 2. Receipts → 3. Endorsements + linking → 4. Long conditions/exclusions/sub-limits.
Starting lines: multi-risk/fire and general liability (RC). In parallel, **money-side prototype on fake data only**: what client pays, what goes to insurer, broker commission, matching one bank transfer to multiple instalments.

## Out of scope (hard)

- Advice/analysis to end clients (insurance advice needs a registration we don't have) — **gate H4 exists but stays closed**.
- Client-facing chatbot.
- Life policies and health data: engine must **recognize and block** them.
- Replacing the gestionale. No direct bank or insurer-portal connections (no RPA on insurer portals).
- CRM, client portal, claims, predictive models, home-made OCR.
- Training any model on client documents.

## Acceptance thresholds (provisional; recalibrate on first real docs)

Measured on a held-out real set devs never see. **Never** on synthetic data.

| Metric | Threshold |
|---|---|
| Fields correct, native PDFs | ≥95%, no critical field <90% |
| Fields correct, readable scans | ≥90%, no critical field <85% |
| Citations that really exist in the doc | ≥98% |
| Empty fields left empty (no invention) | ≥98% |
| Endorsements linked to correct policy | ≥98% |
| Deliberately injected errors the reviewer misses | ≤10% on critical fields |
| Review time vs manual | ≥30% less |
| Labour hours/policy measured at two brokers | <30% reduction → stop & rethink; >40% → thesis holds |

Always report **n documents** next to every number (90% on 40 docs ≈ anywhere in 77–96%). → See `09`.

## Dev implications

- The deliverable is a **measured quality number per release**, not a feature list. Build the evaluation harness *first* (see 09).
- The bottleneck isn't code; it's hand-labelled docs (280–540 expert hours for the test set). Start the document/partner agreements now.
- Whenever an Italian insurance term is unclear: ask the domain owner (the brief says all domain questions go through them). Don't guess; wrong guesses become schema.
