# 06 — Pipeline, extraction, precedence, money

BASELINE refs: Vol. 2 ch. 2.5–2.8; Vol. 4 RF01–RF34.

## Pipeline phases (state machine per document and per field)

| # | Phase | Technique | Gate |
|---|---|---|---|
| 1 | Ingest: PEC/email/upload; hash, dedupe, Source + Event; **mask PII** | Deterministic adapters; regex+checksum; NER | — |
| 2 | Classify (schedule, conditions, endorsement, receipt, statement, fleet register, bail certificate, DIP, cancellation PEC, other) | Header rules + LLM | **H1**: random sample + all low-confidence |
| 3 | Extract to schema (40–60 core fields per package), JSON-schema-constrained | OCR + LLM; double extraction later | critical fields go to review anyway |
| 4 | Normalize | **Code**, unit-tested | — |
| 5 | Link (endorsement→parent version, receipt→contract→title) + precedence | Deterministic keys + fuzzy match; orphan list | **H2** for non-unique links / ambiguous cases |
| 6 | Reconcile money (prototype, fake data) | Deterministic + exception queue | **H3** |
| 7 | Rule validation | Code | **H4** closed |
| 8 | Export | File generators | — |
| 9 | Provenance & retention | Event log | — |

Three cross-cutting rules: (1) **confidence orders the queue, never accepts**; (2) **no value without a verified citation**; (3) **the model sees masked text only**.

## Extraction

- Structured inputs (CBI RH, Excel/CSV libri matricola & statements, FatturaPA XML) → deterministic parsers (RF03). Never an LLM.
- Long conditions (>50 pages): segment by article; completeness check index vs extracts (RF09); resolve cross-references in a separate pass (RF12).
- Limits tables are the most fragile part → structured `Limit` objects (RF10) + human review of the table.
- Output must validate against the Zod schema 100%; auto-retry on invalid JSON. Empty field ⇒ explicit typed null, never a guess.
- Preserve typographic emphasis (bold/small caps → art. 166 CAP signal) and "operative only if called" coverages (RF13) where possible.
- Check amounts in digits vs. in words ("novecentocinquantamila/00").

### Known failure modes (all have a code mitigation; see BASELINE table of 20)

Invented value for an empty field · truncation on long docs · merged/split table headers · Italian number formats · scoperto vs franchigia confusion · wrong-document hierarchy · cross-reference loss · wrong endorsement link · poor scans · missing grounding · invalid JSON · English/mixed wording · vendor drift · very long tables (fleets) · lost bold · "operative if requested" covers · defined terms · absent referenced docs · digits≠words.

### Italian conventions to handle in code (RF14)

`1.000.000,00` (EN docs use the opposite convention: choose parser per doc and language) · `€`, `€.`, `euro`, `EUR` · `€ 1 mln` · dates `gg/mm/aaaa`, `1.1.2009`, textual · **"dalle ore 24.00 del 31/03/2016" = 00:00 of next day** · rates per mille · `10% min. € 2.500` · `1/360 per giornata` · deductibles in hours/days/months.

## Precedence engine (the "which value is valid today" component)

Three passes: (1) read the contract's own precedence clause → rank order for that contract, else default; (2) for each field with multiple candidates mark one *current*, others *superseded*, record the rule; (3) send non-deterministic cases to a human. Each decision = an Event referencing both conflicting Evidences; the operator sees both pages and the rule.

Rules R1–R10 (BASELINE 2.5): typed beats pre-printed; tender spec (capitolato) replaces insurer text; particular beats general; declared multi-level hierarchy; "most favourable to policyholder" residual clause (**always human**); endorsements valid from *effective* date (not issue date) for what they vary; delegation clause; mandatory law (check; consequence to human); law fills gaps; Security Schedule wins for dates/codes in MRC slips.

Default order when contract is silent: mandatory law > delegation/coinsurance > special pacts/typed > latest endorsement by effective date > schedule > catalogue particular conditions > general conditions > default law. **DIP never enters the hierarchy** (mismatch = anomaly flag).

**Always to a human (11 cases):** "most favourable"; double trigger (cyber w/ claims-made RC); sub-limit "part of/in addition to" undeclared; cascading deductibles; asset-to-item assignment with residual "Contents"; retroactive/unsigned endorsements; tender spec that "voids" pre-print but cites articles; English master wording with Italian local policy; who is the "drafter" (art. 1370); unstated edition of general conditions; claims-made succession & known facts.

Coinsurance has three variants (pro quota; delegate liable for all; joint liability) → enumerated field, not text.

The golden-set labels carry source level and state (current / superseded by endorsement n + date) so the "state correct for modified fields" metric directly tests this engine.

## Money prototype (fake data only)

Flow: client pays **gross** to the broker's **separate account** (CBI RH is the reliable bank source) → broker issues receipt → remits to insurer (often net of commission) → insurer pays commission on net premium with **11.5% withholding** (the engine must not flag the ~€420 gap on €3,650 as an error) → fees via SDI e-invoice.

Engine steps: expected rows (gross due, remittance due, commission after withholding, retrocession) → deterministic match (policy/title no. in payment reference, amount, counterparty, date window) → approximate match & **proposed split** of a combined transfer (n:m; proposals never close an item) → exceptions to H3 (amount diff, title not found, non-technical item, withholding mismatch, deadline exceeded, unknown collection regime).

Rules that move amounts: premium tax by line (e.g. 22.25% fire/RC/theft; 2.5% accident; ...) · withholding 11.5% · **art. 118 CAP discharge**: payment to broker frees the client only with an insurer-approved agreement; read the regime from `CollectionAgreement` valid at payment date, never infer; unknown ⇒ exception + "non-discharging" · art. 1901 c.c. suspension from day 15 · **10-day rule** (art. 63 Reg. IVASS 40/2018): measure **both** intervals (receipt→separate-account credit; collection→remittance) until a lawyer picks the binding one · cash ≤ €750/yr per contract (non-motor non-life).

## Export / gestionale integration

Channel preference: documented API > supported file import (**default**) > files shaped like insurer flows > direct DB (written authorization only) > RPA (last resort; no RPA on insurer portals). Ask ≥2–3 gestionale vendors **in writing** for: import specs, export rights, a test environment (Data Act switching rules are leverage). Output adapter writes validated data only, logs what/when/which file, and stores gestionale keys as external IDs of the logical contract. Candidates in Italy: IAssicur (Diagramma), PASS Broker Evolution (RGI), Assieasy, Sintesi Broker; small brokers use entry-level tools or Excel. Nothing public is independently verified.
